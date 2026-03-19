---
description: How to draft and publish a new standard blog post.
---

# Workflow: Publish New Post

1. **Generate Scaffold**
   Use standard Hugo command or terminal to scaffold the Markdown file:
   `hugo new posts/<year>-<slug>.md`

2. **Fill Front Matter**
   Use `docs/DATA_SPEC.md` to populate required YAML/TOML keys:
   - title
   - date
   - description
   - tags
   - categories

3. **Write Content Using Shortcodes**
   Review `docs/UI_SPEC.md` to enrich text with visual blocks instead of standard boring headers.
   - Example: Add `{{< alert >}}` for emphasis notes.
   - Example: Use `{{< carousel >}}` to present groups of screenshots.

4. **Add Hero Media (Optional)**
   Include a high quality image under the article folder, and update front matter with:
   ```yaml
   showHero: true
   hero: "hero-image.jpg"
   ```

5. **Validate Output**
   Always check that front matter does not introduce any TOML/YAML parsing issues. Ensure shortcodes are matching properly `{{< block >}} ... {{< /block >}}`.
