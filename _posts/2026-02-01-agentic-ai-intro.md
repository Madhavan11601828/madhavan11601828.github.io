---
title: "Getting Started with Agentic AI: Building Your First Agent"
author: "Mangena Venu Madhavan"
date: 2026-02-01
tags: [Agentic AI, LLM, LangChain, Automation, Python]
categories: [agentic-ai]
---

## Key Takeaways

- An AI agent is not a chatbot — it autonomously decides which tools to call, in what order, across multiple reasoning steps without human intervention between each step.
- The **ReAct pattern** (Reason + Act) is the backbone of most LangChain agents: the LLM alternates between thinking out loud and executing a tool until it reaches a final answer.
- Agents have six core components — LLM, Tools, Memory, Planner, Environment, and Evaluator — and understanding each one is what separates a toy demo from a production system.
- **Memory matters**: without it, every agent turn starts from scratch; with `ConversationBufferMemory`, the agent accumulates context across the full session.
- You will build two working agents by the end: a minimal 15-line agent and a full production-ready agent with tools, memory, error handling, cost controls, and safety guardrails.
- Real-world agents are not magic — they fail on ambiguous inputs, token limits, and tool errors. Knowing the five most common pitfalls will save you hours of debugging.
- Deploying an agent safely requires logging every tool call, capping token spend per session, and putting a human-in-the-loop for high-stakes decisions.

---

## Who This Is For & Prerequisites

**Audience:** Intermediate Python developers who understand what an LLM is and want to move beyond simple chatbots into autonomous, tool-using AI systems.

**You should know:**
- Python (functions, classes, error handling)
- What an LLM is and how prompt-response works
- Basic familiarity with APIs and JSON

**You do not need:**
- Prior LangChain experience
- MLOps or cloud infrastructure knowledge

**Environment setup:**

```bash
# Python 3.9+ required
pip install langchain langchain-openai python-dotenv

# Verify installation
python -c "import langchain; print(langchain.__version__)"
```

**API key:** You need an OpenAI API key. Create a `.env` file:

```
OPENAI_API_KEY=your-key-here
```

**Expected runtime cost:** Running the examples in this article costs approximately $0.02–$0.05 in OpenAI API credits.

---

## What You Will Build

By the end of this tutorial, you will have a running agent that:

- **Accepts** a natural language query: *"Find GPU prices for 2025 and 2026, calculate the % change, and tell me if it's a good time to buy."*
- **Autonomously searches** the web for current and historical prices
- **Calculates** the percentage change using a math tool
- **Reflects** on whether it has enough information
- **Returns** a structured recommendation

**Expected output:**

```
> Entering new AgentExecutor chain...
Thought: I need to find GPU prices for 2026 first.
Action: WebSearch | Input: "RTX 4090 price 2026"
Observation: RTX 4090: $1,599

Thought: Now I need 2025 prices.
Action: WebSearch | Input: "RTX 4090 price 2025"
Observation: RTX 4090: $1,799

Thought: I have both prices. Let me calculate % change.
Action: Calculator | Input: "(1599 - 1799) / 1799 * 100"
Observation: -11.12

Final Answer: The RTX 4090 dropped 11.1% from $1,799 (2025) to $1,599 (2026).
Prices are trending down — this is a reasonable time to buy.
```

---

## 1. Problem Statement

Imagine you ask a traditional AI chatbot: *"Find the latest GPU prices, compare them to last month, and tell me the best time to buy."*

A standard LLM will either hallucinate an answer or tell you it cannot browse the internet. It gives you one response and stops. You then have to manually search prices, copy data into a spreadsheet, run the comparison yourself, and form your own conclusion.

This is the core limitation of **passive AI** — it responds but does not act.

In real enterprise settings, this distinction is massive. At Infosys, I built agents that autonomously validated purchase orders for Delek — checking 15+ business rules, querying ERP systems, and flagging anomalies without human intervention. What used to take 3 hours of manual review was done in under 2 minutes.

The shift from "AI that answers" to "AI that acts" is what this article is about.

---

## 2. Concept Explained Simply

Think of a regular LLM like a very smart consultant locked in a room with no phone and no internet. You slide a question under the door. They write an answer from memory and slide it back — and that is it. They can advise but cannot go do the work for you.

An **AI Agent** is that same consultant, but now they have a phone, a whiteboard, and a set of tools they can actually use. They read your request, plan a series of steps, execute each step, check the result, and decide whether to keep going or stop.

The key insight: **an agent is not a single LLM call. It is a loop.** The LLM is called repeatedly, each time deciding what to do next based on what it has already done.

### The Four Core Properties

| Property | What it means | Analogy |
|---|---|---|
| **Perception** | Receives input from the environment | Reading your question |
| **Reasoning** | Decides what action to take next | Planning the next step |
| **Action** | Executes a tool or API call | Making a phone call |
| **Reflection** | Evaluates the result and updates the plan | Checking if the answer is correct |

This loop of **Perception → Reasoning → Action → Reflection** repeats until the goal is achieved or a stopping condition is reached.

---

## 3. Core Components of an Autonomous Agent

Every production agent is built from the same six building blocks:

### 3.1 LLM / Reasoning Core

The brain. The LLM reads the current state (query + memory + tool results so far) and decides the next action. GPT-4 and Claude 3 Opus are the most reliable choices for complex multi-step reasoning. Smaller models (GPT-3.5, Llama 3) are cheaper but more error-prone in tool selection.

```python
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    model="gpt-4",
    temperature=0,      # Must be 0 for deterministic tool use
    max_tokens=1000
)
```

### 3.2 Tools / Tool Wrappers

Functions the agent can call to interact with the real world. Each tool has a name, a function, and a description that the LLM reads to decide when to use it.

```python
from langchain.tools import Tool

tools = [
    Tool(
        name="WebSearch",
        func=search_web,
        description="Searches the web for current data. Input: a specific search query."
    ),
    Tool(
        name="Calculator",
        func=calculate,
        description="Evaluates math expressions. Input: a valid expression like '(1599-1799)/1799*100'."
    )
]
```

> **Rule:** The description is the most important field. A poorly written description causes the wrong tool to be called or no tool to be called at all.

### 3.3 Memory

Keeps track of what has happened in the current session (short-term) or across sessions (long-term).

```python
from langchain.memory import ConversationBufferMemory

# Short-term: remembers within one session
memory = ConversationBufferMemory(
    memory_key="chat_history",
    return_messages=True
)

# Long-term: use a vector store (Chroma, Pinecone, FAISS)
# Retrieve relevant past context at the start of each session
```

![Agent Memory Architecture — short-term ConversationBuffer vs long-term Vector Store](/assets/images/agent-memory-architecture.png)

### 3.4 Planner / Executor

The strategy the agent uses to decide which tools to call and in what order. In LangChain, this is the **AgentType**:

| Agent Type | Best for |
|---|---|
| `ZERO_SHOT_REACT_DESCRIPTION` | Single-turn tasks, batch processing |
| `CHAT_CONVERSATIONAL_REACT_DESCRIPTION` | Multi-turn dialogue with memory |
| `OPENAI_FUNCTIONS` | OpenAI models with native function calling |
| `PLAN_AND_SOLVE` | Complex tasks requiring full upfront planning |

### 3.5 Environment / Connectors

Where the agent operates — APIs, databases, file systems, browsers. Every tool is a connector to part of the environment.

### 3.6 Evaluation and Monitoring

How you know the agent is working correctly. Every tool call, thought, and final answer should be logged for review. `verbose=True` is your first monitoring layer.

---

## 4. Design Considerations and Trade-offs

Before building, understand the key decisions that affect every agentic system:

| Decision | Trade-off |
|---|---|
| **More tools** | More capability, but harder to debug and more likely to pick the wrong tool |
| **Larger LLM** | Better reasoning, higher cost and latency |
| **Longer memory** | More context, higher token usage per call |
| **More iterations** | Can solve harder problems, higher cost and risk of loops |
| **Low temperature** | Deterministic tool use, less creative responses |

**When NOT to use an agent:**
- The task can be done in a single LLM call
- The task has no need to call external tools
- Latency requirements are under 500ms (agents are slow — 3–15 seconds is typical)
- You need 100% reproducible outputs (agents have inherent non-determinism)

**When to use an agent:**
- The task requires multiple steps or tools
- The task requires real-time or external data
- The outcome cannot be determined in advance (the agent needs to decide)

---

## 5. Hands-On Tutorial: Build a LangChain Agent

### Step 1 — Environment Setup

```python
import os
from dotenv import load_dotenv

load_dotenv()  # Loads OPENAI_API_KEY from .env file
```

### Step 2 — Start Minimal (Always)

Build the simplest possible agent first. One tool, no memory, short query. Confirm it works before adding complexity.

```python
from langchain.agents import initialize_agent, AgentType
from langchain.tools import Tool
from langchain_openai import ChatOpenAI

# Minimal tool
def calculate(expression: str) -> str:
    try:
        return str(eval(expression, {"__builtins__": {}}))
    except Exception as e:
        return f"Error: {e}"

llm = ChatOpenAI(model="gpt-4", temperature=0)

minimal_agent = initialize_agent(
    tools=[Tool(name="Calculator", func=calculate,
                description="Evaluates math. Input: a valid expression.")],
    llm=llm,
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose=True,
    max_iterations=5
)

# Test minimal agent
print(minimal_agent.run("What is 15% of 4800?"))
# Expected: 720.0
```

### Step 3 — Add More Tools

Once the minimal agent works, add the web search tool:

```python
def search_web(query: str) -> str:
    """Simulated search — replace with SerpAPI or Tavily in production."""
    mock_data = {
        "RTX 4090 price 2026": "RTX 4090: $1,599 | RTX 4080: $1,199 | RTX 4070: $599",
        "RTX 4090 price 2025": "RTX 4090: $1,799 | RTX 4080: $1,399 | RTX 4070: $699",
    }
    for key in mock_data:
        if key.lower() in query.lower():
            return mock_data[key]
    return "No results found for this query."

tools = [
    Tool(
        name="WebSearch",
        func=search_web,
        description="Searches the web for current prices, news, or data. "
                    "Input: a specific search query like 'RTX 4090 price 2026'."
    ),
    Tool(
        name="Calculator",
        func=calculate,
        description="Evaluates mathematical expressions. "
                    "Input: a valid Python math expression like '(1599-1799)/1799*100'."
    )
]
```

### Step 4 — Add Memory

```python
from langchain.memory import ConversationBufferMemory

memory = ConversationBufferMemory(
    memory_key="chat_history",
    return_messages=True
)
```

### Step 5 — Build the Full Agent

```python
agent = initialize_agent(
    tools=tools,
    llm=llm,
    agent=AgentType.CHAT_CONVERSATIONAL_REACT_DESCRIPTION,
    memory=memory,
    verbose=True,
    max_iterations=10,
    early_stopping_method="generate"
)
```

### Step 6 — Run and Observe

```python
response = agent.run(
    "Search for RTX 4090 GPU prices in 2026 and 2025. "
    "Calculate the percentage price change. "
    "Tell me if prices went up or down and whether it's a good time to buy."
)
print(response)
```

**Full expected output (verbose=True):**

```
> Entering new AgentExecutor chain...
Thought: I need current and historical GPU prices. Let me search for 2026 prices first.
Action: WebSearch
Action Input: RTX 4090 price 2026
Observation: RTX 4090: $1,599 | RTX 4080: $1,199 | RTX 4070: $599

Thought: Now I need 2025 prices to compare.
Action: WebSearch
Action Input: RTX 4090 price 2025
Observation: RTX 4090: $1,799 | RTX 4080: $1,399 | RTX 4070: $699

Thought: I have both prices. Let me calculate the percentage change for RTX 4090.
Action: Calculator
Action Input: (1599 - 1799) / 1799 * 100
Observation: -11.117287...

Thought: I now have all the information needed to give a complete answer.
Final Answer: The RTX 4090 dropped by approximately 11.1% from $1,799 (2025)
to $1,599 (2026). GPU prices are trending downward year-over-year.
This is a reasonable time to buy, especially if prices continue declining.
> Finished chain.
```

### Agent Execution Flow

![Agent Execution Loop — how a query flows through the LLM brain, tools, and reflection to produce a final answer](/assets/images/agent-execution-loop.png)

---

## 6. Real-World Use Case

### Purchase Order Validation Agent (Infosys × Delek)

**Business Problem:**
Delek, an energy company, processed hundreds of purchase orders daily. Each PO required validation against 15+ business rules — checking vendor approval, budget availability, compliance flags, and contract terms. Four analysts spent 3+ hours per day on this with frequent errors.

**Agent Solution:**

```python
# Simplified version of the production architecture

tools = [
    Tool(name="CheckVendorStatus",
         func=check_vendor_in_erp,
         description="Checks if vendor is approved in ERP. Input: vendor_id (string)"),

    Tool(name="ValidateBudget",
         func=check_budget_availability,
         description="Validates budget availability. Input: cost_center,amount"),

    Tool(name="CheckComplianceFlags",
         func=get_compliance_flags,
         description="Returns compliance/legal flags for a vendor. Input: vendor_id"),

    Tool(name="GetContractTerms",
         func=fetch_contract_terms,
         description="Retrieves active contract terms. Input: vendor_id,contract_id")
]

po_agent = initialize_agent(
    tools=tools,
    llm=llm,
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    max_iterations=20
)

def validate_purchase_order(po: dict) -> dict:
    query = f"""
    Validate this purchase order:
    PO Number: {po['po_number']}
    Vendor ID: {po['vendor_id']}
    Amount: ${po['amount']}
    Cost Center: {po['cost_center']}
    Contract ID: {po['contract_id']}

    Check all four: vendor status, budget, compliance flags, and contract terms.
    Return PASS or FAIL with specific reasons for each check.
    """
    result = po_agent.run(query)
    return {"po_number": po["po_number"], "verdict": result}
```

**Measurable results:**

| Metric | Manual | Agent |
|---|---|---|
| Validation time | 3 hours/day | < 2 minutes |
| Error rate | 8% | < 0.5% |
| Rules checked | 15 (sometimes skipped) | 15 (always, every PO) |
| Team capacity freed | — | Redeployed to analysis |

---

## 7. Debugging and Common Pitfalls

### Pitfall 1 — Vague Tool Descriptions

```python
# ❌ Agent will not know when to use this
Tool(name="Search", func=search, description="Searches things")

# ✅ Specific with input format guidance
Tool(name="WebSearch", func=search,
     description="Searches the web for current data. "
                 "Use for prices, news, or facts not in training data. "
                 "Input: specific query string like 'RTX 4090 price May 2026'")
```

### Pitfall 2 — No Iteration Limit

```python
# ❌ Can loop indefinitely
agent = initialize_agent(tools, llm)

# ✅ Always cap iterations
agent = initialize_agent(tools, llm, max_iterations=10,
                          early_stopping_method="generate")
```

### Pitfall 3 — Unhandled Tool Exceptions

```python
# ❌ Exception crashes the entire agent chain
def search_web(query):
    return requests.get(url).json()["results"]

# ✅ Return error strings so the agent can adapt
def search_web(query):
    try:
        return requests.get(url, timeout=5).json()["results"]
    except Exception as e:
        return f"Search unavailable: {e}. Try a different query."
```

### Pitfall 4 — High Temperature for Tool Use

```python
# ❌ Unpredictable tool selection
llm = ChatOpenAI(model="gpt-4", temperature=0.9)

# ✅ Deterministic for agents
llm = ChatOpenAI(model="gpt-4", temperature=0)
```

### Pitfall 5 — Destructive Tools Without Guards

```python
# ❌ Agent can delete records freely
Tool(name="DeleteRecord", func=db.delete,
     description="Deletes a database record")

# ✅ Log and require human approval for irreversible actions
def safe_delete(record_id: str) -> str:
    logger.warning(f"Delete requested: {record_id}")
    return f"Delete request logged for {record_id}. Awaiting human approval."
```

---

## 8. Testing and Evaluation

Test agents at three levels:

### Level 1 — Unit Test Each Tool

```python
import unittest

class TestCalculatorTool(unittest.TestCase):
    def test_basic_math(self):
        self.assertEqual(calculate("2 + 2"), "4")

    def test_percentage(self):
        result = float(calculate("(1599 - 1799) / 1799 * 100"))
        self.assertAlmostEqual(result, -11.12, places=1)

    def test_invalid_expression(self):
        result = calculate("drop table users")
        self.assertIn("Error", result)
```

### Level 2 — Integration Test the Agent

```python
def test_agent_price_comparison():
    response = agent.run(
        "Search RTX 4090 price 2026 and 2025. Calculate % change."
    )
    assert "%" in response or "percent" in response.lower()
    assert "1599" in response or "1,599" in response
    assert "dropped" in response.lower() or "decreased" in response.lower()
```

### Level 3 — Evaluation Checklist

Before promoting to production, verify:

```
✅ Correct tool called for each step
✅ Memory preserved across multi-turn queries
✅ Final answer addresses the original question
✅ Agent stops within max_iterations
✅ Tool errors handled gracefully
✅ Cost per run is within acceptable threshold
✅ Response time within SLA (typically < 15 seconds)
```

---

## 9. Production Considerations

### Logging Every Decision

```python
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("agent")

def logged_tool(func):
    def wrapper(input_str):
        logger.info(f"Tool called: {func.__name__} | Input: {input_str}")
        result = func(input_str)
        logger.info(f"Tool result: {result[:100]}")
        return result
    return wrapper

# Wrap each tool function
search_web = logged_tool(search_web)
calculate = logged_tool(calculate)
```

### Cost Monitoring

```python
from langchain.callbacks import get_openai_callback

with get_openai_callback() as cb:
    response = agent.run(query)
    print(f"Tokens used: {cb.total_tokens}")
    print(f"Cost: ${cb.total_cost:.4f}")
```

### Safe Production Wrapper

```python
def run_agent_safely(query: str, timeout_seconds: int = 30) -> str:
    import signal

    def timeout_handler(signum, frame):
        raise TimeoutError("Agent exceeded time limit")

    signal.signal(signal.SIGALRM, timeout_handler)
    signal.alarm(timeout_seconds)

    try:
        return agent.run(query)
    except TimeoutError:
        logger.error("Agent timed out")
        return "Request timed out. Please try a simpler query."
    except Exception as e:
        logger.error(f"Agent error: {e}")
        return "An error occurred. Please try again."
    finally:
        signal.alarm(0)
```

---

## 10. Safety, Ethics, and Governance

Agentic AI introduces risks that standard LLM applications do not have. Because agents take **real actions**, mistakes have real consequences.

### Input Validation

```python
def validate_query(query: str) -> bool:
    forbidden = ["delete", "drop table", "rm -rf", "format", "wipe"]
    return not any(word in query.lower() for word in forbidden)

if not validate_query(user_query):
    return "This query contains restricted keywords and cannot be processed."
```

### Human-in-the-Loop for High-Risk Actions

```python
HIGH_RISK_TOOLS = ["DeleteRecord", "SendEmail", "ExecutePayment"]

def requires_approval(tool_name: str, action_input: str) -> bool:
    if tool_name in HIGH_RISK_TOOLS:
        approval = input(f"Approve '{tool_name}' with input '{action_input}'? (yes/no): ")
        return approval.strip().lower() == "yes"
    return True
```

### Governance Checklist

```
Before deploying an agent to production:
✅ All tool calls are logged with timestamp, input, output
✅ Irreversible actions require human approval
✅ Input validation blocks known injection patterns
✅ Max iterations and timeouts are enforced
✅ Agent cannot access systems beyond its defined scope
✅ Regular audits of agent decision logs
✅ Clear escalation path when agent confidence is low
```

---

## 11. Interview Questions

### Q1: What is the difference between an LLM and an AI Agent?

**Answer:** An LLM is a stateless text predictor — input in, output out, done. An AI Agent wraps an LLM in a loop: it reasons, calls tools, observes results, and decides whether to continue. The key differences are **action** (agents call real tools), **state** (agents maintain memory), and **autonomy** (agents complete multi-step tasks without per-step human input).

### Q2: What is the ReAct pattern?

**Answer:** ReAct = **Reason + Act**. At each step the agent writes a **Thought** (reasoning), takes an **Action** (tool call), observes the **Observation** (result), then repeats. This trace makes agent behavior interpretable — you can read exactly why each decision was made, which is critical for debugging and auditing.

### Q3: How do you prevent an agent from running indefinitely?

**Answer:** Set `max_iterations` at initialisation and use `early_stopping_method="generate"` so the agent produces a best-effort answer when the limit is hit. In production also add timeout wrappers and cost monitoring alerts.

### Q4: How do you make an agent remember information across sessions?

**Answer:** `ConversationBufferMemory` only persists within one session. For cross-session memory, use a persistent vector store (Chroma, Pinecone, FAISS). Store conversation summaries as embeddings. At session start, retrieve relevant past context using semantic search and inject it into the agent's initial prompt.

### Q5: How would you test an AI agent before deploying to production?

**Answer:** Three levels — (1) unit test each tool independently with known inputs/outputs, (2) integration test the full agent with benchmark queries where you know the correct tool sequence and answer, (3) shadow mode — run agent in parallel with existing process, compare outputs, and switch only when accuracy meets threshold. Log everything for post-deployment auditing.

### Q6: What are the main safety risks of agentic AI?

**Answer:** The main risks are: **tool misuse** (agent calls a destructive tool incorrectly), **runaway loops** (agent gets confused and calls tools indefinitely), **prompt injection** (malicious content in tool results hijacks agent behaviour), and **scope creep** (agent accesses systems beyond its intended scope). Mitigations: input validation, max iterations, human-in-the-loop for high-risk actions, and strict tool permission scoping.

---

## 12. Further Reading and Resources

- [LangChain Agents Documentation](https://python.langchain.com/docs/modules/agents/)
- [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629) — the original paper
- [OpenAI Function Calling Guide](https://platform.openai.com/docs/guides/function-calling)
- [LangGraph — for complex multi-agent workflows](https://langchain-ai.github.io/langgraph/)
- [Tavily Search API — production-grade web search for agents](https://tavily.com)

---

## 13. Conclusion and Next Steps

You have now built a working AI agent that reasons across multiple steps, calls real tools, and maintains memory — the foundation of every production agentic system.

**What you learned:**
- The four properties of an agent: Perception, Reasoning, Action, Reflection
- The six components: LLM core, tools, memory, planner, environment, evaluation
- How to build from minimal to full agent in LangChain
- How to test, debug, monitor, and deploy agents safely

**Suggested exercises to extend this agent:**
1. Replace the mock search with a real API (Tavily or SerpAPI — both have free tiers)
2. Add a third tool — a database query function for your own data
3. Switch to LangGraph for a stateful, multi-turn agent with persistent sessions
4. Add the cost monitoring wrapper and log the cost of each query
5. Build a simple unit test suite for all tools

**Next article in this series:** Tool Calling Deep Dive — Building Custom Agent Tools with validation, error handling, and rate limiting.

---

**Author:** Mangena Venu Madhavan — AI/ML Developer | Generative AI Specialist
**Series:** Agentic AI — Article 1 of 12
**Published:** February 1, 2026
