# Restore Original Theme (Warm Cream)

This guide provides step-by-step instructions to switch from the Christmas theme back to the original Warm Cream theme.

---

## Quick Summary

| Step | File | Action |
|------|------|--------|
| 1 | `assets/css/main.scss` | Change theme imports |
| 2 | `_layouts/default.html` | Remove snow & border class |
| 3 | `_includes/masthead.html` | Remove Santa & border class |
| 4 | `_includes/head.html` | Change default to light theme |

---

## Step 1: Update Theme Imports in `main.scss`

**File:** `assets/css/main.scss`

### Find these lines (around line 15-16):
```scss
@import "theme/christmas_light";  // Christmas Light Theme
@import "theme/christmas_dark";   // Christmas Dark Theme
```

### Replace with:
```scss
@import "theme/default_light";  // Default Light Theme (Warm Cream)
@import "theme/default_dark";   // Default Dark Theme
```

### Find this line (around line 25):
```scss
@import "christmas";  // Christmas decorations (borders, snowflakes)
```

### Comment it out:
```scss
// @import "christmas";  // Christmas decorations (disabled)
```

---

## Step 2: Update Layout in `default.html`

**File:** `_layouts/default.html`

### Find these lines (around line 14-22):
```html
  <body>

    {% include christmas-snow.html %}
    {% include browser-upgrade.html %}
    {% include masthead.html %}

    {{ content }}

    <div class="page__footer christmas-border-bottom">
```

### Replace with:
```html
  <body>

    {% include browser-upgrade.html %}
    {% include masthead.html %}

    {{ content }}

    <div class="page__footer">
```

**Changes:**
1. Remove `{% include christmas-snow.html %}`
2. Remove `christmas-border-bottom` class from `.page__footer`

---

## Step 3: Update Header in `masthead.html`

**File:** `_includes/masthead.html`

### Find these lines (line 3-6):
```html
<div class="masthead christmas-border-top">
  <!-- Santa Sleigh Animation -->
  <div class="santa-sleigh" aria-hidden="true"></div>
  <div class="santa-sleigh-reverse" aria-hidden="true"></div>
  <div class="masthead__inner-wrap">
```

### Replace with:
```html
<div class="masthead">
  <div class="masthead__inner-wrap">
```

**Changes:**
1. Remove `christmas-border-top` class
2. Remove Santa sleigh `<div>` elements

---

## Step 4: Update Theme Detection in `head.html`

**File:** `_includes/head.html`

### Find these lines (around line 20-30):
```javascript
<!-- Theme detection (must run early to prevent flash) -->
<script>
  (function() {
    var theme = localStorage.getItem('theme');
    // Default to dark theme if no preference is saved (Christmas theme)
    if (theme !== 'light') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    window.__initialTheme = theme === 'light' ? 'light' : 'dark';
  })();
</script>
```

### Replace with:
```javascript
<!-- Theme detection (must run early to prevent flash) -->
<script>
  (function() {
    var theme = localStorage.getItem('theme');
    // Default to light theme if no preference is saved
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    window.__initialTheme = theme === 'dark' ? 'dark' : 'light';
  })();
</script>
```

### Find and remove this line (around line 32-33):
```html
<!-- Preload Christmas wreath image for faster display -->
<link rel="preload" href="/images/christmas/wreath-centered.png" as="image">
```

---

## Step 5: Rebuild the Site

```bash
bundle exec jekyll build

# Or for local preview:
bundle exec jekyll serve
```

---

## Optional: Clean Up Files

These files can be safely removed after switching to the original theme, but it's recommended to keep them in `_christmas_theme_backup/` for next year:

| File | Location | Can Remove? |
|------|----------|-------------|
| `_christmas.scss` | `_sass/` | Yes (commented out in main.scss) |
| `_christmas_light.scss` | `_sass/theme/` | Yes (not imported) |
| `_christmas_dark.scss` | `_sass/theme/` | Yes (not imported) |
| `christmas-snow.html` | `_includes/` | Yes (not included) |
| `christmas/` | `images/` | Yes (not referenced) |

**Note:** The `author-profile.html` and `publications.html` files contain responsive mobile improvements that are useful year-round. Do NOT revert these files.

---

## Theme Color Reference

### Original Light Theme (Warm Cream)
| Element | Color | Description |
|---------|-------|-------------|
| Background | `#FDF6E3` | Warm cream |
| Footer BG | `#F5EFDC` | Slightly darker cream |
| Border | `#E8DFC7` | Soft cream border |
| Link | `#2A9D8F` | Teal green |
| Link Hover | `#1F7A6E` | Darker teal |
| Text | `#494540` | Dark gray |

### Original Dark Theme
| Element | Color | Description |
|---------|-------|-------------|
| Background | `#252525` | Dark gray |
| Link | `#52adc8` | Light blue |
| Text | `#f0f0f0` | Off-white |

---

## Verification Checklist

After making changes, verify:

- [ ] No snowflakes falling on the page
- [ ] No candy cane borders on header/footer
- [ ] No Santa sleigh animation
- [ ] No wreath around profile photo
- [ ] Light theme is default (warm cream background)
- [ ] Theme toggle still works (light/dark switch)
- [ ] Mobile responsive buttons still work
- [ ] Publications page still responsive

---

## Reverting Back to Christmas Theme

To re-enable the Christmas theme next year, follow the instructions in:
`_christmas_theme_backup/CHRISTMAS_THEME_GUIDE.md`

---

*Created: December 27, 2024*
