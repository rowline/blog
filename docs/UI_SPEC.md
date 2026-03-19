# Blog UI Specification (UI_SPEC)

## Overview
This document outlines the UI componentization strategy for the blog, defining the design tokens, typography, and reusable UI modules (shortcodes and partials).

## Design System & Tokens
The blog uses **Tailwind CSS (`tailwind.config.js`)** as the primary source of truth for design tokens.

### Colors
Theme colors are aliased in Tailwind and mapped to dynamic variables for Dark/Light mode support.
- `neutral`: Scale 50-900 (Used for text and backgrounds)
- `primary`: Scale 50-900 (Main brand color, interactive elements)
- `secondary`: Scale 50-900 (Code blocks, secondary accents, badges)

### Typography
Managed by `@tailwindcss/typography`.
- Uses `--tw-prose-*` variables customized in Tailwind config.
- Automatically handles dark mode via the `invert` class modifier.
- Links highlight via `primary`, inline `code` blocks use `secondary`.

## Markdown Components (Shortcodes)
Content creators have access to reusable UI blocks within Markdown:

| Component | Description | Usage Example |
|---|---|---|
| `{{< alert >}}` | Callout box (warn, info, success) | `{{< alert icon="fire" >}} Text {{< /alert >}}` |
| `{{< badge >}}` | Inline small tag | `{{< badge >}}New{{< /badge >}}` |
| `{{< button >}}` | Clickable CTA link | `{{< button href="/url" >}}Click{{< /button >}}` |
| `{{< carousel >}}` | Image slider gallery | `{{< carousel images="img1,img2" >}}` |
| `{{< chart >}}` | Data visualization | `{{< chart >}} ...json... {{< /chart >}}` |
| `{{< gallery >}}` | Image grid | `{{< gallery >}} ...images... {{< /gallery >}}` |
| `{{< icon >}}` | Inline SVG from `assets/icons` | `{{< icon "github" >}}` |
| `{{< timeline >}}` | Vertical progress list | `{{< timeline >}} {{< timelineItem >}} ... {{< /timeline >}}` |
| `{{< typeit >}}` | Typewriter visual effect | `{{< typeit >}} Hello I'm typing {{< /typeit >}}` |
| `{{< youtubeLite >}}` | Lazy-loaded video | `{{< youtubeLite id="vid" >}}` |

## Layout Components (Partials)
When developing the theme structure, create components inside `layouts/partials/`.
- UI should be styled exclusively with Tailwind utility classes.
- Avoid custom CSS unless targeting complex component interactivity that Tailwind cannot express.
- If writing custom CSS, ensure it handles `dark` mode seamlessly using CSS variables (`--color-primary-X`).
