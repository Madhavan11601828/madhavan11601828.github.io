---
title: 'Working with Libraries: NumPy and Pandas Quick Start'
slug: python-numpy-pandas-quickstart-data-science
publishedAt: 2026-06-30
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
  title: 'NumPy and Pandas Quick Start for Python Developers'
  description: 'Learn NumPy arrays and Pandas DataFrames from scratch. Load, filter, and prepare data for machine learning in 30 minutes.'
seriesSlug: python-programming
domain: venumadhavan.hashnode.dev
---

## Key Takeaways

- You will create NumPy arrays and perform vectorised operations without for loops
- You will load a CSV dataset into a Pandas DataFrame in one line
- You will filter, group, and summarise data using Pandas in under 10 lines
- You will understand why NumPy and Pandas are faster than plain Python lists for numeric work
- You will prepare a dataset for machine learning by selecting and transforming columns
- You will know the difference between a NumPy array and a Pandas DataFrame and when to use each

---

## Who This Is For & Prerequisites

This article is for Python developers who have completed Articles 1–6 of this series and are ready to move from plain Python into the numerical and data libraries that every machine learning workflow depends on.

**You must have read:**
- Article 1: Variables and data types
- Article 3: Lists and dictionaries
- Article 6: Python patterns (comprehensions and generators are helpful background)

**You do NOT need:**
- Any prior knowledge of NumPy or Pandas
- Statistics or linear algebra — those are covered in the Data Analysis pillar

```bash
pip install numpy pandas
```

No API keys. No cost beyond standard library installation.

---

## What You Will Build

By the end of this article you will have:
- A NumPy script that creates arrays, applies operations, and computes statistics
- A Pandas script that loads a CSV, filters rows, groups data, and computes aggregates
- A combined preprocessing function that prepares a dataset for machine learning

Expected final output:

```
=== NumPy ===
Array: [10 20 30 40 50]
Doubled: [20 40 60 80 100]
Mean: 30.0  |  Std: 14.14

=== Pandas ===
Shape: (5, 3)
Columns: ['name', 'score', 'grade']

High scorers (score >= 70):
     name  score grade
0   Alice     88     B
2   Carol     92     A
4     Eve     78     B

Average score by grade:
grade
A    92.0
B    83.0
C    60.0
F    45.0

=== ML Prep ===
Feature array shape: (5, 1)
Labels: [1 0 1 1 1]
```

---

## Problem Statement

Plain Python lists are flexible but slow for numeric operations. Squaring 1,000,000 numbers with a for loop and list comprehension takes about 0.4 seconds. The same operation on a NumPy array takes 4 milliseconds — 100× faster. The difference is that NumPy operations run as compiled C code on contiguous memory blocks, while Python loops operate on Python objects one at a time.

For tabular data, reading a CSV with the `csv` module and storing rows as dictionaries works but loses all the filtering, grouping, and aggregation capabilities that Pandas provides. A groupby operation that takes 20 lines of plain Python takes one line with Pandas.

Every machine learning library — scikit-learn, PyTorch, TensorFlow — accepts NumPy arrays as input. Every data analysis workflow starts with Pandas. These two libraries are not optional add-ons; they are the foundation.

---

## Concept Simply

**NumPy** is a calculator that operates on entire grids of numbers at once, not one at a time. You hand it 1,000,000 numbers and say "square all of these" — it does it in a single C-compiled operation, not 1,000,000 separate Python steps.

**Pandas** is a spreadsheet inside Python. It has rows, columns, named headers, filtering, grouping, and built-in statistics. The difference from a Python list of dictionaries is that Pandas knows what each column is, can operate on entire columns at once, and provides SQL-like operations with Python syntax.

| Plain Python | NumPy | Pandas |
|---|---|---|
| List of numbers | Array of numbers (typed, fast) | DataFrame column of numbers (named, typed, fast) |
| For loop to compute | Vectorised operation | Column operation |
| dict for each row | Not designed for rows | DataFrame row |
| No grouping | No grouping | `.groupby()` |
| CSV via `csv` module | Possible but awkward | `pd.read_csv()` in one line |

---

## Core Components

### 1. NumPy Arrays

```python
import numpy as np

arr = np.array([10, 20, 30, 40, 50])
print(arr)          # [10 20 30 40 50]
print(arr.dtype)    # int64
print(arr.shape)    # (5,)
```

Arrays are typed — every element is the same data type. This is what makes vectorised operations possible.

### 2. Vectorised Operations

No for loops needed. Operations apply to every element simultaneously:

```python
arr = np.array([10, 20, 30, 40, 50])

print(arr * 2)        # [20 40 60 80 100]
print(arr + 100)      # [110 120 130 140 150]
print(arr ** 2)       # [100 400 900 1600 2500]
print(arr > 25)       # [False False  True  True  True]
```

### 3. NumPy Statistics

```python
arr = np.array([10, 20, 30, 40, 50])

print(np.mean(arr))   # 30.0
print(np.std(arr))    # 14.142...
print(np.max(arr))    # 50
print(np.min(arr))    # 10
print(np.sum(arr))    # 150
```

### 4. 2D Arrays (Matrices)

```python
matrix = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])

print(matrix.shape)     # (3, 3)
print(matrix[0, :])     # [1 2 3]  — first row
print(matrix[:, 1])     # [2 5 8]  — second column
print(matrix.T)         # transpose
```

### 5. Creating Arrays

```python
zeros = np.zeros((3, 4))       # 3×4 matrix of zeros
ones = np.ones((2, 3))         # 2×3 matrix of ones
sequence = np.arange(0, 10, 2) # [0 2 4 6 8]
linspace = np.linspace(0, 1, 5)# [0.   0.25 0.5  0.75 1.  ]
```

### 6. Pandas DataFrame

```python
import pandas as pd

df = pd.read_csv("scores.csv")

print(df.shape)       # (rows, columns)
print(df.columns)     # column names
print(df.head())      # first 5 rows
print(df.dtypes)      # data type per column
print(df.describe())  # count, mean, std, min, max per numeric column
```

### 7. Filtering Rows

```python
high_scorers = df[df["score"] >= 70]
grade_a = df[df["grade"] == "A"]
top_students = df[(df["score"] >= 80) & (df["grade"] != "F")]
```

### 8. Selecting Columns

```python
names = df["name"]             # Series (one column)
subset = df[["name", "score"]] # DataFrame (multiple columns)
```

### 9. GroupBy and Aggregation

```python
avg_by_grade = df.groupby("grade")["score"].mean()
count_by_grade = df.groupby("grade")["name"].count()
```

### 10. Converting to NumPy

```python
feature_array = df[["score"]].to_numpy()
labels = (df["score"] >= 50).astype(int).to_numpy()
```

This is the bridge step before passing data to scikit-learn or any ML library.

![NumPy vs Pandas — two panels: left shows a 2D NumPy array grid with a vectorised operation arrow; right shows a Pandas DataFrame with named columns and a groupby flow arrow](https://madhavan11601828.github.io/assets/images/python-numpy-pandas-overview.png)

---

## Design Trade-offs

| Decision | Option A | Option B | When to choose |
|---|---|---|---|
| NumPy vs Pandas | NumPy array | Pandas DataFrame | NumPy for pure numeric computation and ML input; Pandas for mixed-type tabular data with labels |
| `df["col"]` vs `df[["col"]]` | Single bracket → Series | Double bracket → DataFrame | Use DataFrame form when you need to chain operations or pass to functions expecting a DataFrame |
| `loc` vs `iloc` | `df.loc[0, "name"]` (label-based) | `df.iloc[0, 0]` (position-based) | Use `loc` when columns have meaningful names; `iloc` when you know the position |
| `groupby` vs manual loop | `df.groupby("grade").mean()` | for loop over unique grades | Always prefer `groupby` — it is 10–100× faster on large DataFrames |
| In-place operations | `df.drop(columns=["col"], inplace=True)` | `df = df.drop(columns=["col"])` | Avoid `inplace=True` — it causes confusing bugs with chained operations |

---

## Hands-on Tutorial

First, create `scores.csv`:

```csv
name,score,grade
Alice,88,B
Bob,45,F
Carol,92,A
David,60,C
Eve,78,B
```

### Step 1: NumPy basics

```python
import numpy as np

arr = np.array([10, 20, 30, 40, 50])

print("=== NumPy ===")
print("Array:", arr)
print("Doubled:", arr * 2)
print(f"Mean: {np.mean(arr):.1f}  |  Std: {np.std(arr):.2f}")
```

Expected output:
```
=== NumPy ===
Array: [10 20 30 40 50]
Doubled: [20 40 60 80 100]
Mean: 30.0  |  Std: 14.14
```

---

### Step 2: Load and inspect a DataFrame

```python
import pandas as pd

df = pd.read_csv("scores.csv")

print("=== Pandas ===")
print("Shape:", df.shape)
print("Columns:", df.columns.tolist())
print()
print(df)
```

Expected output:
```
=== Pandas ===
Shape: (5, 3)
Columns: ['name', 'score', 'grade']

    name  score grade
0  Alice     88     B
1    Bob     45     F
2  Carol     92     A
3  David     60     C
4    Eve     78     B
```

---

### Step 3: Filter and group

```python
print("\nHigh scorers (score >= 70):")
print(df[df["score"] >= 70])

print("\nAverage score by grade:")
print(df.groupby("grade")["score"].mean())
```

Expected output:
```
High scorers (score >= 70):
    name  score grade
0  Alice     88     B
2  Carol     92     A
4    Eve     78     B

Average score by grade:
grade
A    92.0
B    83.0
C    60.0
F    45.0
```

---

### Step 4: Prepare data for ML

```python
print("\n=== ML Prep ===")
features = df[["score"]].to_numpy()
labels = (df["score"] >= 50).astype(int).to_numpy()

print("Feature array shape:", features.shape)
print("Labels:", labels)
```

Expected output:
```
=== ML Prep ===
Feature array shape: (5, 1)
Labels: [1 0 1 1 1]
```

---

### Complete script

```python
import numpy as np
import pandas as pd

print("=== NumPy ===")
arr = np.array([10, 20, 30, 40, 50])
print("Array:", arr)
print("Doubled:", arr * 2)
print(f"Mean: {np.mean(arr):.1f}  |  Std: {np.std(arr):.2f}")

print()

print("=== Pandas ===")
df = pd.read_csv("scores.csv")
print("Shape:", df.shape)
print("Columns:", df.columns.tolist())

print("\nHigh scorers (score >= 70):")
print(df[df["score"] >= 70].to_string(index=True))

print("\nAverage score by grade:")
print(df.groupby("grade")["score"].mean().to_string())

print()

print("=== ML Prep ===")
features = df[["score"]].to_numpy()
labels = (df["score"] >= 50).astype(int).to_numpy()
print("Feature array shape:", features.shape)
print("Labels:", labels)
```

---

## Real-World Use Case

A team building a customer churn prediction model received monthly data exports as CSV files — 200,000 rows, 40 columns. Loading the data with `csv.DictReader` and computing segment statistics with plain Python loops took 4 minutes per file and 300 lines of code.

Switching to Pandas reduced the loading and aggregation code to 25 lines. NumPy handled the feature matrix construction for scikit-learn. The full preprocessing pipeline ran in 8 seconds.

| Metric | Plain Python | NumPy + Pandas |
|---|---|---|
| CSV load time (200k rows) | 12 seconds | 0.4 seconds |
| Groupby + aggregate | 90 seconds | 1.2 seconds |
| Code for full pipeline | 300 lines | 25 lines |
| ML-ready feature matrix | Manual loop | `.to_numpy()` — one line |

---

## Debugging & Common Pitfalls

**Pitfall 1: Modifying a slice instead of the original DataFrame**

```python
subset = df[df["score"] >= 70]
subset["grade"] = "A+"  # SettingWithCopyWarning — does NOT modify df
```

```python
df.loc[df["score"] >= 70, "grade"] = "A+"  # modifies df correctly
```

Pandas returns a view or a copy depending on context — you often cannot tell which. Use `.loc[row_condition, column]` for in-place modification.

---

**Pitfall 2: Comparing NumPy arrays with `==` returns an array, not a bool**

```python
arr = np.array([1, 2, 3])
if arr == np.array([1, 2, 3]):  # ValueError — ambiguous
    print("equal")
```

```python
arr = np.array([1, 2, 3])
if np.array_equal(arr, np.array([1, 2, 3])):
    print("equal")
```

Element-wise `==` returns a boolean array. Use `np.array_equal()` for full-array comparison.

---

**Pitfall 3: Chaining operations without resetting the index**

```python
df_filtered = df[df["score"] >= 70]
print(df_filtered.iloc[0])  # index is 0, 2, 4 — not 0, 1, 2
```

```python
df_filtered = df[df["score"] >= 70].reset_index(drop=True)
print(df_filtered.iloc[0])  # now index is 0, 1, 2
```

Filtering preserves the original row indices. After filtering, use `.reset_index(drop=True)` if you need consecutive 0-based indices.

---

**Pitfall 4: Loading a CSV with missing values without checking**

```python
df = pd.read_csv("data.csv")
mean = df["score"].mean()  # silently ignores NaN
```

```python
df = pd.read_csv("data.csv")
print(df.isnull().sum())   # check for missing values first
df = df.dropna(subset=["score"])
mean = df["score"].mean()
```

Pandas silently ignores `NaN` in most aggregations. If your data has missing values and you do not handle them, your results are wrong without any error.

---

**Pitfall 5: Using Python `len()` instead of `.shape` for DataFrames**

```python
print(len(df))       # only row count
```

```python
print(df.shape)      # (rows, columns) — both dimensions
print(df.shape[0])   # row count
print(df.shape[1])   # column count
```

`len(df)` returns only the row count. `.shape` gives both dimensions — use it whenever you need to verify the structure of the data.

---

## Testing

```python
import numpy as np
import pandas as pd

def test_numpy_operations():
    arr = np.array([10, 20, 30])
    assert np.array_equal(arr * 2, np.array([20, 40, 60]))
    assert np.mean(arr) == 20.0

def test_pandas_load():
    import io
    csv_content = "name,score,grade\nAlice,88,B\nBob,45,F\n"
    df = pd.read_csv(io.StringIO(csv_content))
    assert df.shape == (2, 3)
    assert list(df.columns) == ["name", "score", "grade"]

def test_pandas_filter():
    import io
    csv_content = "name,score,grade\nAlice,88,B\nBob,45,F\n"
    df = pd.read_csv(io.StringIO(csv_content))
    high = df[df["score"] >= 70]
    assert len(high) == 1
    assert high.iloc[0]["name"] == "Alice"

def test_ml_prep():
    import io
    csv_content = "name,score,grade\nAlice,88,B\nBob,45,F\n"
    df = pd.read_csv(io.StringIO(csv_content))
    features = df[["score"]].to_numpy()
    labels = (df["score"] >= 50).astype(int).to_numpy()
    assert features.shape == (2, 1)
    assert list(labels) == [1, 0]

test_numpy_operations()
test_pandas_load()
test_pandas_filter()
test_ml_prep()
print("All tests passed")
```

**Evaluation checklist:**
- [ ] `pip install numpy pandas` documented at the top
- [ ] `pd.read_csv()` used rather than manual CSV parsing
- [ ] Missing value check (`df.isnull().sum()`) before aggregation on real data
- [ ] No for loops over DataFrame rows — use vectorised operations
- [ ] `.reset_index(drop=True)` after filtering where index continuity matters
- [ ] `.to_numpy()` used for ML library handoff
- [ ] `np.array_equal()` used for array equality checks in tests

---

## Interview Q&A

**Q1: Why is NumPy faster than Python lists for numeric operations?**

NumPy stores array elements in contiguous memory blocks as C-typed values (float64, int32, etc.), not as Python objects. A Python list stores pointers to Python objects, each with type information and reference counting overhead. NumPy operations dispatch to compiled C or Fortran routines that operate on the raw memory block without Python interpreter overhead. For an array of 1,000,000 floats, NumPy allocates one block of 8MB (8 bytes × 1M elements) and processes it in one SIMD-accelerated C call. Python would process 1,000,000 Python float objects one at a time.

**Q2: What is the difference between a Pandas Series and a DataFrame?**

A `Series` is a one-dimensional labelled array — like a single named column with an index. A `DataFrame` is a two-dimensional labelled table — a collection of Series sharing the same index. `df["score"]` returns a Series. `df[["score", "grade"]]` returns a DataFrame. Methods that aggregate a Series return a scalar; methods that aggregate a DataFrame return a Series. Knowing which one you have at each step prevents type errors and makes method chaining predictable.

**Q3: When would you use NumPy directly instead of Pandas?**

Use NumPy when: (1) your data is purely numeric with no column names or mixed types needed; (2) you are implementing mathematical operations — matrix multiplication, eigenvalues, linear algebra; (3) you are passing data to scikit-learn, PyTorch, or TensorFlow, which all accept NumPy arrays as their native input format; (4) you are working with image data (3D arrays of pixel values) or audio data (1D arrays of samples). Use Pandas when the data is tabular with mixed types, named columns, and operations like groupby, merge, or reshape.

**Q4: What does `.groupby()` do and what does it return?**

`.groupby(column)` splits the DataFrame into groups based on unique values in the specified column, then lets you apply an aggregation function to each group. `df.groupby("grade")["score"].mean()` produces a Series with one entry per unique grade value, containing the mean score for each grade. It does not return a DataFrame by default — it returns a grouped object that is evaluated lazily. Adding `.reset_index()` after the aggregation converts the result back to a standard DataFrame. Internally, Pandas implements groupby with hash-based splitting, which is significantly faster than looping over unique values.

**Q5: How do you handle missing values in a Pandas DataFrame before passing data to an ML model?**

First, identify missing values with `df.isnull().sum()` — this shows the count per column. Then choose a strategy per column: drop rows with `df.dropna(subset=["critical_col"])` when missing values in that column invalidate the row; fill with a constant with `df["col"].fillna(0)`; fill with the column mean with `df["col"].fillna(df["col"].mean())`; or use forward-fill with `df["col"].ffill()` for time-series data. ML models cannot handle `NaN` — scikit-learn will raise a `ValueError` immediately, PyTorch will silently propagate `NaN` through the entire computation graph.

---

## Resources

- [NumPy Official Docs](https://numpy.org/doc/stable/) — Complete NumPy reference with examples
- [Pandas Official Docs](https://pandas.pydata.org/docs/) — Complete Pandas reference and user guide
- [Real Python — NumPy Tutorial](https://realpython.com/numpy-tutorial/) — Practical NumPy guide for data science
- [Pandas Getting Started](https://pandas.pydata.org/docs/getting_started/intro_tutorials/) — Official 10-minute getting-started guide

---

## Conclusion & Next Steps

NumPy and Pandas are the bridge between raw Python and machine learning. Every training dataset you feed to a model, every feature matrix you construct, and every result you analyse passes through these two libraries. With this foundation, you have the tools to move from Python scripts into full data science and ML workflows.

In the final article of this series — **Python Best Practices and Clean Code for AI Projects** — you will learn how to structure, type-hint, lint, and package a production-ready Python project so that the code you write today is maintainable tomorrow.

---

Subscribe to get new articles delivered to your inbox.
New posts every week across 9 AI learning pillars.

---
