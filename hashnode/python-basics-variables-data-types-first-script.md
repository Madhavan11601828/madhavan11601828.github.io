---
title: 'Python Basics: Variables, Data Types, and Your First Script'
slug: python-basics-variables-data-types-first-script
publishedAt: 2026-05-19
tags:
  - slug: python
    name: python
  - slug: programming
    name: programming
  - slug: beginner
    name: beginner
  - slug: tutorial
    name: tutorial
seo:
  title: 'Python Basics: Variables, Data Types, Scripts'
  description: 'Learn Python variables and data types from scratch. Write and run your first Python script in under 30 minutes.'
seriesSlug: python-programming
domain: venumadhavan.hashnode.dev
---

## Key Takeaways

- You will be able to create and name variables to store any kind of data in Python
- You will understand the 4 core data types Python uses and when to reach for each one
- You will write and run your first Python script from scratch
- You will check and convert between data types without guessing
- You will recognise and fix the 3 most common variable mistakes beginners make

---

## Who This Is For & Prerequisites

This article is for anyone who has never written a line of Python before and wants to start building AI tools, automation scripts, or data pipelines.

**You need:**
- A computer (Windows, Mac, or Linux)
- Python 3.9+ installed — download from [python.org](https://www.python.org/downloads/)
- A text editor (VS Code, Notepad, or any editor you have)

**You do NOT need:**
- Any prior programming experience
- Math beyond basic arithmetic
- Any special software beyond a text editor

No pip install required. No API keys. No cost.

---

## What You Will Build

By the end of this article you will have:
- A Python script that stores your name, age, and a calculation result in variables
- A script that detects and prints the data type of any value automatically
- A type conversion script that safely transforms strings into numbers

Expected final output when you run the complete script:

```
Name: Alex
Age: 28
Is active: True
Score: 94.5
Next year age: 29
Type of score: <class 'float'>
"25" converted to number: 25
```

---

## Concept Simply

Think of variables like labelled jars in your kitchen. When you cook, you do not carry the entire bag of sugar around — you put it in a jar, write "Sugar" on the label, and grab it whenever you need it. The label is the variable name. The sugar inside is the value. You can empty the jar and refill it with something else any time you like.

A variable in Python is a named container that holds a value. You create one by writing a name, an equals sign, and the value you want to store. Python figures out the rest automatically.

| Without variables | With variables |
|---|---|
| `print(28 + 1)` — a magic number with no context | `age = 28` then `print(age + 1)` — clear and reusable |
| Hard to update — you change the number everywhere | Change it once in one place |
| Code reads like a puzzle | Code reads like plain English |

---

## Core Components

### 1. Variables

A variable has three parts: a name, an assignment operator (`=`), and a value.

```python
name = "Alex"
age = 28
```

Python variable naming rules:
- Start with a letter or underscore, never a number
- No spaces — use underscores instead: `user_name` not `user name`
- Case-sensitive: `Score` and `score` are two different variables

### 2. Integers (`int`)

Whole numbers with no decimal point. Used for counts, ages, positions — anything that cannot be fractional.

```python
age = 28
article_number = 1
items_in_cart = 0
```

### 3. Floats (`float`)

Numbers with a decimal point. Used for prices, percentages, measurements, and model accuracy scores.

```python
accuracy = 0.94
price = 19.99
temperature = 36.6
```

### 4. Strings (`str`)

Text — any sequence of characters wrapped in quotes. Single or double quotes both work.

```python
name = "Alex"
greeting = 'Hello, world!'
empty = ""
```

### 5. Booleans (`bool`)

Either `True` or `False`. Nothing else. Used for flags, conditions, and on/off states. The capital letter is required — Python is case-sensitive.

```python
is_logged_in = True
has_premium = False
```

### 6. The `type()` Function

Tells you what data type any value or variable is. Indispensable when debugging or receiving data from an external source.

```python
print(type(42))
print(type(3.14))
print(type("hello"))
print(type(True))
```

Expected output:
```
<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
```

![Python Data Types Overview — four cards showing int, float, str, and bool with an example value and one-line use case for each](https://madhavan11601828.github.io/assets/images/python-data-types-overview.png)

---

## Hands-on Tutorial

### Step 1: Your very first Python script

Open any text editor. Create a new file called `first_script.py`. Type exactly this:

```python
print("Hello, Python!")
```

Open your terminal. Navigate to the folder where you saved the file. Run it:

```bash
python first_script.py
```

Expected output:
```
Hello, Python!
```

`print()` is a built-in Python function that displays whatever you put inside the parentheses. You just ran your first Python script.

---

### Step 2: Store values in variables

```python
name = "Alex"
age = 28
score = 94.5
is_active = True

print(name)
print(age)
print(score)
print(is_active)
```

Expected output:
```
Alex
28
94.5
True
```

---

### Step 3: Use variables in expressions

Variables can be used in calculations and combined with text.

```python
name = "Alex"
age = 28
next_year = age + 1

print("Name:", name)
print("Next year age:", next_year)
```

Expected output:
```
Name: Alex
Next year age: 29
```

---

### Step 4: Check the type of any variable

```python
score = 94.5
label = "accuracy"
count = 10
flag = True

print(type(score))
print(type(label))
print(type(count))
print(type(flag))
```

Expected output:
```
<class 'float'>
<class 'str'>
<class 'int'>
<class 'bool'>
```

---

### Step 5: Convert between types

Data from files, APIs, or user input almost always arrives as text. Python has built-in conversion functions to fix this.

```python
age_as_text = "25"
age_as_number = int(age_as_text)

price_as_text = "19.99"
price_as_number = float(price_as_text)

print(age_as_number + 1)
print(price_as_number * 2)
print(type(age_as_number))
```

Expected output:
```
26
39.98
<class 'int'>
```

---

### Complete script — everything combined

```python
name = "Alex"
age = 28
score = 94.5
is_active = True

next_year_age = age + 1
age_as_text = "25"
converted_age = int(age_as_text)

print("Name:", name)
print("Age:", age)
print("Is active:", is_active)
print("Score:", score)
print("Next year age:", next_year_age)
print("Type of score:", type(score))
print('"25" converted to number:', converted_age)
```

Expected output:
```
Name: Alex
Age: 28
Is active: True
Score: 94.5
Next year age: 29
Type of score: <class 'float'>
"25" converted to number: 25
```

---

## Common Mistakes

**Mistake 1: Using a variable before assigning it**

```python
print(username)
username = "Alex"
```

```python
username = "Alex"
print(username)
```

Python reads top to bottom. A variable must exist before you reference it.

---

**Mistake 2: Mixing types in arithmetic**

```python
age = "28"
print(age + 1)
```

```python
age = int("28")
print(age + 1)
```

You cannot add a string and a number. Convert the string to `int` or `float` first.

---

**Mistake 3: Overwriting a variable by accident**

```python
score = 94.5
score = 0
print(score)
```

```python
original_score = 94.5
updated_score = 0
print(original_score)
print(updated_score)
```

Python does not warn you when you overwrite a variable. Use distinct names when you need to keep both values.

---

## Interview Q&A

**Q1: What is a variable in Python and how does Python determine its type?**

A variable is a named reference to a value stored in memory. Python uses dynamic typing — you do not declare a type when creating a variable, Python infers it from the value you assign. If you write `x = 5`, Python makes it an `int`. If you later write `x = "hello"`, it becomes a `str`. This is convenient but means you need to be deliberate when mixing types in operations.

**Q2: What is the difference between `int` and `float`, and when do you choose each?**

An `int` stores whole numbers with no decimal component, while a `float` stores numbers with a decimal point. Integers are more memory-efficient and exact — there is no rounding. Use `int` for counts, indices, and whole-number quantities. Use `float` for measurements, percentages, and any value that can be fractional. In data and AI work, model accuracy, loss values, and prices are almost always `float`.

**Q3: Why does Python have a `bool` type when you could just use `1` and `0`?**

Booleans make code readable and prevent logical errors. `is_active = True` communicates intent clearly — `is_active = 1` is ambiguous and could be confused for a count or score. Python's `bool` type also enables short-circuit evaluation in conditions, and many built-in functions return `bool` directly. Using `1` and `0` works but is considered poor practice in Python.

**Q4: What happens when you call `int()` on a string that is not a valid number?**

Python raises a `ValueError` and the program stops. For example, `int("hello")` causes `ValueError: invalid literal for int() with base 10: 'hello'`. In production code you wrap type conversions in a `try/except` block to handle this gracefully — this is one of the most common sources of bugs when processing data from external files or user inputs.

---

## Resources

- [Python Official Docs — Built-in Types](https://docs.python.org/3/library/stdtypes.html) — Complete reference for every data type Python supports
- [Python.org Beginner's Guide](https://wiki.python.org/moin/BeginnersGuide) — Official starting point for new Python developers
- [Real Python — Variables in Python](https://realpython.com/python-variables/) — Practical walkthrough with clear examples
- [W3Schools Python Data Types](https://www.w3schools.com/python/python_datatypes.asp) — Quick interactive reference with try-it examples

---

## Conclusion & Next Steps

Variables and data types are the foundation of every Python program — every AI model, data pipeline, and automation script you will ever write starts with storing values in named containers. With this in place you can hold information, transform it, and pass it between operations.

In the next article — **Control Flow: if/else, Loops, and Functions** — you will learn how to make decisions in code, repeat tasks automatically, and write reusable functions that work on any variable you pass to them.

---

Subscribe to get new articles delivered to your inbox.
New posts every week across 9 AI learning pillars.

---
