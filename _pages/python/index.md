---
layout: page
title: Python Programming
permalink: /python/
description: Master Python fundamentals, OOP, and best practices for professional development
---

# Python Programming

## Overview

Python is the foundation of modern AI, data science, and web development. This pillar covers everything from basic syntax to advanced programming concepts and best practices.

## What You'll Learn

### Core Concepts
- **Syntax & Data Types**: Variables, strings, numbers, lists, dictionaries, tuples
- **Control Flow**: Conditionals, loops, and flow control
- **Functions**: Function definition, parameters, return values, and closures
- **Object-Oriented Programming**: Classes, inheritance, polymorphism, and encapsulation
- **Functional Programming**: Lambda functions, map, filter, reduce

### Advanced Topics
- **Error Handling**: Try-except blocks, custom exceptions
- **File I/O**: Reading and writing files
- **Modules & Packages**: Importing and creating modules
- **Decorators**: Function and class decorators
- **Context Managers**: With statements and file handling

### Best Practices
- Code style and PEP 8 guidelines
- Documentation and type hints
- Testing and debugging
- Performance optimization

## Key Skills

✅ Write clean, efficient Python code  
✅ Understand OOP principles  
✅ Work with popular libraries and frameworks  
✅ Debug and optimize Python applications  
✅ Follow industry best practices  

## Complete Learning Curriculum

Explore each level of Python mastery with comprehensive courses:

### 🟢 [Level 1: Python Basics](/python/basics/)

**Master the fundamentals** - Perfect for complete beginners with no programming experience.

- Variables, data types, and basic operations
- Control flow with if/elif/else statements and loops
- Input/output operations
- Comments and code style
- **Estimated Time:** 2-3 weeks (20-30 hours)

[📖 Start Python Basics Course →](/python/basics/){: .btn .btn-primary}

---

### 🟡 [Level 2: Python Pre-Intermediate](/python/pre-intermediate/)

**Build real programs** - For those who completed basics and want to build practical applications.

- Data structures: Lists, tuples, dictionaries, and sets
- Functions and code organization
- File I/O operations
- Exception handling and error management
- **Estimated Time:** 3-4 weeks (30-40 hours)

[📖 Start Pre-Intermediate Course →](/python/pre-intermediate/){: .btn .btn-primary}

---

### 🟠 [Level 3: Python Intermediate](/python/intermediate/)

**Become a Python developer** - Ready for object-oriented and advanced concepts.

- Object-Oriented Programming (OOP)
- Inheritance and polymorphism
- Decorators and generators
- Context managers and magic methods
- **Estimated Time:** 4-6 weeks (40-60 hours)

[📖 Start Intermediate Course →](/python/intermediate/){: .btn .btn-primary}

---

### 🔵 [Level 4: Python Post-Intermediate](/python/post-intermediate/)

**Production-ready code** - For developers building real-world applications.

- Advanced OOP design patterns
- Asynchronous programming and concurrency
- Type hints and static typing
- Comprehensive testing strategies
- **Estimated Time:** 5-7 weeks (50-70 hours)

[📖 Start Post-Intermediate Course →](/python/post-intermediate/){: .btn .btn-primary}

---

### 🔴 [Level 5: Python Advanced](/python/advanced/)

**Master Python internals** - For advanced developers optimizing and extending Python.

- Performance profiling and optimization
- Memory management and garbage collection
- C extensions and Cython
- Web frameworks (Flask, FastAPI)
- Data science fundamentals (NumPy, Pandas)
- **Estimated Time:** 6-8 weeks (60-80 hours)

[📖 Start Advanced Course →](/python/advanced/){: .btn .btn-primary}

## Path Forward

After mastering Python, you'll be ready for:
- **Data Analysis** - Use Python for data analysis
- **API Development** - Build web services with Flask and FastAPI
- **Machine Learning** - Apply Python to ML projects

---

<style>
/* Learning Path Snippets */
.learning-snippet {
  background: var(--card-bg);
  border-left: 5px solid #667eea;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  transition: all 0.3s ease;
}

.learning-snippet:hover {
  transform: translateX(5px);
  box-shadow: 0 6px 20px var(--card-shadow);
}

.learning-snippet h4 {
  margin-top: 0;
  color: var(--text-primary);
  font-size: 1.2em;
}

.learning-snippet.beginner {
  border-left-color: #10b981;
}

.learning-snippet.pre-intermediate {
  border-left-color: #3b82f6;
}

.learning-snippet.intermediate {
  border-left-color: #f59e0b;
}

.learning-snippet.post-intermediate {
  border-left-color: #8b5cf6;
}

.learning-snippet.advanced {
  border-left-color: #ef4444;
}

.snippet-summary {
  color: var(--text-secondary);
  font-size: 0.95em;
  line-height: 1.6;
  margin-bottom: 15px;
}

.learning-snippet ul {
  margin: 15px 0;
  padding-left: 20px;
  list-style: none;
}

.learning-snippet ul li {
  color: var(--text-secondary);
  margin: 8px 0;
  padding-left: 20px;
  position: relative;
}

.learning-snippet ul li:before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--accent-primary);
  font-weight: bold;
}

.btn-snippet {
  display: inline-block;
  background: var(--accent-primary);
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9em;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.btn-snippet:hover {
  background: var(--accent-secondary);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .learning-snippet {
    padding: 15px;
    margin: 15px 0;
  }

  .learning-snippet h4 {
    font-size: 1.1em;
  }

  .content-modal {
    width: 95%;
    max-height: 80vh;
  }

  .content-modal-body {
    max-height: 60vh;
  }
}
</style>

<!-- Content Modal -->
<div id="contentModal" class="content-modal-overlay" onclick="closeContentModal()">
  <div class="content-modal" onclick="event.stopPropagation()">
    <div class="content-modal-header">
      <h3 id="modalTitle"></h3>
      <button class="close-btn" onclick="closeContentModal()">&times;</button>
    </div>
    <div class="content-modal-body" id="contentModalBody">
      <p>Loading content...</p>
    </div>
  </div>
</div>

<!-- Additional Styles for Modal -->
<style>
.content-modal-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  overflow-y: auto;
  animation: fadeIn 0.3s ease-in;
}

.content-modal-overlay.active {
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.content-modal {
  background: var(--bg-primary);
  color: var(--text-primary);
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 800px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.content-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 2px solid var(--accent-primary);
}

.content-modal-header h3 {
  margin: 0;
  font-size: 1.5em;
  color: var(--text-primary);
}

.close-btn {
  background: none;
  border: none;
  font-size: 28px;
  color: var(--text-primary);
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: var(--accent-primary);
}

.content-modal-body {
  padding: 20px;
  overflow-y: auto;
  flex: 1;
  font-size: 1em;
  line-height: 1.6;
}

.content-modal-body h2 {
  color: var(--accent-primary);
  margin-top: 20px;
  margin-bottom: 10px;
}

.content-modal-body h3 {
  color: var(--accent-secondary);
  margin-top: 15px;
  margin-bottom: 8px;
}

.content-modal-body p {
  margin-bottom: 10px;
}

.content-modal-body ul,
.content-modal-body ol {
  margin-left: 20px;
  margin-bottom: 10px;
}

.content-modal-body li {
  margin-bottom: 5px;
}

.content-modal-body code {
  background: var(--bg-secondary);
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 0.95em;
}

.content-modal-body pre {
  background: var(--bg-secondary);
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
  margin: 10px 0;
}

.content-modal-body pre code {
  background: none;
  padding: 0;
}
</style>

<script>
// Content ID to file path and section mapping
const contentMapping = {
  'basics-variables': { file: 'python1', section: 'Variables and Data Types' },
  'basics-control-flow': { file: 'python1', section: 'Basic Control Flow' },
  'preint-functions': { file: 'python2', section: 'Functions' },
  'preint-datastructures': { file: 'python2', section: 'Lists' },
  'int-oop': { file: 'python3', section: 'Object-Oriented Programming (OOP)' },
  'int-error-handling': { file: 'python2', section: 'Exception Handling' },
  'postint-decorators': { file: 'python3', section: 'Decorators' },
  'postint-modules': { file: 'python2', section: 'Modules and Packages' },
  'adv-context-managers': { file: 'python4', section: 'Context Managers' },
  'adv-metaclasses': { file: 'python5', section: 'Metaclasses' }
};

function openLearningContent(contentId, title) {
  const modal = document.getElementById('contentModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('contentModalBody');
  
  modalTitle.textContent = title;
  
  // Look up which file contains this content
  const contentRef = contentMapping[contentId];
  if (contentRef && contentCache[contentRef.file]) {
    // Extract the section from the full file content
    const fullContent = contentCache[contentRef.file];
    const section = extractSection(fullContent, contentRef.section);
    if (section) {
      modalBody.innerHTML = section;
    } else {
      // If section not found, show full content
      modalBody.innerHTML = fullContent;
    }
  } else {
    modalBody.innerHTML = `<p><em>Loading content for <strong>${title}</strong>...</em></p>`;
  }
  
  // Scroll to top of modal content
  modalBody.scrollTop = 0;
  modal.classList.add('active');
}

function extractSection(content, sectionName) {
  // Extract content from h2/h3 heading to the next h2
  const regex = new RegExp(`<h[23]>.*?${escapeRegex(sectionName)}.*?<\\/h[23]>(.*?)(?=<h2>|$)`, 'is');
  const match = content.match(regex);
  return match ? match[1] : null;
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function closeContentModal() {
  const modal = document.getElementById('contentModal');
  modal.classList.remove('active');
}

// Close modal when pressing Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeContentModal();
  }
});

// Load content from hidden divs when page loads
const contentCache = {};
document.addEventListener('DOMContentLoaded', function() {
  const python1Content = document.getElementById('python-content-1');
  const python2Content = document.getElementById('python-content-2');
  const python3Content = document.getElementById('python-content-3');
  const python4Content = document.getElementById('python-content-4');
  const python5Content = document.getElementById('python-content-5');
  
  if (python1Content) contentCache['python1'] = python1Content.innerHTML;
  if (python2Content) contentCache['python2'] = python2Content.innerHTML;
  if (python3Content) contentCache['python3'] = python3Content.innerHTML;
  if (python4Content) contentCache['python4'] = python4Content.innerHTML;
  if (python5Content) contentCache['python5'] = python5Content.innerHTML;
});
</script>

<!-- Hidden divs to store full markdown content (loaded via Jekyll includes) -->
<div id="python-content-1" style="display: none;">
{% include python/Python/01_Python_Basics.md %}
</div>

<div id="python-content-2" style="display: none;">
{% include python/Python/02_Python_Pre_Intermediate.md %}
</div>

<div id="python-content-3" style="display: none;">
{% include python/Python/03_Python_Intermediate.md %}
</div>

<div id="python-content-4" style="display: none;">
{% include python/Python/04_Python_Post_Intermediate.md %}
</div>

<div id="python-content-5" style="display: none;">
{% include python/Python/05_Python_Advanced.md %}
</div>

*Last updated: 2026-02-10*
