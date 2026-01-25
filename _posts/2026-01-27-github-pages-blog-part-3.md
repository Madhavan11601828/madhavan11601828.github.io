---
title: "Building a GitHub Pages Blog - Part 3: Advanced Features & Organization"
author: "Mangena Venu Madhavan"
date: 2026-01-27
categories: [blog-development, github-pages, jekyll]
tags: [jekyll-advanced, categories, tags, pagination, liquid, github-pages]
---

# Building a GitHub Pages Blog - Part 3: Advanced Features & Organization

## Problem Statement

You have a blog with nice design. But as you add more posts, they become hard to navigate. Readers can't find posts by category or tag. You want a **professional blog structure** with:

- Category pages (all posts in a category)
- Tag pages (search by topic)
- Archive (organized by date)
- Navigation menu
- Pagination (newer/older posts)

This requires understanding **Liquid templates** and **Jekyll's collection system**.

---

## Concept: Jekyll Collections and Liquid

### Collections

Collections in Jekyll organize related content:

```yaml
collections:
  posts:
    output: true
    permalink: /blog/:categories/:year/:month/:day/:slug/
  pages:
    output: true
```

Every post in `_posts/` is in the `posts` collection.

### Liquid Templates

Liquid is a template language Jekyll uses:

```liquid
{% for post in site.posts %}
  <h2>{{ post.title }}</h2>
  <p>{{ post.excerpt }}</p>
{% endfor %}
```

**Common Liquid tags:**
- `{% for item in array %}` - Loop
- `{{ variable }}` - Output variable
- `{% if condition %}` - Conditional
- `{% include file.html %}` - Include file

---

## Feature 1: Categories Pages

### Concept

Each post has categories:

```markdown
---
categories: [web-dev, tutorial]
---
```

We'll create a page that shows all posts in a category.

### Implementation

#### Step 1: Create Category Layout

Create `_layouts/category.html`:

```html
---
layout: default
---

<header class="page-header">
  <h1>Category: {{ page.category }}</h1>
  <p class="description">
    Exploring {{ page.category | replace: "-", " " | capitalize }}
  </p>
</header>

<div class="posts-list">
  {% assign posts = site.posts | where: "categories", page.category %}
  
  {% if posts.size == 0 %}
    <p>No posts in this category yet.</p>
  {% else %}
    {% for post in posts %}
      <article class="post-summary">
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <div class="post-meta">
          <span class="post-date">{{ post.date | date: "%B %d, %Y" }}</span>
          {% if post.author %}
            <span class="post-author">by {{ post.author }}</span>
          {% endif %}
        </div>
        <p>{{ post.excerpt }}</p>
        <a href="{{ post.url }}" class="read-more">Read more →</a>
      </article>
    {% endfor %}
  {% endif %}
</div>
```

#### Step 2: Create Categories Page

Create `_pages/categories.html`:

```html
---
layout: default
title: Categories
permalink: /categories/
---

<h1>All Categories</h1>

<div class="categories-grid">
  {% assign categories = site.posts | map: "categories" | join: "," | split: "," | uniq %}
  
  {% for category in categories %}
    {% assign posts_count = site.posts | where: "categories", category | size %}
    
    <div class="category-card">
      <h3>
        <a href="/categories/{{ category | slugify }}/">
          {{ category | replace: "-", " " | capitalize }}
        </a>
      </h3>
      <p class="post-count">{{ posts_count }} post{{ posts_count | pluralize }}</p>
    </div>
  {% endfor %}
</div>
```

#### Step 3: Generate Category Pages

Create `_plugins/category_generator.rb`:

```ruby
module Jekyll
  class CategoryPage < Page
    def initialize(site, base, dir, category)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'category.html')
      
      self.data['category'] = category
      self.data['title'] = "Category: #{category}"
    end
  end

  class CategoryGenerator < Generator
    def generate(site)
      if site.layouts.key? 'category'
        dir = site.config['category_dir'] || 'categories'
        site.posts.docs.map { |p| p.data['categories'] || [] }.flatten.uniq.each do |category|
          site.pages << CategoryPage.new(site, site.source, File.join(dir, category), category)
        end
      end
    end
  end
end
```

#### Step 4: Update _config.yml

```yaml
category_dir: categories

# Add plugin
plugins:
  - jekyll-feed
  - jekyll-seo-tag
```

---

## Feature 2: Tags Pages

### Implementation

Similar to categories, but for tags:

#### Step 1: Create Tag Layout

Create `_layouts/tag.html`:

```html
---
layout: default
---

<header class="page-header">
  <h1>Tag: #{{ page.tag }}</h1>
</header>

<div class="posts-list">
  {% assign posts = site.posts | where_exp: "post", "post.tags contains page.tag" %}
  
  {% if posts.size == 0 %}
    <p>No posts with this tag.</p>
  {% else %}
    {% for post in posts %}
      <article class="post-summary">
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <div class="post-meta">
          <span>{{ post.date | date: "%B %d, %Y" }}</span>
        </div>
        <p>{{ post.excerpt }}</p>
      </article>
    {% endfor %}
  {% endif %}
</div>
```

#### Step 2: Create Tags Page

Create `_pages/tags.html`:

```html
---
layout: default
title: Tags
permalink: /tags/
---

<h1>All Tags</h1>

<div class="tags-cloud">
  {% assign tags = site.posts | map: "tags" | join: "," | split: "," | uniq %}
  
  {% for tag in tags %}
    {% assign posts_count = site.posts | where_exp: "post", "post.tags contains tag" | size %}
    
    <a href="/tags/{{ tag | slugify }}/" class="tag-cloud-item" style="font-size: {{ posts_count | times: 20 | plus: 70 }}%;">
      {{ tag }} <span class="count">({{ posts_count }})</span>
    </a>
  {% endfor %}
</div>
```

#### Step 3: Create Tag Generator Plugin

Create `_plugins/tag_generator.rb`:

```ruby
module Jekyll
  class TagPage < Page
    def initialize(site, base, dir, tag)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'tag.html')
      
      self.data['tag'] = tag
      self.data['title'] = "Tag: #{tag}"
    end
  end

  class TagGenerator < Generator
    def generate(site)
      if site.layouts.key? 'tag'
        dir = site.config['tag_dir'] || 'tags'
        site.posts.docs.map { |p| p.data['tags'] || [] }.flatten.uniq.each do |tag|
          site.pages << TagPage.new(site, site.source, File.join(dir, tag), tag)
        end
      end
    end
  end
end
```

---

## Feature 3: Archive Pages

### Implementation

Create `_pages/archive.html`:

```html
---
layout: default
title: Archive
permalink: /archive/
---

<h1>Blog Archive</h1>

<div class="archive">
  {% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
  
  {% for year in posts_by_year %}
    <section class="archive-year">
      <h2 class="year">{{ year.name }}</h2>
      
      {% assign posts_by_month = year.items | group_by_exp: "post", "post.date | date: '%B'" %}
      
      {% for month in posts_by_month %}
        <h3 class="month">{{ month.name }}</h3>
        <ul class="posts-in-month">
          {% for post in month.items %}
            <li>
              <span class="date">{{ post.date | date: "%d" }}</span>
              <a href="{{ post.url }}">{{ post.title }}</a>
            </li>
          {% endfor %}
        </ul>
      {% endfor %}
    </section>
  {% endfor %}
</div>
```

---

## Feature 4: Navigation Menu

### Implementation

#### Create Navigation Include

Create `_includes/navigation.html`:

```html
<nav class="site-nav">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/archive/">Archive</a></li>
    <li><a href="/categories/">Categories</a></li>
    <li><a href="/tags/">Tags</a></li>
    <li><a href="/about/">About</a></li>
  </ul>
</nav>
```

#### Use in Layout

Edit `_layouts/default.html` to include:

```html
{% include navigation.html %}
```

#### Style the Nav

```scss
.site-nav {
  background-color: $primary;
  padding: 1rem;
  
  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    
    li a {
      color: white;
      text-decoration: none;
      
      &:hover {
        color: $accent;
      }
    }
  }
}
```

---

## Feature 5: Pagination

### Implementation

#### Update _config.yml

```yaml
paginate: 10
paginate_path: "/blog/page:num/"
```

#### Create Paginated Index

Create `_pages/blog.html`:

```html
---
layout: default
title: Blog
permalink: /blog/
pagination:
  enabled: true
---

<h1>Blog Posts</h1>

<div class="posts-grid">
  {% for post in paginator.posts %}
    <article class="post-card">
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
      <p>{{ post.excerpt }}</p>
      <a href="{{ post.url }}" class="read-more">Read more →</a>
    </article>
  {% endfor %}
</div>

<!-- Pagination Links -->
{% if paginator.total_pages > 1 %}
  <nav class="pagination">
    {% if paginator.previous_page %}
      <a href="{{ paginator.previous_page_path }}" class="prev">← Previous</a>
    {% endif %}
    
    <span class="page-number">Page {{ paginator.page }} of {{ paginator.total_pages }}</span>
    
    {% if paginator.next_page %}
      <a href="{{ paginator.next_page_path }}" class="next">Next →</a>
    {% endif %}
  </nav>
{% endif %}
```

---

## Real Scenario: Building a Complete Blog Structure

### File Organization

```
_layouts/
  ├── default.html
  ├── post.html
  ├── category.html
  └── tag.html

_includes/
  ├── navigation.html
  ├── header.html
  └── footer.html

_pages/
  ├── index.html
  ├── blog.html
  ├── archive.html
  ├── categories.html
  ├── tags.html
  └── about.html

_plugins/
  ├── category_generator.rb
  └── tag_generator.rb

_posts/
  ├── 2026-01-25-post-1.md
  ├── 2026-01-26-post-2.md
  └── ...

assets/css/
  └── style.scss
```

### Step-by-Step Setup

```bash
# 1. Create directories
mkdir -p _pages _plugins

# 2. Create files
touch _pages/blog.html
touch _pages/archive.html
touch _pages/categories.html
touch _pages/tags.html
touch _plugins/category_generator.rb
touch _plugins/tag_generator.rb

# 3. Add content to each file (as shown above)

# 4. Update _config.yml

# 5. Test locally
bundle exec jekyll serve

# 6. Visit http://localhost:4000/archive, /categories, /tags, /blog

# 7. Commit and push
git add .
git commit -m "Feature: Add categories, tags, archive, pagination, navigation"
git push origin main
```

---

## Troubleshooting

### Issue: Plugins not loading

**Solution:** Ensure plugin filenames end in `.rb` and are in `_plugins/` folder

### Issue: Categories/tags pages not generating

**Solutions:**
1. Check that posts have `categories:` or `tags:` in frontmatter
2. Rebuild: `bundle exec jekyll build`
3. Check console for errors

### Issue: Liquid syntax errors

**Solutions:**
1. Check spacing: `{% for %}` not `{%for%}`
2. Ensure loops have matching `{% endfor %}`
3. Use Liquid reference: [shopify.github.io/liquid](https://shopify.github.io/liquid/)

---

## Mathematical Intuition

### Big O Complexity

```
Site with N posts and M unique tags:

Building tags pages: O(N + M)
  - Process all posts: O(N)
  - Generate unique tags: O(M)
  - Create tag pages: O(M)

Rendering paginated blog: O(N + P)
  - N = total posts
  - P = pages to show
  - With pagination, only show P at a time
  - Much better than O(N)!
```

---

## Interview Questions

**Q: What's the difference between categories and tags?**
> Categories are hierarchical organization (like folders). Tags are keywords. A post can have 2 categories but 10 tags.

**Q: Why do we need plugins for category/tag generation?**
> Jekyll plugins hook into the build process. They examine all posts and dynamically create category/tag pages. Without plugins, you'd create pages manually.

**Q: Can I use Jekyll without plugins?**
> Yes, but you lose automatic category/tag page generation. GitHub Pages has security restrictions on plugins too.

**Q: How does Liquid's `group_by_exp` work?**
> It groups items based on an expression. `group_by_exp: "post", "post.date | date: '%Y'"` groups posts by their year.

---

## Summary

✅ Created category pages and listing  
✅ Created tag pages and tag cloud  
✅ Built archive page (organize by date)  
✅ Added navigation menu  
✅ Implemented pagination  
✅ Wrote plugins to auto-generate pages  

**Your blog is now a professional content management system!**

---

## Next Part Preview

In Part 4, we'll cover:
- ✅ SEO optimization
- ✅ Performance optimization
- ✅ Analytics integration
- ✅ Search functionality
- ✅ Comments system
- ✅ Custom domain setup

---

**Happy organizing! 📚**

---

**Series:**
- Part 1: From Zero to Published (Basics)
- Part 2: Customization & Design
- Part 3: Advanced Features & Organization ← You are here
- Part 4: Performance, SEO & Scaling (Coming soon)
