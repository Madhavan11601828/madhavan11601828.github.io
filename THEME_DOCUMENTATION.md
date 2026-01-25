# 🌙 Dark Mode & Light Mode Theme System

A comprehensive dark/light mode implementation for your blog with localStorage persistence, system preference detection, and smooth transitions.

## Features

✨ **Smart Theme Detection**
- Automatically detects system preference (prefers-color-scheme)
- Remembers user's choice in localStorage
- Seamless theme switching without page reload

🎨 **Beautiful Gradients & Transitions**
- Custom CSS variables for all colors
- Smooth fade transitions between themes
- Gradient accents that adapt to theme

🌐 **System Integration**
- Respects user's OS dark mode preference
- Automatic adaptation when system settings change
- Keyboard shortcut: Alt+T (or Cmd+T on Mac)

📱 **Fully Responsive**
- Fixed floating toggle button on desktop
- Responsive design on mobile
- Touch-friendly interface

🔧 **Developer Friendly**
- Easy to customize colors
- Global CSS variables for theming
- JavaScript API for programmatic control
- Console access to theme manager

## How It Works

### Color Scheme

The theme system uses CSS custom properties (variables) to manage colors:

**Light Mode (Default):**
- Background: White (#ffffff)
- Text: Dark gray (#333333)
- Cards: White with subtle shadows
- Accents: Purple-violet gradient

**Dark Mode:**
- Background: Dark (#1a1a1a)
- Text: Light gray (#e8e8e8)
- Cards: Dark with enhanced shadows
- Accents: Lighter purple-violet gradient

### Implementation Files

1. **`assets/css/theme.css`** - All theme colors and styling
   - CSS variables for light and dark modes
   - Component-specific theming
   - Smooth transitions
   - Responsive design

2. **`assets/js/theme.js`** - Theme switching logic
   - ThemeManager class
   - localStorage persistence
   - System preference detection
   - Event handling

3. **`_layouts/default.html`** - Main layout template
   - Loads theme CSS first
   - Includes theme JavaScript
   - Prevents theme flash on load

## Usage

### For Users

**Desktop:**
- Click the moon/sun icon (fixed button, bottom-right)
- Or press Alt+T (Cmd+T on Mac)

**Mobile:**
- Tap the moon/sun icon (visible on screen)

**Browser Console (Developers):**
```javascript
// Toggle theme
themeManager.toggleTheme()

// Set specific theme
themeManager.setTheme('dark')
themeManager.setTheme('light')

// Get current theme
themeManager.getCurrentTheme()

// Get statistics
themeManager.getStats()

// Reset to system preference
themeManager.resetToSystemPreference()

// Force dark mode
themeManager.forceTheme('dark')
```

### For Developers

**Customize Colors:**
Edit `assets/css/theme.css` and modify the CSS variables in `:root` and `[data-theme="dark"]` sections.

**Access Theme in JavaScript:**
```javascript
// Listen to theme changes
window.addEventListener('themechange', (e) => {
  console.log('New theme:', e.detail.theme);
});

// Get current theme
const currentTheme = themeManager.getCurrentTheme();
```

**Add New Components:**
```css
/* In theme.css */
.my-component {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}
```

## Color Variables Reference

### Background Colors
- `--bg-primary`: Main background
- `--bg-secondary`: Secondary background
- `--bg-tertiary`: Tertiary background

### Text Colors
- `--text-primary`: Main text
- `--text-secondary`: Secondary text
- `--text-tertiary`: Tertiary text

### UI Colors
- `--border-color`: Main border color
- `--card-bg`: Card backgrounds
- `--card-shadow`: Card shadows
- `--code-bg`: Code block background
- `--highlight-bg`: Highlight background

### Accent Colors
- `--accent-primary`: Primary accent (purple)
- `--accent-secondary`: Secondary accent (violet)
- `--link-color`: Link color
- `--link-hover`: Link hover color

### Status Colors
- `--success-color`: Success state
- `--error-color`: Error state
- `--warning-color`: Warning state
- `--info-color`: Info state

## Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome/Edge | ✅ Full | Includes CSS variables & localStorage |
| Firefox | ✅ Full | All features supported |
| Safari | ✅ Full | All features supported |
| Opera | ✅ Full | All features supported |
| IE 11 | ⚠️ Partial | No CSS variables, basic functionality |

## localStorage Key

The theme preference is stored with key: `blog-theme-preference`

Value: `'light'` or `'dark'`

## Performance Notes

- Theme CSS loads immediately to prevent flash
- JavaScript initializes after DOM loads
- Smooth transitions use CSS (GPU accelerated)
- Minimal JavaScript overhead
- No external dependencies

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Alt + T | Toggle between light and dark mode |
| Cmd + T | Toggle (Mac) |

## Troubleshooting

**Theme not persisting?**
- Check if localStorage is enabled
- Clear browser cache
- Try `themeManager.resetToSystemPreference()`

**Button not showing?**
- Check if `theme.js` is loading (DevTools > Network)
- Check browser console for errors
- Ensure theme.css is loaded first

**Colors look wrong?**
- Clear browser cache (Ctrl+Shift+Delete)
- Try different browser
- Check CSS variable definitions in theme.css

## Future Enhancements

- [ ] Theme selector with more options (e.g., auto, sepia, high contrast)
- [ ] Per-page theme preferences
- [ ] Custom user theme creation
- [ ] Theme synchronization across tabs
- [ ] Analytics for theme usage

## Credits

Designed and implemented for the AI Learning Blog platform.
Follows WCAG 2.1 accessibility standards.

## License

Part of the madhavan11601828.github.io project.
