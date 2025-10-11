import { useLanguage } from '../context/LanguageContext';
import { useLocation } from 'react-router';
import { defaultSEOData, BASE_URL } from '../utils/seoData';
import { Helmet } from '@dr.pogodin/react-helmet';

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  locale: string;
  language: string;
  hreflang: string;
  price: string;
  currency: string;
  canonical?: string;
}

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  seoData?: {
    'en': SEOData;
    'pt-BR': SEOData;
  };
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  title, 
  description, 
  keywords, 
  seoData,
  image = '/logo.png',
  type = 'website',
  publishedTime,
  modifiedTime,
  author
}) => {
  const { language } = useLanguage();
  const location = useLocation();

  const isEnglish = language === 'en';
  const currentUrl = `${BASE_URL}${location.pathname}`;

  // Use provided SEO data or fall back to defaults
  const finalSEOData = seoData || defaultSEOData;
  const currentSEO = finalSEOData[language] || finalSEOData['en'];

  // Use canonical URL from SEO data if provided, otherwise use current URL
  const canonicalUrl = currentSEO.canonical || currentUrl;

  // Generate alternate language URLs based on current path
  const getAlternateUrl = (lang: 'en' | 'pt-BR'): string => {
    const pathname = location.pathname;

    if (lang === 'en') {
      // If already English, return as is; otherwise add /en prefix
      return pathname.startsWith('/en')
        ? `${BASE_URL}${pathname}`
        : `${BASE_URL}/en${pathname}`;
    } else {
      // For Portuguese, remove /en prefix if present
      return pathname.startsWith('/en')
        ? `${BASE_URL}${pathname.replace(/^\/en/, '')}`
        : `${BASE_URL}${pathname}`;
    }
  };

  const enUrl = getAlternateUrl('en');
  const ptUrl = getAlternateUrl('pt-BR');

  const structuredData: any = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "MylineArts",
    "description": currentSEO.description,
    "url": BASE_URL,
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": currentSEO.price,
      "priceCurrency": currentSEO.currency,
      "description": isEnglish ? "Credits to transform photos into coloring pages" : "Créditos para transformar fotos em páginas para colorir"
    },
    "creator": {
      "@type": "Organization",
      "name": "MylineArts",
      "url": BASE_URL
    },
    "keywords": currentSEO.keywords,
    "inLanguage": isEnglish ? "en-US" : "pt-BR",
    "potentialAction": {
      "@type": "UseAction",
      "target": "https://app.mylinearts.com"
    }
  };

  // Add article-specific structured data if type is article
  if (type === 'article' && publishedTime) {
    structuredData["@type"] = "Article";
    structuredData["datePublished"] = publishedTime;
    if (modifiedTime) {
      structuredData["dateModified"] = modifiedTime;
    }
    if (author) {
      structuredData["author"] = {
        "@type": "Person",
        "name": author
      };
    }
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{currentSEO.title}</title>
      <meta name="title" content={currentSEO.title} />
      <meta name="description" content={currentSEO.description} />
      <meta name="keywords" content={currentSEO.keywords} />
      <meta name="author" content={author || "MylineArts"} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={currentSEO.language} />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={currentSEO.ogTitle || currentSEO.title} />
      <meta property="og:description" content={currentSEO.ogDescription || currentSEO.description} />
      <meta property="og:image" content={`${BASE_URL}${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="MylineArts" />
      <meta property="og:locale" content={currentSEO.locale} />
      <meta property="og:locale:alternate" content={isEnglish ? "pt_BR" : "en_US"} />
      
      {/* Article-specific Open Graph tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={currentSEO.twitterTitle || currentSEO.title} />
      <meta property="twitter:description" content={currentSEO.twitterDescription || currentSEO.description} />
      <meta property="twitter:image" content={`${BASE_URL}${image}`} />
      <meta property="twitter:creator" content="@mylinearts" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="pt-br" href={ptUrl} />
      <link rel="alternate" hrefLang="pt" href={ptUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;