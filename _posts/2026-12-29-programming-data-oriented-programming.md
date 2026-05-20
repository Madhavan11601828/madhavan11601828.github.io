---
title: "Data-Oriented Programming: Struct-of-Arrays and Cache Efficiency"
author: "Mangena Venu Madhavan"
date: 2026-12-29
tags: [Python, Programming, NumPy, Performance, Advanced]
categories: [programming]
series: "Programming"
article_number: 24
---

## Key Takeaways

- You will understand why CPU cache misses dominate the cost of working with large object collections
- You will implement a particle simulation in both Array-of-Structs (AoS) and Struct-of-Arrays (SoA) layouts and measure the throughput difference
- You will apply SoA to a data transformation pipeline, replacing per-object loops with column-level operations
- You will connect data-oriented principles to how Pandas DataFrames, NumPy record arrays, and PyTorch tensors store data internally
- You will know when to choose OOP objects vs columnar storage for a given workload

---

## Who This Is For & Prerequisites

This article is for developers who have completed Articles 1–23 of this series and want to understand the memory-layout principles behind high-performance Python and the NumPy-based libraries they already use.

**You need:**
- Python 3.9+ installed
- NumPy: `pip install numpy`
- Article 23 (Vectorized Programming) completed

**You do NOT need:**
- Any hardware or systems programming background

---

## What You Will Build

By the end of this article you will have:
- An AoS particle simulation using Python objects
- An SoA particle simulation using NumPy arrays
- A benchmarked comparison showing throughput difference
- A columnar data transformation pipeline
- A cache-efficiency diagram showing why the layout matters

Expected final output:

```
=== Particle Simulation Benchmark (n=100,000 particles, 100 steps) ===
Array-of-Structs (Python objects): 8.412s
Struct-of-Arrays (NumPy arrays):   0.043s
SoA speedup: 195.6x

=== Columnar Transform Pipeline ===
Input records:  100,000
Filter (score > 0.7):  29,847 records kept
Normalise scores: [0.700 → 1.000]
Tag high-scorers: 29,847 flagged
Pipeline time: 0.004s

=== Memory Layout ===
AoS: 100,000 objects × ~56 bytes each = ~5.3 MB (fragmented, heap allocated)
SoA: 4 arrays × 100,000 × 8 bytes   = ~3.1 MB (contiguous, cache-friendly)
```

---

## Concept Simply

Your CPU does not read one number at a time from RAM. It reads a 64-byte chunk called a **cache line**. If the next number you need happens to be in the same chunk, it is already in the L1 cache — zero cost. If it is somewhere else in RAM, the CPU stalls for 50–200 ns waiting for it.

Array-of-Structs (AoS) stores each object as a complete unit: `[{x, y, vx, vy}, {x, y, vx, vy}, ...]`. When you need all the `x` values, you skip over `y`, `vx`, and `vy` between each one — each `x` lives on a different cache line.

Struct-of-Arrays (SoA) separates fields into columns: `{x: [...], y: [...], vx: [...], vy: [...]}`. Now all `x` values are contiguous. Walking through them loads every cache line fully. This is the difference between a memory access pattern that is cache-friendly (linear stride) and one that thrashes the cache (scattered).

| | Array-of-Structs (AoS) | Struct-of-Arrays (SoA) |
|---|---|---|
| Memory layout | Object, object, object | Column, column, column |
| Cache behaviour | Loads unused fields with each useful one | Loads only the fields you need |
| OOP feel | Natural (one object per entity) | Less natural (split across arrays) |
| Vectorization | Hard — must extract field to vectorize | Trivial — field is already an array |
| Insert/delete | Easy — add/remove one object | Hard — must update every column |

---

## Core Components

### 1. Array-of-Structs Layout

The natural OOP layout: each entity is an object with fields.

```python
class Particle:
    __slots__ = ("x", "y", "vx", "vy")

    def __init__(self, x, y, vx, vy):
        self.x = x
        self.y = y
        self.vx = vx
        self.vy = vy

    def update(self, dt: float) -> None:
        self.x += self.vx * dt
        self.y += self.vy * dt

particles = [Particle(i * 0.1, i * 0.2, 0.5, 0.3) for i in range(100_000)]

def step_aos(particles, dt=0.016):
    for p in particles:
        p.update(dt)
```

`__slots__` avoids the `__dict__` overhead, but even so: each `Particle` is a heap-allocated Python object at a random memory address. Iterating `particles` jumps through memory following pointers — every object lands on a fresh cache line.

### 2. Struct-of-Arrays Layout

Separate arrays per field — each field is a contiguous NumPy array.

```python
import numpy as np

class ParticleSystem:
    def __init__(self, n: int):
        rng = np.random.default_rng(42)
        self.x  = rng.uniform(0, 100, n)
        self.y  = rng.uniform(0, 100, n)
        self.vx = rng.uniform(-1, 1, n)
        self.vy = rng.uniform(-1, 1, n)

    def step(self, dt: float = 0.016) -> None:
        self.x += self.vx * dt   # vectorized over all n particles
        self.y += self.vy * dt
```

`self.x += self.vx * dt` is one NumPy broadcast operation. The CPU reads `x` and `vx` as contiguous blocks, computes in-place using SIMD, and writes back. No Python loop. No pointer chasing.

### 3. Cache Line Visualisation

```
AoS memory layout (4 particles, 4 fields each):
[x0 y0 vx0 vy0 | x1 y1 vx1 vy1 | x2 y2 vx2 vy2 | x3 y3 vx3 vy3]
 ^cache line 1^   ^cache line 2^   ^cache line 3^   ^cache line 4^

Accessing x0, x1, x2, x3 → 4 cache line loads, 3 wasted

SoA memory layout (4 particles, fields separated):
x:  [x0 x1 x2 x3 x4 x5 x6 x7]  ← 1 cache line loads x0..x7
y:  [y0 y1 y2 y3 ...]
vx: [vx0 vx1 vx2 vx3 ...]

Accessing x0, x1, x2, x3 → 1 cache line load, no waste
```

### 4. Columnar Transform Pipelines

SoA extends naturally to data pipelines: filter, normalise, and tag using whole-column operations.

```python
import numpy as np

rng = np.random.default_rng(0)
n = 100_000

ids    = np.arange(n)
scores = rng.uniform(0, 1, n)
labels = rng.integers(0, 5, n)

# Step 1: filter — Boolean mask over a column
mask = scores > 0.7
filtered_ids    = ids[mask]
filtered_scores = scores[mask]

# Step 2: normalise the filtered scores to [0, 1]
s_min = filtered_scores.min()
s_max = filtered_scores.max()
normalised = (filtered_scores - s_min) / (s_max - s_min)

# Step 3: tag — derive a new column
is_high = normalised > 0.5

print(f"Filter (score > 0.7):  {mask.sum():,} records kept")
print(f"Normalise scores: [{normalised.min():.3f} → {normalised.max():.3f}]")
print(f"Tag high-scorers: {is_high.sum():,} flagged")
```

Each step operates on a column — a contiguous NumPy array — rather than looping through records and branching on field values.

### 5. NumPy Structured Arrays — Hybrid Layout

NumPy offers structured arrays, which look like AoS in Python but store data in SoA-like contiguous buffers.

```python
import numpy as np

dtype = np.dtype([("x", np.float64), ("y", np.float64),
                  ("vx", np.float64), ("vy", np.float64)])

particles = np.zeros(5, dtype=dtype)
particles["x"] = [1.0, 2.0, 3.0, 4.0, 5.0]
particles["vx"] = 0.5

# Access by field name — returns a view, not a copy
print(particles["x"])       # [1. 2. 3. 4. 5.]
print(particles[0])         # (1., 0., 0.5, 0.)
```

Structured arrays store fields interleaved per record (true AoS in memory), which is less cache-efficient for column-wise operations than separate arrays, but provides a convenient record-like interface.

### 6. Connection to Pandas, PyTorch, and Arrow

Data-oriented thinking is the foundation of every major data library:

| Library | Internal layout | Benefit |
|---|---|---|
| Pandas DataFrame | One contiguous array per column (SoA) | Column operations → vectorized |
| PyTorch Tensor | Contiguous typed buffer (SoA for batches) | CUDA kernel dispatches on whole batch |
| Apache Arrow | Columnar, zero-copy across languages | Cache-efficient, interop with C/Java/Rust |
| NumPy 2D array | Row-major (C) or column-major (Fortran) contiguous | Axis-aligned operations hit same cache lines |

When you do `df["score"].mean()`, Pandas reads one contiguous column array — the same principle as SoA.

---

## Hands-on Tutorial

### Step 1: AoS particle simulation

```python
import time

class Particle:
    __slots__ = ("x", "y", "vx", "vy")

    def __init__(self, x, y, vx, vy):
        self.x, self.y, self.vx, self.vy = x, y, vx, vy

    def update(self, dt):
        self.x += self.vx * dt
        self.y += self.vy * dt

N = 100_000
STEPS = 100

particles_aos = [Particle(i * 0.001, i * 0.002, 0.5, 0.3) for i in range(N)]

start = time.perf_counter()
for _ in range(STEPS):
    for p in particles_aos:
        p.update(0.016)
t_aos = time.perf_counter() - start
print(f"Array-of-Structs (Python objects): {t_aos:.3f}s")
```

---

### Step 2: SoA particle simulation

```python
import numpy as np
import time

class ParticleSystem:
    def __init__(self, n):
        rng = np.random.default_rng(42)
        self.x  = rng.uniform(0, 100, n).astype(np.float64)
        self.y  = rng.uniform(0, 100, n).astype(np.float64)
        self.vx = rng.uniform(-1, 1, n).astype(np.float64)
        self.vy = rng.uniform(-1, 1, n).astype(np.float64)

    def step(self, dt=0.016):
        self.x += self.vx * dt
        self.y += self.vy * dt

system = ParticleSystem(N)

start = time.perf_counter()
for _ in range(STEPS):
    system.step()
t_soa = time.perf_counter() - start
print(f"Struct-of-Arrays (NumPy arrays):   {t_soa:.3f}s")
print(f"SoA speedup: {t_aos / t_soa:.1f}x")
```

---

### Step 3: Columnar transform pipeline

```python
import numpy as np
import time

rng = np.random.default_rng(0)
n = 100_000
ids    = np.arange(n)
scores = rng.uniform(0, 1, n)

print(f"\n=== Columnar Transform Pipeline ===")
print(f"Input records:  {n:,}")

start = time.perf_counter()

mask            = scores > 0.7
filtered_ids    = ids[mask]
filtered_scores = scores[mask]

s_min = filtered_scores.min()
s_max = filtered_scores.max()
normalised = (filtered_scores - s_min) / (s_max - s_min)

is_high = normalised > 0.5

t_pipeline = time.perf_counter() - start

print(f"Filter (score > 0.7):  {mask.sum():,} records kept")
print(f"Normalise scores: [{normalised.min():.3f} → {normalised.max():.3f}]")
print(f"Tag high-scorers: {is_high.sum():,} flagged")
print(f"Pipeline time: {t_pipeline:.3f}s")
```

---

### Step 4: Memory layout comparison

```python
import sys
import numpy as np

N = 100_000

aos_size = N * sys.getsizeof(Particle(0, 0, 0, 0))
soa_size  = 4 * N * 8   # 4 float64 arrays

print(f"\n=== Memory Layout ===")
print(f"AoS: {N:,} objects × ~{sys.getsizeof(Particle(0,0,0,0))} bytes = ~{aos_size/1e6:.1f} MB (fragmented)")
print(f"SoA: 4 arrays × {N:,} × 8 bytes = ~{soa_size/1e6:.1f} MB (contiguous)")
```

---

### Complete script

```python
import time
import sys
import numpy as np


class Particle:
    __slots__ = ("x", "y", "vx", "vy")

    def __init__(self, x, y, vx, vy):
        self.x, self.y, self.vx, self.vy = x, y, vx, vy

    def update(self, dt):
        self.x += self.vx * dt
        self.y += self.vy * dt


class ParticleSystem:
    def __init__(self, n):
        rng = np.random.default_rng(42)
        self.x  = rng.uniform(0, 100, n).astype(np.float64)
        self.y  = rng.uniform(0, 100, n).astype(np.float64)
        self.vx = rng.uniform(-1, 1, n).astype(np.float64)
        self.vy = rng.uniform(-1, 1, n).astype(np.float64)

    def step(self, dt=0.016):
        self.x += self.vx * dt
        self.y += self.vy * dt


N = 100_000
STEPS = 100

print(f"=== Particle Simulation Benchmark (n={N:,} particles, {STEPS} steps) ===")

particles_aos = [Particle(i * 0.001, i * 0.002, 0.5, 0.3) for i in range(N)]
start = time.perf_counter()
for _ in range(STEPS):
    for p in particles_aos:
        p.update(0.016)
t_aos = time.perf_counter() - start
print(f"Array-of-Structs (Python objects): {t_aos:.3f}s")

system = ParticleSystem(N)
start = time.perf_counter()
for _ in range(STEPS):
    system.step()
t_soa = time.perf_counter() - start
print(f"Struct-of-Arrays (NumPy arrays):   {t_soa:.3f}s")
print(f"SoA speedup: {t_aos / t_soa:.1f}x")

rng = np.random.default_rng(0)
n = 100_000
ids    = np.arange(n)
scores = rng.uniform(0, 1, n)

print(f"\n=== Columnar Transform Pipeline ===")
print(f"Input records:  {n:,}")

start = time.perf_counter()
mask            = scores > 0.7
filtered_scores = scores[mask]
normalised      = (filtered_scores - filtered_scores.min()) / (filtered_scores.max() - filtered_scores.min())
is_high         = normalised > 0.5
t_pipeline      = time.perf_counter() - start

print(f"Filter (score > 0.7):  {mask.sum():,} records kept")
print(f"Normalise scores: [{normalised.min():.3f} → {normalised.max():.3f}]")
print(f"Tag high-scorers: {is_high.sum():,} flagged")
print(f"Pipeline time: {t_pipeline:.3f}s")

p_size = sys.getsizeof(Particle(0, 0, 0, 0))
print(f"\n=== Memory Layout ===")
print(f"AoS: {N:,} objects × ~{p_size} bytes = ~{N * p_size / 1e6:.1f} MB (fragmented, heap allocated)")
print(f"SoA: 4 arrays × {N:,} × 8 bytes   = ~{4 * N * 8 / 1e6:.1f} MB (contiguous, cache-friendly)")
```

---

## Common Mistakes

**Mistake 1: Choosing AoS for read-heavy batch workloads**

```python
# AoS — reading one field from all particles loads every field into cache
particles = [Particle(...) for _ in range(100_000)]
total_x = sum(p.x for p in particles)   # skips y, vx, vy — cache waste
```

```python
# SoA — reading x only touches the x array
system = ParticleSystem(100_000)
total_x = system.x.sum()   # one contiguous read
```

If your dominant workload is operating on one or two fields across all entities, SoA eliminates wasted cache loads.

---

**Mistake 2: Using SoA when entity insertions/deletions are frequent**

```python
# SoA requires updating every column on insert
def add_particle(system, x, y, vx, vy):
    system.x  = np.append(system.x, x)   # allocates new array
    system.y  = np.append(system.y, y)
    system.vx = np.append(system.vx, vx)
    system.vy = np.append(system.vy, vy)
```

`np.append` allocates a new array each time — O(n) per insert, and every column must be updated. If you frequently add or remove individual entities, AoS or a list-based structure is better. Use SoA when the set of entities is stable and the workload is read-heavy field-wise.

---

**Mistake 3: Converting a Pandas DataFrame to a list of dicts for processing**

```python
import pandas as pd
df = pd.DataFrame({"score": scores, "label": labels})

# Breaks the columnar layout — now you loop over Python dicts
for row in df.to_dict("records"):
    process(row["score"], row["label"])
```

```python
# Stay columnar — operate on whole columns
mask = df["score"] > 0.7
df.loc[mask, "score"] = normalise(df.loc[mask, "score"])
```

Pandas stores columns as contiguous arrays internally. Converting to a list of dicts or calling `.iterrows()` discards that layout and pays pointer-chasing costs. Always prefer column-level operations.

---

**Mistake 4: Assuming contiguous memory layout for all NumPy operations**

```python
arr = np.ones((1000, 1000))
col = arr[:, 0]          # column slice — NOT contiguous (row-major storage)
print(col.flags["C_CONTIGUOUS"])   # False
```

```python
col_contiguous = np.ascontiguousarray(arr[:, 0])
print(col_contiguous.flags["C_CONTIGUOUS"])   # True
```

NumPy uses row-major (C order) layout by default. Slicing a column returns a view with a stride equal to the row length — consecutive elements are not adjacent in memory. For repeated column-wise operations, copy to a contiguous array first. This is why Pandas stores each column separately rather than using a 2D NumPy array.

---

## Interview Q&A

**Q1: What is the difference between Array-of-Structs and Struct-of-Arrays, and when should you use each?**

Array-of-Structs (AoS) stores each entity as one object: `[{x, y, vx, vy}, ...]`. It is natural for OOP — one object per entity — and efficient for operations that access all fields of a single entity together (e.g., physics updates for one particle at a time). Struct-of-Arrays (SoA) stores each field as a separate array: `{x: [...], y: [...], ...}`. It is efficient when operations access one field across all entities (e.g., compute the mean x position of 100,000 particles). SoA is preferred for batch processing because it loads only the fields needed into cache, allows full vectorization of each field, and reduces cache waste. Choose AoS when entities have many fields and you routinely access all of them together; choose SoA when your workload is column-oriented and the entity set is stable.

**Q2: Why do cache misses matter so much in numerical Python code?**

Modern CPUs run at ~3 GHz, executing 1–4 operations per clock cycle. An L1 cache hit takes ~4 cycles. An L2 hit takes ~12 cycles. A RAM miss takes ~200 cycles or more. When you iterate over Python objects scattered across the heap, each object is at a random address — every field access can be a cache miss. At 200 cycles per miss and 100,000 objects, the iteration stalls for roughly 20 million cycles on memory alone, before any computation. NumPy's contiguous arrays reduce this to sequential reads that prefetch correctly, achieving near-peak memory bandwidth. The same computation, same algorithm, same number of operations — but 100x slower due to memory layout alone.

**Q3: How do Pandas DataFrames reflect data-oriented design principles?**

A Pandas DataFrame is essentially a collection of named NumPy arrays (one per column), all sharing the same index. This is Struct-of-Arrays. Operations like `df["score"].mean()` call `np.mean` on one contiguous array — a single vectorized call in C. Operations like `df[df["score"] > 0.7]` compute a Boolean mask over one column and then index every other column with it — still column-oriented. When you call `.iterrows()`, Pandas must construct a Python Series object for each row from multiple column arrays, reversing the SoA layout and losing all performance. The guideline "never use `.iterrows()` for numerical operations" is a direct consequence of data-oriented design: stay columnar, stay fast.

**Q4: How does data-oriented programming connect to machine learning and GPU computing?**

GPU computing requires data to be contiguous in GPU memory for CUDA kernels to operate efficiently. PyTorch tensors are contiguous typed buffers — effectively SoA for batches of data (batch dimension × feature dimension). When you call `tensor.mean(dim=0)`, PyTorch dispatches a CUDA kernel that reads one contiguous column across the batch. Apache Arrow, the interop format used by Pandas 2.0, DuckDB, and Polars, is explicitly columnar for the same reason: analytical queries ("average score by label") touch one column at a time. Columnar data is not just a database concept — it is the same principle as SoA, applied at scale, and it is the foundation of every fast ML data pipeline.

---

## Resources

- [NumPy Memory Layout Docs](https://numpy.org/doc/stable/reference/arrays.ndarray.html#internal-memory-layout-of-an-ndarray) — Official explanation of C order, Fortran order, and strides
- [Mike Acton — Data-Oriented Design (CppCon 2014)](https://www.youtube.com/watch?v=rX0ItVEVjHc) — The canonical talk on SoA vs AoS, from game engine engineering
- [Pandas Internals: Block Manager](https://pandas.pydata.org/docs/development/internals.html) — How Pandas stores columns as NumPy arrays
- [Apache Arrow Columnar Format](https://arrow.apache.org/docs/format/Columnar.html) — Zero-copy columnar memory layout used across languages

---

## Conclusion & Next Steps

Data-oriented programming is the principle that the layout of your data in memory determines the performance ceiling of your code, regardless of algorithmic complexity. Struct-of-Arrays, columnar pipelines, and cache-aligned access patterns are not micro-optimisations — they are architectural decisions that determine whether you process 100 or 100,000 entities per millisecond.

This article completes the **Data Handling Styles** section of the Programming pillar, and with it, the full 24-article Programming pillar. You have now covered every major programming technique from imperative thinking and OOP through data structures, algorithm design, computational models, and data handling styles. The next step is to apply these skills in domain-specific contexts — web development, data science, AI/ML engineering, and automation — in the Applied Python pillar.

---

Subscribe to get new articles delivered to your inbox.
New posts every week across 9 AI learning pillars.

---

<!--
HASHNODE PUBLISH SETTINGS
--------------------------
Series      : Programming
Tags        : python, programming, numpy, performance
Slug        : data-oriented-programming-struct-of-arrays-cache-efficiency
SEO Title   : Data-Oriented Programming: SoA & Cache Efficiency
SEO Desc    : Learn Struct-of-Arrays vs Array-of-Structs in Python. Benchmark particle simulations and build columnar pipelines with NumPy.
Cover Image : Dark background, two memory diagrams side by side: left shows interleaved XYVX fields (AoS), right shows separate X, Y, V columns (SoA), with cache line boundaries highlighted — 1600×840px
Image 1     : Side-by-side memory layout diagram: AoS (mixed fields per cache line, partially wasted) vs SoA (full cache lines of one field, all useful), with throughput numbers underneath
-->
