# 🚀 Local Jekyll Development Guide

## Quick Start (Windows PowerShell)

### Step 1: Install Ruby (if not already installed)

**Check if Ruby is installed:**
```powershell
ruby --version
```

If you see a version number, skip to Step 2. Otherwise, install Ruby:

**Option A: Using RubyInstaller (Recommended for Windows)**
1. Download from: https://rubyinstaller.org/
2. Download **Ruby+Devkit 3.2.0** (or latest)
3. Run the installer
4. Check "MSYS2 toolchain" during installation
5. After installation, run:
```powershell
ridk install
```
Then select option 1, 2, and 3 when prompted

**Option B: Using Chocolatey**
```powershell
choco install ruby
```

**Verify installation:**
```powershell
ruby --version
gem --version
```

---

### Step 2: Install Bundler

```powershell
gem install bundler
```

Verify:
```powershell
bundler --version
```

---

### Step 3: Navigate to Your Blog Directory

```powershell
cd "C:\Users\Venu\OneDrive\Documents\GitBlog\madhavan11601828.github.io"
```

---

### Step 4: Install Dependencies

```powershell
bundle install
```

This will read your `Gemfile` and install all required gems (Jekyll, plugins, etc.)

**Expected output:**
```
...
Bundle complete! X gems in Y seconds.
```

> **Note:** This may take 2-5 minutes on first run.

---

### Step 5: Start the Local Server

```powershell
bundle exec jekyll serve
```

**Expected output:**
```
Configuration file: C:.../madhavan11601828.github.io/_config.yml
            Source: C:.../madhavan11601828.github.io
       Destination: C:.../madhavan11601828.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
                    done in X.XXX seconds.
 Auto-regeneration: enabled. Watch for file changes and rebuild on save.
    Server address: http://127.0.0.1:4000/
  Server running...
Press ctrl-c to stop the server.
```

---

### Step 6: View Your Site

Open your browser and go to:
```
http://localhost:4000
```

or

```
http://127.0.0.1:4000
```

---

## 🎯 What to Test

Once the server is running, test these sections:

### ✅ Homepage
- [ ] Hero section displays with logo animation
- [ ] "Explore Learning Pillars" button works
- [ ] Pillar navigation cards display all 7 pillars with colors
- [ ] Featured Topics section shows
- [ ] Latest Articles section displays your posts

### ✅ Pillar Pages
- [ ] Click each pillar card to test navigation:
  - [ ] `/foundations/` (Red gradient)
  - [ ] `/machine-learning/` (Teal gradient)
  - [ ] `/nlp/` (Blue gradient)
  - [ ] `/computer-vision/` (Salmon gradient)
  - [ ] `/deep-learning/` (Green gradient)
  - [ ] `/generative-ai/` (Gold gradient)
  - [ ] `/agentic-ai/` (Purple gradient)

### ✅ Master Pillars Page
- [ ] `/pillars/` - Check master overview loads correctly
- [ ] All 7 pillar cards visible
- [ ] Learning timeline displays
- [ ] Blog format explanation shows

### ✅ Individual Posts
- [ ] Click on any blog post to view full article
- [ ] Check metadata (date, tags) display correctly
- [ ] Read More links work

### ✅ Responsive Design
- [ ] Desktop (full width) - Resize browser to test
- [ ] Tablet (768px) - Should show 2-column layout
- [ ] Mobile (480px) - Should show 1-column layout
- [ ] Test with DevTools (F12 → Toggle device toolbar)

---

## 🔄 Development Workflow

### Making Changes

1. **Edit files** in your editor (VS Code)
2. **Save the file**
3. Jekyll automatically detects changes and rebuilds
4. **Refresh browser** (F5) to see updates

> **Note:** Rebuilds are usually instant (< 1 second)

### Common Files to Edit

- `index.md` - Homepage
- `_posts/YYYY-MM-DD-title.md` - Blog posts
- `_pages/*/index.md` - Category pages
- `_config.yaml` - Site configuration (requires server restart)

### If Something Doesn't Update

1. Check terminal output for errors
2. Press `Ctrl+C` to stop server
3. Run `bundle exec jekyll serve` again
4. Refresh browser (Ctrl+F5 for hard refresh)

---

## 🛠️ Useful Commands

### Start Server (with auto-refresh)
```powershell
bundle exec jekyll serve
```

### Start Server on Custom Port
```powershell
bundle exec jekyll serve --port 3000
```

### Build Static Site (without serving)
```powershell
bundle exec jekyll build
```

### Clean Build (remove generated files first)
```powershell
bundle exec jekyll clean
bundle exec jekyll build
```

### Rebuild with Incremental Changes (faster)
```powershell
bundle exec jekyll serve --incremental
```

### Check for Errors/Linting
```powershell
bundle exec jekyll build --verbose
```

---

## ⚠️ Common Issues & Solutions

### Issue: "bundle: command not found"
**Solution:** Install bundler
```powershell
gem install bundler
```

### Issue: "Ruby not found"
**Solution:** Install Ruby from https://rubyinstaller.org/

### Issue: "Gemfile not found"
**Solution:** Make sure you're in the correct directory:
```powershell
cd "C:\Users\Venu\OneDrive\Documents\GitBlog\madhavan11601828.github.io"
ls Gemfile
```

### Issue: "Permission denied" errors
**Solution:** Try running PowerShell as Administrator

### Issue: Port 4000 already in use
**Solution:** Kill the process or use different port:
```powershell
# Use port 3000 instead
bundle exec jekyll serve --port 3000
```

Then visit: `http://localhost:3000`

### Issue: CSS/JS not loading
**Solution:** Do a hard refresh in browser:
- Windows: `Ctrl + Shift + F5`
- Mac: `Cmd + Shift + R`

### Issue: "Liquid Exception" errors
**Solution:** Check the error message in terminal, usually in YAML frontmatter

---

## 📝 Development Tips

### 1. Keep Terminal Visible
Keep the Jekyll server terminal window visible so you can see rebuild messages and errors.

### 2. Multiple Windows
- Terminal: Jekyll server
- Browser: http://localhost:4000
- Editor: VS Code (editing files)

### 3. Use LiveReload (Optional)
Add to your Gemfile:
```ruby
gem 'jekyll-livereload'
```

Then run:
```powershell
bundle add jekyll-livereload
bundle exec jekyll serve --livereload
```

Browser automatically refreshes when you save files!

### 4. Test on Mobile
Find your computer's IP address:
```powershell
ipconfig
```

Look for "IPv4 Address" (usually 192.168.x.x)

Then on your phone, visit:
```
http://[YOUR_IP]:4000
```

Example: `http://192.168.1.100:4000`

---

## 🚀 Deployment Workflow

Once everything works locally:

1. Make changes and test locally
2. Commit to git:
   ```powershell
   git add .
   git commit -m "Your message"
   ```
3. Push to GitHub:
   ```powershell
   git push origin main
   ```
4. GitHub Pages automatically builds and deploys (1-2 minutes)
5. Visit: `https://madhavan11601828.github.io`

---

## 📊 File Structure

```
madhavan11601828.github.io/
├── index.md                 (Homepage)
├── _config.yaml             (Site configuration)
├── Gemfile                  (Dependencies)
├── _posts/                  (Blog posts)
│   ├── 2026-01-25-...md
│   └── 2026-02-01-...md
├── _pages/                  (Category pages)
│   ├── pillars.md
│   ├── foundations/
│   ├── machine-learning/
│   ├── nlp/
│   ├── computer-vision/
│   ├── deep-learning/
│   ├── generative-ai/
│   └── agentic-ai/
├── _templates/              (Templates)
├── assets/                  (Images, CSS, JS)
│   └── images/
│       └── Logo.png
└── _site/                   (Generated - ignore)
```

---

## ✅ Quick Checklist

Before testing:
- [ ] Ruby installed and working
- [ ] Bundler installed
- [ ] In correct directory
- [ ] `Gemfile` exists
- [ ] `_config.yaml` exists
- [ ] `bundle install` completed

Testing:
- [ ] Run `bundle exec jekyll serve`
- [ ] Server starts without errors
- [ ] Visit `http://localhost:4000`
- [ ] Homepage loads
- [ ] Navigation works
- [ ] Pillar pages load
- [ ] Posts display

---

## 🎓 Next Steps

Once local testing works:

1. **Create your first blog post** using the 8-section template
2. **Test it locally** before pushing to GitHub
3. **Push to GitHub** when satisfied
4. **Monitor GitHub Pages** for auto-deployment

---

**Happy blogging! 🚀**

Last Updated: January 25, 2026
