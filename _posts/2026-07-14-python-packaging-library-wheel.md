---
title: "Python Packaging: From Local Module to Installable Wheel"
author: "Mangena Venu Madhavan"
date: 2026-07-14
tags: [Python, Programming, Beginner, Tutorial]
categories: [python-programming]
series: "Python Programming"
article_number: 9
---

## Key Takeaways

- You will turn a plain Python file into an importable package using `__init__.py`
- You will structure a reusable library with `pyproject.toml` and proper metadata
- You will install your own library in editable mode so changes reflect instantly — no reinstall
- You will build a `.whl` (wheel) file — a self-contained, shareable Python package
- You will install your wheel into another project exactly like any third-party library
- You will understand why every AI library you use (LangChain, scikit-learn) is distributed as a wheel

---

## Who This Is For & Prerequisites

This article is for Python developers who have completed Articles 1–8 of this series and want to package their own utilities so they can be reused across multiple projects without copy-pasting files.

**You must have read:**
- Article 2: Functions — the code being packaged uses functions
- Article 4: Classes — the library uses a class-based structure
- Article 8: Best Practices — virtual environments and `pyproject.toml` are prerequisites

**You do NOT need:**
- Any experience with package publishing
- A PyPI account — this article keeps everything local

```bash
pip install build
```

No API keys. No cost.

---

## What You Will Build

By the end of this article you will have:
- A `scoretools` Python package with an importable `data_loader` module
- A `pyproject.toml` that describes the library and its dependencies
- An editable install (`pip install -e .`) so you develop and test simultaneously
- A `.whl` wheel file built with `python -m build`
- A second project that installs and uses the wheel — exactly like `pip install numpy`

Expected final output when you run the consumer project:

```
=== Using scoretools wheel ===

Loading scores from scores.csv...
Loaded 5 records

Average: 72.6
Highest: 92
Passed: 4 / 5

scoretools version: 0.1.0
```

---

## Problem Statement

Every project you write eventually produces utilities worth reusing: a data loader that cleans CSV records, a logger factory, a custom validator, a model wrapper. Without packaging, you copy these files between projects. The moment you fix a bug in one copy, the other copies are stale. Three projects in, you have three diverging versions of the same function.

Python packaging solves this. You write the utility once, package it, and install it into every project that needs it. When you fix a bug, you bump the version, rebuild the wheel, and update the consumer projects — one source of truth, zero drift.

Every library you use is already doing exactly this: NumPy, Pandas, scikit-learn, LangChain — all distributed as wheels. This article shows you the inside of that process.

---

## Concept Simply

A **package** is a folder with an `__init__.py` file that tells Python "this folder is importable." A **library** is a package bundled with metadata — name, version, author, dependencies — so anyone can install it. A **wheel** (`.whl`) is a zip file containing that library in a format `pip` understands. Installing a wheel is identical to installing from PyPI — `pip install` works the same way.

| What you have | What it is | How you use it |
|---|---|---|
| `data_loader.py` | A plain Python file | Copy-paste between projects |
| `scoretools/` with `__init__.py` | A local package | `import scoretools` if you are in the same parent folder |
| `pip install -e .` | Editable install | `import scoretools` anywhere in the same venv — changes reflect immediately |
| `scoretools-0.1.0-py3-none-any.whl` | Wheel file | `pip install scoretools-0.1.0-py3-none-any.whl` — works in any project, any machine |

---

## Core Components

### 1. The `__init__.py` File

Any folder containing `__init__.py` is a Python package. The file can be empty, or it can expose a clean public API by importing from submodules.

```
scoretools/
├── __init__.py
└── data_loader.py
```

```python
# scoretools/__init__.py
from .data_loader import load_scores, calculate_average

__version__ = "0.1.0"
```

The `.` prefix in `from .data_loader` is a relative import — it means "from `data_loader.py` inside this same package folder." After this, a consumer can write `from scoretools import load_scores` directly.

### 2. Package vs Module

```python
# Module — a single .py file
import data_loader          # works only if data_loader.py is in the same folder

# Package — a folder with __init__.py
import scoretools            # works anywhere the package is installed
from scoretools import load_scores
from scoretools.data_loader import calculate_average
```

### 3. `pyproject.toml` for a Library

The same file used for project settings in Article 8 also defines package metadata when building a library.

```toml
[build-system]
requires = ["setuptools>=68", "wheel"]
build-backend = "setuptools.backends.legacy:build"

[project]
name = "scoretools"
version = "0.1.0"
description = "Utilities for loading and analysing score data"
requires-python = ">=3.9"
dependencies = []

[tool.setuptools.packages.find]
where = ["."]
include = ["scoretools*"]
```

### 4. Editable Install

During development, install the package in editable mode so every change to the source is immediately available without reinstalling.

```bash
pip install -e .
```

After this, `import scoretools` works anywhere in the active virtual environment. Edit `scoretools/data_loader.py`, and the next `import` picks up the change automatically.

### 5. Building a Wheel

```bash
python -m build
```

This creates two files inside a `dist/` folder:

```
dist/
├── scoretools-0.1.0-py3-none-any.whl
└── scoretools-0.1.0.tar.gz
```

The `.whl` file is the distributable. The `.tar.gz` is the source distribution — useful for PyPI but not needed for local sharing.

### 6. Installing a Wheel in Another Project

```bash
pip install dist/scoretools-0.1.0-py3-none-any.whl
```

Or share the file and install from a path:

```bash
pip install /path/to/scoretools-0.1.0-py3-none-any.whl
```

After installation, `import scoretools` works in any project that has the wheel installed — exactly like `import pandas` after `pip install pandas`.

![Python Packaging Flow — left: source folder with __init__.py and data_loader.py → pyproject.toml → python -m build → .whl file → pip install → consumer project importing scoretools](/assets/images/python-packaging-wheel-flow.png)

---

## Design Trade-offs

| Decision | Option A | Option B | When to choose |
|---|---|---|---|
| Editable install vs wheel | `pip install -e .` | Build + install `.whl` | Editable during active development; wheel for sharing with others or deploying |
| Flat layout vs `src/` layout | `scoretools/` at root | `src/scoretools/` | `src/` layout prevents accidental imports of the local folder instead of the installed package — prefer it for published libraries |
| Empty `__init__.py` vs re-exporting | `__init__.py` empty | `__init__.py` imports public API | Re-export in `__init__.py` for clean `from scoretools import func` syntax; leave empty if you prefer explicit `from scoretools.module import func` |
| Local wheel vs PyPI | Share `.whl` file directly | Publish to PyPI | Local wheel for team-internal tools; PyPI for open-source or cross-organisation sharing |
| Single module vs sub-packages | `scoretools/data_loader.py` | `scoretools/loaders/csv_loader.py` | Sub-packages when the library grows beyond 3–4 modules |

---

## Hands-on Tutorial

We will package the `data_loader` module from Article 8 into a proper library called `scoretools`, build a wheel, and use it in a separate consumer project.

### Step 1: Create the package folder

Start from a clean directory called `scoretools_lib/`:

```
scoretools_lib/
├── scoretools/
│   ├── __init__.py
│   └── data_loader.py
└── pyproject.toml
```

Create the folders:

```bash
mkdir scoretools_lib
cd scoretools_lib
mkdir scoretools
```

---

### Step 2: Write the module

Create `scoretools/data_loader.py`:

```python
import csv
import logging
import sys
from pathlib import Path


def get_logger(name: str) -> logging.Logger:
    logger = logging.getLogger(name)
    if not logger.handlers:
        logger.setLevel(logging.INFO)
        handler = logging.StreamHandler(sys.stdout)
        handler.setFormatter(
            logging.Formatter("%(asctime)s | %(levelname)s | %(message)s")
        )
        logger.addHandler(handler)
    return logger


logger = get_logger("scoretools")


def load_scores(filepath: str) -> list[dict[str, int | str]]:
    path = Path(filepath)
    if not path.exists():
        raise FileNotFoundError(f"File not found: {filepath}")
    records: list[dict[str, int | str]] = []
    logger.info("Loading scores from %s", filepath)
    with open(path, newline="") as f:
        reader = csv.DictReader(f)
        for i, row in enumerate(reader, start=1):
            try:
                records.append({"name": row["name"], "score": int(row["score"])})
            except (ValueError, KeyError) as e:
                logger.warning("Skipping row %d — %s", i, e)
    logger.info("Loaded %d records", len(records))
    return records


def calculate_average(scores: list[int]) -> float:
    if not scores:
        raise ValueError("Cannot calculate average of empty list")
    return sum(scores) / len(scores)


def count_passing(scores: list[int], threshold: int = 50) -> int:
    return sum(1 for s in scores if s >= threshold)
```

---

### Step 3: Write `__init__.py`

Create `scoretools/__init__.py`:

```python
from .data_loader import load_scores, calculate_average, count_passing

__version__ = "0.1.0"
__all__ = ["load_scores", "calculate_average", "count_passing"]
```

This exposes the public API. A consumer can now write `from scoretools import load_scores` without knowing which internal module it lives in.

---

### Step 4: Write `pyproject.toml`

Create `scoretools_lib/pyproject.toml`:

```toml
[build-system]
requires = ["setuptools>=68", "wheel"]
build-backend = "setuptools.backends.legacy:build"

[project]
name = "scoretools"
version = "0.1.0"
description = "Utilities for loading and analysing score data"
authors = [{ name = "Your Name", email = "you@example.com" }]
requires-python = ">=3.9"
dependencies = []

[project.optional-dependencies]
dev = ["pytest>=8.0", "black>=24.0", "mypy>=1.8"]

[tool.setuptools.packages.find]
where = ["."]
include = ["scoretools*"]
```

---

### Step 5: Install in editable mode and verify

```bash
cd scoretools_lib
python -m venv .venv
source .venv/bin/activate    # Windows: .venv\Scripts\activate
pip install -e .
```

Verify it installed:

```bash
pip show scoretools
```

Expected output:
```
Name: scoretools
Version: 0.1.0
Summary: Utilities for loading and analysing score data
Location: /path/to/scoretools_lib
```

Test the import in Python:

```python
import scoretools
print(scoretools.__version__)    # 0.1.0

from scoretools import load_scores, calculate_average
```

---

### Step 6: Build the wheel

```bash
pip install build
python -m build
```

Expected output:
```
* Building sdist...
* Building wheel...
Successfully built scoretools-0.1.0.tar.gz and scoretools-0.1.0-py3-none-any.whl
```

Check the `dist/` folder:

```
scoretools_lib/
└── dist/
    ├── scoretools-0.1.0-py3-none-any.whl
    └── scoretools-0.1.0.tar.gz
```

---

### Step 7: Use the wheel in a consumer project

Create a completely separate project folder called `ai_pipeline/`:

```bash
mkdir ../ai_pipeline
cd ../ai_pipeline
python -m venv .venv
source .venv/bin/activate
```

Install the wheel:

```bash
pip install ../scoretools_lib/dist/scoretools-0.1.0-py3-none-any.whl
```

Create `ai_pipeline/scores.csv`:

```csv
name,score
Alice,88
Bob,45
Carol,92
David,60
Eve,78
```

Create `ai_pipeline/main.py`:

```python
import scoretools
from scoretools import load_scores, calculate_average, count_passing

print("=== Using scoretools wheel ===\n")

records = load_scores("scores.csv")
scores = [r["score"] for r in records]

avg = calculate_average(scores)
highest = max(scores)
passed = count_passing(scores)

print(f"\nAverage: {avg}")
print(f"Highest: {highest}")
print(f"Passed: {passed} / {len(scores)}")
print(f"\nscoretools version: {scoretools.__version__}")
```

Run it:

```bash
python main.py
```

Expected output:
```
=== Using scoretools wheel ===

2026-07-14 10:00:00 | INFO | Loading scores from scores.csv
2026-07-14 10:00:00 | INFO | Loaded 5 records

Average: 72.6
Highest: 92
Passed: 4 / 5

scoretools version: 0.1.0
```

The consumer project has no copy of `data_loader.py`. It uses the installed wheel just like `import pandas` — the source lives in one place and the wheel is the distribution artifact.

---

### Step 8: Update the library and rebuild

Edit `scoretools/data_loader.py` — add a new function:

```python
def summary(records: list[dict[str, int | str]]) -> dict[str, float | int]:
    scores = [r["score"] for r in records]
    return {
        "count": len(scores),
        "average": calculate_average(scores),
        "highest": max(scores),
        "lowest": min(scores),
        "passing": count_passing(scores),
    }
```

Add it to `scoretools/__init__.py`:

```python
from .data_loader import load_scores, calculate_average, count_passing, summary
__all__ = ["load_scores", "calculate_average", "count_passing", "summary"]
```

Bump the version in `pyproject.toml` and `__init__.py` to `0.2.0`. Rebuild:

```bash
cd ../scoretools_lib
python -m build
```

Update the consumer:

```bash
cd ../ai_pipeline
pip install ../scoretools_lib/dist/scoretools-0.2.0-py3-none-any.whl --force-reinstall
```

The consumer now has the new `summary()` function without touching its own source code.

---

## Real-World Use Case

A data team built a suite of document parsing utilities used across five separate AI pipeline projects. Initially, they maintained five copies of the same `document_loader.py`. When a critical bug was fixed in the copy used by the invoice pipeline, it took three weeks before someone noticed the other four copies still had the bug.

Packaging the utilities into `doctools` — a private internal wheel — took one day. All five projects ran `pip install doctools==1.3.2`. The next bug fix became `doctools==1.3.3`, and all five projects updated in one command each. The bug-propagation problem disappeared entirely.

| Metric | Copy-paste approach | Wheel approach |
|---|---|---|
| Time to propagate a bug fix | 1–3 weeks (manual, discoverable by accident) | Minutes (one `pip install` per project) |
| Versions in sync across 5 projects | Never — always diverged | Always — pinned in each `requirements.txt` |
| Onboarding a new project | Copy files, remember which version | `pip install doctools==1.3.2` |
| Bug introduced by copy-paste error | Common | Impossible — one source of truth |

---

## Debugging & Common Pitfalls

**Pitfall 1: Importing the local folder instead of the installed package**

```
scoretools_lib/
├── scoretools/        # local folder
└── main.py            # import scoretools picks up the folder, not the installed package
```

```
scoretools_lib/
├── src/
│   └── scoretools/    # src/ layout prevents accidental local imports
├── main.py
└── pyproject.toml
```

With a flat layout, running `python main.py` from `scoretools_lib/` imports the local `scoretools/` folder rather than the installed package. The `src/` layout puts the package one level deeper so the local folder is never on the import path. Update `pyproject.toml`: `where = ["src"]`.

---

**Pitfall 2: Forgetting to rebuild after changing source**

```bash
# Changed data_loader.py, but forgot to rebuild
python -m build    # skipped
pip install dist/scoretools-0.1.0-py3-none-any.whl  # installs old wheel
```

```bash
# Bump version, rebuild, reinstall
# In pyproject.toml and __init__.py: version = "0.2.0"
python -m build
pip install dist/scoretools-0.2.0-py3-none-any.whl --force-reinstall
```

A wheel is a snapshot at build time. Changes to source after building do not affect the installed wheel. Always bump the version and rebuild before sharing.

---

**Pitfall 3: Using relative imports outside a package**

```python
# Running data_loader.py directly as a script
from .data_loader import load_scores   # ImportError: attempted relative import
```

```python
# Run as part of the package, not as a script
# Use: python -m scoretools.data_loader  OR import from a consumer script
from scoretools.data_loader import load_scores  # correct absolute import
```

Relative imports (`.module`) only work when the file is imported as part of a package. If you run a file directly with `python data_loader.py`, Python treats it as a top-level script and relative imports fail.

---

**Pitfall 4: Missing `__init__.py` makes the folder invisible as a package**

```
scoretools/
└── data_loader.py    # no __init__.py

import scoretools     # ModuleNotFoundError
```

```
scoretools/
├── __init__.py       # required — can be empty
└── data_loader.py

import scoretools     # works
```

Without `__init__.py`, Python does not recognise the folder as an importable package. The file can be completely empty — its presence is the signal.

---

**Pitfall 5: Installing without a virtual environment and polluting global Python**

```bash
# No venv active
pip install dist/scoretools-0.1.0-py3-none-any.whl   # installs globally
```

```bash
python -m venv .venv
source .venv/bin/activate
pip install dist/scoretools-0.1.0-py3-none-any.whl   # isolated
```

Installing a custom wheel globally means every Python script on the machine can accidentally import it, and upgrading it for one project breaks others. Always work inside a venv, as covered in Article 8.

---

## Testing

```python
import pytest
from scoretools import load_scores, calculate_average, count_passing


def test_calculate_average():
    assert calculate_average([80, 90, 70]) == 80.0


def test_count_passing_default_threshold():
    assert count_passing([88, 45, 92, 60, 78]) == 4


def test_count_passing_custom_threshold():
    assert count_passing([88, 45, 92, 60, 78], threshold=80) == 2


def test_load_scores_file_not_found():
    with pytest.raises(FileNotFoundError):
        load_scores("nonexistent.csv")


def test_load_scores_valid(tmp_path):
    csv_file = tmp_path / "scores.csv"
    csv_file.write_text("name,score\nAlice,88\nBob,72\n")
    records = load_scores(str(csv_file))
    assert len(records) == 2
    assert records[0]["score"] == 88


def test_version_exposed():
    import scoretools
    assert scoretools.__version__ == "0.1.0"
```

Run from the `scoretools_lib/` directory after editable install:

```bash
pytest tests/ -v
```

**Evaluation checklist:**
- [ ] `__init__.py` exists in the package folder
- [ ] Public API re-exported from `__init__.py` so consumers use `from scoretools import func`
- [ ] `pyproject.toml` has `name`, `version`, `requires-python`, and `dependencies`
- [ ] `python -m build` completes without errors
- [ ] `.whl` file exists in `dist/`
- [ ] Consumer project installs wheel in its own venv — not the library's venv
- [ ] Version string accessible as `scoretools.__version__`
- [ ] Tests import from the installed package, not from the local source path

---

## Interview Q&A

**Q1: What is the difference between a Python module, a package, and a library?**

A **module** is a single `.py` file — `data_loader.py` is a module. A **package** is a directory containing an `__init__.py` file and one or more modules — `scoretools/` is a package. A **library** is a package (or collection of packages) that is distributed and installed — it includes metadata like name, version, and dependencies defined in `pyproject.toml`. The distinction matters because `import data_loader` requires the file to be in the same directory or on `sys.path`, while `import scoretools` works anywhere the package is installed.

**Q2: What does `pip install -e .` do and why is it useful during development?**

The `-e` flag installs the package in "editable" mode — instead of copying files into the site-packages directory, pip creates a link pointing back to your source directory. Any changes you make to the source code are immediately reflected the next time you import the package, without reinstalling. This is essential during development because you can edit, test, and iterate without a rebuild cycle. Once development is complete, you build the wheel and distribute that instead.

**Q3: What is a wheel file and why does Python use this format?**

A wheel (`.whl`) is a zip archive following a specific naming convention: `{name}-{version}-{python_tag}-{abi_tag}-{platform_tag}.whl`. `py3-none-any` means pure Python (no compiled extensions), no ABI dependency, compatible with any platform. Wheels install faster than source distributions because no compilation step is needed — pip just unpacks the archive into site-packages. They also capture the exact build-time state of the package, making installs reproducible. Every major Python library you install — NumPy, Pandas, scikit-learn — arrives as a wheel.

**Q4: How do you version a Python package and what conventions should you follow?**

Python packages follow Semantic Versioning: `MAJOR.MINOR.PATCH`. Increment `PATCH` for bug fixes that do not change the API (`0.1.0 → 0.1.1`). Increment `MINOR` for new features that are backwards-compatible (`0.1.0 → 0.2.0`). Increment `MAJOR` for breaking changes that require consumers to update their code (`0.1.0 → 1.0.0`). The version must be updated in both `pyproject.toml` and `__version__` in `__init__.py`. Consumer projects should pin the exact version in `requirements.txt` — `scoretools==0.1.0` — so a new release does not silently change their behaviour.

**Q5: When would you publish a wheel to PyPI versus keeping it as an internal file?**

Publish to PyPI when the library is intended for public use — open-source projects, community tools, packages you want anyone to install with `pip install name`. Keep it as an internal wheel file when the library contains proprietary logic, internal data formats, or team-specific utilities that should not be public. For internal distribution within a team or organisation, a private package registry (Azure Artifacts, AWS CodeArtifact, a private PyPI server with `devpi`) gives you `pip install` convenience without public exposure. Local wheel files work for small teams sharing via file storage or a shared network drive.

---

## Resources

- [Python Packaging User Guide](https://packaging.python.org/en/latest/tutorials/packaging-projects/) — Official step-by-step tutorial for creating and publishing a package
- [setuptools Documentation](https://setuptools.pypa.io/en/latest/) — Complete reference for `pyproject.toml` package configuration
- [PEP 517 — Build System Interface](https://peps.python.org/pep-0517/) — The specification that standardised `pyproject.toml`-based builds
- [Real Python — Python Wheels](https://realpython.com/python-wheels/) — Deep dive into wheel internals and the distribution ecosystem

---

## Conclusion & Next Steps

Packaging transforms a useful script into a shareable, versioned, installable tool. Every time you write a utility worth reusing — a data loader, a custom validator, a model wrapper — packaging it as a wheel means every future project gets a clean, tested, versioned copy with a single `pip install`. This is how the entire Python AI ecosystem works: one wheel per library, installed into isolated virtual environments, with pinned versions guaranteeing reproducibility.

This article completes the Python Programming pillar. You now have a full production toolkit: from writing your first variable in Article 1 to distributing reusable libraries in Article 9. The next pillar — **Data Analysis** — builds directly on this foundation, using NumPy and Pandas at scale to load, clean, and explore real datasets.

---

Subscribe to get new articles delivered to your inbox.
New posts every week across 9 AI learning pillars.

---

<!--
HASHNODE PUBLISH SETTINGS
--------------------------
Series      : Python Programming
Tags        : python, programming, beginner, tutorial
Slug        : python-packaging-library-wheel-file
SEO Title   : Python Packaging: Create and Install a Wheel File
SEO Desc    : Learn to build a Python package, create a .whl wheel file, and install it across projects — the same way NumPy and Pandas are distributed.
Cover Image : Dark background, Python logo left, a packaging flow diagram: source folder → pyproject.toml → python -m build → .whl badge → pip install → consumer project — 1600×840px
Image 1     : Left-to-right flow diagram: scoretools/ folder with __init__.py and data_loader.py → pyproject.toml document icon → build arrow → dist/scoretools-0.1.0.whl file icon → pip install arrow → ai_pipeline/ project importing scoretools
-->
