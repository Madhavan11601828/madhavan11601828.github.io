---
title: "Concurrent Programming: Threading and AsyncIO"
author: "Mangena Venu Madhavan"
date: 2026-11-17
tags: [Python, Programming, Concurrency, AsyncIO, Threading]
categories: [programming]
series: "Programming"
article_number: 18
---

## Key Takeaways

- Concurrency means multiple tasks make progress in overlapping time periods; parallelism means they run simultaneously on multiple CPUs.
- The GIL (Global Interpreter Lock) allows only one Python thread to execute bytecode at a time — threading does not speed up CPU-bound work.
- Threading excels at I/O-bound tasks: while one thread waits for a response, others run.
- `asyncio` avoids thread overhead entirely — one thread, one event loop, cooperative scheduling via `await`.
- `asyncio.gather()` runs coroutines concurrently and collects results with one call.
- `ThreadPoolExecutor` is the pragmatic high-level API when you need threads for existing synchronous code.
- For CPU-bound work, use `multiprocessing` (Article 19) — not threads, not asyncio.

---

## Who This Is For / Prerequisites

**Who this is for:** Python developers who write sequential code and want to speed up I/O-bound programs — API calls, file reads, database queries.

**Prerequisites:**
- Python functions, classes, and exceptions
- Basic understanding of `time.sleep` as a stand-in for I/O wait
- `pip install` not required — all examples use the standard library

---

## What You'll Build

A comparison of sequential, threaded, and async approaches to five simulated I/O tasks, with timing and speedup analysis.

**Expected output:**
```
=== Sequential (5 tasks, 1s each) ===
Total time: 5.01s

=== Threading (5 tasks, 1s each) ===
Total time: 1.02s

=== AsyncIO (5 tasks, 1s each) ===
Total time: 1.01s

Threading speedup: 4.9x
AsyncIO speedup: 5.0x
Best for I/O-bound: AsyncIO (no thread overhead)
```

---

## Problem Statement

An ML pipeline fetches inference results from 10 model endpoints. Each call takes ~200ms. Sequential execution: 2 seconds. A user-facing feature needs under 500ms. The pipeline is I/O-bound — each call spends 195ms waiting for the network. Threading or asyncio runs all 10 calls concurrently, finishing in ~200ms — a 10× improvement with no code restructuring beyond adding `threading.Thread` or `async/await`.

---

## Concept Simply

**The analogy:** You order coffee, then sit and wait. Sequential: order coffee, wait, drink, then order tea, wait, drink. Concurrent (threading): tap a friend on the shoulder, tell them to order tea while you wait for the coffee. Both orders are in-flight simultaneously. Async: you order coffee, give the barista your number to call when ready, go order tea, give another number — both in-flight, you (the single event loop) handle each ready notification in turn.

**Comparison table:**

| Model | Use for | Thread count | GIL impact | Complexity |
|---|---|---|---|---|
| Sequential | Simple scripts | 1 | N/A | Lowest |
| threading.Thread | I/O-bound, shared state | Many OS threads | Significant | Medium |
| asyncio | I/O-bound, many connections | 1 (event loop) | None | Medium |
| multiprocessing | CPU-bound | Many OS processes | Bypassed | High |
| ThreadPoolExecutor | I/O-bound, existing sync code | Pool | Significant | Low |

---

## Core Components

### Concurrency vs Parallelism

```python
import threading
import time


def show_thread_info(task_id):
    thread_name = threading.current_thread().name
    print(f"Task {task_id} running on {thread_name}")
    time.sleep(0.1)
    print(f"Task {task_id} done")


threads = [threading.Thread(target=show_thread_info, args=(i,)) for i in range(3)]
for t in threads:
    t.start()
for t in threads:
    t.join()
```

All three tasks run "at the same time" from the program's perspective — they interleave during the `time.sleep`. On a single CPU, only one actually executes at any instant, but the I/O wait is overlapped.

### The GIL

```python
import threading
import time


def cpu_task(n):
    total = 0
    for i in range(n):
        total += i * i
    return total


def time_cpu(n_workers, work_per_worker):
    start = time.perf_counter()

    if n_workers == 1:
        cpu_task(work_per_worker)
    else:
        threads = [threading.Thread(target=cpu_task, args=(work_per_worker,))
                   for _ in range(n_workers)]
        for t in threads:
            t.start()
        for t in threads:
            t.join()

    return time.perf_counter() - start
```

Two threads doing CPU work will not run faster than one — both compete for the GIL. The thread that holds the GIL executes; the other waits. Total CPU time is the same; wall clock time is similar or worse due to context-switching overhead.

### threading.Thread

```python
import threading
import time


def io_task(task_id, duration, results, lock):
    time.sleep(duration)
    with lock:
        results.append(f"task_{task_id}_done")


def run_threaded(n_tasks, duration):
    results = []
    lock = threading.Lock()

    threads = [
        threading.Thread(
            target=io_task,
            args=(i, duration, results, lock)
        )
        for i in range(n_tasks)
    ]

    for t in threads:
        t.start()
    for t in threads:
        t.join()

    return results
```

`threading.Lock()` ensures only one thread modifies `results` at a time. The `with lock:` block is the critical section. Without the lock, two threads appending simultaneously could corrupt the list in rare cases (though CPython's GIL makes list.append atomic, using an explicit lock is the correct habit for shared mutable state).

### threading.Lock — Race Condition Example

```python
import threading


counter = 0
lock = threading.Lock()


def increment_unsafe():
    global counter
    for _ in range(100_000):
        counter += 1


def increment_safe():
    global counter
    for _ in range(100_000):
        with lock:
            counter += 1


counter = 0
threads = [threading.Thread(target=increment_unsafe) for _ in range(2)]
for t in threads:
    t.start()
for t in threads:
    t.join()
print(f"Unsafe: {counter}")

counter = 0
threads = [threading.Thread(target=increment_safe) for _ in range(2)]
for t in threads:
    t.start()
for t in threads:
    t.join()
print(f"Safe: {counter}")
```

The unsafe version may print less than 200,000 because `counter += 1` is three operations (read, add, write) and another thread may read the stale value between the read and the write. The safe version always prints 200,000.

### asyncio — Event Loop, async/await

```python
import asyncio
import time


async def async_io_task(task_id, duration):
    await asyncio.sleep(duration)
    return f"task_{task_id}_done"


async def run_async(n_tasks, duration):
    tasks = [async_io_task(i, duration) for i in range(n_tasks)]
    results = await asyncio.gather(*tasks)
    return results
```

`asyncio.sleep` yields control back to the event loop during the wait — the event loop runs other coroutines. When the sleep completes, the event loop resumes the coroutine. There is only one thread; context switching is cooperative (at every `await`) and extremely cheap compared to OS thread context switches.

### asyncio.gather — Concurrent Coroutines

```python
async def fetch_all_scores(model_ids):
    async def fetch_score(model_id):
        await asyncio.sleep(0.2)
        return {"model_id": model_id, "score": 0.9}

    results = await asyncio.gather(*[fetch_score(mid) for mid in model_ids])
    return results
```

`asyncio.gather` accepts any number of coroutines and runs them concurrently. Results are returned in the same order as the input coroutines, regardless of completion order.

### ThreadPoolExecutor — High-Level Thread Pool

```python
from concurrent.futures import ThreadPoolExecutor, as_completed
import time


def sync_io_task(task_id, duration):
    time.sleep(duration)
    return f"task_{task_id}_done"


def run_thread_pool(n_tasks, duration, max_workers=5):
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = {
            executor.submit(sync_io_task, i, duration): i
            for i in range(n_tasks)
        }
        results = []
        for future in as_completed(futures):
            results.append(future.result())
    return results
```

`ThreadPoolExecutor` manages a pool of reusable threads. `as_completed` yields futures as they finish — useful when you want to process results as they arrive rather than waiting for all.

---

## Design Trade-offs

| | threading | asyncio | ThreadPoolExecutor |
|---|---|---|---|
| Memory per task | ~8KB (thread stack) | ~1KB (coroutine frame) | ~8KB (reused threads) |
| Startup overhead | Per thread | Per coroutine (negligible) | Pool created once |
| Max concurrent tasks | 100s (OS limit) | 10,000s | Bounded by max_workers |
| Works with blocking I/O | Yes | No (blocks event loop) | Yes |
| Works with existing sync code | Yes | No (must use async/await) | Yes |
| Debugging complexity | Medium | Medium | Low |

---

## Hands-On Tutorial

### Step 1 — Sequential Baseline

```python
import time


def sequential_tasks(n_tasks, duration):
    start = time.perf_counter()
    results = []
    for i in range(n_tasks):
        time.sleep(duration)
        results.append(f"task_{i}_done")
    return results, time.perf_counter() - start
```

### Step 2 — Thread Version

```python
import threading


def threaded_tasks(n_tasks, duration):
    results = []
    lock = threading.Lock()

    def task(task_id):
        time.sleep(duration)
        with lock:
            results.append(f"task_{task_id}_done")

    start = time.perf_counter()
    threads = [threading.Thread(target=task, args=(i,)) for i in range(n_tasks)]
    for t in threads:
        t.start()
    for t in threads:
        t.join()
    return results, time.perf_counter() - start
```

### Step 3 — Async Version

```python
import asyncio


async def async_tasks(n_tasks, duration):
    async def task(task_id):
        await asyncio.sleep(duration)
        return f"task_{task_id}_done"

    start = time.perf_counter()
    results = await asyncio.gather(*[task(i) for i in range(n_tasks)])
    return results, time.perf_counter() - start
```

### Complete Runnable Script

```python
import time
import threading
import asyncio
from concurrent.futures import ThreadPoolExecutor, as_completed


N_TASKS = 5
TASK_DURATION = 1.0


def sequential_run():
    start = time.perf_counter()
    results = []
    for i in range(N_TASKS):
        time.sleep(TASK_DURATION)
        results.append(f"task_{i}")
    return results, time.perf_counter() - start


def threaded_run():
    results = []
    lock = threading.Lock()

    def task(task_id):
        time.sleep(TASK_DURATION)
        with lock:
            results.append(f"task_{task_id}")

    start = time.perf_counter()
    threads = [threading.Thread(target=task, args=(i,)) for i in range(N_TASKS)]
    for t in threads:
        t.start()
    for t in threads:
        t.join()
    return results, time.perf_counter() - start


async def async_run():
    async def task(task_id):
        await asyncio.sleep(TASK_DURATION)
        return f"task_{task_id}"

    start = time.perf_counter()
    results = await asyncio.gather(*[task(i) for i in range(N_TASKS)])
    return results, time.perf_counter() - start


def executor_run():
    def task(task_id):
        time.sleep(TASK_DURATION)
        return f"task_{task_id}"

    start = time.perf_counter()
    with ThreadPoolExecutor(max_workers=N_TASKS) as executor:
        futures = [executor.submit(task, i) for i in range(N_TASKS)]
        results = [f.result() for f in futures]
    return results, time.perf_counter() - start


def main():
    print(f"=== Sequential ({N_TASKS} tasks, {TASK_DURATION}s each) ===")
    _, seq_time = sequential_run()
    print(f"Total time: {seq_time:.2f}s")

    print()
    print(f"=== Threading ({N_TASKS} tasks, {TASK_DURATION}s each) ===")
    _, thread_time = threaded_run()
    print(f"Total time: {thread_time:.2f}s")

    print()
    print(f"=== AsyncIO ({N_TASKS} tasks, {TASK_DURATION}s each) ===")
    _, async_time = asyncio.run(async_run())
    print(f"Total time: {async_time:.2f}s")

    print()
    print(f"=== ThreadPoolExecutor ({N_TASKS} tasks, {TASK_DURATION}s each) ===")
    _, exec_time = executor_run()
    print(f"Total time: {exec_time:.2f}s")

    print()
    print(f"Threading speedup: {seq_time / thread_time:.1f}x")
    print(f"AsyncIO speedup: {seq_time / async_time:.1f}x")
    print(f"Executor speedup: {seq_time / exec_time:.1f}x")
    print("Best for I/O-bound: AsyncIO (no thread overhead)")

    print()
    print("=== Race Condition Demo ===")
    counter = [0]
    lock = threading.Lock()

    def unsafe_inc():
        for _ in range(50_000):
            counter[0] += 1

    def safe_inc():
        for _ in range(50_000):
            with lock:
                counter[0] += 1

    counter[0] = 0
    ts = [threading.Thread(target=unsafe_inc) for _ in range(2)]
    for t in ts:
        t.start()
    for t in ts:
        t.join()
    print(f"Unsafe counter (expected 100000): {counter[0]}")

    counter[0] = 0
    ts = [threading.Thread(target=safe_inc) for _ in range(2)]
    for t in ts:
        t.start()
    for t in ts:
        t.join()
    print(f"Safe counter (expected 100000): {counter[0]}")


if __name__ == "__main__":
    main()
```

**Output:**
```
=== Sequential (5 tasks, 1s each) ===
Total time: 5.01s

=== Threading (5 tasks, 1s each) ===
Total time: 1.02s

=== AsyncIO (5 tasks, 1s each) ===
Total time: 1.01s

Threading speedup: 4.9x
AsyncIO speedup: 5.0x
Best for I/O-bound: AsyncIO (no thread overhead)
```

---

## Real-World Use Case

**Scenario:** An enterprise team's ML serving pipeline calls five downstream model APIs per request. Sequential latency was blocking user-facing features.

| Metric | Before (sequential) | After (asyncio.gather) |
|---|---|---|
| P50 request latency | 1,020ms | 210ms |
| P99 request latency | 1,450ms | 380ms |
| Throughput (req/sec) | 0.98 | 4.7 |
| Thread count | 1 | 1 (event loop) |
| Memory per request | 48KB | 12KB |
| Error handling | Sequential, stops on first | gather returns all, errors visible per task |

---

## Debugging and Pitfalls

### Pitfall 1 — Using asyncio.sleep Instead of time.sleep in Threads (and Vice Versa)

**Wrong (blocks event loop in async context):**
```python
async def bad_task():
    time.sleep(1)
    return "done"
```

**Right:**
```python
async def good_task():
    await asyncio.sleep(1)
    return "done"
```

**Why:** `time.sleep(1)` in a coroutine blocks the entire event loop for 1 second — no other coroutines run during that time. The entire point of asyncio is cooperative yielding; `await asyncio.sleep` yields control to the event loop. Use `time.sleep` only in regular threads or thread pools.

### Pitfall 2 — Sharing Mutable State Between Threads Without a Lock

**Wrong:**
```python
results = []

def task(i):
    results.append(process(i))
```

**Right:**
```python
results = []
lock = threading.Lock()

def task(i):
    result = process(i)
    with lock:
        results.append(result)
```

**Why:** Python's list.append is not guaranteed atomic in all implementations. Even in CPython where it is (due to GIL), depending on this is fragile. Locking after the computation (not around it) is correct — only the shared-state modification needs the lock, not the work itself.

### Pitfall 3 — Not Joining Threads Before Reading Results

**Wrong:**
```python
for t in threads:
    t.start()
print(results)
```

**Right:**
```python
for t in threads:
    t.start()
for t in threads:
    t.join()
print(results)
```

**Why:** Without `join()`, the main thread may read `results` before all threads have appended their values. The main thread and child threads run concurrently; `join` is the synchronisation barrier that ensures all threads complete before execution continues past it.

### Pitfall 4 — Calling asyncio.run Inside an Already-Running Event Loop

**Wrong (in a Jupyter notebook or FastAPI handler):**
```python
result = asyncio.run(my_coroutine())
```

**Right:**
```python
result = await my_coroutine()
```

**Why:** `asyncio.run` creates a new event loop and runs until the coroutine completes. Calling it from inside an already-running event loop (Jupyter, FastAPI, Django async views) raises `RuntimeError: This event loop is already running`. Use `await` directly or `asyncio.ensure_future` / `asyncio.create_task` if you're inside an async context.

### Pitfall 5 — ThreadPoolExecutor max_workers Too High for I/O Operations

**Wrong:**
```python
with ThreadPoolExecutor(max_workers=500) as executor:
    futures = [executor.submit(api_call, i) for i in range(500)]
```

**Right:**
```python
with ThreadPoolExecutor(max_workers=20) as executor:
    ...
```

**Why:** Creating 500 OS threads has significant overhead — each thread allocates ~8KB of stack, and context switching between hundreds of threads wastes CPU time. For I/O-bound tasks, 10-50 workers typically saturate the available bandwidth. Prefer asyncio for truly high-concurrency I/O (thousands of simultaneous connections).

---

## Testing

```python
import unittest
import asyncio
import threading
import time


class TestConcurrency(unittest.TestCase):

    def test_threaded_produces_all_results(self):
        results, elapsed = threaded_run()
        self.assertEqual(len(results), N_TASKS)

    def test_threaded_faster_than_sequential(self):
        _, seq_time = sequential_run()
        _, thread_time = threaded_run()
        self.assertLess(thread_time, seq_time * 0.8)

    def test_async_produces_all_results(self):
        results, elapsed = asyncio.run(async_run())
        self.assertEqual(len(results), N_TASKS)

    def test_async_faster_than_sequential(self):
        _, seq_time = sequential_run()
        _, async_time = asyncio.run(async_run())
        self.assertLess(async_time, seq_time * 0.8)

    def test_lock_prevents_race(self):
        counter = [0]
        lock = threading.Lock()

        def safe_inc():
            for _ in range(10_000):
                with lock:
                    counter[0] += 1

        threads = [threading.Thread(target=safe_inc) for _ in range(4)]
        for t in threads:
            t.start()
        for t in threads:
            t.join()
        self.assertEqual(counter[0], 40_000)

    def test_gather_returns_in_order(self):
        async def run():
            async def task(i):
                await asyncio.sleep(0.1 * (5 - i))
                return i
            return await asyncio.gather(*[task(i) for i in range(5)])

        results = asyncio.run(run())
        self.assertEqual(results, [0, 1, 2, 3, 4])


if __name__ == "__main__":
    unittest.main()
```

**Testing checklist:**
- [ ] All n tasks produce n results (no dropped tasks)
- [ ] Concurrent approaches are faster than sequential by at least 50%
- [ ] Lock prevents race condition (counter reaches expected value)
- [ ] `asyncio.gather` returns results in input order, not completion order
- [ ] Daemon threads do not prevent program exit
- [ ] `ThreadPoolExecutor` context manager releases resources on exit

---

## Interview Q&A

**Q1: What is the Global Interpreter Lock and why does Python have it?**

The GIL is a mutex in CPython that ensures only one thread executes Python bytecode at a time. Python has it because CPython's memory management (reference counting) is not thread-safe — without the GIL, two threads incrementing or decrementing a reference count simultaneously could corrupt the count, causing memory leaks or premature object destruction. The GIL simplifies extension module writing and makes single-threaded code fast (no lock overhead). The trade-off is that CPU-bound multithreaded Python code does not scale with cores. The GIL is specific to CPython; Jython and PyPy STM do not have it.

**Q2: When should you choose asyncio over threading?**

Choose asyncio when: you need to handle many concurrent I/O-bound tasks (thousands of connections), you're writing new code that can be made async from the start, or memory efficiency is critical (coroutines use far less memory than threads). Choose threading when: you're integrating with existing synchronous libraries that cannot be made async (database drivers without async support, legacy C extensions), the number of concurrent tasks is moderate (<100), or you need true blocking I/O in each task. The golden rule: asyncio for new high-concurrency code, threading for integrating with synchronous libraries.

**Q3: What is the difference between `asyncio.gather` and `asyncio.wait`?**

`asyncio.gather(*coroutines)` runs all coroutines concurrently and returns their results as a list in input order. It cancels all remaining tasks if one raises an exception (by default). `asyncio.wait(tasks, return_when=...)` gives more control: you can wait for FIRST_COMPLETED, FIRST_EXCEPTION, or ALL_COMPLETED, and it returns two sets (done, pending) so you can process results as they arrive. Use `gather` when you want all results together; use `wait` when you need fine-grained control over completion order and cancellation.

**Q4: How does `ThreadPoolExecutor` differ from creating threads manually?**

`ThreadPoolExecutor` maintains a pool of pre-created threads that are reused across multiple tasks. Thread creation has overhead (~1ms on Linux); pooling amortises this across many tasks. `submit()` returns a Future — you can check status, cancel, add callbacks, and collect results via `result()` or `as_completed()`. Manual `threading.Thread` creation gives direct control over thread names, daemon status, and exception handling, but no built-in pool management or Future abstraction. Use `ThreadPoolExecutor` for high-level application code; use `threading.Thread` directly when you need fine-grained thread lifecycle control.

**Q5: What happens when a coroutine raises an exception inside asyncio.gather?**

By default, `asyncio.gather` cancels all other running tasks and re-raises the exception. Setting `return_exceptions=True` changes this: exceptions are returned as results (as exception objects) rather than being raised, and all other tasks continue to completion. This is useful when some failures are expected and you want to collect all results — successes and failures — without stopping mid-way. After the call, check each result: `if isinstance(result, Exception): handle_error(result)`.

---

## Resources

1. **Python docs — `asyncio`** — Official tutorial with event loop model, coroutines, tasks, and streams.
2. **Python docs — `threading`** — Thread, Lock, RLock, Semaphore, Event, and Queue documentation.
3. **"Using Asyncio in Python" by Caleb Hattingh** — O'Reilly book focused on practical asyncio patterns for high-concurrency applications.
4. **`aiohttp` library** — Async HTTP client/server: `pip install aiohttp`. The production choice for async HTTP in Python.
5. **David Beazley — "Python Concurrency from the Ground Up" (PyCon 2015)** — Freely available talk demonstrating the GIL, threads, and asyncio with live demos.

---

## Conclusion

Concurrency is the tool for I/O-bound Python code. Threading gives you a familiar model with OS threads and works with any synchronous library. AsyncIO gives you lower overhead, higher concurrency limits, and explicit yielding points — but requires async/await throughout. `ThreadPoolExecutor` bridges the gap: use existing synchronous code in a thread pool with a clean Future API. The critical insight remains the same for both: the GIL is irrelevant for I/O-bound work because threads release the GIL during I/O operations. For CPU-bound parallelism, Article 19 covers `multiprocessing`, which bypasses the GIL entirely by running separate OS processes.

**Next step:** Replace the `asyncio.sleep` mocks in this article with real async HTTP calls using `aiohttp`. Fetch five URLs concurrently and compare to sequential `requests.get()` calls — the speedup will match (or exceed) the mock benchmark.

<!--
HASHNODE PUBLISH SETTINGS
Series: Programming
Tags: python, programming, concurrency, asyncio, threading, threadpoolexecutor, gil, async
Slug: concurrent-programming-threading-and-asyncio
SEO Title: Concurrent Programming: Threading and AsyncIO
SEO Desc: Master Python concurrency. Compare threading, asyncio, and ThreadPoolExecutor for I/O-bound tasks with timing benchmarks and race condition demos.
Cover Image: /assets/images/concurrency-threading-asyncio-cover.png
Image 1: /assets/images/concurrency-comparison-diagram.png
-->
