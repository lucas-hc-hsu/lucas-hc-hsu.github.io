# Light palette candidates

The site's light theme is **Limestone + Clay**, defined in
`_sass/theme/_default_light.scss`. The files here are alternates that were
short-listed alongside it. Each one overrides only the `:root` custom
properties, so nothing else about the theme changes when you swap.

## Switching

```yaml
# _config.yml
light_palette            : flexoki    # or blank for Limestone + Clay
```

Valid values: `flexoki`, `vitesse`, `radix-sand`, `rose-pine-dawn`,
`warm-cream`. Blank (or absent) keeps the default. Jekyll does not reload
`_config.yml` on its own, so restart `jekyll serve` afterwards.

The dark theme is untouched by this setting, and so is the Christmas theme —
with `christmas_theme: true` the Christmas palette wins and `light_palette` is
ignored.

## The candidates

| Value | Palette | Background | Text | Link | Character |
|---|---|---|---|---|---|
| *(blank)* | **Limestone + Clay** | `#F4F1EC` | 12.50:1 | 6.55:1 | Unbleached limestone, warm near-black ink, one muted clay accent. Composed from the 2026 warm-minimalism brief rather than taken from an upstream theme. |
| `flexoki` | Flexoki (dimmed paper) | `#F2F0E5` | 13.04:1 | 5.72:1 | Steph Ango's ink-on-paper scheme. Uses base-50 as the ground and keeps the brighter paper white for cards. |
| `vitesse` | Vitesse Light Soft | `#F1F0E9` | 10.05:1 | 5.66:1 | Anthony Fu's editor theme. Sage-warm oatmeal with a deep forest-green accent. |
| `radix-sand` | Radix Sand + Teal | `#F1F0EF` | 14.32:1 | 4.74:1 | Radix's perceptually tuned 12-step scales. Warm neutral ground, one cool accent. |
| `rose-pine-dawn` | Rosé Pine Dawn | `#FAF4ED` | 6.66:1 | 5.59:1 | Low saturation, faintly rosy, muted purple-grey text. The softest of the set. |
| `warm-cream` | Warm Cream | `#FDF6E3` | 7.80:1 | 6.55:1 | The site's previous palette (Solarized base3). Bright at L\* 97, which is what prompted the change. |

Ratios are body text and links against the background. Everything here clears
WCAG AA; all but `rose-pine-dawn` clear AAA for body text.

Note `warm-cream`'s link ratio: its original `#2A9D8F` teal rendered at 3.08:1,
under AA, but it never actually reached content links. `_sass/_reset.scss` used
to hard-code `a { color: $link-color }`, and `$link-color` resolves from
`$info-color` before any theme partial loads, so every content link was stuck at
the stock `#52adc8` in both themes -- 2.38:1 on that background. That rule now
reads `var(--global-link-color)`, so the ratios above are what actually renders.

## What these files do not control

Only the CSS custom properties. The Sass-level colours in
`_sass/theme/_default_light.scss` (`$info-color`, `$gray` and friends) drive
button fills and notice accents, and are shared by every candidate. Change those
in `_default_light.scss` if a palette needs matching buttons.
