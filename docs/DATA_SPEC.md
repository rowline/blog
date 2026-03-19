# Blog Data Specification (DATA_SPEC)

## Overview
This document defines the schema and guidelines for how data is structured and componentized within the blog. The blog uses a data-driven approach where dynamic UI elements are populated from central JSON/TOML configuration files rather than hardcoding in the templates.

## Global Data Configurations (`data/` Directory)

Global data is configured in JSON files under the `data/` directory.

### `sharing.json`
Defines available social media sharing links.
**Schema**:
```json
{
  "network-name": {
    "icon": "icon-id-from-assets",
    "title": "i18n.translation.key",
    "url": "https://url.com/share?url=%s&title=%s"
  }
}
```

### Extending Data Components
When creating new UI widgets (e.g., Features list, Pricing table), avoid hardcoding arrays in HTML. Create a new `data/widget_name.json` schema and iterate over it in the `layouts/partials/components/widget.html`.

## Content Front Matter
Markdown content inside `content/` follows structured TOML/YAML.

**Required Fields for Blog Posts:**
```yaml
---
title: "Article Title"
date: 2026-03-18
description: "A short summary of the article."
tags: ["tech", "component"]
categories: ["Development"]
series: ["Architecture Series"]
---
```

**Optional UI Directives in Front Matter:**
- `showHero`: (Boolean) Enable hero image for the article.
- `showTableOfContents`: (Boolean) Enable TOC side navigation.
- `layoutBackgroundBlur`: (Boolean) Apply blur effect to background.

## Componentization Rule
All lists of items (links, profiles, projects, stats) **MUST** be extracted into a `data/*.json` or configured within the specific page's Front Matter if they are page-specific. No raw HTML repeated structures in partials.
