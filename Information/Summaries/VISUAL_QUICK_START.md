# 🚀 Local Testing - Visual Quick Start

## 3 Phases to Get Running Locally

### 📦 PHASE 1: Install Ruby (First Time - 15 min)

```
┌─────────────────────────────────────────────────┐
│  Step 1: Download Ruby+Devkit from              │
│  https://rubyinstaller.org/downloads/           │
│  (Get version 3.2.0 or latest)                  │
└────────────────┬────────────────────────────────┘
                 │
┌────────────────▼────────────────────────────────┐
│  Step 2: Run Installer                          │
│  ✓ Check "Add Ruby executables to PATH"         │
│  ✓ Check "MSYS2 toolchain"                      │
│  ✓ Click Install                                │
└────────────────┬────────────────────────────────┘
                 │
┌────────────────▼────────────────────────────────┐
│  Step 3: MSYS2 Installation                     │
│  Terminal asks for components:                  │
│  Type: 1 → Enter                                │
│  Type: 2 → Enter                                │
│  Type: 3 → Enter                                │
│  Wait 10-15 minutes...                          │
└────────────────┬────────────────────────────────┘
                 │
┌────────────────▼────────────────────────────────┐
│  Step 4: Verify                                 │
│  Close all PowerShell windows                   │
│  Open NEW PowerShell                            │
│  Type: ruby --version                           │
│  Should show version number ✓                   │
└─────────────────────────────────────────────────┘
```

---

### 🔧 PHASE 2: Setup (First Time - 10 min)

```
┌─────────────────────────────────────────────────┐
│  Step 1: Install Bundler                        │
│  gem install bundler                            │
└────────────────┬────────────────────────────────┘
                 │
┌────────────────▼────────────────────────────────┐
│  Step 2: Go to Blog Directory                   │
│  cd "C:\Users\Venu\OneDrive\Documents\GitBlog\  │
│  madhavan11601828.github.io"                    │
└────────────────┬────────────────────────────────┘
                 │
┌────────────────▼────────────────────────────────┐
│  Step 3: Install Dependencies                   │
│  bundle install                                 │
│  (Wait 5-10 minutes, shows:                     │
│  "Bundle complete! X gems in Y seconds")        │
└─────────────────────────────────────────────────┘
```

---

### ▶️ PHASE 3: Run Server (Every Time - 5 sec)

```
┌─────────────────────────────────────────────────┐
│  Command:                                       │
│  bundle exec jekyll serve                       │
│                                                 │
│  Terminal shows:                                │
│  Server address: http://127.0.0.1:4000/        │
│  Server running...                              │
│  Press ctrl-c to stop the server.               │
└────────────────┬────────────────────────────────┘
                 │
┌────────────────▼────────────────────────────────┐
│  Open Browser:                                  │
│  http://localhost:4000                          │
│                                                 │
│  ✓ Homepage loads                               │
│  ✓ See your logo                                │
│  ✓ See pillar cards                             │
│  ✓ Ready to test!                               │
└─────────────────────────────────────────────────┘
```

---

## 📋 Quick Command Reference

### Installation (One Time)
```powershell
# Download from: https://rubyinstaller.org/
# (Run installer)
# Then restart PowerShell

gem install bundler
cd "C:\Users\Venu\OneDrive\Documents\GitBlog\madhavan11601828.github.io"
bundle install
```

### Start Server (Every Time)
```powershell
cd "C:\Users\Venu\OneDrive\Documents\GitBlog\madhavan11601828.github.io"
bundle exec jekyll serve
```

### Open in Browser
```
http://localhost:4000
```

### Stop Server
```powershell
Ctrl+C
```

---

## 🎯 What to Check

```
Homepage (http://localhost:4000)
├── ✓ Logo displays
├── ✓ Hero section shows
├── ✓ 7 Pillar cards visible
└── ✓ Latest posts show

Pillar Pages
├── ✓ /foundations/ → Red gradient
├── ✓ /machine-learning/ → Teal
├── ✓ /nlp/ → Blue
├── ✓ /computer-vision/ → Salmon
├── ✓ /deep-learning/ → Green
├── ✓ /generative-ai/ → Gold
└── ✓ /agentic-ai/ → Purple

Responsive (F12 → Toggle Device)
├── ✓ Desktop → Full width
├── ✓ Tablet (768px) → 2 column
└── ✓ Mobile (480px) → 1 column
```

---

## 🔄 Development Loop

```
1. Terminal: bundle exec jekyll serve
                        ↓
2. Browser: http://localhost:4000
                        ↓
3. Edit file in VS Code (e.g., index.md)
                        ↓
4. Save file (Ctrl+S)
                        ↓
5. Check terminal: "Regenerating: 1 file..."
                        ↓
6. Refresh browser (F5)
                        ↓
7. See changes instantly! ✓
```

---

## ⏱️ Time Estimates

| Task | Time | First Time? |
|------|------|---|
| Download Ruby | 5 min | Yes |
| Install Ruby | 5 min | Yes |
| Install MSYS2 | 10-15 min | Yes |
| Install Bundler | 2 min | Yes |
| Bundle install | 5-10 min | Yes |
| **Total First Time** | **30-40 min** | **Yes** |
| **Bundle exec jekyll serve** | **5 sec** | **Every time** |

---

## ✅ Success Indicators

✓ Ruby installed - shows version when you type `ruby --version`  
✓ Bundler installed - shows version when you type `bundler --version`  
✓ Server running - terminal shows "Server running..."  
✓ Site accessible - browser loads `http://localhost:4000`  
✓ Homepage visible - see logo, pillar cards, posts  

---

## 🆘 Common Issues

| Error | Fix |
|-------|-----|
| "Ruby not found" | Install from https://rubyinstaller.org/ |
| "Bundler not found" | `gem install bundler` |
| Port 4000 in use | `bundle exec jekyll serve --port 3000` |
| Changes not showing | Hard refresh: `Ctrl+Shift+F5` |
| "Gemfile not found" | Check correct directory |

---

## 📱 Test on Phone

1. Find your IP: `ipconfig` → IPv4 Address (192.168.x.x)
2. Make sure server running: `bundle exec jekyll serve`
3. On phone browser: `http://192.168.1.100:4000` (use your IP)

---

## 📚 Helpful Files in Your Repo

- `HOW_TO_TEST_LOCALLY.md` - Complete guide
- `LOCAL_TESTING_GUIDE.md` - Detailed instructions
- `QUICK_TEST_REFERENCE.md` - Command cheat sheet
- `RUBY_INSTALLATION.md` - Ruby setup details

---

## 🎓 Next Steps After Testing

1. ✓ Local testing works
2. → Create first blog post (8-section template)
3. → Test post locally
4. → Push to GitHub
5. → Site auto-deploys

---

**Ready? Follow Phase 1 → Phase 2 → Phase 3 above! 🚀**
