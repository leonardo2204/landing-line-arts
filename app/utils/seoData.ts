import type { SEOData } from '../components/SEOHead';

// Base URL for the site
export const BASE_URL = 'https://mylinearts.com';

// Default SEO data for the main site
export const defaultSEOData = {
  'pt-BR': {
    title: 'Crie Livros de Colorir Personalizados com IA - Estilo Bobbie Goods',
    description: 'Transforme suas fotos em livros de colorir personalizados com IA. Inspirado no sucesso viral do Bobbie Goods, criamos páginas únicas para colorir das suas memórias favoritas. Sem habilidades artísticas necessárias!',
    keywords: 'livro de colorir personalizado, Bobbie goods, páginas para colorir personalizadas, arte com IA, foto para desenho, livro de colorir família, presente personalizado, criador de livro de colorir, arte personalizada, memórias em desenhos, gerador de arte linear',
    ogTitle: 'Crie Livros de Colorir Personalizados com IA - Estilo Bobbie Goods',
    ogDescription: 'Transforme suas fotos em livros de colorir personalizados com IA. Inspirado no sucesso viral do Bobbie Goods, criamos páginas únicas para colorir das suas memórias favoritas. Sem habilidades artísticas necessárias!',
    twitterTitle: 'Crie Livros de Colorir Personalizados com IA - Estilo Bobbie Goods',
    twitterDescription: 'Transforme suas fotos em livros de colorir personalizados com IA. Inspirado no sucesso viral do Bobbie Goods, criamos páginas únicas para colorir das suas memórias favoritas.',
    locale: 'pt_BR',
    language: 'Portuguese',
    hreflang: 'pt-br',
    price: '5.00',
    currency: 'BRL'
  },
  'en': {
    title: 'Create Custom AI Coloring Books - Bobbie Goods Style',
    description: 'Transform your photos into personalized coloring books with AI. Inspired by the viral Bobbie Goods success, we create unique coloring pages from your favorite memories. No artistic skills needed!',
    keywords: 'custom coloring book, Bobbie goods, personalized coloring pages, AI art, photo to drawing, family coloring book, personalized gift, coloring book creator, custom art, memories to drawings, line art generator',
    ogTitle: 'Create Custom AI Coloring Books - Bobbie Goods Style',
    ogDescription: 'Transform your photos into personalized coloring books with AI. Inspired by the viral Bobbie Goods success, we create unique coloring pages from your favorite memories. No artistic skills needed!',
    twitterTitle: 'Create Custom AI Coloring Books - Bobbie Goods Style',
    twitterDescription: 'Transform your photos into personalized coloring books with AI. Inspired by the viral Bobbie Goods success, we create unique coloring pages from your favorite memories.',
    locale: 'en_US',
    language: 'English',
    hreflang: 'en',
    price: '2.00',
    currency: 'USD'
  }
} as const;

// Blog post SEO data
export const blogPostSEOData = {
  'pt-BR': {
    title: 'Bobbie Goods: O Guia Completo para Desenhos para Colorir e Imprimir',
    description: 'Descubra o mundo dos Bobbie Goods: desenhos para colorir, dicas de impressão, ideias criativas e como criar seus próprios desenhos personalizados. Um guia completo para pais e educadores.',
    keywords: 'Bobbie goods, desenhos para colorir, Bobbie goods para imprimir, gerador de Bobbie goods, gerador de desenho infantil, atividades infantis, educação criativa, desenhos para imprimir',
    ogTitle: 'Bobbie Goods: O Guia Completo para Desenhos para Colorir e Imprimir',
    ogDescription: 'Descubra o mundo dos Bobbie Goods: desenhos para colorir, dicas de impressão, ideias criativas e como criar seus próprios desenhos personalizados. Um guia completo para pais e educadores.',
    twitterTitle: 'Bobbie Goods: O Guia Completo para Desenhos para Colorir e Imprimir',
    twitterDescription: 'Descubra o mundo dos Bobbie Goods: desenhos para colorir, dicas de impressão, ideias criativas e como criar seus próprios desenhos personalizados.',
    locale: 'pt_BR',
    language: 'Portuguese',
    hreflang: 'pt-br',
    price: '5.00',
    currency: 'BRL'
  },
  'en': {
    title: 'Bobbie Goods: The Complete Guide to Coloring Drawings and Printing',
    description: 'Discover the world of Bobbie Goods: coloring drawings, printing tips, creative ideas and how to create your own personalized drawings. A complete guide for parents and educators.',
    keywords: 'Bobbie goods, coloring drawings, Bobbie goods to print, Bobbie goods generator, children\'s drawing generator, children\'s activities, creative education, drawings to print',
    ogTitle: 'Bobbie Goods: The Complete Guide to Coloring Drawings and Printing',
    ogDescription: 'Discover the world of Bobbie Goods: coloring drawings, printing tips, creative ideas and how to create your own personalized drawings. A complete guide for parents and educators.',
    twitterTitle: 'Bobbie Goods: The Complete Guide to Coloring Drawings and Printing',
    twitterDescription: 'Discover the world of Bobbie Goods: coloring drawings, printing tips, creative ideas and how to create your own personalized drawings.',
    locale: 'en_US',
    language: 'English',
    hreflang: 'en',
    price: '2.00',
    currency: 'USD'
  }
} as const;

// Blog list SEO data
export const blogListSEOData = {
  'pt-BR': {
    title: 'Blog MylineArts | Dicas e Ideias para Livros de Colorir Personalizados',
    description: 'Descubra dicas, tutoriais e ideias criativas para criar livros de colorir personalizados. Aprenda sobre Bobbie Goods, atividades infantis e muito mais no blog do MylineArts.',
    keywords: 'blog mylinearts, dicas livros de colorir, tutoriais, Bobbie goods, atividades infantis, educação criativa, livros personalizados',
    ogTitle: 'Blog MylineArts | Dicas e Ideias para Livros de Colorir Personalizados',
    ogDescription: 'Descubra dicas, tutoriais e ideias criativas para criar livros de colorir personalizados. Aprenda sobre Bobbie Goods, atividades infantis e muito mais no blog do MylineArts.',
    twitterTitle: 'Blog MylineArts | Dicas e Ideias para Livros de Colorir Personalizados',
    twitterDescription: 'Descubra dicas, tutoriais e ideias criativas para criar livros de colorir personalizados. Aprenda sobre Bobbie Goods, atividades infantis e muito mais.',
    locale: 'pt_BR',
    language: 'Portuguese',
    hreflang: 'pt-br',
    price: '5.00',
    currency: 'BRL'
  },
  'en': {
    title: 'MylineArts Blog | Tips and Ideas for Custom Coloring Books',
    description: 'Discover tips, tutorials and creative ideas for creating custom coloring books. Learn about Bobbie Goods, children\'s activities and much more on the MylineArts blog.',
    keywords: 'mylinearts blog, coloring book tips, tutorials, Bobbie goods, children\'s activities, creative education, custom books',
    ogTitle: 'MylineArts Blog | Tips and Ideas for Custom Coloring Books',
    ogDescription: 'Discover tips, tutorials and creative ideas for creating custom coloring books. Learn about Bobbie Goods, children\'s activities and much more on the MylineArts blog.',
    twitterTitle: 'MylineArts Blog | Tips and Ideas for Custom Coloring Books',
    twitterDescription: 'Discover tips, tutorials and creative ideas for creating custom coloring books. Learn about Bobbie Goods, children\'s activities and much more.',
    locale: 'en_US',
    language: 'English',
    hreflang: 'en',
    price: '2.00',
    currency: 'USD'
  }
} as const;

// Pricing page SEO data
export const pricingSEOData = {
  'pt-BR': {
    title: 'Preços MylineArts | Livros de Colorir Personalizados com IA',
    description: 'Preços transparentes e acessíveis para criar seu livro de colorir personalizado com IA. Transforme suas fotos em páginas para colorir únicas e memoráveis.',
    keywords: 'preços mylinearts, livro de colorir preço, personalizado IA, transformar fotos, páginas para colorir',
    ogTitle: 'Preços MylineArts | Livros de Colorir Personalizados com IA',
    ogDescription: 'Preços transparentes e acessíveis para criar seu livro de colorir personalizado com IA. Transforme suas fotos em páginas para colorir únicas e memoráveis.',
    twitterTitle: 'Preços MylineArts | Livros de Colorir Personalizados com IA',
    twitterDescription: 'Preços transparentes e acessíveis para criar seu livro de colorir personalizado com IA.',
    locale: 'pt_BR',
    language: 'Portuguese',
    hreflang: 'pt-br',
    price: '5.00',
    currency: 'BRL'
  },
  'en': {
    title: 'MylineArts Pricing | Custom AI Coloring Books',
    description: 'Transparent and affordable pricing to create your custom AI coloring book. Transform your photos into unique and memorable coloring pages.',
    keywords: 'mylinearts pricing, coloring book price, custom AI, transform photos, coloring pages',
    ogTitle: 'MylineArts Pricing | Custom AI Coloring Books',
    ogDescription: 'Transparent and affordable pricing to create your custom AI coloring book. Transform your photos into unique and memorable coloring pages.',
    twitterTitle: 'MylineArts Pricing | Custom AI Coloring Books',
    twitterDescription: 'Transparent and affordable pricing to create your custom AI coloring book.',
    locale: 'en_US',
    language: 'English',
    hreflang: 'en',
    price: '2.00',
    currency: 'USD'
  }
} as const;

// Helper function to create SEO data for custom pages
export const createPageSEOData = (
  title: { 'en': string; 'pt-BR': string },
  description: { 'en': string; 'pt-BR': string },
  keywords: { 'en': string; 'pt-BR': string },
  customData?: Partial<SEOData>
) => {
  return {
    'pt-BR': {
      title: title['pt-BR'],
      description: description['pt-BR'],
      keywords: keywords['pt-BR'],
      ogTitle: title['pt-BR'],
      ogDescription: description['pt-BR'],
      twitterTitle: title['pt-BR'],
      twitterDescription: description['pt-BR'],
      locale: 'pt_BR',
      language: 'Portuguese',
      hreflang: 'pt-br',
      price: '5.00',
      currency: 'BRL',
      ...customData
    },
    'en': {
      title: title['en'],
      description: description['en'],
      keywords: keywords['en'],
      ogTitle: title['en'],
      ogDescription: description['en'],
      twitterTitle: title['en'],
      twitterDescription: description['en'],
      locale: 'en_US',
      language: 'English',
      hreflang: 'en',
      price: '2.00',
      currency: 'USD',
      ...customData
    }
  } as const;
};

// Export all SEO data configurations
export const seoConfigurations = {
  default: defaultSEOData,
  blogPost: blogPostSEOData,
  blogList: blogListSEOData,
  pricing: pricingSEOData
} as const; 