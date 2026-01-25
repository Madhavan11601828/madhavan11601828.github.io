# ⚡ Quick Reference: Local Testing Commands

## One-Time Setup (First Time Only)

```powershell
# 1. Install Ruby from https://rubyinstaller.org/
# 2. Verify Ruby installed
ruby --version

# 3. Install Bundler
gem install bundler

# 4. Navigate to your blog
cd "C:\Users\Venu\OneDrive\Documents\GitBlog\madhavan11601828.github.io"

# 5. Install dependencies (takes 5-10 minutes)
bundle install
```

---

## Regular Testing (Every Time You Want to Test)

```powershell
# Navigate to blog directory
cd "C:\Users\Venu\OneDrive\Documents\GitBlog\madhavan11601828.github.io"

# Start local server
bundle exec jekyll serve

# Server will show:
# Server address: http://127.0.0.1:4000/
# Server running...
# Press ctrl-c to stop
```

Then open browser: **http://localhost:4000**

---

## Quick Workflow

1. **Start terminal**
   ```powershell
   cd "C:\Users\Venu\OneDrive\Documents\GitBlog\madhavan11601828.github.io"
   bundle exec jekyll serve
   ```

2. **Edit files** in VS Code

3. **Refresh browser** (F5) to see changes

4. **Stop server** when done: `Ctrl+C`

---

## Useful Commands

| Task | Command |
|------|---------|
| Start server | `bundle exec jekyll serve` |
| Start on port 3000 | `bundle exec jekyll serve --port 3000` |
| Build only (no serve) | `bundle exec jekyll build` |
| Clean build | `bundle exec jekyll clean && bundle exec jekyll build` |
| With auto-reload | `bundle exec jekyll serve --livereload` |
| Stop server | `Ctrl+C` |

---

## Testing Checklist

- [ ] Server running (`bundle exec jekyll serve`)
- [ ] No errors in terminal
- [ ] Browser shows: `http://localhost:4000`
- [ ] Homepage loads with logo
- [ ] Pillar cards visible and clickable
- [ ] Can navigate to `/foundations/`, `/machine-learning/`, etc.
- [ ] Blog posts display correctly
- [ ] Mobile responsive (test with F12)

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Ruby not found" | Install from https://rubyinstaller.org/ |
| "Bundle not found" | Run: `gem install bundler` |
| "Gemfile not found" | Check you're in the right directory |
| Port 4000 in use | Use: `bundle exec jekyll serve --port 3000` |
| CSS not loading | Hard refresh: `Ctrl+Shift+F5` |
| Server won't stop | `Ctrl+C` in terminal |

---

## Browser URLs to Test

```
Homepage:           http://localhost:4000/
Foundations:        http://localhost:4000/foundations/
Machine Learning:   http://localhost:4000/machine-learning/
NLP:                http://localhost:4000/nlp/
Computer Vision:    http://localhost:4000/computer-vision/
Deep Learning:      http://localhost:4000/deep-learning/
Generative AI:      http://localhost:4000/generative-ai/
Agentic AI:         http://localhost:4000/agentic-ai/
Pillars Overview:   http://localhost:4000/pillars/
All Posts:          http://localhost:4000/blog/
RSS Feed:           http://localhost:4000/feed.xml
```

---

## Files You'll Edit Most

```
_posts/YYYY-MM-DD-title.md       (New blog posts)
_pages/*/index.md                (Category pages)
index.md                         (Homepage)
_config.yaml                     (Site settings)
```

**After editing:** Refresh browser (F5) - changes appear instantly!

---

**Happy local testing! 🚀**
