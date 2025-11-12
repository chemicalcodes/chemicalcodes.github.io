# Chemical Codes Website

A modern, static website for Chemical Codes - specialists in chemometrics, machine learning, and chemical data analysis. Built with Next.js 14 and Tailwind CSS.

## About Chemical Codes

Chemical Codes specializes in learning from chemical data through advanced chemometrics, machine learning, and innovative research approaches. We bridge chemistry and data science to extract valuable insights from complex chemical datasets.

## Features

- Modern, responsive design
- Static site generation for optimal performance
- Tailwind CSS for styling
- TypeScript for type safety
- Multiple sections: Hero, Expertise, About, Contact

## Getting Started

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build the static site:

```bash
npm run build
```

The static files will be generated in the `out` directory.

### Preview Production Build

After building, you can preview the production build locally:

```bash
npm run start
```

## Project Structure

```
cc-web/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── public/
│   ├── cc_2_black.svg   # Logo (black)
│   └── cc_2_white.svg   # Logo (white)
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json
```

## Deployment

The `out` directory contains the static files that can be deployed to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any web server

Simply upload the contents of the `out` directory to your hosting provider.

## Customization

- Edit `app/page.tsx` to modify the homepage content
- Update colors and styles in `tailwind.config.ts`
- Change metadata in `app/layout.tsx`
- Add new pages in the `app` directory

## Technologies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- PostCSS
