#!/usr/bin/env python3
"""Cut the icon fonts, and Font Awesome's CSS, down to the icons the built site uses.

The full Font Awesome solid and brands fonts are 156 KB and 118 KB as woff2, and
Academicons is a 66 KB ttf; the site uses about ten icons. This keeps the full
fonts here, in a folder Jekyll does not publish, and writes subsets into place:

    assets/webfonts/fa-solid-900.woff2, .ttf    assets/webfonts/fa-brands-400.woff2, .ttf
    assets/fonts/academicons.woff2
    _sass/_font-awesome-icons-in-use.scss   the ::before rule of each icon in use

Run it after `jekyll build` whenever a page gains an icon, then build again; until
then the new icon renders as nothing:

    python3 _icon_fonts_full/subset_icon_fonts.py

It reads every built page in _site/ plus assets/js/_main.js (the theme toggle
swaps fa-sun and fa-moon from there) for fa-* and ai-* class names, and maps
them to code points through Font Awesome's own Sass variables and
assets/css/academicons.css. Needs fontTools and brotli.
"""
import glob, os, re, sys
from fontTools import subset
from fontTools.ttLib import TTFont

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
SITE = os.path.join(REPO, '_site')


def read(path):
    return open(path, encoding='utf-8', errors='ignore').read()


def used_classes(prefix):
    sources = glob.glob(os.path.join(SITE, '**', '*.html'), recursive=True) + [os.path.join(REPO, 'assets/js/_main.js')]
    names = set()
    for f in sources:
        names.update(re.findall(r'\b' + prefix + r'-([a-z0-9-]+)', read(f)))
    return names


def fa_icons():
    """{class name: Sass variable} and {Sass variable: code point}, from the vendor's variables.

    Read from the Sass source rather than the compiled CSS, because the compiled
    CSS only carries the icons this script last let through."""
    scss = read(os.path.join(REPO, '_sass/vendor/font-awesome/_variables.scss'))
    points = {v: int(c, 16) for v, c in re.findall(r'^\$(fa-var-[a-z0-9-]+):\s*\\([0-9a-f]+);', scss, re.M)}
    names = dict(re.findall(r'^\s*"([a-z0-9-]+)":\s*\$(fa-var-[a-z0-9-]+),', scss, re.M))
    return names, points


def fa_code_points():
    names, points = fa_icons()
    used = sorted(n for n in used_classes('fa') if n in names)
    return sorted({points[names[n]] for n in used}), used


def ai_code_points():
    css = read(os.path.join(REPO, 'assets/css/academicons.css'))
    points, names = set(), []
    for n in used_classes('ai'):
        m = re.search(r'\.ai-' + re.escape(n) + r':before\s*\{\s*content:\s*"\\([0-9a-f]+)"', css)
        if m:
            points.add(int(m.group(1), 16)); names.append(n)
    return sorted(points), sorted(names)


def cut(source, unicodes, out, flavor=None):
    options = subset.Options()
    options.flavor = flavor
    options.layout_features = []     # icon fonts need no OpenType features
    options.hinting = False
    options.desubroutinize = True
    font = TTFont(source)
    subsetter = subset.Subsetter(options)
    subsetter.populate(unicodes=unicodes)
    subsetter.subset(font)
    font.flavor = flavor
    font.save(out)
    print(f'  {os.path.relpath(out, REPO):42s} {os.path.getsize(source) // 1024:4d} KB -> {os.path.getsize(out) / 1024:5.1f} KB')


if __name__ == '__main__':
    if not os.path.exists(os.path.join(SITE, 'assets/css/main.css')):
        sys.exit('Build the site first (jekyll build): the icon list comes from _site/.')
    fa, fa_names = fa_code_points()
    ai, ai_names = ai_code_points()
    print('Font Awesome icons in use:', ', '.join(fa_names))
    print('Academicons in use:', ', '.join(ai_names))
    for name in ('fa-solid-900', 'fa-brands-400'):
        src = os.path.join(HERE, name + '.ttf')
        cut(src, fa, os.path.join(REPO, 'assets/webfonts', name + '.woff2'), 'woff2')
        cut(src, fa, os.path.join(REPO, 'assets/webfonts', name + '.ttf'))
    cut(os.path.join(HERE, 'academicons.ttf'), ai, os.path.join(REPO, 'assets/fonts/academicons.woff2'), 'woff2')
    names, _ = fa_icons()
    rules = ''.join(f'  "{n}": ${names[n]},\n' for n in fa_names)
    out = os.path.join(REPO, '_sass/_font-awesome-icons-in-use.scss')
    open(out, 'w').write(
        '/* Written by _icon_fonts_full/subset_icon_fonts.py; do not edit by hand.\n'
        '   The ::before rule of each Font Awesome icon the site uses, in place of\n'
        '   the vendor\'s rule for every icon (_sass/vendor/font-awesome/_icons.scss). */\n\n'
        '$site-fa-icons: (\n' + rules + ');\n\n'
        '@each $name, $icon in $site-fa-icons {\n'
        '  .#{$fa-css-prefix}-#{$name}::before { content: unquote("\\"#{ $icon }\\""); }\n'
        '}\n')
    print(f'  {os.path.relpath(out, REPO):42s} {len(fa_names)} icon rules')
