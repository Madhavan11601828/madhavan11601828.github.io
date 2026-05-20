---
layout: page
title: Programming
permalink: /programming/
description: Master programming paradigms, data structures, algorithms, and computational models — the foundations of fast, correct, scalable code
---

# Programming

## Overview

This pillar takes you beyond Python syntax into the principles that separate beginner programmers from engineers. You will master every major programming paradigm, build data structures from scratch, apply classical algorithm design techniques, understand computational models for concurrency and distribution, and choose the right data handling style for any workload.

24 articles — Beginner through Advanced — published weekly from July to December 2026.

---

## What You'll Learn

### Section 1: Programming Paradigms (Articles 1–5)
Understand the five major ways of thinking about code and when each is the right tool.

- **Imperative** — Variables as state, statements as commands, sequential flow
- **Object-Oriented** — SOLID principles, encapsulation, polymorphism, design patterns
- **Functional** — Pure functions, immutability, map/filter/reduce, higher-order functions
- **Declarative** — Dataclasses, config-driven design, Pandas pipelines, SQL-style thinking
- **Logic & Constraint** — CSP solvers, rule engines, planning problems

### Section 2: Data Structures via OOP (Articles 6–10)
Build each structure from scratch and understand why the design decisions matter.

- **Stack, Queue, Deque** — O(1) push/pop, breadth-first search, sliding window
- **Linked Lists** — Singly, doubly, circular — LRU Cache implementation
- **Trees & Heaps** — BST, heapq, priority queues, task schedulers
- **Graphs** — BFS, DFS, Dijkstra — dependency resolvers, shortest path
- **Hash Maps** — Custom hash function, separate chaining, load factor, auto-resize

### Section 3: Algorithm Design Techniques (Articles 11–17)
Learn the seven canonical strategies for solving hard problems.

- **Brute Force** — Exhaustive search, when it is acceptable
- **Divide & Conquer** — Merge sort, binary search, recurrence relations
- **Greedy** — Activity selection, coin change, fractional knapsack
- **DP Memoization** — Top-down, @lru_cache, overlapping subproblems
- **DP Tabulation** — Bottom-up, space optimisation, reconstruction
- **Backtracking** — N-queens, Sudoku solver, subset sum
- **Branch & Bound** — 0/1 knapsack, TSP, pruning strategies

### Section 4: Computational Models (Articles 18–20)
Scale from a single thread to a distributed cluster.

- **Concurrent** — Threading, asyncio, GIL, ThreadPoolExecutor
- **Parallel** — multiprocessing.Pool, ProcessPoolExecutor, CPU-bound speedups
- **Distributed** — Ray actors and tasks, Celery task queues, map-reduce patterns

### Section 5: Data Handling Styles (Articles 21–24)
Match your data layout to your workload for maximum throughput.

- **Iterative** — Loop invariants, four core patterns, loop optimisation
- **Recursive** — Base cases, call stack, explicit-stack conversion
- **Vectorized** — NumPy broadcasting, ufuncs, 190× speedups over Python loops
- **Data-Oriented** — Struct-of-Arrays, cache efficiency, columnar pipelines

---

## Article Index

### 🟢 Beginner

| # | Article | Published |
|---|---|---|
| 1 | [Imperative Programming: Thinking in Steps and State](/programming-imperative-paradigm/) | Jul 21, 2026 |
| 11 | [Brute Force Algorithms: When Exhaustive Search Is the Answer](/programming-brute-force/) | Sep 29, 2026 |
| 21 | [Iterative Programming: Loops, State, and Efficiency](/programming-iterative-programming/) | Dec 8, 2026 |

### 🟡 Intermediate

| # | Article | Published |
|---|---|---|
| 2 | [Object-Oriented Programming: Deep Dive](/programming-oop-deep-dive/) | Jul 28, 2026 |
| 3 | [Functional Programming in Python](/programming-functional-python/) | Aug 4, 2026 |
| 4 | [Declarative Programming Patterns](/programming-declarative-patterns/) | Aug 11, 2026 |
| 6 | [Stack, Queue, and Deque: The Three Linear Structures](/programming-stack-queue-deque/) | Aug 25, 2026 |
| 7 | [Linked Lists: Singly, Doubly, and Circular](/programming-linked-lists/) | Sep 1, 2026 |
| 12 | [Divide and Conquer: Merge Sort, Binary Search, Quick Sort](/programming-divide-and-conquer/) | Oct 6, 2026 |
| 13 | [Greedy Algorithms: Making Locally Optimal Choices](/programming-greedy-algorithms/) | Oct 13, 2026 |
| 14 | [Dynamic Programming: Memoization](/programming-dp-memoization/) | Oct 20, 2026 |
| 18 | [Concurrent Programming: Threading and Asyncio](/programming-concurrent-threading-asyncio/) | Nov 17, 2026 |
| 22 | [Recursive Programming: Base Cases, Call Stacks, and Elegance](/programming-recursive-programming/) | Dec 15, 2026 |
| 23 | [Vectorized Programming: Eliminate Loops with NumPy](/programming-vectorized-programming/) | Dec 22, 2026 |

### 🔴 Advanced

| # | Article | Published |
|---|---|---|
| 5 | [Logic and Constraint Programming](/programming-logic-constraint/) | Aug 18, 2026 |
| 8 | [Trees: Binary Search Trees and Heaps](/programming-trees-bst-heap/) | Sep 8, 2026 |
| 9 | [Graphs: BFS, DFS, and Dijkstra](/programming-graphs-bfs-dfs/) | Sep 15, 2026 |
| 10 | [Hash Maps: Build Your Own from Scratch](/programming-hash-maps-custom/) | Sep 22, 2026 |
| 15 | [Dynamic Programming: Tabulation](/programming-dp-tabulation/) | Oct 27, 2026 |
| 16 | [Backtracking: N-Queens, Sudoku, Subset Sum](/programming-backtracking/) | Nov 3, 2026 |
| 17 | [Branch and Bound: Optimal Pruning](/programming-branch-and-bound/) | Nov 10, 2026 |
| 19 | [Parallel Programming: Multiprocessing](/programming-parallel-multiprocessing/) | Nov 24, 2026 |
| 20 | [Distributed Computing: Ray and Celery](/programming-distributed-computing/) | Dec 1, 2026 |
| 24 | [Data-Oriented Programming: Struct-of-Arrays and Cache Efficiency](/programming-data-oriented-programming/) | Dec 29, 2026 |

---

## Key Skills You Will Build

✅ Identify which programming paradigm fits a given problem  
✅ Implement any classical data structure from scratch  
✅ Choose the right algorithm design technique by recognising problem structure  
✅ Write concurrent, parallel, and distributed Python that scales  
✅ Replace slow Python loops with vectorized NumPy code (100× faster)  
✅ Layout data in memory for cache efficiency  

---

## Prerequisites

- **Pillar 1 — Python Programming** completed (Articles 1–4 minimum)
- Python 3.9+ installed
- pip packages vary per article: `numpy`, `ray`, `celery` — each article lists its requirements

---

## Path Forward

After completing this pillar, you will have the algorithmic foundation to tackle:

- **Data Analysis (Pillar 3)** — Vectorized operations with NumPy and Pandas
- **Machine Learning (Pillar 4)** — Understanding the algorithms under the hood
- **Agentic AI (Pillar 9)** — Planning, search, and constraint satisfaction in agents

---

<style>
.programming-section {
  background: var(--card-bg);
  border-left: 5px solid #50C878;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 2px 10px var(--card-shadow);
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

table th {
  background: var(--bg-tertiary);
  padding: 12px;
  text-align: left;
  font-weight: 700;
  color: var(--text-primary);
  border-bottom: 2px solid #50C878;
}

table td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-secondary);
}

table tr:hover {
  background: var(--bg-tertiary);
}

table a {
  color: var(--accent-primary);
  text-decoration: none;
  font-weight: 500;
}

table a:hover {
  text-decoration: underline;
}
</style>
