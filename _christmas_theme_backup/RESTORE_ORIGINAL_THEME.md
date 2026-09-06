# Restore the original theme

Superseded. Switching themes no longer means editing several files by hand:

```yaml
# _config.yml
christmas_theme          : false   # Warm Cream, light by default
christmas_theme          : true    # Christmas, dark by default
```

Restart `jekyll serve` afterwards, because Jekyll does not reload `_config.yml`
on its own.

See [CHRISTMAS_THEME_GUIDE.md](CHRISTMAS_THEME_GUIDE.md) for what the flag
covers and which two year-round fixes were deliberately moved out of the
Christmas files.
