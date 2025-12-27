# Christmas Theme Guide

This document provides detailed instructions for switching between the normal website theme and the Christmas theme.

## Backup Location

All Christmas theme files are backed up in: `_christmas_theme_backup/`

## Files Modified for Christmas Theme

### Core Files

| File | Location | Description |
|------|----------|-------------|
| `_christmas.scss` | `_sass/` | Main Christmas decorations (borders, wreath, Santa sleigh, snowflakes, layout adjustments) |
| `_christmas_light.scss` | `_sass/theme/` | Christmas light theme colors and variables |
| `_christmas_dark.scss` | `_sass/theme/` | Christmas dark theme colors and variables |
| `christmas-snow.html` | `_includes/` | JavaScript snowfall effect |
| `masthead.html` | `_includes/` | Modified to include Santa sleigh animation elements |
| `default.html` | `_layouts/` | Modified to include snow effect and Christmas border classes |
| `main.scss` | `assets/css/` | Modified to import Christmas theme files |

### Image Assets

Location: `images/christmas/`

| File | Description |
|------|-------------|
| `santa-sleigh.png` | Original Santa sleigh image |
| `santa-sleigh-rotated-10.png` | Santa sleigh rotated 10 degrees (currently used) |
| `santa-sleigh-rotated-12.png` | Santa sleigh rotated 12 degrees |
| `santa-sleigh-rotated.png` | Santa sleigh rotated 15 degrees |
| `wreath.png` | Original Christmas wreath (not centered) |
| `wreath-centered.png` | Christmas wreath cropped and centered (currently used) |
| `pine-garland-border.png` | Pine garland border (alternative, not currently used) |

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

### Step 4: (Optional) Remove Christmas Files

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

### Step 5: Rebuild Site

```bash
bundle exec jekyll build
# or for local preview:
bundle exec jekyll serve
```

---

## Christmas Theme Features

### Visual Elements
- **Candy Cane Border**: Red/white/green striped border on header and footer (6px height)
- **Snowfall Effect**: 60 animated snowflakes falling across the page
- **Santa Sleigh**: Animated Santa sleigh flying across the header (29s animation cycle)
- **Christmas Wreath**: Responsive wreath around profile picture (154% of image size, offset: right 5px, up 22px)
- **Warm Color Scheme**: Cream-toned background with Christmas red/green accents

### Theme Colors

**Light Theme:**
- Background: `#FDF8F5` (warm cream)
- Footer: `#F5EDE8`
- Links: `#B22234` (Christmas dark red)

**Dark Theme:**
- Background: `#1A1A1A`
- Footer: `#141414`
- Links: `#FF6B6B` (bright red)

### Layout Adjustments
- Masthead height: 85px (increased from 70px)
- Extra bottom padding in masthead: 15px
- Sidebar top padding: 105px
- Profile picture margin-left: 10px
- Profile picture margin-bottom: 55px

---

## Troubleshooting

### White bar at bottom of page
The Christmas theme sets `html { background-color: var(--global-footer-bg-color); }` to prevent this. If you see a white bar after switching themes, ensure this rule is present or the footer background matches.

### Santa sleigh not visible
Check that:
1. `santa-sleigh` div exists in masthead.html
2. Image path `/images/christmas/santa-sleigh-rotated-10.png` is correct
3. `_christmas.scss` is imported in main.scss

### Wreath not showing
Check that:
1. Image path `/images/christmas/wreath-centered.png` is correct
2. `.author__avatar::after` styles are in `_christmas.scss`
3. The wreath only appears on screens >= 925px width

---

Last updated: December 2025
