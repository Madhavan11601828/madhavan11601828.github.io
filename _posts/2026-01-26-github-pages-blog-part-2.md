---
title: "Building a GitHub Pages Blog: Advanced Jekyll & Custom Styling - Part 2"
author: "Mangena Venu Madhavan"
date: 2026-01-26
categories: [foundations]
tags: [GitHub-Pages, Jekyll, Web-Design, CSS, Customization]
series: "Building a GitHub Pages Blog"
series-part: 2
---

## 1️⃣ Problem Statement

**The Challenge:** Now that you have a basic blog running on GitHub Pages, you want to:
- Make it look **professional** and unique
- Go beyond the default theme
- Create a **branded experience** with custom colors
- Implement **advanced layouts** for different content types
- Optimize the **visual hierarchy** for better readability

**Real Scenario:**
> *Your blog is live, but it looks generic like thousands of other Jekyll blogs. You want a custom gradient hero section, color-coded categories, and a professional layout that reflects your personal brand. You want visitors to remember your site for its design, not just content.*

**Why This Matters:**
- **First Impressions**: Visitors judge your blog in 3 seconds
- **Brand Recognition**: Unique design makes you memorable
- **Professional Image**: Great design signals quality content
- **User Experience**: Good design improves readability
- **Engagement**: Beautiful sites get more shares

---

## 2️⃣ Concept Explained Simply

**Custom styling means replacing the default Jekyll theme with your own design.**

Instead of:
```
Default Theme (Minima)
↓
Plain fonts, basic colors, generic layout
↓
Looks like everyone else's blog
```

You create:
```
Custom HTML + CSS
↓
Your unique design, colors, fonts
↓
Professional branded experience
```

**The Three-Step Process:**

1. **Override Default Layout** - Create custom HTML templates
2. **Add Custom CSS** - Style with your colors and fonts
3. **Use Liquid Templates** - Add dynamic content (posts, dates, tags)

---

## 3️⃣ The Implementation Strategy

**Here's what we'll build:**

```
assets/css/style.css
    ↓
    Contains all custom styling

_layouts/
    ├── default.html (main template)
    ├── post.html (blog post template)
    └── page.html (static page template)

_includes/
    ├── header.html
    ├── footer.html
    └── navigation.html
```

---

## 4️⃣ Step-by-Step Implementation

### Step 1: Create Custom Layout Structure

Create `_layouts/default.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="{{ page.description | default: site.description }}">
    <title>{{ page.title }} | {{ site.title }}</title>
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <!-- SEO -->
    {% seo %}
</head>
<body>
    {% include header.html %}
    
    <main class="main-content">
        {{ content }}
    </main>
    
    {% include footer.html %}
    
    <!-- Analytics (optional) -->
    {% if site.google_analytics %}
        <script async src="https://www.googletagmanager.com/gtag/js?id={{ site.google_analytics }}"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '{{ site.google_analytics }}');
        </script>
    {% endif %}
</body>
</html>
```

### Step 2: Create Header Include

Create `_includes/header.html`:

```html
<header class="site-header">
    <nav class="navbar">
        <div class="container">
            <div class="navbar-brand">
                <a href="/" class="logo">
                    <img src="/assets/images/logo.png" alt="Logo" class="logo-img">
                    <span class="site-title">{{ site.title }}</span>
                </a>
            </div>
            
            <ul class="nav-menu">
                <li><a href="/" class="nav-link">Home</a></li>
                <li><a href="/about/" class="nav-link">About</a></li>
                <li><a href="/archive/" class="nav-link">Archive</a></li>
                <li><a href="/feed.xml" class="nav-link">RSS</a></li>
            </ul>
        </div>
    </nav>
</header>
```

### Step 3: Create Footer Include

Create `_includes/footer.html`:

```html
<footer class="site-footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h3>About This Blog</h3>
                <p>{{ site.description }}</p>
            </div>
            
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about/">About</a></li>
                    <li><a href="/feed.xml">RSS Feed</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3>Contact</h3>
                <p>Email: <a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
                <p>GitHub: <a href="https://github.com/yourusername">@yourusername</a></p>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; {{ site.time | date: '%Y' }} {{ site.author }}. All rights reserved.</p>
        </div>
    </div>
</footer>
```

### Step 4: Create Post Layout

Create `_layouts/post.html`:

```html
---
layout: default
---

<article class="post-article">
    <header class="post-header">
        <div class="container">
            <h1 class="post-title">{{ page.title }}</h1>
            
            <div class="post-meta">
                <span class="post-date">
                    📅 {{ page.date | date: "%B %d, %Y" }}
                </span>
                
                <span class="post-author">
                    👤 {{ page.author | default: site.author }}
                </span>
                
                {% if page.categories %}
                    <span class="post-category">
                        📁 
                        {% for category in page.categories %}
                            <a href="/category/{{ category }}/">{{ category | capitalize }}</a>
                            {% unless forloop.last %}, {% endunless %}
                        {% endfor %}
                    </span>
                {% endif %}
            </div>
            
            {% if page.tags %}
                <div class="post-tags">
                    {% for tag in page.tags %}
                        <a href="/tag/{{ tag | slugify }}/" class="tag">{{ tag }}</a>
                    {% endfor %}
                </div>
            {% endif %}
        </div>
    </header>
    
    <div class="post-content container">
        {{ content }}
    </div>
    
    <footer class="post-footer">
        <div class="container">
            <hr>
            <p>Written by <strong>{{ page.author | default: site.author }}</strong></p>
            <p>Published on {{ page.date | date: "%B %d, %Y" }}</p>
        </div>
    </footer>
</article>

<!-- Related Posts (Optional) -->
<section class="related-posts">
    <div class="container">
        <h2>Related Articles</h2>
        <div class="posts-grid">
            {% assign related_posts = site.posts | where_exp: "post", "post.url != page.url" %}
            {% for post in related_posts limit:3 %}
                <div class="post-card">
                    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
                    <p>{{ post.excerpt | truncatewords: 30 }}</p>
                    <a href="{{ post.url }}" class="read-more">Read More →</a>
                </div>
            {% endfor %}
        </div>
    </div>
</section>
```

### Step 5: Create Custom CSS

Create `assets/css/style.css`:

```css
/* ============================================
   VARIABLES & RESET
   ============================================ */

:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    --text-dark: #1a202c;
    --text-light: #718096;
    --bg-light: #f7fafc;
    --border-color: #e2e8f0;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
}

body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: var(--text-dark);
    background-color: #ffffff;
    line-height: 1.6;
}

/* ============================================
   TYPOGRAPHY
   ============================================ */

h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.75rem; }
h4 { font-size: 1.5rem; }
h5 { font-size: 1.25rem; }
h6 { font-size: 1rem; }

p {
    margin-bottom: 1rem;
}

a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: var(--secondary-color);
    text-decoration: underline;
}

/* ============================================
   LAYOUT
   ============================================ */

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* ============================================
   HEADER & NAVIGATION
   ============================================ */

.site-header {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    padding: 1rem 0;
    box-shadow: var(--shadow);
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar-brand {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.logo-img {
    height: 40px;
    width: auto;
}

.site-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
}

.nav-menu {
    list-style: none;
    display: flex;
    gap: 2rem;
}

.nav-link {
    color: white;
    transition: opacity 0.3s ease;
}

.nav-link:hover {
    opacity: 0.8;
    text-decoration: none;
}

/* ============================================
   HERO SECTION
   ============================================ */

.hero {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    padding: 4rem 1rem;
    text-align: center;
}

.hero-content h1 {
    color: white;
    margin-bottom: 1rem;
}

.hero-content p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.25rem;
    margin-bottom: 2rem;
}

/* ============================================
   BUTTONS
   ============================================ */

.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    text-decoration: none;
}

.btn-primary {
    background-color: var(--primary-color);
    color: white;
}

.btn-primary:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
    box-shadow: var(--shadow);
}

.btn-secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;
}

.btn-secondary:hover {
    background-color: white;
    color: var(--primary-color);
}

/* ============================================
   POST STYLES
   ============================================ */

.post-article {
    margin: 2rem 0;
}

.post-header {
    background: var(--bg-light);
    padding: 2rem 0;
    border-bottom: 2px solid var(--border-color);
}

.post-title {
    color: var(--text-dark);
}

.post-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin: 1rem 0;
    font-size: 0.9rem;
    color: var(--text-light);
}

.post-category a {
    color: var(--primary-color);
    font-weight: 600;
}

.post-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
}

.tag {
    display: inline-block;
    background-color: var(--bg-light);
    color: var(--primary-color);
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.85rem;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
}

.tag:hover {
    background-color: var(--primary-color);
    color: white;
    text-decoration: none;
}

.post-content {
    padding: 2rem 0;
    line-height: 1.8;
}

.post-content h2 {
    margin-top: 2rem;
    color: var(--primary-color);
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 0.5rem;
}

.post-content code {
    background-color: var(--bg-light);
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
}

.post-content pre {
    background-color: #1a202c;
    color: #e2e8f0;
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 1rem 0;
}

.post-content pre code {
    background: none;
    padding: 0;
    color: inherit;
}

.post-content blockquote {
    border-left: 4px solid var(--primary-color);
    padding-left: 1rem;
    margin-left: 0;
    color: var(--text-light);
    font-style: italic;
}

.post-content img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin: 1rem 0;
}

/* ============================================
   POSTS GRID
   ============================================ */

.posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.post-card {
    background: white;
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
    padding: 1.5rem;
    transition: all 0.3s ease;
}

.post-card:hover {
    box-shadow: var(--shadow);
    transform: translateY(-5px);
}

.post-card h3 {
    margin-bottom: 0.5rem;
}

.post-card a {
    color: var(--text-dark);
}

.post-card:hover a {
    color: var(--primary-color);
}

.read-more {
    display: inline-block;
    color: var(--primary-color);
    font-weight: 600;
    margin-top: 1rem;
}

/* ============================================
   FOOTER
   ============================================ */

.site-footer {
    background-color: var(--text-dark);
    color: white;
    padding: 3rem 0 1rem;
    margin-top: 3rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section h3 {
    color: white;
    margin-bottom: 1rem;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.5rem;
}

.footer-section a {
    color: rgba(255, 255, 255, 0.7);
}

.footer-section a:hover {
    color: white;
}

.footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
}

/* ============================================
   RESPONSIVE DESIGN
   ============================================ */

@media (max-width: 768px) {
    h1 { font-size: 2rem; }
    h2 { font-size: 1.5rem; }
    h3 { font-size: 1.25rem; }
    
    .nav-menu {
        gap: 1rem;
        font-size: 0.9rem;
    }
    
    .hero {
        padding: 2rem 1rem;
    }
    
    .post-meta {
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .posts-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    html {
        font-size: 14px;
    }
    
    .site-title {
        font-size: 1.25rem;
    }
    
    .nav-menu {
        flex-direction: column;
        gap: 0.5rem;
    }
    
    h1 { font-size: 1.5rem; }
    h2 { font-size: 1.25rem; }
    h3 { font-size: 1rem; }
}
```

---

## 5️⃣ Implementing Color-Coded Pillars

**For a multi-pillar blog like ours, create category-specific styling:**

Create `assets/css/pillars.css`:

```css
/* Pillar Colors */
.pillar-foundations { --pillar-color: #FF6B6B; }
.pillar-ml { --pillar-color: #4ECDC4; }
.pillar-nlp { --pillar-color: #45B7D1; }
.pillar-cv { --pillar-color: #FFA07A; }
.pillar-dl { --pillar-color: #98D8C8; }
.pillar-genai { --pillar-color: #F7DC6F; }
.pillar-agentic { --pillar-color: #BB8FCE; }

/* Apply color to post headers */
.post-header.pillar-foundations {
    border-left: 5px solid #FF6B6B;
}

.post-header.pillar-ml {
    border-left: 5px solid #4ECDC4;
}

/* And so on... */
```

---

## 6️⃣ Real-World Example: This Blog

**This blog implements:**

✅ **Gradient Header** - Purple to indigo blend
✅ **Custom Layout** - Hero section with logo
✅ **Color-Coded Cards** - Each pillar has unique color
✅ **Responsive Grid** - Auto-adjusts for mobile
✅ **Professional Typography** - Poppins font family
✅ **Dark Code Blocks** - Syntax highlighting
✅ **Smooth Transitions** - Hover effects on cards
✅ **Mobile Optimization** - Perfect on all devices

---

## 7️⃣ Common Styling Mistakes

### ❌ Mistake 1: Forgetting Responsive Design
```css
/* Wrong */
.posts-grid {
    grid-template-columns: repeat(3, 1fr); /* Always 3 columns! */
}

/* Right */
.posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
}
```

### ❌ Mistake 2: Too Many Colors
**Wrong:** Using 10 different colors scattered everywhere
**Right:** Define a color palette (primary, secondary, accent) and reuse consistently

### ❌ Mistake 3: Ignoring Mobile Users
**Wrong:** Creating desktop-only layouts
**Right:** Design mobile-first, then enhance for larger screens

### ❌ Mistake 4: Bad Typography Hierarchy
**Wrong:** All text same size and weight
**Right:** Use size and weight to guide attention

### ❌ Mistake 5: Inaccessible Colors
**Wrong:** Light gray text on white background
**Right:** Ensure sufficient contrast (WCAG standards)

---

## 8️⃣ Interview Questions

### Q1: How would you customize Jekyll themes without forking?
**Answer:** By creating your own `_layouts/` and `_includes/` directories, you override default templates. Jekyll loads custom files first, so you can completely replace the theme's appearance while keeping it as a dependency in Gemfile.

### Q2: What's the difference between CSS variables and Sass?
**Answer:** CSS variables (custom properties) work in the browser and can change dynamically. Sass is a preprocessor that compiles to CSS and offers features like nesting and mixins. For GitHub Pages, CSS variables are simpler since Sass requires build configuration.

### Q3: How do you make a Jekyll site responsive?
**Answer:** Use CSS media queries, flexible layouts (flexbox/grid), and relative units (rem, %). Test with browser DevTools at multiple breakpoints. Use `viewport` meta tag to ensure mobile rendering.

### Q4: Explain the CSS cascade in the context of Jekyll
**Answer:** CSS files listed later override earlier ones. In `_config.yml`, you can list CSS imports in order. Since Jekyll processes all CSS together, specificity and order matter—custom CSS should load last to override default theme.

### Q5: How would you implement a dark mode toggle?
**Answer:** 
1. Define CSS variables for light/dark themes
2. Create a toggle button
3. Use JavaScript to change root CSS variables
4. Store preference in localStorage
5. Apply persisted theme on page load

---

## 🎯 Next Steps

**You now know:**
- ✅ How to override Jekyll's default layouts
- ✅ How to write custom CSS
- ✅ How to implement responsive design
- ✅ How to create reusable components
- ✅ Best practices for blog styling

**In Part 3, we'll cover:**
- 🔍 SEO optimization strategies
- ⚡ Performance optimization
- 📊 Analytics integration
- 🚀 Advanced Jekyll features
- 💾 Caching and CDN strategies

---

## 📚 Resources

- **CSS Grid Guide**: https://css-tricks.com/snippets/css/complete-guide-grid/
- **Flexbox Guide**: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- **Jekyll Includes**: https://jekyllrb.com/docs/includes/
- **Jekyll Layouts**: https://jekyllrb.com/docs/layouts/
- **WCAG Color Contrast**: https://webaim.org/resources/contrastchecker/

---

## 💡 Key Takeaways

1. **Override defaults** with `_layouts/` and `_includes/`
2. **CSS variables** make themes easy to maintain
3. **Responsive design** isn't optional—it's essential
4. **Color psychology** influences user experience
5. **Performance matters**—optimize CSS delivery

---

**Keep building! Your unique design awaits! 🎨**

*In Part 3, we'll tackle SEO, performance, and advanced optimization.*

---

*Read the series:*
- [Part 1: Building a GitHub Pages Blog: From Zero to Production](/2026/01/25/github-pages-blog-part-1/)
- [Part 2: Advanced Jekyll & Custom Styling (You are here)](#)
- [Part 3: SEO & Performance Optimization (Coming Soon)](#)
- [Part 4: Scaling Your Blog with Multiple Authors & Categories (Coming Soon)](#)
- [Part 5: Troubleshooting Common Issues - Real-World Scenarios (Coming Soon)](#)
