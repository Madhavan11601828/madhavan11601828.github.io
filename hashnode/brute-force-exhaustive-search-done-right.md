---
title: 'Brute Force: Exhaustive Search Done Right'
slug: brute-force-exhaustive-search-done-right
publishedAt: 2026-09-29
tags:
  - slug: python
    name: Python
  - slug: programming
    name: Programming
  - slug: algorithms
    name: Algorithms
  - slug: beginner
    name: Beginner
  - slug: bruteforce
    name: BruteForce
  - slug: itertools
    name: itertools
cover: https://madhavan11601828.github.io/assets/images/programming-brute-force-cover.png
seo:
  title: 'Brute Force: Exhaustive Search Done Right'
  description: 'Learn when brute force is correct in Python. Master linear search, all pairs, combinations, and permutations with practical examples.'
seriesSlug: programming
domain: venumadhavan.hashnode.dev
---

Brute force has a bad reputation it does not entirely deserve. Sometimes, exhaustive search is the correct algorithm — not a placeholder until you find something smarter. Knowing when to use it, what its limits are, and how to implement the four main patterns cleanly is a real skill.

## 1. Key Takeaways

- Understand when brute force is the correct algorithm, not a compromise
- Know the complexity classes O(n), O(n²), O(2^n), O(n!) and concrete timing intuitions for each
- Implement four brute-force patterns: linear search, all pairs, all subsets with `itertools.combinations`, all permutations with `itertools.permutations`
- Build two-sum brute force, combination sum finder, and shortest TSP route through 4 cities
- Recognise when n is small enough that brute force is fine and when to stop and find a smarter algorithm

## 2. Who This Is For & Prerequisites

This article is for Python beginners who are comfortable writing for-loops and using lists, but have not thought systematically about algorithm design. If you have ever solved a problem by "trying all possibilities" in a loop, this article formalises that instinct and shows you its limits.

**Prerequisites:**
- Python for-loops, lists, functions
- Basic understanding of what `itertools` is (or willingness to learn here)
- No maths background required

## 3. What You Will Build

Three standalone programs: a two-sum brute force, a combination sum finder using `itertools.combinations`, and a shortest-route finder through 4 cities using exhaustive permutation.

**Expected output:**
```
=== Two Sum (Brute Force) ===
Input: [2, 7, 11, 15], target=9
Result: (0, 1) → values (2, 7)

=== Combination Sum ===
Input: [1, 2, 3, 4, 5], target=7, choose 3
Found: [[1, 2, 4], [2, 5], [3, 4]]

=== Shortest Route (4 cities) ===
Cities: A, B, C, D
Distances: AB=10, AC=15, AD=20, BC=12, BD=8, CD=5
All routes checked: 24
Shortest: A→B→D→C→A = 43
```

## 4. Concept Simply

**The combination lock analogy:** Imagine a combination lock with 4 digits, each 0–9. You have forgotten the combination. Brute force means trying 0000, 0001, 0002, ... all the way to 9999. That is 10,000 combinations — easy for a computer in milliseconds. Now imagine a 10-digit lock: 10^10 = 10 billion combinations. Still feasible if each check takes a nanosecond (10 seconds), but slow at human scale. A 20-digit lock: 10^20 — impossible regardless of how fast the computer is. Brute force works when the combination space is small enough to enumerate completely within your time budget.

**Complexity and concrete timing:**

| Complexity | n = 10 | n = 20 | n = 50 | n = 100 | Verdict |
|---|---|---|---|---|---|
| O(n) | 10 ops | 20 ops | 50 ops | 100 ops | Always fine |
| O(n²) | 100 ops | 400 ops | 2,500 ops | 10,000 ops | Fine up to n ≈ 10,000 |
| O(2^n) | 1,024 | 1M | 10^15 (years) | — | n < 20 only |
| O(n!) | 3.6M | 2.4 × 10^18 (centuries) | — | — | n < 12 only |

At 10^9 operations per second (a modern CPU), O(2^n) for n=50 would take ~30 million years. This is not a performance concern — it is a physical impossibility. Brute force is only appropriate when your n is small enough to fit in the "fine" cells of this table.

## 5. Core Components

### 5.1 Pattern 1: Linear Search — O(n)

The simplest brute force: check every element until you find what you want.

```python
def linear_search(items: list, target) -> int:
    for i, item in enumerate(items):
        if item == target:
            return i
    return -1


numbers = [15, 3, 9, 7, 1]
print(linear_search(numbers, 9))   # 2
print(linear_search(numbers, 99))  # -1
```

This is O(n) — in the worst case, you check every element. It is the right algorithm when:
- The list is unsorted (you cannot use binary search)
- You only search occasionally (not worth the O(n log n) cost of sorting first)
- n is small

### 5.2 Pattern 2: All Pairs — O(n²)

Check every pair of elements. Used for two-sum, finding duplicates, all-pairs distance.

```python
def two_sum_brute(nums: list[int], target: int) -> tuple[int, int] | None:
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            if nums[i] + nums[j] == target:
                return (i, j)
    return None
```

Two nested loops: the outer picks the first element, the inner picks every subsequent element. Starting `j` at `i + 1` avoids checking pairs twice and avoids using the same element twice.

### 5.3 Pattern 3: All Subsets — O(2^n)

Use `itertools.combinations` to enumerate all subsets of a specific size.

```python
from itertools import combinations


def combination_sum(nums: list[int], target: int, choose: int) -> list[list[int]]:
    results = []
    for combo in combinations(nums, choose):
        if sum(combo) == target:
            results.append(list(combo))
    return results
```

`combinations(nums, k)` generates all ways to choose `k` items from `nums` without repetition and without regard to order. For a list of length n, there are C(n, k) = n! / (k! × (n-k)!) such combinations. For n=20, k=10, that is 184,756 combinations — fast. For n=50, k=25, it is ~1.26 × 10^14 — impossible.

### 5.4 Pattern 4: All Permutations — O(n!)

Use `itertools.permutations` to enumerate all orderings.

```python
from itertools import permutations


def all_permutations(items: list) -> list[tuple]:
    return list(permutations(items))


routes = all_permutations(["A", "B", "C", "D"])
print(len(routes))  # 24
```

`permutations(items)` generates all n! orderings. For n=4, that is 24. For n=12, that is 479 million — pushing feasibility limits. For n=15, it is 1.3 trillion — impossible.

## 6. Hands-on Tutorial

### Step 1: Two-sum brute force

```python
def two_sum_brute(nums: list[int], target: int) -> tuple[int, int] | None:
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return (i, j)
    return None
```

### Step 2: Combination sum

```python
from itertools import combinations


def combination_sum(nums: list[int], target: int, choose: int) -> list[list[int]]:
    results = []
    for combo in combinations(nums, choose):
        if sum(combo) == target:
            results.append(list(combo))
    return results
```

### Step 3: Shortest route (Travelling Salesman for 4 cities)

```python
from itertools import permutations


def shortest_route(cities: list[str], distances: dict[tuple, int]) -> tuple[list[str], int]:
    def route_distance(route: tuple) -> int:
        total = 0
        for i in range(len(route)):
            a = route[i]
            b = route[(i + 1) % len(route)]
            key = (min(a, b), max(a, b))
            total += distances[key]
        return total

    start = cities[0]
    other_cities = cities[1:]
    best_route = None
    best_dist = float("inf")
    total_routes = 0

    for perm in permutations(other_cities):
        route = (start,) + perm
        dist = route_distance(route)
        total_routes += 1
        if dist < best_dist:
            best_dist = dist
            best_route = list(route)

    return best_route, best_dist, total_routes
```

### Step 4: Complete runnable script

```python
from itertools import combinations, permutations


def two_sum_brute(nums: list[int], target: int) -> tuple[int, int] | None:
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return (i, j)
    return None


def combination_sum(nums: list[int], target: int, choose: int) -> list[list[int]]:
    results = []
    for combo in combinations(nums, choose):
        if sum(combo) == target:
            results.append(list(combo))
    return results


def shortest_route(cities: list[str], distances: dict[tuple, int]):
    def route_dist(route):
        total = 0
        for i in range(len(route)):
            a, b = route[i], route[(i + 1) % len(route)]
            total += distances[(min(a, b), max(a, b))]
        return total

    start = cities[0]
    others = cities[1:]
    best_route = None
    best_dist = float("inf")
    total_routes = 0

    for perm in permutations(others):
        route = (start,) + perm
        dist = route_dist(route)
        total_routes += 1
        if dist < best_dist:
            best_dist = dist
            best_route = list(route)

    return best_route, best_dist, total_routes


if __name__ == "__main__":
    print("=== Two Sum (Brute Force) ===")
    nums = [2, 7, 11, 15]
    target = 9
    result = two_sum_brute(nums, target)
    print(f"Input: {nums}, target={target}")
    if result:
        i, j = result
        print(f"Result: {result} → values ({nums[i]}, {nums[j]})")

    print()
    print("=== Combination Sum ===")
    nums2 = [1, 2, 3, 4, 5]
    target2 = 7
    choose = 3
    print(f"Input: {nums2}, target={target2}, choose {choose}")
    found = combination_sum(nums2, target2, choose)
    print(f"Found: {found}")

    print()
    print("=== Shortest Route (4 cities) ===")
    cities = ["A", "B", "C", "D"]
    distances = {
        ("A", "B"): 10,
        ("A", "C"): 15,
        ("A", "D"): 20,
        ("B", "C"): 12,
        ("B", "D"): 8,
        ("C", "D"): 5,
    }
    print(f"Cities: {', '.join(cities)}")
    dist_str = ", ".join(f"{a}{b}={v}" for (a,b),v in distances.items())
    print(f"Distances: {dist_str}")
    best, best_d, total = shortest_route(cities, distances)
    print(f"All routes checked: {total}")
    route_str = "→".join(best) + "→" + best[0]
    print(f"Shortest: {route_str} = {best_d}")
```

## 7. Common Mistakes

**Mistake 1: Starting the inner loop at `i` instead of `i + 1` in all-pairs search**

```python
# Wrong — checks same index twice and duplicates pairs
for i in range(len(nums)):
    for j in range(i, len(nums)):  # j starts at i — (nums[i], nums[i]) is a pair with itself
        if nums[i] + nums[j] == target:
            return (i, j)

# Right — start inner loop at i+1
for i in range(len(nums)):
    for j in range(i + 1, len(nums)):  # No self-pairs, no duplicate pairs
        if nums[i] + nums[j] == target:
            return (i, j)
```

Starting `j` at `i` instead of `i + 1` means you check whether `nums[i] + nums[i] == target` — using the same element twice. It also checks every pair in both orders (i=0, j=1) and (i=1, j=0), which doubles the work for no benefit.

**Mistake 2: Not normalising distance key order in TSP**

```python
# Wrong — looks up ("B", "A") when distances only has ("A", "B")
distances = {("A", "B"): 10}
a, b = "B", "A"
dist = distances[(a, b)]  # KeyError!

# Right — always use (min, max) to normalise the key
dist = distances[(min(a, b), max(a, b))]  # ("A", "B") → 10
```

An undirected edge between A and B should be stored under one canonical key. Using `(min(a, b), max(a, b))` ensures "A to B" and "B to A" look up the same entry.

**Mistake 3: Applying brute force to a problem where n makes it infeasible**

```python
# Wrong — 2^30 = 1 billion combinations; this runs for minutes or hours
from itertools import combinations
nums = list(range(30))
for combo in combinations(nums, 15):  # C(30,15) = 155 million combinations
    if sum(combo) == 225:
        print(combo); break

# Right — use dynamic programming for subset sum
# Or check n before running:
n = len(nums)
k = 15
import math
n_combinations = math.comb(n, k)
if n_combinations > 10_000_000:
    print(f"Too many combinations ({n_combinations:,}). Use a smarter algorithm.")
else:
    for combo in combinations(nums, k):
        if sum(combo) == 225:
            print(combo); break
```

Always estimate the number of candidates before running an exhaustive search. If it exceeds your acceptable computation time, stop and find a better algorithm.

## 8. Interview Q&A

**Q1: When is brute force the right algorithm?**

Brute force is the right algorithm when n is small enough that exhaustive search completes well within your time budget, when correctness is paramount and no smarter algorithm is known or implementable quickly, or when you need to verify the output of a smarter algorithm against an exhaustive reference. For n < 10 for O(2^n) problems and n < 12 for O(n!) problems, brute force is often the simplest, most obviously correct approach. In competitive programming and system design interviews, a brute force solution that is correct and clearly implemented is a better starting point than a complicated optimisation that has a subtle bug.

**Q2: What is the difference between combinations and permutations, and when do you use each?**

`combinations(items, k)` generates all ways to choose k items from a set where order does not matter — choosing teammates for a project, selecting features for a model. `permutations(items)` generates all orderings where order matters — routes between cities (A→B→C is different from A→C→B), arranging items in sequence. The count of combinations is C(n, k) = n! / (k! × (n-k)!). The count of permutations of all n items is n!. Use combinations when "which items" matters but not "in what order". Use permutations when both which items and what order matter.

**Q3: How do you recognise that a brute force solution needs to be replaced with a smarter algorithm?**

Three signals: the solution runs noticeably slowly for the expected input size, the input size n is in the infeasible zone for the complexity class (n > 20 for O(2^n), n > 12 for O(n!), n > 100,000 for O(n²)), or profiling shows the brute force loop dominates total runtime. The transition moment is when you run the brute force on the largest expected input and it takes more than 1–2 seconds. At that point, identify the problem type: two-sum → hash map (O(n)); subset sum → dynamic programming (O(n × target)); TSP → dynamic programming with bitmask (O(2^n × n²)) for exact, or heuristics for large n.

**Q4: Can you explain how itertools.combinations and itertools.permutations work under the hood?**

Both are lazy iterators — they generate one result at a time rather than creating all results in memory at once. `combinations` works by maintaining an index array that tracks which elements from the input are currently selected; it increments indices from right to left, similar to counting. `permutations` generates the next permutation in lexicographic order using the "next permutation" algorithm: find the rightmost element that can be increased, increase it by swapping with the smallest element to its right that is larger, then reverse the suffix. Both use O(k) memory regardless of how many combinations or permutations exist. This is why you can write `for combo in combinations(range(1000), 3)` without consuming gigabytes of RAM.

## 9. Resources

- [Python `itertools` documentation](https://docs.python.org/3/library/itertools.html) — Complete reference for `combinations`, `permutations`, `combinations_with_replacement`, `product`, and more — the full toolkit for combinatorial brute force
- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/) — Quick reference for the time complexity of common algorithms and data structures with growth-rate graphs
- [LeetCode: Two Sum (Problem 1)](https://leetcode.com/problems/two-sum/) — The canonical two-sum problem — implement brute force first, then hash map optimisation, to see the difference in practice
- [Python `math.comb`](https://docs.python.org/3/library/math.html#math.comb) — Use `math.comb(n, k)` to check how many combinations you are about to generate before running a brute force search

## 10. Conclusion & Next Steps

Brute force is not "writing bad code" — it is correctly recognising when exhaustive search is the appropriate tool. The four patterns you learned — linear search, all pairs, all subsets, all permutations — cover the vast majority of exhaustive search problems you will encounter. More importantly, you now have a mental model for when to stop: when n is large enough that the complexity class puts you in the infeasible zone, a smarter algorithm is needed.

The skills you practised here — breaking a problem into "generate candidates" and "check each candidate" — transfer directly to more advanced algorithms. Dynamic programming is a smarter way to enumerate subsets. Greedy algorithms are a smarter way to search permutations. Constraint programming (Article 5 of this series) is a smarter way to enumerate valid assignments. Brute force is where you start. The rest of the series is how you go faster.

**This article completes the Programming series foundations arc. Future articles will explore algorithm design patterns: divide and conquer, dynamic programming, greedy algorithms, and backtracking — each building on the brute-force intuition you have now.**

---

*Found this useful? Subscribe to the newsletter for weekly deep dives into Python, AI engineering, and system design — straight to your inbox, no fluff.*
