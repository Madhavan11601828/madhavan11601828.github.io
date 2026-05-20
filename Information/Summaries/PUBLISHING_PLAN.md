# Publishing Plan — All 9 Pillars
# Progression: Beginner → Intermediate → Advanced
# Each pillar builds reader knowledge article by article.
# By the final articles, readers can follow high-level concepts because the foundation is already built.

---

## How to Read This Plan

- **B** = Beginner — no prior knowledge of this topic needed
- **I** = Intermediate — reader has read the earlier articles in this pillar
- **A** = Advanced — reader has completed most of the pillar
- **✓** = Already published

---

---

# Pillar 1 — Python Programming

*Goal: Reader goes from writing their first line of Python to writing clean, production-grade AI code.*

| # | Title | Level | What the Reader Learns |
|---|---|---|---|
| 1 | Python Basics: Variables, Data Types, and Your First Script | B | What Python is, how to install it, write and run a script, use variables and basic types |
| 2 | Control Flow: if/else, Loops, and Functions | B | Make decisions in code, repeat tasks, write reusable functions |
| 3 | Data Structures: Lists, Tuples, Dictionaries, Sets | B | Store and organise collections of data — the most used Python structures in AI |
| 4 | Object-Oriented Programming in Python | I | Classes, objects, inheritance — how AI libraries like LangChain are built |
| 5 | Error Handling and File I/O | I | Try/except, reading files, writing logs — essential for robust AI scripts |
| 6 | Python Patterns for AI: Comprehensions, Generators, Decorators | I | Write concise, efficient Python the way senior engineers do |
| 7 | Working with Libraries: NumPy and Pandas Quick Start | I | Bridge article before Data Analysis pillar — arrays and dataframes in 30 minutes |
| 8 | Python Best Practices and Clean Code for AI Projects | A | Virtual environments, project structure, type hints, linting — production readiness |
| 9 | Python Packaging: From Local Module to Installable Wheel | I | Create a package with __init__.py, build a reusable library, generate a .whl file, install it in another project |

---

# Pillar 2 — API Development

*Goal: Reader goes from not knowing what an API is to deploying an AI-powered API to production.*

| # | Title | Level | What the Reader Learns |
|---|---|---|---|
| 1 | What is an API? REST Concepts Every Developer Must Know | B | HTTP verbs, endpoints, request/response, status codes — the vocabulary of APIs |
| 2 | Building Your First API with FastAPI | B | Install FastAPI, write GET and POST endpoints, run locally, test with docs UI |
| 3 | Request Validation and Response Models with Pydantic | I | Type-safe inputs and outputs, automatic validation, error responses |
| 4 | Authentication: API Keys, JWT, and OAuth2 | I | Secure an API so only authorised users can call it |
| 5 | Connecting an AI Model to a FastAPI Endpoint | I | Wrap an LLM or ML model behind a REST API — the core pattern for AI services |
| 6 | Async APIs and Background Tasks | A | Non-blocking endpoints, long-running tasks, streaming responses for LLMs |
| 7 | Real-Time Communication with WebSockets in FastAPI | A | WebSocket protocol vs HTTP, persistent bidirectional connections, building a live-update endpoint — foundation for streaming AI responses |
| 8 | Deploying FastAPI to Production | A | Docker, environment variables, health checks, hosting on cloud — ship it |

---

# Pillar 3 — Data Analysis

*Goal: Reader goes from loading their first CSV to performing full exploratory analysis and producing publication-quality charts.*

| # | Title | Level | What the Reader Learns |
|---|---|---|---|
| 1 | Your First Dataset: Loading and Inspecting Data with Pandas | B | Read CSV/Excel, view shape, columns, dtypes, head/tail, describe |
| 2 | NumPy Fundamentals: Arrays, Operations, and Broadcasting | B | The math engine under Pandas and ML — arrays, shapes, vectorised operations |
| 3 | Pandas Deep Dive: Filtering, Grouping, and Merging DataFrames | B | Select, filter, groupby, merge — the four operations used in 90% of analysis |
| 4 | Data Cleaning: Handling Missing Values, Duplicates, and Outliers | I | Detect and fix dirty data — the step that separates toy projects from real ones |
| 5 | Exploratory Data Analysis (EDA) Step by Step | I | Full EDA workflow: distributions, correlations, patterns, anomalies |
| 6 | Visualising Data: Matplotlib and Seaborn from Zero | I | Line charts, bar charts, heatmaps, scatter plots — make data speak visually |
| 7 | Advanced EDA: Feature Relationships and Statistical Testing | A | Correlation matrices, hypothesis testing, feature importance before modelling |

---

# Pillar 4 — Machine Learning

*Goal: Reader goes from not knowing what ML is to building, evaluating, and tuning models for real datasets.*

| # | Title | Level | What the Reader Learns |
|---|---|---|---|
| 1 | What is Machine Learning? A Visual Introduction | B | The three types of ML, how training works, what a model actually is — no code yet |
| 2 | Linear Regression: Predicting Numbers from Data | B | Train your first model, understand loss, make predictions, evaluate with RMSE |
| 3 | Logistic Regression: Your First Classification Model | B | Binary classification, sigmoid function, accuracy, precision, recall, F1 |
| 4 | K-Nearest Neighbors: How Similarity Drives Prediction | I | Distance-based learning, choosing K, when KNN works and when it fails |
| 5 | Decision Trees: How Machines Make Rule-Based Decisions | I | Splitting criteria, tree depth, overfitting, feature importance |
| 6 | Random Forest: Why Many Trees Beat One | I | Ensemble learning, bagging, why randomness improves accuracy |
| 7 | XGBoost: Gradient Boosting That Wins Competitions | I | Boosting vs bagging, XGBoost parameters, handling imbalanced data |
| 8 | K-Means Clustering: Grouping Without Labels | I | Unsupervised learning, choosing K with the elbow method, real-world use cases |
| 9 | PCA: Reducing Dimensions Without Losing Meaning | A | Eigenvectors, explained variance, when to use PCA in an ML pipeline |
| 10 | Model Evaluation, Cross-Validation, and Hyperparameter Tuning | A | GridSearchCV, k-fold CV, ROC-AUC, confusion matrix — the full evaluation toolkit |

---

# Pillar 5 — Natural Language Processing

*Goal: Reader goes from not knowing how text becomes data to building classifiers, extractors, and topic models.*

| # | Title | Level | What the Reader Learns |
|---|---|---|---|
| 1 | What is NLP? Teaching Machines to Read | B | The NLP pipeline, why text is hard for computers, real-world applications |
| 2 | Text Preprocessing: Tokenisation, Stopwords, and Stemming | B | Clean raw text into structured tokens — the first step in every NLP project |
| 3 | Bag of Words and TF-IDF: Turning Words into Numbers | B | Represent text as vectors machines can process — the simplest and most used method |
| 4 | Word2Vec: From Words to Meaning Vectors | I | Semantic embeddings, similarity between words, how context creates meaning |
| 5 | Sentiment Analysis: Classifying Opinions at Scale | I | Build a sentiment classifier end-to-end — dataset, model, evaluation |
| 6 | Text Classification: Categorising Any Text Automatically | I | Multi-class classification on text — spam detection, intent classification, tagging |
| 7 | Named Entity Recognition: Extracting People, Places, and Things | I | NER with spaCy and NLTK — extract structured information from unstructured text |
| 8 | Topic Modeling with LDA: Discovering Hidden Themes | A | Unsupervised topic discovery, coherence scores, interpreting topics |
| 9 | FastText and Subword Embeddings: Handling Unknown Words | A | Why character-level embeddings beat word-level for rare and misspelled words |

---

# Pillar 6 — Computer Vision

*Goal: Reader goes from not knowing how images are stored to building detection and segmentation systems.*

| # | Title | Level | What the Reader Learns |
|---|---|---|---|
| 1 | What is Computer Vision? How Machines See the World | B | Pixels, colour channels, image arrays — the raw material of computer vision |
| 2 | Image Processing Basics with OpenCV | B | Read, resize, crop, convert, filter images — the preprocessing toolkit |
| 3 | CNN Architecture: How Convolutional Networks See Patterns | I | Convolutions, pooling, activation maps — why CNNs work on images |
| 4 | Image Classification from Scratch with PyTorch | I | Build and train a CNN end-to-end on a real image dataset |
| 5 | Transfer Learning: Stand on the Shoulders of ResNet and VGG | I | Fine-tune a pre-trained model for your dataset in under 50 lines |
| 6 | Object Detection with YOLO: Finding Objects in Real Time | A | Bounding boxes, confidence scores, YOLO inference pipeline |
| 7 | Image Segmentation with U-Net: Pixel-Level Understanding | A | Semantic segmentation, encoder-decoder architecture, IoU metric |
| 8 | OCR: Extracting Text from Images | A | Tesseract, EasyOCR, preprocessing for better accuracy, real-world pipelines |

---

# Pillar 7 — Deep Learning & Transformers

*Goal: Reader goes from not knowing what a neuron is to understanding BERT and GPT architectures.*

| # | Title | Level | What the Reader Learns |
|---|---|---|---|
| 1 | Neural Networks from Scratch: Weights, Biases, and Activations | B | The building block of all deep learning — forward pass, loss, intuition before math |
| 2 | Backpropagation: How Neural Networks Actually Learn | B | Chain rule, gradient flow, weight update — demystified with a worked example |
| 3 | Gradient Descent and Optimizers: SGD, Adam, and Beyond | I | Why learning rate matters, momentum, adaptive learning rates, optimizer choice |
| 4 | RNN Architecture: Processing Text and Time-Series Sequences | I | Recurrent connections, hidden state, why order matters in sequences |
| 5 | LSTM and GRU: Solving the Vanishing Gradient Problem | I | Gates, memory cells, when LSTM beats RNN and when Transformers beat LSTM |
| 6 | Attention Mechanism: What the Model Focuses On | I | Self-attention, keys/queries/values — the idea that unlocked Transformers |
| 7 | Transformer Architecture: Attention is All You Need | A | Multi-head attention, positional encoding, encoder-decoder — the full architecture |
| 8 | BERT Explained: Bidirectional Language Understanding | A | Masked language modelling, fine-tuning, why BERT changed NLP |
| 9 | GPT Architecture: How Autoregressive Models Generate Text | A | Causal attention, next-token prediction, scaling laws, GPT vs BERT trade-offs |

---

# Pillar 8 — Generative AI & LLMs

*Goal: Reader goes from not knowing what an LLM is to fine-tuning models and building production RAG systems.*

| # | Title | Level | What the Reader Learns |
|---|---|---|---|
| 1 | What are LLMs? How Language Models Work Under the Hood | B | Tokens, embeddings, next-token prediction, temperature — the vocabulary of LLMs |
| 2 | Prompt Engineering: Getting the Best Output from Any LLM | B | Zero-shot, few-shot, chain-of-thought, system prompts, prompt structure |
| 3 | Structured Output with Pydantic: Making LLMs Return Reliable JSON | I | Define Pydantic models for LLM responses, use LangChain output parsers, eliminate free-form text bugs in production (builds on Pillar 2, Article 3) |
| 4 | RAG: Retrieval-Augmented Generation Explained | I | Why LLMs hallucinate, how RAG grounds answers in real documents |
| 5 | Vector Databases: Storing and Searching Embeddings | I | Embeddings, cosine similarity, FAISS vs Chroma vs Pinecone |
| 6 | LangChain Framework: Building LLM Applications Fast | I | Chains, prompts, memory, document loaders — the production LLM toolkit |
| 7 | Building a Production RAG System End to End | I | Ingest → embed → store → retrieve → generate — full pipeline with code |
| 8 | Streaming LLM Responses with WebSockets: No More Waiting | A | Stream token-by-token LLM output to a frontend via WebSocket — the pattern behind ChatGPT-style interfaces (builds on Pillar 2, Article 7) |
| 9 | LangGraph: Stateful Multi-Step LLM Workflows | A | Nodes, edges, state machines — when chains are not enough |
| 10 | LLM Routing: Choosing the Right Model Dynamically | A | Route by cost, latency, or capability — smart orchestration across multiple LLMs |
| 11 | Fine-tuning LLMs: Adapting Models to Your Domain | A | LoRA, QLoRA, instruction tuning, evaluation after fine-tuning |

---

# Pillar 9 — Agentic AI

*Goal: Reader goes from not knowing what an agent is to building safe, production multi-agent systems.*

| # | Title | Level | What the Reader Learns |
|---|---|---|---|
| 1 | Getting Started with Agentic AI: Building Your First Agent | B | ReAct pattern, tools, memory, LangChain agent — end-to-end first agent **✓ Published** |
| 2 | Tool Calling and Integration: Giving Your Agent Superpowers | B | Define tools, write descriptions, connect web search and calculator, handle tool errors |
| 3 | Structured Agent Outputs: Pydantic Models for Tool Results and Plans | I | Enforce valid tool inputs and agent final outputs using Pydantic — prevents downstream breakage when agents return unexpected formats (builds on Pillar 8, Article 3) |
| 4 | Agent Memory: Short-Term and Long-Term Context Management | I | ConversationBuffer vs VectorStore memory, when to use each, memory limits |
| 5 | Planning and Reasoning: How Agents Think Step by Step | I | Plan-and-solve, chain-of-thought, self-reflection, structured output parsing |
| 6 | Multi-Agent Systems: When One Agent Is Not Enough | I | Supervisor + worker pattern, agent communication, task delegation |
| 7 | Human-in-the-Loop: Keeping Humans in Control of Agents | I | Approval gates, interrupt patterns, when to escalate, audit trails |
| 8 | Autonomous Workflows: Building End-to-End Agent Pipelines | A | Chaining agents, state management, error recovery, retry logic |
| 9 | Safety and Guardrails: Building Agents You Can Trust | A | Input validation, output filtering, rate limiting, toxicity detection, kill switches |
| 10 | Cost Control: Managing Token Spend in Production Agents | A | Token budgets, model routing, caching, monitoring spend per session |
| 11 | Real-World Agent Platforms: LangGraph, CrewAI, and AutoGen | A | Compare frameworks, when to use which, migration paths, production architecture |

---

---

# Pillar 10 — Programming

*Goal: Reader goes from understanding Python syntax to thinking algorithmically — choosing the right paradigm, data structure, and technique for any problem.*

## Section 1: Programming Paradigms

| # | Title | Level | What the Reader Learns |
|---|---|---|---|
| 1 | Imperative Programming: Thinking in Steps and State | B | Variables as state, statements as commands, sequential flow — the mental model behind all Python scripts |
| 2 | Object-Oriented Programming: Deep Dive | I | SOLID principles, encapsulation, polymorphism, design patterns (Factory, Strategy, Observer) |
| 3 | Functional Programming in Python | I | Pure functions, immutability, map/filter/reduce, functools, higher-order functions |
| 4 | Declarative Programming Patterns | I | Dataclasses, config-driven design, Pandas as declarative data, SQL-style thinking in Python |
| 5 | Logic and Constraint Programming | A | python-constraint, rule engines, constraint satisfaction problems — used in planning agents |

## Section 2: Data Structures via OOP

| # | Title | Level | What the Reader Learns |
|---|---|---|---|
| 6 | Linear Structures: Stack, Queue, and Deque | I | Build each as a Python class, internal backing, real use in BFS/DFS/undo stacks |
| 7 | Linked Lists: Singly, Doubly, Circular | I | Node class, pointer manipulation, insert/delete/traverse — dynamic memory chaining |
| 8 | Trees: Binary Tree, BST, and Heap | A | Recursive class design, traversals, min-heap — foundation for decision tree nodes |
| 9 | Graphs: Representation, BFS, and DFS | A | Adjacency list via dict, BFS, DFS, shortest path — foundation for agent planning graphs |
| 10 | Hash Maps: Custom Implementation | A | Hash function, collision resolution, custom HashMap — understanding Python dict internals |

## Section 3: Algorithm Design Techniques

| # | Title | Level | What the Reader Learns |
|---|---|---|---|
| 11 | Brute Force: Exhaustive Search Done Right | B | When brute force is correct, complexity analysis, recognising limits |
| 12 | Divide and Conquer | I | Merge sort, binary search, recursion trees, master theorem intuition |
| 13 | Greedy Algorithms | I | Activity selection, coin change, Huffman coding — when greedy is provably optimal |
| 14 | Dynamic Programming: Memoization (Top-Down) | I | Recursion + cache, @lru_cache, overlapping subproblems, Fibonacci → knapsack |
| 15 | Dynamic Programming: Tabulation (Bottom-Up) | A | DP tables, space optimisation, LCS, edit distance |
| 16 | Backtracking | A | N-queens, Sudoku solver, permutations — exhaustive search with pruning |
| 17 | Branch and Bound | A | Bounding functions, state-space trees, TSP — optimisation beyond greedy and DP |

## Section 4: Computational Models

| # | Title | Level | What the Reader Learns |
|---|---|---|---|
| 18 | Concurrent Programming: Threading and AsyncIO | I | GIL, threads vs coroutines, asyncio event loop — I/O-bound work patterns |
| 19 | Parallel Programming: Multiprocessing | A | multiprocessing, concurrent.futures, bypassing the GIL — CPU-bound workloads |
| 20 | Distributed Computing Basics | A | Celery, Ray for distributed ML, message passing — scaling beyond one machine |

## Section 5: Data Handling Styles

| # | Title | Level | What the Reader Learns |
|---|---|---|---|
| 21 | Iterative Programming: Loops, State, and Efficiency | B | Loop patterns, state management, when iteration beats recursion, complexity thinking |
| 22 | Recursive Programming: Base Cases, Call Stacks, and Elegance | I | Recursion mechanics, call stack depth, tail recursion, when recursion beats iteration |
| 23 | Vectorized Programming: NumPy Broadcasting and Beyond | I | Broadcasting rules, array operations, eliminating Python loops, 100x performance gains |
| 24 | Data-Oriented Programming: Separating Data from Behaviour | A | Transform pipelines, struct-of-arrays vs array-of-structs, cache efficiency in AI pipelines |

---

---

# Cross-Pillar Progression Map

The pillars also build on each other. Recommended reading order:

```
Python Programming
      ↓
Programming
      ↓
Data Analysis  →  API Development
      ↓
Machine Learning
      ↓
NLP  →  Computer Vision
      ↓
Deep Learning & Transformers
      ↓
Generative AI & LLMs
      ↓
Agentic AI
```

A reader who follows this order will never encounter a concept they have not been prepared for.

---

# Publishing Velocity Guide

| Phase | Pillars | Target | Notes |
|---|---|---|---|
| Month 1–2 | Python + Data Analysis | 2–3 articles/week | Build the reader base with accessible content |
| Month 3–4 | ML + API Development | 2 articles/week | Practical, high-search-volume topics |
| Month 5–6 | NLP + Computer Vision | 2 articles/week | Deepen technical credibility |
| Month 7–8 | Deep Learning + Transformers | 1–2 articles/week | Longer, denser articles need more time |
| Month 9–10 | Generative AI & LLMs | 2 articles/week | Your core brand — invest heavily |
| Month 11–12 | Agentic AI | 2 articles/week | Your differentiator — most advanced series |
| Month 13–14 | Programming | 2 articles/week | Algorithmic thinking — deepens all prior pillars |

**Total articles across all 10 pillars: ~112**

---

*Last Updated: May 2026*
*Maintained by: Mangena Venu Madhavan*
