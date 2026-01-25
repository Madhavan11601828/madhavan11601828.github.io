# 📁 Repository Folder Structure Guide

## Current Directory Structure

```
madhavan11601828.github.io/
│
├── 📄 Configuration Files
│   ├── _config.yaml              # Jekyll main configuration
│   ├── Gemfile                   # Ruby gem dependencies
│   ├── Gemfile.lock              # Locked dependency versions
│   └── .gitignore                # Git ignore rules
│
├── 📝 Documentation & Guides
│   ├── README.md                 # Project overview
│   ├── BLOG_SETUP_GUIDE.md       # Initial setup instructions
│   ├── MULTI_POST_GUIDE.md       # Managing multiple blog posts
│   └── FOLDER_STRUCTURE.md       # This file
│
├── 🏠 Site Pages
│   ├── index.md                  # Homepage (displays blog posts)
│   └── about.md                  # (optional) About page
│
├── 📚 Blog Posts
│   └── _posts/
│       ├── 2026-01-25-building-rag-systems.md
│       ├── 2026-02-01-agentic-ai-intro.md
│       └── YYYY-MM-DD-title.md   # (future posts)
│
├── 📋 Post Templates & Drafts
│   └── _templates/
│       ├── post-template.md      # Template for new posts
│       └── drafts/               # (optional) Work-in-progress
│
├── 📦 Static Assets
│   └── assets/
│       ├── images/               # Blog post images
│       ├── css/                  # Custom stylesheets
│       ├── js/                   # Custom JavaScript
│       └── files/                # (optional) Downloadable files
│
├── 🔧 Jekyll Build Output (Generated)
│   ├── _site/                    # Generated HTML (don't commit)
│   └── .jekyll-cache/            # Cache files (don't commit)
│
└── 🎨 Theme & Custom Styling (Advanced)
    └── _includes/                # (optional) Custom HTML includes
        └── custom-head.html      # (optional) Custom head content
```

---

## 📂 Detailed Folder Descriptions

### Root Level Files

| File | Purpose |
|------|---------|
| `_config.yaml` | Main Jekyll configuration - controls site behavior |
| `Gemfile` | Specifies Ruby dependencies (Jekyll, plugins, etc.) |
| `.gitignore` | Tells Git which files to ignore |
| `README.md` | Project documentation on GitHub |
| `index.md` | Homepage that auto-generates post list |

### `_posts/` Directory

**Purpose:** Contains all blog post files

**Naming Rules:**
- Format: `YYYY-MM-DD-title-with-hyphens.md`
- Date is REQUIRED and must match post date in frontmatter
- Use hyphens to separate words (no spaces)

**Example Structure:**
```
_posts/
├── 2026-01-25-building-rag-systems.md
├── 2026-02-01-agentic-ai-intro.md
├── 2026-02-15-llm-optimization.md
└── 2026-03-10-data-pipeline-design.md
```

### `assets/` Directory

**Purpose:** Store images, stylesheets, and other static files

#### `assets/images/`
Store all blog post images:
```
assets/images/
├── rag-architecture.png
├── agent-workflow.jpg
├── llm-comparison.svg
└── data-pipeline.png
```

**Reference in posts:**
```markdown
![Image Description](/assets/images/filename.png)
```

#### `assets/css/`
Custom stylesheets:
```
assets/css/
├── custom.css        # Your custom styles
└── theme-override.css
```

#### `assets/js/`
Custom JavaScript:
```
assets/js/
├── analytics.js      # Custom tracking
└── interactive.js    # Interactive features
```

### `_templates/` Directory

**Purpose:** Store post templates and drafts

```
_templates/
├── post-template.md       # Template for new posts
├── quick-tip-template.md  # Short post template
└── drafts/                # Work in progress
    ├── draft-1.md
    └── draft-2.md
```

**Note:** `_templates/` is not published to the site

### `_site/` Directory (Auto-Generated)

**Purpose:** Jekyll builds the final website here

```
_site/
├── index.html
├── 2026/01/25/building-rag-systems/index.html
├── about/index.html
├── assets/
│   ├── images/
│   ├── css/
│   └── js/
└── feed.xml
```

⚠️ **Don't commit this folder** - it's auto-generated during build

---

## 🚀 Creating Your Post Structure

### Option A: All Posts in One Folder (Simple)

Best for 1-50 posts:

```
_posts/
├── 2026-01-25-building-rag-systems.md
├── 2026-02-01-agentic-ai-intro.md
├── 2026-02-15-llm-optimization.md
└── 2026-03-10-data-pipeline.md
```

### Option B: Posts by Category (Organized)

Best for 50+ posts or multiple authors:

```
_posts/
├── generative-ai/
│   ├── 2026-01-25-building-rag-systems.md
│   ├── 2026-02-15-llm-fine-tuning.md
│   └── 2026-03-10-prompt-engineering.md
├── agentic-ai/
│   ├── 2026-02-01-agentic-ai-intro.md
│   └── 2026-02-20-multi-agent-systems.md
└── data-science/
    ├── 2026-03-05-ml-pipeline.md
    └── 2026-03-15-data-visualization.md
```

**Enable in `_config.yaml`:**
```yaml
collections:
  posts:
    output: true
    permalink: /:collection/:categories/:year/:month/:day/:slug/
```

---

## 📊 Recommended Directory Size Limits

| Directory | Max Files | Notes |
|-----------|-----------|-------|
| `_posts/` | 100+ | Can have many files |
| `assets/images/` | 200+ | Organize by post date if needed |
| `assets/css/` | 5-10 | Keep stylesheets minimal |
| `_templates/` | 10+ | Store templates here |

---

## 🔄 File Organization Workflow

### When Creating a New Post:

1. **Create file** in `_posts/`
   ```
   _posts/2026-02-15-new-topic.md
   ```

2. **Add images** to `assets/images/`
   ```
   assets/images/new-topic-diagram.png
   ```

3. **Reference images** in post:
   ```markdown
   ![Diagram](/assets/images/new-topic-diagram.png)
   ```

4. **Commit both** together:
   ```bash
   git add _posts/2026-02-15-new-topic.md
   git add assets/images/new-topic-diagram.png
   git commit -m "📝 New post: New Topic with images"
   ```

---

## 📋 Git Ignore Strategy

Files that should NOT be committed:

```gitignore
# Jekyll build output
_site/
.jekyll-cache/
.jekyll-metadata

# Dependency lock file
Gemfile.lock

# OS files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/
*.swp

# Optional drafts folder
_templates/drafts/
```

---

## 🎯 Quick Reference: Adding Different Content

### Adding a Blog Post
```
1. Create: _posts/YYYY-MM-DD-title.md
2. Add frontmatter with title, date, tags
3. Write content
4. Commit: git add _posts/...
5. Push: git push origin main
```

### Adding Images to Posts
```
1. Save image: assets/images/name.png
2. Reference in post: ![Alt](/assets/images/name.png)
3. Commit image: git add assets/images/...
4. Commit post: git add _posts/...
5. Push together
```

### Adding Custom CSS
```
1. Create: assets/css/custom.css
2. Link in _config.yaml or _includes/custom-head.html
3. Commit: git add assets/css/custom.css
4. Push: git push origin main
```

### Creating About Page
```
1. Create: about.md (in root)
2. Add frontmatter with title, layout
3. Write content
4. Add link in index.md
5. Commit and push
```

---

## 💡 Pro Tips

✅ **Do:**
- Use consistent naming for posts
- Organize images by topic or date
- Keep post templates updated
- Document custom styling
- Archive old posts instead of deleting

❌ **Don't:**
- Mix images with markdown files
- Commit build artifacts (`_site/`)
- Use spaces in filenames
- Store large files (use GitHub releases instead)
- Forget to add dates to post filenames

---

## 🚀 Next Steps

1. **Understand the structure** above
2. **Start creating posts** in `_posts/`
3. **Add images** to `assets/images/` as needed
4. **Test locally** before pushing
5. **Monitor your site** growth

---

**Last Updated:** January 25, 2026
