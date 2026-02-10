# Python Pre-Intermediate - Level 2

**Target Audience:** Those who completed basics and want to build real programs  
**Estimated Learning Time:** 3-4 weeks (30-40 hours)  
**Prerequisites:** Completed Level 1 or equivalent basic Python knowledge

---

## 📋 Document Overview

This document takes you beyond basics into practical programming with data structures, functions, and file operations. You'll learn to organize data effectively, write reusable code with functions, handle errors gracefully, and work with files. By the end, you'll be ready to build real-world applications.

### What You'll Learn:
- ✅ Core data structures: lists, tuples, dictionaries, and sets
- ✅ Writing and organizing code with functions
- ✅ Reading from and writing to files
- ✅ Handling errors and exceptions
- ✅ Using Python's standard library modules
- ✅ Advanced string formatting techniques
- ✅ Efficient code with comprehensions

### Skills You'll Gain:
- 📊 Organize complex data with appropriate structures
- 🔧 Write reusable, modular code with functions
- 📁 Process files and handle external data
- 🛡️ Write robust code that handles errors
- 🎨 Format output professionally
- ⚡ Write more efficient, Pythonic code

---

## 📑 Table of Contents with Section Details

### 1. [Lists](#lists)
**What it covers:** Dynamic, mutable sequences for storing multiple items  
**Key concepts:** Creating, indexing, slicing, methods (append, extend, insert, remove, sort)  
**Practical uses:** Storing collections, processing sequences, managing dynamic data  
**Time:** 90 minutes  
**Outcome:** Master Python's most versatile data structure

### 2. [Tuples](#tuples)
**What it covers:** Immutable sequences for fixed collections  
**Key concepts:** Creation, unpacking, when to use vs lists, as dictionary keys  
**Practical uses:** Multiple return values, data integrity, fixed collections  
**Time:** 45 minutes  
**Outcome:** Understand immutability and appropriate tuple usage

### 3. [Dictionaries](#dictionaries)
**What it covers:** Key-value pairs for fast lookups and structured data  
**Key concepts:** Creating, accessing, modifying, methods (keys, values, items), nested dicts  
**Practical uses:** Representing objects, fast lookups, configuration, JSON-like data  
**Time:** 90 minutes  
**Outcome:** Store and retrieve data efficiently with key-value pairs

### 4. [Sets](#sets)
**What it covers:** Unordered collections of unique elements  
**Key concepts:** Creating, set operations (union, intersection, difference), membership testing  
**Practical uses:** Remove duplicates, mathematical set operations, fast membership tests  
**Time:** 45 minutes  
**Outcome:** Leverage sets for unique collections and set mathematics

### 5. [Functions](#functions)
**What it covers:** Defining reusable blocks of code  
**Key concepts:** Parameters, arguments, return values, *args, **kwargs, lambda, scope  
**Practical uses:** Code reuse, organization, abstraction, modularity  
**Time:** 120 minutes  
**Outcome:** Write clean, reusable, well-organized code

### 6. [File Handling](#file-handling)
**What it covers:** Reading from and writing to files  
**Key concepts:** open(), modes (r, w, a), with statement, CSV files, JSON files, file paths  
**Practical uses:** Data persistence, log files, configuration, data processing  
**Time:** 90 minutes  
**Outcome:** Work with external files and persistent data

### 7. [Exception Handling](#exception-handling)
**What it covers:** Gracefully handling errors in your programs  
**Key concepts:** try-except-else-finally, raising exceptions, custom exceptions  
**Practical uses:** Robust error handling, input validation, recovery from failures  
**Time:** 75 minutes  
**Outcome:** Write fault-tolerant programs that handle errors gracefully

### 8. [Modules and Packages](#modules-and-packages)
**What it covers:** Organizing code and using external libraries  
**Key concepts:** import statements, creating modules, built-in modules (math, random, datetime, os)  
**Practical uses:** Code organization, reusing code across projects, leveraging libraries  
**Time:** 60 minutes  
**Outcome:** Structure projects and use Python's ecosystem

### 9. [String Formatting Advanced](#string-formatting-advanced)
**What it covers:** Professional output formatting  
**Key concepts:** f-strings, format() method, % operator, alignment, precision  
**Practical uses:** Reports, user interfaces, logging, data presentation  
**Time:** 45 minutes  
**Outcome:** Create professional, formatted output

### 10. [List Comprehensions](#list-comprehensions)
**What it covers:** Concise, efficient list creation  
**Key concepts:** Basic syntax, conditionals, nested comprehensions, dict/set comprehensions  
**Practical uses:** Data transformation, filtering, efficient code  
**Time:** 60 minutes  
**Outcome:** Write Pythonic, efficient data processing code

---

## 🎯 Learning Goals

By completing this level, you will be able to:
- ✅ Choose the right data structure for any situation
- ✅ Write well-organized, reusable functions
- ✅ Read and write various file formats
- ✅ Handle errors and edge cases properly
- ✅ Use Python's standard library effectively
- ✅ Format output professionally
- ✅ Write concise, Pythonic code with comprehensions
- ✅ Build complete, practical applications

---

## 🚀 Practice Projects

After completing this level, build these projects to solidify your knowledge:

1. **Contact Book Manager**
   - Store contacts in a dictionary
   - Save/load from file
   - Search, add, update, delete contacts
   - Skills: dictionaries, file I/O, functions

2. **Word Frequency Counter**
   - Read text from file
   - Count word occurrences
   - Display top N words
   - Skills: file handling, dictionaries, string methods

3. **Simple Grade Manager**
   - Store student grades in data structures
   - Calculate averages, min, max
   - Grade distribution
   - Skills: lists, dictionaries, functions, calculations

4. **Todo List Application**
   - Add, remove, mark complete
   - Save to file, load on startup
   - Filter and search tasks
   - Skills: lists, file I/O, exception handling

---

## Table of Contents
1. [Lists](#lists)
2. [Tuples](#tuples)
3. [Dictionaries](#dictionaries)
4. [Sets](#sets)
5. [Functions](#functions)
6. [File Handling](#file-handling)
7. [Exception Handling](#exception-handling)
8. [Modules and Packages](#modules-and-packages)
9. [String Formatting Advanced](#string-formatting-advanced)
10. [List Comprehensions](#list-comprehensions)

---

## Lists

Lists are ordered, mutable collections that can contain items of different types.

### Creating Lists

```python
# Empty list
empty_list = []
also_empty = list()

# List with items
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
nested = [[1, 2], [3, 4], [5, 6]]

# List from range
numbers = list(range(1, 6))  # [1, 2, 3, 4, 5]
```

### Accessing List Elements

```python
fruits = ["apple", "banana", "cherry", "date", "elderberry"]

# Indexing
print(fruits[0])    # apple
print(fruits[-1])   # elderberry
print(fruits[-2])   # date

# Slicing
print(fruits[1:4])   # ['banana', 'cherry', 'date']
print(fruits[:3])    # ['apple', 'banana', 'cherry']
print(fruits[2:])    # ['cherry', 'date', 'elderberry']
print(fruits[::2])   # ['apple', 'cherry', 'elderberry']
print(fruits[::-1])  # Reverse list
```

### Modifying Lists

```python
numbers = [1, 2, 3, 4, 5]

# Changing elements
numbers[0] = 10
print(numbers)  # [10, 2, 3, 4, 5]

# Changing multiple elements
numbers[1:3] = [20, 30]
print(numbers)  # [10, 20, 30, 4, 5]

# Adding elements
numbers.append(6)           # Add to end
numbers.insert(0, 0)        # Insert at position
numbers.extend([7, 8, 9])   # Add multiple items

print(numbers)  # [0, 10, 20, 30, 4, 5, 6, 7, 8, 9]

# Removing elements
numbers.remove(10)   # Remove first occurrence
popped = numbers.pop()     # Remove and return last item
popped = numbers.pop(0)    # Remove and return item at index
del numbers[0]             # Delete item at index
numbers.clear()            # Remove all items
```

### List Methods

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]

# Sorting
numbers.sort()              # Sort in place
print(numbers)              # [1, 1, 2, 3, 4, 5, 6, 9]

numbers.sort(reverse=True)  # Sort descending
sorted_nums = sorted(numbers)  # Return new sorted list (original unchanged)

# Reversing
numbers.reverse()           # Reverse in place
reversed_nums = list(reversed(numbers))  # Return new reversed list

# Counting and finding
count = numbers.count(1)    # Count occurrences
index = numbers.index(5)    # Find first index of value

# Copying
shallow_copy = numbers.copy()
also_copy = numbers[:]
import copy
deep_copy = copy.deepcopy(nested_list)  # For nested lists
```

### List Operations

```python
# Concatenation
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = list1 + list2    # [1, 2, 3, 4, 5, 6]

# Repetition
repeated = [0] * 5          # [0, 0, 0, 0, 0]

# Membership testing
print(2 in list1)           # True
print(10 not in list1)      # True

# Length
print(len(list1))           # 3

# Min, Max, Sum
numbers = [1, 2, 3, 4, 5]
print(min(numbers))         # 1
print(max(numbers))         # 5
print(sum(numbers))         # 15
```

### Iterating Over Lists

```python
fruits = ["apple", "banana", "cherry"]

# Simple iteration
for fruit in fruits:
    print(fruit)

# With index using enumerate()
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# With custom start index
for index, fruit in enumerate(fruits, start=1):
    print(f"{index}: {fruit}")

# Iterating over multiple lists with zip()
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
for name, age in zip(names, ages):
    print(f"{name} is {age} years old")
```

### List Comprehensions (Preview)

```python
# Traditional way
squares = []
for x in range(10):
    squares.append(x**2)

# List comprehension way
squares = [x**2 for x in range(10)]

# With condition
evens = [x for x in range(20) if x % 2 == 0]
```

---

## Tuples

Tuples are ordered, immutable collections. Once created, they cannot be modified.

### Creating Tuples

```python
# Empty tuple
empty_tuple = ()
also_empty = tuple()

# Tuple with items
coordinates = (10, 20)
single_item = (42,)  # Note the comma!
not_a_tuple = (42)   # This is just an integer

# Without parentheses (tuple packing)
point = 10, 20, 30

# From other sequences
tuple_from_list = tuple([1, 2, 3])
tuple_from_string = tuple("hello")
```

### Accessing Tuple Elements

```python
colors = ("red", "green", "blue", "yellow")

# Indexing
print(colors[0])     # red
print(colors[-1])    # yellow

# Slicing
print(colors[1:3])   # ('green', 'blue')

# Unpacking
x, y, z = (1, 2, 3)
print(x, y, z)       # 1 2 3

# Unpacking with *
first, *middle, last = (1, 2, 3, 4, 5)
print(first)         # 1
print(middle)        # [2, 3, 4]
print(last)          # 5
```

### Tuple Operations

```python
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)

# Concatenation
combined = tuple1 + tuple2  # (1, 2, 3, 4, 5, 6)

# Repetition
repeated = tuple1 * 3       # (1, 2, 3, 1, 2, 3, 1, 2, 3)

# Membership
print(2 in tuple1)          # True

# Length
print(len(tuple1))          # 3

# Count and index
numbers = (1, 2, 3, 2, 4, 2)
print(numbers.count(2))     # 3
print(numbers.index(3))     # 2
```

### Why Use Tuples?

```python
# 1. Immutability ensures data integrity
coordinates = (10, 20)
# coordinates[0] = 15  # This will raise TypeError

# 2. Can be used as dictionary keys
locations = {
    (0, 0): "Origin",
    (1, 1): "Point A"
}

# 3. Faster than lists
# 4. Used for multiple return values
def get_min_max(numbers):
    return min(numbers), max(numbers)

minimum, maximum = get_min_max([1, 2, 3, 4, 5])
```

---

## Dictionaries

Dictionaries are unordered collections of key-value pairs. Keys must be immutable and unique.

### Creating Dictionaries

```python
# Empty dictionary
empty_dict = {}
also_empty = dict()

# Dictionary with items
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# Using dict() constructor
person = dict(name="Alice", age=25, city="New York")

# From list of tuples
pairs = [("a", 1), ("b", 2), ("c", 3)]
dictionary = dict(pairs)

# Dictionary comprehension
squares = {x: x**2 for x in range(5)}
```

### Accessing Dictionary Elements

```python
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# Using brackets
print(person["name"])        # Alice
# print(person["country"])   # KeyError!

# Using get() - safer
print(person.get("name"))    # Alice
print(person.get("country")) # None
print(person.get("country", "USA"))  # USA (default value)
```

### Modifying Dictionaries

```python
person = {"name": "Alice", "age": 25}

# Adding/updating items
person["city"] = "New York"
person["age"] = 26

# Using update()
person.update({"country": "USA", "age": 27})

# Removing items
del person["city"]
age = person.pop("age")          # Remove and return value
item = person.popitem()          # Remove and return last item (key, value)
person.clear()                   # Remove all items
```

### Dictionary Methods

```python
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# Getting keys, values, and items
keys = person.keys()       # dict_keys(['name', 'age', 'city'])
values = person.values()   # dict_values(['Alice', 25, 'New York'])
items = person.items()     # dict_items([('name', 'Alice'), ...])

# Converting to lists
keys_list = list(person.keys())
values_list = list(person.values())

# Checking membership
print("name" in person)          # True (checks keys)
print("Alice" in person.values()) # True
```

### Iterating Over Dictionaries

```python
person = {"name": "Alice", "age": 25, "city": "New York"}

# Iterate over keys
for key in person:
    print(key)

# Iterate over values
for value in person.values():
    print(value)

# Iterate over key-value pairs
for key, value in person.items():
    print(f"{key}: {value}")
```

### Nested Dictionaries

```python
# Dictionary of dictionaries
employees = {
    "emp1": {"name": "Alice", "age": 25},
    "emp2": {"name": "Bob", "age": 30},
    "emp3": {"name": "Charlie", "age": 35}
}

# Accessing nested values
print(employees["emp1"]["name"])  # Alice

# Iterating nested dictionaries
for emp_id, emp_info in employees.items():
    print(f"\nEmployee ID: {emp_id}")
    for key, value in emp_info.items():
        print(f"{key}: {value}")
```

### Dictionary Operations

```python
# Copying
original = {"a": 1, "b": 2}
shallow_copy = original.copy()

# Merging dictionaries (Python 3.9+)
dict1 = {"a": 1, "b": 2}
dict2 = {"c": 3, "d": 4}
merged = dict1 | dict2

# Using update()
dict1.update(dict2)

# Dictionary from keys
keys = ["a", "b", "c"]
default_dict = dict.fromkeys(keys, 0)  # {'a': 0, 'b': 0, 'c': 0}
```

---

## Sets

Sets are unordered collections of unique elements.

### Creating Sets

```python
# Empty set
empty_set = set()  # Note: {} creates empty dict, not set!

# Set with items
numbers = {1, 2, 3, 4, 5}
mixed = {1, "hello", 3.14, True}

# From other sequences
set_from_list = set([1, 2, 2, 3, 3, 4])  # {1, 2, 3, 4}
set_from_string = set("hello")            # {'h', 'e', 'l', 'o'}
```

### Set Operations

```python
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

# Union (all elements from both sets)
union = set1 | set2
union = set1.union(set2)
print(union)  # {1, 2, 3, 4, 5, 6, 7, 8}

# Intersection (common elements)
intersection = set1 & set2
intersection = set1.intersection(set2)
print(intersection)  # {4, 5}

# Difference (elements in set1 but not in set2)
difference = set1 - set2
difference = set1.difference(set2)
print(difference)  # {1, 2, 3}

# Symmetric difference (elements in either set, but not both)
sym_diff = set1 ^ set2
sym_diff = set1.symmetric_difference(set2)
print(sym_diff)  # {1, 2, 3, 6, 7, 8}

# Subset and superset
print(set1.issubset(set2))   # False
print(set1.issuperset(set2)) # False
print({1, 2}.issubset(set1)) # True
```

### Modifying Sets

```python
numbers = {1, 2, 3}

# Adding elements
numbers.add(4)
numbers.update([5, 6, 7])  # Add multiple elements

# Removing elements
numbers.remove(1)      # Raises KeyError if not found
numbers.discard(2)     # No error if not found
popped = numbers.pop() # Remove and return arbitrary element
numbers.clear()        # Remove all elements
```

### Set Methods

```python
numbers = {1, 2, 3, 4, 5}

# Length
print(len(numbers))  # 5

# Membership
print(3 in numbers)  # True

# Iterating
for num in numbers:
    print(num)

# Converting to list
numbers_list = list(numbers)

# Removing duplicates from list
original = [1, 2, 2, 3, 3, 3, 4, 5]
unique = list(set(original))
```

### Frozen Sets

```python
# Immutable set
frozen = frozenset([1, 2, 3, 4, 5])

# Can be used as dictionary keys
locations = {
    frozenset([1, 2]): "Location A",
    frozenset([3, 4]): "Location B"
}

# Cannot be modified
# frozen.add(6)  # AttributeError
```

---

## Functions

Functions are reusable blocks of code that perform specific tasks.

### Defining Functions

```python
# Basic function
def greet():
    print("Hello, World!")

greet()  # Calling the function

# Function with parameters
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Alice")

# Function with return value
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8

# Multiple return values
def get_min_max(numbers):
    return min(numbers), max(numbers)

minimum, maximum = get_min_max([1, 2, 3, 4, 5])
```

### Function Arguments

```python
# Positional arguments
def describe_pet(animal, name):
    print(f"I have a {animal} named {name}")

describe_pet("dog", "Buddy")

# Keyword arguments
describe_pet(name="Whiskers", animal="cat")

# Default arguments
def greet(name, message="Hello"):
    print(f"{message}, {name}!")

greet("Alice")                    # Hello, Alice!
greet("Bob", "Good morning")      # Good morning, Bob!

# Required and optional arguments
def make_pizza(size, *toppings, **details):
    print(f"Making a {size}-inch pizza")
    print("Toppings:", toppings)
    print("Details:", details)

make_pizza(12, "pepperoni", "mushrooms", crust="thin", cheese="extra")
```

### Variable-Length Arguments

```python
# *args - variable number of positional arguments
def sum_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(sum_all(1, 2, 3))        # 6
print(sum_all(1, 2, 3, 4, 5))  # 15

# **kwargs - variable number of keyword arguments
def print_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="New York")

# Combining all types
def complex_function(pos1, pos2, *args, default1="hello", **kwargs):
    print(f"Positional: {pos1}, {pos2}")
    print(f"Args: {args}")
    print(f"Default: {default1}")
    print(f"Kwargs: {kwargs}")

complex_function(1, 2, 3, 4, 5, default1="hi", extra="value")
```

### Lambda Functions

```python
# Anonymous functions (one-liners)
square = lambda x: x**2
print(square(5))  # 25

add = lambda a, b: a + b
print(add(3, 4))  # 7

# Often used with map, filter, sorted
numbers = [1, 2, 3, 4, 5]

# Map
squared = list(map(lambda x: x**2, numbers))

# Filter
evens = list(filter(lambda x: x % 2 == 0, numbers))

# Sorted with key
words = ["apple", "pie", "zoo", "a"]
sorted_words = sorted(words, key=lambda x: len(x))
```

### Scope and Global Variables

```python
# Local vs Global scope
x = 10  # Global variable

def modify():
    x = 20  # Local variable
    print(x)  # 20

modify()
print(x)  # 10 (global unchanged)

# Using global keyword
x = 10

def modify_global():
    global x
    x = 20

modify_global()
print(x)  # 20 (global changed)

# Nonlocal (for nested functions)
def outer():
    x = 10
    
    def inner():
        nonlocal x
        x = 20
    
    inner()
    print(x)  # 20

outer()
```

### Docstrings

```python
def calculate_area(length, width):
    """
    Calculate the area of a rectangle.
    
    Parameters:
    length (float): The length of the rectangle
    width (float): The width of the rectangle
    
    Returns:
    float: The area of the rectangle
    
    Examples:
    >>> calculate_area(5, 3)
    15
    """
    return length * width

# Accessing docstring
print(calculate_area.__doc__)
help(calculate_area)
```

---

## File Handling

### Reading Files

```python
# Method 1: Using open() and close()
file = open("data.txt", "r")
content = file.read()
print(content)
file.close()

# Method 2: Using with statement (recommended)
with open("data.txt", "r") as file:
    content = file.read()
    print(content)
# File automatically closed

# Reading line by line
with open("data.txt", "r") as file:
    for line in file:
        print(line.strip())

# Reading all lines into a list
with open("data.txt", "r") as file:
    lines = file.readlines()

# Reading specific number of characters
with open("data.txt", "r") as file:
    content = file.read(100)  # First 100 characters

# Reading one line at a time
with open("data.txt", "r") as file:
    line1 = file.readline()
    line2 = file.readline()
```

### Writing Files

```python
# Writing (overwrites existing content)
with open("output.txt", "w") as file:
    file.write("Hello, World!\n")
    file.write("This is a new line.\n")

# Writing multiple lines
lines = ["Line 1\n", "Line 2\n", "Line 3\n"]
with open("output.txt", "w") as file:
    file.writelines(lines)

# Appending (adds to end of file)
with open("output.txt", "a") as file:
    file.write("This is appended.\n")
```

### File Modes

```python
# 'r'  - Read (default)
# 'w'  - Write (overwrites)
# 'a'  - Append
# 'x'  - Exclusive creation (fails if file exists)
# 'b'  - Binary mode
# 't'  - Text mode (default)
# '+'  - Read and write

# Examples
file = open("data.txt", "r")   # Read text
file = open("data.bin", "rb")  # Read binary
file = open("data.txt", "r+")  # Read and write
file = open("data.txt", "w+")  # Write and read (overwrites)
```

### Working with File Paths

```python
import os

# Check if file exists
if os.path.exists("data.txt"):
    print("File exists")

# Get file size
size = os.path.getsize("data.txt")

# Delete file
if os.path.exists("temp.txt"):
    os.remove("temp.txt")

# List files in directory
files = os.listdir(".")

# Join paths (cross-platform)
path = os.path.join("folder", "subfolder", "file.txt")

# Get current working directory
cwd = os.getcwd()

# Create directory
os.makedirs("new_folder", exist_ok=True)
```

### Working with CSV Files

```python
import csv

# Reading CSV
with open("data.csv", "r") as file:
    csv_reader = csv.reader(file)
    for row in csv_reader:
        print(row)

# Reading CSV with headers
with open("data.csv", "r") as file:
    csv_reader = csv.DictReader(file)
    for row in csv_reader:
        print(row["name"], row["age"])

# Writing CSV
with open("output.csv", "w", newline="") as file:
    csv_writer = csv.writer(file)
    csv_writer.writerow(["Name", "Age", "City"])
    csv_writer.writerow(["Alice", 25, "New York"])
    csv_writer.writerow(["Bob", 30, "San Francisco"])

# Writing CSV with DictWriter
with open("output.csv", "w", newline="") as file:
    fieldnames = ["name", "age", "city"]
    csv_writer = csv.DictWriter(file, fieldnames=fieldnames)
    csv_writer.writeheader()
    csv_writer.writerow({"name": "Alice", "age": 25, "city": "New York"})
```

### Working with JSON Files

```python
import json

# Reading JSON
with open("data.json", "r") as file:
    data = json.load(file)

# Writing JSON
data = {
    "name": "Alice",
    "age": 25,
    "hobbies": ["reading", "coding"]
}

with open("output.json", "w") as file:
    json.dump(data, file, indent=4)

# JSON string to Python object
json_string = '{"name": "Bob", "age": 30}'
data = json.loads(json_string)

# Python object to JSON string
python_dict = {"name": "Charlie", "age": 35}
json_string = json.dumps(python_dict, indent=2)
```

---

## Exception Handling

### Try-Except Blocks

```python
# Basic exception handling
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")

# Multiple exceptions
try:
    number = int(input("Enter a number: "))
    result = 10 / number
except ValueError:
    print("Invalid input!")
except ZeroDivisionError:
    print("Cannot divide by zero!")

# Catching multiple exceptions together
try:
    # Some code
    pass
except (ValueError, TypeError, ZeroDivisionError):
    print("An error occurred!")

# Catching all exceptions
try:
    # Some code
    pass
except Exception as e:
    print(f"Error: {e}")
```

### Try-Except-Else-Finally

```python
# Else block - executes if no exception
try:
    file = open("data.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("File not found!")
else:
    print("File read successfully!")
    file.close()

# Finally block - always executes
try:
    file = open("data.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("File not found!")
finally:
    print("Cleanup code here")
    # file.close() if file exists

# Complete example
def divide_numbers(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("Cannot divide by zero!")
        return None
    except TypeError:
        print("Invalid types!")
        return None
    else:
        print("Division successful!")
        return result
    finally:
        print("Operation completed")
```

### Raising Exceptions

```python
# Raising built-in exceptions
def validate_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative!")
    if age > 150:
        raise ValueError("Age seems unrealistic!")
    return True

try:
    validate_age(-5)
except ValueError as e:
    print(f"Error: {e}")

# Re-raising exceptions
try:
    # Some code
    pass
except Exception as e:
    print(f"Logging error: {e}")
    raise  # Re-raise the same exception
```

### Custom Exceptions

```python
# Define custom exception
class InsufficientFundsError(Exception):
    """Raised when account has insufficient funds"""
    pass

class BankAccount:
    def __init__(self, balance):
        self.balance = balance
    
    def withdraw(self, amount):
        if amount > self.balance:
            raise InsufficientFundsError(
                f"Attempted to withdraw ${amount}, "
                f"but balance is only ${self.balance}"
            )
        self.balance -= amount
        return amount

# Using custom exception
account = BankAccount(100)
try:
    account.withdraw(150)
except InsufficientFundsError as e:
    print(f"Transaction failed: {e}")
```

---

## Modules and Packages

### Importing Modules

```python
# Import entire module
import math
print(math.pi)
print(math.sqrt(16))

# Import specific items
from math import pi, sqrt
print(pi)
print(sqrt(16))

# Import with alias
import math as m
print(m.pi)

from math import sqrt as square_root
print(square_root(16))

# Import everything (not recommended)
from math import *
```

### Creating Your Own Module

```python
# mymodule.py
def greet(name):
    return f"Hello, {name}!"

def add(a, b):
    return a + b

PI = 3.14159

# Using the module
# main.py
import mymodule

print(mymodule.greet("Alice"))
print(mymodule.add(5, 3))
print(mymodule.PI)
```

### Common Built-in Modules

```python
# datetime
from datetime import datetime, timedelta

now = datetime.now()
print(now)

tomorrow = now + timedelta(days=1)
print(tomorrow)

# random
import random

print(random.randint(1, 10))
print(random.choice(["apple", "banana", "cherry"]))
print(random.random())  # 0.0 to 1.0

numbers = [1, 2, 3, 4, 5]
random.shuffle(numbers)

# os
import os

print(os.getcwd())
print(os.listdir("."))
os.makedirs("new_folder", exist_ok=True)

# sys
import sys

print(sys.version)
print(sys.platform)
sys.exit()  # Exit program
```

### Package Structure

```
mypackage/
    __init__.py
    module1.py
    module2.py
    subpackage/
        __init__.py
        module3.py
```

```python
# Using packages
from mypackage import module1
from mypackage.subpackage import module3

# or
import mypackage.module1
import mypackage.subpackage.module3
```

---

## String Formatting Advanced

### f-Strings (Python 3.6+)

```python
name = "Alice"
age = 25
height = 5.6789

# Basic f-string
print(f"My name is {name}")

# Expressions inside f-strings
print(f"Next year I'll be {age + 1}")

# Format specifications
print(f"Height: {height:.2f} feet")  # 2 decimal places
print(f"Age: {age:03d}")             # Zero-padding

# Alignment
print(f"{'Left':<10}|")    # Left-align
print(f"{'Right':>10}|")   # Right-align
print(f"{'Center':^10}|")  # Center-align

# Number formatting
number = 1234567.89
print(f"{number:,.2f}")    # 1,234,567.89
print(f"{number:.2e}")     # 1.23e+06 (scientific)

# Percentage
ratio = 0.75
print(f"{ratio:.1%}")      # 75.0%

# Date formatting
from datetime import datetime
now = datetime.now()
print(f"{now:%Y-%m-%d %H:%M:%S}")
```

### format() Method

```python
# Positional arguments
print("Hello, {}!".format("World"))
print("{0} + {1} = {2}".format(5, 3, 8))
print("{1} - {0} = {2}".format(5, 10, 5))

# Keyword arguments
print("{name} is {age} years old".format(name="Alice", age=25))

# Mixed
print("{0} is {age} years old".format("Bob", age=30))

# Format specifications
print("{:.2f}".format(3.14159))
print("{:>10}".format("right"))
print("{:^10}".format("center"))
```

### Old-Style Formatting

```python
# Using % operator
name = "Alice"
age = 25

print("My name is %s" % name)
print("I am %d years old" % age)
print("%s is %d years old" % (name, age))

# Format specifications
print("Pi: %.2f" % 3.14159)
print("Padded: %05d" % 42)
```

---

## List Comprehensions

### Basic List Comprehensions

```python
# Traditional way
squares = []
for x in range(10):
    squares.append(x**2)

# List comprehension way
squares = [x**2 for x in range(10)]

# With condition
evens = [x for x in range(20) if x % 2 == 0]

# Multiple conditions
nums = [x for x in range(50) if x % 2 == 0 if x % 5 == 0]

# If-else in comprehension
labels = ["even" if x % 2 == 0 else "odd" for x in range(10)]
```

### Nested List Comprehensions

```python
# 2D list (matrix)
matrix = [[i*j for j in range(5)] for i in range(5)]

# Flattening a matrix
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [num for row in matrix for num in row]

# Traditional equivalent
flattened = []
for row in matrix:
    for num in row:
        flattened.append(num)
```

### Dictionary Comprehensions

```python
# Square numbers
squares = {x: x**2 for x in range(6)}

# From two lists
keys = ["a", "b", "c"]
values = [1, 2, 3]
dictionary = {k: v for k, v in zip(keys, values)}

# With condition
even_squares = {x: x**2 for x in range(10) if x % 2 == 0}

# Swapping keys and values
original = {"a": 1, "b": 2, "c": 3}
swapped = {v: k for k, v in original.items()}
```

### Set Comprehensions

```python
# Basic set comprehension
squares = {x**2 for x in range(10)}

# Removes duplicates automatically
mods = {x % 5 for x in range(20)}

# With condition
even_squares = {x**2 for x in range(10) if x % 2 == 0}
```

---

## Practice Projects

### Project 1: Contact Book
```python
contacts = {}

def add_contact(name, phone):
    contacts[name] = phone
    print(f"Contact {name} added!")

def view_contacts():
    if contacts:
        for name, phone in contacts.items():
            print(f"{name}: {phone}")
    else:
        print("No contacts found!")

def search_contact(name):
    if name in contacts:
        print(f"{name}: {contacts[name]}")
    else:
        print("Contact not found!")

# Main program
while True:
    print("\n1. Add Contact")
    print("2. View Contacts")
    print("3. Search Contact")
    print("4. Exit")
    
    choice = input("Enter choice: ")
    
    if choice == "1":
        name = input("Enter name: ")
        phone = input("Enter phone: ")
        add_contact(name, phone)
    elif choice == "2":
        view_contacts()
    elif choice == "3":
        name = input("Enter name to search: ")
        search_contact(name)
    elif choice == "4":
        break
```

### Project 2: Word Counter
```python
def count_words(filename):
    try:
        with open(filename, "r") as file:
            text = file.read()
            words = text.split()
            
            word_count = {}
            for word in words:
                word = word.lower().strip(".,!?;:")
                word_count[word] = word_count.get(word, 0) + 1
            
            # Sort by frequency
            sorted_words = sorted(word_count.items(), 
                                key=lambda x: x[1], 
                                reverse=True)
            
            print("Top 10 words:")
            for word, count in sorted_words[:10]:
                print(f"{word}: {count}")
                
    except FileNotFoundError:
        print("File not found!")

count_words("document.txt")
```

### Project 3: Simple Grade Manager
```python
students = {}

def add_student(name, grades):
    students[name] = grades

def calculate_average(grades):
    return sum(grades) / len(grades) if grades else 0

def display_report():
    for name, grades in students.items():
        avg = calculate_average(grades)
        print(f"{name}: {avg:.2f}")

# Add students
add_student("Alice", [85, 90, 88])
add_student("Bob", [78, 82, 80])
add_student("Charlie", [92, 95, 91])

display_report()
```

---

## Summary

In this pre-intermediate module, you've learned:
- Data structures: Lists, Tuples, Dictionaries, and Sets
- Functions: definition, arguments, lambda functions, scope
- File handling: reading, writing, CSV, JSON
- Exception handling: try-except, custom exceptions
- Modules and packages
- Advanced string formatting
- List/dict/set comprehensions

**Next Steps:** Move on to Intermediate Python to learn about Object-Oriented Programming, decorators, generators, and more advanced concepts.
