# React Layout Masonry: Docs

Start the dev server with

```bash
npm run dev
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/sibiraj-s/react-layout-masonry/tree/main/docs)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/sibiraj-s/react-layout-masonry/tree/main/docs)

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
docs/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── tailwind.css
│   └── env.d.ts
├── astro.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images and styles can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
