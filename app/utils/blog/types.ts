import React from 'react';

export interface BlogPostContent {
  slug: string;
  title: {
    en: string;
    'pt-BR': string;
  };
  description: {
    en: string;
    'pt-BR': string;
  };
  date: string;
  readTime: {
    en: string;
    'pt-BR': string;
  };
  author: {
    name: string;
    image: string;
  };
  bannerImage: string;
  publishedTime: string;
  seoData: {
    'pt-BR': {
      title: string;
      description: string;
      keywords: string;
      ogTitle: string;
      ogDescription: string;
      twitterTitle: string;
      twitterDescription: string;
      locale: string;
      language: string;
      hreflang: string;
      price: string;
      currency: string;
      canonical: string;
    };
    'en': {
      title: string;
      description: string;
      keywords: string;
      ogTitle: string;
      ogDescription: string;
      twitterTitle: string;
      twitterDescription: string;
      locale: string;
      language: string;
      hreflang: string;
      price: string;
      currency: string;
      canonical: string;
    };
  };
  content: React.ComponentType<{ language: 'en' | 'pt-BR' }>;
}
