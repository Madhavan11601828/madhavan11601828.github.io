---
title: "Data Structures: Lists, Tuples, Dictionaries, and Sets in Python"
author: "Mangena Venu Madhavan"
date: 2026-06-02
tags: [Python, Programming, Beginner, Tutorial]
categories: [python-programming]
series: "Python Programming"
article_number: 3
---

## Key Takeaways

- You will store ordered, changeable collections of data using lists
- You will use tuples to hold fixed data that should never change
- You will use dictionaries to store and retrieve data by label rather than position
- You will use sets to remove duplicates and test membership instantly
- You will choose the right data structure for any AI or data task

---

## Who This Is For & Prerequisites

This article is for anyone who has completed Articles 1 and 2 of this series and wants to store and organise entire collections of data, not just single values.

**You need:**
- Python 3.9+ installed
- Articles 1–2 completed: variables, data types, loops, and functions

**You do NOT need:**
- Any knowledge of computer science theory
- Any prior experience with data structures

No pip install required. No API keys. No cost.

---

## What You Will Build

By the end of this article you will have:
- A list-based script that stores and processes student scores
- A tuple that stores a fixed coordinate or configuration
- A dictionary that stores and retrieves user profile data by key
- A set that removes duplicate entries from a raw data list

Expected final output when you run the complete script:

```
Scores: [88, 45, 92, 60, 78]
Highest: 92
Lowest: 45
After adding 95: [88, 45, 92, 60, 78, 95]

Config: ('localhost', 5432, 'mydb')
Host: localhost

User: {'name': 'Alex', 'age': 28, 'role': 'admin'}
Name: Alex
Role: admin

Raw tags: ['python', 'ai', 'python', 'ml', 'ai']
Unique tags: {'ml', 'ai', 'python'}
```

---

## Concept Simply

Think of each data structure as a different type of storage at a post office. A **list** is a numbered locker row — you put items in order, you can add more, remove some, and swap things around. A **tuple** is a sealed envelope — once packed and labelled, nothing inside changes. A **dictionary** is a set of labelled pigeon-holes — instead of searching by number, you look up by name (the key). A **set** is a bin that rejects duplicates — put the same item in twice and it only keeps one.

Python gives you all four because different problems need different storage rules.

| Structure | Ordered? | Changeable? | Allows Duplicates? | Access By |
|---|---|---|---|---|
| `list` | Yes | Yes | Yes | Index (position) |
| `tuple` | Yes | No | Yes | Index (position) |
| `dict` | Yes (Python 3.7+) | Yes | Keys: No, Values: Yes | Key (label) |
| `set` | No | Yes | No | Membership test only |

---

## Core Components

### 1. Lists

Created with square brackets `[]`. Ordered, mutable (changeable), allows duplicates. The most used structure in Python AI and data work.

```python
scores = [88, 45, 92, 60, 78]

print(scores[0])    # 88 — first item (index 0)
print(scores[-1])   # 78 — last item

scores.append(95)   # add to end
scores.remove(45)   # remove first occurrence of 45
print(len(scores))  # number of items
```

Key list operations for AI work:

```python
numbers = [5, 3, 8, 1, 9]

print(max(numbers))     # 9
print(min(numbers))     # 1
print(sum(numbers))     # 26
print(sorted(numbers))  # [1, 3, 5, 8, 9]
```

### 2. Tuples

Created with parentheses `()`. Ordered, immutable (cannot be changed after creation). Use for data that must stay fixed: coordinates, configuration values, function return pairs.

```python
config = ('localhost', 5432, 'mydb')

print(config[0])   # localhost
print(config[1])   # 5432

host, port, db = config  # unpack all three at once
print(host)
```

Attempting to change a tuple raises a `TypeError` — this is intentional protection.

### 3. Dictionaries

Created with curly braces `{}` and key-value pairs separated by `:`. Access values by key, not by position. Keys must be unique.

```python
user = {
    "name": "Alex",
    "age": 28,
    "role": "admin"
}

print(user["name"])         # Alex
user["email"] = "alex@example.com"  # add new key
print(user.get("phone", "not set")) # safe lookup with default

for key, value in user.items():
    print(key, ":", value)
```

### 4. Sets

Created with curly braces `{}` containing only values (no key-value pairs). Unordered, no duplicates. Fast membership testing with `in`.

```python
tags = {"python", "ai", "ml", "python", "ai"}
print(tags)   # {'ml', 'ai', 'python'} — duplicates removed

tags.add("deep-learning")
tags.discard("ml")

print("python" in tags)   # True
print("java" in tags)     # False
```

### 5. Choosing the Right Structure

```python
# Use list when order matters and data changes
pipeline_steps = ["load", "clean", "transform", "train"]

# Use tuple for fixed config that must not change
db_credentials = ("host", 5432, "dbname")

# Use dict when you need to look up by label
model_metrics = {"accuracy": 0.94, "f1": 0.91, "loss": 0.12}

# Use set when you need unique items or fast membership check
seen_ids = {101, 202, 303}
```

![Python Data Structures — four-panel diagram showing list as numbered boxes, tuple as a locked chain, dict as labelled slots, and set as a circle that rejects duplicates](/assets/images/python-data-structures-overview.png)

---

## Hands-on Tutorial

### Step 1: Create and use a list

```python
scores = [88, 45, 92, 60, 78]

print("Scores:", scores)
print("Highest:", max(scores))
print("Lowest:", min(scores))

scores.append(95)
print("After adding 95:", scores)
```

Expected output:
```
Scores: [88, 45, 92, 60, 78]
Highest: 92
Lowest: 45
After adding 95: [88, 45, 92, 60, 78, 95]
```

---

### Step 2: Create and unpack a tuple

```python
config = ('localhost', 5432, 'mydb')

print("Config:", config)
print("Host:", config[0])

host, port, db = config
print("Unpacked — Host:", host, "| Port:", port, "| DB:", db)
```

Expected output:
```
Config: ('localhost', 5432, 'mydb')
Host: localhost
Unpacked — Host: localhost | Port: 5432 | DB: mydb
```

---

### Step 3: Create and query a dictionary

```python
user = {"name": "Alex", "age": 28, "role": "admin"}

print("User:", user)
print("Name:", user["name"])
print("Role:", user["role"])

user["last_login"] = "2026-05-26"
print("After update:", user)
```

Expected output:
```
User: {'name': 'Alex', 'age': 28, 'role': 'admin'}
Name: Alex
Role: admin
After update: {'name': 'Alex', 'age': 28, 'role': 'admin', 'last_login': '2026-05-26'}
```

---

### Step 4: Remove duplicates with a set

```python
raw_tags = ["python", "ai", "python", "ml", "ai"]

print("Raw tags:", raw_tags)

unique_tags = set(raw_tags)
print("Unique tags:", unique_tags)
```

Expected output:
```
Raw tags: ['python', 'ai', 'python', 'ml', 'ai']
Unique tags: {'ml', 'ai', 'python'}
```

---

### Complete script — everything combined

```python
scores = [88, 45, 92, 60, 78]
print("Scores:", scores)
print("Highest:", max(scores))
print("Lowest:", min(scores))
scores.append(95)
print("After adding 95:", scores)

print()

config = ('localhost', 5432, 'mydb')
print("Config:", config)
print("Host:", config[0])

print()

user = {"name": "Alex", "age": 28, "role": "admin"}
print("User:", user)
print("Name:", user["name"])
print("Role:", user["role"])

print()

raw_tags = ["python", "ai", "python", "ml", "ai"]
print("Raw tags:", raw_tags)
unique_tags = set(raw_tags)
print("Unique tags:", unique_tags)
```

Expected output:
```
Scores: [88, 45, 92, 60, 78]
Highest: 92
Lowest: 45
After adding 95: [88, 45, 92, 60, 78, 95]

Config: ('localhost', 5432, 'mydb')
Host: localhost

User: {'name': 'Alex', 'age': 28, 'role': 'admin'}
Name: Alex
Role: admin

Raw tags: ['python', 'ai', 'python', 'ml', 'ai']
Unique tags: {'ml', 'ai', 'python'}
```

---

## Common Mistakes

**Mistake 1: Accessing a list index that does not exist**

```python
scores = [88, 45, 92]
print(scores[5])
```

```python
scores = [88, 45, 92]
print(scores[-1])  # last item — always safe
```

Python raises `IndexError` when you request a position beyond the list length. Use `len(scores)` to check the size, or use negative indexing (`-1` = last, `-2` = second to last).

---

**Mistake 2: Looking up a dictionary key that does not exist**

```python
user = {"name": "Alex", "age": 28}
print(user["email"])
```

```python
user = {"name": "Alex", "age": 28}
print(user.get("email", "not provided"))
```

`user["email"]` raises `KeyError` if the key is absent. `user.get("email", "not provided")` returns the default value instead. Always use `.get()` when the key might be missing — especially with API responses or user input.

---

**Mistake 3: Trying to modify a tuple**

```python
config = ('localhost', 5432, 'mydb')
config[0] = 'production-host'
```

```python
config = ('localhost', 5432, 'mydb')
config_list = list(config)
config_list[0] = 'production-host'
config = tuple(config_list)
```

Tuples are immutable by design. If you genuinely need to change the value, convert to a list, modify it, then convert back. But ask yourself first whether you should be using a list or a dictionary instead.

---

## Interview Q&A

**Q1: What is the difference between a list and a tuple, and when do you choose each?**

Both are ordered sequences that allow duplicates, but a list is mutable (you can add, remove, or change items) while a tuple is immutable (fixed at creation). Choose a list when the collection changes during runtime — appending new records, removing processed items, sorting results. Choose a tuple for data that must stay constant — database connection parameters, model hyperparameter snapshots, function return pairs. Tuples are also slightly faster to access and can be used as dictionary keys, which lists cannot.

**Q2: Why would you use a dictionary instead of two parallel lists?**

Two parallel lists (`names = ["Alex", "Sam"]` and `ages = [28, 32]`) create an implicit link between position 0 of each list. This breaks the moment you sort one list without sorting the other, or insert into one at a different point. A dictionary makes the relationship explicit and enforced: `{"Alex": 28, "Sam": 32}`. Lookup by key is also O(1) — constant time regardless of size — while searching a list by value is O(n) — proportional to size. In AI systems handling thousands of records, this difference is significant.

**Q3: What makes a set faster than a list for membership testing?**

A list checks membership with `in` by scanning every item from the start until it finds a match — O(n) time. A set uses a hash table internally: it computes a hash of the value and jumps directly to where that value would be stored — O(1) time regardless of set size. For large collections (thousands of seen IDs, a vocabulary of word tokens, a list of processed documents), set membership checks stay fast while list checks slow down linearly.

**Q4: Can a dictionary hold different data types as values?**

Yes. Dictionary values can be any Python object — strings, integers, floats, booleans, lists, other dictionaries, or even functions. This makes dictionaries the natural structure for structured records in AI: `{"model": "gpt-4", "temperature": 0.7, "max_tokens": 512, "stop": ["\n", "###"]}`. The keys are always strings in this pattern, but the values are mixed types. Nested dictionaries — a dict inside a dict — are common for representing hierarchical configuration or API response payloads.

---

## Resources

- [Python Docs — Data Structures](https://docs.python.org/3/tutorial/datastructures.html) — Official reference for lists, tuples, dicts, and sets
- [Real Python — Python Dictionaries](https://realpython.com/python-dicts/) — Deep dive with practical examples
- [W3Schools — Python Lists](https://www.w3schools.com/python/python_lists.asp) — Interactive quick reference
- [Python Tutor](https://pythontutor.com/) — Visualise how data structures are stored in memory

---

## Conclusion & Next Steps

Lists, tuples, dictionaries, and sets are the containers that every Python program, AI pipeline, and data script relies on. Knowing which one to reach for — and why — separates code that works from code that scales.

In the next article — **Object-Oriented Programming in Python** — you will learn how to bundle data and functions together into classes, which is how libraries like LangChain and scikit-learn are built.

---

Subscribe to get new articles delivered to your inbox.
New posts every week across 9 AI learning pillars.

---

<!--
HASHNODE PUBLISH SETTINGS
--------------------------
Series      : Python Programming
Tags        : python, programming, beginner, tutorial
Slug        : python-data-structures-lists-tuples-dictionaries-sets
SEO Title   : Python Data Structures: Lists, Tuples, Dicts, Sets
SEO Desc    : Learn Python lists, tuples, dictionaries, and sets with clear examples. Choose the right data structure for every task.
Cover Image : Dark background, Python logo left, four colour-coded shapes: row of boxes (list), chain-locked boxes (tuple), labelled slots (dict), overlapping circles (set) — 1600×840px
Image 1     : Four-panel diagram — list as numbered boxes in a row, tuple as locked boxes, dict as labelled mail slots, set as a filter circle that removes duplicates
-->
