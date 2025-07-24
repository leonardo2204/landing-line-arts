# SEO System Documentation

This document explains how to use the enhanced SEO system that provides different titles and descriptions based on the language (English or Portuguese).

## Overview

The SEO system consists of:
- `SEOHead` component: Main component for managing SEO meta tags
- `seoData.ts`: Centralized SEO data management
- Language-specific SEO configurations

## Basic Usage

### 1. Using Default SEO Data

For pages that don't need custom SEO data, simply use the `SEOHead` component without props:

```tsx
import SEOHead from '../components/SEOHead';

const MyPage = () => {
  return (
    <div>
      <SEOHead />
      {/* Your page content */}
    </div>
  );
};
```

### 2. Using Predefined SEO Configurations

For common page types, use the predefined SEO data:

```tsx
import SEOHead from '../components/SEOHead';
import { blogPostSEOData, blogListSEOData, pricingSEOData } from '../utils/seoData';

// For blog posts
<SEOHead 
  seoData={blogPostSEOData}
  type="article"
  publishedTime="2024-03-20T00:00:00Z"
  author="Stefanie Szabo"
  image="/blog/1/banner.jpeg"
/>

// For blog list pages
<SEOHead seoData={blogListSEOData} />

// For pricing pages
<SEOHead seoData={pricingSEOData} />
```

### 3. Creating Custom SEO Data

For pages with specific SEO requirements, create custom SEO data:

```tsx
import SEOHead from '../components/SEOHead';
import { createPageSEOData } from '../utils/seoData';

const customSEOData = createPageSEOData(
  {
    'en': 'Custom Page Title | MylineArts',
    'pt-BR': 'Título da Página Personalizada | MylineArts'
  },
  {
    'en': 'Custom page description in English',
    'pt-BR': 'Descrição da página personalizada em português'
  },
  {
    'en': 'custom, keywords, english',
    'pt-BR': 'palavras, chave, portugues'
  }
);

<SEOHead seoData={customSEOData} />
```

### 4. Overriding Individual Properties

You can override individual SEO properties while keeping the rest:

```tsx
<SEOHead 
  seoData={blogPostSEOData}
  title="Custom Title Override"
  description="Custom description override"
  image="/custom-image.jpg"
/>
```

## Available Props

The `SEOHead` component accepts the following props:

- `seoData`: Complete SEO data object for both languages
- `title`: Override the title (will be used for both languages)
- `description`: Override the description (will be used for both languages)
- `keywords`: Override the keywords (will be used for both languages)
- `image`: Custom image path (defaults to '/logo.png')
- `type`: Content type - 'website' or 'article' (defaults to 'website')
- `publishedTime`: Publication date for articles (ISO string)
- `modifiedTime`: Last modified date for articles (ISO string)
- `author`: Author name for articles

## Language Detection

The SEO system automatically detects the current language from the URL path:
- URLs starting with `/en` use English SEO data
- All other URLs use Portuguese SEO data

## SEO Data Structure

Each language's SEO data includes:

```typescript
interface SEOData {
  title: string;              // Page title
  description: string;        // Meta description
  keywords: string;           // Meta keywords
  ogTitle?: string;          // Open Graph title
  ogDescription?: string;    // Open Graph description
  twitterTitle?: string;     // Twitter Card title
  twitterDescription?: string; // Twitter Card description
  locale: string;            // Language locale (e.g., 'pt_BR', 'en_US')
  language: string;          // Language name (e.g., 'Portuguese', 'English')
  hreflang: string;          // Hreflang attribute (e.g., 'pt-br', 'en')
  price: string;             // Price for structured data
  currency: string;          // Currency for structured data
}
```

## Best Practices

1. **Use predefined configurations** when possible to maintain consistency
2. **Create custom SEO data** for pages with unique content
3. **Override individual properties** sparingly and only when necessary
4. **Keep titles under 60 characters** for optimal display in search results
5. **Keep descriptions under 160 characters** for optimal display in search results
6. **Use relevant keywords** that match the page content
7. **Include the brand name** in titles for better recognition

## Examples

### Landing Page
```tsx
<SEOHead /> // Uses default SEO data
```

### Blog Post
```tsx
<SEOHead 
  seoData={blogPostSEOData}
  type="article"
  publishedTime="2024-03-20T00:00:00Z"
  author="Stefanie Szabo"
  image="/blog/1/banner.jpeg"
/>
```

### Custom Page
```tsx
const customSEO = createPageSEOData(
  {
    'en': 'How to Create Custom Coloring Books | MylineArts',
    'pt-BR': 'Como Criar Livros de Colorir Personalizados | MylineArts'
  },
  {
    'en': 'Learn how to create beautiful custom coloring books with our AI technology.',
    'pt-BR': 'Aprenda como criar lindos livros de colorir personalizados com nossa tecnologia de IA.'
  },
  {
    'en': 'custom coloring books, AI art, personalized gifts',
    'pt-BR': 'livros de colorir personalizados, arte com IA, presentes personalizados'
  }
);

<SEOHead seoData={customSEO} />
```

## Migration from Old System

If you're migrating from the old hardcoded SEO system:

1. Replace hardcoded SEO data with predefined configurations
2. Use `createPageSEOData` for custom pages
3. Remove language-specific conditional rendering in favor of the centralized system

The new system is more maintainable, type-safe, and provides better SEO optimization for both languages. 