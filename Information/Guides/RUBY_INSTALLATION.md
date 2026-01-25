# 🔧 Ruby Installation Guide for Windows

## Quick Summary
Your system doesn't have Ruby installed yet. Follow these steps to get it set up.

---

## Option 1: RubyInstaller (Recommended) ⭐

**This is the easiest method for Windows.**

### Step 1: Download Ruby
1. Go to: https://rubyinstaller.org/downloads/
2. Download **Ruby+Devkit 3.2.0 (x64)** or the latest version
   - File name will look like: `rubyinstaller-3.2.0-1-x64.exe`

### Step 2: Run the Installer
1. Double-click the downloaded `.exe` file
2. Click "Next" to start installation
3. **Important:** Check the box for **"Add Ruby executables to your PATH"**
4. **Important:** Check the box for **"MSYS2 toolchain"**
5. Click "Install"
6. Wait for installation to complete (2-3 minutes)

### Step 3: Install MSYS2 Toolchain
After Ruby installation, a terminal window will open asking:
```
ridk install
Select which components to install.
If unsure just press enter!
> ?
```

**Type:** `1` and press Enter
**Type:** `2` and press Enter  
**Type:** `3` and press Enter
**Then press:** Enter to install

Wait for this to complete (10-15 minutes first time).

### Step 4: Close and Reopen PowerShell
1. Close all PowerShell windows
2. Open a NEW PowerShell window (important!)
3. Check Ruby is installed:
```powershell
ruby --version
gem --version
```

You should see version numbers like:
```
ruby 3.2.0 (2022-12-25 revision a528908271) [x64-mingw-ucrt]
```

---

## Option 2: Windows Package Manager (Faster)

If you have Windows 11, you can use:

```powershell
winget install RubyLang.Ruby
```

Then restart PowerShell and verify:
```powershell
ruby --version
```

---

## Option 3: Chocolatey

If you have Chocolatey installed:

```powershell
choco install ruby
```

Then restart PowerShell.

---

## After Ruby is Installed

Once you've installed Ruby, follow these steps:

### 1. Install Bundler
```powershell
gem install bundler
```

Verify:
```powershell
bundler --version
```

### 2. Navigate to Your Blog
```powershell
cd "C:\Users\Venu\OneDrive\Documents\GitBlog\madhavan11601828.github.io"
```

### 3. Install Dependencies
```powershell
bundle install
```

Wait for this to complete. You'll see:
```
...
Bundle complete! X gems in X seconds.
```

### 4. Start Local Server
```powershell
bundle exec jekyll serve
```

### 5. View Your Site
Open browser and go to:
```
http://localhost:4000
```

---

## ✅ Verification Checklist

After each step, verify:

| Step | Command | Expected Output |
|------|---------|-----------------|
| Ruby installed | `ruby --version` | Shows version (e.g., 3.2.0) |
| Bundler installed | `bundler --version` | Shows version (e.g., 2.4.x) |
| Dependencies ready | `bundle exec jekyll --version` | Shows version (e.g., jekyll 4.3.0) |
| Server running | `bundle exec jekyll serve` | Shows "Server running..." |
| Site accessible | Browser: localhost:4000 | Displays your homepage |

---

## 🆘 If You Get Errors

### "Ruby not found" even after installation
- You didn't restart PowerShell after installing Ruby
- **Solution:** Close all PowerShell windows and open a new one

### "Permission denied" error
- PowerShell doesn't have permission to install gems
- **Solution:** Right-click PowerShell → "Run as administrator"

### "Gemfile not found"
- You're not in the correct directory
- **Solution:** Run: `cd "C:\Users\Venu\OneDrive\Documents\GitBlog\madhavan11601828.github.io"`

### Slow installation (bundle install takes forever)
- Normal for first installation (can take 5-10 minutes)
- Make sure you have good internet connection
- Be patient! It will finish

---

## ⏱️ Estimated Time

- Ruby installation: 5-10 minutes
- Bundler: 1-2 minutes  
- Bundle install (dependencies): 5-10 minutes (first time only)
- **Total: 15-20 minutes first time**

---

## 🎯 Once Installed

You only need to do the installation once. After that:

```powershell
cd "C:\Users\Venu\OneDrive\Documents\GitBlog\madhavan11601828.github.io"
bundle exec jekyll serve
```

That's it! Your site will be ready at `http://localhost:4000`

---

## 📚 Learning More

Once you have Jekyll running, explore:
- Official Jekyll docs: https://jekyllrb.com/docs/
- GitHub Pages docs: https://docs.github.com/en/pages
- Ruby docs: https://ruby-doc.org/

---

**Ready to get started? Follow the steps above! 🚀**
