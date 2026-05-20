# Hashnode Article Master Prompt
*Use this prompt every time you need to write a new article for any of the 9 pillars.*

---

## How to Use

1. Open the PUBLISHING_PLAN.md — find the article you want to write
2. Note the Level (B / I / A), Article number, and any "builds on" reference
3. Copy the prompt block for that level below
4. Replace all `[BRACKETED]` values
5. Send to Claude (or any AI assistant)

---

## STRICT RULES — APPLY TO EVERY ARTICLE REGARDLESS OF LEVEL

```
1. NEVER mention any real organization, company, client, or employer name.
   Use generic labels only: "a financial services firm", "a large enterprise client",
   "an energy sector project", "a healthcare automation use case".
   This is a hard security and confidentiality requirement.

2. SEO title must be under 60 characters.
   SEO description must be under 150 characters.

3. Every code block must be complete and runnable — no pseudocode, no "..." shortcuts.
   Include pip install commands and a .env setup wherever API keys are needed.

4. Do not add code comments unless the WHY is non-obvious. Never write multi-line comment blocks.

5. All images must be described as markdown image placeholders:
   ![Descriptive alt text](/assets/images/filename.png)
   Suggest 1–2 images maximum per article with a description of what each should show.
   I will create and upload the actual images separately.

6. No mention of specific employers, clients, or project names from my work history.

7. Tone must match the Level:
   Beginner   = conversational, every term explained, no assumed knowledge of this topic
   Intermediate = professional, references earlier articles in the series, skips basics
   Advanced   = precise, uses correct terminology, assumes the full pillar foundation
```

---

---

# PROMPT A — BEGINNER LEVEL

*Use for Articles marked B in PUBLISHING_PLAN.md*
*Reader has zero prior knowledge of this specific topic. Explain every term. No jargon without definition.*

```
You are helping me write a technical article for my Hashnode blog (venumadhavan.hashnode.dev).
I am an AI/ML Developer with 5+ years of experience in Python, Machine Learning, Generative AI,
and Agentic AI. I write structured, practical articles for developers learning AI from the ground up.

ARTICLE DETAILS
---------------
Pillar / Series : [e.g. Python Programming | Machine Learning | Agentic AI]
Topic           : [e.g. "Python Basics: Variables, Data Types, and Your First Script"]
Article number  : [e.g. Article 1 of 8 in this series]
Level           : Beginner
Builds on       : [None — OR — e.g. "Pillar 1 Articles 1–3: Python basics, control flow, data structures"]
Goal            : A complete beginner should finish this article and immediately be able to try the concept themselves

STRICT RULES
------------
- NEVER mention any real organization, company, client, or employer name
- SEO title under 60 characters, SEO description under 150 characters
- All code blocks complete and runnable — no pseudocode or "..." shortcuts
- No code comments unless the WHY is non-obvious
- Images as markdown placeholders only — I upload separately
- Tone: conversational, friendly, every term explained on first use

ARTICLE STRUCTURE — BEGINNER
------------------------------

## Key Takeaways
- 4–6 bullet points
- Each one is a concrete thing the reader will be able to DO after reading
- Written as outcomes: "You will be able to..." or "You will build..."

---

## Who This Is For & Prerequisites
- One sentence describing the target reader
- What they need to already know (keep this minimal — 2–3 things max)
- What they absolutely do NOT need to know
- pip install block (if applicable)
- Expected cost if any paid API is used

---

## What You Will Build
- 3–4 bullet points describing the exact end result
- A code block showing the expected terminal output or final result

---

## Concept Simply
- A non-technical analogy (1 paragraph — something from everyday life)
- A plain English definition (1–2 sentences, no jargon)
- A simple table: "Without this vs With this" OR key properties with plain descriptions

---

## Core Components
- Every building block the reader needs, explained one at a time
- Each component: what it is, why it exists, one short code snippet
- Use sub-headers (### Component 1, ### Component 2, etc.)
- Include 1 image placeholder if an architecture or concept diagram would help

---

## Hands-on Tutorial
- Start with the absolute minimal working version (fewest lines possible)
- Add one capability per step — never more than one new concept per step
- Each step: what we are adding → the code → the expected output
- End with a working complete version the reader can copy and run

---

## Common Mistakes
- 3 mistakes beginners make on this topic
- Each mistake: name → wrong code → right code → one-line explanation of why

---

## Interview Q&A
- 4 questions an interviewer might ask about this topic
- Each question: full answer in 2–4 sentences (not a one-liner)
- Cover: what it is, why it matters, a trade-off, a real use case

---

## Resources
- 3–4 links: official docs, beginner-friendly guides, tools
- Format: [Name](URL) — one-line description of what it is

---

## Conclusion & Next Steps
- 2 sentences: what was learned and why it matters
- One sentence: what the next article in the series covers
- Newsletter CTA:
  ---
  Subscribe to get new articles delivered to your inbox.
  New posts every week across 9 AI learning pillars.

---

HASHNODE PUBLISH SETTINGS
--------------------------
Series       : [Pillar name]
Tags         : [3–5 tags — see Quick Reference below]
Slug         : [kebab-case, descriptive, SEO-friendly]
SEO Title    : [Under 60 characters]
SEO Desc     : [Under 150 characters]
Cover Image  : [Describe: 1600×840px, under 1MB — what should it show?]
Image 1      : [Describe what the diagram/infographic should show]
Image 2      : [If needed — describe]

---

Now write the full article for:
Pillar  : [PILLAR NAME]
Topic   : [TOPIC NAME]
Article : [Article N of N]
Level   : Beginner
Builds on: [None / prior articles]
```

---

---

# PROMPT B — INTERMEDIATE LEVEL

*Use for Articles marked I in PUBLISHING_PLAN.md*
*Reader has read the earlier articles in this pillar. Skip basics already covered. Build on that foundation.*

```
You are helping me write a technical article for my Hashnode blog (venumadhavan.hashnode.dev).
I am an AI/ML Developer with 5+ years of experience in Python, Machine Learning, Generative AI,
and Agentic AI. I write structured, practical articles aimed at developers who understand the
foundations and are ready to build real implementations.

ARTICLE DETAILS
---------------
Pillar / Series : [e.g. Machine Learning | Generative AI & LLMs | Agentic AI]
Topic           : [e.g. "Random Forest: Why Many Trees Beat One"]
Article number  : [e.g. Article 6 of 10 in this series]
Level           : Intermediate
Builds on       : [e.g. "Articles 1–5 of this series: ML intro, Linear Regression, Logistic Regression, KNN, Decision Trees"
                   OR "Pillar 2 Article 3 — Pydantic basics for request/response validation"]
Goal            : Reader builds a working, real-world implementation and understands the trade-offs

STRICT RULES
------------
- NEVER mention any real organization, company, client, or employer name
- SEO title under 60 characters, SEO description under 150 characters
- All code blocks complete and runnable — no pseudocode or "..." shortcuts
- No code comments unless the WHY is non-obvious
- Images as markdown placeholders only — I upload separately
- Tone: professional, references what the reader already knows from earlier articles,
  does not re-explain basics already covered in the series

ARTICLE STRUCTURE — INTERMEDIATE
----------------------------------

## Key Takeaways
- 6–7 bullet points
- Concrete outcomes: what the reader will build, know, or be able to decide
- At least one point about a trade-off or when NOT to use this

---

## Who This Is For & Prerequisites
- One sentence on who this is for
- What they must have read or know (reference specific earlier articles in the series)
- What they do NOT need
- pip install block with all required packages
- .env setup if API keys are needed
- Expected cost if any paid API is used

---

## What You Will Build
- 4–5 bullet points: the exact end state
- A code block showing the expected final output

---

## Problem Statement
- A generic real-world scenario (no org/client names)
- The specific pain point this concept solves
- Numbers that show the stakes: time, accuracy, scale
- Why this approach is the right solution

---

## Concept Simply
- One analogy that builds on something the reader already knows from the series
- A precise definition
- A comparison table: this concept vs the previous approach the reader knows

---

## Core Components
- Every building block, with: name → what it does → why it matters → code snippet
- Sub-headers (### Component 1, ### Component 2, etc.)
- Reference what the reader already knows where relevant ("Unlike Decision Trees which...")
- Include 1 image placeholder for an architecture or concept diagram

---

## Design Trade-offs
- Table: Decision | Option A | Option B | When to choose which
- Cover 4–6 real decisions the reader faces when implementing this
- At least one row comparing this approach to what the reader learned in earlier articles

---

## Hands-on Tutorial
- Step 1: minimal working version (end-to-end in fewest lines)
- Steps 2–N: add one real capability per step
- Each step: what we are adding → the code → the expected output
- Final step: full implementation combining everything
- Include 1 image placeholder for an execution flow or architecture diagram

---

## Real-World Use Case
- Generic enterprise scenario (no org/client names — use "a retail firm", "an energy company", etc.)
- The problem, the solution architecture, the results
- Results table: Metric | Before | After

---

## Debugging & Common Pitfalls
- 5 pitfalls practitioners actually hit
- Each: pitfall name → wrong code → right code → one-line explanation

---

## Testing
- Unit test for the core function
- Integration test (end-to-end)
- Evaluation checklist (5–7 items as markdown checkboxes)

---

## Interview Q&A
- 5 questions a senior engineer or interviewer would ask
- Each: full answer in 3–5 sentences
- Cover: concept, trade-offs, when not to use it, scaling, comparison to alternatives

---

## Resources
- 4–5 links: official docs, key papers, useful tools
- Format: [Name](URL) — one-line description

---

## Conclusion & Next Steps
- 2–3 sentences: what was built and why it matters in the broader series
- One sentence: what the next article covers and how it builds on this one
- Newsletter CTA:
  ---
  Subscribe to get new articles delivered to your inbox.
  New posts every week across 9 AI learning pillars.

---

HASHNODE PUBLISH SETTINGS
--------------------------
Series       : [Pillar name]
Tags         : [3–5 tags — see Quick Reference below]
Slug         : [kebab-case, descriptive, SEO-friendly]
SEO Title    : [Under 60 characters]
SEO Desc     : [Under 150 characters]
Cover Image  : [Describe: 1600×840px, under 1MB — what should it show?]
Image 1      : [Describe what the diagram/infographic should show]
Image 2      : [If needed — describe]

---

Now write the full article for:
Pillar  : [PILLAR NAME]
Topic   : [TOPIC NAME]
Article : [Article N of N]
Level   : Intermediate
Builds on: [prior articles or cross-pillar references]
```

---

---

# PROMPT C — ADVANCED LEVEL

*Use for Articles marked A in PUBLISHING_PLAN.md*
*Reader has completed most of this pillar. Use precise terminology. Go deep. No hand-holding.*

```
You are helping me write a technical article for my Hashnode blog (venumadhavan.hashnode.dev).
I am an AI/ML Developer with 5+ years of experience in Python, Machine Learning, Generative AI,
and Agentic AI. I write production-grade technical content for developers who are ready to go
beyond tutorials and build systems that work at scale.

ARTICLE DETAILS
---------------
Pillar / Series : [e.g. Agentic AI | Generative AI & LLMs | Deep Learning & Transformers]
Topic           : [e.g. "Safety and Guardrails: Building Agents You Can Trust"]
Article number  : [e.g. Article 9 of 11 in this series]
Level           : Advanced
Builds on       : [e.g. "Full Agentic AI series Articles 1–8: agent basics, tools, Pydantic outputs,
                   memory, planning, multi-agent, human-in-the-loop, autonomous workflows"
                   OR cross-pillar: "Pillar 2 Article 7 — WebSockets for the streaming pattern"]
Goal            : Reader leaves with a production-ready implementation and a clear mental model
                  of the architecture decisions behind it

STRICT RULES
------------
- NEVER mention any real organization, company, client, or employer name
- SEO title under 60 characters, SEO description under 150 characters
- All code blocks complete and runnable — no pseudocode or "..." shortcuts
- No code comments unless the WHY is non-obvious
- Images as markdown placeholders only — I upload separately
- Tone: precise, direct, technically rigorous — assume the reader has the full series foundation
  Do not re-explain concepts covered in earlier articles; reference them by name and move on

ARTICLE STRUCTURE — ADVANCED
------------------------------

## Key Takeaways
- 7–8 bullet points
- Specific, opinionated outcomes — include at least two about production decisions or trade-offs
- At least one about what breaks in production and how to prevent it

---

## Who This Is For & Prerequisites
- One sentence on who this is for (be specific about what they must already know)
- List the specific earlier articles in the series they must have read
- List any cross-pillar prerequisites (e.g. "Pillar 2 Article 7 — WebSockets")
- pip install block
- .env setup if needed
- Expected cost if paid APIs are used

---

## What You Will Build
- 4–5 bullet points: the exact production-ready end state
- A code block showing the expected final output including edge case handling

---

## Problem Statement
- Generic enterprise scenario that highlights why simpler approaches fail at scale
- The specific failure mode this article solves
- Real-world numbers: throughput, cost, latency, failure rate
- Why this is the right architectural decision

---

## Concept Simply
- One precise analogy that connects to something from the broader series
- A production-grade definition (can use technical terminology — reader is ready)
- A table comparing naive approach vs production approach

---

## Core Components
- Deep coverage of every component — implementation details, not just descriptions
- Each component: what it does → why it's designed this way → production code snippet → failure mode
- Sub-headers (### Component 1, ### Component 2, etc.)
- Include 1 image placeholder for a production architecture diagram

---

## Design Trade-offs
- Table: Decision | Option A | Option B | When to choose which
- 5–6 rows covering real architectural decisions at production scale
- At least one row about cost vs quality vs latency
- At least one row about what breaks under load

---

## Hands-on Tutorial
- Step 1: the naive version (show why it's not enough for production)
- Steps 2–N: evolve it into a production-grade implementation one concern at a time
- Each step: what production concern we are addressing → the code → the expected output
- Final step: full production-ready implementation
- Include 1 image placeholder for an execution or data flow diagram

---

## Real-World Use Case
- Generic enterprise scenario at production scale (no org/client names)
- Architecture decisions made and why
- What failed in the first version and how it was fixed
- Results table: Metric | Naive version | Production version

---

## Debugging & Common Pitfalls
- 5 pitfalls that only appear in production (not in toy examples)
- Each: pitfall name → wrong code (what looks fine in dev) → right code → why it breaks at scale

---

## Testing
- Unit test for the core production function
- Integration test simulating production load or edge cases
- Evaluation checklist (6–8 items as markdown checkboxes)

---

## Production Considerations
- Structured logging for every key operation (with code)
- Cost or token monitoring pattern (with code)
- Circuit breaker / safe wrapper with fallback (with code)
- At least one observability pattern (metrics, alerts, or tracing)

---

## Safety & Ethics
- Input validation with code example
- Human-in-the-loop pattern — when to trigger it and how to implement it
- Governance checklist (6–8 items as markdown checkboxes)

---

## Interview Q&A
- 6 questions a staff engineer or technical interviewer would ask
- Each: full answer in 4–6 sentences
- Cover: architecture rationale, trade-offs, failure modes, scaling, alternatives, production lessons

---

## Resources
- 5 links: official docs, research papers, production case studies, tools
- Format: [Name](URL) — one-line description

---

## Conclusion & Next Steps
- 3 sentences: what was built, why the architectural decisions matter, what this enables
- One sentence: what the next article covers (or if this is the final article, what the reader can build now)
- Newsletter CTA:
  ---
  Subscribe to get new articles delivered to your inbox.
  New posts every week across 9 AI learning pillars.

---

HASHNODE PUBLISH SETTINGS
--------------------------
Series       : [Pillar name]
Tags         : [3–5 tags — see Quick Reference below]
Slug         : [kebab-case, descriptive, SEO-friendly]
SEO Title    : [Under 60 characters]
SEO Desc     : [Under 150 characters]
Cover Image  : [Describe: 1600×840px, under 1MB — what should it show?]
Image 1      : [Describe what the production architecture diagram should show]
Image 2      : [If needed — describe]

---

Now write the full article for:
Pillar  : [PILLAR NAME]
Topic   : [TOPIC NAME]
Article : [Article N of N]
Level   : Advanced
Builds on: [full list of prior series articles + any cross-pillar prerequisites]
```

---

---

## Quick Reference: Series Tags

| Pillar | Series Name | Standard Tags |
|---|---|---|
| 1 | Python Programming | `python`, `programming`, `beginner`, `tutorial` |
| 2 | API Development | `api`, `fastapi`, `flask`, `django`, `webdev` |
|   | *(WebSockets article)* | add `websocket`, `realtime` |
|   | *(Pydantic article)* | add `pydantic`, `validation` |
| 3 | Data Analysis | `datascience`, `pandas`, `numpy`, `eda`, `dataanalysis` |
| 4 | Machine Learning | `machinelearning`, `sklearn`, `python`, `ai`, `datascience` |
| 5 | NLP | `nlp`, `textmining`, `machinelearning`, `python`, `ai` |
| 6 | Computer Vision | `computervision`, `deeplearning`, `cnn`, `opencv`, `python` |
| 7 | Deep Learning & Transformers | `deeplearning`, `transformers`, `pytorch`, `bert`, `neuralnetworks` |
| 8 | Generative AI & LLMs | `generativeai`, `llm`, `rag`, `langchain`, `promptengineering` |
|   | *(WebSockets article)* | add `websocket`, `streaming` |
|   | *(Pydantic article)* | add `pydantic`, `structuredoutput` |
| 9 | Agentic AI | `agenticai`, `aiagents`, `langchain`, `langgraph`, `automation` |
|   | *(Pydantic article)* | add `pydantic`, `structuredoutput` |

---

## Hashnode Publish Checklist

Before clicking Publish, verify:

- [ ] Correct level prompt used (B / I / A)
- [ ] SEO title is under 60 characters
- [ ] SEO description is under 150 characters
- [ ] Series is selected (not blank)
- [ ] 3–5 tags added (including special tags for WebSocket / Pydantic articles)
- [ ] Slug is set manually (not auto-generated)
- [ ] Cover image uploaded (1600×840px, under 1MB — compress at squoosh.app if needed)
- [ ] Article images uploaded (under 1MB each — compress at squoosh.app if needed)
- [ ] No real organization, client, or employer names in the article
- [ ] Scheduling: leave blank (publish immediately)
- [ ] Visibility: both checkboxes unchecked
- [ ] Click **Publish** (not Submit for Review)

---

*Last Updated: May 2026 — restructured into three level-specific prompts (B / I / A) aligned with PUBLISHING_PLAN.md*
*Maintained by: Mangena Venu Madhavan*
