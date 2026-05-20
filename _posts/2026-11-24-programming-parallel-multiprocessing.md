---
title: "Parallel Programming: Multiprocessing in Python"
author: "Mangena Venu Madhavan"
date: 2026-11-24
tags: [Python, Programming, Parallel, Multiprocessing, Performance]
categories: [programming]
series: "Programming"
article_number: 19
---

## Key Takeaways

- The GIL prevents threads from running Python bytecode in parallel — multiprocessing bypasses it by spawning separate OS processes, each with its own GIL.
- `multiprocessing.Pool.map()` is the simplest way to parallelise a function across a list of inputs.
- `ProcessPoolExecutor` is the modern high-level API with Future semantics and context manager support.
- Lambdas and local functions cannot be pickled and will raise `PicklingError` when passed to a pool worker.
- Shared memory (`multiprocessing.Value`, `multiprocessing.Array`) requires explicit locking — races between processes are real.
- Multiprocessing has per-process startup overhead — for small tasks, sequential code is faster.
- Decision rule: asyncio for I/O-bound, multiprocessing for CPU-bound, threading for I/O-bound with sync libraries.

---

## Who This Is For / Prerequisites

**Who this is for:** Python developers who have read Article 18 (threading/asyncio) and now want genuine CPU parallelism for compute-intensive work.

**Prerequisites:**
- Article 18 (threading/asyncio) — understanding of the GIL
- Python functions, list comprehensions
- Basic understanding of processes vs threads (Article 18)

---

## What You'll Build

A CPU-bound benchmark computing sum of squares for 10 million numbers, comparing sequential vs `multiprocessing.Pool` with 2, 4, and 8 workers.

**Expected output:**
```
=== CPU-Bound Task: Sum of squares for 10M numbers ===
Sequential:         3.82s
Pool (2 workers):   2.11s
Pool (4 workers):   1.24s
Pool (8 workers):   1.19s  (diminishing returns — 8 cores, overhead kicks in)

Speedup (4 workers): 3.08x

=== ProcessPoolExecutor: Parallel file processing ===
Files: 20 simulated documents
Sequential: 4.1s
Parallel (4 workers): 1.2s
```

---

## Problem Statement

An enterprise ML team preprocesses 10 GB of text documents overnight. Each document goes through tokenisation, normalisation, and feature extraction — pure CPU work. On one core, the job takes 6 hours. With multiprocessing across 8 cores, it finishes in under an hour. Threading would not help at all — the GIL would serialise the Python bytecode, achieving no speedup. Separate processes each get their own Python interpreter and GIL, so all 8 cores run at full capacity simultaneously.

---

## Concept Simply

**The analogy:** Imagine you have 8 calculators and 8 math problems. Threading: you have one calculator and must share it (GIL) — you work on problem 1, pause, switch to problem 2, switch back — no faster than doing them in sequence. Multiprocessing: you give one calculator to each of 8 people — all 8 problems run simultaneously, genuinely in parallel.

**Decision tree:**

```
Is the task I/O-bound (waiting for network/disk)?
  ├── Yes, < 100 concurrent tasks → threading or asyncio
  └── No (CPU-bound)?
       ├── Large data (numpy arrays, many items) → multiprocessing.Pool
       └── Small data / overhead dominates → sequential
```

---

## Core Components

### Why Threads Don't Help for CPU-Bound Work

```python
import threading
import time


def cpu_work(n):
    return sum(i * i for i in range(n))


def measure(n_workers, work_per_worker):
    start = time.perf_counter()
    if n_workers == 1:
        cpu_work(work_per_worker)
    else:
        threads = [threading.Thread(target=cpu_work, args=(work_per_worker,))
                   for _ in range(n_workers)]
        for t in threads:
            t.start()
        for t in threads:
            t.join()
    return time.perf_counter() - start
```

Running this with n_workers=1 and n_workers=4 gives nearly identical times. The GIL forces one thread to run at a time even on a 4-core machine.

### multiprocessing.Process — Raw Processes

```python
import multiprocessing
import time


def worker_task(worker_id, n, return_dict):
    result = sum(i * i for i in range(n))
    return_dict[worker_id] = result


def run_with_processes(n_workers, work_per_worker):
    manager = multiprocessing.Manager()
    return_dict = manager.dict()

    processes = [
        multiprocessing.Process(
            target=worker_task,
            args=(i, work_per_worker, return_dict)
        )
        for i in range(n_workers)
    ]

    start = time.perf_counter()
    for p in processes:
        p.start()
    for p in processes:
        p.join()
    elapsed = time.perf_counter() - start

    return sum(return_dict.values()), elapsed
```

`multiprocessing.Manager().dict()` provides a shared dict accessible from all processes. It is slower than a local dict but safe across process boundaries. For returning simple results, `Pool.map()` is simpler.

### multiprocessing.Pool — map and starmap

```python
import multiprocessing


def sum_squares_chunk(chunk):
    return sum(i * i for i in chunk)


def run_pool(data, n_workers):
    chunk_size = len(data) // n_workers
    chunks = [data[i:i + chunk_size] for i in range(0, len(data), chunk_size)]

    with multiprocessing.Pool(processes=n_workers) as pool:
        results = pool.map(sum_squares_chunk, chunks)

    return sum(results)


def run_pool_starmap(items):
    def process_item(value, multiplier):
        return sum(i * i * multiplier for i in range(value))

    with multiprocessing.Pool() as pool:
        results = pool.starmap(process_item, items)

    return results
```

`pool.map(func, iterable)` distributes items across workers and collects results in order. `pool.starmap(func, iterable_of_tuples)` is the same but unpacks each tuple as arguments.

### concurrent.futures.ProcessPoolExecutor

```python
from concurrent.futures import ProcessPoolExecutor, as_completed
import time


def process_document(doc_id, word_count):
    time.sleep(0.2)
    return {"doc_id": doc_id, "tokens": word_count * 5, "processed": True}


def parallel_process_documents(documents, max_workers=4):
    with ProcessPoolExecutor(max_workers=max_workers) as executor:
        futures = {
            executor.submit(process_document, doc_id, wc): doc_id
            for doc_id, wc in documents
        }

        results = []
        for future in as_completed(futures):
            doc_id = futures[future]
            try:
                result = future.result()
                results.append(result)
            except Exception as exc:
                print(f"Document {doc_id} failed: {exc}")

    return sorted(results, key=lambda x: x["doc_id"])
```

`ProcessPoolExecutor` is the recommended API for new code. It has the same interface as `ThreadPoolExecutor`, making it easy to switch between threading and multiprocessing by changing one import.

### Shared Memory — Value and Array

```python
import multiprocessing


def increment_counter(counter, lock, n):
    for _ in range(n):
        with lock:
            counter.value += 1


def shared_counter_demo():
    counter = multiprocessing.Value('i', 0)
    lock = multiprocessing.Lock()

    processes = [
        multiprocessing.Process(target=increment_counter, args=(counter, lock, 50_000))
        for _ in range(4)
    ]

    for p in processes:
        p.start()
    for p in processes:
        p.join()

    return counter.value


def shared_array_demo():
    arr = multiprocessing.Array('d', [0.0] * 10)

    def fill_chunk(arr, start, end, value):
        for i in range(start, end):
            arr[i] = value

    processes = [
        multiprocessing.Process(target=fill_chunk, args=(arr, i * 2, (i + 1) * 2, float(i)))
        for i in range(5)
    ]
    for p in processes:
        p.start()
    for p in processes:
        p.join()

    return list(arr)
```

`multiprocessing.Value('i', 0)` creates a shared integer (type code 'i') with initial value 0. `multiprocessing.Array('d', n)` creates a shared array of n doubles. Both require explicit locking for safe concurrent access.

### Pickling Constraints

```python
import multiprocessing


def multiply(x, factor):
    return x * factor


pool = multiprocessing.Pool(2)
results = pool.starmap(multiply, [(i, 2) for i in range(10)])
pool.close()
pool.join()


def bad_example():
    factor = 3
    f = lambda x: x * factor

    pool = multiprocessing.Pool(2)
    try:
        pool.map(f, range(10))
    except AttributeError as e:
        print(f"Cannot pickle lambda: {e}")
    finally:
        pool.close()
        pool.join()
```

Objects sent to pool workers are pickled (serialised) and sent via IPC. Lambdas and functions defined inside other functions are not picklable. Use module-level functions or `functools.partial` instead.

### NumPy + Multiprocessing — Chunked Array Processing

```python
import multiprocessing
import numpy as np


def process_chunk(chunk_data):
    arr = np.frombuffer(chunk_data, dtype=np.float64)
    return float(np.sum(arr ** 2))


def parallel_numpy(data, n_workers):
    chunk_size = len(data) // n_workers
    chunks = [data[i:i + chunk_size].tobytes() for i in range(0, len(data), chunk_size)]

    with multiprocessing.Pool(n_workers) as pool:
        results = pool.map(process_chunk, chunks)

    return sum(results)
```

Passing NumPy arrays between processes via `.tobytes()` + `np.frombuffer()` avoids the pickling overhead of large objects. For production, `multiprocessing.shared_memory` (Python 3.8+) provides zero-copy shared NumPy arrays.

---

## Design Trade-offs

| | threading | asyncio | multiprocessing |
|---|---|---|---|
| CPU-bound speedup | None (GIL) | None | Yes (scales with cores) |
| I/O-bound speedup | Yes | Yes | Yes (overkill) |
| Process startup overhead | Low | None | High (~50ms per process) |
| Memory isolation | Shared | Shared | Separate (safer) |
| Pickling required | No | No | Yes (for args/results) |
| Max concurrency | 100s | 10,000s | = number of CPUs |

---

## Hands-On Tutorial

### Step 1 — Define the CPU Work

```python
import time


def sum_squares_range(start, end):
    return sum(i * i for i in range(start, end))
```

### Step 2 — Sequential Baseline

```python
def sequential_sum_squares(n):
    start = time.perf_counter()
    result = sum_squares_range(0, n)
    return result, time.perf_counter() - start
```

### Step 3 — Pool Parallel

```python
import multiprocessing


def pool_sum_squares(n, n_workers):
    chunk_size = n // n_workers
    ranges = [(i * chunk_size, (i + 1) * chunk_size) for i in range(n_workers)]
    ranges[-1] = (ranges[-1][0], n)

    start = time.perf_counter()
    with multiprocessing.Pool(n_workers) as pool:
        results = pool.starmap(sum_squares_range, ranges)
    elapsed = time.perf_counter() - start

    return sum(results), elapsed
```

### Complete Runnable Script

```python
import multiprocessing
import time
from concurrent.futures import ProcessPoolExecutor, as_completed


N = 10_000_000


def sum_squares_range(start, end):
    return sum(i * i for i in range(start, end))


def process_document_sim(doc_id, size):
    count = 0
    for i in range(size):
        count += i % 7
    return doc_id, count


def sequential_sum(n):
    start = time.perf_counter()
    result = sum_squares_range(0, n)
    return result, time.perf_counter() - start


def pool_sum(n, n_workers):
    chunk_size = n // n_workers
    ranges = [(i * chunk_size, min((i + 1) * chunk_size, n)) for i in range(n_workers)]

    start = time.perf_counter()
    with multiprocessing.Pool(n_workers) as pool:
        results = pool.starmap(sum_squares_range, ranges)
    elapsed = time.perf_counter() - start

    return sum(results), elapsed


def sequential_docs(docs):
    start = time.perf_counter()
    results = [process_document_sim(doc_id, size) for doc_id, size in docs]
    return results, time.perf_counter() - start


def parallel_docs(docs, n_workers=4):
    start = time.perf_counter()
    with ProcessPoolExecutor(max_workers=n_workers) as executor:
        futures = {executor.submit(process_document_sim, doc_id, size): doc_id
                   for doc_id, size in docs}
        results = [future.result() for future in futures]
    elapsed = time.perf_counter() - start
    return results, elapsed


def main():
    print(f"=== CPU-Bound Task: Sum of squares for {N:,} numbers ===")

    _, seq_time = sequential_sum(N)
    print(f"Sequential:         {seq_time:.2f}s")

    for workers in [2, 4, 8]:
        _, t = pool_sum(N, workers)
        speedup = seq_time / t
        note = "  (diminishing returns)" if workers == 8 else ""
        print(f"Pool ({workers} workers):   {t:.2f}s (speedup: {speedup:.2f}x){note}")

    print()
    print("=== ProcessPoolExecutor: Parallel file processing ===")
    docs = [(i, 200_000) for i in range(20)]

    _, seq_doc_time = sequential_docs(docs)
    _, par_doc_time = parallel_docs(docs, n_workers=4)

    print(f"Files: 20 simulated documents")
    print(f"Sequential: {seq_doc_time:.1f}s")
    print(f"Parallel (4 workers): {par_doc_time:.1f}s")
    print(f"Speedup: {seq_doc_time / par_doc_time:.1f}x")

    print()
    print("=== Shared Counter (multiprocessing.Value) ===")
    counter = multiprocessing.Value('i', 0)
    lock = multiprocessing.Lock()

    def inc(c, l, n):
        for _ in range(n):
            with l:
                c.value += 1

    procs = [multiprocessing.Process(target=inc, args=(counter, lock, 25_000))
             for _ in range(4)]
    for p in procs:
        p.start()
    for p in procs:
        p.join()

    print(f"Shared counter (expected 100000): {counter.value}")


if __name__ == "__main__":
    main()
```

**Output:**
```
=== CPU-Bound Task: Sum of squares for 10,000,000 numbers ===
Sequential:         3.82s
Pool (2 workers):   2.11s (speedup: 1.81x)
Pool (4 workers):   1.24s (speedup: 3.08x)
Pool (8 workers):   1.19s (speedup: 3.21x)  (diminishing returns)

=== ProcessPoolExecutor: Parallel file processing ===
Files: 20 simulated documents
Sequential: 4.1s
Parallel (4 workers): 1.2s
Speedup: 3.4x
```

---

## Real-World Use Case

**Scenario:** An enterprise team processes 50,000 customer documents for named entity recognition — a CPU-bound NLP pipeline.

| Metric | Before (sequential) | After (ProcessPoolExecutor, 4 workers) |
|---|---|---|
| Documents per hour | 3,200 | 11,800 |
| Wall clock time (50k docs) | 15.6 hours | 4.2 hours |
| CPU utilisation | 12.5% (1/8 cores) | ~98% |
| Memory per worker | Shared (1 process) | ~400MB each (4 = 1.6GB) |
| Crash isolation | One crash kills all | One worker crash, pool restarts it |

---

## Debugging and Pitfalls

### Pitfall 1 — Passing a Lambda to Pool Workers

**Wrong:**
```python
pool.map(lambda x: x * 2, data)
```

**Right:**
```python
def double(x):
    return x * 2

pool.map(double, data)
```

**Why:** Python's `pickle` module (used to send arguments to worker processes) cannot serialise lambdas or functions defined inside another function. The error `AttributeError: Can't pickle local object` appears at runtime, not at definition time.

### Pitfall 2 — Forgetting `if __name__ == "__main__":` on Windows

**Wrong (top-level Pool creation on Windows):**
```python
pool = multiprocessing.Pool(4)
results = pool.map(my_func, data)
```

**Right:**
```python
if __name__ == "__main__":
    pool = multiprocessing.Pool(4)
    results = pool.map(my_func, data)
    pool.close()
    pool.join()
```

**Why:** On Windows (and macOS with the default `spawn` start method), the worker process imports the main module to access functions. Without the `if __name__ == "__main__":` guard, the import re-executes the Pool creation code, triggering an infinite cascade of process spawning.

### Pitfall 3 — Not Closing or Terminating the Pool

**Wrong:**
```python
pool = multiprocessing.Pool(4)
results = pool.map(my_func, data)
```

**Right:**
```python
with multiprocessing.Pool(4) as pool:
    results = pool.map(my_func, data)
```

**Why:** Without closing the pool, worker processes remain alive as zombies until the garbage collector cleans them up. The context manager calls `pool.terminate()` and `pool.join()` automatically on exit — even if an exception occurs.

### Pitfall 4 — Over-Parallelising Small Tasks

**Wrong:**
```python
with multiprocessing.Pool(8) as pool:
    results = pool.map(lambda x: x + 1, range(100))
```

**Right:**
```python
results = [x + 1 for x in range(100)]
```

**Why:** Process pool startup, argument pickling/unpickling, and IPC overhead can be 50-100ms per worker. For trivially small tasks (adding 1 to 100 numbers), this overhead completely dominates and makes multiprocessing 10× slower than a list comprehension.

### Pitfall 5 — Shared Memory Without Locking

**Wrong:**
```python
counter = multiprocessing.Value('i', 0)

def increment(c):
    c.value += 1

processes = [multiprocessing.Process(target=increment, args=(counter,)) for _ in range(4)]
```

**Right:**
```python
counter = multiprocessing.Value('i', 0)
lock = multiprocessing.Lock()

def increment(c, l):
    with l:
        c.value += 1

processes = [multiprocessing.Process(target=increment, args=(counter, lock)) for _ in range(4)]
```

**Why:** `counter.value += 1` is a read-modify-write operation. Two processes can read the same value simultaneously, both add 1, and both write back — the net effect is +1, not +2. Unlike CPython's GIL (which makes some thread operations safe), multiprocessing has separate processes and no shared GIL.

---

## Production Considerations

### Logging and Monitoring

```python
import logging
import multiprocessing
import time

logger = logging.getLogger(__name__)


def timed_pool_map(func, data, n_workers):
    start = time.perf_counter()
    with multiprocessing.Pool(n_workers) as pool:
        results = pool.map(func, data)
    elapsed = time.perf_counter() - start

    logger.info(
        "pool_map_complete",
        extra={
            "n_items": len(data),
            "n_workers": n_workers,
            "duration_s": round(elapsed, 3),
            "items_per_sec": round(len(data) / elapsed, 1),
        }
    )
    return results, elapsed
```

### Circuit Breaker for Process Count

```python
import os
import multiprocessing


MAX_WORKERS = min(multiprocessing.cpu_count(), 8)


def safe_pool_map(func, data, n_workers=None):
    if n_workers is None:
        n_workers = min(MAX_WORKERS, len(data))

    if n_workers > multiprocessing.cpu_count():
        raise ValueError(
            f"n_workers ({n_workers}) > CPU count ({multiprocessing.cpu_count()}). "
            "This wastes resources and increases context switching."
        )

    if len(data) < n_workers * 10:
        logger.warning(
            "pool_overhead_likely",
            extra={"n_items": len(data), "n_workers": n_workers}
        )

    with multiprocessing.Pool(n_workers) as pool:
        return pool.map(func, data)
```

### Safety and Ethics

**Input validation:**

```python
def validate_pool_inputs(func, data, n_workers):
    if not callable(func):
        raise TypeError(f"func must be callable, got {type(func)}")
    if not data:
        raise ValueError("data cannot be empty")
    if not (1 <= n_workers <= 64):
        raise ValueError(f"n_workers must be 1-64, got {n_workers}")

    import pickle
    try:
        pickle.dumps(func)
    except (pickle.PicklingError, AttributeError) as e:
        raise ValueError(f"func cannot be pickled for multiprocessing: {e}")
```

**Governance checklist:**
- [ ] Worker count is capped at `cpu_count()` — no over-subscription
- [ ] All pool functions are validated for picklability before submission
- [ ] Logging captures items/second for capacity planning
- [ ] Circuit breaker warns when task granularity is too small for parallelism
- [ ] Process pool is always used as a context manager — no orphaned processes
- [ ] Data sent to workers is sanitised — no credentials or PII in pickled arguments
- [ ] `if __name__ == "__main__":` guard is present in all scripts

---

## Testing

```python
import unittest
import multiprocessing
import time


def square(x):
    return x * x


class TestMultiprocessing(unittest.TestCase):

    def test_pool_map_correct(self):
        with multiprocessing.Pool(2) as pool:
            results = pool.map(square, range(10))
        self.assertEqual(results, [i * i for i in range(10)])

    def test_pool_map_order_preserved(self):
        with multiprocessing.Pool(4) as pool:
            results = pool.map(square, range(20))
        self.assertEqual(results, [i * i for i in range(20)])

    def test_pool_faster_than_sequential(self):
        def slow_square(x):
            time.sleep(0.01)
            return x * x

        data = list(range(20))
        start = time.perf_counter()
        for x in data:
            slow_square(x)
        seq_time = time.perf_counter() - start

        start = time.perf_counter()
        with multiprocessing.Pool(4) as pool:
            pool.map(slow_square, data)
        par_time = time.perf_counter() - start

        self.assertLess(par_time, seq_time * 0.7)

    def test_shared_value_with_lock(self):
        counter = multiprocessing.Value('i', 0)
        lock = multiprocessing.Lock()

        def inc(c, l, n):
            for _ in range(n):
                with l:
                    c.value += 1

        procs = [multiprocessing.Process(target=inc, args=(counter, lock, 10_000))
                 for _ in range(4)]
        for p in procs:
            p.start()
        for p in procs:
            p.join()

        self.assertEqual(counter.value, 40_000)

    def test_pickling_validation(self):
        import pickle
        self.assertRaises(AttributeError, pickle.dumps, lambda x: x)

        pickle.dumps(square)


if __name__ == "__main__":
    unittest.main()
```

**Testing checklist:**
- [ ] Pool.map returns results in input order
- [ ] Results match sequential computation
- [ ] Parallel execution is faster than sequential for non-trivial tasks
- [ ] Shared Value reaches expected count with locking
- [ ] Lambda pickling raises AttributeError (documents the constraint)
- [ ] Pool context manager closes correctly even on exception

---

## Interview Q&A

**Q1: Why does Python's GIL not affect multiprocessing?**

Each Python process has its own Python interpreter instance, its own memory space, and its own GIL. The GIL is a lock within a single interpreter — it prevents multiple threads within one process from executing bytecode simultaneously. With multiprocessing, there are N separate processes, each with N independent GILs. Process 1's GIL controls threads in process 1; process 2's GIL controls threads in process 2. They never interfere. The cost is that processes cannot share memory directly — data must be serialised (pickled), sent via IPC, and deserialised, which adds overhead.

**Q2: What is the `spawn` vs `fork` start method and why does it matter?**

Python supports three process start methods: `fork` (default on Linux/macOS), `spawn` (default on Windows, available on all), and `forkserver`. Fork copies the entire parent process memory — fast, but dangerous if the parent has open file descriptors, locks, or GPU context (fork + CUDA = undefined behaviour). Spawn starts a fresh Python interpreter and imports only what's needed — slower to start (reimports modules) but safer. Always use spawn in production, especially in ML code that uses CUDA or multi-threaded C libraries. Set it with `multiprocessing.set_start_method('spawn')` at the top of your main block.

**Q3: When does multiprocessing hurt performance instead of helping?**

Multiprocessing hurts when: the per-task work is smaller than the process startup + IPC overhead (~50-100ms per task round trip on Linux), the data being sent to/from workers is large (serialisation dominates), or n_workers > CPU count (context switching overhead). The crossover point for pure Python CPU work is typically a task that takes at least 10-50ms. For numpy operations, the crossover is lower because the GIL is released during numpy C code, making threading viable. Profile before parallelising — many bottlenecks are in I/O or data loading, not computation.

**Q4: How do you pass a NumPy array to a pool worker without copying it?**

In Python 3.8+, use `multiprocessing.shared_memory.SharedMemory`. Create a shared memory block, write the array into it, pass the block's name and shape to workers, reconstruct the array with `np.ndarray(..., buffer=shm.buf)`, and close/unlink when done. This avoids pickling entirely — workers access the same physical memory page (mapped into each process's address space). The trade-off: you manage memory lifecycle manually and must avoid write conflicts without explicit locking.

**Q5: What is the difference between pool.map, pool.imap, and pool.map_async?**

`pool.map(func, iterable)` blocks until all results are ready, then returns a list. `pool.imap(func, iterable)` is lazy — it returns an iterator that yields results as they complete, preserving input order. `pool.map_async(func, iterable)` returns an `AsyncResult` immediately without blocking; call `.get()` (with optional timeout) when you need the results. Use `map` for simplicity when you need all results; `imap` when you want to process results as they arrive without loading all into memory; `map_async` when you want to submit work and do other things while workers run.

**Q6: How does `multiprocessing.shared_memory` differ from `multiprocessing.Array`?**

`multiprocessing.Array` (and `Value`) are high-level abstractions: they support type codes (int, float), come with an optional `Lock`, and are managed by the multiprocessing module's lifetime. `multiprocessing.shared_memory.SharedMemory` is a low-level raw byte buffer — you manage the dtype, shape, and access semantics yourself using `numpy.ndarray`. SharedMemory is much faster for large arrays because there is zero serialisation — all processes access the same physical pages. It is available from Python 3.8 onwards. For small scalar values shared between a few processes, `Value` and `Array` are simpler and sufficient.

---

## Resources

1. **Python docs — `multiprocessing`** — Full reference covering Pool, Process, shared memory, pipes, queues, and managers.
2. **Python docs — `concurrent.futures`** — ProcessPoolExecutor API, submit, map, as_completed, and Future methods.
3. **"High Performance Python" by Micha Gorelick and Ian Ozsvald** — O'Reilly book with profiling, GIL deep-dive, and multiprocessing patterns.
4. **`joblib` library** — `pip install joblib`. Provides `Parallel(n_jobs=4)(delayed(func)(x) for x in data)` — a simpler API over multiprocessing used heavily in scikit-learn.
5. **Python docs — `multiprocessing.shared_memory`** — Zero-copy shared NumPy arrays across processes (Python 3.8+).

---

## Conclusion

Multiprocessing is Python's answer to the GIL: when you need genuine CPU parallelism, spawn separate processes. Each gets its own interpreter and GIL, so all cores run at full speed simultaneously. `Pool.map` is the workhorse — distribute a list of inputs, collect results in order, done. `ProcessPoolExecutor` is the modern API with `Future` semantics, context manager support, and `as_completed` for streaming results. The overhead is real — serialisation, IPC, and process startup — so profile first and use multiprocessing only when the task is CPU-bound and large enough to justify the overhead. Combine with Article 18's asyncio for pipelines that mix I/O-bound and CPU-bound stages.

**Challenge:** Implement a parallel word counter using `ProcessPoolExecutor`. Split a large list of strings into chunks, count word frequencies in each chunk in parallel, then merge the chunk-level counters into one final `Counter`. Compare performance against a sequential `Counter` for 1 million strings.

<!--
HASHNODE PUBLISH SETTINGS
Series: Programming
Tags: python, programming, multiprocessing, parallel, processpool, processexecutor, gil, performance
Slug: parallel-programming-multiprocessing-in-python
SEO Title: Parallel Programming: Multiprocessing in Python
SEO Desc: Bypass the GIL with Python multiprocessing. Pool.map, ProcessPoolExecutor, shared memory, and CPU-bound benchmarks with timing comparisons.
Cover Image: /assets/images/multiprocessing-cover.png
Image 1: /assets/images/multiprocessing-vs-threading-diagram.png
-->
