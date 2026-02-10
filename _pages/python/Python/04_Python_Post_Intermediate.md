# Python Post-Intermediate - Level 4

**Target Audience:** Developers building production applications  
**Estimated Learning Time:** 5-7 weeks (50-70 hours)  
**Prerequisites:** Completed Levels 1-3 or solid OOP and Python fundamentals

---

## 📋 Document Overview

This document covers production-level Python development: design patterns, metaprogramming, asynchronous programming, concurrency, testing, and type safety. You'll learn to write scalable, maintainable, well-tested code ready for real-world applications.

### What You'll Learn:
- ✅ Advanced OOP design patterns (Singleton, Factory, Observer, Strategy)
- ✅ Metaclasses for class customization
- ✅ Descriptors for attribute management
- ✅ Async/await for concurrent operations
- ✅ Multithreading and multiprocessing
- ✅ Type hints for code clarity and safety
- ✅ Comprehensive testing strategies
- ✅ Professional logging practices
- ✅ REST API development and consumption
- ✅ Modern data classes

### Skills You'll Gain:
- 🏛️ Apply proven design patterns
- ⚡ Write asynchronous, concurrent code
- 🧪 Test code thoroughly
- 📝 Type-safe, well-documented code
- 🌐 Work with web APIs professionally
- 🔧 Debug and monitor production code

---

## 📑 Table of Contents with Section Details

### 1. [Advanced OOP Patterns](#advanced-oop-patterns)
**What it covers:** Design patterns for common programming challenges  
**Key concepts:** Singleton, Factory, Observer, Strategy, Decorator patterns  
**Why it matters:** Proven solutions, maintainable code, team communication  
**Real-world use:** Config managers, object creation, event systems, algorithm selection  
**Time:** 150 minutes  
**Outcome:** Recognize and implement standard design patterns

### 2. [Metaclasses](#metaclasses)
**What it covers:** Customizing class creation behavior  
**Key concepts:** type as metaclass, __new__ vs __init__, __init_subclass__  
**Why it matters:** Framework development, DSLs, automatic registration  
**Real-world use:** ORMs, plugin systems, validation frameworks  
**Time:** 120 minutes  
**Outcome:** Understand and use metaclasses when appropriate

### 3. [Descriptors](#descriptors)
**What it covers:** Customizing attribute access  
**Key concepts:** __get__, __set__, __delete__, data vs non-data descriptors  
**Why it matters:** Validation, lazy properties, computed attributes  
**Real-world use:** ORM fields, form validation, type checking  
**Time:** 90 minutes  
**Outcome:** Create reusable attribute management logic

### 4. [Asynchronous Programming](#asynchronous-programming)
**What it covers:** Non-blocking, concurrent code with async/await  
**Key concepts:** Coroutines, event loop, tasks, asyncio, async context managers  
**Why it matters:** I/O-bound performance, scalable web services  
**Real-world use:** Web scraping, API calls, websockets, database queries  
**Time:** 180 minutes  
**Outcome:** Write efficient asynchronous applications

### 5. [Multithreading and Multiprocessing](#multithreading-and-multiprocessing)
**What it covers:** Parallelism and concurrency for CPU and I/O bound tasks  
**Key concepts:** Threading, GIL, multiprocessing, locks, queues, concurrent.futures  
**Why it matters:** Performance, utilizing multiple cores, background tasks  
**Real-world use:** Data processing, parallel computations, worker pools  
**Time:** 150 minutes  
**Outcome:** Choose and implement appropriate concurrency model

### 6. [Type Hints and Annotations](#type-hints-and-annotations)
**What it covers:** Static type checking and code documentation  
**Key concepts:** Basic types, generics, Optional, Union, Protocol, mypy  
**Why it matters:** Catch bugs early, better IDE support, documentation  
**Real-world use:** Large codebases, team projects, API contracts  
**Time:** 120 minutes  
**Outcome:** Write type-safe, self-documenting code

### 7. [Testing](#testing)
**What it covers:** Comprehensive testing strategies  
**Key concepts:** unittest, pytest, fixtures, parametrized tests, mocking, coverage  
**Why it matters:** Code reliability, refactoring confidence, documentation  
**Real-world use:** TDD, CI/CD pipelines, regression prevention  
**Time:** 150 minutes  
**Outcome:** Write thorough, maintainable test suites

### 8. [Logging](#logging)
**What it covers:** Professional application logging  
**Key concepts:** Log levels, handlers, formatters, configuration, logger hierarchy  
**Why it matters:** Debugging, monitoring, audit trails  
**Real-world use:** Production debugging, security logging, performance monitoring  
**Time:** 90 minutes  
**Outcome:** Implement comprehensive logging strategy

### 9. [Working with APIs](#working-with-apis)
**What it covers:** Consuming and building REST APIs  
**Key concepts:** requests library, authentication, error handling, session management  
**Why it matters:** Integration with external services, building web services  
**Real-world use:** Third-party integrations, microservices, data retrieval  
**Time:** 120 minutes  
**Outcome:** Professional API integration and development

### 10. [Data Classes](#data-classes)
**What it covers:** Modern Python data containers  
**Key concepts:** @dataclass decorator, field options, frozen, post_init, inheritance  
**Why it matters:** Less boilerplate, immutability, automatic methods  
**Real-world use:** DTOs, configuration objects, domain models  
**Time:** 75 minutes  
**Outcome:** Create clean, maintainable data containers

---

## 🎯 Learning Goals

By completing this level, you will be able to:
- ✅ Apply design patterns to solve common problems
- ✅ Use metaclasses and descriptors for advanced metaprogramming
- ✅ Write asynchronous code for I/O-bound operations
- ✅ Implement proper concurrency for CPU-bound tasks
- ✅ Add type hints for safer, more maintainable code
- ✅ Write comprehensive test suites
- ✅ Implement production-grade logging
- ✅ Build and consume REST APIs
- ✅ Use modern Python features like data classes
- ✅ Write production-ready, professional Python code

---

## 🚀 Production-Ready Projects

Build these projects to demonstrate production-level skills:

1. **Async Web Scraper**
   - Async requests to multiple sites
   - Rate limiting and retry logic
   - Proper error handling and logging
   - Type hints throughout
   - Comprehensive tests
   - Skills: async, testing, logging, type hints

2. **Task Queue System**
   - Producer-consumer with multiprocessing
   - Singleton pattern for queue manager
   - Full test coverage
   - Monitoring with logging
   - Skills: multiprocessing, patterns, testing, logging

3. **API Client Library**
   - Async API client with session management
   - Comprehensive error handling
   - Data classes for responses
   - Type hints for all public APIs
   - Unit and integration tests
   - Skills: async, APIs, data classes, testing, type hints

4. **Microservice Application**
   - FastAPI web service
   - Async database operations
   - Request/response models with data classes
   - Logging and monitoring
   - Full test coverage
   - Type hints throughout
   - Skills: FastAPI, async, databases, testing, logging

---

## 💼 Professional Development Practices

This level emphasizes production-ready code:

### Code Quality:
- ✅ Type hints for all public APIs
- ✅ Comprehensive docstrings
- ✅ Logging at appropriate levels
- ✅ Error handling with specific exceptions
- ✅ Input validation

### Testing Strategy:
- ✅ Unit tests for individual components
- ✅ Integration tests for workflows
- ✅ Mocking for external dependencies
- ✅ >80% code coverage
- ✅ Tests as documentation

### Performance:
- ✅ Choose right concurrency model
- ✅ Profile before optimizing
- ✅ Use async for I/O-bound
- ✅ Use multiprocessing for CPU-bound
- ✅ Cache where appropriate

### Maintainability:
- ✅ Design patterns for common problems
- ✅ Single responsibility principle
- ✅ Dependency injection
- ✅ Configuration management
- ✅ Clear separation of concerns

---

## 📚 Recommended Reading

- "Design Patterns: Elements of Reusable Object-Oriented Software" (Gang of Four)
- "Effective Python" by Brett Slatkin
- "Python Testing with pytest" by Brian Okken
- "High Performance Python" by Micha Gorelick
- FastAPI documentation
- PEP 484 (Type Hints)

---

## Table of Contents
1. [Advanced OOP Patterns](#advanced-oop-patterns)
2. [Metaclasses](#metaclasses)
3. [Descriptors](#descriptors)
4. [Asynchronous Programming](#asynchronous-programming)
5. [Multithreading and Multiprocessing](#multithreading-and-multiprocessing)
6. [Type Hints and Annotations](#type-hints-and-annotations)
7. [Testing](#testing)
8. [Logging](#logging)
9. [Working with APIs](#working-with-apis)
10. [Data Classes](#data-classes)

---

## Advanced OOP Patterns

### Singleton Pattern

```python
class Singleton:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

# Usage
s1 = Singleton()
s2 = Singleton()
print(s1 is s2)  # True

# Thread-safe singleton
import threading

class ThreadSafeSingleton:
    _instance = None
    _lock = threading.Lock()
    
    def __new__(cls):
        if cls._instance is None:
            with cls._lock:
                if cls._instance is None:
                    cls._instance = super().__new__(cls)
        return cls._instance

# Using decorator
def singleton(cls):
    instances = {}
    def get_instance(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]
    return get_instance

@singleton
class MyClass:
    pass
```

### Factory Pattern

```python
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

class AnimalFactory:
    @staticmethod
    def create_animal(animal_type):
        if animal_type == "dog":
            return Dog()
        elif animal_type == "cat":
            return Cat()
        else:
            raise ValueError(f"Unknown animal type: {animal_type}")

# Usage
factory = AnimalFactory()
dog = factory.create_animal("dog")
cat = factory.create_animal("cat")

print(dog.speak())  # Woof!
print(cat.speak())  # Meow!

# Using dictionary for extensibility
class ImprovedAnimalFactory:
    _creators = {}
    
    @classmethod
    def register(cls, animal_type, creator):
        cls._creators[animal_type] = creator
    
    @classmethod
    def create(cls, animal_type):
        creator = cls._creators.get(animal_type)
        if not creator:
            raise ValueError(f"Unknown animal type: {animal_type}")
        return creator()

ImprovedAnimalFactory.register("dog", Dog)
ImprovedAnimalFactory.register("cat", Cat)

animal = ImprovedAnimalFactory.create("dog")
```

### Observer Pattern

```python
class Subject:
    def __init__(self):
        self._observers = []
        self._state = None
    
    def attach(self, observer):
        if observer not in self._observers:
            self._observers.append(observer)
    
    def detach(self, observer):
        self._observers.remove(observer)
    
    def notify(self):
        for observer in self._observers:
            observer.update(self)
    
    @property
    def state(self):
        return self._state
    
    @state.setter
    def state(self, value):
        self._state = value
        self.notify()

class Observer:
    def update(self, subject):
        print(f"Observer: State changed to {subject.state}")

# Usage
subject = Subject()
observer1 = Observer()
observer2 = Observer()

subject.attach(observer1)
subject.attach(observer2)

subject.state = "State 1"  # Both observers notified
subject.state = "State 2"  # Both observers notified
```

### Strategy Pattern

```python
from abc import ABC, abstractmethod

class PaymentStrategy(ABC):
    @abstractmethod
    def pay(self, amount):
        pass

class CreditCardPayment(PaymentStrategy):
    def __init__(self, card_number):
        self.card_number = card_number
    
    def pay(self, amount):
        return f"Paid ${amount} with credit card {self.card_number}"

class PayPalPayment(PaymentStrategy):
    def __init__(self, email):
        self.email = email
    
    def pay(self, amount):
        return f"Paid ${amount} with PayPal account {self.email}"

class CryptoPayment(PaymentStrategy):
    def __init__(self, wallet_address):
        self.wallet_address = wallet_address
    
    def pay(self, amount):
        return f"Paid ${amount} with crypto wallet {self.wallet_address}"

class ShoppingCart:
    def __init__(self, payment_strategy):
        self.payment_strategy = payment_strategy
        self.items = []
    
    def add_item(self, item, price):
        self.items.append((item, price))
    
    def checkout(self):
        total = sum(price for _, price in self.items)
        return self.payment_strategy.pay(total)

# Usage
cart = ShoppingCart(CreditCardPayment("1234-5678-9012-3456"))
cart.add_item("Book", 20)
cart.add_item("Pen", 5)
print(cart.checkout())

# Change strategy
cart.payment_strategy = PayPalPayment("user@example.com")
print(cart.checkout())
```

### Decorator Pattern (not to be confused with Python decorators)

```python
from abc import ABC, abstractmethod

class Coffee(ABC):
    @abstractmethod
    def cost(self):
        pass
    
    @abstractmethod
    def description(self):
        pass

class SimpleCoffee(Coffee):
    def cost(self):
        return 5
    
    def description(self):
        return "Simple Coffee"

class CoffeeDecorator(Coffee):
    def __init__(self, coffee):
        self._coffee = coffee
    
    def cost(self):
        return self._coffee.cost()
    
    def description(self):
        return self._coffee.description()

class MilkDecorator(CoffeeDecorator):
    def cost(self):
        return self._coffee.cost() + 2
    
    def description(self):
        return self._coffee.description() + ", Milk"

class SugarDecorator(CoffeeDecorator):
    def cost(self):
        return self._coffee.cost() + 1
    
    def description(self):
        return self._coffee.description() + ", Sugar"

# Usage
coffee = SimpleCoffee()
print(f"{coffee.description()}: ${coffee.cost()}")

# Add milk
coffee = MilkDecorator(coffee)
print(f"{coffee.description()}: ${coffee.cost()}")

# Add sugar
coffee = SugarDecorator(coffee)
print(f"{coffee.description()}: ${coffee.cost()}")
```

---

## Metaclasses

### Understanding Metaclasses

```python
# Everything in Python is an object, including classes
class MyClass:
    pass

obj = MyClass()

# type of instance is the class
print(type(obj))  # <class '__main__.MyClass'>

# type of class is 'type' (the metaclass)
print(type(MyClass))  # <class 'type'>

# type is a metaclass
print(type(type))  # <class 'type'>
```

### Creating a Metaclass

```python
# Method 1: Using type()
# type(name, bases, dict)
MyClass = type('MyClass', (), {'x': 5, 'greet': lambda self: "Hello"})
obj = MyClass()
print(obj.x)      # 5
print(obj.greet()) # Hello

# Method 2: Inheriting from type
class UpperAttrMetaclass(type):
    def __new__(cls, name, bases, dct):
        # Convert all attribute names to uppercase
        uppercase_attrs = {
            key.upper() if not key.startswith('__') else key: value
            for key, value in dct.items()
        }
        return super().__new__(cls, name, bases, uppercase_attrs)

class MyClass(metaclass=UpperAttrMetaclass):
    x = 5
    y = 10

obj = MyClass()
print(obj.X)  # 5
print(obj.Y)  # 10
# print(obj.x)  # AttributeError
```

### Practical Metaclass Examples

```python
# Singleton metaclass
class SingletonMeta(type):
    _instances = {}
    
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class Database(metaclass=SingletonMeta):
    def __init__(self):
        self.connection = "Connected"

db1 = Database()
db2 = Database()
print(db1 is db2)  # True

# Validation metaclass
class ValidatedMeta(type):
    def __new__(cls, name, bases, dct):
        # Ensure class has required methods
        required_methods = ['validate', 'save']
        for method in required_methods:
            if method not in dct:
                raise TypeError(f"Class {name} must implement {method} method")
        return super().__new__(cls, name, bases, dct)

class User(metaclass=ValidatedMeta):
    def validate(self):
        pass
    
    def save(self):
        pass

# class InvalidUser(metaclass=ValidatedMeta):  # TypeError!
#     pass

# Registry metaclass
class RegistryMeta(type):
    registry = {}
    
    def __new__(cls, name, bases, dct):
        new_class = super().__new__(cls, name, bases, dct)
        cls.registry[name] = new_class
        return new_class

class Plugin(metaclass=RegistryMeta):
    pass

class AudioPlugin(Plugin):
    pass

class VideoPlugin(Plugin):
    pass

print(RegistryMeta.registry)
# {'Plugin': <class 'Plugin'>, 'AudioPlugin': <class 'AudioPlugin'>, ...}
```

### __init_subclass__ (Modern Alternative)

```python
# Python 3.6+ provides simpler alternative to metaclasses
class PluginBase:
    registry = {}
    
    def __init_subclass__(cls, **kwargs):
        super().__init_subclass__(**kwargs)
        cls.registry[cls.__name__] = cls

class AudioPlugin(PluginBase):
    pass

class VideoPlugin(PluginBase):
    pass

print(PluginBase.registry)
# {'AudioPlugin': <class 'AudioPlugin'>, 'VideoPlugin': <class 'VideoPlugin'>}
```

---

## Descriptors

### Understanding Descriptors

```python
# Descriptor protocol: __get__, __set__, __delete__
class Descriptor:
    def __init__(self, name=None):
        self.name = name
    
    def __set_name__(self, owner, name):
        self.name = name
    
    def __get__(self, instance, owner):
        if instance is None:
            return self
        return instance.__dict__.get(self.name)
    
    def __set__(self, instance, value):
        instance.__dict__[self.name] = value
    
    def __delete__(self, instance):
        del instance.__dict__[self.name]

class MyClass:
    attr = Descriptor()

obj = MyClass()
obj.attr = 5      # Calls __set__
print(obj.attr)   # Calls __get__, prints 5
del obj.attr      # Calls __delete__
```

### Validation Descriptor

```python
class ValidatedDescriptor:
    def __init__(self, validator):
        self.validator = validator
        self.name = None
    
    def __set_name__(self, owner, name):
        self.name = f"_{name}"
    
    def __get__(self, instance, owner):
        if instance is None:
            return self
        return getattr(instance, self.name, None)
    
    def __set__(self, instance, value):
        self.validator(value)
        setattr(instance, self.name, value)

def positive_number(value):
    if not isinstance(value, (int, float)):
        raise TypeError("Must be a number")
    if value <= 0:
        raise ValueError("Must be positive")

def non_empty_string(value):
    if not isinstance(value, str):
        raise TypeError("Must be a string")
    if not value.strip():
        raise ValueError("Cannot be empty")

class Product:
    name = ValidatedDescriptor(non_empty_string)
    price = ValidatedDescriptor(positive_number)
    
    def __init__(self, name, price):
        self.name = name
        self.price = price

# Usage
product = Product("Laptop", 999.99)
print(f"{product.name}: ${product.price}")

# Validation in action
# product.price = -10  # ValueError: Must be positive
# product.name = ""    # ValueError: Cannot be empty
```

### Type Checking Descriptor

```python
class TypeChecked:
    def __init__(self, expected_type):
        self.expected_type = expected_type
        self.name = None
    
    def __set_name__(self, owner, name):
        self.name = f"_{name}"
    
    def __get__(self, instance, owner):
        if instance is None:
            return self
        return getattr(instance, self.name, None)
    
    def __set__(self, instance, value):
        if not isinstance(value, self.expected_type):
            raise TypeError(
                f"{self.name[1:]} must be {self.expected_type.__name__}"
            )
        setattr(instance, self.name, value)

class Person:
    name = TypeChecked(str)
    age = TypeChecked(int)
    
    def __init__(self, name, age):
        self.name = name
        self.age = age

person = Person("Alice", 25)
# person.age = "25"  # TypeError: age must be int
```

### Property as Descriptor

```python
# @property is actually a descriptor
class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def radius(self):
        """Get the radius"""
        return self._radius
    
    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Radius must be positive")
        self._radius = value
    
    @property
    def area(self):
        """Calculate area"""
        return 3.14159 * self._radius ** 2
    
    @property
    def circumference(self):
        """Calculate circumference"""
        return 2 * 3.14159 * self._radius

circle = Circle(5)
print(f"Radius: {circle.radius}")
print(f"Area: {circle.area:.2f}")
print(f"Circumference: {circle.circumference:.2f}")

circle.radius = 10
print(f"New area: {circle.area:.2f}")
```

---

## Asynchronous Programming

### async/await Basics

```python
import asyncio

# Async function (coroutine)
async def say_hello():
    print("Hello")
    await asyncio.sleep(1)  # Non-blocking sleep
    print("World")

# Run coroutine
asyncio.run(say_hello())

# Multiple coroutines
async def fetch_data(id):
    print(f"Fetching data {id}...")
    await asyncio.sleep(2)
    return f"Data {id}"

async def main():
    # Sequential (slow)
    # result1 = await fetch_data(1)
    # result2 = await fetch_data(2)
    
    # Concurrent (fast)
    results = await asyncio.gather(
        fetch_data(1),
        fetch_data(2),
        fetch_data(3)
    )
    print(results)

asyncio.run(main())
```

### Creating Async Tasks

```python
async def countdown(name, count):
    for i in range(count, 0, -1):
        print(f"{name}: {i}")
        await asyncio.sleep(1)
    print(f"{name}: Done!")

async def main():
    # Create tasks
    task1 = asyncio.create_task(countdown("Task 1", 3))
    task2 = asyncio.create_task(countdown("Task 2", 5))
    
    # Wait for both tasks
    await task1
    await task2
    
    # Or use gather
    # await asyncio.gather(
    #     countdown("Task 1", 3),
    #     countdown("Task 2", 5)
    # )

asyncio.run(main())
```

### Async Context Managers

```python
class AsyncResource:
    async def __aenter__(self):
        print("Acquiring resource")
        await asyncio.sleep(1)
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        print("Releasing resource")
        await asyncio.sleep(1)
    
    async def query(self, data):
        print(f"Querying: {data}")
        await asyncio.sleep(1)
        return f"Result: {data}"

async def main():
    async with AsyncResource() as resource:
        result = await resource.query("data")
        print(result)

asyncio.run(main())
```

### Async Generators

```python
async def async_range(count):
    for i in range(count):
        await asyncio.sleep(0.5)
        yield i

async def main():
    async for num in async_range(5):
        print(num)

asyncio.run(main())

# Async comprehension
async def squares():
    result = [i**2 async for i in async_range(5)]
    print(result)

asyncio.run(squares())
```

### Practical Example: Web Scraping

```python
import asyncio
import aiohttp  # pip install aiohttp

async def fetch_url(session, url):
    async with session.get(url) as response:
        return await response.text()

async def fetch_multiple_urls(urls):
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_url(session, url) for url in urls]
        results = await asyncio.gather(*tasks)
        return results

# Usage
urls = [
    'https://api.example.com/data1',
    'https://api.example.com/data2',
    'https://api.example.com/data3'
]

# results = asyncio.run(fetch_multiple_urls(urls))
```

### Error Handling in Async Code

```python
async def risky_operation():
    await asyncio.sleep(1)
    raise ValueError("Something went wrong!")

async def main():
    try:
        await risky_operation()
    except ValueError as e:
        print(f"Caught error: {e}")

asyncio.run(main())

# With gather and return_exceptions
async def may_fail(x):
    if x == 2:
        raise ValueError(f"Error with {x}")
    return x * 2

async def main():
    results = await asyncio.gather(
        may_fail(1),
        may_fail(2),
        may_fail(3),
        return_exceptions=True
    )
    
    for result in results:
        if isinstance(result, Exception):
            print(f"Error: {result}")
        else:
            print(f"Success: {result}")

asyncio.run(main())
```

---

## Multithreading and Multiprocessing

### Threading Basics

```python
import threading
import time

def worker(name, duration):
    print(f"{name} starting")
    time.sleep(duration)
    print(f"{name} finished")

# Create threads
thread1 = threading.Thread(target=worker, args=("Thread 1", 2))
thread2 = threading.Thread(target=worker, args=("Thread 2", 3))

# Start threads
thread1.start()
thread2.start()

# Wait for completion
thread1.join()
thread2.join()

print("All threads completed")
```

### Thread Synchronization

```python
import threading

# Lock for thread-safe operations
lock = threading.Lock()
counter = 0

def increment():
    global counter
    for _ in range(100000):
        with lock:  # or lock.acquire() ... lock.release()
            counter += 1

threads = [threading.Thread(target=increment) for _ in range(10)]

for thread in threads:
    thread.start()

for thread in threads:
    thread.join()

print(f"Final counter: {counter}")  # Should be 1000000

# RLock (Reentrant Lock)
rlock = threading.RLock()

def recursive_function(n):
    with rlock:
        if n > 0:
            print(n)
            recursive_function(n - 1)

# Semaphore
semaphore = threading.Semaphore(3)  # Allow 3 threads at a time

def limited_access(id):
    with semaphore:
        print(f"Thread {id} accessing resource")
        time.sleep(2)
        print(f"Thread {id} releasing resource")

threads = [threading.Thread(target=limited_access, args=(i,)) for i in range(10)]
for thread in threads:
    thread.start()
```

### Thread-Safe Queue

```python
import queue
import threading
import time

def producer(q):
    for i in range(5):
        print(f"Producing {i}")
        q.put(i)
        time.sleep(1)
    q.put(None)  # Sentinel value

def consumer(q):
    while True:
        item = q.get()
        if item is None:
            break
        print(f"Consuming {item}")
        time.sleep(2)
        q.task_done()

q = queue.Queue()

prod_thread = threading.Thread(target=producer, args=(q,))
cons_thread = threading.Thread(target=consumer, args=(q,))

prod_thread.start()
cons_thread.start()

prod_thread.join()
cons_thread.join()
```

### Multiprocessing Basics

```python
import multiprocessing
import time

def worker(name, duration):
    print(f"{name} starting")
    time.sleep(duration)
    print(f"{name} finished")

if __name__ == '__main__':
    # Create processes
    process1 = multiprocessing.Process(target=worker, args=("Process 1", 2))
    process2 = multiprocessing.Process(target=worker, args=("Process 2", 3))
    
    # Start processes
    process1.start()
    process2.start()
    
    # Wait for completion
    process1.join()
    process2.join()
    
    print("All processes completed")
```

### Process Pool

```python
from multiprocessing import Pool

def square(x):
    return x * x

if __name__ == '__main__':
    with Pool(processes=4) as pool:
        # Map function to list of inputs
        results = pool.map(square, range(10))
        print(results)
        
        # Async map
        async_result = pool.map_async(square, range(10))
        results = async_result.get()
        
        # Apply (single input)
        result = pool.apply(square, (5,))
        print(result)

# Using starmap for multiple arguments
def multiply(x, y):
    return x * y

if __name__ == '__main__':
    with Pool(processes=4) as pool:
        results = pool.starmap(multiply, [(2, 3), (4, 5), (6, 7)])
        print(results)  # [6, 20, 42]
```

### Sharing Data Between Processes

```python
from multiprocessing import Process, Value, Array, Manager

def increment_value(shared_val):
    for _ in range(1000):
        with shared_val.get_lock():
            shared_val.value += 1

def fill_array(shared_arr):
    for i in range(len(shared_arr)):
        shared_arr[i] = i * 2

if __name__ == '__main__':
    # Shared value
    shared_val = Value('i', 0)  # 'i' for integer
    
    processes = [Process(target=increment_value, args=(shared_val,)) for _ in range(4)]
    
    for p in processes:
        p.start()
    
    for p in processes:
        p.join()
    
    print(f"Final value: {shared_val.value}")
    
    # Shared array
    shared_arr = Array('i', 5)  # Array of 5 integers
    p = Process(target=fill_array, args=(shared_arr,))
    p.start()
    p.join()
    print(list(shared_arr))  # [0, 2, 4, 6, 8]
    
    # Manager for complex data structures
    with Manager() as manager:
        shared_dict = manager.dict()
        shared_list = manager.list()
        
        def add_to_dict(d, key, value):
            d[key] = value
        
        p = Process(target=add_to_dict, args=(shared_dict, 'key', 'value'))
        p.start()
        p.join()
        
        print(dict(shared_dict))
```

### Concurrent.futures

```python
from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor, as_completed
import time

def task(n):
    time.sleep(1)
    return n * n

# Thread pool
with ThreadPoolExecutor(max_workers=4) as executor:
    # Submit individual tasks
    futures = [executor.submit(task, i) for i in range(5)]
    
    # Get results as they complete
    for future in as_completed(futures):
        print(future.result())
    
    # Or use map
    results = executor.map(task, range(5))
    print(list(results))

# Process pool (better for CPU-intensive tasks)
with ProcessPoolExecutor(max_workers=4) as executor:
    results = executor.map(task, range(5))
    print(list(results))
```

---

## Type Hints and Annotations

### Basic Type Hints

```python
def greet(name: str) -> str:
    return f"Hello, {name}!"

def add(a: int, b: int) -> int:
    return a + b

def divide(a: float, b: float) -> float:
    return a / b

# Variable annotations
age: int = 25
name: str = "Alice"
is_active: bool = True
```

### Collection Types

```python
from typing import List, Dict, Set, Tuple, Optional, Union

def process_numbers(numbers: List[int]) -> int:
    return sum(numbers)

def get_user_info() -> Dict[str, Union[str, int]]:
    return {"name": "Alice", "age": 25}

def get_coordinates() -> Tuple[float, float]:
    return (10.5, 20.3)

def find_item(items: Set[str], target: str) -> bool:
    return target in items

# Optional (can be value or None)
def find_user(user_id: int) -> Optional[str]:
    if user_id == 1:
        return "Alice"
    return None

# Union (one of multiple types)
def process_data(data: Union[int, str, List[int]]) -> str:
    return str(data)
```

### Advanced Type Hints

```python
from typing import Callable, Any, TypeVar, Generic, Protocol

# Callable
def apply_operation(x: int, operation: Callable[[int], int]) -> int:
    return operation(x)

result = apply_operation(5, lambda x: x * 2)

# TypeVar for generic types
T = TypeVar('T')

def first_element(items: List[T]) -> T:
    return items[0]

# Generic classes
class Stack(Generic[T]):
    def __init__(self):
        self._items: List[T] = []
    
    def push(self, item: T) -> None:
        self._items.append(item)
    
    def pop(self) -> T:
        return self._items.pop()

stack = Stack[int]()
stack.push(1)
stack.push(2)

# Protocol (structural subtyping)
class Drawable(Protocol):
    def draw(self) -> None:
        ...

def render(obj: Drawable) -> None:
    obj.draw()

class Circle:
    def draw(self) -> None:
        print("Drawing circle")

circle = Circle()
render(circle)  # Works because Circle has draw() method
```

### Type Aliases

```python
# Simple aliases
UserId = int
Username = str

def get_user(user_id: UserId) -> Username:
    return "Alice"

# Complex aliases
from typing import List, Tuple, Dict

Coordinate = Tuple[float, float]
Path = List[Coordinate]
UserData = Dict[str, Union[str, int, List[str]]]

def calculate_distance(path: Path) -> float:
    return 0.0  # Implementation

def process_user(data: UserData) -> None:
    pass
```

### Type Checking with mypy

```python
# Install: pip install mypy
# Run: mypy script.py

def add(a: int, b: int) -> int:
    return a + b

result = add(5, 3)        # OK
# result = add(5, "3")    # mypy error

# reveal_type for debugging (mypy only)
def process(value: int) -> str:
    reveal_type(value)    # mypy shows: int
    return str(value)
```

---

## Testing

### unittest

```python
import unittest

def add(a, b):
    return a + b

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

class TestMathOperations(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(2, 3), 5)
        self.assertEqual(add(-1, 1), 0)
        self.assertEqual(add(0, 0), 0)
    
    def test_divide(self):
        self.assertEqual(divide(10, 2), 5)
        self.assertAlmostEqual(divide(10, 3), 3.333, places=3)
        
        # Test exception
        with self.assertRaises(ValueError):
            divide(10, 0)
    
    def setUp(self):
        """Run before each test"""
        self.test_data = [1, 2, 3, 4, 5]
    
    def tearDown(self):
        """Run after each test"""
        pass
    
    def test_with_setup_data(self):
        self.assertEqual(len(self.test_data), 5)

if __name__ == '__main__':
    unittest.main()
```

### pytest

```python
# Install: pip install pytest
# Run: pytest test_file.py

def add(a, b):
    return a + b

# Test functions (no class needed)
def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0

def test_divide():
    assert divide(10, 2) == 5
    
    # Test exception
    import pytest
    with pytest.raises(ValueError):
        divide(10, 0)

# Fixtures
import pytest

@pytest.fixture
def sample_data():
    return [1, 2, 3, 4, 5]

def test_with_fixture(sample_data):
    assert len(sample_data) == 5
    assert sum(sample_data) == 15

# Parametrized tests
@pytest.mark.parametrize("a,b,expected", [
    (2, 3, 5),
    (0, 0, 0),
    (-1, 1, 0),
    (10, -5, 5)
])
def test_add_parametrized(a, b, expected):
    assert add(a, b) == expected
```

### Mocking

```python
from unittest.mock import Mock, patch, MagicMock

# Mock object
mock = Mock()
mock.method.return_value = 42
print(mock.method())  # 42

# Track calls
mock.method(1, 2, key='value')
mock.method.assert_called_once_with(1, 2, key='value')

# Patch function
def get_data():
    # Expensive API call
    return "real data"

def process():
    data = get_data()
    return data.upper()

with patch('__main__.get_data') as mock_get_data:
    mock_get_data.return_value = "mock data"
    result = process()
    print(result)  # MOCK DATA

# Patch as decorator
@patch('__main__.get_data')
def test_process(mock_get_data):
    mock_get_data.return_value = "mock data"
    result = process()
    assert result == "MOCK DATA"

# Mock class
class Database:
    def connect(self):
        pass
    
    def query(self, sql):
        pass

mock_db = Mock(spec=Database)
mock_db.query.return_value = [{'id': 1, 'name': 'Alice'}]
```

### Test Coverage

```python
# Install: pip install pytest-cov
# Run: pytest --cov=mymodule tests/

# Or with unittest
# pip install coverage
# coverage run -m unittest discover
# coverage report
# coverage html  # Generate HTML report
```

---

## Logging

### Basic Logging

```python
import logging

# Basic configuration
logging.basicConfig(level=logging.DEBUG)

# Log messages
logging.debug("This is a debug message")
logging.info("This is an info message")
logging.warning("This is a warning message")
logging.error("This is an error message")
logging.critical("This is a critical message")

# Logging levels (in order):
# DEBUG < INFO < WARNING < ERROR < CRITICAL
```

### Configuring Logging

```python
import logging

# Detailed configuration
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S',
    filename='app.log',
    filemode='w'  # 'w' overwrites, 'a' appends
)

logger = logging.getLogger(__name__)

logger.debug("Debug message")
logger.info("Info message")
```

### Multiple Handlers

```python
import logging

# Create logger
logger = logging.getLogger('myapp')
logger.setLevel(logging.DEBUG)

# Create formatters
formatter = logging.Formatter(
    '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

# File handler
file_handler = logging.FileHandler('app.log')
file_handler.setLevel(logging.ERROR)
file_handler.setFormatter(formatter)

# Console handler
console_handler = logging.StreamHandler()
console_handler.setLevel(logging.DEBUG)
console_handler.setFormatter(formatter)

# Add handlers to logger
logger.addHandler(file_handler)
logger.addHandler(console_handler)

# Use logger
logger.debug("This goes to console only")
logger.error("This goes to both console and file")
```

### Logging in Modules

```python
# module.py
import logging

logger = logging.getLogger(__name__)

def some_function():
    logger.info("Function called")
    try:
        # Some operation
        pass
    except Exception as e:
        logger.error(f"Error occurred: {e}", exc_info=True)

# main.py
import logging
import module

logging.basicConfig(level=logging.INFO)
module.some_function()
```

### Advanced Logging Configuration

```python
import logging.config

LOGGING_CONFIG = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'standard': {
            'format': '%(asctime)s [%(levelname)s] %(name)s: %(message)s'
        },
    },
    'handlers': {
        'default': {
            'level': 'INFO',
            'formatter': 'standard',
            'class': 'logging.StreamHandler',
        },
        'file': {
            'level': 'DEBUG',
            'formatter': 'standard',
            'class': 'logging.FileHandler',
            'filename': 'app.log',
            'mode': 'a',
        },
    },
    'loggers': {
        '': {  # root logger
            'handlers': ['default', 'file'],
            'level': 'DEBUG',
            'propagate': True
        },
    }
}

logging.config.dictConfig(LOGGING_CONFIG)
logger = logging.getLogger(__name__)
```

---

## Working with APIs

### Requests Library

```python
import requests

# GET request
response = requests.get('https://api.example.com/data')
print(response.status_code)  # 200
print(response.text)         # Response body as string
print(response.json())       # Parse JSON response

# POST request
data = {'key': 'value'}
response = requests.post('https://api.example.com/create', json=data)

# Headers
headers = {'Authorization': 'Bearer token123'}
response = requests.get('https://api.example.com/protected', headers=headers)

# Query parameters
params = {'search': 'python', 'limit': 10}
response = requests.get('https://api.example.com/search', params=params)
# URL: https://api.example.com/search?search=python&limit=10

# Timeouts
try:
    response = requests.get('https://api.example.com/data', timeout=5)
except requests.Timeout:
    print("Request timed out")

# Error handling
try:
    response = requests.get('https://api.example.com/data')
    response.raise_for_status()  # Raises HTTPError for bad status codes
except requests.HTTPError as e:
    print(f"HTTP Error: {e}")
except requests.ConnectionError:
    print("Connection error")
except requests.RequestException as e:
    print(f"Error: {e}")
```

### REST API Example

```python
class APIClient:
    def __init__(self, base_url, api_key):
        self.base_url = base_url
        self.headers = {
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json'
        }
    
    def get(self, endpoint, params=None):
        url = f"{self.base_url}/{endpoint}"
        response = requests.get(url, headers=self.headers, params=params)
        response.raise_for_status()
        return response.json()
    
    def post(self, endpoint, data):
        url = f"{self.base_url}/{endpoint}"
        response = requests.post(url, headers=self.headers, json=data)
        response.raise_for_status()
        return response.json()
    
    def put(self, endpoint, data):
        url = f"{self.base_url}/{endpoint}"
        response = requests.put(url, headers=self.headers, json=data)
        response.raise_for_status()
        return response.json()
    
    def delete(self, endpoint):
        url = f"{self.base_url}/{endpoint}"
        response = requests.delete(url, headers=self.headers)
        response.raise_for_status()
        return True

# Usage
client = APIClient('https://api.example.com', 'your_api_key')
users = client.get('users', params={'limit': 10})
new_user = client.post('users', {'name': 'Alice', 'email': 'alice@example.com'})
```

### Session Management

```python
# Reuse TCP connection
with requests.Session() as session:
    session.headers.update({'Authorization': 'Bearer token123'})
    
    # First request
    response = session.get('https://api.example.com/data1')
    
    # Second request (reuses connection)
    response = session.get('https://api.example.com/data2')
    
    # Cookies are automatically handled
    response = session.get('https://api.example.com/protected')
```

---

## Data Classes

### Basic Data Class

```python
from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int
    city: str = "Unknown"  # Default value

# Automatic __init__, __repr__, __eq__
person = Person("Alice", 25, "New York")
print(person)  # Person(name='Alice', age=25, city='New York')

person2 = Person("Alice", 25, "New York")
print(person == person2)  # True

# Access attributes
print(person.name)  # Alice
person.age = 26
```

### Data Class Features

```python
from dataclasses import dataclass, field
from typing import List

@dataclass(frozen=True)  # Immutable
class ImmutablePerson:
    name: str
    age: int

# person = ImmutablePerson("Alice", 25)
# person.age = 26  # FrozenInstanceError

@dataclass(order=True)  # Enable comparison operators
class Student:
    name: str
    grade: float
    
students = [Student("Bob", 85), Student("Alice", 92), Student("Charlie", 78)]
students.sort()  # Sorts by grade

@dataclass
class ShoppingCart:
    items: List[str] = field(default_factory=list)  # Mutable default
    total: float = 0.0

cart1 = ShoppingCart()
cart2 = ShoppingCart()
cart1.items.append("apple")
print(cart1.items)  # ['apple']
print(cart2.items)  # [] (not shared!)
```

### Post-Init Processing

```python
from dataclasses import dataclass

@dataclass
class Rectangle:
    width: float
    height: float
    area: float = field(init=False)  # Not in __init__
    
    def __post_init__(self):
        self.area = self.width * self.height

rect = Rectangle(5, 3)
print(rect.area)  # 15.0

# Validation
@dataclass
class Product:
    name: str
    price: float
    
    def __post_init__(self):
        if self.price < 0:
            raise ValueError("Price cannot be negative")

# product = Product("Item", -10)  # ValueError
```

### Advanced Data Class Patterns

```python
from dataclasses import dataclass, field, asdict, astuple
from typing import List, ClassVar

@dataclass
class Employee:
    name: str
    salary: float
    department: str
    
    # Class variable (not instance attribute)
    company: ClassVar[str] = "Acme Inc"
    
    # Excluded from comparison
    id: int = field(compare=False)
    
    # Excluded from repr
    password: str = field(repr=False, default="")

emp = Employee("Alice", 50000, "Engineering", 1, "secret")
print(emp)  # password not shown

# Convert to dict/tuple
print(asdict(emp))
print(astuple(emp))

# Inheritance
@dataclass
class Manager(Employee):
    team_size: int = 0
```

---

## Summary

In this post-intermediate module, you've learned:
- Advanced OOP patterns (Singleton, Factory, Observer, Strategy, Decorator)
- Metaclasses for class creation customization
- Descriptors for attribute access control
- Asynchronous programming with async/await
- Multithreading and multiprocessing for concurrency
- Type hints and annotations for better code documentation
- Testing with unittest and pytest
- Logging for application monitoring
- Working with REST APIs
- Data classes for cleaner data structures

**Next Steps:** Move on to Advanced Python to learn about performance optimization, advanced Python internals, design patterns, and specialized libraries.
