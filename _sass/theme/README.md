# Themes

This folder holds the colour palettes. A theme is a pair of partials: a light one
defining the `:root` custom properties and a dark one defining them again under
`html[data-theme="dark"]`. Both halves compile together, so the toggle in the
masthead switches between them without a reload.

| Files | Used when |
|---|---|
| `_default_light.scss`, `_default_dark.scss` | every `seasonal_theme` except `christmas`. The light half is Limestone + Clay. A seasonal theme with its own palette (`halloween`) compiles `_sass/seasonal/<name>/_palette.scss` on top of these. |
| `_christmas_light.scss`, `_christmas_dark.scss` | `seasonal_theme: christmas` |
| `light-candidates/*.scss` | picked by `light_palette:`. Alternate light grounds only, ignored while a seasonal theme is on. See [light-candidates/README.md](light-candidates/README.md). |

Palettes are only half of a seasonal theme. The decorations live outside this
folder. The newer themes keep theirs under `_sass/seasonal/<name>/` and
`_includes/seasonal/<name>/` (see "Adding a month" below). Christmas predates
that layout: `_sass/_christmas.scss` holds the candy-cane borders, snowfall,
sleighs and wreath, with their images in `images/christmas/`, and what it covers
is documented in
[`_christmas_theme_backup/CHRISTMAS_THEME_GUIDE.md`](../../_christmas_theme_backup/CHRISTMAS_THEME_GUIDE.md).

## The seasonal plan

One look per month for the coming year:

| Month | Theme |
|---|---|
| January | New Year (新年) |
| February | Lunar New Year (農曆新年) |
| March | St. Patrick's Day (聖派翠克節) |
| April | Easter (復活節) |
| May | Dragon Boat Festival (端午節) |
| June | Summer surfing (夏日衝浪) |
| July | Summer surfing (夏日衝浪) |
| August | Qixi Festival (七夕) |
| September | Mid-Autumn Festival (中秋節) |
| October | Halloween (萬聖節) |
| November | Thanksgiving (感恩節) |
| December | Christmas (聖誕節) |

June and July share a theme on purpose.

Lunar New Year, Dragon Boat, Qixi and Mid-Autumn are set by the lunar calendar,
so their Gregorian dates move by weeks from year to year and can cross a month
boundary. The months above are where they usually fall, not fixed dates. Check
the actual date for the year before scheduling a switch.

## Switching themes

`seasonal_theme` in [`_config.yml`](../../_config.yml) names the theme:
`halloween`, `mid-autumn`, `christmas`, or blank for none. Only one is on at a
time, and nothing switches by date: changing the look is that one line, plus a
`jekyll serve` restart locally, because Jekyll does not reload `_config.yml` on
its own.

`assets/css/main.scss` carries YAML front matter, so Liquid runs before Sass and
the name is interpolated straight into the import paths, the way
`light_palette` already was. The templates read the theme's entry in
[`_data/seasonal.yml`](../../_data/seasonal.yml), which lists the slots it fills
(see `_includes/seasonal_theme`). Christmas still has its own `{% if
site.seasonal_theme == 'christmas' %}` gates, because its files predate the
slots.

## Adding a month

A theme is a folder pair and an entry in `_data/seasonal.yml`:

| Slot (`_data/seasonal.yml`) | File | Drawn where |
|---|---|---|
| `palette` | `_sass/seasonal/<name>/_palette.scss` | custom properties for `:root` and `html[data-theme="dark"]`, compiled after the default pair |
| `decorations` | `_sass/seasonal/<name>/_decorations.scss` | every other rule of the theme, imported last in `main.scss` |
| `title_mark` | `_includes/seasonal/<name>/title-mark.html` | beside the site name below `$doodle-band-min-width`; carries `.seasonal-mark` |
| `doodle_band` | `_includes/seasonal/<name>/doodle-band.html` | the strip between the name and the first menu link from that width up |
| `ambient` | `_includes/seasonal/<name>/ambient.html` | right after `<body>` |
| `profile_photo_frame` | `_includes/seasonal/<name>/profile-photo-frame.html` | inside `.author__avatar`, after the photo |
| `toggle_icon` | `_includes/seasonal/<name>/toggle-icon.html` | inside `#theme-icon`, replacing the sun and moon |
| `greeting` | | tooltip on the site name |
| `theme_color` | | the mobile browser bar on first paint; keep it equal to the palette's `--global-bg-color` |

The shared geometry of those slots (the band's box, hiding the compact mark from
the band's width up, switching off the Font Awesome glyph under a drawn toggle)
is in `_sass/_seasonal.scss`. A theme without a title mark still gets an empty
box of the mark's size there, because the masthead's heights and the widths at
which the menu folds were tuned with the mark in place.

Two rules learned building `halloween`:

- An include that lands inside the site-name link or the toggle icon must emit no
  whitespace outside its markup. A newline there renders as a space and shifts
  the whole menu by 4px. Put the header in a Liquid `{% comment %}` with nothing
  after `{% endcomment %}` but the markup.
- Give every outermost `<svg>` in an include `width` and `height` attributes, and
  size it in CSS wherever it shows. CSS wins over the attributes, so they only
  matter when the stylesheet is missing; `0` for decoration, a small real size
  for anything a visitor has to click. Without them an unstyled SVG renders as
  a large black shape.
- Prefix every class, keyframe and SVG id with the theme's name. The parts of
  `halloween` came from different candidate designs and share one page.

Two traps for whoever writes the next decorations partial:

- Some rules that started in `_sass/_christmas.scss` are needed all year and were
  moved upstream on purpose (`html { background: none }` in `_sass/_reset.scss`,
  the dark-mode GitHub icon colour in `_sass/_utilities.scss`). Do not pull them
  back into a seasonal file. The guide linked above explains why each one matters.
- The decorations partial owns `body`'s `background-image`, and `<html>` is left
  bare so that background reaches the canvas. A new theme's background belongs in
  the same place, not on `<html>`.
