# AI Flow Presentation

This repository contains a presentation on modern AI workflows and interfaces.

## 🚀 Project Overview

This presentation explores:

- **Modern AI Interfaces**: How we interact with AI systems today
- **Workflows**: Best practices for working with AI
- **Future Trends**: Where AI interfaces are headed

## 📋 Contents

- `src/` - Next.js application source code
- `docs/` - Documentation and conceptual materials
- `public/` - Static assets and resources

## 🛠️ Technology Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## 🚦 Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the presentation.

## 🌐 Conceptual Framework

The project explores the intersection of:

- Interface design philosophy
- Human-computer interaction
- Composable systems design
- Adaptive user interfaces

Check the `docs/` directory for more detailed exploration of these concepts.

## 🔍 Design Principles

See [design.md](design.md) for detailed information on the design principles applied in this project.

## 📄 License

MIT

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages. Here's how it works:

### Automatic Deployment

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site to GitHub Pages
3. The site will be available at `https://aayushkucheria.github.io/ai-flow-presentation`

### Manual Setup Instructions

If you need to set up GitHub Pages for this repository:

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Under "Build and deployment":
   - Source: Select "GitHub Actions"
4. The first push to the main branch after this setup will trigger the deployment

### Local Testing of Production Build

To test the GitHub Pages version locally:

```bash
# Build the static export
npm run export

# Serve the static files
npx serve out
```

The site will be available at `http://localhost:3000` 