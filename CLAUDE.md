# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multilingual (Portuguese/English) landing page for MyLineArts built with React Router v7, Vite, Tailwind CSS, and deployed to Cloudflare Workers. The site generates and sells custom coloring book packages with various themes.

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Deploy to Cloudflare
npm run deploy

# Local Cloudflare preview
npm run cf-preview
```

## Architecture

### Framework Stack
- **React Router v7** with file-based routing in `app/routes.ts`
- **Vite** as build tool with Cloudflare Workers adapter
- **Tailwind CSS v4** with custom design system
- **TypeScript** for type safety
- **Cloudflare Workers** for deployment

### Directory Structure
```
app/
├── components/          # Reusable UI components
│   ├── layout/         # Header, Footer
│   ├── sections/       # Page sections
│   ├── ui/            # Basic UI components
│   └── SEOHead.tsx    # SEO management component
├── context/           # React Context providers
├── pages/            # Page components (route handlers)
├── utils/           # Utility functions and helpers
└── routes.ts        # Route definitions
```

### Key Technologies
- **Framer Motion**: Animations and transitions
- **PostHog**: Analytics tracking
- **React Helmet Async**: SEO and meta tag management
- **Stripe**: Payment processing (URLs in wrangler.jsonc)
- **Lucide React**: Icon system

## Routing System

Uses React Router v7 with centralized route configuration in `app/routes.ts`:
- Bilingual routes with `/en` prefix for English
- Portuguese as default language
- Static prerendering configured for key pages
- Blog system with dynamic slug routing

## Content Guidelines

Follow the capitalization rules defined in `.cursorrules`:
- Only first word capitalized in headings/text
- Proper nouns always capitalized (Bobbie Goods, MyLineArts, platform names)
- Applied to all content including headers, cards, dates, instructions

## SEO System

Comprehensive bilingual SEO system documented in `app/utils/README_SEO.md`:
- Automatic language detection from URL path
- Predefined SEO data for common page types
- Custom SEO data creation with `createPageSEOData()`
- Structured data support for products

## Environment Configuration

- **Development**: `.dev.vars` for local secrets
- **Production**: Environment variables in `wrangler.jsonc`
- PostHog analytics pre-configured
- Stripe payment URLs configured per package

## Component Patterns

- Use existing component patterns from `app/components/`
- Tailwind CSS with custom color system using CSS variables
- Framer Motion for animations
- React Helmet Async for meta tags
- Language context for i18n

## Build and Deploy

Project builds with Vite and deploys to Cloudflare Workers:
- Assets served from `dist/` directory
- SPA fallback for client-side routing
- Domain routing configured for `mylinearts.com`

## Code Quality

- ESLint configured with React hooks and TypeScript rules
- TypeScript with strict configuration
- Component-based architecture with clear separation of concerns