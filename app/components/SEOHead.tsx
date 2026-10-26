import { useLanguage } from '../context/LanguageContext';
import { useLocation } from 'react-router';
import { defaultSEOData, BASE_URL, getLocalizedPaths } from '../utils/seoData';
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
  const currentSEO: SEOData = finalSEOData[language] || finalSEOData['en'];

  // Use canonical URL from SEO data if provided, otherwise use current URL
  const canonicalUrl = currentSEO.canonical || currentUrl;

  // Alternate language URLs (slugs may differ between languages)
  const localized = getLocalizedPaths(location.pathname);
  const enUrl = `${BASE_URL}${localized.en}`;
  const ptUrl = `${BASE_URL}${localized.pt}`;

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
      <meta name="description" content={currentSEO.description} />
      <meta name="keywords" content={currentSEO.keywords} />
      <meta name="author" content={author || "MylineArts"} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={currentSEO.language} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={currentSEO.ogTitle || currentSEO.title} />
      <meta property="og:description" content={currentSEO.ogDescription || currentSEO.description} />
      <meta property="og:image" content={`${BASE_URL}${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={currentSEO.title} />
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
      <link rel="alternate" hrefLang="x-default" href={ptUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;