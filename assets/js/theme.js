/**
 * Theme Toggle System
 * Manages dark mode and light mode switching with localStorage persistence
 */

class ThemeManager {
  constructor() {
    this.STORAGE_KEY = 'blog-theme-preference';
    this.THEME_DARK = 'dark';
    this.THEME_LIGHT = 'light';
    this.init();
  }

  /**
   * Initialize theme manager
   */
  init() {
    this.loadTheme();
    this.createToggleButton();
    this.setupEventListeners();
    this.watchSystemPreference();
  }

  /**
   * Load theme from storage or system preference
   */
  loadTheme() {
    const savedTheme = localStorage.getItem(this.STORAGE_KEY);
    
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      // Use system preference if available
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = prefersDark ? this.THEME_DARK : this.THEME_LIGHT;
      this.setTheme(theme);
    }
  }

  /**
   * Set the current theme
   * @param {string} theme - 'light' or 'dark'
   */
  setTheme(theme) {
    const html = document.documentElement;
    
    // Validate theme
    if (theme !== this.THEME_DARK && theme !== this.THEME_LIGHT) {
      theme = this.THEME_LIGHT;
    }

    // Add smooth transition class
    document.body.classList.add('theme-switching');
    
    // Set the theme
    html.setAttribute('data-theme', theme);
    
    // Save preference
    localStorage.setItem(this.STORAGE_KEY, theme);
    
    // Update toggle button icon
    this.updateToggleButton(theme);
    
    // Remove transition class after animation completes
    setTimeout(() => {
      document.body.classList.remove('theme-switching');
    }, 300);

    // Dispatch custom event for other scripts
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  }

  /**
   * Toggle between light and dark theme
   */
  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || this.THEME_LIGHT;
    const newTheme = currentTheme === this.THEME_DARK ? this.THEME_LIGHT : this.THEME_DARK;
    this.setTheme(newTheme);
  }

  /**
   * Get current theme
   * @returns {string} Current theme ('light' or 'dark')
   */
  getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || this.THEME_LIGHT;
  }

  /**
   * Create theme toggle button
   */
  createToggleButton() {
    if (document.getElementById('theme-toggle')) return;

    const button = document.createElement('button');
    button.id = 'theme-toggle';
    button.className = 'theme-toggle';
    button.setAttribute('aria-label', 'Toggle dark mode');
    button.setAttribute('title', 'Toggle dark/light mode');
    
    this.updateToggleButton(this.getCurrentTheme());
    
    button.addEventListener('click', () => this.toggleTheme());
    
    document.body.appendChild(button);
  }

  /**
   * Update toggle button icon and appearance
   * @param {string} theme - Current theme
   */
  updateToggleButton(theme) {
    const button = document.getElementById('theme-toggle');
    if (!button) return;

    if (theme === this.THEME_DARK) {
      button.textContent = '☀️'; // Sun icon for light mode toggle
      button.setAttribute('title', 'Switch to light mode');
    } else {
      button.textContent = '🌙'; // Moon icon for dark mode toggle
      button.setAttribute('title', 'Switch to dark mode');
    }
  }

  /**
   * Setup event listeners
   */
  setupEventListeners() {
    // Listen for keyboard shortcut (Alt + T)
    document.addEventListener('keydown', (e) => {
      if ((e.altKey || e.metaKey) && e.code === 'KeyT') {
        e.preventDefault();
        this.toggleTheme();
      }
    });
  }

  /**
   * Watch for system preference changes
   */
  watchSystemPreference() {
    if (!window.matchMedia) return;

    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    darkModeQuery.addEventListener('change', (e) => {
      // Only apply system preference if user hasn't set a preference
      if (!localStorage.getItem(this.STORAGE_KEY)) {
        const theme = e.matches ? this.THEME_DARK : this.THEME_LIGHT;
        this.setTheme(theme);
      }
    });
  }

  /**
   * Force a specific theme
   * @param {string} theme - Theme to force
   */
  forceTheme(theme) {
    this.setTheme(theme);
  }

  /**
   * Reset to system preference
   */
  resetToSystemPreference() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.loadTheme();
  }

  /**
   * Get theme statistics
   * @returns {object} Theme statistics
   */
  getStats() {
    return {
      currentTheme: this.getCurrentTheme(),
      savedPreference: localStorage.getItem(this.STORAGE_KEY),
      systemPreference: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    };
  }
}

/**
 * Initialize theme manager when DOM is ready
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
  });
} else {
  // DOM is already loaded
  window.themeManager = new ThemeManager();
}

/**
 * Make theme manager globally accessible
 * Usage in console:
 * - themeManager.toggleTheme()
 * - themeManager.setTheme('dark')
 * - themeManager.getCurrentTheme()
 * - themeManager.getStats()
 */
