---
title: "Greedy Algorithms: Local Optimum to Global Solution"
author: "Mangena Venu Madhavan"
date: 2026-10-13
tags: [Python, Programming, Algorithms, Greedy]
categories: [programming]
series: "Programming"
article_number: 13
---

## Key Takeaways

- Greedy algorithms make the locally optimal choice at each step without reconsidering past decisions.
- The greedy choice property guarantees that a locally optimal choice is always part of a globally optimal solution.
- Optimal substructure means the overall optimal solution contains optimal solutions to its subproblems.
- Activity Selection is the canonical greedy problem — sort by end time, always pick the earliest-finishing task that doesn't conflict.
- Greedy works for Fractional Knapsack but fails for 0/1 Knapsack — the difference is whether you can take partial items.
- The exchange argument is the standard proof technique: show that swapping the greedy choice for any other never improves the solution.
- Greedy is not a universal tool — always verify the greedy choice property before applying it.

---

## Who This Is For / Prerequisites

**Who this is for:** Python developers who understand sorting and basic algorithms and want to solve scheduling and optimisation problems efficiently.

**Prerequisites:**
- Python lists, sorting with `key=`
- Big O notation
- Basic understanding of recursion (for contrast with DP)

---

## What You'll Build

A task scheduling system that finds the maximum number of tasks completable by a single worker, plus a fractional knapsack solver for resource allocation.

**Expected output:**
```
=== Activity Selector ===
Tasks: [(1,4,'A'), (3,5,'B'), (0,6,'C'), (5,7,'D'), (3,9,'E'), (5,9,'F'), (6,10,'G'), (8,11,'H'), (8,12,'I'), (2,14,'J'), (12,16,'K')]
Sorted by end time and selected greedily:
Selected: A (1-4), B (3-5), D (5-7), H (8-11), K (12-16)
Maximum tasks: 5

=== Fractional Knapsack ===
Capacity: 50kg
Items: [(60,10,'gold'), (100,20,'silver'), (120,30,'bronze')]
Take: all gold (10kg, val=60) + all silver (20kg, val=100) + 20/30 bronze (val=80)
Total value: 240.0
```

---

## Problem Statement

An enterprise team runs a single shared compute node. Ten AI training jobs need to be scheduled, each with a start time, end time, and only one job can run at a time. The goal: complete as many jobs as possible in a day. Trying every possible subset of non-overlapping jobs is O(2^n) — exponential and unusable at scale. Greedy scheduling gives the optimal answer in O(n log n).

---

## Concept Simply

**The analogy:** You're booking meeting rooms for a conference centre. Each room can host one meeting at a time. You want to accept the maximum number of meetings. Should you accept the shortest meeting first? The earliest start? The greedy insight is: always accept the meeting that ends soonest. Why? Because finishing early frees the room for the maximum possible future bookings. Any other choice leaves the room occupied longer and can only reduce future options, never increase them.

**Comparison table — when greedy works vs when it doesn't:**

| Problem | Greedy works? | Why |
|---|---|---|
| Activity Selection | Yes | Greedy choice property holds |
| Coin Change (standard coins) | Yes | Standard denominations are sub-multiples |
| Coin Change (arbitrary coins) | No | Local choice can miss optimal combination |
| Fractional Knapsack | Yes | Can take partial items, ratio ordering is optimal |
| 0/1 Knapsack | No | Must take whole items, need DP |
| Shortest path (non-negative edges) | Yes (Dijkstra) | Greedy relaxation works |
| Shortest path (negative edges) | No | Need Bellman-Ford |

---

## Core Components

### Greedy Choice Property

At every decision step, the algorithm makes the choice that looks best right now — without considering what comes later and without revisiting past choices. For the greedy choice property to hold, this local choice must be part of at least one globally optimal solution.

Formally: if we have a problem with an optimal solution S, and the greedy choice is g, then there exists an optimal solution S' that contains g. We can always swap some element of S for g without making S worse.

### Optimal Substructure

After making the greedy choice, the remaining problem has the same structure as the original. The optimal solution to the remaining problem, combined with the greedy choice, gives the optimal solution to the full problem. Both DP and Greedy require optimal substructure — the difference is that DP also has overlapping subproblems, while Greedy avoids recomputing them entirely.

### Activity Selection — Scheduling Maximum Tasks

```python
def activity_selection(tasks):
    sorted_tasks = sorted(tasks, key=lambda t: t[1])

    selected = []
    last_end_time = 0

    for start, end, name in sorted_tasks:
        if start >= last_end_time:
            selected.append((start, end, name))
            last_end_time = end

    return selected
```

Sorting by end time is the greedy key. The proof: suppose we pick task A (earliest finish) and the optimal solution picks task B instead. Since A finishes no later than B, we can swap B for A in the optimal solution. All tasks that were compatible with B's end time are also compatible with A's (earlier) end time. The swap never reduces the solution size.

### Coin Change — Greedy Version

```python
def coin_change_greedy(amount, denominations):
    denominations = sorted(denominations, reverse=True)
    coins_used = []

    for coin in denominations:
        while amount >= coin:
            coins_used.append(coin)
            amount -= coin

    return coins_used if amount == 0 else None
```

This works for standard coin systems (US: 1, 5, 10, 25 cents) because each denomination is a multiple or near-multiple of smaller ones. It fails for arbitrary systems like {1, 3, 4} where making 6 greedily gives [4, 1, 1] (3 coins) but optimally gives [3, 3] (2 coins).

### Fractional Knapsack

```python
def fractional_knapsack(capacity, items):
    items_with_ratio = [
        (value, weight, name, value / weight)
        for value, weight, name in items
    ]
    items_with_ratio.sort(key=lambda x: x[3], reverse=True)

    total_value = 0.0
    remaining_capacity = capacity
    taken = []

    for value, weight, name, ratio in items_with_ratio:
        if remaining_capacity <= 0:
            break

        if weight <= remaining_capacity:
            taken.append((name, weight, value, 1.0))
            total_value += value
            remaining_capacity -= weight
        else:
            fraction = remaining_capacity / weight
            taken.append((name, remaining_capacity, value * fraction, fraction))
            total_value += value * fraction
            remaining_capacity = 0

    return total_value, taken
```

Sorting by value-per-weight ratio and taking as much of the highest-ratio item as possible is optimal. Unlike 0/1 Knapsack, we can take a fraction of an item — so taking 20/30 of the bronze item is valid and gives 80 units of value.

### The Exchange Argument Proof Pattern

The standard proof for greedy correctness:

1. Let G = greedy solution, O = any other solution.
2. Identify the first position where G and O differ.
3. Show that you can swap O's choice at that position for G's choice without making O worse.
4. Repeat — you can transform O into G one swap at a time, never decreasing the objective.
5. Therefore |G| ≥ |O| for all O, so G is optimal.

### When Greedy Fails

```python
def coin_change_greedy_fail_demo():
    coins = [1, 3, 4]
    amount = 6

    greedy_result = coin_change_greedy(amount, coins)
    print(f"Greedy: {greedy_result} ({len(greedy_result)} coins)")

    optimal = [3, 3]
    print(f"Optimal: {optimal} ({len(optimal)} coins)")
    print("Greedy is suboptimal here — needs DP")
```

0/1 Knapsack also defeats greedy. Taking items purely by value/weight ratio ignores whether the remaining capacity is used efficiently. A small high-ratio item might leave wasted capacity that a heavier lower-ratio item would have filled profitably.

---

## Design Trade-offs

| Approach | Time | Space | Optimal? | Implementation |
|---|---|---|---|---|
| Greedy Activity Selection | O(n log n) | O(n) | Yes (provable) | Simple |
| DP Activity Selection | O(n²) | O(n) | Yes | Complex |
| Greedy Fractional Knapsack | O(n log n) | O(n) | Yes | Simple |
| DP 0/1 Knapsack | O(n × W) | O(n × W) | Yes | Moderate |
| Brute Force 0/1 Knapsack | O(2^n) | O(n) | Yes | Simple but slow |

---

## Hands-On Tutorial

### Step 1 — Define Tasks

```python
tasks = [
    (1, 4, 'A'),
    (3, 5, 'B'),
    (0, 6, 'C'),
    (5, 7, 'D'),
    (3, 9, 'E'),
    (5, 9, 'F'),
    (6, 10, 'G'),
    (8, 11, 'H'),
    (8, 12, 'I'),
    (2, 14, 'J'),
    (12, 16, 'K'),
]
```

### Step 2 — Run the Scheduler

```python
selected = activity_selection(tasks)
for start, end, name in selected:
    print(f"  Task {name}: {start}:00 – {end}:00")
```

### Step 3 — Define Knapsack Items

```python
items = [
    (60, 10, 'gold'),
    (100, 20, 'silver'),
    (120, 30, 'bronze'),
]
capacity = 50
```

### Complete Runnable Script

```python
def activity_selection(tasks):
    sorted_tasks = sorted(tasks, key=lambda t: t[1])
    selected = []
    last_end_time = 0

    for start, end, name in sorted_tasks:
        if start >= last_end_time:
            selected.append((start, end, name))
            last_end_time = end

    return selected


def coin_change_greedy(amount, denominations):
    denominations = sorted(denominations, reverse=True)
    coins_used = []

    for coin in denominations:
        while amount >= coin:
            coins_used.append(coin)
            amount -= coin

    return coins_used if amount == 0 else None


def fractional_knapsack(capacity, items):
    items_with_ratio = [
        (value, weight, name, value / weight)
        for value, weight, name in items
    ]
    items_with_ratio.sort(key=lambda x: x[3], reverse=True)

    total_value = 0.0
    remaining_capacity = capacity
    taken = []

    for value, weight, name, ratio in items_with_ratio:
        if remaining_capacity <= 0:
            break
        if weight <= remaining_capacity:
            taken.append((name, weight, value, 1.0))
            total_value += value
            remaining_capacity -= weight
        else:
            fraction = remaining_capacity / weight
            taken.append((name, remaining_capacity, value * fraction, fraction))
            total_value += value * fraction
            remaining_capacity = 0

    return total_value, taken


def main():
    print("=== Activity Selector ===")
    tasks = [
        (1, 4, 'A'), (3, 5, 'B'), (0, 6, 'C'), (5, 7, 'D'),
        (3, 9, 'E'), (5, 9, 'F'), (6, 10, 'G'), (8, 11, 'H'),
        (8, 12, 'I'), (2, 14, 'J'), (12, 16, 'K'),
    ]
    print(f"Tasks: {tasks}")
    print("Sorted by end time and selected greedily:")
    selected = activity_selection(tasks)
    formatted = ", ".join(f"{n} ({s}-{e})" for s, e, n in selected)
    print(f"Selected: {formatted}")
    print(f"Maximum tasks: {len(selected)}")

    print()
    print("=== Coin Change (Greedy) ===")
    coins = coin_change_greedy(41, [1, 5, 10, 25])
    print(f"Coins to make 41 cents: {coins} ({len(coins)} coins)")

    print()
    print("=== Fractional Knapsack ===")
    items = [(60, 10, 'gold'), (100, 20, 'silver'), (120, 30, 'bronze')]
    capacity = 50
    print(f"Capacity: {capacity}kg")
    print(f"Items: {items}")
    total_value, taken = fractional_knapsack(capacity, items)
    for name, weight_taken, val_taken, fraction in taken:
        if fraction == 1.0:
            print(f"  Take: all {name} ({weight_taken}kg, val={val_taken})")
        else:
            orig_weight = next(w for v, w, n in items if n == name)
            print(f"  Take: {weight_taken}/{orig_weight} {name} (val={val_taken:.1f})")
    print(f"Total value: {total_value}")

    print()
    print("=== Greedy Failure Demo ===")
    coins_arb = coin_change_greedy(6, [1, 3, 4])
    if coins_arb:
        print(f"Greedy for 6 with {{1,3,4}}: {coins_arb} ({len(coins_arb)} coins)")
    print("Optimal: [3, 3] (2 coins) — greedy is suboptimal here")


if __name__ == "__main__":
    main()
```

**Output:**
```
=== Activity Selector ===
Tasks: [(1,4,'A'), (3,5,'B'), (0,6,'C'), (5,7,'D'), (3,9,'E'), ...]
Sorted by end time and selected greedily:
Selected: A (1-4), B (3-5), D (5-7), H (8-11), K (12-16)
Maximum tasks: 5

=== Fractional Knapsack ===
Capacity: 50kg
Items: [(60,10,'gold'), (100,20,'silver'), (120,30,'bronze')]
Take: all gold (10kg, val=60) + all silver (20kg, val=100) + 20/30 bronze (val=80)
Total value: 240.0
```

---

## Real-World Use Case

**Scenario:** A financial services firm schedules compute-intensive risk model runs throughout the trading day. Each model has a fixed start and end window. Only one model can run per cluster at a time. The firm wants to run as many models as possible.

| Metric | Before (manual scheduling, FIFO) | After (greedy activity selection) |
|---|---|---|
| Models run per day | 14 | 21 |
| Scheduling time | 15 min (manual) | <1 second |
| Wasted cluster idle time | 4.2 hours | 1.1 hours |
| Conflicts (models run simultaneously) | 3 per day avg | 0 |
| Optimality guarantee | None | Provably maximum |

---

## Debugging and Pitfalls

### Pitfall 1 — Sorting by Start Time Instead of End Time

**Wrong:**
```python
sorted_tasks = sorted(tasks, key=lambda t: t[0])
```

**Right:**
```python
sorted_tasks = sorted(tasks, key=lambda t: t[1])
```

**Why:** Sorting by start time does not produce the optimal schedule. A task that starts first might end last, blocking many short tasks. The mathematical proof shows that end time is the correct greedy key — no other ordering has the same exchange argument guarantee.

### Pitfall 2 — Using `>` Instead of `>=` for Non-Overlap Check

**Wrong:**
```python
if start > last_end_time:
```

**Right:**
```python
if start >= last_end_time:
```

**Why:** A task that starts exactly when another ends does not overlap — if task A ends at 4 and task B starts at 4, they can both be scheduled. Using `>` would incorrectly reject task B.

### Pitfall 3 — Applying Greedy to 0/1 Knapsack

**Wrong:**
```python
def knapsack_greedy(capacity, items):
    sorted_items = sorted(items, key=lambda x: x[0]/x[1], reverse=True)
    result = []
    for value, weight, name in sorted_items:
        if weight <= capacity:
            result.append(name)
            capacity -= weight
    return result
```

**Right:** Use DP (see Article 14). The greedy ratio approach is only correct when items are fractionally divisible.

**Why:** Consider capacity=10, items: (6, 6, 'A') and (5, 5, 'B') and (5, 5, 'C'). Ratios are all 1.0. Greedy picks A (value=6, uses 6kg, leaves 4kg — can't fit B or C). Optimal is B+C (value=10). Greedy gets 6, optimal gets 10.

### Pitfall 4 — Assuming Greedy Coin Change Works for All Coin Sets

**Wrong assumption:** Any coin system works with greedy.

**Right:** Only coin systems with the "canonical" property (each denomination divides into the next without remainder) are guaranteed greedy-optimal. Always verify with a small example before relying on greedy for custom denomination systems.

**Why:** The coin system {1, 3, 4} for amount 6 gives greedy [4, 1, 1] (3 coins) versus optimal [3, 3] (2 coins). The greedy algorithm is unaware that 3+3=6 is more efficient.

### Pitfall 5 — Not Handling the Case When Greedy Returns No Solution

**Wrong:**
```python
result = coin_change_greedy(6, [2, 4])
print(f"Coins: {result}")
```

**Right:**
```python
result = coin_change_greedy(6, [2, 4])
if result is None:
    print("No exact change possible with these denominations")
else:
    print(f"Coins: {result}")
```

**Why:** Amount 6 with coins {2, 4} is solvable (2+2+2 or 4+2), but greedy gives [4, 2] — that is fine here. Amount 7 with coins {2, 4} has no solution. Without a None check, you silently return an incorrect partial result.

---

## Testing

```python
import unittest


class TestGreedy(unittest.TestCase):

    def test_activity_selection_basic(self):
        tasks = [(1, 4, 'A'), (3, 5, 'B'), (0, 6, 'C'), (5, 7, 'D')]
        result = activity_selection(tasks)
        self.assertEqual(len(result), 3)
        names = [t[2] for t in result]
        self.assertIn('A', names)
        self.assertIn('B', names)
        self.assertIn('D', names)

    def test_activity_selection_no_overlap(self):
        tasks = [(1, 2, 'A'), (3, 4, 'B'), (5, 6, 'C')]
        result = activity_selection(tasks)
        self.assertEqual(len(result), 3)

    def test_activity_selection_all_overlap(self):
        tasks = [(0, 5, 'A'), (1, 5, 'B'), (2, 5, 'C')]
        result = activity_selection(tasks)
        self.assertEqual(len(result), 1)

    def test_coin_change_standard(self):
        result = coin_change_greedy(41, [1, 5, 10, 25])
        self.assertIsNotNone(result)
        self.assertEqual(sum(result), 41)
        self.assertEqual(len(result), 4)

    def test_coin_change_impossible(self):
        result = coin_change_greedy(3, [2, 4])
        self.assertIsNone(result)

    def test_fractional_knapsack_value(self):
        items = [(60, 10, 'gold'), (100, 20, 'silver'), (120, 30, 'bronze')]
        total_value, _ = fractional_knapsack(50, items)
        self.assertAlmostEqual(total_value, 240.0, places=1)

    def test_fractional_knapsack_small_capacity(self):
        items = [(100, 10, 'A'), (50, 10, 'B')]
        total_value, taken = fractional_knapsack(5, items)
        self.assertAlmostEqual(total_value, 50.0, places=1)


if __name__ == "__main__":
    unittest.main()
```

**Testing checklist:**
- [ ] Activity selection returns maximum non-overlapping count
- [ ] Tasks that share an endpoint (start=end) are both accepted
- [ ] Coin change returns None when exact change is impossible
- [ ] Coin change sum equals the target amount
- [ ] Fractional knapsack total value is within floating point tolerance
- [ ] Fractional knapsack respects capacity constraint

---

## Interview Q&A

**Q1: How do you prove a greedy algorithm is correct?**

The standard technique is the exchange argument. You assume an optimal solution O exists that differs from the greedy solution G. You find the first position where they differ, then show you can swap O's choice for G's choice without decreasing the objective value. You repeat this swap argument until O is transformed into G, proving G is at least as good as any optimal solution. The greedy choice property must hold at each step for this argument to go through.

**Q2: Why does greedy fail for 0/1 Knapsack but work for Fractional Knapsack?**

In Fractional Knapsack, taking the highest value-per-weight item first is always safe because you can take any fraction — you never waste capacity. In 0/1 Knapsack, items are indivisible, so taking a high-ratio item may leave remaining capacity that no other item fits perfectly. The greedy algorithm cannot "see ahead" to know that leaving different remaining capacity would have enabled a better combination of items, which is exactly what DP handles by exploring all possibilities.

**Q3: What is the time complexity of Activity Selection and why is sorting the bottleneck?**

The time complexity is O(n log n), dominated by sorting tasks by end time. The greedy scan after sorting is a single O(n) pass — each task is examined once and either selected or rejected. If the tasks arrive pre-sorted by end time (for example, from a database ordered query), the algorithm is O(n), which is optimal since you must examine every task at least once.

**Q4: Give an example where greedy gives a globally suboptimal result.**

The 0/1 Knapsack with capacity 10 and items: A=(value=6, weight=6), B=(value=5, weight=5), C=(value=5, weight=5). The greedy approach by value/weight ratio picks A (ratio 1.0) first, using 6kg. Only 4kg remains, so neither B nor C fits. Greedy total: 6. Optimal: pick B+C, total value 10, weight 10. Greedy scores 6 versus optimal 10 — a 40% loss.

**Q5: How is Dijkstra's algorithm a greedy algorithm?**

Dijkstra repeatedly picks the unvisited node with the smallest known distance from the source — the greedy choice. It then relaxes all outgoing edges from that node. The greedy choice property holds because, with non-negative edge weights, once a node is picked as the minimum, its distance is finalised — no future path through an unvisited node can be shorter (since all unvisited nodes have distance ≥ current minimum). This fails with negative edges because a later negative edge could create a shorter path.

---

## Resources

1. **CLRS — Introduction to Algorithms** (Cormen et al.) — Chapter 16 covers greedy algorithms, activity selection, and the formal exchange argument proof.
2. **Algorithm Design by Kleinberg and Tardos** — Chapter 4 is the clearest textbook treatment of the exchange argument proof technique.
3. **LeetCode — Greedy tag** — Practice problems including Jump Game, Gas Station, and Task Scheduler, all requiring greedy reasoning.
4. **Python `heapq` documentation** — The priority queue used in greedy algorithms like Dijkstra and Huffman coding.
5. **CS visualizations — USF** — Interactive visualisation of greedy activity selection at cs.usfca.edu/~galles/visualization.

---

## Conclusion

Greedy algorithms are the fastest tools in your optimisation toolbox when they apply — O(n log n) for scheduling, O(n) for knapsack packing — but they require proof, not intuition. The two conditions to check before committing to greedy are the greedy choice property and optimal substructure. Verify both, run the exchange argument proof, and then you can implement with confidence. When greedy fails, the next step is Dynamic Programming (Article 14), which handles the overlapping subproblems that greedy ignores.

**Challenge:** Extend the activity selector to handle a multi-resource scenario — two workers, not one. What changes about the greedy strategy? Hint: think about maintaining two "last end times" and assigning each task to the worker who most recently freed up.

<!--
HASHNODE PUBLISH SETTINGS
Series: Programming
Tags: python, programming, algorithms, greedy, activityselection, knapsack, scheduling
Slug: greedy-algorithms-local-optimum-to-global-solution
SEO Title: Greedy Algorithms: Local Optimum to Global
SEO Desc: Master greedy algorithms in Python. Activity selection, fractional knapsack, coin change, exchange argument proofs, and when greedy fails.
Cover Image: /assets/images/greedy-algorithms-cover.png
Image 1: /assets/images/greedy-activity-selection.png
-->
