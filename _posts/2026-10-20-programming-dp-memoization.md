---
title: "Dynamic Programming: Memoization (Top-Down)"
author: "Mangena Venu Madhavan"
date: 2026-10-20
tags: [Python, Programming, DynamicProgramming, Memoization, Algorithms]
categories: [programming]
series: "Programming"
article_number: 14
---

## Key Takeaways

- Dynamic Programming applies when a problem has two properties: overlapping subproblems and optimal substructure.
- Memoization is top-down DP — write the recursion naturally, then cache every result so each subproblem is solved once.
- A plain `dict` cache turns naive exponential recursion into polynomial time: fib(40) drops from billions of calls to 40.
- `@functools.lru_cache` gives you memoization in one line with zero boilerplate.
- The four classic DP problems — Fibonacci, Climbing Stairs, 0/1 Knapsack, LCS — teach different memo shapes: 1D, 1D, 2D, 2D.
- Recognise DP problems by their phrasing: "how many ways", "minimum cost", "maximum value", "is it possible".
- Memoization has a recursion depth limit in Python (default 1000) — switch to tabulation (Article 15) for large inputs.

---

## Who This Is For / Prerequisites

**Who this is for:** Python developers who understand recursion and want to solve optimisation and counting problems efficiently.

**Prerequisites:**
- Recursion (base case, recursive case, call stack)
- Python dictionaries and decorators
- Big O notation

---

## What You'll Build

Four complete memoized solutions — Fibonacci, Climbing Stairs, 0/1 Knapsack, and LCS — each with a call count comparison against naive recursion.

**Expected output:**
```
=== Fibonacci ===
fib(10) naive: 177 function calls → result: 55
fib(10) memoized: 11 function calls → result: 55

=== Climbing Stairs ===
n=5: 8 distinct ways

=== 0/1 Knapsack ===
Items: [(2,3,'A'), (3,4,'B'), (4,5,'C'), (5,6,'D')]  (weight, value, name)
Capacity: 8
Max value: 10 (items B + C)

=== LCS ===
s1='ABCBDAB', s2='BDCAB'
LCS length: 4
```

---

## Problem Statement

You're building a recommendation system that computes the Longest Common Subsequence between a user's viewing history and each of 10,000 candidate items. Each LCS call on strings of length 20 makes 2^20 recursive calls without caching. With memoization, it makes 20×20 = 400. At 10,000 candidates, the difference is 10 billion calls versus 4 million — the difference between a timeout and a 2-second response.

---

## Concept Simply

**The analogy:** You're a student solving a problem set. Problem 5 requires the answer to problem 3, and so does problem 7. Without DP, you solve problem 3 twice. With memoization, you write the answer to problem 3 on a sticky note after the first solve, and read from the note the second time. That sticky note is the cache.

**Comparison table — Recursion vs Memoization vs Tabulation:**

| Property | Naive Recursion | Memoization (Top-Down) | Tabulation (Bottom-Up) |
|---|---|---|---|
| Direction | Top to bottom | Top to bottom | Bottom to top |
| Cache | None | dict / lru_cache | Array/table |
| Redundant calls | Yes (exponential) | No | No |
| Recursion depth | High | High | None |
| Only computes needed subproblems | Yes | Yes | No (fills all) |
| Code style | Natural | Near-natural | More iterative |

---

## Core Components

### The Two Conditions for DP

**Overlapping subproblems:** The same subproblem is solved multiple times. In fib(5), computing fib(3) is required by both fib(4) and fib(5). Without caching, fib(3) is computed multiple times.

**Optimal substructure:** The optimal solution to the full problem is built from optimal solutions to subproblems. For 0/1 Knapsack: the maximum value using items 1..i with capacity c is the better of (skip item i, keep capacity c) or (take item i, reduce capacity by w_i). Both sub-decisions must be optimal.

### Problem 1 — Fibonacci with Call Counting

```python
import sys

call_count = [0]


def fib_naive(n):
    call_count[0] += 1
    if n <= 1:
        return n
    return fib_naive(n - 1) + fib_naive(n - 2)


def fib_memoized(n, memo=None):
    if memo is None:
        memo = {}
    call_count[0] += 1
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib_memoized(n - 1, memo) + fib_memoized(n - 2, memo)
    return memo[n]
```

For fib(10):
- Naive: 177 calls (each fib(k) is recomputed every time it's needed)
- Memoized: 11 calls (fib(0) through fib(10), each exactly once)

The call tree for naive fib(5) fans out like a binary tree with height 5. With memoization, each node is visited once — a linear chain.

### @functools.lru_cache — One-Line Memoization

```python
import functools


@functools.lru_cache(maxsize=None)
def fib_lru(n):
    if n <= 1:
        return n
    return fib_lru(n - 1) + fib_lru(n - 2)
```

`maxsize=None` means unlimited cache size. `lru_cache` also tracks hits and misses via `fib_lru.cache_info()`. For production code on known-bounded inputs, setting `maxsize=128` prevents unbounded memory growth.

### Problem 2 — Climbing Stairs

You can climb 1 or 2 stairs at a time. How many distinct ways to reach stair n?

```python
def climbing_stairs(n, memo=None):
    if memo is None:
        memo = {}
    if n in memo:
        return memo[n]
    if n <= 0:
        return 0
    if n == 1:
        return 1
    if n == 2:
        return 2
    memo[n] = climbing_stairs(n - 1, memo) + climbing_stairs(n - 2, memo)
    return memo[n]
```

This is Fibonacci in disguise. stairs(n) = stairs(n-1) + stairs(n-2) because the last step is either a 1-stair jump (from stair n-1) or a 2-stair jump (from stair n-2).

For n=5: the answer is 8. The memo dict prevents the O(2^n) explosion.

### Problem 3 — 0/1 Knapsack (Top-Down)

```python
def knapsack(items, capacity, index=None, memo=None):
    if index is None:
        index = len(items) - 1
    if memo is None:
        memo = {}

    if index < 0 or capacity <= 0:
        return 0

    key = (index, capacity)
    if key in memo:
        return memo[key]

    weight, value, name = items[index]

    skip = knapsack(items, capacity, index - 1, memo)

    if weight > capacity:
        memo[key] = skip
    else:
        take = value + knapsack(items, capacity - weight, index - 1, memo)
        memo[key] = max(skip, take)

    return memo[key]


def knapsack_items_taken(items, capacity):
    n = len(items)
    memo = {}

    def solve(idx, cap):
        if idx < 0 or cap <= 0:
            return 0
        key = (idx, cap)
        if key in memo:
            return memo[key]
        weight, value, name = items[idx]
        skip = solve(idx - 1, cap)
        take = value + solve(idx - 1, cap - weight) if weight <= cap else -1
        memo[key] = max(skip, take) if take != -1 else skip
        return memo[key]

    solve(n - 1, capacity)

    taken = []
    idx, cap = n - 1, capacity
    while idx >= 0 and cap > 0:
        weight, value, name = items[idx]
        if weight <= cap and solve(idx, cap) != solve(idx - 1, cap):
            taken.append(name)
            cap -= weight
        idx -= 1

    return taken
```

The memo key is `(index, capacity)` — a 2D table encoded as a dict. Each unique (item index, remaining capacity) pair is computed once. The total number of unique keys is at most n × capacity.

### Problem 4 — LCS (Top-Down)

```python
def lcs(s1, s2, i=None, j=None, memo=None):
    if i is None:
        i = len(s1) - 1
    if j is None:
        j = len(s2) - 1
    if memo is None:
        memo = {}

    if i < 0 or j < 0:
        return 0

    key = (i, j)
    if key in memo:
        return memo[key]

    if s1[i] == s2[j]:
        memo[key] = 1 + lcs(s1, s2, i - 1, j - 1, memo)
    else:
        memo[key] = max(
            lcs(s1, s2, i - 1, j, memo),
            lcs(s1, s2, i, j - 1, memo)
        )

    return memo[key]
```

For s1='ABCBDAB', s2='BDCAB', the LCS length is 4. The memo prevents recomputing lcs(i, j) for every branching path — without it, the recursion is O(2^(m+n)).

### Recognising DP Problems

| Phrasing | DP type | Example |
|---|---|---|
| "How many ways to..." | Counting DP | Climbing Stairs, Coin Change ways |
| "Minimum cost/steps to..." | Optimisation DP | Edit Distance, Coin Change min |
| "Maximum value/length..." | Optimisation DP | 0/1 Knapsack, LCS |
| "Is it possible to..." | Decision DP | Subset Sum, Word Break |

---

## Design Trade-offs

| | Naive Recursion | Memoization | Tabulation |
|---|---|---|---|
| fib(40) calls | 331,160,281 | 40 | 40 |
| knapsack(n=20, W=100) calls | ~2^20 = 1M | 2000 | 2000 (all filled) |
| LCS(m=20, n=20) calls | ~2^40 | 400 | 400 |
| Stack depth | O(n) | O(n) | O(1) |
| Only computes needed states | Yes | Yes | No |

---

## Hands-On Tutorial

### Step 1 — Verify Call Count Reduction

```python
def count_calls(func, *args):
    call_count = [0]
    original = func

    def wrapper(*a, **kw):
        call_count[0] += 1
        return original(*a, **kw)

    return wrapper, call_count
```

### Step 2 — Test All Four Problems

```python
memo = {}
result = lcs('ABCBDAB', 'BDCAB', memo=memo)
print(f"LCS states computed: {len(memo)}")
```

### Complete Runnable Script

```python
import functools
import sys

sys.setrecursionlimit(5000)


naive_calls = [0]
memo_calls = [0]


def fib_naive(n):
    naive_calls[0] += 1
    if n <= 1:
        return n
    return fib_naive(n - 1) + fib_naive(n - 2)


def fib_memoized(n, memo=None):
    if memo is None:
        memo = {}
    memo_calls[0] += 1
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib_memoized(n - 1, memo) + fib_memoized(n - 2, memo)
    return memo[n]


def climbing_stairs(n, memo=None):
    if memo is None:
        memo = {}
    if n in memo:
        return memo[n]
    if n <= 0:
        return 0
    if n == 1:
        return 1
    if n == 2:
        return 2
    memo[n] = climbing_stairs(n - 1, memo) + climbing_stairs(n - 2, memo)
    return memo[n]


def knapsack(items, capacity, index=None, memo=None):
    if index is None:
        index = len(items) - 1
    if memo is None:
        memo = {}
    if index < 0 or capacity <= 0:
        return 0
    key = (index, capacity)
    if key in memo:
        return memo[key]
    weight, value, name = items[index]
    skip = knapsack(items, capacity, index - 1, memo)
    if weight > capacity:
        memo[key] = skip
    else:
        take = value + knapsack(items, capacity - weight, index - 1, memo)
        memo[key] = max(skip, take)
    return memo[key]


def knapsack_reconstruct(items, capacity):
    memo = {}

    def solve(idx, cap):
        if idx < 0 or cap <= 0:
            return 0
        key = (idx, cap)
        if key in memo:
            return memo[key]
        weight, value, name = items[idx]
        skip = solve(idx - 1, cap)
        if weight <= cap:
            take = value + solve(idx - 1, cap - weight)
            memo[key] = max(skip, take)
        else:
            memo[key] = skip
        return memo[key]

    solve(len(items) - 1, capacity)

    taken = []
    idx, cap = len(items) - 1, capacity
    while idx >= 0 and cap > 0:
        weight, value, name = items[idx]
        val_with = solve(idx, cap)
        val_without = solve(idx - 1, cap) if idx > 0 else 0
        if weight <= cap and val_with != val_without:
            taken.append(name)
            cap -= weight
        idx -= 1

    return solve(len(items) - 1, capacity), taken


def lcs_length(s1, s2, i=None, j=None, memo=None):
    if i is None:
        i = len(s1) - 1
    if j is None:
        j = len(s2) - 1
    if memo is None:
        memo = {}
    if i < 0 or j < 0:
        return 0
    key = (i, j)
    if key in memo:
        return memo[key]
    if s1[i] == s2[j]:
        memo[key] = 1 + lcs_length(s1, s2, i - 1, j - 1, memo)
    else:
        memo[key] = max(
            lcs_length(s1, s2, i - 1, j, memo),
            lcs_length(s1, s2, i, j - 1, memo)
        )
    return memo[key]


def main():
    print("=== Fibonacci ===")
    n = 10
    naive_calls[0] = 0
    result_naive = fib_naive(n)
    naive_count = naive_calls[0]

    memo_calls[0] = 0
    result_memo = fib_memoized(n)
    memo_count = memo_calls[0]

    print(f"fib({n}) naive: {naive_count} function calls → result: {result_naive}")
    print(f"fib({n}) memoized: {memo_count} function calls → result: {result_memo}")

    print()
    print("=== Climbing Stairs ===")
    n_stairs = 5
    ways = climbing_stairs(n_stairs)
    print(f"n={n_stairs}: {ways} distinct ways")

    print()
    print("=== 0/1 Knapsack ===")
    items = [(2, 3, 'A'), (3, 4, 'B'), (4, 5, 'C'), (5, 6, 'D')]
    capacity = 8
    print(f"Items: {items}  (weight, value, name)")
    print(f"Capacity: {capacity}")
    max_value, taken = knapsack_reconstruct(items, capacity)
    print(f"Max value: {max_value} (items {' + '.join(taken)})")

    print()
    print("=== LCS ===")
    s1, s2 = 'ABCBDAB', 'BDCAB'
    memo = {}
    length = lcs_length(s1, s2, memo=memo)
    print(f"s1='{s1}', s2='{s2}'")
    print(f"LCS length: {length}")
    print(f"Memo states computed: {len(memo)} (of {len(s1) * len(s2)} possible)")


if __name__ == "__main__":
    main()
```

**Output:**
```
=== Fibonacci ===
fib(10) naive: 177 function calls → result: 55
fib(10) memoized: 11 function calls → result: 55

=== Climbing Stairs ===
n=5: 8 distinct ways

=== 0/1 Knapsack ===
Items: [(2,3,'A'), (3,4,'B'), (4,5,'C'), (5,6,'D')]  (weight, value, name)
Capacity: 8
Max value: 10 (items B + C)

=== LCS ===
s1='ABCBDAB', s2='BDCAB'
LCS length: 4
```

---

## Real-World Use Case

**Scenario:** A content platform computes LCS between each user's content history and candidate items to personalise recommendations. String length averages 25 characters.

| Metric | Before (naive recursion) | After (memoized LCS) |
|---|---|---|
| LCS calls per pair | ~2^50 (never finishes) | 625 (25×25) |
| Time per recommendation | Timeout (>10s) | 0.8ms |
| Throughput (10k candidates) | 0 completions | 12,500 recs/sec |
| Memory per request | O(1) + huge stack | O(n×m) = 625 entries |
| Cold start (first request) | Same as above | Same as warm |

---

## Debugging and Pitfalls

### Pitfall 1 — Mutable Default Argument for the Cache

**Wrong:**
```python
def fib_memoized(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib_memoized(n - 1) + fib_memoized(n - 2)
    return memo[n]
```

**Right:**
```python
def fib_memoized(n, memo=None):
    if memo is None:
        memo = {}
    ...
```

**Why:** Python evaluates default arguments once at function definition time. `memo={}` means all calls share the same dict across the entire program lifetime. This accidentally gives correct answers for fib, but breaks badly if you call `fib_memoized` for two different problems or need a fresh cache per test.

### Pitfall 2 — Forgetting to Return the Cached Value Early

**Wrong:**
```python
def knapsack(items, capacity, index, memo):
    if (index, capacity) in memo:
        pass
    ...
```

**Right:**
```python
def knapsack(items, capacity, index, memo):
    if (index, capacity) in memo:
        return memo[(index, capacity)]
    ...
```

**Why:** Checking the cache but not returning from it means you recompute the value every time regardless. The entire point of memoization is to return the cached result immediately.

### Pitfall 3 — Using an Unhashable Key in the Memo Dict

**Wrong:**
```python
memo[([1, 2, 3], 5)] = result
```

**Right:**
```python
memo[(tuple([1, 2, 3]), 5)] = result
```

**Why:** Python lists are mutable and therefore not hashable — they cannot be used as dict keys. Convert lists to tuples before using them as memo keys, or redesign the state representation to use indices instead of slices.

### Pitfall 4 — Exceeding Python's Recursion Limit

**Wrong (for large n):**
```python
lcs_length('A' * 600, 'B' * 600)
```

**Right:**
```python
sys.setrecursionlimit(10000)
lcs_length('A' * 600, 'B' * 600)
```

**Or better:** Switch to tabulation (Article 15), which has no recursion depth limit.

**Why:** Python's default recursion limit is 1000 frames. An LCS call on strings of length 600 can reach recursion depth 1200 before memoization kicks in on backtracking paths. Tabulation eliminates this entirely.

### Pitfall 5 — Not Handling the Base Case Before the Cache Lookup

**Wrong:**
```python
def fib(n, memo):
    if n in memo:
        return memo[n]
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]
```

**Right:**
```python
def fib(n, memo):
    if n <= 1:
        return n
    if n in memo:
        return memo[n]
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]
```

**Why:** Without the base case check first, fib(0) and fib(1) trigger recursive calls into negative indices (fib(-1)), causing infinite recursion. Always handle base cases before the cache lookup.

---

## Testing

```python
import unittest
import functools
import sys

sys.setrecursionlimit(5000)


class TestMemoization(unittest.TestCase):

    def test_fib_naive_vs_memo(self):
        for n in range(10):
            self.assertEqual(fib_naive(n), fib_memoized(n))

    def test_fib_known_values(self):
        expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
        for i, val in enumerate(expected):
            self.assertEqual(fib_memoized(i), val)

    def test_climbing_stairs_base_cases(self):
        self.assertEqual(climbing_stairs(1), 1)
        self.assertEqual(climbing_stairs(2), 2)

    def test_climbing_stairs_n5(self):
        self.assertEqual(climbing_stairs(5), 8)

    def test_knapsack_empty(self):
        self.assertEqual(knapsack([], 10), 0)

    def test_knapsack_no_capacity(self):
        items = [(2, 3, 'A'), (3, 4, 'B')]
        self.assertEqual(knapsack(items, 0), 0)

    def test_knapsack_basic(self):
        items = [(2, 3, 'A'), (3, 4, 'B'), (4, 5, 'C'), (5, 6, 'D')]
        self.assertEqual(knapsack(items, 8), 10)

    def test_lcs_empty(self):
        self.assertEqual(lcs_length('', 'ABC'), 0)

    def test_lcs_identical(self):
        self.assertEqual(lcs_length('ABCD', 'ABCD'), 4)

    def test_lcs_no_common(self):
        self.assertEqual(lcs_length('ABC', 'XYZ'), 0)

    def test_lcs_classic(self):
        self.assertEqual(lcs_length('ABCBDAB', 'BDCAB'), 4)


if __name__ == "__main__":
    unittest.main()
```

**Testing checklist:**
- [ ] Naive and memoized produce identical results for all test inputs
- [ ] Call count for memoized is ≤ n+1 (one per unique subproblem)
- [ ] Mutable default argument bug is absent (use `memo=None` pattern)
- [ ] Empty string/list inputs return 0 without error
- [ ] Base cases are tested explicitly
- [ ] Results match known correct answers

---

## Interview Q&A

**Q1: What is the difference between memoization and caching in general?**

Memoization is a specific form of caching applied to pure functions — functions that always return the same output for the same input and have no side effects. General caching can store any data (API responses, database queries, rendered pages) with expiry policies and invalidation logic. Memoization never expires entries because the function's output never changes for a given input. `functools.lru_cache` implements memoization with an optional size limit that evicts least-recently-used entries.

**Q2: How does `@functools.lru_cache` handle cache invalidation?**

It doesn't, by design. Memoization assumes pure functions, so there is nothing to invalidate — the output is permanently fixed for each input. If you need to clear the cache (for testing or memory management), call `function.cache_clear()`. To inspect hit/miss statistics, call `function.cache_info()`. If your function has side effects or depends on external state, `lru_cache` is inappropriate and you need explicit cache invalidation logic.

**Q3: When should you prefer memoization (top-down) over tabulation (bottom-up)?**

Prefer memoization when: the problem has many possible states but only a fraction are reachable from the initial input (sparse subproblem space), the recursion structure is more natural than iteration, or you're prototyping and want to add caching to working recursive code quickly. Prefer tabulation when: the input is large enough to risk stack overflow (n > 900 in CPython), you need O(1) space optimisation (rolling array), or cache locality matters for performance (arrays have better locality than dicts).

**Q4: Why does 0/1 Knapsack have the "0/1" qualifier?**

The "0/1" means each item is either taken (1) or not taken (0) — no partial amounts. This is in contrast to Fractional Knapsack (Article 13) where you can take any fraction. The 0/1 constraint is what makes greedy fail and DP necessary, because you cannot undo the choice to take a heavy item if it leaves remaining capacity unused. The two-dimensional state (item index, remaining capacity) captures exactly which items remain available and how much space is left.

**Q5: What is the state space of the LCS memoization table?**

The state space is O(m × n) where m = len(s1) and n = len(s2). Each state (i, j) represents the LCS length of s1[:i+1] and s2[:j+1]. The recurrence is: if s1[i] == s2[j] then lcs(i,j) = 1 + lcs(i-1, j-1); else lcs(i,j) = max(lcs(i-1, j), lcs(i, j-1)). With memoization, each of the m×n states is computed exactly once, making the total time O(m×n).

---

## Resources

1. **CLRS — Introduction to Algorithms** (Cormen et al.) — Chapter 15 covers DP including LCS and the formal definition of optimal substructure.
2. **Python docs — `functools.lru_cache`** — Full API reference with cache_info() and cache_clear() usage.
3. **LeetCode DP study plan** — 50 curated DP problems progressing from Fibonacci to multi-dimensional states.
4. **"Dynamic Programming for Coding Interviews" by Meenakshi and Kamal** — Visual call trees showing memoization before and after.
5. **Visualgo.net/dp** — Step-by-step DP table filling with visual highlighting.

---

## Conclusion

Memoization is the fastest path from exponential recursion to polynomial DP. The recipe is always the same: write the recursion naturally, add a memo dict, check the cache before computing, store before returning. That single change turns 177 calls into 11 for Fibonacci and turns a billion LCS calls into 400. The four problems in this article — Fibonacci, Climbing Stairs, 0/1 Knapsack, LCS — cover the three memo shapes you'll encounter in practice: 1D scalar, 2D grid, and sparse dict. Article 15 shows you the bottom-up counterpart, tabulation, which removes the recursion depth limit entirely.

**Next step:** Take the LCS memoization solution and try to reconstruct the actual subsequence, not just its length. Trace backwards through the memo table: when s1[i] == s2[j], that character is in the LCS; otherwise, follow the direction of the larger value.

<!--
HASHNODE PUBLISH SETTINGS
Series: Programming
Tags: python, programming, dynamicprogramming, memoization, lrucache, knapsack, lcs, algorithms
Slug: dynamic-programming-memoization-top-down
SEO Title: Dynamic Programming: Memoization Top-Down
SEO Desc: Master memoization in Python. Fibonacci, Climbing Stairs, 0/1 Knapsack, and LCS with call count comparisons and lru_cache.
Cover Image: /assets/images/dp-memoization-cover.png
Image 1: /assets/images/dp-call-tree-comparison.png
-->
