---
layout: page
title: Python Basics - Level 1
permalink: /python/basics/
description: Master Python fundamentals for complete beginners - variables, data types, control flow, and basic operations
---

# Python Basics - Level 1

**Target Audience:** Complete beginners with no programming experience  
**Estimated Learning Time:** 2-3 weeks (20-30 hours)  
**Prerequisites:** None - start from scratch!

---

## 📋 Document Overview

This document covers the fundamental building blocks of Python programming. You'll learn how to write your first Python programs, work with data, make decisions with conditions, and create loops. By the end, you'll be able to build simple interactive programs.

### What You'll Learn:
- ✅ Python installation and basic setup
- ✅ Variables and different data types (numbers, strings, booleans)
- ✅ Mathematical and logical operations
- ✅ Getting user input and displaying output
- ✅ Making decisions with if/else statements
- ✅ Repeating tasks with loops
- ✅ Working with strings and basic text manipulation
- ✅ Converting between different data types

### Learning Approach:
1. **Read each section carefully** - Don't rush through concepts
2. **Type every code example** - Don't copy-paste, build muscle memory
3. **Experiment with variations** - Change values and see what happens
4. **Complete practice exercises** - Hands-on practice is essential

---

## 📑 Table of Contents with Section Details

### 1. [Introduction to Python](#introduction-to-python)
**What it covers:** Overview of Python language, its features, and why it's great for beginners  
**Key concepts:** Interpreted language, dynamic typing, cross-platform, extensive libraries  
**Time:** 15 minutes reading  
**Outcome:** Understand what Python is and where it's used

### 2. [Installation and Setup](#installation-and-setup)
**What it covers:** Installing Python on different operating systems and running your first program  
**Key concepts:** Python installer, PATH configuration, interactive vs script mode  
**Time:** 30 minutes (installation + verification)  
**Outcome:** Have Python installed and ready to use

### 3. [Python Syntax Basics](#python-syntax-basics)
**What it covers:** Python's unique syntax rules, especially indentation  
**Key concepts:** Indentation for code blocks, line continuation, statement separation  
**Time:** 20 minutes  
**Outcome:** Write properly formatted Python code

### 4. [Variables and Data Types](#variables-and-data-types)
**What it covers:** Creating variables and understanding different types of data  
**Key concepts:** Integer, float, string, boolean, None, type checking  
**Time:** 45 minutes  
**Outcome:** Store and manipulate different kinds of data

### 5. [Basic Operators](#basic-operators)
**What it covers:** Performing calculations and comparisons  
**Key concepts:** Arithmetic (+, -, *, /), comparison (==, !=, <, >), logical (and, or, not)  
**Time:** 60 minutes  
**Outcome:** Perform mathematical operations and make comparisons

### 6. [Input and Output](#input-and-output)
**What it covers:** Displaying information and getting user input  
**Key concepts:** print() function, input() function, string formatting (f-strings)  
**Time:** 45 minutes  
**Outcome:** Build interactive programs that communicate with users

### 7. [Comments and Documentation](#comments-and-documentation)
**What it covers:** Writing code comments and documentation  
**Key concepts:** Single-line (#), multi-line ("""), docstrings  
**Time:** 15 minutes  
**Outcome:** Make your code readable and maintainable

### 8. [Basic String Operations](#basic-string-operations)
**What it covers:** Working with text data  
**Key concepts:** Indexing, slicing, string methods (upper, lower, split, join)  
**Time:** 60 minutes  
**Outcome:** Manipulate text effectively

### 9. [Type Conversion](#type-conversion)
**What it covers:** Converting between different data types  
**Key concepts:** int(), float(), str(), bool(), implicit vs explicit conversion  
**Time:** 30 minutes  
**Outcome:** Handle different data types flexibly

### 10. [Basic Control Flow](#basic-control-flow)
**What it covers:** Making decisions and repeating actions  
**Key concepts:** if/elif/else, while loops, for loops, break/continue  
**Time:** 90 minutes  
**Outcome:** Control program execution flow

---

## 🎯 Learning Goals

By completing this level, you will be able to:
- ✅ Write and run basic Python programs
- ✅ Use variables to store and manipulate data
- ✅ Perform calculations and comparisons
- ✅ Get input from users and display formatted output
- ✅ Make decisions in your code using conditionals
- ✅ Repeat actions using loops
- ✅ Work with text and numbers
- ✅ Understand and fix basic errors

---

## Table of Contents
1. [Introduction to Python](#introduction-to-python)
2. [Installation and Setup](#installation-and-setup)
3. [Python Syntax Basics](#python-syntax-basics)
4. [Variables and Data Types](#variables-and-data-types)
5. [Basic Operators](#basic-operators)
6. [Input and Output](#input-and-output)
7. [Comments and Documentation](#comments-and-documentation)
8. [Basic String Operations](#basic-string-operations)
9. [Type Conversion](#type-conversion)
10. [Basic Control Flow](#basic-control-flow)

---

## Introduction to Python

Python is a high-level, interpreted programming language known for its readability and simplicity. Created by Guido van Rossum and first released in 1991, Python emphasizes code readability with significant whitespace.

**Key Features:**
- Easy to learn and read
- Interpreted language
- Dynamically typed
- Cross-platform
- Large standard library
- Extensive third-party packages

---

## Installation and Setup

### Installing Python

**Windows:**
```bash
# Download from python.org
# Run the installer
# Check "Add Python to PATH"
```

**macOS:**
```bash
# Using Homebrew
brew install python3
```

**Linux:**
```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install python3

# Fedora
sudo dnf install python3
```

### Verifying Installation

```bash
python --version
# or
python3 --version
```

### Running Python

**Interactive Mode:**
```bash
python
>>> print("Hello, World!")
Hello, World!
```

**Script Mode:**
```python
# Save as hello.py
print("Hello, World!")
```

```bash
python hello.py
```

---

## Python Syntax Basics

### Indentation

Python uses indentation to define code blocks (no curly braces!):

```python
# Correct
if True:
    print("This is indented")
    print("This is also indented")

# Incorrect - will cause IndentationError
if True:
print("This will fail")
```

### Line Continuation

```python
# Using backslash
total = 1 + 2 + 3 + \
        4 + 5 + 6

# Implicit continuation (inside parentheses, brackets, or braces)
total = (1 + 2 + 3 +
         4 + 5 + 6)

# Multiple statements on one line (not recommended)
x = 1; y = 2; z = 3
```

---

## Variables and Data Types

### Variables

Variables are containers for storing data. Python is dynamically typed - you don't need to declare variable types.

```python
# Variable assignment
name = "Alice"
age = 25
height = 5.6
is_student = True

# Multiple assignment
x, y, z = 1, 2, 3

# Same value to multiple variables
a = b = c = 0

# Variable naming rules
valid_name = "OK"
_also_valid = "OK"
name123 = "OK"
# 123name = "Invalid - cannot start with number"
# my-name = "Invalid - cannot use hyphen"
```

### Data Types

#### 1. Numeric Types

```python
# Integer
x = 10
y = -5
big_number = 1000000000

# Float
pi = 3.14159
temperature = -40.5
scientific = 2.5e-3  # 0.0025

# Complex
complex_num = 3 + 4j
print(complex_num.real)  # 3.0
print(complex_num.imag)  # 4.0
```

#### 2. String Type

```python
# Single quotes
name = 'Alice'

# Double quotes
message = "Hello, World!"

# Triple quotes (multiline)
paragraph = """This is a
multiline string that spans
across multiple lines."""

# String with quotes inside
quote = "She said, 'Hello!'"
quote2 = 'He replied, "Hi!"'
```

#### 3. Boolean Type

```python
is_active = True
is_completed = False

# Boolean from expressions
result = (5 > 3)  # True
check = (10 == 5)  # False
```

#### 4. NoneType

```python
# Represents absence of value
nothing = None
result = None

if nothing is None:
    print("Variable has no value")
```

### Checking Data Types

```python
x = 42
print(type(x))  # <class 'int'>

name = "Alice"
print(type(name))  # <class 'str'>

value = 3.14
print(type(value))  # <class 'float'>

# Using isinstance()
print(isinstance(x, int))  # True
print(isinstance(name, str))  # True
print(isinstance(value, int))  # False
```

---

## Basic Operators

### Arithmetic Operators

```python
a = 10
b = 3

# Addition
print(a + b)  # 13

# Subtraction
print(a - b)  # 7

# Multiplication
print(a * b)  # 30

# Division (always returns float)
print(a / b)  # 3.3333333333333335

# Floor Division (returns integer)
print(a // b)  # 3

# Modulus (remainder)
print(a % b)  # 1

# Exponentiation
print(a ** b)  # 1000
print(2 ** 8)  # 256
```

### Comparison Operators

```python
x = 5
y = 10

# Equal to
print(x == y)  # False

# Not equal to
print(x != y)  # True

# Greater than
print(x > y)  # False

# Less than
print(x < y)  # True

# Greater than or equal to
print(x >= 5)  # True

# Less than or equal to
print(y <= 10)  # True
```

### Logical Operators

```python
a = True
b = False

# AND
print(a and b)  # False
print(True and True)  # True

# OR
print(a or b)  # True
print(False or False)  # False

# NOT
print(not a)  # False
print(not b)  # True

# Combining logical operators
x = 5
print(x > 0 and x < 10)  # True
print(x < 0 or x > 10)  # False
```

### Assignment Operators

```python
x = 10

# Add and assign
x += 5  # x = x + 5, now x = 15

# Subtract and assign
x -= 3  # x = x - 3, now x = 12

# Multiply and assign
x *= 2  # x = x * 2, now x = 24

# Divide and assign
x /= 4  # x = x / 4, now x = 6.0

# Floor divide and assign
x //= 2  # x = x // 2, now x = 3.0

# Modulus and assign
x %= 2  # x = x % 2, now x = 1.0

# Exponent and assign
x **= 3  # x = x ** 3, now x = 1.0
```

### Identity Operators

```python
a = [1, 2, 3]
b = [1, 2, 3]
c = a

# is - checks if objects are identical (same memory location)
print(a is c)  # True
print(a is b)  # False (different objects, same content)

# is not
print(a is not b)  # True

# == vs is
print(a == b)  # True (compares content)
print(a is b)  # False (compares identity)
```

### Membership Operators

```python
text = "Hello, World!"
numbers = [1, 2, 3, 4, 5]

# in - checks if value exists in sequence
print("Hello" in text)  # True
print(3 in numbers)  # True

# not in
print("Python" not in text)  # True
print(6 not in numbers)  # True
```

---

## Input and Output

### Output with print()

```python
# Basic print
print("Hello, World!")

# Multiple values
print("Name:", "Alice", "Age:", 25)

# Custom separator
print("apple", "banana", "cherry", sep=", ")  # apple, banana, cherry

# Custom end character
print("Hello", end=" ")
print("World")  # Hello World

# Printing variables
name = "Bob"
age = 30
print("Name:", name, "Age:", age)
```

### Formatted Output

```python
name = "Alice"
age = 25
height = 5.6

# Using f-strings (Python 3.6+)
print(f"My name is {name} and I am {age} years old.")
print(f"Height: {height:.1f} feet")

# Using format()
print("My name is {} and I am {} years old.".format(name, age))
print("My name is {0} and I am {1} years old.".format(name, age))
print("My name is {n} and I am {a} years old.".format(n=name, a=age))

# Using % operator (old style)
print("My name is %s and I am %d years old." % (name, age))
print("Pi is approximately %.2f" % 3.14159)
```

### Input from User

```python
# Basic input (always returns string)
name = input("Enter your name: ")
print("Hello,", name)

# Converting input to other types
age = int(input("Enter your age: "))
height = float(input("Enter your height: "))

# Multiple inputs on one line
x, y = input("Enter two numbers: ").split()
x = int(x)
y = int(y)
print("Sum:", x + y)

# Example: Calculator
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
result = num1 + num2
print(f"The sum is: {result}")
```

---

## Comments and Documentation

### Single-line Comments

```python
# This is a single-line comment
x = 5  # This is an inline comment
```

### Multi-line Comments

```python
# This is a multi-line comment
# that spans across
# multiple lines

"""
This is also a multi-line comment
using triple quotes.
Often used for documentation.
"""
```

### Docstrings

```python
def greet(name):
    """
    This function greets the person passed in as parameter.
    
    Parameters:
    name (str): The name of the person to greet
    
    Returns:
    str: A greeting message
    """
    return f"Hello, {name}!"

# Accessing docstring
print(greet.__doc__)
```

---

## Basic String Operations

### String Indexing and Slicing

```python
text = "Python Programming"

# Indexing (0-based)
print(text[0])   # P
print(text[7])   # P
print(text[-1])  # g (last character)
print(text[-2])  # n

# Slicing [start:end:step]
print(text[0:6])    # Python
print(text[7:])     # Programming
print(text[:6])     # Python
print(text[::2])    # Pto rgamn
print(text[::-1])   # gnimmargorP nohtyP (reverse)
```

### String Methods

```python
text = "Hello, World!"

# Case conversion
print(text.upper())      # HELLO, WORLD!
print(text.lower())      # hello, world!
print(text.capitalize()) # Hello, world!
print(text.title())      # Hello, World!

# Checking content
print(text.startswith("Hello"))  # True
print(text.endswith("!"))        # True
print("123".isdigit())           # True
print("abc".isalpha())           # True
print("abc123".isalnum())        # True

# Finding and replacing
print(text.find("World"))        # 7
print(text.replace("World", "Python"))  # Hello, Python!
print(text.count("l"))           # 3

# Splitting and joining
words = text.split(", ")         # ['Hello', 'World!']
print("-".join(words))           # Hello-World!

# Trimming whitespace
text2 = "  Hello  "
print(text2.strip())             # Hello
print(text2.lstrip())            # Hello  
print(text2.rstrip())            #   Hello
```

### String Concatenation

```python
# Using + operator
first = "Hello"
second = "World"
result = first + " " + second  # Hello World

# Using join()
words = ["Python", "is", "awesome"]
sentence = " ".join(words)  # Python is awesome

# Using f-strings
name = "Alice"
greeting = f"Hello, {name}!"

# Using * for repetition
print("Ha" * 3)  # HaHaHa
print("-" * 20)  # --------------------
```

---

## Type Conversion

### Implicit Conversion

```python
# Python automatically converts types when needed
x = 5      # int
y = 2.5    # float
z = x + y  # z is float (7.5)
print(z, type(z))
```

### Explicit Conversion

```python
# String to Integer
x = int("123")
print(x, type(x))  # 123 <class 'int'>

# String to Float
y = float("3.14")
print(y, type(y))  # 3.14 <class 'float'>

# Integer to String
num = 42
text = str(num)
print(text, type(text))  # 42 <class 'str'>

# Float to Integer (truncates decimal)
z = int(3.9)
print(z)  # 3

# String to List
text = "Python"
chars = list(text)
print(chars)  # ['P', 'y', 't', 'h', 'o', 'n']

# List to String
chars = ['H', 'i']
text = ''.join(chars)
print(text)  # Hi

# Integer to Boolean
print(bool(0))   # False
print(bool(1))   # True
print(bool(42))  # True

# Boolean to Integer
print(int(True))   # 1
print(int(False))  # 0
```

### Handling Conversion Errors

```python
# Using try-except (basic introduction)
text = "abc"
try:
    number = int(text)
except ValueError:
    print("Cannot convert to integer!")

# Checking before conversion
if text.isdigit():
    number = int(text)
else:
    print("Not a valid number")
```

---

## Basic Control Flow

### If Statements

```python
# Simple if
age = 18
if age >= 18:
    print("You are an adult")

# if-else
temperature = 25
if temperature > 30:
    print("It's hot!")
else:
    print("It's comfortable")

# if-elif-else
score = 85
if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
elif score >= 60:
    print("Grade: D")
else:
    print("Grade: F")

# Nested if
age = 25
has_license = True

if age >= 18:
    if has_license:
        print("You can drive")
    else:
        print("You need a license")
else:
    print("You are too young to drive")
```

### Conditional Expressions (Ternary Operator)

```python
# Basic syntax: value_if_true if condition else value_if_false
age = 20
status = "Adult" if age >= 18 else "Minor"
print(status)  # Adult

# More examples
x = 10
y = 20
max_value = x if x > y else y
print(max_value)  # 20

# With function calls
def get_discount(is_member):
    return 0.2 if is_member else 0

print(get_discount(True))   # 0.2
print(get_discount(False))  # 0
```

### While Loops

```python
# Basic while loop
count = 0
while count < 5:
    print(count)
    count += 1

# While with break
i = 0
while True:
    print(i)
    i += 1
    if i >= 5:
        break

# While with continue
i = 0
while i < 5:
    i += 1
    if i == 3:
        continue  # Skip 3
    print(i)

# While-else (else executes when condition becomes false)
count = 0
while count < 3:
    print(count)
    count += 1
else:
    print("Loop completed normally")
```

### For Loops

```python
# Basic for loop with range
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# Range with start and end
for i in range(2, 8):
    print(i)  # 2, 3, 4, 5, 6, 7

# Range with step
for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8

# Iterating over a string
for char in "Python":
    print(char)

# For with break
for i in range(10):
    if i == 5:
        break
    print(i)  # 0, 1, 2, 3, 4

# For with continue
for i in range(5):
    if i == 2:
        continue
    print(i)  # 0, 1, 3, 4

# For-else
for i in range(3):
    print(i)
else:
    print("Loop completed")

# Nested loops
for i in range(3):
    for j in range(2):
        print(f"i={i}, j={j}")
```

### Pass Statement

```python
# Placeholder for future code
if True:
    pass  # TODO: Implement this later

# Empty function
def my_function():
    pass

# Empty class
class MyClass:
    pass
```

---

## Practice Exercises

### Exercise 1: Simple Calculator
```python
# Get two numbers from user
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

# Perform operations
print(f"Sum: {num1 + num2}")
print(f"Difference: {num1 - num2}")
print(f"Product: {num1 * num2}")
if num2 != 0:
    print(f"Division: {num1 / num2}")
else:
    print("Cannot divide by zero")
```

### Exercise 2: Even or Odd Checker
```python
number = int(input("Enter a number: "))
if number % 2 == 0:
    print(f"{number} is even")
else:
    print(f"{number} is odd")
```

### Exercise 3: Temperature Converter
```python
celsius = float(input("Enter temperature in Celsius: "))
fahrenheit = (celsius * 9/5) + 32
print(f"{celsius}°C is equal to {fahrenheit}°F")
```

### Exercise 4: Count Vowels
```python
text = input("Enter a string: ").lower()
vowels = "aeiou"
count = 0

for char in text:
    if char in vowels:
        count += 1

print(f"Number of vowels: {count}")
```

### Exercise 5: Multiplication Table
```python
number = int(input("Enter a number: "))
for i in range(1, 11):
    print(f"{number} x {i} = {number * i}")
```

---

## Summary

In this basics module, you've learned:
- Python installation and setup
- Basic syntax and indentation
- Variables and data types (int, float, str, bool, None)
- Operators (arithmetic, comparison, logical, assignment)
- Input and output operations
- String operations and methods
- Type conversion
- Control flow (if statements, while loops, for loops)

**Next Steps:** Move on to Pre-Intermediate Python to learn about data structures (lists, tuples, dictionaries), functions, and file handling.
