# Python Intermediate - Level 3

**Target Audience:** Developers ready for object-oriented and advanced concepts  
**Estimated Learning Time:** 4-6 weeks (40-60 hours)  
**Prerequisites:** Completed Levels 1-2 or equivalent knowledge

---

## 📋 Document Overview

This document covers object-oriented programming, advanced Python features, and Pythonic patterns. You'll learn to design classes, use decorators, create generators, and leverage Python's powerful built-in features. This level transforms you from a Python user to a Python developer.

### What You'll Learn:
- ✅ Object-Oriented Programming (classes, inheritance, polymorphism)
- ✅ Magic methods for operator overloading
- ✅ Decorators for modifying function behavior
- ✅ Generators for memory-efficient iteration
- ✅ Context managers for resource management
- ✅ Regular expressions for pattern matching
- ✅ Advanced date/time handling
- ✅ Specialized collections from collections module
- ✅ Functional programming concepts

### Skills You'll Gain:
- 🏗️ Design and implement classes and objects
- 🎨 Write elegant, Pythonic code
- ⚡ Create memory-efficient programs with generators
- 🔒 Manage resources safely with context managers
- 🔍 Process text with regular expressions
- 🧩 Apply functional programming patterns

---

## 📑 Table of Contents with Section Details

### 1. [Object-Oriented Programming (OOP)](#object-oriented-programming-oop)
**What it covers:** Creating classes, objects, and understanding OOP principles  
**Key concepts:** Classes, objects, __init__, instance/class methods, properties, encapsulation  
**Why it matters:** Organize complex code, model real-world entities, code reuse  
**Time:** 150 minutes  
**Outcome:** Design and implement well-structured classes

### 2. [Inheritance and Polymorphism](#inheritance-and-polymorphism)
**What it covers:** Building class hierarchies and leveraging polymorphism  
**Key concepts:** Single/multiple inheritance, super(), method overriding, MRO, abstract classes  
**Why it matters:** Code reuse, extensibility, interface design  
**Time:** 120 minutes  
**Outcome:** Create flexible, extensible class hierarchies

### 3. [Magic Methods (Dunder Methods)](#magic-methods-dunder-methods)
**What it covers:** Special methods for operator overloading and custom behavior  
**Key concepts:** __str__, __repr__, __eq__, __add__, __len__, __getitem__, __call__  
**Why it matters:** Make custom objects behave like built-in types  
**Time:** 120 minutes  
**Outcome:** Create objects that integrate seamlessly with Python

### 4. [Decorators](#decorators)
**What it covers:** Modifying function behavior without changing source code  
**Key concepts:** Closure concept, basic decorators, functools.wraps, parameterized decorators  
**Why it matters:** Cross-cutting concerns (logging, timing, caching), clean code  
**Time:** 120 minutes  
**Outcome:** Write and use decorators for cleaner, more maintainable code

### 5. [Generators and Iterators](#generators-and-iterators)
**What it covers:** Creating memory-efficient, lazy iterables  
**Key concepts:** Iterator protocol, yield statement, generator expressions, yield from  
**Why it matters:** Handle large datasets efficiently, pipeline processing  
**Time:** 90 minutes  
**Outcome:** Write memory-efficient code for large data processing

### 6. [Context Managers](#context-managers)
**What it covers:** Automatic resource management and setup/teardown  
**Key concepts:** with statement, __enter__/__exit__, @contextmanager decorator  
**Why it matters:** Guarantee cleanup, prevent resource leaks, cleaner code  
**Time:** 60 minutes  
**Outcome:** Manage resources safely and elegantly

### 7. [Regular Expressions](#regular-expressions)
**What it covers:** Pattern matching and text processing  
**Key concepts:** re module, patterns, groups, substitution, common patterns (email, URL)  
**Why it matters:** Text validation, parsing, data extraction  
**Time:** 120 minutes  
**Outcome:** Process and validate text with powerful patterns

### 8. [Working with Dates and Times](#working-with-dates-and-times)
**What it covers:** Date/time manipulation and formatting  
**Key concepts:** datetime module, timedelta, formatting (strftime), parsing (strptime)  
**Why it matters:** Timestamps, scheduling, date calculations  
**Time:** 75 minutes  
**Outcome:** Handle dates and times professionally

### 9. [Collections Module](#collections-module)
**What it covers:** Specialized container datatypes  
**Key concepts:** Counter, defaultdict, OrderedDict, namedtuple, deque, ChainMap  
**Why it matters:** Right tool for the job, cleaner code, better performance  
**Time:** 75 minutes  
**Outcome:** Choose optimal data structures for various tasks

### 10. [Functional Programming](#functional-programming)
**What it covers:** Functional programming concepts in Python  
**Key concepts:** map(), filter(), reduce(), partial functions, higher-order functions, closures  
**Why it matters:** Immutability, composition, cleaner data transformations  
**Time:** 90 minutes  
**Outcome:** Apply functional programming patterns in Python

---

## 🎯 Learning Goals

By completing this level, you will be able to:
- ✅ Design and implement object-oriented programs
- ✅ Use inheritance and polymorphism effectively
- ✅ Create custom objects with magic methods
- ✅ Write and apply decorators
- ✅ Generate data efficiently with generators
- ✅ Manage resources with context managers
- ✅ Process text with regular expressions
- ✅ Handle dates and times properly
- ✅ Use specialized collections appropriately
- ✅ Apply functional programming concepts
- ✅ Write Pythonic, idiomatic code

---

## 🚀 Project Ideas

After completing this level, challenge yourself with:

1. **Task Scheduler with OOP**
   - Task class with inheritance for different task types
   - Context managers for file operations
   - Decorators for logging
   - Skills: OOP, decorators, context managers

2. **Log File Analyzer**
   - Regular expressions for parsing logs
   - Generators for large file processing
   - Counter for statistics
   - Skills: regex, generators, collections

3. **URL Shortener**
   - OOP design for URL management
   - Regex for validation
   - File persistence with context managers
   - Skills: OOP, regex, file handling

4. **Data Pipeline**
   - Generators for data streaming
   - Decorators for validation
   - Functional programming for transformations
   - Skills: generators, decorators, functional programming

---

## 💡 Key Pythonic Concepts

This level focuses on writing **Pythonic** code - code that's not just correct, but elegant and idiomatic:

- **"There should be one-- and preferably only one --obvious way to do it"**
- Use comprehensions instead of loops when appropriate
- Leverage built-in functions and standard library
- Prefer composition over inheritance
- Use duck typing instead of explicit type checking
- "Ask for forgiveness, not permission" (EAFP)

---

## Table of Contents
1. [Object-Oriented Programming (OOP)](#object-oriented-programming-oop)
2. [Inheritance and Polymorphism](#inheritance-and-polymorphism)
3. [Magic Methods (Dunder Methods)](#magic-methods-dunder-methods)
4. [Decorators](#decorators)
5. [Generators and Iterators](#generators-and-iterators)
6. [Context Managers](#context-managers)
7. [Regular Expressions](#regular-expressions)
8. [Working with Dates and Times](#working-with-dates-and-times)
9. [Collections Module](#collections-module)
10. [Functional Programming](#functional-programming)

---

## Object-Oriented Programming (OOP)

### Classes and Objects

```python
# Defining a class
class Dog:
    # Class attribute (shared by all instances)
    species = "Canis familiaris"
    
    # Constructor (initializer)
    def __init__(self, name, age):
        # Instance attributes
        self.name = name
        self.age = age
    
    # Instance method
    def bark(self):
        return f"{self.name} says Woof!"
    
    def get_info(self):
        return f"{self.name} is {self.age} years old"

# Creating objects
dog1 = Dog("Buddy", 3)
dog2 = Dog("Max", 5)

# Accessing attributes
print(dog1.name)        # Buddy
print(dog1.species)     # Canis familiaris

# Calling methods
print(dog1.bark())      # Buddy says Woof!
print(dog2.get_info())  # Max is 5 years old
```

### Instance, Class, and Static Methods

```python
class MyClass:
    class_variable = 0
    
    def __init__(self, value):
        self.instance_variable = value
        MyClass.class_variable += 1
    
    # Instance method (has access to instance via self)
    def instance_method(self):
        return f"Instance value: {self.instance_variable}"
    
    # Class method (has access to class via cls)
    @classmethod
    def class_method(cls):
        return f"Class variable: {cls.class_variable}"
    
    # Static method (no access to instance or class)
    @staticmethod
    def static_method(x, y):
        return x + y

# Usage
obj1 = MyClass(10)
obj2 = MyClass(20)

print(obj1.instance_method())     # Instance value: 10
print(MyClass.class_method())     # Class variable: 2
print(MyClass.static_method(5, 3)) # 8
```

### Properties and Encapsulation

```python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.__balance = balance  # Private attribute
    
    # Getter
    @property
    def balance(self):
        return self.__balance
    
    # Setter
    @balance.setter
    def balance(self, amount):
        if amount < 0:
            raise ValueError("Balance cannot be negative")
        self.__balance = amount
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            return True
        return False
    
    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            return True
        return False

# Usage
account = BankAccount("Alice", 1000)
print(account.balance)      # 1000
account.deposit(500)
print(account.balance)      # 1500
# account.__balance         # AttributeError (private)
account.balance = 2000      # Using setter
print(account.balance)      # 2000
```

### Name Mangling and Privacy

```python
class Example:
    def __init__(self):
        self.public = "I'm public"
        self._protected = "I'm protected (convention)"
        self.__private = "I'm private"
    
    def get_private(self):
        return self.__private

obj = Example()
print(obj.public)           # I'm public
print(obj._protected)       # I'm protected (convention)
# print(obj.__private)      # AttributeError

# Name mangling allows access (but shouldn't be used)
print(obj._Example__private)  # I'm private
print(obj.get_private())      # I'm private
```

### Class Inheritance Example

```python
class Vehicle:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    
    def start(self):
        return f"{self.brand} {self.model} is starting"
    
    def stop(self):
        return f"{self.brand} {self.model} is stopping"

class Car(Vehicle):
    def __init__(self, brand, model, doors):
        super().__init__(brand, model)
        self.doors = doors
    
    def honk(self):
        return "Beep beep!"

class Motorcycle(Vehicle):
    def __init__(self, brand, model, engine_cc):
        super().__init__(brand, model)
        self.engine_cc = engine_cc
    
    def wheelie(self):
        return "Doing a wheelie!"

# Usage
car = Car("Toyota", "Camry", 4)
print(car.start())    # Toyota Camry is starting
print(car.honk())     # Beep beep!

bike = Motorcycle("Honda", "CBR", 1000)
print(bike.start())   # Honda CBR is starting
print(bike.wheelie()) # Doing a wheelie!
```

---

## Inheritance and Polymorphism

### Single Inheritance

```python
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        pass  # Abstract method

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

# Usage
dog = Dog("Buddy")
cat = Cat("Whiskers")
print(dog.speak())  # Buddy says Woof!
print(cat.speak())  # Whiskers says Meow!
```

### Multiple Inheritance

```python
class Flyer:
    def fly(self):
        return "I can fly!"

class Swimmer:
    def swim(self):
        return "I can swim!"

class Duck(Flyer, Swimmer):
    def __init__(self, name):
        self.name = name
    
    def quack(self):
        return f"{self.name} says Quack!"

# Usage
duck = Duck("Donald")
print(duck.fly())    # I can fly!
print(duck.swim())   # I can swim!
print(duck.quack())  # Donald says Quack!
```

### Method Resolution Order (MRO)

```python
class A:
    def method(self):
        return "A"

class B(A):
    def method(self):
        return "B"

class C(A):
    def method(self):
        return "C"

class D(B, C):
    pass

# Check MRO
print(D.mro())
# [<class 'D'>, <class 'B'>, <class 'C'>, <class 'A'>, <class 'object'>]

d = D()
print(d.method())  # B (follows MRO)
```

### Polymorphism

```python
# Duck typing in Python
class Dog:
    def speak(self):
        return "Woof!"

class Cat:
    def speak(self):
        return "Meow!"

class Duck:
    def speak(self):
        return "Quack!"

# Polymorphic function
def animal_sound(animal):
    return animal.speak()

# All work despite being different classes
dog = Dog()
cat = Cat()
duck = Duck()

print(animal_sound(dog))   # Woof!
print(animal_sound(cat))   # Meow!
print(animal_sound(duck))  # Quack!

# Polymorphism with inheritance
animals = [Dog(), Cat(), Duck()]
for animal in animals:
    print(animal.speak())
```

### Abstract Base Classes

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
    
    @abstractmethod
    def perimeter(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14159 * self.radius ** 2
    
    def perimeter(self):
        return 2 * 3.14159 * self.radius

# Cannot instantiate abstract class
# shape = Shape()  # TypeError

# Can instantiate concrete classes
rect = Rectangle(5, 3)
print(f"Area: {rect.area()}")           # 15
print(f"Perimeter: {rect.perimeter()}")  # 16

circle = Circle(4)
print(f"Area: {circle.area():.2f}")      # 50.27
```

---

## Magic Methods (Dunder Methods)

### Common Magic Methods

```python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
    
    # String representation
    def __str__(self):
        return f"'{self.title}' by {self.author}"
    
    # Official representation
    def __repr__(self):
        return f"Book('{self.title}', '{self.author}', {self.pages})"
    
    # Length
    def __len__(self):
        return self.pages
    
    # Equality
    def __eq__(self, other):
        return self.title == other.title and self.author == other.author
    
    # Less than (for sorting)
    def __lt__(self, other):
        return self.pages < other.pages

# Usage
book1 = Book("Python Crash Course", "Eric Matthes", 544)
book2 = Book("Automate the Boring Stuff", "Al Sweigart", 592)

print(str(book1))      # 'Python Crash Course' by Eric Matthes
print(repr(book1))     # Book('Python Crash Course', 'Eric Matthes', 544)
print(len(book1))      # 544
print(book1 == book2)  # False
print(book1 < book2)   # True (fewer pages)

# Sorting works due to __lt__
books = [book2, book1]
books.sort()
print([str(b) for b in books])
```

### Arithmetic Magic Methods

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        return f"Vector({self.x}, {self.y})"
    
    # Addition
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    # Subtraction
    def __sub__(self, other):
        return Vector(self.x - other.x, self.y - other.y)
    
    # Multiplication (scalar)
    def __mul__(self, scalar):
        return Vector(self.x * scalar, self.y * scalar)
    
    # Division
    def __truediv__(self, scalar):
        return Vector(self.x / scalar, self.y / scalar)
    
    # Absolute value (magnitude)
    def __abs__(self):
        return (self.x ** 2 + self.y ** 2) ** 0.5

# Usage
v1 = Vector(2, 3)
v2 = Vector(1, 1)

print(v1 + v2)      # Vector(3, 4)
print(v1 - v2)      # Vector(1, 2)
print(v1 * 2)       # Vector(4, 6)
print(v1 / 2)       # Vector(1.0, 1.5)
print(abs(v1))      # 3.605551275463989
```

### Container Magic Methods

```python
class MyList:
    def __init__(self):
        self.items = []
    
    # Get item
    def __getitem__(self, index):
        return self.items[index]
    
    # Set item
    def __setitem__(self, index, value):
        self.items[index] = value
    
    # Delete item
    def __delitem__(self, index):
        del self.items[index]
    
    # Length
    def __len__(self):
        return len(self.items)
    
    # Contains
    def __contains__(self, item):
        return item in self.items
    
    # Append method
    def append(self, item):
        self.items.append(item)

# Usage
my_list = MyList()
my_list.append(1)
my_list.append(2)
my_list.append(3)

print(my_list[0])        # 1
my_list[1] = 20
print(my_list[1])        # 20
print(len(my_list))      # 3
print(2 in my_list)      # False
print(20 in my_list)     # True
```

### Callable Objects

```python
class Multiplier:
    def __init__(self, factor):
        self.factor = factor
    
    def __call__(self, x):
        return x * self.factor

# Usage
double = Multiplier(2)
triple = Multiplier(3)

print(double(5))    # 10
print(triple(5))    # 15

# Can be used like a regular function
numbers = [1, 2, 3, 4, 5]
doubled = list(map(double, numbers))
print(doubled)      # [2, 4, 6, 8, 10]
```

---

## Decorators

### Function Decorators

```python
# Basic decorator
def my_decorator(func):
    def wrapper():
        print("Before function call")
        func()
        print("After function call")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# Output:
# Before function call
# Hello!
# After function call

# Decorator with arguments
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        result = func(*args, **kwargs)
        print(f"Finished {func.__name__}")
        return result
    return wrapper

@my_decorator
def add(a, b):
    return a + b

result = add(5, 3)
print(f"Result: {result}")
```

### Practical Decorators

```python
import time
import functools

# Timer decorator
def timer(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)
    return "Done"

slow_function()

# Memoization decorator (caching)
def memoize(func):
    cache = {}
    @functools.wraps(func)
    def wrapper(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]
    return wrapper

@memoize
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(100))  # Much faster with memoization

# Validation decorator
def validate_positive(func):
    @functools.wraps(func)
    def wrapper(x):
        if x < 0:
            raise ValueError("Value must be positive")
        return func(x)
    return wrapper

@validate_positive
def square_root(x):
    return x ** 0.5

print(square_root(16))  # 4.0
# print(square_root(-1))  # ValueError
```

### Decorators with Arguments

```python
def repeat(times):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")
# Output:
# Hello, Alice!
# Hello, Alice!
# Hello, Alice!

# Another example
def prefix(prefix_string):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            print(prefix_string)
            return func(*args, **kwargs)
        return wrapper
    return decorator

@prefix(">>> ")
def say_hello(name):
    print(f"Hello, {name}!")

say_hello("Bob")
# Output:
# >>> 
# Hello, Bob!
```

### Class Decorators

```python
# Decorator as a class
class CountCalls:
    def __init__(self, func):
        self.func = func
        self.count = 0
    
    def __call__(self, *args, **kwargs):
        self.count += 1
        print(f"Call {self.count} of {self.func.__name__}")
        return self.func(*args, **kwargs)

@CountCalls
def say_hello():
    print("Hello!")

say_hello()  # Call 1 of say_hello
say_hello()  # Call 2 of say_hello
say_hello()  # Call 3 of say_hello

# Decorating a class
def add_repr(cls):
    def __repr__(self):
        return f"{cls.__name__}({', '.join(f'{k}={v}' for k, v in self.__dict__.items())})"
    cls.__repr__ = __repr__
    return cls

@add_repr
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

person = Person("Alice", 25)
print(person)  # Person(name=Alice, age=25)
```

---

## Generators and Iterators

### Iterators

```python
# Creating an iterator
class Counter:
    def __init__(self, start, end):
        self.current = start
        self.end = end
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current > self.end:
            raise StopIteration
        else:
            self.current += 1
            return self.current - 1

# Usage
counter = Counter(1, 5)
for num in counter:
    print(num)  # 1, 2, 3, 4, 5

# Manual iteration
counter = Counter(1, 3)
print(next(counter))  # 1
print(next(counter))  # 2
print(next(counter))  # 3
# print(next(counter))  # StopIteration
```

### Generators with yield

```python
# Generator function
def countdown(n):
    while n > 0:
        yield n
        n -= 1

# Usage
for num in countdown(5):
    print(num)  # 5, 4, 3, 2, 1

# Generator is an iterator
gen = countdown(3)
print(next(gen))  # 3
print(next(gen))  # 2
print(next(gen))  # 1
# print(next(gen))  # StopIteration

# Fibonacci generator
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

for num in fibonacci(10):
    print(num, end=" ")  # 0 1 1 2 3 5 8 13 21 34
```

### Generator Expressions

```python
# Generator expression (like list comprehension but with parentheses)
squares_gen = (x**2 for x in range(10))

# Memory efficient for large sequences
print(next(squares_gen))  # 0
print(next(squares_gen))  # 1

# Convert to list
squares_list = list((x**2 for x in range(10)))

# Using with functions
total = sum(x**2 for x in range(1000000))  # Memory efficient!

# Filtering
evens = (x for x in range(100) if x % 2 == 0)
```

### Advanced Generator Techniques

```python
# Generator with send()
def echo():
    while True:
        value = yield
        print(f"Received: {value}")

gen = echo()
next(gen)  # Prime the generator
gen.send("Hello")   # Received: Hello
gen.send("World")   # Received: World

# Generator pipeline
def numbers(start, end):
    for i in range(start, end):
        yield i

def squares(nums):
    for num in nums:
        yield num ** 2

def take(n, iterable):
    result = []
    for i, item in enumerate(iterable):
        if i >= n:
            break
        result.append(item)
    return result

# Pipeline usage
pipeline = take(5, squares(numbers(1, 100)))
print(pipeline)  # [1, 4, 9, 16, 25]
```

### yield from

```python
# Delegating to sub-generator
def sub_generator():
    yield 1
    yield 2
    yield 3

def main_generator():
    yield from sub_generator()
    yield 4
    yield 5

for value in main_generator():
    print(value)  # 1, 2, 3, 4, 5

# Flattening nested lists
def flatten(nested_list):
    for item in nested_list:
        if isinstance(item, list):
            yield from flatten(item)
        else:
            yield item

nested = [1, [2, 3, [4, 5]], 6, [7, [8, 9]]]
flat = list(flatten(nested))
print(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

---

## Context Managers

### Using Context Managers

```python
# File handling with context manager
with open("file.txt", "w") as f:
    f.write("Hello, World!")
# File automatically closed

# Multiple context managers
with open("input.txt", "r") as infile, open("output.txt", "w") as outfile:
    content = infile.read()
    outfile.write(content.upper())
```

### Creating Context Managers (Class-based)

```python
class FileManager:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        self.file = None
    
    def __enter__(self):
        self.file = open(self.filename, self.mode)
        return self.file
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.file:
            self.file.close()
        # Return False to propagate exceptions
        return False

# Usage
with FileManager("test.txt", "w") as f:
    f.write("Hello from context manager!")
```

### Creating Context Managers (Decorator-based)

```python
from contextlib import contextmanager

@contextmanager
def file_manager(filename, mode):
    f = open(filename, mode)
    try:
        yield f
    finally:
        f.close()

# Usage
with file_manager("test.txt", "w") as f:
    f.write("Hello from decorated context manager!")

# Timer context manager
@contextmanager
def timer(name):
    import time
    start = time.time()
    yield
    end = time.time()
    print(f"{name} took {end - start:.4f} seconds")

# Usage
with timer("My operation"):
    time.sleep(1)
    print("Doing something...")
```

### Practical Context Manager Examples

```python
# Database connection (conceptual)
@contextmanager
def database_connection(connection_string):
    # Setup
    conn = connect_to_database(connection_string)
    try:
        yield conn
    finally:
        # Teardown
        conn.close()

# with database_connection("mydb") as conn:
#     conn.execute("SELECT * FROM users")

# Temporary directory
import tempfile
import shutil

@contextmanager
def temporary_directory():
    temp_dir = tempfile.mkdtemp()
    try:
        yield temp_dir
    finally:
        shutil.rmtree(temp_dir)

# with temporary_directory() as tmpdir:
#     # Work with temporary directory
#     pass
# Directory automatically deleted

# Suppress exceptions
from contextlib import suppress

with suppress(FileNotFoundError):
    os.remove("nonexistent_file.txt")
# No exception raised if file doesn't exist
```

---

## Regular Expressions

### Basic Pattern Matching

```python
import re

# Search for pattern
text = "The quick brown fox jumps over the lazy dog"
match = re.search(r"fox", text)
if match:
    print("Found:", match.group())  # Found: fox
    print("Position:", match.span())  # Position: (16, 19)

# Find all matches
text = "cat bat rat mat"
matches = re.findall(r"[cbr]at", text)
print(matches)  # ['cat', 'bat', 'rat']

# Match at beginning
if re.match(r"The", text):
    print("Starts with 'The'")

# Full match
if re.fullmatch(r"\d+", "12345"):
    print("Entire string is digits")
```

### Pattern Syntax

```python
# Literal characters
re.search(r"cat", "I have a cat")

# Special characters
# . - any character (except newline)
# ^ - start of string
# $ - end of string
# * - 0 or more repetitions
# + - 1 or more repetitions
# ? - 0 or 1 repetition
# {m,n} - m to n repetitions

# Character classes
re.findall(r"[aeiou]", "hello world")  # ['e', 'o', 'o']
re.findall(r"[0-9]", "Room 101")       # ['1', '0', '1']
re.findall(r"[^0-9]", "Room 101")      # ['R', 'o', 'o', 'm', ' ']

# Predefined character classes
# \d - digit [0-9]
# \D - non-digit
# \w - word character [a-zA-Z0-9_]
# \W - non-word character
# \s - whitespace
# \S - non-whitespace

text = "Phone: 123-456-7890"
phone = re.findall(r"\d{3}-\d{3}-\d{4}", text)
print(phone)  # ['123-456-7890']
```

### Groups and Capturing

```python
# Capturing groups
text = "John Doe, age 30"
pattern = r"(\w+) (\w+), age (\d+)"
match = re.search(pattern, text)

if match:
    print(match.group(0))  # John Doe, age 30 (entire match)
    print(match.group(1))  # John (first group)
    print(match.group(2))  # Doe (second group)
    print(match.group(3))  # 30 (third group)
    print(match.groups())  # ('John', 'Doe', '30')

# Named groups
pattern = r"(?P<first>\w+) (?P<last>\w+), age (?P<age>\d+)"
match = re.search(pattern, text)

if match:
    print(match.group("first"))  # John
    print(match.group("last"))   # Doe
    print(match.group("age"))    # 30
    print(match.groupdict())     # {'first': 'John', 'last': 'Doe', 'age': '30'}

# Non-capturing group
pattern = r"(?:Mr\.|Mrs\.|Ms\.) (\w+)"
match = re.search(pattern, "Ms. Smith")
print(match.group(1))  # Smith
```

### String Manipulation with Regex

```python
# Substitution
text = "The color of my car is red"
new_text = re.sub(r"red", "blue", text)
print(new_text)  # The color of my car is blue

# With function
def uppercase_match(match):
    return match.group(0).upper()

text = "hello world"
new_text = re.sub(r"\w+", uppercase_match, text)
print(new_text)  # HELLO WORLD

# Splitting
text = "apple,banana;cherry:date"
fruits = re.split(r"[,;:]", text)
print(fruits)  # ['apple', 'banana', 'cherry', 'date']

# Replace with groups
text = "2024-01-15"
new_text = re.sub(r"(\d{4})-(\d{2})-(\d{2})", r"\2/\3/\1", text)
print(new_text)  # 01/15/2024
```

### Common Regex Patterns

```python
# Email validation
email_pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
email = "user@example.com"
if re.match(email_pattern, email):
    print("Valid email")

# Phone number
phone_pattern = r"^\+?1?\d{9,15}$"
phone = "+1234567890"
if re.match(phone_pattern, phone):
    print("Valid phone number")

# URL
url_pattern = r"https?://(?:www\.)?[\w.-]+\.[a-zA-Z]{2,}(?:/[\w.-]*)*"
url = "https://www.example.com/path/to/page"
if re.match(url_pattern, url):
    print("Valid URL")

# Extract all URLs from text
text = "Visit https://example.com or http://test.org for more info"
urls = re.findall(r"https?://[\w.-]+\.[\w]{2,}", text)
print(urls)  # ['https://example.com', 'http://test.org']

# Password strength (at least 8 chars, 1 digit, 1 uppercase, 1 lowercase)
password_pattern = r"^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
password = "Secure123"
if re.match(password_pattern, password):
    print("Strong password")
```

---

## Working with Dates and Times

### datetime Module

```python
from datetime import datetime, date, time, timedelta

# Current date and time
now = datetime.now()
print(now)  # 2024-01-15 14:30:45.123456

today = date.today()
print(today)  # 2024-01-15

current_time = datetime.now().time()
print(current_time)  # 14:30:45.123456

# Creating specific dates/times
dt = datetime(2024, 1, 15, 14, 30, 45)
d = date(2024, 1, 15)
t = time(14, 30, 45)

# Accessing components
print(now.year)    # 2024
print(now.month)   # 1
print(now.day)     # 15
print(now.hour)    # 14
print(now.minute)  # 30
print(now.second)  # 45
```

### Date Arithmetic

```python
from datetime import timedelta

# Adding/subtracting time
now = datetime.now()
tomorrow = now + timedelta(days=1)
week_ago = now - timedelta(weeks=1)
future = now + timedelta(days=30, hours=5, minutes=30)

# Difference between dates
date1 = datetime(2024, 1, 1)
date2 = datetime(2024, 12, 31)
difference = date2 - date1
print(difference.days)  # 365

# Time until specific date
target_date = datetime(2025, 1, 1)
time_left = target_date - datetime.now()
print(f"Days until 2025: {time_left.days}")
```

### Formatting and Parsing

```python
# Formatting (strftime)
now = datetime.now()

print(now.strftime("%Y-%m-%d"))              # 2024-01-15
print(now.strftime("%d/%m/%Y"))              # 15/01/2024
print(now.strftime("%B %d, %Y"))             # January 15, 2024
print(now.strftime("%H:%M:%S"))              # 14:30:45
print(now.strftime("%I:%M %p"))              # 02:30 PM
print(now.strftime("%A, %B %d, %Y"))         # Monday, January 15, 2024
print(now.strftime("%Y-%m-%d %H:%M:%S"))     # 2024-01-15 14:30:45

# Parsing (strptime)
date_string = "2024-01-15"
parsed_date = datetime.strptime(date_string, "%Y-%m-%d")

date_string = "January 15, 2024"
parsed_date = datetime.strptime(date_string, "%B %d, %Y")

# Common format codes:
# %Y - Year (4 digits)
# %y - Year (2 digits)
# %m - Month (01-12)
# %B - Month name (January)
# %b - Month abbr (Jan)
# %d - Day (01-31)
# %H - Hour 24h (00-23)
# %I - Hour 12h (01-12)
# %M - Minute (00-59)
# %S - Second (00-59)
# %p - AM/PM
# %A - Weekday (Monday)
# %a - Weekday abbr (Mon)
```

### Time Zones

```python
from datetime import timezone

# UTC time
utc_now = datetime.now(timezone.utc)
print(utc_now)

# Using pytz library (needs installation)
# import pytz

# eastern = pytz.timezone('US/Eastern')
# eastern_time = datetime.now(eastern)

# pacific = pytz.timezone('US/Pacific')
# pacific_time = eastern_time.astimezone(pacific)
```

---

## Collections Module

### Counter

```python
from collections import Counter

# Count elements
words = ["apple", "banana", "apple", "cherry", "banana", "apple"]
counter = Counter(words)
print(counter)  # Counter({'apple': 3, 'banana': 2, 'cherry': 1})

# Most common
print(counter.most_common(2))  # [('apple', 3), ('banana', 2)]

# Operations
letters = Counter("abracadabra")
print(letters)  # Counter({'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1})

# Arithmetic operations
c1 = Counter(['a', 'b', 'c', 'a'])
c2 = Counter(['a', 'b', 'd'])
print(c1 + c2)  # Counter({'a': 3, 'b': 2, 'c': 1, 'd': 1})
print(c1 - c2)  # Counter({'a': 1, 'c': 1})
```

### defaultdict

```python
from collections import defaultdict

# Regular dict would raise KeyError
# dd = {}
# dd['key'].append(1)  # KeyError

# defaultdict provides default value
dd = defaultdict(list)
dd['fruits'].append('apple')
dd['fruits'].append('banana')
dd['vegetables'].append('carrot')
print(dd)  # defaultdict(<class 'list'>, {'fruits': ['apple', 'banana'], 'vegetables': ['carrot']})

# With int (default 0)
dd = defaultdict(int)
text = "hello world"
for char in text:
    dd[char] += 1
print(dd)  # Character frequencies

# With custom default factory
dd = defaultdict(lambda: "Not Found")
dd['key'] = 'value'
print(dd['key'])        # value
print(dd['missing'])    # Not Found
```

### OrderedDict

```python
from collections import OrderedDict

# Maintains insertion order (less relevant in Python 3.7+)
od = OrderedDict()
od['a'] = 1
od['b'] = 2
od['c'] = 3
print(od)

# Move to end
od.move_to_end('a')
print(od)  # OrderedDict([('b', 2), ('c', 3), ('a', 1)])

# Popitem
last_item = od.popitem()  # Removes last item
first_item = od.popitem(last=False)  # Removes first item
```

### namedtuple

```python
from collections import namedtuple

# Create a named tuple type
Point = namedtuple('Point', ['x', 'y'])

# Create instances
p1 = Point(10, 20)
p2 = Point(x=5, y=15)

# Access by name or index
print(p1.x, p1.y)    # 10 20
print(p1[0], p1[1])  # 10 20

# Immutable
# p1.x = 15  # AttributeError

# Useful for CSV, database rows
Person = namedtuple('Person', ['name', 'age', 'city'])
people = [
    Person('Alice', 25, 'New York'),
    Person('Bob', 30, 'San Francisco'),
    Person('Charlie', 35, 'Chicago')
]

for person in people:
    print(f"{person.name} is {person.age} years old")
```

### deque

```python
from collections import deque

# Double-ended queue
dq = deque([1, 2, 3])

# Append and pop from both ends
dq.append(4)        # Right side
dq.appendleft(0)    # Left side
print(dq)           # deque([0, 1, 2, 3, 4])

dq.pop()            # Remove from right
dq.popleft()        # Remove from left
print(dq)           # deque([1, 2, 3])

# Rotate
dq.rotate(1)        # Rotate right
print(dq)           # deque([3, 1, 2])

dq.rotate(-1)       # Rotate left
print(dq)           # deque([1, 2, 3])

# Max length (circular buffer)
dq = deque(maxlen=3)
dq.extend([1, 2, 3])
dq.append(4)        # Removes oldest (1)
print(dq)           # deque([2, 3, 4], maxlen=3)
```

### ChainMap

```python
from collections import ChainMap

# Combine multiple dictionaries
dict1 = {'a': 1, 'b': 2}
dict2 = {'b': 3, 'c': 4}
dict3 = {'c': 5, 'd': 6}

combined = ChainMap(dict1, dict2, dict3)
print(combined['a'])  # 1 (from dict1)
print(combined['b'])  # 2 (from dict1, not dict2)
print(combined['c'])  # 4 (from dict2, not dict3)
print(combined['d'])  # 6 (from dict3)

# Updates affect first dictionary only
combined['e'] = 7
print(dict1)  # {'a': 1, 'b': 2, 'e': 7}
```

---

## Functional Programming

### map(), filter(), reduce()

```python
from functools import reduce

# map() - apply function to all items
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# Multiple iterables
list1 = [1, 2, 3]
list2 = [4, 5, 6]
result = list(map(lambda x, y: x + y, list1, list2))
print(result)  # [5, 7, 9]

# filter() - filter items based on condition
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4, 6, 8, 10]

# reduce() - reduce sequence to single value
numbers = [1, 2, 3, 4, 5]
total = reduce(lambda x, y: x + y, numbers)
print(total)  # 15

product = reduce(lambda x, y: x * y, numbers)
print(product)  # 120

# Find maximum
maximum = reduce(lambda x, y: x if x > y else y, numbers)
print(maximum)  # 5
```

### Partial Functions

```python
from functools import partial

# Create specialized versions of functions
def power(base, exponent):
    return base ** exponent

square = partial(power, exponent=2)
cube = partial(power, exponent=3)

print(square(5))  # 25
print(cube(5))    # 125

# Practical example
from functools import partial

def multiply(x, y):
    return x * y

double = partial(multiply, 2)
triple = partial(multiply, 3)

numbers = [1, 2, 3, 4, 5]
doubled = list(map(double, numbers))
print(doubled)  # [2, 4, 6, 8, 10]
```

### Higher-Order Functions

```python
# Function that returns a function
def make_multiplier(n):
    def multiplier(x):
        return x * n
    return multiplier

times_2 = make_multiplier(2)
times_3 = make_multiplier(3)

print(times_2(5))  # 10
print(times_3(5))  # 15

# Function that takes a function as argument
def apply_twice(func, arg):
    return func(func(arg))

def add_five(x):
    return x + 5

result = apply_twice(add_five, 10)
print(result)  # 20 (10 + 5 + 5)
```

### Closures

```python
def outer_function(x):
    # This variable is "closed over" by the inner function
    def inner_function(y):
        return x + y
    return inner_function

add_5 = outer_function(5)
add_10 = outer_function(10)

print(add_5(3))   # 8
print(add_10(3))  # 13

# Closure example: Counter
def make_counter():
    count = 0
    
    def counter():
        nonlocal count
        count += 1
        return count
    
    return counter

counter = make_counter()
print(counter())  # 1
print(counter())  # 2
print(counter())  # 3
```

---

## Summary

In this intermediate module, you've learned:
- Object-Oriented Programming (classes, inheritance, polymorphism)
- Magic methods for operator overloading
- Decorators for modifying function behavior
- Generators and iterators for memory-efficient iteration
- Context managers for resource management
- Regular expressions for pattern matching
- Working with dates and times
- Advanced collections (Counter, defaultdict, deque, etc.)
- Functional programming concepts

**Next Steps:** Move on to Post-Intermediate Python to learn about advanced OOP patterns, metaclasses, async programming, and more.
