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
- `seasonal_theme` — the seasonal look by name: `halloween`, `mid-autumn`,
  `christmas`, or blank for none. Every theme stays in the repo, so this is the
  only line to change; `_data/seasonal.yml` lists what each one switches on.
- `light_palette` — swaps in one of the alternates in `_sass/theme/light-candidates/`.

`_sass/theme/README.md` has the twelve-month seasonal plan.

**Jekyll does not reload `_config.yml`. Restart the server after changing it.**

## Keeping it light on slow connections

The site is meant to read well on a slow mobile connection, so heavy media loads
only when a reader reaches it or asks for it.

- **Paper figures.** A publication's front matter gives `image`, a still in
  `images/` (WebP, about twice the size it is shown at). An animated figure adds
  `image_video` (an MP4) plus `image_width` and `image_height`; `image` is then
  the video's poster, normally its last frame. `_includes/paper-figure.html`
  renders it, and the video downloads only when it scrolls into view, and never
  on its own under Save-Data, a 2G connection or reduced motion, where it waits
  for the play button. Encode from the source animation, not from a GIF:

  ```bash
  ffmpeg -i source.mp4 -an -vf "scale=1280:-2:flags=lanczos,fps=30" \
    -c:v libx264 -preset veryslow -tune animation -crf 26 -pix_fmt yuv420p \
    -movflags +faststart images/pub-name.mp4
  ```

- **Talk slides.** A talk with `slides_embed` shows the image in `slides_cover`
  (its first slide, WebP) and loads the embedded deck only on click.
- **Icons.** The Font Awesome and Academicons fonts, and Font Awesome's CSS, are
  cut down to the icons in use. After adding an icon anywhere, build, then run
  `python3 _icon_fonts_full/subset_icon_fonts.py` and build again, or the new
  icon renders as nothing.
- **Math.** MathJax loads only on a page with `mathjax: true` in its front matter.

## Building locally

```bash
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

`assets/js/main.min.js` is committed. `package.json` can rebuild it, but it has
been maintained by hand alongside `assets/js/_main.js` and
`assets/js/plugins/jquery.greedy-navigation.js`; keep the two in step.
