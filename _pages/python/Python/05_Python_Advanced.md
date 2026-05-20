---
layout: page
title: Python Advanced - Level 5
permalink: /python/advanced/
description: Advanced Python internals, performance optimization, C extensions, web frameworks, and data science
---

# Python Advanced - Level 5

**Target Audience:** Advanced developers optimizing and extending Python  
**Estimated Learning Time:** 6-8 weeks (60-80 hours)  
**Prerequisites:** Completed Levels 1-4 or extensive Python experience

---

## 📋 Document Overview

This document covers advanced Python internals, performance optimization, C extensions, and specialized domains. You'll learn how Python works under the hood, how to optimize performance, extend Python with C, and work with specialized libraries for web development and data science.

### What You'll Learn:
- ✅ Performance profiling and optimization techniques
- ✅ Memory management and garbage collection
- ✅ Advanced decorator patterns and closures
- ✅ Context variables for async contexts
- ✅ Weak references for cache management
- ✅ Abstract Syntax Trees (AST) manipulation
- ✅ Bytecode inspection and understanding
- ✅ C extensions with Cython and ctypes
- ✅ Advanced async patterns and concurrency
- ✅ Professional database programming
- ✅ Web frameworks (Flask, FastAPI)
- ✅ Data science fundamentals (NumPy, Pandas)

### Skills You'll Gain:
- 🚀 Optimize Python performance significantly
- 🔬 Understand Python internals deeply
- ⚙️ Extend Python with C for maximum speed
- 🌐 Build production web applications
- 📊 Process data efficiently at scale
- 🏗️ Architect high-performance systems

---

## 📑 Table of Contents with Section Details

### 1. [Performance Optimization](#performance-optimization)
**What it covers:** Profiling, benchmarking, and optimization techniques  
**Key concepts:** cProfile, timeit, line_profiler, optimization strategies, NumPy vectorization  
**Why it matters:** Handle large datasets, reduce costs, improve user experience  
**Real-world use:** Data processing, web services, scientific computing  
**Time:** 180 minutes  
**Outcome:** Profile and optimize Python code systematically

### 2. [Memory Management](#memory-management)
**What it covers:** Python's memory model and optimization  
**Key concepts:** Reference counting, garbage collection, __slots__, memory profiling, leaks  
**Why it matters:** Long-running processes, large datasets, container environments  
**Real-world use:** Web servers, data pipelines, embedded systems  
**Time:** 150 minutes  
**Outcome:** Understand and optimize memory usage

### 3. [Advanced Decorators and Closures](#advanced-decorators-and-closures)
**What it covers:** Complex decorator patterns and closure techniques  
**Key concepts:** Decorator classes, chaining, parameterization, state in closures  
**Why it matters:** Framework development, aspect-oriented programming  
**Real-world use:** Web frameworks, ORMs, authentication, caching  
**Time:** 120 minutes  
**Outcome:** Master advanced decorator patterns

### 4. [Context Variables](#context-variables)
**What it covers:** Managing context in async applications  
**Key concepts:** ContextVar, token management, propagation in async code  
**Why it matters:** Request context in web apps, tracing in microservices  
**Real-world use:** Web frameworks, distributed tracing, request IDs  
**Time:** 90 minutes  
**Outcome:** Manage context properly in async applications

### 5. [Weak References](#weak-references)
**What it covers:** References that don't prevent garbage collection  
**Key concepts:** weakref module, WeakValueDictionary, callbacks, circular references  
**Why it matters:** Cache implementation, observer patterns, memory leaks  
**Real-world use:** Caching layers, event systems, object tracking  
**Time:** 75 minutes  
**Outcome:** Implement memory-efficient caches and avoid leaks

### 6. [Abstract Syntax Trees (AST)](#abstract-syntax-trees-ast)
**What it covers:** Parsing and manipulating Python code programmatically  
**Key concepts:** ast.parse(), NodeVisitor, NodeTransformer, code generation  
**Why it matters:** Code analysis tools, DSLs, code generation, linters  
**Real-world use:** Static analyzers, code formatters, transpilers  
**Time:** 150 minutes  
**Outcome:** Analyze and transform Python code programmatically

### 7. [Bytecode and dis Module](#bytecode-and-dis-module)
**What it covers:** Understanding Python's compiled bytecode  
**Key concepts:** dis.dis(), bytecode instructions, peephole optimization, code objects  
**Why it matters:** Understand performance, compiler behavior, optimization  
**Real-world use:** Performance debugging, understanding CPython  
**Time:** 120 minutes  
**Outcome:** Read and understand Python bytecode

### 8. [C Extensions and Cython](#c-extensions-and-cython)
**What it covers:** Extending Python with C for performance  
**Key concepts:** Cython syntax, ctypes for C libraries, CFFI, performance comparison  
**Why it matters:** Maximum performance for critical code paths  
**Real-world use:** Scientific computing, image processing, machine learning  
**Time:** 180 minutes  
**Outcome:** Write and use C extensions for Python

### 9. [Advanced Async Patterns](#advanced-async-patterns)
**What it covers:** Complex asynchronous programming patterns  
**Key concepts:** Async iterators, context managers, queues, locks, cancellation  
**Why it matters:** High-performance async applications  
**Real-world use:** Websocket servers, streaming APIs, real-time systems  
**Time:** 150 minutes  
**Outcome:** Implement sophisticated async patterns

### 10. [Database Programming](#database-programming)
**What it covers:** Professional database integration  
**Key concepts:** sqlite3, SQLAlchemy ORM, async databases (asyncpg), connection pooling  
**Why it matters:** Data persistence, ACID transactions, scalability  
**Real-world use:** All production applications with persistence  
**Time:** 180 minutes  
**Outcome:** Work with databases professionally

### 11. [Web Frameworks](#web-frameworks)
**What it covers:** Building web applications and APIs  
**Key concepts:** Flask basics, FastAPI with async, Pydantic models, routing, middleware  
**Why it matters:** Build web services and APIs  
**Real-world use:** REST APIs, microservices, web applications  
**Time:** 150 minutes  
**Outcome:** Build production-ready web applications

### 12. [Data Science Libraries](#data-science-libraries)
**What it covers:** NumPy and Pandas for data processing  
**Key concepts:** NumPy arrays, broadcasting, Pandas DataFrames, data manipulation  
**Why it matters:** Efficient data processing at scale  
**Real-world use:** Data analysis, machine learning, ETL pipelines  
**Time:** 150 minutes  
**Outcome:** Process data efficiently with scientific libraries

---

## 🎯 Learning Goals

By completing this level, you will be able to:
- ✅ Profile and optimize Python code for performance
- ✅ Understand Python's memory model and optimize usage
- ✅ Use advanced decorator and closure patterns
- ✅ Manage context in complex async applications
- ✅ Implement memory-efficient caches with weak references
- ✅ Parse and transform Python code with AST
- ✅ Understand and analyze Python bytecode
- ✅ Write C extensions for performance-critical code
- ✅ Implement complex asynchronous patterns
- ✅ Work with databases professionally
- ✅ Build production web applications
- ✅ Process data efficiently with NumPy/Pandas

---

## 🏆 Expert-Level Projects

Demonstrate mastery with these advanced projects:

1. **High-Performance Data Pipeline**
   - Process millions of records efficiently
   - Cython for critical sections
   - Async database operations
   - Memory profiling and optimization
   - Comprehensive monitoring and logging
   - Skills: Cython, async, databases, optimization, profiling

2. **Static Code Analyzer**
   - AST parsing and analysis
   - Detect code smells and anti-patterns
   - Custom linting rules
   - Plugin architecture with metaclasses
   - Skills: AST, metaclasses, patterns

3. **Async Websocket Server**
   - Handle thousands of concurrent connections
   - Message broadcasting and routing
   - Context variables for connection tracking
   - Proper error handling and cleanup
   - Performance profiling
   - Skills: Advanced async, context vars, optimization

4. **Microservices Framework**
   - FastAPI-based services
   - SQLAlchemy with async
   - Distributed tracing with context vars
   - Comprehensive testing
   - Metrics and monitoring
   - Skills: FastAPI, async databases, context vars, testing

---

## 🔬 Deep Dive Topics

### Python Internals:
- CPython source code exploration
- Python memory model details
- GIL (Global Interpreter Lock) implications
- Reference counting vs garbage collection
- Import system mechanics
- Descriptor protocol deep dive

### Performance Techniques:
- Algorithmic optimization (Big O)
- Data structure selection
- Caching strategies (LRU, LFU, TTL)
- Database query optimization
- Async vs threading vs multiprocessing
- When to use C extensions

### Architecture Patterns:
- Microservices architecture
- Event-driven architecture
- CQRS (Command Query Responsibility Segregation)
- Repository pattern
- Unit of Work pattern
- Dependency injection

---

## 📚 Advanced Reading

### Books:
- "Fluent Python" by Luciano Ramalho (2nd Edition)
- "High Performance Python" by Micha Gorelick & Ian Ozsvald
- "Python Cookbook" by David Beazley & Brian K. Jones
- "Expert Python Programming" by Michał Jaworski
- "Architecture Patterns with Python" by Harry Percival

### Resources:
- CPython source code (github.com/python/cpython)
- PEPs (Python Enhancement Proposals)
- Real Python advanced tutorials
- Talk Python podcast
- Python Bytes podcast

### Domain-Specific:
- **Web:** FastAPI documentation, Django for reference
- **Data Science:** "Python for Data Analysis" by Wes McKinney
- **Performance:** "Mastering Python High Performance" by Fernando Doglio

---

## 🎓 What's Next?

After completing this level, consider specializing in:

### Web Development:
- Advanced FastAPI/Django
- GraphQL with Strawberry/Graphene
- WebSockets and real-time features
- Microservices architecture
- Kubernetes and containerization

### Data Science/ML:
- Deep dive into Pandas
- scikit-learn for machine learning
- TensorFlow/PyTorch
- Data visualization (Matplotlib, Plotly)
- Jupyter notebooks and reproducible research

### DevOps/Infrastructure:
- Ansible for automation
- Terraform with Python
- Building CLI tools (Click, Typer)
- Monitoring and observability
- Container orchestration

### Low-Level/Performance:
- Contributing to CPython
- Writing C extensions
- PyPy and alternative implementations
- Embedded Python
- Real-time systems

---

## Table of Contents
1. [Performance Optimization](#performance-optimization)
2. [Memory Management](#memory-management)
3. [Advanced Decorators and Closures](#advanced-decorators-and-closures)
4. [Context Variables](#context-variables)
5. [Weak References](#weak-references)
6. [Abstract Syntax Trees (AST)](#abstract-syntax-trees-ast)
7. [Bytecode and dis Module](#bytecode-and-dis-module)
8. [C Extensions and Cython](#c-extensions-and-cython)
9. [Advanced Async Patterns](#advanced-async-patterns)
10. [Database Programming](#database-programming)
11. [Web Frameworks](#web-frameworks)
12. [Data Science Libraries](#data-science-libraries)

---

## Performance Optimization

### Profiling Code

```python
import cProfile
import pstats
from io import StringIO

def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

def main():
    result = fibonacci(30)

# Profile with cProfile
cProfile.run('main()', 'profile_stats')

# Analyze results
p = pstats.Stats('profile_stats')
p.strip_dirs()
p.sort_stats('cumulative')
p.print_stats(10)  # Top 10 functions

# Line profiler (pip install line_profiler)
# @profile  # Uncomment when using line_profiler
# def slow_function():
#     total = 0
#     for i in range(1000000):
#         total += i
#     return total

# Run: kernprof -l -v script.py

# Memory profiler (pip install memory_profiler)
# from memory_profiler import profile
# 
# @profile
# def memory_intensive():
#     big_list = [0] * 10000000
#     return sum(big_list)
```

### Timeit for Micro-Benchmarks

```python
import timeit

# Time a statement
time_taken = timeit.timeit('sum(range(1000))', number=10000)
print(f"Time: {time_taken:.4f} seconds")

# Compare different approaches
setup = "data = list(range(1000))"

# List comprehension
time1 = timeit.timeit('[x*2 for x in data]', setup=setup, number=10000)

# Map
time2 = timeit.timeit('list(map(lambda x: x*2, data))', setup=setup, number=10000)

# For loop
code = """
result = []
for x in data:
    result.append(x*2)
"""
time3 = timeit.timeit(code, setup=setup, number=10000)

print(f"List comp: {time1:.4f}")
print(f"Map: {time2:.4f}")
print(f"For loop: {time3:.4f}")

# Using Timer class
timer = timeit.Timer('sum(range(1000))')
results = timer.repeat(repeat=5, number=10000)
print(f"Best: {min(results):.4f}")
```

### Optimization Techniques

```python
# 1. Use built-in functions (written in C)
import operator

# Slower
result = [x * 2 for x in range(1000)]

# Faster
result = list(map(operator.mul, range(1000), [2] * 1000))

# 2. Local variable lookup is faster
import math

# Slower (global lookup)
def calculate():
    return [math.sqrt(x) for x in range(1000)]

# Faster (local lookup)
def calculate_optimized():
    sqrt = math.sqrt
    return [sqrt(x) for x in range(1000)]

# 3. Use sets for membership testing
# Slower (list)
items = list(range(1000))
if 500 in items:  # O(n)
    pass

# Faster (set)
items = set(range(1000))
if 500 in items:  # O(1)
    pass

# 4. String concatenation
# Slower
result = ""
for i in range(1000):
    result += str(i)

# Faster
result = "".join(str(i) for i in range(1000))

# 5. List vs deque for insertions
from collections import deque

# Slower for left insertions
lst = []
for i in range(1000):
    lst.insert(0, i)  # O(n)

# Faster
dq = deque()
for i in range(1000):
    dq.appendleft(i)  # O(1)

# 6. Use generators for large datasets
# Memory intensive
squares = [x**2 for x in range(1000000)]

# Memory efficient
squares = (x**2 for x in range(1000000))
```

### Memoization and Caching

```python
from functools import lru_cache, cache
import time

# Manual memoization
_fibonacci_cache = {}

def fibonacci(n):
    if n in _fibonacci_cache:
        return _fibonacci_cache[n]
    
    if n < 2:
        return n
    
    result = fibonacci(n - 1) + fibonacci(n - 2)
    _fibonacci_cache[n] = result
    return result

# Using lru_cache (Least Recently Used cache)
@lru_cache(maxsize=128)
def fibonacci_cached(n):
    if n < 2:
        return n
    return fibonacci_cached(n - 1) + fibonacci_cached(n - 2)

# Python 3.9+: unbounded cache
@cache
def fibonacci_unlimited_cache(n):
    if n < 2:
        return n
    return fibonacci_unlimited_cache(n - 1) + fibonacci_unlimited_cache(n - 2)

# Cache statistics
print(fibonacci_cached.cache_info())

# Clear cache
fibonacci_cached.cache_clear()

# Custom cache with TTL (Time To Live)
import time
from functools import wraps

def ttl_cache(seconds):
    def decorator(func):
        cache = {}
        
        @wraps(func)
        def wrapper(*args):
            now = time.time()
            if args in cache:
                result, timestamp = cache[args]
                if now - timestamp < seconds:
                    return result
            
            result = func(*args)
            cache[args] = (result, now)
            return result
        
        return wrapper
    return decorator

@ttl_cache(seconds=60)
def expensive_api_call(param):
    time.sleep(2)  # Simulate API call
    return f"Result for {param}"
```

### NumPy for Numerical Operations

```python
import numpy as np
import time

# Python list operations (slow)
start = time.time()
python_list = list(range(1000000))
python_squared = [x**2 for x in python_list]
python_time = time.time() - start

# NumPy operations (fast)
start = time.time()
numpy_array = np.arange(1000000)
numpy_squared = numpy_array ** 2
numpy_time = time.time() - start

print(f"Python list: {python_time:.4f}s")
print(f"NumPy array: {numpy_time:.4f}s")
print(f"Speedup: {python_time/numpy_time:.2f}x")

# Vectorized operations
data = np.random.rand(1000000)

# Slow (Python loop)
result = np.zeros_like(data)
for i in range(len(data)):
    result[i] = data[i] * 2 + 1

# Fast (vectorized)
result = data * 2 + 1

# Broadcasting
matrix = np.array([[1, 2, 3], [4, 5, 6]])
row_vector = np.array([10, 20, 30])
result = matrix + row_vector  # Adds row to each row of matrix
```

---

## Memory Management

### Reference Counting

```python
import sys

x = []
print(sys.getrefcount(x))  # 2 (x and getrefcount parameter)

y = x
print(sys.getrefcount(x))  # 3 (x, y, and parameter)

del y
print(sys.getrefcount(x))  # 2

# Circular references (need garbage collector)
class Node:
    def __init__(self):
        self.ref = None

a = Node()
b = Node()
a.ref = b
b.ref = a  # Circular reference

# Even after deletion, memory might not be freed immediately
# (garbage collector handles this)
```

### Garbage Collection

```python
import gc

# Get garbage collection statistics
print(gc.get_stats())

# Get threshold
print(gc.get_threshold())  # (700, 10, 10)

# Manual collection
collected = gc.collect()
print(f"Collected {collected} objects")

# Disable/enable automatic collection
gc.disable()
# ... code ...
gc.enable()

# Track objects
gc.set_debug(gc.DEBUG_LEAK)

# Find circular references
import weakref

class MyClass:
    pass

obj = MyClass()
weak_ref = weakref.ref(obj)
print(weak_ref())  # <__main__.MyClass object>

del obj
print(weak_ref())  # None

# Memory leak detection
import tracemalloc

tracemalloc.start()

# Code that might leak memory
snapshot1 = tracemalloc.take_snapshot()

# More code
large_list = [0] * 1000000

snapshot2 = tracemalloc.take_snapshot()

top_stats = snapshot2.compare_to(snapshot1, 'lineno')

print("[ Top 10 differences ]")
for stat in top_stats[:10]:
    print(stat)

tracemalloc.stop()
```

### Memory-Efficient Data Structures

```python
# Slots (reduce memory overhead)
class WithoutSlots:
    def __init__(self, x, y):
        self.x = x
        self.y = y

class WithSlots:
    __slots__ = ['x', 'y']
    
    def __init__(self, x, y):
        self.x = x
        self.y = y

import sys

obj1 = WithoutSlots(1, 2)
obj2 = WithSlots(1, 2)

print(f"Without slots: {sys.getsizeof(obj1.__dict__)} bytes")
print(f"With slots: {sys.getsizeof(obj2)} bytes")

# Generators vs Lists
# Memory intensive
numbers_list = [x for x in range(1000000)]
print(f"List: {sys.getsizeof(numbers_list)} bytes")

# Memory efficient
numbers_gen = (x for x in range(1000000))
print(f"Generator: {sys.getsizeof(numbers_gen)} bytes")

# Array module for homogeneous data
import array

# List of integers (lots of overhead)
int_list = [1, 2, 3, 4, 5]

# Array of integers (compact)
int_array = array.array('i', [1, 2, 3, 4, 5])

print(f"List: {sys.getsizeof(int_list)} bytes")
print(f"Array: {sys.getsizeof(int_array)} bytes")
```

### Object Pooling

```python
from queue import Queue
import time

class Connection:
    def __init__(self, id):
        self.id = id
        time.sleep(0.1)  # Simulate expensive creation
    
    def execute(self, query):
        return f"Connection {self.id}: {query}"

class ConnectionPool:
    def __init__(self, size):
        self.pool = Queue(maxsize=size)
        for i in range(size):
            self.pool.put(Connection(i))
    
    def get_connection(self):
        return self.pool.get()
    
    def return_connection(self, conn):
        self.pool.put(conn)

# Usage
pool = ConnectionPool(5)

# Get connection from pool (fast)
conn = pool.get_connection()
result = conn.execute("SELECT * FROM users")
pool.return_connection(conn)

# Context manager version
from contextlib import contextmanager

@contextmanager
def get_connection(pool):
    conn = pool.get_connection()
    try:
        yield conn
    finally:
        pool.return_connection(conn)

with get_connection(pool) as conn:
    result = conn.execute("SELECT * FROM users")
```

---

## Advanced Decorators and Closures

### Decorator Classes

```python
class CallCount:
    def __init__(self, func):
        self.func = func
        self.count = 0
    
    def __call__(self, *args, **kwargs):
        self.count += 1
        print(f"Call {self.count} of {self.func.__name__}")
        return self.func(*args, **kwargs)

@CallCount
def greet(name):
    return f"Hello, {name}!"

greet("Alice")  # Call 1 of greet
greet("Bob")    # Call 2 of greet

# Decorator with parameters (class)
class Repeat:
    def __init__(self, times):
        self.times = times
    
    def __call__(self, func):
        def wrapper(*args, **kwargs):
            for _ in range(self.times):
                result = func(*args, **kwargs)
            return result
        return wrapper

@Repeat(3)
def say_hello():
    print("Hello!")

say_hello()  # Prints "Hello!" 3 times
```

### Chaining Decorators

```python
import time
import functools

def timer(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f}s")
        return result
    return wrapper

def logger(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result}")
        return result
    return wrapper

@timer
@logger
def calculate(n):
    time.sleep(1)
    return n * 2

# Equivalent to: calculate = timer(logger(calculate))
calculate(5)
```

### Parameterized Decorators with Classes

```python
class RateLimiter:
    def __init__(self, max_calls, time_frame):
        self.max_calls = max_calls
        self.time_frame = time_frame
        self.calls = []
    
    def __call__(self, func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            now = time.time()
            
            # Remove old calls
            self.calls = [call for call in self.calls 
                         if now - call < self.time_frame]
            
            if len(self.calls) >= self.max_calls:
                raise Exception(f"Rate limit exceeded: {self.max_calls} calls per {self.time_frame}s")
            
            self.calls.append(now)
            return func(*args, **kwargs)
        
        return wrapper

@RateLimiter(max_calls=3, time_frame=10)
def api_call():
    print("API called")
    return "data"

# First 3 calls work, 4th raises exception
for i in range(4):
    try:
        api_call()
    except Exception as e:
        print(f"Error: {e}")
```

### Decorator Factory Pattern

```python
def decorator_factory(*decorator_args, **decorator_kwargs):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            print(f"Decorator args: {decorator_args}")
            print(f"Decorator kwargs: {decorator_kwargs}")
            return func(*args, **kwargs)
        return wrapper
    return decorator

@decorator_factory(1, 2, key='value')
def my_function():
    print("Function called")

my_function()
```

### Advanced Closures

```python
def make_accumulator():
    total = 0
    history = []
    
    def add(x):
        nonlocal total
        total += x
        history.append(total)
        return total
    
    def get_history():
        return history.copy()
    
    def reset():
        nonlocal total
        total = 0
        history.clear()
    
    # Return multiple functions
    add.history = get_history
    add.reset = reset
    return add

acc = make_accumulator()
print(acc(5))   # 5
print(acc(3))   # 8
print(acc(2))   # 10
print(acc.history())  # [5, 8, 10]
acc.reset()
print(acc(1))   # 1

# Closure-based objects
def make_counter(start=0):
    count = start
    
    def increment():
        nonlocal count
        count += 1
        return count
    
    def decrement():
        nonlocal count
        count -= 1
        return count
    
    def get():
        return count
    
    return {
        'increment': increment,
        'decrement': decrement,
        'get': get
    }

counter = make_counter(10)
print(counter['increment']())  # 11
print(counter['increment']())  # 12
print(counter['decrement']())  # 11
print(counter['get']())        # 11
```

---

## Context Variables

### contextvars Module

```python
from contextvars import ContextVar
import asyncio

# Context variable
request_id = ContextVar('request_id', default=None)

def process_request():
    # Get current context value
    current_id = request_id.get()
    print(f"Processing request {current_id}")

async def handle_request(req_id):
    # Set context value
    request_id.set(req_id)
    
    # Context is preserved across await
    await asyncio.sleep(1)
    process_request()

async def main():
    # Each task has its own context
    await asyncio.gather(
        handle_request("REQ-1"),
        handle_request("REQ-2"),
        handle_request("REQ-3")
    )

asyncio.run(main())

# Context propagation
user_context = ContextVar('user')

def get_current_user():
    return user_context.get(None)

def operation():
    user = get_current_user()
    print(f"Operation by {user}")

async def handle_request_with_user(username):
    user_context.set(username)
    operation()
    await asyncio.sleep(1)
    operation()  # Still has same user

async def main():
    await asyncio.gather(
        handle_request_with_user("Alice"),
        handle_request_with_user("Bob")
    )

asyncio.run(main())
```

### Token Management

```python
from contextvars import ContextVar, Token

config_var = ContextVar('config')

def update_config(new_config):
    # Save current state
    token = config_var.set(new_config)
    return token

def reset_config(token: Token):
    # Restore previous state
    config_var.reset(token)

# Usage
config_var.set({'debug': False})
print(config_var.get())  # {'debug': False}

token = update_config({'debug': True})
print(config_var.get())  # {'debug': True}

reset_config(token)
print(config_var.get())  # {'debug': False}
```

### Context-Aware Logging

```python
import logging
from contextvars import ContextVar

request_id_var = ContextVar('request_id', default='N/A')

class ContextFilter(logging.Filter):
    def filter(self, record):
        record.request_id = request_id_var.get()
        return True

# Setup logging
logger = logging.getLogger(__name__)
handler = logging.StreamHandler()
handler.addFilter(ContextFilter())
formatter = logging.Formatter(
    '%(asctime)s [%(request_id)s] %(levelname)s: %(message)s'
)
handler.setFormatter(formatter)
logger.addHandler(handler)
logger.setLevel(logging.INFO)

# Usage
async def handle_request(req_id):
    request_id_var.set(req_id)
    logger.info("Request started")
    await asyncio.sleep(1)
    logger.info("Request completed")

async def main():
    await asyncio.gather(
        handle_request("REQ-001"),
        handle_request("REQ-002")
    )

asyncio.run(main())
```

---

## Weak References

### Basic Weak References

```python
import weakref

class BigObject:
    def __init__(self, name):
        self.name = name
    
    def __del__(self):
        print(f"{self.name} deleted")

# Strong reference
obj = BigObject("Object1")
print(obj.name)  # Object1

# Weak reference
weak_obj = weakref.ref(obj)
print(weak_obj())  # <__main__.BigObject object>
print(weak_obj().name)  # Object1

# Delete strong reference
del obj
# Object1 deleted

# Weak reference now returns None
print(weak_obj())  # None
```

### WeakValueDictionary

```python
import weakref

class CacheItem:
    def __init__(self, data):
        self.data = data

# Normal dict keeps objects alive
normal_cache = {}
item = CacheItem("data1")
normal_cache['key1'] = item
del item
print('key1' in normal_cache)  # True (still exists)

# WeakValueDictionary allows garbage collection
weak_cache = weakref.WeakValueDictionary()
item = CacheItem("data2")
weak_cache['key2'] = item
print('key2' in weak_cache)  # True

del item
print('key2' in weak_cache)  # False (garbage collected)
```

### Weak References for Callbacks

```python
import weakref

class Observer:
    def __init__(self, name):
        self.name = name
    
    def notify(self, message):
        print(f"{self.name} received: {message}")

class Subject:
    def __init__(self):
        self._observers = []
    
    def attach(self, observer):
        # Store weak reference
        weak_ref = weakref.ref(observer, self._remove_observer)
        self._observers.append(weak_ref)
    
    def _remove_observer(self, weak_ref):
        self._observers.remove(weak_ref)
    
    def notify_all(self, message):
        # Remove dead weak references and notify alive ones
        self._observers = [obs for obs in self._observers if obs() is not None]
        for obs_ref in self._observers:
            observer = obs_ref()
            if observer is not None:
                observer.notify(message)

# Usage
subject = Subject()
obs1 = Observer("Observer1")
obs2 = Observer("Observer2")

subject.attach(obs1)
subject.attach(obs2)

subject.notify_all("Message 1")  # Both notified

del obs1  # Observer1 garbage collected

subject.notify_all("Message 2")  # Only Observer2 notified
```

### WeakSet

```python
import weakref

class Item:
    def __init__(self, name):
        self.name = name

# Tracking objects without keeping them alive
registry = weakref.WeakSet()

item1 = Item("Item1")
item2 = Item("Item2")

registry.add(item1)
registry.add(item2)

print(len(registry))  # 2

del item1
print(len(registry))  # 1 (item1 garbage collected)
```

---

## Abstract Syntax Trees (AST)

### Parsing Python Code

```python
import ast

code = """
def greet(name):
    return f"Hello, {name}!"

result = greet("World")
"""

# Parse code into AST
tree = ast.parse(code)

# Dump AST
print(ast.dump(tree, indent=2))

# Visit nodes
class Visitor(ast.NodeVisitor):
    def visit_FunctionDef(self, node):
        print(f"Function: {node.name}")
        self.generic_visit(node)
    
    def visit_Return(self, node):
        print("Return statement found")
        self.generic_visit(node)

visitor = Visitor()
visitor.visit(tree)
```

### Transforming Code

```python
import ast
import inspect

class DoubleReturn(ast.NodeTransformer):
    def visit_Return(self, node):
        # Double the return value
        return ast.Return(
            value=ast.BinOp(
                left=node.value,
                op=ast.Mult(),
                right=ast.Constant(value=2)
            )
        )

def original_function(x):
    return x

# Get source and parse
source = inspect.getsource(original_function)
tree = ast.parse(source)

# Transform
transformer = DoubleReturn()
new_tree = transformer.visit(tree)

# Fix missing locations
ast.fix_missing_locations(new_tree)

# Compile and execute
code = compile(new_tree, filename="<ast>", mode="exec")
namespace = {}
exec(code, namespace)

# Use transformed function
modified_function = namespace['original_function']
print(modified_function(5))  # 10 (doubled)
```

### Code Analysis

```python
import ast

class CodeAnalyzer(ast.NodeVisitor):
    def __init__(self):
        self.stats = {
            'functions': 0,
            'classes': 0,
            'imports': 0,
            'function_calls': 0
        }
    
    def visit_FunctionDef(self, node):
        self.stats['functions'] += 1
        self.generic_visit(node)
    
    def visit_ClassDef(self, node):
        self.stats['classes'] += 1
        self.generic_visit(node)
    
    def visit_Import(self, node):
        self.stats['imports'] += len(node.names)
        self.generic_visit(node)
    
    def visit_ImportFrom(self, node):
        self.stats['imports'] += len(node.names)
        self.generic_visit(node)
    
    def visit_Call(self, node):
        self.stats['function_calls'] += 1
        self.generic_visit(node)

code = """
import os
from sys import argv

class MyClass:
    def method1(self):
        pass
    
    def method2(self):
        print("Hello")

def standalone():
    obj = MyClass()
    obj.method1()
"""

tree = ast.parse(code)
analyzer = CodeAnalyzer()
analyzer.visit(tree)

print(analyzer.stats)
```

### Macro-like Code Generation

```python
import ast

def create_property(name):
    """Create a property with getter and setter"""
    private_name = f"_{name}"
    
    # Getter
    getter = ast.FunctionDef(
        name=name,
        args=ast.arguments(
            posonlyargs=[],
            args=[ast.arg(arg='self', annotation=None)],
            kwonlyargs=[],
            kw_defaults=[],
            defaults=[]
        ),
        body=[
            ast.Return(
                value=ast.Attribute(
                    value=ast.Name(id='self', ctx=ast.Load()),
                    attr=private_name,
                    ctx=ast.Load()
                )
            )
        ],
        decorator_list=[ast.Name(id='property', ctx=ast.Load())],
        returns=None
    )
    
    # Setter
    setter = ast.FunctionDef(
        name=name,
        args=ast.arguments(
            posonlyargs=[],
            args=[
                ast.arg(arg='self', annotation=None),
                ast.arg(arg='value', annotation=None)
            ],
            kwonlyargs=[],
            kw_defaults=[],
            defaults=[]
        ),
        body=[
            ast.Assign(
                targets=[
                    ast.Attribute(
                        value=ast.Name(id='self', ctx=ast.Load()),
                        attr=private_name,
                        ctx=ast.Store()
                    )
                ],
                value=ast.Name(id='value', ctx=ast.Load())
            )
        ],
        decorator_list=[
            ast.Attribute(
                value=ast.Name(id=name, ctx=ast.Load()),
                attr='setter',
                ctx=ast.Load()
            )
        ],
        returns=None
    )
    
    return getter, setter

# Usage in class generation
properties = ['name', 'age']
methods = []

for prop in properties:
    getter, setter = create_property(prop)
    methods.extend([getter, setter])

# Create class with properties
class_def = ast.ClassDef(
    name='Person',
    bases=[],
    keywords=[],
    body=methods,
    decorator_list=[]
)

module = ast.Module(body=[class_def], type_ignores=[])
ast.fix_missing_locations(module)

code = compile(module, '<generated>', 'exec')
namespace = {}
exec(code, namespace)

Person = namespace['Person']
p = Person()
p.name = "Alice"
print(p.name)
```

---

## Bytecode and dis Module

### Disassembling Python Code

```python
import dis

def example_function(x, y):
    z = x + y
    return z * 2

# Disassemble function
dis.dis(example_function)

# Disassemble code object
code_obj = example_function.__code__
dis.dis(code_obj)

# Get bytecode
bytecode = dis.Bytecode(example_function)
for instr in bytecode:
    print(f"{instr.offset:3d} {instr.opname:20s} {instr.arg}")
```

### Understanding Bytecode

```python
import dis

# Compare different implementations
def list_comp():
    return [x * 2 for x in range(10)]

def generator_exp():
    return list(x * 2 for x in range(10))

print("List Comprehension:")
dis.dis(list_comp)

print("\nGenerator Expression:")
dis.dis(generator_exp)

# Constant folding
def with_constant():
    x = 24 * 60 * 60  # Computed at compile time

def without_constant():
    x = 24
    y = 60
    z = 60
    result = x * y * z

print("\nWith Constant Folding:")
dis.dis(with_constant)

print("\nWithout Constant Folding:")
dis.dis(without_constant)
```

### Bytecode Optimization

```python
import dis

# Peephole optimization examples

# 1. Constant folding
def constant_example():
    x = 2 + 3  # Becomes 5 at compile time
    return x

dis.dis(constant_example)

# 2. Dead code elimination
def dead_code_example():
    if False:
        print("This is eliminated")
    return 42

dis.dis(dead_code_example)

# 3. Jump optimization
def jump_example(x):
    if x > 0:
        return 1
    return 0

dis.dis(jump_example)
```

### Code Object Attributes

```python
def example_function(a, b, c=10):
    """Example function"""
    local_var = a + b
    return local_var + c

code = example_function.__code__

print(f"Name: {code.co_name}")
print(f"Argument count: {code.co_argcount}")
print(f"Local variables: {code.co_nlocals}")
print(f"Stack size: {code.co_stacksize}")
print(f"Constants: {code.co_consts}")
print(f"Names: {code.co_names}")
print(f"Variable names: {code.co_varnames}")
print(f"Filename: {code.co_filename}")
print(f"First line: {code.co_firstlineno}")
print(f"Bytecode: {code.co_code}")
```

---

## C Extensions and Cython

### Cython Basics

```python
# example.pyx (Cython file)
"""
# Type declarations
def fibonacci(int n):
    cdef int i
    cdef long long a = 0, b = 1
    
    for i in range(n):
        a, b = b, a + b
    
    return a

# C function (not exposed to Python)
cdef long long _fast_fibonacci(int n):
    cdef int i
    cdef long long a = 0, b = 1
    
    for i in range(n):
        a, b = b, a + b
    
    return a

# Exposed wrapper
def fast_fibonacci(n):
    return _fast_fibonacci(n)

# Typed memoryviews for NumPy arrays
import numpy as np
cimport numpy as np

def sum_array(np.ndarray[np.float64_t, ndim=1] arr):
    cdef double total = 0.0
    cdef int i
    
    for i in range(arr.shape[0]):
        total += arr[i]
    
    return total
"""

# setup.py for Cython
"""
from setuptools import setup
from Cython.Build import cythonize
import numpy

setup(
    ext_modules=cythonize("example.pyx"),
    include_dirs=[numpy.get_include()]
)
"""

# Build: python setup.py build_ext --inplace
# Use: import example; result = example.fibonacci(100)
```

### ctypes for C Libraries

```python
import ctypes
import os

# Load C library
# Linux: libc = ctypes.CDLL('libc.so.6')
# macOS: libc = ctypes.CDLL('libc.dylib')
# Windows: msvcrt = ctypes.CDLL('msvcrt.dll')

# Example with math library
libm = ctypes.CDLL('libm.so.6')  # Linux

# Declare function signature
libm.sqrt.argtypes = [ctypes.c_double]
libm.sqrt.restype = ctypes.c_double

# Call C function
result = libm.sqrt(16.0)
print(result)  # 4.0

# Working with pointers
class Point(ctypes.Structure):
    _fields_ = [
        ('x', ctypes.c_int),
        ('y', ctypes.c_int)
    ]

# Create instance
point = Point(10, 20)
print(point.x, point.y)

# Pointer to structure
point_ptr = ctypes.pointer(point)
print(point_ptr.contents.x)
```

### CFFI (C Foreign Function Interface)

```python
# pip install cffi

from cffi import FFI

ffi = FFI()

# Define C function signatures
ffi.cdef("""
    int printf(const char *format, ...);
    double sqrt(double x);
""")

# Load C library
C = ffi.dlopen(None)  # Load C standard library

# Call C functions
C.printf(b"Hello from C!\n")
result = C.sqrt(16.0)
print(result)  # 4.0

# Define and compile custom C code
ffi = FFI()

ffi.cdef("""
    int add(int a, int b);
""")

ffi.set_source("_example", """
    int add(int a, int b) {
        return a + b;
    }
""")

# Build: ffi.compile(verbose=True)
# Then import and use
```

### Performance Comparison

```python
import time
import numpy as np

# Pure Python
def python_sum(arr):
    total = 0
    for x in arr:
        total += x
    return total

# NumPy
def numpy_sum(arr):
    return np.sum(arr)

# Benchmark
size = 1000000
data_list = list(range(size))
data_numpy = np.arange(size)

# Python
start = time.time()
result = python_sum(data_list)
python_time = time.time() - start

# NumPy
start = time.time()
result = numpy_sum(data_numpy)
numpy_time = time.time() - start

print(f"Python: {python_time:.4f}s")
print(f"NumPy: {numpy_time:.4f}s")
print(f"Speedup: {python_time/numpy_time:.2f}x")

# With Cython (after compiling example.pyx):
# from example import sum_array
# start = time.time()
# result = sum_array(data_numpy)
# cython_time = time.time() - start
# print(f"Cython: {cython_time:.4f}s")
```

---

## Advanced Async Patterns

### Async Iterators

```python
import asyncio

class AsyncRange:
    def __init__(self, start, end):
        self.start = start
        self.end = end
    
    def __aiter__(self):
        self.current = self.start
        return self
    
    async def __anext__(self):
        if self.current >= self.end:
            raise StopAsyncIteration
        
        await asyncio.sleep(0.1)  # Simulate async operation
        self.current += 1
        return self.current - 1

async def main():
    async for num in AsyncRange(0, 5):
        print(num)

asyncio.run(main())
```

### Async Context Managers

```python
import asyncio

class AsyncDatabase:
    async def __aenter__(self):
        print("Connecting to database...")
        await asyncio.sleep(1)
        self.connection = "Connected"
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        print("Closing database connection...")
        await asyncio.sleep(1)
        self.connection = None
    
    async def query(self, sql):
        print(f"Executing: {sql}")
        await asyncio.sleep(0.5)
        return f"Results for {sql}"

async def main():
    async with AsyncDatabase() as db:
        result = await db.query("SELECT * FROM users")
        print(result)

asyncio.run(main())
```

### Event Loops and Tasks

```python
import asyncio

async def task1():
    while True:
        print("Task 1 running")
        await asyncio.sleep(1)

async def task2():
    while True:
        print("Task 2 running")
        await asyncio.sleep(2)

async def main():
    # Create tasks
    t1 = asyncio.create_task(task1())
    t2 = asyncio.create_task(task2())
    
    # Run for 5 seconds
    await asyncio.sleep(5)
    
    # Cancel tasks
    t1.cancel()
    t2.cancel()
    
    # Wait for cancellation
    try:
        await t1
    except asyncio.CancelledError:
        print("Task 1 cancelled")
    
    try:
        await t2
    except asyncio.CancelledError:
        print("Task 2 cancelled")

asyncio.run(main())
```

### Async Queues and Communication

```python
import asyncio
import random

async def producer(queue, name):
    for i in range(5):
        item = f"{name}-{i}"
        await queue.put(item)
        print(f"{name} produced {item}")
        await asyncio.sleep(random.uniform(0.1, 0.5))

async def consumer(queue, name):
    while True:
        item = await queue.get()
        print(f"{name} consumed {item}")
        await asyncio.sleep(random.uniform(0.2, 0.7))
        queue.task_done()

async def main():
    queue = asyncio.Queue(maxsize=5)
    
    # Create producers and consumers
    producers = [
        asyncio.create_task(producer(queue, f"Producer-{i}"))
        for i in range(2)
    ]
    
    consumers = [
        asyncio.create_task(consumer(queue, f"Consumer-{i}"))
        for i in range(3)
    ]
    
    # Wait for producers to finish
    await asyncio.gather(*producers)
    
    # Wait for queue to be empty
    await queue.join()
    
    # Cancel consumers
    for c in consumers:
        c.cancel()

asyncio.run(main())
```

### Async Semaphores and Locks

```python
import asyncio

# Semaphore to limit concurrent operations
async def limited_operation(semaphore, id):
    async with semaphore:
        print(f"Task {id} acquired semaphore")
        await asyncio.sleep(1)
        print(f"Task {id} released semaphore")

async def main_semaphore():
    semaphore = asyncio.Semaphore(3)  # Max 3 concurrent tasks
    
    tasks = [
        limited_operation(semaphore, i)
        for i in range(10)
    ]
    
    await asyncio.gather(*tasks)

# Lock for mutual exclusion
counter = 0
lock = asyncio.Lock()

async def increment(id):
    global counter
    async with lock:
        temp = counter
        await asyncio.sleep(0.01)  # Simulate work
        counter = temp + 1
        print(f"Task {id}: counter = {counter}")

async def main_lock():
    tasks = [increment(i) for i in range(10)]
    await asyncio.gather(*tasks)
    print(f"Final counter: {counter}")

asyncio.run(main_semaphore())
asyncio.run(main_lock())
```

---

## Database Programming

### SQLite with Python

```python
import sqlite3
from contextlib import closing

# Connect and create table
conn = sqlite3.connect('example.db')

with closing(conn.cursor()) as cursor:
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            age INTEGER
        )
    ''')
    conn.commit()

# Insert data
def insert_user(name, email, age):
    with closing(conn.cursor()) as cursor:
        cursor.execute(
            'INSERT INTO users (name, email, age) VALUES (?, ?, ?)',
            (name, email, age)
        )
        conn.commit()
        return cursor.lastrowid

# Query data
def get_users():
    with closing(conn.cursor()) as cursor:
        cursor.execute('SELECT * FROM users')
        return cursor.fetchall()

# Using row factory for dict-like access
conn.row_factory = sqlite3.Row

def get_users_dict():
    with closing(conn.cursor()) as cursor:
        cursor.execute('SELECT * FROM users')
        return [dict(row) for row in cursor.fetchall()]

# Usage
user_id = insert_user('Alice', 'alice@example.com', 25)
print(f"Inserted user with ID: {user_id}")

users = get_users_dict()
for user in users:
    print(f"{user['name']}: {user['email']}")

conn.close()
```

### SQLAlchemy ORM

```python
from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()

# Define model
class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    age = Column(Integer)
    
    def __repr__(self):
        return f"<User(name='{self.name}', email='{self.email}')>"

# Create engine and session
engine = create_engine('sqlite:///example.db')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# Insert
new_user = User(name='Bob', email='bob@example.com', age=30)
session.add(new_user)
session.commit()

# Query
users = session.query(User).all()
for user in users:
    print(user)

# Filter
alice = session.query(User).filter_by(name='Alice').first()
print(alice)

# Update
alice.age = 26
session.commit()

# Delete
session.delete(alice)
session.commit()

session.close()
```

### Async Database with asyncpg (PostgreSQL)

```python
# pip install asyncpg

import asyncio
import asyncpg

async def main():
    # Connect
    conn = await asyncpg.connect(
        user='user',
        password='password',
        database='database',
        host='localhost'
    )
    
    # Create table
    await conn.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL
        )
    ''')
    
    # Insert
    await conn.execute(
        'INSERT INTO users(name, email) VALUES($1, $2)',
        'Alice', 'alice@example.com'
    )
    
    # Query
    rows = await conn.fetch('SELECT * FROM users')
    for row in rows:
        print(dict(row))
    
    # Close
    await conn.close()

# asyncio.run(main())
```

---

## Web Frameworks

### Flask Basics

```python
from flask import Flask, request, jsonify

app = Flask(__name__)

# Simple route
@app.route('/')
def home():
    return 'Hello, World!'

# Route with parameter
@app.route('/user/<username>')
def user_profile(username):
    return f'User: {username}'

# HTTP methods
@app.route('/api/data', methods=['GET', 'POST'])
def api_data():
    if request.method == 'POST':
        data = request.json
        return jsonify({'received': data}), 201
    else:
        return jsonify({'message': 'GET request'})

# Query parameters
@app.route('/search')
def search():
    query = request.args.get('q', '')
    return f'Search query: {query}'

if __name__ == '__main__':
    app.run(debug=True)
```

### FastAPI Example

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    description: str = None

items_db = []

@app.get('/')
async def root():
    return {'message': 'Hello World'}

@app.post('/items/', response_model=Item)
async def create_item(item: Item):
    items_db.append(item)
    return item

@app.get('/items/', response_model=List[Item])
async def read_items():
    return items_db

@app.get('/items/{item_id}')
async def read_item(item_id: int):
    if item_id >= len(items_db):
        raise HTTPException(status_code=404, detail='Item not found')
    return items_db[item_id]

# Run with: uvicorn main:app --reload
```

---

## Data Science Libraries

### NumPy Advanced

```python
import numpy as np

# Array creation
arr = np.array([1, 2, 3, 4, 5])
zeros = np.zeros((3, 3))
ones = np.ones((2, 4))
arange = np.arange(0, 10, 2)
linspace = np.linspace(0, 1, 5)

# Reshaping
arr = np.arange(12)
matrix = arr.reshape(3, 4)

# Broadcasting
a = np.array([[1], [2], [3]])
b = np.array([10, 20, 30])
result = a + b  # Broadcasting

# Indexing and slicing
matrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(matrix[1, 2])  # 6
print(matrix[:, 1])  # [2, 5, 8]
print(matrix[matrix > 5])  # [6, 7, 8, 9]

# Operations
arr = np.array([1, 2, 3, 4, 5])
print(np.sum(arr))
print(np.mean(arr))
print(np.std(arr))
print(np.min(arr))
print(np.max(arr))

# Linear algebra
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
print(np.dot(A, B))  # Matrix multiplication
print(np.linalg.inv(A))  # Inverse
print(np.linalg.det(A))  # Determinant
```

### Pandas Basics

```python
import pandas as pd

# Create DataFrame
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'city': ['New York', 'San Francisco', 'Chicago']
})

# Display
print(df.head())
print(df.info())
print(df.describe())

# Indexing
print(df['name'])
print(df.loc[0])
print(df.iloc[0])

# Filtering
print(df[df['age'] > 25])

# Adding columns
df['salary'] = [50000, 60000, 70000]

# Grouping
grouped = df.groupby('city')['salary'].mean()

# Reading/writing files
# df = pd.read_csv('data.csv')
# df.to_csv('output.csv', index=False)
```

---

## Summary

In this advanced module, you've learned:
- Performance optimization techniques and profiling
- Memory management and garbage collection
- Advanced decorators and closures
- Context variables for async contexts
- Weak references for cache management
- AST manipulation for code analysis and generation
- Bytecode inspection and optimization
- C extensions with Cython and ctypes
- Advanced async patterns and concurrency
- Database programming with SQLite and SQLAlchemy
- Web frameworks (Flask, FastAPI)
- Data science libraries (NumPy, Pandas)

You now have comprehensive Python knowledge from basics to advanced topics!
