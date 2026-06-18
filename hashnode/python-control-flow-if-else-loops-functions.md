---
title: 'Control Flow: if/else, Loops, and Functions in Python'
slug: python-control-flow-if-else-loops-functions
publishedAt: 2026-05-26
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
  title: 'Python Control Flow: if/else, Loops, Functions'
  description: 'Master Python if/else, for loops, while loops, and functions. Write decision-making scripts from scratch in under 30 minutes.'
seriesSlug: python-programming
domain: venumadhavan.hashnode.dev
---

## Key Takeaways

- You will write if/elif/else blocks that make decisions based on any condition
- You will use for loops to process every item in a list automatically
- You will use while loops to repeat code until a condition changes
- You will write reusable functions that accept inputs and return outputs
- You will combine control flow and functions into a single working script

---

## Who This Is For & Prerequisites

This article is for anyone who completed Article 1 of this series and wants to make their Python scripts do more than store data — they need to make decisions and repeat tasks.

**You need:**
- Python 3.9+ installed
- Article 1 completed: you understand variables, data types, and `print()`

**You do NOT need:**
- Any prior programming experience beyond Article 1
- Math beyond basic comparisons (greater than, less than, equal)

No pip install required. No API keys. No cost.

---

## What You Will Build

By the end of this article you will have:
- A temperature classifier that prints a different message depending on the temperature value
- A loop that processes every item in a list and prints a result for each
- A reusable function that takes inputs and returns a calculated output
- A complete script combining all three into one program

Expected final output when you run the complete script:

```
Temperature 35°C: Hot day — stay hydrated
Temperature 15°C: Cool day — light jacket needed
Temperature -5°C: Cold day — dress warm

Processing scores: [88, 45, 92, 60, 78]
88 — Pass
45 — Fail
92 — Pass
60 — Pass
78 — Pass

Average score: 72.6
Grade: C
```

---

## Concept Simply

Think of control flow like a road with signs. Without signs, you drive straight no matter what — every road, every condition, same result. With signs, you turn left if the bridge is out, slow down if there are roadworks, or take a detour if the destination changes. Control flow gives your code the same ability: choose a different path based on the situation.

A function is like a vending machine: you put in inputs (press a button), it processes them, and gives back an output (a snack). You do not care how the machine works internally — you just use it, reuse it, and pass different inputs each time.

| Without control flow | With control flow |
|---|---|
| Code runs the same way every time | Code adapts to data and conditions |
| Cannot handle different inputs differently | Different inputs produce different outputs |
| Must write the same logic again for each case | Write once, reuse with any input |

---

## Core Components

### 1. if / elif / else

The `if` statement checks a condition. If true, it runs that block. `elif` checks a second condition if the first was false. `else` runs when nothing matched.

```python
temperature = 35

if temperature > 30:
    print("Hot day")
elif temperature > 15:
    print("Warm day")
else:
    print("Cool day")
```

The colon (`:`) ends each condition line. The indented block below it is what runs when that condition is true. Python uses indentation — 4 spaces — not braces.

### 2. Comparison Operators

These return `True` or `False` and are the building blocks of conditions.

```python
x = 10

print(x > 5)    # True
print(x < 5)    # False
print(x == 10)  # True  (equals — two equals signs)
print(x != 10)  # False (not equal)
print(x >= 10)  # True  (greater than or equal)
```

### 3. Logical Operators

Combine multiple conditions in a single `if` statement.

```python
age = 25
has_id = True

if age >= 18 and has_id:
    print("Entry allowed")

score = 45

if score < 50 or score > 95:
    print("Check this score manually")
```

### 4. for Loops

Iterate over every item in a sequence (list, range, string) one at a time.

```python
scores = [88, 45, 92, 60]

for score in scores:
    print(score)
```

`range(n)` generates numbers from 0 to n-1. Use it when you need to repeat something a fixed number of times.

```python
for i in range(5):
    print(i)
```

### 5. while Loops

Repeat a block of code as long as a condition remains true.

```python
count = 0

while count < 3:
    print("Count:", count)
    count = count + 1
```

Always make sure the condition eventually becomes `False` — otherwise the loop runs forever.

### 6. Functions

A function groups reusable code behind a name. Define it once with `def`, call it as many times as needed.

```python
def greet(name):
    return "Hello, " + name

result = greet("Alex")
print(result)
```

`def` starts the definition. The name after `def` is what you call. Items in parentheses are parameters (inputs). `return` sends a value back to the caller.

![Control Flow Diagram — a flowchart showing: input → if condition → True branch and False branch, a for loop cycling through items, and a function box with input/output arrows](https://madhavan11601828.github.io/assets/images/python-control-flow-diagram.png)

---

## Hands-on Tutorial

### Step 1: Write your first if/else

```python
temperature = 35

if temperature > 30:
    print("Hot day — stay hydrated")
else:
    print("Comfortable day")
```

Expected output:
```
Hot day — stay hydrated
```

---

### Step 2: Add elif for multiple conditions

```python
temperature = 15

if temperature > 30:
    print("Hot day — stay hydrated")
elif temperature > 10:
    print("Cool day — light jacket needed")
else:
    print("Cold day — dress warm")
```

Expected output:
```
Cool day — light jacket needed
```

---

### Step 3: Loop over a list

```python
scores = [88, 45, 92, 60, 78]

for score in scores:
    if score >= 50:
        print(score, "— Pass")
    else:
        print(score, "— Fail")
```

Expected output:
```
88 — Pass
45 — Fail
92 — Pass
60 — Pass
78 — Pass
```

---

### Step 4: Write a reusable function

```python
def calculate_average(numbers):
    total = 0
    for number in numbers:
        total = total + number
    return total / len(numbers)

scores = [88, 45, 92, 60, 78]
avg = calculate_average(scores)
print("Average score:", avg)
```

Expected output:
```
Average score: 72.6
```

---

### Step 5: Complete script — everything combined

```python
def classify_temperature(temp):
    if temp > 30:
        return "Hot day — stay hydrated"
    elif temp > 10:
        return "Cool day — light jacket needed"
    else:
        return "Cold day — dress warm"

def calculate_average(numbers):
    total = 0
    for number in numbers:
        total = total + number
    return total / len(numbers)

def assign_grade(average):
    if average >= 90:
        return "A"
    elif average >= 80:
        return "B"
    elif average >= 70:
        return "C"
    elif average >= 60:
        return "D"
    else:
        return "F"

temperatures = [35, 15, -5]
for temp in temperatures:
    print("Temperature", str(temp) + "°C:", classify_temperature(temp))

print()

scores = [88, 45, 92, 60, 78]
print("Processing scores:", scores)
for score in scores:
    if score >= 50:
        print(score, "— Pass")
    else:
        print(score, "— Fail")

print()

avg = calculate_average(scores)
grade = assign_grade(avg)
print("Average score:", avg)
print("Grade:", grade)
```

Expected output:
```
Temperature 35°C: Hot day — stay hydrated
Temperature 15°C: Cool day — light jacket needed
Temperature -5°C: Cold day — dress warm

Processing scores: [88, 45, 92, 60, 78]
88 — Pass
45 — Fail
92 — Pass
60 — Pass
78 — Pass

Average score: 72.6
Grade: C
```

---

## Common Mistakes

**Mistake 1: Using = instead of == in conditions**

```python
if score = 50:
    print("Half marks")
```

```python
if score == 50:
    print("Half marks")
```

`=` assigns a value. `==` compares two values. Using `=` in a condition causes a `SyntaxError`.

---

**Mistake 2: Missing the colon after if/for/def**

```python
if temperature > 30
    print("Hot")

for score in scores
    print(score)
```

```python
if temperature > 30:
    print("Hot")

for score in scores:
    print(score)
```

Every `if`, `elif`, `else`, `for`, `while`, and `def` line must end with a colon. Python will raise a `SyntaxError` if it is missing.

---

**Mistake 3: Forgetting to return a value from a function**

```python
def calculate_average(numbers):
    total = sum(numbers)
    average = total / len(numbers)

result = calculate_average([80, 90, 70])
print(result)
```

```python
def calculate_average(numbers):
    total = sum(numbers)
    average = total / len(numbers)
    return average

result = calculate_average([80, 90, 70])
print(result)
```

Without `return`, the function runs but sends back `None`. The print statement then outputs `None`, not your calculated value.

---

## Interview Q&A

**Q1: What is the difference between a for loop and a while loop, and when do you use each?**

A `for` loop iterates over a known sequence — a list, a range, or any iterable. Use it when you know in advance how many times to loop or what to iterate over. A `while` loop continues until a condition becomes false — use it when the number of repetitions depends on something that changes during execution, such as waiting for a user input, retrying a failed API call, or reading records until end-of-file. In AI work, for loops dominate batch processing; while loops appear in training loops and agent cycles.

**Q2: What does a function return when it has no return statement?**

Python returns `None` automatically. `None` is a special Python value representing "no value." This causes silent bugs: the function appears to run correctly but the caller receives `None` instead of a result. If you then use that result in a calculation, Python raises a `TypeError`. Always explicitly `return` a value from functions that are supposed to produce one.

**Q3: Can you define a function after it is called in the same file?**

No. Python reads files top to bottom. A function must be defined before it is called. If you call `greet("Alex")` on line 3 and define `def greet(name)` on line 10, Python raises a `NameError` because it has not seen the function definition yet when it reaches line 3. The exception is when the call is inside another function — in that case, Python only evaluates the call when the outer function runs, not when it is defined.

**Q4: What is the purpose of parameters in a function?**

Parameters make functions reusable across different inputs. Without parameters, a function produces the same result every time — it is not much better than plain code. With parameters, one function handles any input: `calculate_average([80, 90])` and `calculate_average([50, 60, 70, 80])` both work with the same function. In AI and ML code, functions with parameters replace hardcoded values — model path, batch size, threshold — making scripts configurable without changing the logic.

---

## Resources

- [Python Docs — Control Flow](https://docs.python.org/3/tutorial/controlflow.html) — Official reference for if statements, for loops, and functions
- [Real Python — Python Functions](https://realpython.com/defining-your-own-python-function/) — Practical guide with worked examples
- [W3Schools — Python Loops](https://www.w3schools.com/python/python_for_loops.asp) — Interactive reference with try-it examples
- [Python Tutor](https://pythontutor.com/) — Visualise your code executing line by line — invaluable for understanding loops

---

## Conclusion & Next Steps

Control flow is what transforms a script that runs once into a program that adapts, repeats, and does real work. Every AI pipeline, data processor, and automation tool you will ever build uses if/else decisions, loops over data, and functions to stay organised.

In the next article — **Data Structures: Lists, Tuples, Dictionaries, Sets** — you will learn how to store and organise entire collections of data, which are the containers that feed every loop you write.

---

Subscribe to get new articles delivered to your inbox.
New posts every week across 9 AI learning pillars.

---
