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
{% raw %}
&#123;% for post in site.posts %&#125;
  <h2>&#123;&#123; post.title &#125;&#125;</h2>
  <p>&#123;&#123; post.excerpt &#125;&#125;</p>
&#123;% endfor %&#125;
{% endraw %}
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

```html
{% raw %}
<header class="page-header">
  <h1>Category: &#123;&#123; page.category &#125;&#125;</h1>
  <p class="description">
    Exploring &#123;&#123; page.category | replace: "-", " " | capitalize &#125;&#125;
  </p>
</header>

<div class="posts-list">
  &#123;% assign posts = site.posts | where: "categories", page.category %&#125;
  
  &#123;% if posts.size == 0 %&#125;
    <p>No posts in this category yet.</p>
  &#123;% else %&#125;
    &#123;% for post in posts %&#125;
      <article class="post-summary">
        <h2><a href="&#123;&#123; post.url &#125;&#125;">&#123;&#123; post.title &#125;&#125;</a></h2>
        <div class="post-meta">
          <span class="post-date">&#123;&#123; post.date | date: "%B %d, %Y" &#125;&#125;</span>
          &#123;% if post.author %&#125;
            <span class="post-author">by &#123;&#123; post.author &#125;&#125;</span>
          &#123;% endif %&#125;
        </div>
        <p>&#123;&#123; post.excerpt &#125;&#125;</p>
        <a href="&#123;&#123; post.url &#125;&#125;" class="read-more">Read more →</a>
      </article>
    &#123;% endfor %&#125;
  &#123;% endif %&#125;
</div>
{% endraw %}
```

#### Step 2: Create Categories Page

Create `_pages/categories.html`:

```html
---
layout: default
title: Categories
permalink: /categories/
---

```html
{% raw %}
<h1>All Categories</h1>

<div class="categories-grid">
  &#123;% assign categories = site.posts | map: "categories" | join: "," | split: "," | uniq %&#125;
  
  &#123;% for category in categories %&#125;
    &#123;% assign posts_count = site.posts | where: "categories", category | size %&#125;
    
    <div class="category-card">
      <h3>
        <a href="/categories/&#123;&#123; category | slugify &#125;&#125;/">
          &#123;&#123; category | replace: "-", " " | capitalize &#125;&#125;
        </a>
      </h3>
      <p class="post-count">&#123;&#123; posts_count &#125;&#125; post&#123;&#123; posts_count | pluralize &#125;&#125;</p>
    </div>
  &#123;% endfor %&#125;
</div>
{% endraw %}
```

#### Step 3: Generate Category Pages

Create `_plugins/category_generator.rb`:

```ruby
{% raw %}
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
{% endraw %}
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
{% raw %}
<header class="page-header">
  <h1>Tag: #&#123;&#123; page.tag &#125;&#125;</h1>
</header>

<div class="posts-list">
  &#123;% assign posts = site.posts | where_exp: "post", "post.tags contains page.tag" %&#125;
  
  &#123;% if posts.size == 0 %&#125;
    <p>No posts with this tag.</p>
  &#123;% else %&#125;
    &#123;% for post in posts %&#125;
      <article class="post-summary">
        <h2><a href="&#123;&#123; post.url &#125;&#125;">&#123;&#123; post.title &#125;&#125;</a></h2>
        <div class="post-meta">
          <span>&#123;&#123; post.date | date: "%B %d, %Y" &#125;&#125;</span>
        </div>
        <p>&#123;&#123; post.excerpt &#125;&#125;</p>
      </article>
    &#123;% endfor %&#125;
  &#123;% endif %&#125;
</div>
{% endraw %}
```

#### Step 2: Create Tags Page

Create `_pages/tags.html`:

```html
{% raw %}
<h1>All Tags</h1>

<div class="tags-cloud">
  &#123;% assign tags = site.posts | map: "tags" | join: "," | split: "," | uniq %&#125;
  
  &#123;% for tag in tags %&#125;
    &#123;% assign posts_count = site.posts | where_exp: "post", "post.tags contains tag" | size %&#125;
    
    <a href="/tags/&#123;&#123; tag | slugify &#125;&#125;/" class="tag-cloud-item" style="font-size: &#123;&#123; posts_count | times: 20 | plus: 70 &#125;&#125;%;">
      &#123;&#123; tag &#125;&#125; <span class="count">(&#123;&#123; posts_count &#125;&#125;)</span>
    </a>
  &#123;% endfor %&#125;
</div>
{% endraw %}
```

#### Step 3: Create Tag Generator Plugin

Create `_plugins/tag_generator.rb`:

```ruby
{% raw %}
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
{% endraw %}
```

---

## Feature 3: Archive Pages

### Implementation

Create `_pages/archive.html`:

```html
{% raw %}
<h1>Blog Archive</h1>

<div class="archive">
  &#123;% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %&#125;
  
  &#123;% for year in posts_by_year %&#125;
    <section class="archive-year">
      <h2 class="year">&#123;&#123; year.name &#125;&#125;</h2>
      
      &#123;% assign posts_by_month = year.items | group_by_exp: "post", "post.date | date: '%B'" %&#125;
      
      &#123;% for month in posts_by_month %&#125;
        <h3 class="month">&#123;&#123; month.name &#125;&#125;</h3>
        <ul class="posts-in-month">
          &#123;% for post in month.items %&#125;
            <li>
              <span class="date">&#123;&#123; post.date | date: "%d" &#125;&#125;</span>
              <a href="&#123;&#123; post.url &#125;&#125;">&#123;&#123; post.title &#125;&#125;</a>
            </li>
          &#123;% endfor %&#125;
        </ul>
      &#123;% endfor %&#125;
    </section>
  &#123;% endfor %&#125;
</div>
{% endraw %}
```

---

## Feature 4: Navigation Menu

### Implementation

#### Create Navigation Include

Create `_includes/navigation.html`:

```html
{% raw %}
<nav class="site-nav">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/archive/">Archive</a></li>
    <li><a href="/categories/">Categories</a></li>
    <li><a href="/tags/">Tags</a></li>
    <li><a href="/about/">About</a></li>
  </ul>
</nav>
{% endraw %}
```

#### Use in Layout

Edit `_layouts/default.html` to include:

```html
{% raw %}
&#123;% include navigation.html %&#125;
{% endraw %}
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
{% raw %}
<h1>Blog Posts</h1>

<div class="posts-grid">
  &#123;% for post in paginator.posts %&#125;
    <article class="post-card">
      <h2><a href="&#123;&#123; post.url &#125;&#125;">&#123;&#123; post.title &#125;&#125;</a></h2>
      <p class="post-meta">&#123;&#123; post.date | date: "%B %d, %Y" &#125;&#125;</p>
      <p>&#123;&#123; post.excerpt &#125;&#125;</p>
      <a href="&#123;&#123; post.url &#125;&#125;" class="read-more">Read more →</a>
    </article>
  &#123;% endfor %&#125;
</div>

<!-- Pagination Links -->
&#123;% if paginator.total_pages > 1 %&#125;
  <nav class="pagination">
    &#123;% if paginator.previous_page %&#125;
      <a href="&#123;&#123; paginator.previous_page_path &#125;&#125;" class="prev">← Previous</a>
    &#123;% endif %&#125;
    
    <span class="page-number">Page &#123;&#123; paginator.page &#125;&#125; of &#123;&#123; paginator.total_pages &#125;&#125;</span>
    
    &#123;% if paginator.next_page %&#125;
      <a href="&#123;&#123; paginator.next_page_path &#125;&#125;" class="next">Next →</a>
    &#123;% endif %&#125;
  </nav>
&#123;% endif %&#125;
{% endraw %}
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
