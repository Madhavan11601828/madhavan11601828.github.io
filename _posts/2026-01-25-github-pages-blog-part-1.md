---
title: "Building a GitHub Pages Blog - Part 1: From Zero to Published (Basics)"
author: "Mangena Venu Madhavan"
date: 2026-01-25
categories: [blog-development, github-pages, jekyll]
tags: [github-pages, jekyll, blog, static-site-generator, beginners]
---

# Building a GitHub Pages Blog - Part 1: From Zero to Published (Basics)

## Problem Statement

Starting a blog can be overwhelming. You need hosting, domain management, content management systems, and ongoing maintenance. But what if you could have a **free, powerful blog** that deploys automatically, requires minimal setup, and is version-controlled like your code? That's GitHub Pages with Jekyll.

This series documents my real journey of creating this blog, including every challenge faced and how I solved it. Perfect for anyone wanting to start technical blogging without complexity.

---

## What is GitHub Pages + Jekyll?

**GitHub Pages** is a free static site hosting service directly from your GitHub repository. 

**Jekyll** is a static site generator that converts Markdown files into a complete website.

**Together**: You write Markdown → Push to GitHub → Automatic build & deployment → Live blog ✨

---

## Why GitHub Pages for Blogging?

### Benefits
- **Free hosting** - No monthly fees
- **Version control** - Your blog is in Git, tracked like code
- **Automatic deployment** - Push to main branch, site updates in seconds
- **No databases** - Static files are fast and secure
- **Custom domain** - Point your own domain
- **Markdown-based** - Write in Markdown, not clicking in UI
- **Full customization** - It's just HTML/CSS/Jekyll

### Tradeoffs
- Static content only (no real-time features)
- Build limits (GitHub Actions has reasonable limits)
- Jekyll-specific (though other static generators work too)

---

## Prerequisites

Before starting, you need:

1. **GitHub Account** - [github.com](https://github.com)
2. **Git installed** - [git-scm.com](https://git-scm.com)
3. **Text editor** - VSCode, Sublime, or similar
4. **Ruby 2.7+** - [rubyinstaller.org](https://rubyinstaller.org) (for local testing)
5. **Command line comfort** - Basic terminal commands

---

## Step 1: Create Your Repository

### Create on GitHub

1. Go to [github.com](https://github.com) and sign in
2. Click **+** → **New repository**
3. Name it: `USERNAME.github.io` (replace USERNAME with your GitHub username)
   - This is **critical** - must match your username exactly
4. Make it **Public** (GitHub Pages requires this)
5. Initialize with README (optional)
6. Click **Create repository**

**Example:** If your username is `johnsmith`, name it `johnsmith.github.io`

### Clone to Your Computer

```bash
git clone https://github.com/USERNAME/USERNAME.github.io.git
cd USERNAME.github.io
```

---

## Step 2: Set Up Jekyll Locally

### Install Ruby (Windows)

1. Download Ruby installer: [rubyinstaller.org](https://rubyinstaller.org/downloads/)
2. Run the installer
3. During installation, check **Add Ruby to PATH**
4. Complete installation

**Verify:** Open terminal and run:
```bash
ruby --version
```

Should output something like: `ruby 3.2.0p0`

### Install Jekyll & Bundler

```bash
gem install bundler jekyll
```

### Create Jekyll Site

```bash
jekyll new .
```

This creates:
```
├── _config.yml          (Configuration)
├── _posts/              (Blog posts folder)
├── _layouts/            (HTML templates)
├── _includes/           (Reusable components)
├── Gemfile              (Dependencies)
├── index.md             (Homepage)
└── about.md             (About page)
```

### Install Dependencies

```bash
bundle install
```

---

## Step 3: Create Your First Post

Posts go in `_posts/` folder with format: `YYYY-MM-DD-title.md`

**Create:** `_posts/2026-01-25-hello-world.md`

```markdown
---
layout: post
title: "Hello World - My First Blog Post"
date: 2026-01-25
categories: [blog]
tags: [first-post]
---

# Hello World!

This is my first blog post using Jekyll and GitHub Pages!

## Why I Started Blogging

I wanted to share my knowledge about...

## What You'll Find Here

- Technical tutorials
- Project breakdowns
- Learning journey

More content coming soon!
```

**Key parts:**
- **Front matter** (between `---`) - Metadata for Jekyll
- **Markdown content** - Your actual post
- **Categories** - Used for organizing
- **Tags** - For filtering and discovery

---

## Step 4: Configure Your Site

Edit `_config.yml`:

```yaml
title: "Your Name"
author: "Your Name"
description: "Brief description of your blog"
baseurl: "" 
url: "https://USERNAME.github.io"
theme: minima

# Optional
twitter_username: your_handle
github_username: your_username
```

### Key Settings

| Setting | Purpose |
|---------|---------|
| `title` | Blog name in header |
| `description` | Short tagline |
| `url` | Your site URL |
| `theme` | Jekyll theme (minima is default) |

---

## Step 5: Test Locally

```bash
bundle exec jekyll serve
```

Output:
```
Server address: http://127.0.0.1:4000/
Server running... press ctrl-c to stop.
```

**Visit:** `http://localhost:4000` in your browser

You should see:
- Your title in header
- "Hello World" post in feed
- About page

---

## Step 6: Publish to GitHub

```bash
# Add all changes
git add .

# Commit
git commit -m "Initial Jekyll setup with first blog post"

# Push to GitHub
git push origin main
```

**Wait 1-2 minutes**, then visit: `https://USERNAME.github.io`

Your blog is **live**! 🎉

---

## Troubleshooting Common Issues

### Issue: "Bundler command not found"
**Solution:** Ruby not in PATH. Reinstall Ruby and check "Add to PATH"

### Issue: "Site not updating"
**Solution:** GitHub Pages builds are slow sometimes. Wait 2-3 minutes. Check Actions tab in GitHub.

### Issue: "404 when visiting site"
**Solutions:**
1. Check repository name is exactly `USERNAME.github.io`
2. Ensure repository is PUBLIC
3. Check GitHub Actions for build errors

### Issue: "Local site works but not on GitHub"
**Solution:** YAML in `_config.yml` has syntax error. Use YAML validator online.

---

## What's Next?

You now have a **working blog**! In Part 2, we'll cover:

- ✅ Custom domain setup
- ✅ Jekyll themes and customization
- ✅ Creating navigation menus
- ✅ Adding categories and tags pages
- ✅ SEO optimization

---

## Common Mistakes to Avoid

❌ **Using hyphens in front matter** - Use underscores: `last_name` not `last-name`

❌ **File naming wrong** - Must be `YYYY-MM-DD-title.md` exactly

❌ **Repository name typo** - Triple-check `USERNAME.github.io` matches exactly

❌ **Forgetting to push** - Changes locally don't auto-sync. Must `git push`

❌ **Enabling settings** - GitHub Pages settings should have main branch selected

---

## Interview Questions

**Q: What is the difference between GitHub Pages and GitHub?**
> GitHub is version control. GitHub Pages is the static hosting feature of GitHub. You can have code in GitHub that serves a website via Pages.

**Q: Why use Jekyll instead of just HTML files?**
> Jekyll provides templates, includes, and layouts so you don't repeat HTML. One change to header affects all pages. Markdown is faster to write than HTML.

**Q: How does Jekyll build work?**
> Jekyll processes Markdown + templates → generates static HTML files → servers these HTML files. No database queries, so it's fast.

**Q: Can you make dynamic sites with GitHub Pages?**
> Not directly. GitHub Pages serves static HTML. For dynamic features, use JavaScript on the client-side or use an external API.

---

## Summary

✅ Created GitHub repository  
✅ Set up Jekyll locally  
✅ Created first blog post  
✅ Configured site metadata  
✅ Tested locally  
✅ Published to GitHub  

**Your blog is live and version-controlled!**

Next post: We'll customize the design, add themes, and make it truly yours.

---

**Happy blogging! 📝**

*Have questions or issues? Check the [Jekyll docs](https://jekyllrb.com/docs/) or GitHub Pages help.*

---

**Series:**
- Part 1: From Zero to Published (Basics) ← You are here
- Part 2: Customization & Themes (Coming soon)
- Part 3: Advanced Features (Coming soon)
- Part 4: Performance & SEO (Coming soon)
