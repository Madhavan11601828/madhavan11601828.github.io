---
title: 'Error Handling and File I/O in Python'
slug: python-error-handling-file-io-try-except
publishedAt: 2026-06-16
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
  title: 'Python Error Handling and File I/O Explained'
  description: 'Master Python try/except, file reading, CSV parsing, and error logging. Write robust scripts that handle real-world data.'
seriesSlug: python-programming
domain: venumadhavan.hashnode.dev
---

## Key Takeaways

- You will catch specific exceptions without silencing bugs you did not intend to hide
- You will use `finally` to guarantee cleanup even when errors occur
- You will raise custom errors that communicate exactly what went wrong
- You will read text files, CSV files, and JSON files in three lines or fewer
- You will write results and logs to files safely using the `with` statement
- You will understand why "bare except" is the most dangerous pattern in production Python

---

## Who This Is For & Prerequisites

This article is for Python developers who have completed Articles 1–4 of this series and are ready to write code that handles the messy reality of real-world data — files that do not exist, values that are the wrong type, and external sources that return unexpected input.

**You must have read:**
- Article 1: Variables and data types
- Article 2: Control flow — if/else, loops, functions
- Article 3: Data structures — lists, dicts
- Article 4: OOP — classes and methods (helpful but not required for this article)

**You do NOT need:**
- Any experience with file systems or operating systems
- Knowledge of logging frameworks

No pip install required for core content. No API keys. No cost.

---

## What You Will Build

By the end of this article you will have:
- A function that reads a CSV file and handles missing files, empty data, and bad values gracefully
- A function that writes processed results to an output file
- A logging function that appends errors to a log file
- A complete data ingestion pipeline with try/except/finally and file I/O

Expected final output when you run the complete script:

```
Reading scores.csv...
Read 5 records successfully
Average score: 72.6
Highest score: 92
Results written to results.txt

Simulating bad file...
Error: File 'missing.csv' not found
Logged error to errors.log

Simulating bad data...
Error: Could not convert 'N/A' to a number on row 3
Logged error to errors.log
```

---

## Problem Statement

Real data is messy. A file you expect to be there is missing because a cron job failed. A CSV column that should hold integers contains the string "N/A" because someone exported from a spreadsheet. An API response that normally returns JSON returns an HTML error page when the service is down.

Without error handling, your script crashes — and in a production pipeline that runs overnight, you discover the failure the next morning having produced no output. With proper error handling, your script catches the specific problem, logs it with context, and either recovers or exits cleanly with a meaningful message.

Every AI data pipeline, every file-based training script, and every scheduled job you write will eventually encounter bad data. The question is whether your code handles it or crashes silently.

---

## Concept Simply

Think of error handling like a surgeon's protocol. A surgeon does not stop the operation the moment something unexpected appears — they have pre-planned responses: if X happens, do Y; whatever happens, close the incision before leaving the theatre (that is `finally`). "Something went wrong" is not helpful information. "The patient's blood pressure dropped below 80 during step 3" is actionable.

Python errors work the same way: catch the specific problem you expected, respond to it, and always clean up.

| No error handling | With error handling |
|---|---|
| Script crashes with a stack trace | Script catches the error and responds |
| User sees a confusing Python error message | User sees a clear, context-rich message |
| File handle left open on crash | `finally` or `with` guarantees the file closes |
| No record of what went wrong | Error logged to file with timestamp and context |

---

## Core Components

### 1. try / except

```python
try:
    value = int("not_a_number")
except ValueError as e:
    print(f"Conversion failed: {e}")
```

The code in `try` runs first. If it raises an exception matching the `except` clause, that clause handles it. Code after the failing line inside `try` is skipped.

### 2. Catching Specific Exceptions

Always name the specific exception you expect. Never use bare `except:`.

```python
try:
    with open("data.csv") as f:
        content = f.read()
except FileNotFoundError:
    print("File not found")
except PermissionError:
    print("No permission to read this file")
```

Common exceptions in AI and data work:
- `FileNotFoundError` — file does not exist
- `ValueError` — wrong type or format (`int("abc")`)
- `KeyError` — dict key missing
- `IndexError` — list index out of range
- `TypeError` — operation on wrong type

### 3. else and finally

```python
try:
    value = int("42")
except ValueError:
    print("Bad value")
else:
    print("Success:", value)   # runs only if no exception
finally:
    print("Always runs")       # runs whether or not there was an exception
```

`finally` is where you close files, release connections, or write to a log — it runs in all cases.

### 4. Raising Exceptions

```python
def load_scores(filepath):
    if not filepath.endswith(".csv"):
        raise ValueError(f"Expected a .csv file, got: {filepath}")
    with open(filepath) as f:
        return f.read()
```

`raise` stops execution and sends an exception up to the caller. Custom messages make debugging fast.

### 5. Reading Files

```python
with open("data.txt", "r") as f:
    content = f.read()          # entire file as string

with open("data.txt", "r") as f:
    lines = f.readlines()       # list of lines

with open("data.txt", "r") as f:
    for line in f:              # iterate line by line (memory-efficient)
        print(line.strip())
```

The `with` statement guarantees the file is closed when the block exits, even if an exception occurs. Always use `with` for file operations.

### 6. Writing Files

```python
with open("output.txt", "w") as f:   # "w" overwrites, "a" appends
    f.write("Line 1\n")
    f.write("Line 2\n")
```

### 7. Reading CSV Files

```python
import csv

with open("scores.csv", "r") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["name"], row["score"])
```

### 8. Reading and Writing JSON

```python
import json

with open("config.json", "r") as f:
    config = json.load(f)

config["updated"] = True

with open("config.json", "w") as f:
    json.dump(config, f, indent=2)
```

![Error Handling Flow — diagram showing try block → exception occurs → except clause → finally clause, with a parallel path showing no exception → else clause → finally clause](https://madhavan11601828.github.io/assets/images/python-error-handling-flow.png)

---

## Design Trade-offs

| Decision | Option A | Option B | When to choose |
|---|---|---|---|
| Catch broad vs specific exceptions | `except Exception` | `except ValueError, FileNotFoundError` | Always catch specific — broad catches hide bugs |
| Fail fast vs recover | Raise immediately on bad input | Log and skip the bad record | Fail fast for configuration errors; skip-and-log for batch data rows |
| `with` vs manual `close()` | `with open(...) as f` | `f = open(...)` then `f.close()` | Always use `with` — `close()` is skipped if an exception occurs |
| Log to file vs print to console | `errors.log` file | `print(error)` | Log to file in production; print in dev/debug |
| Custom exceptions vs built-in | `class DataError(Exception)` | `raise ValueError("message")` | Custom for domain-specific errors; built-in for standard cases |

---

## Hands-on Tutorial

First, create the input file `scores.csv`:

```csv
name,score
Alice,88
Bob,45
Carol,92
David,60
Eve,78
```

### Step 1: Read a file with basic error handling

```python
def read_file(filepath):
    try:
        with open(filepath, "r") as f:
            return f.read()
    except FileNotFoundError:
        print(f"Error: File '{filepath}' not found")
        return None

content = read_file("scores.csv")
if content:
    print(content)
```

Expected output:
```
name,score
Alice,88
Bob,45
Carol,92
David,60
Eve,78
```

---

### Step 2: Parse CSV with type conversion and error handling

```python
import csv

def load_scores(filepath):
    scores = []
    try:
        with open(filepath, "r") as f:
            reader = csv.DictReader(f)
            for i, row in enumerate(reader, start=1):
                try:
                    score = int(row["score"])
                    scores.append({"name": row["name"], "score": score})
                except ValueError:
                    print(f"Error: Could not convert '{row['score']}' to a number on row {i}")
    except FileNotFoundError:
        print(f"Error: File '{filepath}' not found")
    return scores

records = load_scores("scores.csv")
print(f"Read {len(records)} records successfully")
```

Expected output:
```
Read 5 records successfully
```

---

### Step 3: Write results to a file

```python
def write_results(filepath, records):
    if not records:
        print("No records to write")
        return
    total = sum(r["score"] for r in records)
    avg = total / len(records)
    highest = max(r["score"] for r in records)
    with open(filepath, "w") as f:
        f.write(f"Average score: {avg}\n")
        f.write(f"Highest score: {highest}\n")
        for r in records:
            f.write(f"{r['name']}: {r['score']}\n")
    print(f"Results written to {filepath}")

write_results("results.txt", records)
```

Expected output:
```
Results written to results.txt
```

---

### Step 4: Log errors to a file

```python
from datetime import datetime

def log_error(message, logfile="errors.log"):
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open(logfile, "a") as f:
        f.write(f"[{timestamp}] {message}\n")
    print(f"Logged error to {logfile}")

log_error("File 'missing.csv' not found")
```

Expected output:
```
Logged error to errors.log
```

---

### Complete script — full data ingestion pipeline

```python
import csv
from datetime import datetime


def log_error(message, logfile="errors.log"):
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open(logfile, "a") as f:
        f.write(f"[{timestamp}] {message}\n")
    print(f"Logged error to {logfile}")


def load_scores(filepath):
    scores = []
    try:
        print(f"Reading {filepath}...")
        with open(filepath, "r") as f:
            reader = csv.DictReader(f)
            for i, row in enumerate(reader, start=1):
                try:
                    score = int(row["score"])
                    scores.append({"name": row["name"], "score": score})
                except ValueError:
                    msg = f"Could not convert '{row['score']}' to a number on row {i}"
                    print(f"Error: {msg}")
                    log_error(msg)
    except FileNotFoundError:
        msg = f"File '{filepath}' not found"
        print(f"Error: {msg}")
        log_error(msg)
    finally:
        print(f"Read {len(scores)} records successfully" if scores else "No records loaded")
    return scores


def write_results(filepath, records):
    if not records:
        return
    total = sum(r["score"] for r in records)
    avg = round(total / len(records), 1)
    highest = max(r["score"] for r in records)
    with open(filepath, "w") as f:
        f.write(f"Average score: {avg}\n")
        f.write(f"Highest score: {highest}\n")
    print(f"Average score: {avg}")
    print(f"Highest score: {highest}")
    print(f"Results written to {filepath}")


records = load_scores("scores.csv")
write_results("results.txt", records)

print()
print("Simulating bad file...")
load_scores("missing.csv")

print()
print("Simulating bad data...")
bad_records = []
try:
    bad_value = int("N/A")
except ValueError:
    msg = "Could not convert 'N/A' to a number on row 3"
    print(f"Error: {msg}")
    log_error(msg)
```

Expected output:
```
Reading scores.csv...
Read 5 records successfully
Average score: 72.6
Highest score: 92
Results written to results.txt

Simulating bad file...
Error: File 'missing.csv' not found
Read 0 records successfully
Logged error to errors.log

Simulating bad data...
Error: Could not convert 'N/A' to a number on row 3
Logged error to errors.log
```

---

## Debugging & Common Pitfalls

**Pitfall 1: Bare except catches everything including KeyboardInterrupt**

```python
try:
    process_data()
except:
    pass
```

```python
try:
    process_data()
except Exception as e:
    print(f"Error: {e}")
```

Bare `except:` catches `KeyboardInterrupt` (Ctrl+C) and `SystemExit` — your program cannot be stopped without killing the process. It also hides every bug silently. Always name the exception or use `except Exception`.

---

**Pitfall 2: Silencing exceptions with `pass`**

```python
try:
    score = int(row["score"])
except ValueError:
    pass
```

```python
try:
    score = int(row["score"])
except ValueError as e:
    print(f"Skipping row — bad value: {e}")
    log_error(str(e))
```

`pass` swallows the error with no record of what happened. When 10% of your records silently fail, you will not know until you investigate the output weeks later.

---

**Pitfall 3: Opening a file without `with`**

```python
f = open("data.txt", "r")
content = f.read()
# exception occurs here — f.close() is never reached
f.close()
```

```python
with open("data.txt", "r") as f:
    content = f.read()
```

If any exception occurs between `open()` and `close()`, the file remains open. The OS eventually reclaims it, but in a long-running process this causes resource leaks. `with` always closes the file.

---

**Pitfall 4: Writing mode `"w"` when you meant `"a"`**

```python
with open("errors.log", "w") as f:
    f.write(f"Error: {msg}\n")
```

```python
with open("errors.log", "a") as f:
    f.write(f"Error: {msg}\n")
```

Mode `"w"` truncates the file every time — your log only ever contains the last error. Mode `"a"` appends, preserving history.

---

**Pitfall 5: Catching the wrong exception type**

```python
try:
    user = data["user"]
except ValueError:
    print("User not found")
```

```python
try:
    user = data["user"]
except KeyError:
    print("User not found")
```

A missing dictionary key raises `KeyError`, not `ValueError`. Catching the wrong exception type means the error propagates uncaught anyway. Know your exceptions: dict/list access → `KeyError`/`IndexError`; type conversion → `ValueError`; file operations → `FileNotFoundError`, `PermissionError`.

---

## Testing

```python
import os

def test_load_scores_valid():
    with open("test_scores.csv", "w") as f:
        f.write("name,score\nAlice,88\nBob,72\n")
    records = load_scores("test_scores.csv")
    assert len(records) == 2
    assert records[0]["name"] == "Alice"
    assert records[0]["score"] == 88
    os.remove("test_scores.csv")

def test_load_scores_missing_file():
    records = load_scores("nonexistent.csv")
    assert records == []

def test_write_results_creates_file():
    records = [{"name": "Alice", "score": 88}, {"name": "Bob", "score": 72}]
    write_results("test_results.txt", records)
    assert os.path.exists("test_results.txt")
    os.remove("test_results.txt")

test_load_scores_valid()
test_load_scores_missing_file()
test_write_results_creates_file()
print("All tests passed")
```

**Evaluation checklist:**
- [ ] Every `except` clause names a specific exception type
- [ ] No bare `except:` or `except Exception: pass` in production paths
- [ ] All file operations use `with` statement
- [ ] Log file uses append mode `"a"`, not write mode `"w"`
- [ ] Error messages include the specific value that caused the problem
- [ ] `finally` or `with` guarantees cleanup in all exit paths
- [ ] Functions return a meaningful default (empty list, `None`) on failure rather than crashing

---

## Interview Q&A

**Q1: What is the difference between `except ValueError` and `except Exception`?**

`except ValueError` catches only `ValueError` — wrong type or format during conversion. `except Exception` catches almost all exceptions including `IOError`, `KeyError`, `TypeError`, and every other built-in runtime exception. The difference matters in production: catching `Exception` hides bugs you did not anticipate. Catching `ValueError` only handles the specific case you planned for, letting unexpected errors propagate so they can be noticed and fixed. The safest pattern is to catch the most specific exception you can, then add broader catches only if you explicitly handle each case.

**Q2: What does the `finally` block guarantee and when would you use it without `except`?**

`finally` runs regardless of whether an exception occurred — even if the `try` block raises an exception you did not catch, and even if it raises `SystemExit`. You use it without `except` when you need cleanup but want the exception to propagate: opening a database connection, running a query, and always closing the connection whether the query succeeded or failed. The `with` statement is essentially a `try/finally` pattern — it guarantees `__exit__` is called on the context manager object, which for file handles means `close()`.

**Q3: Why is reading CSV with the `csv` module better than splitting strings manually?**

The `csv` module handles quoting, escaped commas inside fields, multiline fields, and different delimiters automatically. A field containing `"Smith, John"` with an internal comma would break naive `.split(",")` splitting but parses correctly with `csv.reader`. `csv.DictReader` additionally maps each row to a dictionary keyed by the header row, so you access `row["name"]` instead of `row[0]`. In production, data always contains edge cases — the `csv` module has been hardened against all of them.

**Q4: When should you raise a custom exception class versus using a built-in exception?**

Raise a built-in exception (`ValueError`, `TypeError`, `FileNotFoundError`) when the error maps cleanly to an existing Python convention — calling code can catch these without importing anything from your module. Create a custom exception class (`class DataIngestionError(Exception)`) when the error is specific to your domain and callers need to distinguish it from unrelated errors. For example, a data pipeline might define `class MissingColumnError(ValueError)` so callers can catch specifically missing-column errors while still inheriting from `ValueError` for compatibility with code that catches the built-in.

**Q5: What is the risk of using `open("file.txt", "w")` in a logging function?**

Mode `"w"` truncates the file to zero bytes on every open. A logging function called multiple times during a run would overwrite every previous log entry, leaving only the last one. Debugging a run that processed 10,000 records would be impossible because the first 9,999 error entries were silently deleted. Always use `"a"` (append) for log files. The only time you want `"w"` for logs is when you deliberately want to start a fresh log at the beginning of each run — and even then, you should rotate the old log file rather than truncate it.

---

## Resources

- [Python Docs — Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html) — Official reference for the full exception hierarchy
- [Python Docs — Reading and Writing Files](https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files) — Official file I/O guide
- [Real Python — Python Exceptions](https://realpython.com/python-exceptions/) — Practical guide with common exception types and patterns
- [Real Python — Working with Files](https://realpython.com/working-with-files-in-python/) — Comprehensive file operations guide

---

## Conclusion & Next Steps

Error handling is what separates a demo script from production code. Every data pipeline, every AI job, and every API integration you write will encounter bad data or missing resources — the only question is whether your code handles it gracefully or crashes without a trace. Combined with file I/O, you now have the tools to build scripts that ingest real-world data, process it reliably, and leave a clear audit trail.

In the next article — **Python Patterns for AI: Comprehensions, Generators, Decorators** — you will learn the concise, efficient Python idioms that senior engineers use to process large datasets without writing verbose loop boilerplate.

---

Subscribe to get new articles delivered to your inbox.
New posts every week across 9 AI learning pillars.

---
