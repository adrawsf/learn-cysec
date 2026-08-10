# Cybersecurity Learning Journey

A personal cybersecurity knowledge base built with Astro, Tailwind CSS, and Markdown.

## Features

- **Static Generation:** Blazing fast, no backend required.
- **Markdown Driven:** Write notes easily with standard Markdown frontmatter validation.
- **Dark Mode UI:** A clean, technical, cybersecurity-inspired aesthetic.
- **Client-Side Search:** Search and filter your notes instantly without a server.
- **Progress Tracking:** Automatically calculates progress based on your predefined roadmap and note statuses.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Typecheck the project:
   ```bash
   npm run check
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## How to add a new note

Adding new content is incredibly simple. All notes live in `src/content/notes/`.

1. Copy the template:
   ```bash
   cp src/content/notes/_template.md src/content/notes/your-new-note.md
   ```

2. Open the new file and edit the frontmatter:
   ```markdown
   ---
   title: "Your Note Title"
   description: "A brief summary of what you learned."
   category: "web-security" # Must match a topic slug in src/config/topics.ts
   tags: ["Tag1", "Tag2"]
   status: "completed" # planned, learning, completed
   date: 2024-01-01
   difficulty: "beginner" # beginner, intermediate, advanced
   ---
   ```

3. Write your Markdown content below the frontmatter.

4. Check your data to ensure there are no frontmatter errors:
   ```bash
   npm run check
   ```

5. Commit and push your changes:
   ```bash
   git add .
   git commit -m "docs: add new note on Topic X"
   git push
   ```

6. GitHub Actions will automatically build and deploy your new note to GitHub Pages!

## Configuration

- **Site Metadata**: Edit `src/config/site.ts` to change the site title, description, and your GitHub URL.
- **Topics**: Edit `src/config/topics.ts` to add or modify learning categories.
- **Roadmap**: Edit `src/config/roadmap.ts` to structure your high-level learning goals.

## GitHub Pages Setup

If you are deploying this project to a subpath (e.g., `https://username.github.io/repo-name/`), make sure to uncomment and update the `base` property in `astro.config.mjs` before deploying:

```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://username.github.io', 
  base: '/repo-name',
  // ...
});
```
