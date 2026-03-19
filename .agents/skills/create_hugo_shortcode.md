---
name: Create Hugo Shortcode
description: Creates a new, reusable Hugo shortcode component using Tailwind CSS based on UI_SPEC.md.
---

# Instructions for Creating a Hugo Shortcode

1. **Identify the Component Requirements**
   Understand what the UI block should render and what parameters it accepts.
   *Example: An info box that accepts an `icon` and `color` parameter.*

2. **Create the HTML File**
   Create a new file in `/layouts/shortcodes/<component-name>.html`.

3. **Implement the Logic**
   Use standard Hugo templating to extract parameters via `{{ .Get "param_name" }}`. If the parameter is optional, use `{{ with }}` or `{{ default }}` logic.
   Write atomic HTML using Tailwind CSS variables from `docs/UI_SPEC.md` for consistent theming.

   ```html
   {{ $bgColor := .Get "color" | default "neutral-100" }}
   <div class="flex items-center p-4 rounded-md bg-{{ $bgColor }} dark:bg-opacity-20 text-neutral-800 dark:text-neutral-200">
     {{ with .Get "icon" }}
       <div class="mr-3">{{ partial "icon.html" . }}</div>
     {{ end }}
     <div>{{ .Inner | markdownify }}</div>
   </div>
   ```

4. **Verify CSS Variables**
   Ensure color variables match the `docs/UI_SPEC.md` schema (`neutral`, `primary`, `secondary`). Never hardcode hex values like `#FFFFFF` as they break the dark mode.

5. **Document the Shortcode**
   Update `docs/UI_SPEC.md` to add your newly created shortcode to the table of available components.
