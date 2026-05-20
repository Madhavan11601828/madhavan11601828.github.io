---
title: "Object-Oriented Programming in Python"
author: "Mangena Venu Madhavan"
date: 2026-06-09
tags: [Python, Programming, Beginner, Tutorial]
categories: [python-programming]
series: "Python Programming"
article_number: 4
---

## Key Takeaways

- You will define classes that bundle data (attributes) and behaviour (methods) into one unit
- You will create multiple independent objects from a single class definition
- You will use inheritance to extend an existing class without duplicating code
- You will understand how AI libraries like LangChain and scikit-learn use OOP internally
- You will know when OOP improves code and when it adds unnecessary complexity
- You will spot the two most common OOP bugs before they cause problems in production

---

## Who This Is For & Prerequisites

This article is for Python developers who have completed Articles 1–3 of this series and are ready to write code that organises both data and behaviour together.

**You must have read:**
- Article 1: Variables and data types
- Article 2: Control flow — if/else, loops, functions
- Article 3: Data structures — lists, tuples, dicts, sets

**You do NOT need:**
- Any prior OOP knowledge
- Computer science theory on design patterns

No pip install required. No API keys. No cost.

---

## What You Will Build

By the end of this article you will have:
- An `AIModel` base class that tracks model name, version, and prediction count
- A `TextClassifier` subclass that extends `AIModel` with text-specific behaviour
- A `SentimentAnalyser` subclass that further specialises for sentiment tasks
- A script that creates multiple model instances and calls methods on each

Expected final output when you run the complete script:

```
Model: TextClassifier v1.2
Predicting: "Python is amazing"
Result: positive (confidence: 0.94)
Total predictions: 1

Model: SentimentAnalyser v2.0
Predicting: "This API is broken"
Result: negative (confidence: 0.87)
Total predictions: 1

Registry has 2 models
Models: ['text-classifier-v1', 'sentiment-v2']
```

---

## Problem Statement

When a Python project grows beyond a handful of scripts, functions alone become hard to manage. A data processing pipeline might have 15 functions, all operating on the same set of variables — model name, version, call count, configuration. Passing these variables into every function call is repetitive and error-prone. When one function modifies a shared variable and another function depends on its old value, tracking down the bug takes hours.

OOP solves this by keeping data and the functions that operate on it together in one place — a class. Every AI library you will work with is built this way: a `Pipeline` object knows its own steps, a `Chain` object knows its own model and prompt, a `VectorStore` object manages its own index.

---

## Concept Simply

A class is a blueprint. An object is a house built from that blueprint. You write the blueprint once — walls, doors, windows — and you can build as many houses as you need. Each house is independent: painting one red does not affect the others, even though they came from the same plan.

In Python: the class defines what attributes (data) and methods (functions) every object will have. Each object you create from the class has its own copy of those attributes.

| Procedural approach | OOP approach |
|---|---|
| 10 functions operating on shared global variables | One class encapsulating all related data and behaviour |
| Must pass model name into every function call | `self.model_name` is always available inside the class |
| Adding a second model means duplicating all functions | Inheritance reuses the base class, overrides only what changes |
| No clear ownership of data | Each object owns its own state |

---

## Core Components

### 1. Defining a Class

```python
class AIModel:
    def __init__(self, name, version):
        self.name = name
        self.version = version
        self.prediction_count = 0

    def info(self):
        return f"Model: {self.name} v{self.version}"
```

`class` starts the definition. `__init__` is the constructor — Python calls it automatically when you create an object. `self` refers to the specific object being created or used. Every attribute you want to store on the object must be assigned to `self.something`.

### 2. Creating Objects (Instances)

```python
model = AIModel("TextClassifier", "1.2")
print(model.info())
print(model.name)
print(model.prediction_count)
```

Each time you call the class like a function, Python creates a new independent object. `model.info()` calls the method on that specific object.

### 3. Instance Methods

Methods are functions defined inside a class. They always take `self` as their first parameter, which gives them access to the object's attributes.

```python
class AIModel:
    def __init__(self, name, version):
        self.name = name
        self.version = version
        self.prediction_count = 0

    def predict(self, input_text):
        self.prediction_count += 1
        return f"Processed: {input_text}"

    def stats(self):
        return f"Total predictions: {self.prediction_count}"
```

### 4. Inheritance

A subclass inherits all attributes and methods from its parent class. Use `super().__init__()` to call the parent constructor before adding subclass-specific setup.

```python
class TextClassifier(AIModel):
    def __init__(self, name, version, categories):
        super().__init__(name, version)
        self.categories = categories

    def classify(self, text):
        self.prediction_count += 1
        return f"Category: {self.categories[0]}"
```

`TextClassifier` inherits `name`, `version`, `prediction_count`, `info()`, and `stats()` from `AIModel`. It adds `categories` and the `classify()` method.

### 5. Method Overriding

A subclass can replace a parent method with its own implementation.

```python
class SentimentAnalyser(AIModel):
    def predict(self, text):
        self.prediction_count += 1
        sentiment = "positive" if "amazing" in text.lower() else "negative"
        confidence = 0.94 if sentiment == "positive" else 0.87
        return f"Result: {sentiment} (confidence: {confidence})"
```

When you call `model.predict(text)` on a `SentimentAnalyser` object, Python uses this version, not the parent's.

![OOP Class Hierarchy — AIModel at top with two arrows going down to TextClassifier and SentimentAnalyser, each showing which attributes and methods are inherited vs added](/assets/images/python-oop-class-hierarchy.png)

---

## Design Trade-offs

| Decision | Option A | Option B | When to choose |
|---|---|---|---|
| Class vs function | Write a class | Write a plain function | Use class when the function needs to maintain state across calls; function otherwise |
| Inheritance vs composition | Inherit from a base class | Store another object as an attribute | Inherit for "is-a" relationships (TextClassifier is-a AIModel); compose for "has-a" (Pipeline has-a Model) |
| One large class vs many small classes | All logic in one class | Split into focused single-purpose classes | Split when a class exceeds ~200 lines or handles more than one concern |
| `__init__` vs class methods | Set up in `__init__` | Add a `@classmethod` factory | Use factory when you need multiple ways to create an object from different input types |
| Mutable default argument | `def __init__(self, items=[])` | `def __init__(self, items=None)` | Always use `None` and assign `[]` inside — shared mutable default is a notorious Python bug |

---

## Hands-on Tutorial

### Step 1: Minimal working class

```python
class AIModel:
    def __init__(self, name, version):
        self.name = name
        self.version = version

model = AIModel("Classifier", "1.0")
print(model.name)
print(model.version)
```

Expected output:
```
Classifier
1.0
```

---

### Step 2: Add a method and track state

```python
class AIModel:
    def __init__(self, name, version):
        self.name = name
        self.version = version
        self.prediction_count = 0

    def predict(self, text):
        self.prediction_count += 1
        return f"Processed: {text}"

    def stats(self):
        return f"Total predictions: {self.prediction_count}"

model = AIModel("Classifier", "1.0")
print(model.predict("hello world"))
print(model.predict("second input"))
print(model.stats())
```

Expected output:
```
Processed: hello world
Processed: second input
Total predictions: 2
```

---

### Step 3: Create a subclass with inheritance

```python
class TextClassifier(AIModel):
    def __init__(self, name, version):
        super().__init__(name, version)

    def predict(self, text):
        self.prediction_count += 1
        sentiment = "positive" if any(w in text.lower() for w in ["great", "amazing", "love"]) else "neutral"
        return f"Result: {sentiment}"

classifier = TextClassifier("TextClassifier", "1.2")
print(f"Model: {classifier.name} v{classifier.version}")
print(classifier.predict("Python is amazing"))
print(classifier.stats())
```

Expected output:
```
Model: TextClassifier v1.2
Result: positive
Total predictions: 1
```

---

### Step 4: Add a second subclass and compare objects

```python
class SentimentAnalyser(AIModel):
    def __init__(self, name, version, threshold):
        super().__init__(name, version)
        self.threshold = threshold

    def predict(self, text):
        self.prediction_count += 1
        score = 0.94 if "amazing" in text.lower() else 0.87
        sentiment = "positive" if score >= self.threshold else "negative"
        return f"Result: {sentiment} (confidence: {score})"

analyser = SentimentAnalyser("SentimentAnalyser", "2.0", threshold=0.90)
print(f"Model: {analyser.name} v{analyser.version}")
print(analyser.predict("This API is broken"))
print(analyser.stats())
```

Expected output:
```
Model: SentimentAnalyser v2.0
Result: negative (confidence: 0.87)
Total predictions: 1
```

---

### Complete script — everything combined

```python
class AIModel:
    def __init__(self, name, version):
        self.name = name
        self.version = version
        self.prediction_count = 0

    def predict(self, text):
        self.prediction_count += 1
        return f"Processed: {text}"

    def stats(self):
        return f"Total predictions: {self.prediction_count}"


class TextClassifier(AIModel):
    def __init__(self, name, version):
        super().__init__(name, version)

    def predict(self, text):
        self.prediction_count += 1
        sentiment = "positive" if any(w in text.lower() for w in ["great", "amazing", "love"]) else "neutral"
        confidence = 0.94 if sentiment == "positive" else 0.72
        return f"Result: {sentiment} (confidence: {confidence})"


class SentimentAnalyser(AIModel):
    def __init__(self, name, version, threshold=0.90):
        super().__init__(name, version)
        self.threshold = threshold

    def predict(self, text):
        self.prediction_count += 1
        score = 0.94 if "amazing" in text.lower() else 0.87
        sentiment = "positive" if score >= self.threshold else "negative"
        return f"Result: {sentiment} (confidence: {score})"


model_registry = {}

tc = TextClassifier("TextClassifier", "1.2")
sa = SentimentAnalyser("SentimentAnalyser", "2.0")

model_registry["text-classifier-v1"] = tc
model_registry["sentiment-v2"] = sa

print(f"Model: {tc.name} v{tc.version}")
print(f"Predicting: \"Python is amazing\"")
print(tc.predict("Python is amazing"))
print(tc.stats())

print()

print(f"Model: {sa.name} v{sa.version}")
print(f"Predicting: \"This API is broken\"")
print(sa.predict("This API is broken"))
print(sa.stats())

print()

print(f"Registry has {len(model_registry)} models")
print(f"Models: {list(model_registry.keys())}")
```

Expected output:
```
Model: TextClassifier v1.2
Predicting: "Python is amazing"
Result: positive (confidence: 0.94)
Total predictions: 1

Model: SentimentAnalyser v2.0
Predicting: "This API is broken"
Result: negative (confidence: 0.87)
Total predictions: 1

Registry has 2 models
Models: ['text-classifier-v1', 'sentiment-v2']
```

---

## Real-World Use Case

A financial services firm built a document processing pipeline where multiple extraction models ran on the same document queue. Initially, each model was a set of functions sharing global state — model name, call count, error log. As the team added a third model type, they spent more time managing shared state than building features.

Refactoring to a `DocumentExtractor` base class with `InvoiceExtractor` and `ContractExtractor` subclasses took one day. Each instance owned its own state. Adding a fourth model type meant writing one new subclass — no changes to existing code.

| Metric | Before (functions) | After (OOP) |
|---|---|---|
| Time to add new model type | 3–4 hours (copy-paste + wiring) | 45 minutes (one new subclass) |
| Debugging shared state bugs | 2–3 hours per incident | Eliminated — state is per-object |
| Lines of code per new model | ~120 (full duplication) | ~30 (override only what changes) |

---

## Debugging & Common Pitfalls

**Pitfall 1: Forgetting `self` in method definition**

```python
class AIModel:
    def predict(text):   # missing self
        return text
```

```python
class AIModel:
    def predict(self, text):
        return text
```

Python raises `TypeError: predict() takes 1 positional argument but 2 were given` because Python automatically passes the object as the first argument. `self` must be there to receive it.

---

**Pitfall 2: Mutable default argument in `__init__`**

```python
class Pipeline:
    def __init__(self, steps=[]):
        self.steps = steps
```

```python
class Pipeline:
    def __init__(self, steps=None):
        self.steps = steps if steps is not None else []
```

The default list `[]` is created once when the class is defined, not once per object. Every instance without a `steps` argument shares the same list. Adding to one pipeline's steps accidentally modifies all pipelines that used the default.

---

**Pitfall 3: Not calling `super().__init__()` in a subclass**

```python
class TextClassifier(AIModel):
    def __init__(self, name, version):
        self.name = name  # duplicated from parent
```

```python
class TextClassifier(AIModel):
    def __init__(self, name, version):
        super().__init__(name, version)  # parent sets name, version, prediction_count
```

Skipping `super().__init__()` means parent attributes are never set. Calling any parent method that uses `self.prediction_count` will raise `AttributeError`.

---

**Pitfall 4: Modifying a class attribute when you mean to modify an instance attribute**

```python
class AIModel:
    count = 0   # class-level attribute shared by all instances

    def increment(self):
        self.count += 1   # this creates a NEW instance attribute, shadowing the class one
```

```python
class AIModel:
    def __init__(self):
        self.count = 0   # instance-level — each object has its own
```

Class attributes are shared across all instances. Instance attributes belong to individual objects. Mixing them causes confusing behaviour, especially when tracking per-model counts.

---

**Pitfall 5: Treating inheritance as the solution for everything**

```python
class DatabaseModel(AIModel):  # wrong — a DB connection is not a model
    pass
```

```python
class AIModel:
    def __init__(self, name, db_connection):
        self.name = name
        self.db = db_connection   # composition — AIModel HAS a db connection
```

Inheritance means "is-a." If the relationship is "has-a," use composition: store the other object as an attribute. Overusing inheritance creates deep hierarchies that are hard to follow and harder to change.

---

## Testing

```python
def test_ai_model_basic():
    model = AIModel("TestModel", "1.0")
    assert model.name == "TestModel"
    assert model.version == "1.0"
    assert model.prediction_count == 0
    result = model.predict("hello")
    assert model.prediction_count == 1
    assert "hello" in result

def test_text_classifier_inherits():
    tc = TextClassifier("TC", "1.0")
    assert hasattr(tc, "prediction_count")
    result = tc.predict("this is amazing")
    assert "positive" in result
    assert tc.prediction_count == 1

def test_sentiment_analyser_threshold():
    sa = SentimentAnalyser("SA", "1.0", threshold=0.95)
    result = sa.predict("regular text")
    assert "negative" in result

test_ai_model_basic()
test_text_classifier_inherits()
test_sentiment_analyser_threshold()
print("All tests passed")
```

**Evaluation checklist:**
- [ ] Each class has a clear single responsibility
- [ ] `__init__` sets all attributes the class needs — no late additions
- [ ] `super().__init__()` is called in every subclass constructor
- [ ] No mutable default arguments in `__init__`
- [ ] Methods do not operate on data that belongs to another class
- [ ] Inheritance used only for genuine "is-a" relationships
- [ ] At least one test per class verifying attribute and method behaviour

---

## Interview Q&A

**Q1: What is the difference between a class and an object?**

A class is the blueprint — it defines what attributes and methods every instance will have. An object is a specific instance created from that blueprint. You can create many independent objects from one class, each with its own attribute values. `AIModel` is the class; `model = AIModel("BERT", "1.0")` creates a specific object. Calling methods on `model` affects only that object's state.

**Q2: What does `self` refer to and why is it needed?**

`self` is a reference to the specific object on which a method is being called. When you write `model.predict("text")`, Python translates this to `AIModel.predict(model, "text")` — it passes the object as the first argument automatically. `self` receives that object. Without `self`, a method would have no way to access or modify the object's attributes; it could only operate on its local arguments.

**Q3: When should you use inheritance versus composition?**

Use inheritance when the relationship is "is-a": `TextClassifier` is a kind of `AIModel`, so it makes sense to inherit. Use composition when the relationship is "has-a": a `Pipeline` has a `Logger`, so the pipeline should store a logger object as an attribute, not inherit from `Logger`. Overusing inheritance creates tightly coupled, brittle hierarchies. A useful rule: if you cannot say "B is an A" naturally in plain English, reach for composition.

**Q4: What is method overriding and why does it matter?**

Method overriding is when a subclass defines a method with the same name as a method in its parent class. When the method is called on a subclass object, Python uses the subclass version. This is how AI frameworks achieve polymorphism — a `predict()` call works on any model type, even though the implementation differs for text, image, or tabular models. The caller does not need to know which subclass it has; it just calls `predict()` and gets the right behaviour.

**Q5: What is `__init__` and when is it called?**

`__init__` is the constructor method — Python calls it automatically immediately after creating a new object. It receives `self` (the newly created object) and any arguments you pass to the class call. Its job is to initialise the object's attributes to their starting values. Without `__init__`, your class can still exist but objects start with no attributes, which means every method call that accesses `self.something` will raise an `AttributeError`.

---

## Resources

- [Python Docs — Classes](https://docs.python.org/3/tutorial/classes.html) — Official reference covering class syntax, inheritance, and special methods
- [Real Python — OOP in Python](https://realpython.com/python3-object-oriented-programming/) — Comprehensive tutorial with real examples
- [Real Python — Inheritance and Composition](https://realpython.com/inheritance-composition-python/) — In-depth guide to choosing the right approach
- [Python Tutor](https://pythontutor.com/) — Visualise object creation and method calls step by step

---

## Conclusion & Next Steps

Classes and objects let you model the real world in code — a model, a pipeline, a database connection each becomes an object that owns its own data and exposes a clear interface. Every AI framework you will use (LangChain, scikit-learn, PyTorch) is built from classes, so understanding OOP is what allows you to read library source code, extend existing classes, and debug with confidence.

In the next article — **Error Handling and File I/O** — you will learn how to make your code resilient when things go wrong, and how to read and write files, which is how real-world data enters and leaves your Python scripts.

---

Subscribe to get new articles delivered to your inbox.
New posts every week across 9 AI learning pillars.

---

<!--
HASHNODE PUBLISH SETTINGS
--------------------------
Series      : Python Programming
Tags        : python, programming, beginner, tutorial
Slug        : python-object-oriented-programming-classes-inheritance
SEO Title   : Object-Oriented Programming in Python Explained
SEO Desc    : Learn Python classes, objects, and inheritance. Build a class hierarchy that mirrors how AI libraries like LangChain are structured.
Cover Image : Dark background, Python logo top-left, a class hierarchy tree: AIModel at root, TextClassifier and SentimentAnalyser as children — 1600×840px
Image 1     : UML-style class hierarchy diagram: AIModel box at top with attributes (name, version, prediction_count) and methods (predict, stats), two child boxes TextClassifier and SentimentAnalyser connected by inheritance arrows, each showing their added attributes/methods
-->
