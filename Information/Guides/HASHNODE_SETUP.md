# Hashnode Setup Guide — Venu Madhavan AI Blog

## Step 1: Create Your Account

1. Go to [hashnode.com](https://hashnode.com) and click **Sign up**
2. Sign in with **Google** (use venumangenamadhavan@gmail.com)
3. Choose username: `venumadhavan`
   - Your blog URL will be: `https://venumadhavan.hashnode.dev`
4. Skip the "pick topics" prompt — you'll configure this manually

---

## Step 2: Profile Setup

Go to **Settings → Profile** and fill in:

| Field | Value |
|---|---|
| Display Name | Mangena Venu Madhavan |
| Tagline | Python Developer & Generative AI Specialist |
| Bio | Associate Consultant at Infosys with 4+ years building AI agents, RAG systems, and intelligent automation. I write structured, practical articles on Data Science, Machine Learning, and Generative/Agentic AI — from fundamentals to production. |
| Location | Hyderabad, India |
| Website | https://madhavan11601828.github.io |
| GitHub | madhavan11601828 |
| LinkedIn | mangenavenumadhavan |
| Twitter/X | (add if you have one) |

---

## Step 3: Blog Settings

Go to **Blog Dashboard → Settings → General**:

| Field | Value |
|---|---|
| Blog Title | Mangena Venu Madhavan — AI Learning Blog |
| Blog Subtitle | Structured AI education from Python to Agentic AI |
| Custom Domain | Leave as venumadhavan.hashnode.dev (free) |

Go to **Settings → SEO**:

| Field | Value |
|---|---|
| Meta Title | Mangena Venu Madhavan — Generative AI & Data Science |
| Meta Description | Practical AI learning articles covering Python, ML, NLP, Computer Vision, Deep Learning, Generative AI, and Agentic AI. Written by a Generative AI Specialist at Infosys. |

---

## Step 4: GitHub Backup (Archive Protection)

This auto-saves every article to a private GitHub repo as markdown.

1. Go to **Blog Dashboard → Settings → GitHub**
2. Click **Connect GitHub**
3. Authorize Hashnode
4. Create a new **private** repo on GitHub: `hashnode-articles-backup`
5. Select that repo in Hashnode
6. Enable **Auto backup on publish**

Every time you publish, a markdown file is committed to your GitHub repo — permanent archive, full history.

---

## Step 5: LinkedIn Auto-Post

1. Go to **Blog Dashboard → Settings → Integrations**
2. Find **LinkedIn** and click **Connect**
3. Authorize with your LinkedIn account
4. Enable **Auto-share on publish**

Every new article will automatically post to your LinkedIn feed with a rich preview card.

---

## Step 6: Create the 9 Series

Series = Hashnode's equivalent of your 9 learning pillars. Each series groups related articles.

Go to **Blog Dashboard → Series → New Series** for each one below.

---

### Series 1 — Python Programming

| Field | Value |
|---|---|
| Name | Python Programming |
| Slug | python-programming |
| Description | Master Python from fundamentals to advanced — data structures, OOP, functional programming, best practices, and Python patterns used in real AI/ML projects. |
| Cover Color | #3776AB (Python blue) |

**Tags to use on articles:** `python`, `programming`, `beginner`, `tutorial`

---

### Series 2 — API Development

| Field | Value |
|---|---|
| Name | API Development |
| Slug | api-development |
| Description | Build production-ready APIs with Flask, FastAPI, and Django. Covers REST design, authentication, deployment, and integrating AI models into web services. |
| Cover Color | #009688 (teal) |

**Tags to use on articles:** `api`, `fastapi`, `flask`, `django`, `webdev`

---

### Series 3 — Data Analysis

| Field | Value |
|---|---|
| Name | Data Analysis |
| Slug | data-analysis |
| Description | From raw data to actionable insights. Covers NumPy, Pandas, data cleaning, exploratory data analysis (EDA), and visualization with Matplotlib and Seaborn. |
| Cover Color | #FF6B6B (red) |

**Tags to use on articles:** `datascience`, `pandas`, `numpy`, `eda`, `dataanalysis`

---

### Series 4 — Machine Learning

| Field | Value |
|---|---|
| Name | Machine Learning |
| Slug | machine-learning |
| Description | Build intelligent predictive systems. Covers supervised and unsupervised learning algorithms — Linear Regression, Random Forest, XGBoost, KMeans, PCA — with Python implementations and real-world use cases. |
| Cover Color | #4ECDC4 (teal-green) |

**Tags to use on articles:** `machinelearning`, `sklearn`, `python`, `ai`, `datascience`

---

### Series 5 — Natural Language Processing

| Field | Value |
|---|---|
| Name | Natural Language Processing |
| Slug | nlp |
| Description | Teach machines to understand human language. Covers text preprocessing, TF-IDF, Word2Vec, sentiment analysis, text classification, NER, and topic modeling. |
| Cover Color | #45B7D1 (sky blue) |

**Tags to use on articles:** `nlp`, `textmining`, `machinelearning`, `python`, `ai`

---

### Series 6 — Computer Vision

| Field | Value |
|---|---|
| Name | Computer Vision |
| Slug | computer-vision |
| Description | Teach machines to see. Covers image processing, CNN architecture, transfer learning, object detection with YOLO, image segmentation, and OCR — with working Python code. |
| Cover Color | #FFA07A (salmon) |

**Tags to use on articles:** `computervision`, `deeplearning`, `cnn`, `opencv`, `python`

---

### Series 7 — Deep Learning & Transformers

| Field | Value |
|---|---|
| Name | Deep Learning & Transformers |
| Slug | deep-learning |
| Description | Master advanced neural architectures. Covers backpropagation, RNN, LSTM, the Attention mechanism, Transformer architecture, BERT, and GPT — building from math to implementation. |
| Cover Color | #98D8C8 (mint green) |

**Tags to use on articles:** `deeplearning`, `transformers`, `pytorch`, `bert`, `neuralnetworks`

---

### Series 8 — Generative AI & LLMs

| Field | Value |
|---|---|
| Name | Generative AI & LLMs |
| Slug | generative-ai |
| Description | Build with Large Language Models. Covers LLM fundamentals, prompt engineering, Retrieval-Augmented Generation (RAG), vector databases, LangChain, LangGraph, LLM routing, and fine-tuning. |
| Cover Color | #F7DC6F (gold) |

**Tags to use on articles:** `generativeai`, `llm`, `rag`, `langchain`, `promptengineering`, `openai`

---

### Series 9 — Agentic AI

| Field | Value |
|---|---|
| Name | Agentic AI |
| Slug | agentic-ai |
| Description | Build autonomous AI agents. Covers tool calling, multi-agent systems, memory management, planning and reasoning, human-in-the-loop workflows, safety guardrails, and production agent architecture. |
| Cover Color | #BB8FCE (purple) |

**Tags to use on articles:** `agenticai`, `aiagents`, `langchain`, `langgraph`, `automation`, `llm`

---

## Step 7: Article Frontmatter for Hashnode

When writing articles in Hashnode's editor, set these fields for each post:

```
Title:       [Article title]
Subtitle:    [One-line hook / what the reader will learn]
Series:      [Select from the 9 series above]
Tags:        [3-5 tags from the series tag list above]
Cover Image: [Optional — a relevant image improves LinkedIn click-through]
SEO Title:   [Same as title, or slightly expanded with keywords]
SEO Desc:    [150-160 characters summarizing the article + keywords]
```

---

## Step 8: Import Your Existing Jekyll Posts

For each existing post in `_posts/`, copy the content into a new Hashnode draft:

| Jekyll Post | Hashnode Series |
|---|---|
| `2026-02-01-agentic-ai-intro.md` | Agentic AI |
| `2026-01-25-building-rag-systems.md` | Generative AI & LLMs |
| `2026-01-25-github-pages-blog-part-1.md` | (skip — meta content, not AI learning) |
| `2026-01-26-github-pages-blog-part-2.md` | (skip) |

---

## Step 9: Article Naming Convention on Hashnode

Use consistent slugs so URLs are clean and SEO-friendly:

```
Pattern:  /series-slug/topic-name
Example:  /generative-ai/building-rag-systems-with-langchain
Example:  /machine-learning/random-forest-explained-with-code
Example:  /agentic-ai/intro-to-ai-agents
```

Set the slug manually in each article's settings before publishing.

---

## Step 10: Newsletter (Optional but Recommended)

1. Go to **Settings → Newsletter**
2. Enable newsletter
3. Add a newsletter CTA at the bottom of every article:

```
---
Subscribe to get new articles delivered to your inbox.
New posts every week across 9 AI learning pillars.
```

Hashnode handles the subscribe form, email delivery, and unsubscribes — all free.

---

## Quick Reference: Series → Pillar → Color

| # | Hashnode Series | GitHub Pages Pillar URL | Color |
|---|---|---|---|
| 1 | Python Programming | /python/ | #3776AB |
| 2 | API Development | /api-development/ | #009688 |
| 3 | Data Analysis | /foundations/ | #FF6B6B |
| 4 | Machine Learning | /machine-learning/ | #4ECDC4 |
| 5 | NLP | /nlp/ | #45B7D1 |
| 6 | Computer Vision | /computer-vision/ | #FFA07A |
| 7 | Deep Learning & Transformers | /deep-learning/ | #98D8C8 |
| 8 | Generative AI & LLMs | /generative-ai/ | #F7DC6F |
| 9 | Agentic AI | /agentic-ai/ | #BB8FCE |

---

## Publishing Workflow (After Setup)

```
1. Write article in Hashnode editor
   → Use 8-section template
   → Select correct Series
   → Add 3-5 tags
   → Set slug manually

2. Click Publish
   → Hashnode publishes the article
   → GitHub backup auto-commits (archive created)
   → LinkedIn auto-post fires (reach your network)

3. GitHub Pages auto-updates
   → Next article you add to _posts/ on Jekyll
      will appear on the landing page grid
   → Links to Hashnode for full read
```

---

*Last Updated: May 2026*
*Maintained by: Mangena Venu Madhavan*
