# 📋 How to Test Your Blog Locally - Complete Guide

## 🎯 The Goal

Run your blog on your computer locally at `http://localhost:4000` before pushing to GitHub.

**Benefits:**
- ✅ Test changes instantly
- ✅ See how your site really looks
- ✅ Catch errors before deploying
- ✅ Preview all 7 pillars and blog posts
- ✅ Test responsive design on mobile sizes

---

## 📊 Step-by-Step Process

### Phase 1: Install Ruby (One Time - 15 minutes)

Your computer doesn't have Ruby yet. Here's the quick way:

#### 1️⃣ Download Ruby
- Go to: **https://rubyinstaller.org/downloads/**
- Download: **Ruby+Devkit 3.2.0 (x64)** (or latest version)
- File: `rubyinstaller-3.2.0-1-x64.exe`

#### 2️⃣ Run Installer
1. Double-click the `.exe` file
2. Check ✅ "Add Ruby executables to your PATH"
3. Check ✅ "MSYS2 toolchain"
4. Click "Install" (wait 2-3 minutes)

#### 3️⃣ Install MSYS2
A terminal appears asking for components. Type:
```
1
2
3
```
Then press Enter. (Wait 10-15 minutes)

#### 4️⃣ Verify Installation
Close all PowerShell windows. Open a NEW PowerShell:
```powershell
ruby --version
```
Should show: `ruby 3.2.0 (or newer)`

---

### Phase 2: Setup Project (One Time - 10 minutes)

#### 1️⃣ Install Bundler
```powershell
gem install bundler
```

#### 2️⃣ Go to Your Blog Directory
```powershell
cd "C:\Users\Venu\OneDrive\Documents\GitBlog\madhavan11601828.github.io"
```

#### 3️⃣ Install Dependencies
```powershell
bundle install
```

Wait for completion. Shows: `Bundle complete! X gems in X seconds.`

---

### Phase 3: Start Local Server (Every Time - 5 seconds)

```powershell
cd "C:\Users\Venu\OneDrive\Documents\GitBlog\madhavan11601828.github.io"
bundle exec jekyll serve
```

**Terminal shows:**
```
Configuration file: C:.../_config.yml
            Source: C:.../madhavan11601828.github.io
       Destination: C:.../madhavan11601828.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
                    done in 2.345 seconds.
 Auto-regeneration: enabled. Watch for file changes and rebuild on save.
    Server address: http://127.0.0.1:4000/
  Server running...
Press ctrl-c to stop the server.
```

---

### Phase 4: View Your Site (In Browser)

Open browser and go to:
```
http://localhost:4000
```

**You should see:**
1. ✅ Your homepage with animated logo
2. ✅ "Explore Learning Pillars" section
3. ✅ 7 pillar cards with colors
4. ✅ Featured topics and latest articles

---

## 🧪 What to Test

### ✅ HomePage
- [ ] Logo displays and floats
- [ ] Hero text readable
- [ ] "Explore Pillars" button works → scrolls to pillars
- [ ] Pillar cards all visible (7 cards)
- [ ] Click any pillar card → navigates to pillar page

### ✅ Each Pillar Page

**For each of these URLs:**
- http://localhost:4000/foundations/
- http://localhost:4000/machine-learning/
- http://localhost:4000/nlp/
- http://localhost:4000/computer-vision/
- http://localhost:4000/deep-learning/
- http://localhost:4000/generative-ai/
- http://localhost:4000/agentic-ai/

**Check:**
- [ ] Correct color gradient for pillar
- [ ] Pillar title displays
- [ ] Learning roadmap shows 6 steps
- [ ] "No posts yet" message (normal - no posts created)
- [ ] Resources section shows 4 tools
- [ ] Use cases display correctly

### ✅ Master Pillars Page
- URL: http://localhost:4000/pillars/
- [ ] All 7 pillars visible
- [ ] Learning timeline shows (32-42 weeks)
- [ ] 8-point blog format explained
- [ ] All links work

### ✅ Blog Posts
- [ ] Posts display in grid
- [ ] Metadata shows (date, tags)
- [ ] Can click to read full post
- [ ] Post content renders correctly

### ✅ Responsive Design
- [ ] **Desktop:** Full width, 4-column layouts
- [ ] **Tablet (768px):** 2-column layouts
  - Open browser DevTools: F12
  - Click: Toggle device toolbar (Ctrl+Shift+M)
  - Select: iPad or tablet preset
- [ ] **Mobile (480px):** 1-column, full width
  - Select: iPhone preset

---

## 🔄 Development Workflow

### Making Changes

1. **Open file** in VS Code
2. **Edit content**
3. **Save file** (Ctrl+S)
4. **Watch terminal** - Jekyll rebuilds automatically:
   ```
   Regenerating: 1 file(s) changed at ...
   ```
5. **Refresh browser** (F5)
6. **See changes instantly!**

### Example: Editing Homepage

1. Open `index.md`
2. Change text in hero section
3. Save (Ctrl+S)
4. Terminal shows rebuild
5. Browser refresh → see new text

---

## ⚡ Useful Commands

```powershell
# Start local server
bundle exec jekyll serve

# Use different port (if 4000 busy)
bundle exec jekyll serve --port 3000

# Build site without serving
bundle exec jekyll build

# Clean build (remove old files first)
bundle exec jekyll clean
bundle exec jekyll build

# With live auto-reload (nicer)
bundle exec jekyll serve --livereload

# Stop server
Ctrl+C
```

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| "Ruby not found" | Install from https://rubyinstaller.org/, then restart PowerShell |
| "Bundle not found" | Run: `gem install bundler` |
| "Port 4000 in use" | Run: `bundle exec jekyll serve --port 3000` then visit `http://localhost:3000` |
| CSS/images not loading | Hard refresh: `Ctrl+Shift+F5` in browser |
| Changes not showing | Check terminal for rebuild message, refresh browser |
| Server won't start | Press `Ctrl+C`, wait 5 sec, try again |
| "Gemfile not found" error | Make sure you're in correct directory: `cd "C:\Users\Venu\OneDrive\Documents\GitBlog\madhavan11601828.github.io"` |

---

## 📱 Test on Mobile Device

1. Find your computer IP address:
   ```powershell
   ipconfig
   ```
   Look for "IPv4 Address" (usually 192.168.x.x)

2. Make sure server running:
   ```powershell
   bundle exec jekyll serve
   ```

3. On your phone, open browser:
   ```
   http://192.168.1.100:4000
   ```
   (Replace with your actual IP)

---

## 📝 Workflow Summary

### Quick Start (Every Time)

```powershell
# 1. Navigate to blog
cd "C:\Users\Venu\OneDrive\Documents\GitBlog\madhavan11601828.github.io"

# 2. Start server
bundle exec jekyll serve

# 3. Open browser
http://localhost:4000

# 4. Edit files in VS Code
# Files auto-compile, refresh browser to see

# 5. Stop server when done
Ctrl+C
```

**That's it! Simple workflow:**
1. Terminal: `bundle exec jekyll serve`
2. Browser: `localhost:4000`
3. Editor: Make changes
4. Browser: F5 to refresh

---

## ✅ Verification Checklist

Before considering setup complete:

- [ ] Ruby installed (`ruby --version` shows version)
- [ ] Bundler installed (`bundler --version` shows version)
- [ ] Dependencies installed (`bundle install` completed)
- [ ] Server starts (`bundle exec jekyll serve` shows "Server running")
- [ ] Homepage loads (`http://localhost:4000` shows your site)
- [ ] Pillar cards visible and clickable
- [ ] Can navigate to at least one pillar page
- [ ] Blog posts display (even if empty)
- [ ] No errors in terminal

---

## 🚀 Next Steps

Once local testing works:

1. **Create first blog post** using 8-section template
2. **Test post locally** before deploying
3. **Push to GitHub** when satisfied
4. **Site auto-deploys** to GitHub Pages

---

## 📚 Documentation Files

Check these files in your repo:
- `LOCAL_TESTING_GUIDE.md` - Detailed guide
- `QUICK_TEST_REFERENCE.md` - Quick commands
- `RUBY_INSTALLATION.md` - Ruby setup details
- `PILLARS_BLUEPRINT.md` - Blog structure explained

---

## 🎓 Tips for Success

1. **Keep terminal visible** - See rebuild messages
2. **Use multiple windows:**
   - Terminal: Jekyll server
   - Browser: Localhost
   - Editor: VS Code
3. **Hard refresh when needed:** Ctrl+Shift+F5
4. **Save files often** - Jekyll rebuilds on save
5. **Check terminal for errors** - Always helpful

---

**You're ready to test! Follow the steps above and your site will be running locally in 20-30 minutes. 🚀**

---

Last Updated: January 25, 2026
