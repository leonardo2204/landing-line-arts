import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { useLocation } from 'react-router';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, keywords }) => {
  const { language } = useLanguage();
  const location = useLocation();

  const isEnglish = language === 'en';
  const baseUrl = 'https://mylinearts.com';
  const currentUrl = `${baseUrl}${location.pathname}`;

  const seoData = {
    'pt-BR': {
      title: title || 'MylineArts | Crie Livros de Colorir Personalizados com IA - Estilo Boobie Goods',
      description: description || 'Transforme suas fotos em livros de colorir personalizados com IA. Inspirado no sucesso viral do Boobie Goods, criamos páginas únicas para colorir das suas memórias favoritas. Sem habilidades artísticas necessárias!',
      keywords: keywords || 'livro de colorir personalizado, boobie goods, páginas para colorir personalizadas, arte com IA, foto para desenho, livro de colorir família, presente personalizado, criador de livro de colorir, arte personalizada, memórias em desenhos, gerador de arte linear',
      ogTitle: title || 'MylineArts | Crie Livros de Colorir Personalizados com IA - Estilo Boobie Goods',
      ogDescription: description || 'Transforme suas fotos em livros de colorir personalizados com IA. Inspirado no sucesso viral do Boobie Goods, criamos páginas únicas para colorir das suas memórias favoritas. Sem habilidades artísticas necessárias!',
      twitterTitle: title || 'MylineArts | Crie Livros de Colorir Personalizados com IA - Estilo Boobie Goods',
      twitterDescription: description || 'Transforme suas fotos em livros de colorir personalizados com IA. Inspirado no sucesso viral do Boobie Goods, criamos páginas únicas para colorir das suas memórias favoritas.',
      locale: 'pt_BR',
      language: 'Portuguese',
      hreflang: 'pt-br',
      price: '5.00',
      currency: 'BRL'
    },
    'en': {
      title: title || 'MylineArts | Create Custom AI Coloring Books - Boobie Goods Style',
      description: description || 'Transform your photos into personalized coloring books with AI. Inspired by the viral Boobie Goods success, we create unique coloring pages from your favorite memories. No artistic skills needed!',
      keywords: keywords || 'custom coloring book, boobie goods, personalized coloring pages, AI art, photo to drawing, family coloring book, personalized gift, coloring book creator, custom art, memories to drawings, line art generator',
      ogTitle: title || 'MylineArts | Create Custom AI Coloring Books - Boobie Goods Style',
      ogDescription: description || 'Transform your photos into personalized coloring books with AI. Inspired by the viral Boobie Goods success, we create unique coloring pages from your favorite memories. No artistic skills needed!',
      twitterTitle: title || 'MylineArts | Create Custom AI Coloring Books - Boobie Goods Style',
      twitterDescription: description || 'Transform your photos into personalized coloring books with AI. Inspired by the viral Boobie Goods success, we create unique coloring pages from your favorite memories.',
      locale: 'en_US',
      language: 'English',
      hreflang: 'en',
      price: '2.00',
      currency: 'USD'
    }
  };

  const currentSEO = seoData[language] || seoData['en'];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "MylineArts",
    "description": currentSEO.description,
    "url": baseUrl,
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
      "url": baseUrl
    },
    "keywords": currentSEO.keywords,
    "inLanguage": isEnglish ? "en-US" : "pt-BR",
    "potentialAction": {
      "@type": "UseAction",
      "target": "https://app.mylinearts.com"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": isEnglish ? "Sarah Johnson" : "Maria Silva"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": isEnglish
          ? "My kids absolutely love coloring their own photos! It's become a wonderful family activity that brings us together."
          : "Meus filhos adoram colorir suas próprias fotos! Virou uma atividade familiar maravilhosa que nos une."
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{currentSEO.title}</title>
      <meta name="title" content={currentSEO.title} />
      <meta name="description" content={currentSEO.description} />
      <meta name="keywords" content={currentSEO.keywords} />
      <meta name="author" content="MylineArts" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={currentSEO.language} />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={currentSEO.ogTitle} />
      <meta property="og:description" content={currentSEO.ogDescription} />
      <meta property="og:image" content={`${baseUrl}/logo.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="MylineArts" />
      <meta property="og:locale" content={currentSEO.locale} />
      <meta property="og:locale:alternate" content={isEnglish ? "pt_BR" : "en_US"} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={currentSEO.twitterTitle} />
      <meta property="twitter:description" content={currentSEO.twitterDescription} />
      <meta property="twitter:image" content={`${baseUrl}/logo.png`} />
      <meta property="twitter:creator" content="@mylinearts" />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
      <link rel="alternate" hrefLang="pt-br" href={baseUrl} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en`} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;