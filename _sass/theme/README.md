# Themes

This folder holds the colour palettes. A theme is a pair of partials: a light one
defining the `:root` custom properties and a dark one defining them again under
`html[data-theme="dark"]`. Both halves compile together, so the toggle in the
masthead switches between them without a reload.

| Files | Used when |
|---|---|
| `_default_light.scss`, `_default_dark.scss` | `christmas_theme: false`, the current state. The light half is Limestone + Clay. |
| `_christmas_light.scss`, `_christmas_dark.scss` | `christmas_theme: true` |
| `light-candidates/*.scss` | picked by `light_palette:`. Alternate light grounds only, ignored while a seasonal theme is on. See [light-candidates/README.md](light-candidates/README.md). |

Palettes are only half of a seasonal theme. The decorations live outside this
folder: `_sass/_christmas.scss` holds the candy-cane borders, snowfall, sleighs
and wreath, with their images in `images/christmas/`. What the flag covers is
documented in
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

## Only one seasonal theme at a time

Worth knowing before planning any of the above: `christmas_theme` in
[`_config.yml`](../../_config.yml) is a boolean, not a name. Every gate reads
`{% if site.christmas_theme %}` and chooses between Christmas and the default, so
the repo can express exactly one seasonal theme, on or off. There is no theme
registry and nothing switches by date. Flipping the look is manual: one line in
`_config.yml`, plus a `jekyll serve` restart locally, because Jekyll does not
reload `_config.yml` on its own.

Two ways forward, neither of them built yet:

- **Reuse the flag.** Replace the Christmas palettes, decoration partial and
  images with the new month's, keeping the same file names. Cheapest, but only
  one seasonal theme survives in the repo at a time.
- **Give the flag a name.** `light_palette` already does this:
  `assets/css/main.scss` carries YAML front matter, so Liquid runs before Sass
  and a config value can be interpolated straight into an import path
  (`@import "theme/light-candidates/{{ site.light_palette }}";`). A
  `seasonal_theme: qixi` could select `theme/qixi_light`, `theme/qixi_dark` and a
  matching decorations partial the same way. The `{% if %}` gates in the layout
  and includes below would each need to compare against a name instead of testing
  a boolean. Larger change, and the one that makes a twelve-month rotation
  practical.

## What a month's theme has to supply

The Christmas theme is the worked example: five places read the flag, and a new
theme has to answer for each of them.

| Where | What it decides |
|---|---|
| `_sass/theme/` | the palette pair, `:root` and `html[data-theme="dark"]` |
| `_sass/_christmas.scss` | decorations: borders, animations, `body` background |
| `images/christmas/` | image assets the decorations reference |
| `assets/css/main.scss` | which palette pair compiles, and whether the decorations partial is imported at all |
| `_layouts/default.html` | the default `data-theme`, the decoration include, the footer border class |
| `_includes/masthead.html` | the masthead border class and any masthead animation |
| `_includes/head.html` | the first-visit fallback scheme and image preloads |

Two traps for whoever writes the next decorations partial:

- Some rules that started in `_sass/_christmas.scss` are needed all year and were
  moved upstream on purpose (`html { background: none }` in `_sass/_reset.scss`,
  the dark-mode GitHub icon colour in `_sass/_utilities.scss`). Do not pull them
  back into a seasonal file. The guide linked above explains why each one matters.
- The decorations partial owns `body`'s `background-image`, and `<html>` is left
  bare so that background reaches the canvas. A new theme's background belongs in
  the same place, not on `<html>`.
