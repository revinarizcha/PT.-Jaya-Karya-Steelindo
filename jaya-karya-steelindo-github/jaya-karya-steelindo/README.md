# PT Jaya Karya Steelindo Website

A responsive, single-page marketing website built with Next.js App Router, React, and TypeScript.

## Run locally

1. Install [Node.js](https://nodejs.org/) (Node 18.18+ recommended).
2. Extract this ZIP and open the project folder in a terminal.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Publish to GitHub

Create an empty repository on GitHub, then run these commands from this folder:

```bash
git init
git add .
git commit -m "Initial Jaya Karya Steelindo website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your own GitHub repository URL.

## Deploy

Import the GitHub repository into [Vercel](https://vercel.com/) and use the default Next.js settings. Vercel will detect the framework automatically.

## Before publishing

- Replace the sample Unsplash photos with approved company, warehouse, and product photography.
- Confirm the company contact details and official inquiry channel.
- Review all product descriptions and service claims for accuracy.
- The current contact CTA links to the official website because a direct email or WhatsApp contact was not included in the brief.

## Project structure

```text
jaya-karya-steelindo/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── .gitignore
├── next-env.d.ts
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json
```
