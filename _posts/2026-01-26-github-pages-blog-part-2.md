---
title: "Building a GitHub Pages Blog - Part 2: Customization & Design"
author: "Mangena Venu Madhavan"
date: 2026-01-26
categories: [blog-development, github-pages, jekyll]
tags: [jekyll-themes, customization, css, design, github-pages]
---

# Building a GitHub Pages Blog - Part 2: Customization & Design

## Problem Statement

The default Jekyll blog works, but it's bland and generic. Every Jekyll site looks the same. You want your blog to reflect **your brand**, have **unique colors**, and look **professional**. But how do you customize Jekyll without getting lost in code?

In Part 1, we got the blog running. Now let's make it **yours**.

---

## Concept: Jekyll Themes and Customization

### How Jekyll Theming Works

```
Default Theme (Minima)
    ↓
_config.yml (theme: minima)
    ↓
Jekyll processes
    ↓
If you override files locally, Jekyll uses yours instead
    ↓
Your custom design takes precedence
```

**Key principle**: You don't need to understand all of Jekyll. You override only what you want to change.

---

## Option 1: Choose a Different Theme

### Popular GitHub Pages Themes

| Theme | Best For | Look |
|-------|----------|------|
| **Minima** (default) | Clean, minimal blogs | Stark, simple |
| **Leap Day** | Modern, gradient backgrounds | Colorful, energetic |
| **Tactile** | Blog with sidebar | Magazine-style |
| **Dinky** | Documentation | Technical |
| **Cayman** | Project portfolio | Professional |
| **Slate** | Dark mode | Developer-friendly |

### How to Change Themes

Edit `_config.yml`:

```yaml
# From:
theme: minima

# To:
theme: jekyll-theme-leap-day
```

**Then:**
```bash
bundle update
bundle exec jekyll serve
```

**Push to GitHub** - site updates automatically

---

## Option 2: Customize Your Theme

### What You Can Override

Any file in the theme can be overridden locally:

```
Theme has: _layouts/post.html
You create: _layouts/post.html (in your repo)
↓
Jekyll uses your version instead
```

### Common Customizations

#### 1. Change Colors (CSS)

Create `assets/css/style.scss`:

```scss
---
---

@import "{{ site.theme }}";

// Your custom colors
$primary-color: #2c3e50;
$accent-color: #e74c3c;
$background-color: #ecf0f1;

// Override variables
body {
  background-color: $background-color;
  color: $primary-color;
}

a {
  color: $accent-color;
  
  &:hover {
    color: darken($accent-color, 10%);
  }
}

// Custom styling
.site-header {
  background: linear-gradient(135deg, $primary-color 0%, $accent-color 100%);
  color: white;
}

.post-title {
  font-size: 2.5rem;
  color: $primary-color;
  border-bottom: 3px solid $accent-color;
  padding-bottom: 10px;
}
```

#### 2. Customize Header/Footer

Create `_includes/header.html`:

```html
<header class="site-header">
  <div class="wrapper">
    <a class="site-title" href="/">
      {{ site.title }}
    </a>
    
    <nav>
      <a href="/about/">About</a>
      <a href="/blog/">Blog</a>
      <a href="/contact/">Contact</a>
    </nav>
  </div>
</header>
```

Then in your CSS, style `.site-header`

#### 3. Change Post Layout

Create `_layouts/post.html`:

```html
---
layout: default
---

<article class="post">
  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>
    <div class="post-meta">
      <time datetime="{{ page.date | date_to_xmlschema }}">
        {{ page.date | date: "%B %d, %Y" }}
      </time>
      {% if page.author %}
        <span>by {{ page.author }}</span>
      {% endif %}
    </div>
  </header>

  <div class="post-content">
    {{ content }}
  </div>

  {% if page.tags %}
    <footer class="post-footer">
      <div class="post-tags">
        {% for tag in page.tags %}
          <a href="/tags/{{ tag | slugify }}/" class="tag">{{ tag }}</a>
        {% endfor %}
      </div>
    </footer>
  {% endif %}
</article>
```

---

## Option 3: Add Custom Fonts

### Google Fonts Integration

In `_includes/head.html`, add before closing `</head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
```

Then in your CSS:

```scss
body {
  font-family: 'Poppins', sans-serif;
}

code, pre {
  font-family: 'JetBrains Mono', monospace;
}
```

---

## Option 4: Add Animations & Modern Effects

### Gradient Backgrounds

```scss
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
```

### Hover Effects

```scss
.post-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
}
```

### Smooth Scroll

```scss
html {
  scroll-behavior: smooth;
}
```

---

## Configuration Best Practices

### _config.yml Structure

```yaml
# Site settings
title: "Your Blog Title"
author: "Your Name"
description: "What your blog is about"
url: "https://yourdomain.com"
baseurl: "" # Leave empty for root domain

# Theme
theme: jekyll-theme-leap-day

# Collections
collections:
  posts:
    output: true
    permalink: /:categories/:year/:month/:day/:slug/

# Plugins
plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-paginate

# Pagination
paginate: 10
paginate_path: /blog/page:num/

# Defaults
defaults:
  - scope:
      path: ""
      type: posts
    values:
      layout: post
      author: "Your Name"
      categories: [blog]

# Build settings
markdown: kramdown
highlighter: rouge
```

---

## Real Example: Creating a Modern Blog

### File Structure

```
assets/css/style.scss          ← Custom styling
_includes/header.html          ← Custom header
_includes/footer.html          ← Custom footer
_layouts/post.html             ← Custom post layout
_layouts/default.html          ← Custom base layout
_config.yml                    ← Configuration
```

### Step-by-Step

#### Step 1: Update _config.yml

```yaml
title: "Mangena's Tech Blog"
description: "Insights on AI, Web Dev, and Open Source"
theme: jekyll-theme-leap-day
```

#### Step 2: Create Custom CSS

Create `assets/css/style.scss`:

```scss
---
---

@import "{{ site.theme }}";

// Color palette
$primary: #2c3e50;
$accent: #e74c3c;
$light: #ecf0f1;

// Modern styling
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
}

.site-header {
  background: linear-gradient(135deg, $primary 0%, darken($primary, 10%) 100%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.post-title {
  color: $primary;
  border-bottom: 4px solid $accent;
  padding-bottom: 10px;
}

a {
  color: $accent;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
}
```

#### Step 3: Create Custom Header

Create `_includes/custom-head.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
<meta name="theme-color" content="#2c3e50">
```

#### Step 4: Commit and Push

```bash
git add .
git commit -m "Customize: Add modern design, gradients, and custom CSS"
git push origin main
```

---

## Troubleshooting Customization Issues

### Issue: Changes not showing up

**Solutions:**
1. Hard refresh browser: `Ctrl+Shift+F5` (Windows) or `Cmd+Shift+R` (Mac)
2. Stop and restart `jekyll serve`
3. Check syntax in `_config.yml` (YAML is picky)
4. Look for build errors in GitHub Actions

### Issue: Styles look wrong

**Solutions:**
1. Check CSS specificity - your styles may be overridden
2. Use `!important` as last resort (not ideal, but works)
3. Check browser DevTools (F12) for actual applied styles
4. Make sure `assets/css/style.scss` exists

### Issue: Footer/Header not customizing

**Solutions:**
1. Create `_includes/footer.html` or `_includes/header.html`
2. Check theme documentation for include names
3. Some themes may use different names

---

## Mathematical Intuition

### CSS Box Model

```
┌─────────────────────────────────┐
│         Margin (outside)        │
│  ┌──────────────────────────┐   │
│  │  Border                  │   │
│  │  ┌──────────────────┐    │   │
│  │  │  Padding (space) │    │   │
│  │  │  ┌────────────┐  │    │   │
│  │  │  │  Content   │  │    │   │
│  │  │  └────────────┘  │    │   │
│  │  └──────────────────┘    │   │
│  └──────────────────────────┘   │
└─────────────────────────────────┘

Width = Margin + Border + Padding + Content
```

---

## Interview Questions

**Q: What's the difference between Jekyll theme and CSS customization?**
> Jekyll theme provides structure and default styling. CSS customization changes appearance without changing structure. You can use both together.

**Q: Can I use a different CSS framework like Bootstrap?**
> Yes! Add Bootstrap via CDN in `_includes/head.html` and it works. Just ensure it doesn't conflict with theme CSS.

**Q: How do I know which Jekyll files I can override?**
> Look at the theme's GitHub repository. Whatever's there, you can copy to your repo locally to override it.

**Q: What's the difference between @import and regular CSS?**
> `@import` in SCSS imports the theme's CSS so your variables and styles extend it rather than replace it. This is better than starting from scratch.

---

## Summary

✅ Understand Jekyll theme system  
✅ Choose and change themes  
✅ Override theme files locally  
✅ Add custom CSS and styling  
✅ Implement modern design patterns  
✅ Configure fonts and colors  

**Your blog now looks unique and professional!**

---

## Next Part Preview

In Part 3, we'll cover:
- ✅ Adding categories and tag pages
- ✅ Creating a navigation menu
- ✅ Building archive pages
- ✅ Advanced Liquid templates
- ✅ Adding search functionality

---

**Happy designing! 🎨**

---

**Series:**
- Part 1: From Zero to Published (Basics)
- Part 2: Customization & Design ← You are here
- Part 3: Advanced Features (Coming soon)
- Part 4: Performance & SEO (Coming soon)
