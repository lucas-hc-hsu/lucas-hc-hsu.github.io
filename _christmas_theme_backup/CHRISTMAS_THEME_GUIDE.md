# Christmas Theme Guide

This document provides detailed instructions for switching between the normal website theme and the Christmas theme.

## Backup Location

All Christmas theme files are backed up in: `_christmas_theme_backup/`

---

## Current Design Settings (December 2024)

### Christmas Wreath
| Setting | Value |
|---------|-------|
| Size | 160% of profile photo |
| Position offset | translate(-1px, 2px) |
| Image | `/images/christmas/wreath-centered.png` (461KB, optimized) |
| Visibility | Screens >= 925px only |

### Candy Cane Border
| Setting | Value |
|---------|-------|
| Height | 6px |
| Z-index | 5 (allows dropdown menu above) |
| Pattern | 45-degree red-white-green-white stripes |

### Santa Sleigh
| Setting | Value |
|---------|-------|
| Animation duration | 29 seconds |
| Image | `/images/christmas/santa-sleigh-rotated-10.png` |

### Snowfall
| Setting | Value |
|---------|-------|
| Implementation | Pure CSS (40 snowflakes) |
| Snowflake sizes | 3-6px |
| Animation duration | 11-19 seconds |

---

## Responsive Layout Settings

### Large Screens (>= 1024px)
```scss
.sidebar {
    padding-top: 140px !important;
}
.author__avatar {
    margin-bottom: 60px;
    margin-left: 30px;
}
```

### Medium Screens (925px - 1023px)
```scss
#main {
    margin-top: 2em !important;
}
```

### Small Screens (< 925px)
```scss
.masthead__inner-wrap {
    padding-bottom: 0.5em !important;
}
.sidebar {
    margin-top: 20px !important;
    padding-top: 0 !important;
}
.author__avatar {
    margin-top: 0 !important;
}
```

### Mobile Screens (< 600px)
- Bio text (`.author__bio`) is hidden
- Contact buttons use `.author__contact-buttons-mobile`
- Buttons are smaller and centered below name

### Publications Page (< 768px)
- Layout: vertical (image above title)
- Image: centered, max-width 360px
- Text: word-wrap enabled

---

## Files Modified for Christmas Theme

### Core Files

| File | Location | Description |
|------|----------|-------------|
| `_christmas.scss` | `_sass/` | Main Christmas decorations (borders, wreath, Santa sleigh, snowflakes, layout adjustments) |
| `_christmas_light.scss` | `_sass/theme/` | Christmas light theme colors and variables |
| `_christmas_dark.scss` | `_sass/theme/` | Christmas dark theme colors and variables |
| `christmas-snow.html` | `_includes/` | Pure CSS snowfall effect (40 snowflakes) |
| `masthead.html` | `_includes/` | Modified to include Santa sleigh animation elements |
| `head.html` | `_includes/` | Modified to set default theme to dark + wreath preload |
| `author-profile.html` | `_includes/` | Responsive contact buttons for mobile |
| `default.html` | `_layouts/` | Modified to include snow effect and Christmas border classes |
| `main.scss` | `assets/css/` | Modified to import Christmas theme files |
| `publications.html` | `_pages/` | Responsive layout for mobile |

### Image Assets

Location: `images/christmas/`

| File | Size | Description |
|------|------|-------------|
| `wreath-centered.png` | 461 KB | Optimized wreath (600x600) - currently used |
| `wreath-centered-original.png` | 8.6 MB | Original wreath (backup) |
| `santa-sleigh-rotated-10.png` | 50 KB | Santa sleigh (currently used) |
| `santa-sleigh.png` | 30 KB | Original Santa sleigh |

---

## Switch FROM Christmas TO Normal Theme

### Step 1: Restore Theme Files in `main.scss`

Edit `assets/css/main.scss` and change:

```scss
// FROM (Christmas):
@import "theme/christmas_light";  // Christmas Light Theme
@import "theme/christmas_dark";   // Christmas Dark Theme
...
@import "christmas";  // Christmas decorations

// TO (Normal):
@import "theme/default_light";  // Default Light Theme
@import "theme/default_dark";   // Default Dark Theme
...
// @import "christmas";  // Comment out or remove
```

### Step 2: Restore `default.html` Layout

Edit `_layouts/default.html`:

```html
<!-- FROM (Christmas): -->
<body>
    {% include christmas-snow.html %}
    {% include browser-upgrade.html %}
    {% include masthead.html %}
    {{ content }}
    <div class="page__footer christmas-border-bottom">
    ...

<!-- TO (Normal): -->
<body>
    {% include browser-upgrade.html %}
    {% include masthead.html %}
    {{ content }}
    <div class="page__footer">
    ...
```

Changes:
1. Remove `{% include christmas-snow.html %}`
2. Remove `christmas-border-bottom` class from `.page__footer`

### Step 3: Restore `masthead.html`

Edit `_includes/masthead.html`:

```html
<!-- FROM (Christmas): -->
<div class="masthead christmas-border-top">
  <!-- Santa Sleigh Animation -->
  <div class="santa-sleigh" aria-hidden="true"></div>
  <div class="santa-sleigh-reverse" aria-hidden="true"></div>
  ...

<!-- TO (Normal): -->
<div class="masthead">
  ...
```

Changes:
1. Remove `christmas-border-top` class from `.masthead`
2. Remove Santa sleigh `<div>` elements

### Step 4: Restore Default Theme to Light in `head.html`

Edit `_includes/head.html` and change:

```javascript
// FROM (Christmas - dark default):
if (theme !== 'light') {
  document.documentElement.setAttribute('data-theme', 'dark');
}
window.__initialTheme = theme === 'light' ? 'light' : 'dark';

// TO (Normal - light default):
if (theme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
}
window.__initialTheme = theme === 'dark' ? 'dark' : 'light';
```

Also remove the wreath preload line:
```html
<!-- Remove this line: -->
<link rel="preload" href="/images/christmas/wreath-centered.png" as="image">
```

### Step 5: Restore `author-profile.html`

Remove the `.author__contact-buttons-mobile` div and its associated CSS if not needed.

### Step 6: (Optional) Remove Christmas Files

You can optionally remove or keep the following files:
- `_sass/_christmas.scss`
- `_sass/theme/_christmas_light.scss`
- `_sass/theme/_christmas_dark.scss`
- `_includes/christmas-snow.html`
- `images/christmas/` folder

---

## Switch FROM Normal TO Christmas Theme

### Step 1: Copy Christmas Files (if removed)

If files were removed, copy them back from `_christmas_theme_backup/`:

```bash
# Copy SCSS files
cp _christmas_theme_backup/_christmas.scss _sass/
cp _christmas_theme_backup/_christmas_light.scss _sass/theme/
cp _christmas_theme_backup/_christmas_dark.scss _sass/theme/

# Copy includes
cp _christmas_theme_backup/christmas-snow.html _includes/
cp _christmas_theme_backup/author-profile.html _includes/
cp _christmas_theme_backup/head.html _includes/
cp _christmas_theme_backup/masthead.html _includes/

# Copy pages
cp _christmas_theme_backup/publications.html _pages/

# Copy images
cp -r _christmas_theme_backup/christmas images/
```

### Step 2: Update Theme Files in `main.scss`

Edit `assets/css/main.scss`:

```scss
// Change theme imports:
@import "theme/christmas_light";  // Christmas Light Theme
@import "theme/christmas_dark";   // Christmas Dark Theme

// Add Christmas decorations import (after "animations"):
@import "christmas";  // Christmas decorations
```

### Step 3: Update `default.html` Layout

Edit `_layouts/default.html`:

```html
<body>
    {% include christmas-snow.html %}
    {% include browser-upgrade.html %}
    {% include masthead.html %}
    {{ content }}
    <div class="page__footer christmas-border-bottom">
```

### Step 4: Update `masthead.html`

Edit `_includes/masthead.html`:

```html
<div class="masthead christmas-border-top">
  <!-- Santa Sleigh Animation -->
  <div class="santa-sleigh" aria-hidden="true"></div>
  <div class="santa-sleigh-reverse" aria-hidden="true"></div>
  <div class="masthead__inner-wrap">
  ...
```

### Step 5: Set Default Theme to Dark in `head.html`

Edit `_includes/head.html` and change:

```javascript
// FROM (Normal - light default):
if (theme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
}
window.__initialTheme = theme === 'dark' ? 'dark' : 'light';

// TO (Christmas - dark default):
if (theme !== 'light') {
  document.documentElement.setAttribute('data-theme', 'dark');
}
window.__initialTheme = theme === 'light' ? 'light' : 'dark';
```

Also add wreath preload:
```html
<!-- Preload Christmas wreath image for faster display -->
<link rel="preload" href="/images/christmas/wreath-centered.png" as="image">
```

### Step 6: Rebuild Site

```bash
bundle exec jekyll build
# or for local preview:
bundle exec jekyll serve
```

---

## Backup Files Included

| File | Description |
|------|-------------|
| `_christmas.scss` | Main Christmas decorations CSS |
| `_christmas_dark.scss` | Dark theme variables |
| `_christmas_light.scss` | Light theme variables |
| `christmas-snow.html` | Snowfall component (40 snowflakes) |
| `head.html` | Head with theme detection and preload |
| `masthead.html` | Header with candy cane border and Santa |
| `author-profile.html` | Profile with responsive mobile buttons |
| `publications.html` | Publications page with responsive layout |
| `default.html` | Default layout with snow and border classes |
| `main.scss` | CSS imports |
| `christmas/` | Image assets folder |

---

## Troubleshooting

### White bar at bottom of page
The Christmas theme sets `html { background-color: var(--global-footer-bg-color); }` to prevent this.

### Dropdown menu hidden behind candy cane border
The z-index of candy cane borders is set to 5 to allow dropdown menus to appear above.

### Wreath not showing
- Only visible on screens >= 925px
- Check image path `/images/christmas/wreath-centered.png`
- Ensure `_christmas.scss` is imported

### Wreath loading slowly
- Image is optimized to 461KB
- Preload link should be in head.html

### Mobile layout issues
- Contact buttons use `.author__contact-buttons-mobile` on screens < 600px
- Publications use vertical layout on screens < 768px

---

*Last updated: December 27, 2024*
