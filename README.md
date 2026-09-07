# lucas-hc-hsu.github.io

Personal academic site for Hung-Chun Hsu (Lucas), served by GitHub Pages from
the `master` branch: <https://lucas-hc-hsu.github.io>

Forked from [Academic Pages](https://github.com/academicpages/academicpages.github.io),
itself a fork of the [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)
Jekyll theme, and since diverged: the light palette, the masthead layout, the
sidebar behaviour and the seasonal artwork are all local.

## Content

| Where | What |
|---|---|
| `_pages/about.md` | the home page, including the News list |
| `_publications/` | one file per paper; drives both `/publications/` and the CV page |
| `_talks/` | one file per talk |
| `_pages/cv.md` | the CV page (the downloadable PDF is `files/Lucas_Hsu_Resume.pdf` and is maintained separately) |
| `_data/navigation.yml` | the masthead menu |

## Theme

`_config.yml` carries the switches:

- `default_theme` — the colour scheme a first-time visitor gets, `dark` or `light`.
- `christmas_theme` — the seasonal palette and decorations. Everything it needs
  stays in the repo either way, so this is the only line to flip.
- `light_palette` — swaps in one of the alternates in `_sass/theme/light-candidates/`.

`_sass/theme/README.md` has the twelve-month seasonal plan.

**Jekyll does not reload `_config.yml`. Restart the server after changing it.**

## Building locally

```bash
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

`assets/js/main.min.js` is committed. `package.json` can rebuild it, but it has
been maintained by hand alongside `assets/js/_main.js` and
`assets/js/plugins/jquery.greedy-navigation.js`; keep the two in step.
