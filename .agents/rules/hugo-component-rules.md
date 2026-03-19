---
description: Rules for Agentic AI working on this Hugo Blog project.
---

# Hugo Component Rules for AI Agents

You are working on a Hugo blog using the Blowfish theme architecture. Strictly follow these componentization rules:

## 1. Do Not Hardcode Data
- If you are asked to create a list of items (e.g., social links, external projects, related topics), DO NOT write repeated raw HTML.
- **Rule**: Map the data arrays into a central file in `data/`, or as YAML/TOML arrays in the `.md` front-matter. Configure the component to loop `{{ range site.Data.mydata }}` or `{{ range .Params.myarray }}`.

## 2. Use Existing Tailwind Utility Classes
- Design specifications are available in `docs/UI_SPEC.md`.
- **Rule**: Never create custom CSS (unless writing complex animations). Use Tailwind CSS utility classes exclusively (`@apply` within CSS, or atomic classes in HTML). Use `neutral-X` and `primary-X` and `secondary-X` color themes because they automatically map variables for light/dark mode compatibility.

## 3. Leverage Shortcodes
- Hugo `layouts/shortcodes/` has predefined UI components.
- **Rule**: If a user asks to add UI elements inside a blog post, insert a Shortcode (e.g., `{{< alert >}}`) rather than writing HTML directly into the Markdown content.

## 4. Partials for Global UI Components
- If you need to componentize a repeating UI block (e.g., an author card, a newsletter signup form) outside of content, build it in `layouts/partials/` and call it with `{{ partial "component_name.html" . }}`.
