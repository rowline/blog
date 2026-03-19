---
description: How to design and integrate a new UI component into the Hugo blog.
---

# Workflow: Add New UI Component

1. **Analyze Design Request**
   Assess whether the requested component is for use inside blog content (needs a Markdown *shortcode*) or part of the outer website layout (needs a Hugo *partial*).

2. **Component Implementation**
   - For Content Component: Create `layouts/shortcodes/[name].html`.
   - For Layout Component: Create `layouts/partials/[name].html`.

3. **Styling and Theming**
   Draft the structure using Tailwind classes according to `docs/UI_SPEC.md`. Respect the `dark:` mode utility prefix for seamless appearance switching. Do not inject raw CSS files if standard utilities perform the task.

4. **Data Sourcing**
   - Use `docs/DATA_SPEC.md` to verify where data should come from.
   - If it renders global lists (e.g., trusted partners), add a schema array via a new JSON file in `data/[name].json`.
   - Iterate over the configuration via:
     `{{ range site.Data.name }}`.

5. **Test Component**
   - If run_command is available, run `npm run build` or `hugo server -D` to verify there are no compilation errors in the template.

6. **Update Docs**
   Append the usage example to `docs/UI_SPEC.md` so the team knows the component has been added to the library.
