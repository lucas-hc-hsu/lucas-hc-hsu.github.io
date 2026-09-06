# Christmas theme

The Christmas theme is not removed from the site, only switched off. Everything
it needs still lives in its normal place in the repo; one flag in `_config.yml`
decides whether it is compiled and rendered.

It is also December in a twelve-month seasonal plan. See
[`_sass/theme/README.md`](../_sass/theme/README.md) for the other eleven months,
for what a new month's theme has to supply, and for why only one seasonal theme
can be switched on at a time.

## Turning it on and off

```yaml
# _config.yml
christmas_theme          : true    # or false
```

Jekyll does not reload `_config.yml` by itself, so restart `jekyll serve` after
changing it.

| | `true` | `false` |
|---|---|---|
| Palette | `_sass/theme/_christmas_{light,dark}.scss` | `_sass/theme/_default_{light,dark}.scss` (Limestone + Clay) |
| Default colour scheme | dark | light |
| Candy-cane borders | on masthead and footer | none |
| Snowfall | 40 flakes | none |
| Santa sleighs | two, animated across the masthead | none |
| Wreath around the profile photo | yes (925px and up) | none |
| Wreath image preload | in `<head>` | omitted |

## Where the flag is read

- `assets/css/main.scss` picks the theme partials and decides whether to
  `@import "christmas"` (the file has YAML front matter, so Liquid runs before
  Sass).
- `_layouts/default.html` sets `<html data-theme>`, includes the snowfall, and
  adds `christmas-border-bottom` to the footer.
- `_includes/masthead.html` adds `christmas-border-top` and the sleighs.
- `_includes/head.html` picks the fallback colour scheme and the wreath preload.

With the flag off, none of the Christmas CSS or markup reaches the built site:
`_site/assets/css/main.css` contains no Christmas rules, and the pages carry no
Christmas classes or elements.

## Two things that are deliberately not in the Christmas files

Both used to live in `_sass/_christmas.scss` but are needed all year, so they
were moved upstream and are no longer tied to the flag:

- `html { background: none }` is now in `_sass/_reset.scss`. Without it, `<html>`
  paints the strip above the footer (the sticky-footer JS puts that strip outside
  `<body>`) in a colour that does not match the page.
- The dark-mode GitHub icon colour is now in `_sass/_utilities.scss`.
  `$github-color` is `#171516`, which is invisible on a dark background.

## What is in this folder

A snapshot taken on 2024-12-27, kept only as a reference for how the theme was
first wired up. **It is not the live theme and is out of date** — several of
these files have since diverged from the versions the site actually uses. Always
work from the files in `_sass/`, `_includes/` and `_layouts/`.

Also here: the Christmas images, which live for real in `images/christmas/`.
