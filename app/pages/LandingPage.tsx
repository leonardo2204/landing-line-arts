import { ArrowRight, Play, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import HowItWorks from "../components/sections/HowItWorks";
import Benefits from "../components/sections/Benefits";
import AboutUs from "../components/sections/AboutUs";
import Pricing from "../components/sections/Pricing";
import SocialMedia from "../components/sections/SocialMedia";
import FAQ, { faqData } from "../components/sections/FAQ";
import { mockBeforeAfterImages } from "../utils/mockData";
import { pricingLoader } from "../loaders/pricing-loader";
import type { Route } from "./+types/LandingPage";
import Trustedby from "../components/sections/Trustedby";
import PromoCountdownBanner from "../components/PromoCountdownBanner";
import Testimonials from "../components/sections/Testimonials";
import {
  defaultSEOData,
  BASE_URL,
  getLanguageFromPath,
} from "../utils/seoData";

export const meta: Route.MetaFunction = ({ location }) => {
  const language = getLanguageFromPath(location.pathname);
  const seo = defaultSEOData[language];
  const isEnglish = language === 'en';

  const canonicalUrl = isEnglish ? `${BASE_URL}/en` : `${BASE_URL}/`;
  const ogImageAlt = isEnglish
    ? "MyLineArts — turn your photo into a coloring page with AI"
    : "MyLineArts — transforme sua foto em desenho para colorir com IA";

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "MylineArts",
    "description": seo.description,
    "url": BASE_URL,
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": seo.price,
      "priceCurrency": seo.currency,
      "description": isEnglish ? "Credits to transform photos into coloring pages" : "Créditos para transformar fotos em páginas para colorir"
    },
    "creator": { "@type": "Organization", "name": "MylineArts", "url": BASE_URL },
    "keywords": seo.keywords,
    "inLanguage": isEnglish ? "en-US" : "pt-BR",
    "potentialAction": { "@type": "UseAction", "target": "https://app.mylinearts.com" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData[language].questions.map(({ question, answer }) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": { "@type": "Answer", "text": answer }
    }))
  };

  return [
    { title: seo.title },
    { name: "description", content: seo.description },
    { name: "keywords", content: seo.keywords },
    { tagName: "link", rel: "canonical", href: canonicalUrl },
    { property: "og:title", content: seo.ogTitle },
    { property: "og:description", content: seo.ogDescription },
    { property: "og:image", content: `${BASE_URL}/logo.png` },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: ogImageAlt },
    { property: "og:url", content: `${BASE_URL}${location.pathname}` },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "MylineArts" },
    { property: "og:locale", content: seo.locale },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: seo.twitterTitle },
    { name: "twitter:description", content: seo.twitterDescription },
    { name: "twitter:image", content: `${BASE_URL}/logo.png` },
    { name: "twitter:image:alt", content: ogImageAlt },
    { name: "twitter:creator", content: "@mylinearts" },
    { "script:ld+json": webAppSchema },
    { "script:ld+json": faqSchema },
  ];
};

const createCards = {
  "pt-BR": [
    { to: "/galeria", image: "/gato-depois.jpeg", title: "Desenhos para colorir", description: "Qualquer foto vira uma página com traços limpos, pronta para imprimir em A4." },
    { to: "/livro-de-colorir-personalizado", image: "/casamento-depois.jpeg", title: "Livro de colorir personalizado", description: "Junte várias fotos num livro único para presentear ou usar como lembrancinha." },
    { to: "/figurinhas-adesivos-personalizados", image: "/turquia-sticker.png", title: "Figurinhas e adesivos", description: "Adesivos ilustrados para WhatsApp, Telegram ou papel adesivo." },
    { to: "/bobbie-goods-personalizado-com-fotos", image: "/ste-depois.jpeg", title: "Bobbie Goods personalizado", description: "Desenhos no estilo que viralizou, com você e sua família." },
  ],
  en: [
    { to: "/en/gallery", image: "/gato-depois.jpeg", title: "Coloring pages", description: "Any photo becomes a page with clean lines, ready to print." },
    { to: "/en/custom-coloring-book-from-photos", image: "/casamento-depois.jpeg", title: "Custom coloring book", description: "Put several photos together in a one-of-a-kind book for gifts or party favors." },
    { to: "/en/custom-stickers-from-photos", image: "/turquia-sticker.png", title: "Custom stickers", description: "Illustrated stickers for WhatsApp, Telegram or sticker paper." },
    { to: "/en/bobbie-goods-style-coloring-pages", image: "/ste-depois.jpeg", title: "Bobbie Goods style", description: "Coloring pages in the style that went viral, featuring you and your family." },
  ],
};

export const loader = async ({
  context,
  request,
  params,
}: Route.LoaderArgs) => {
  const plans = await pricingLoader({ context, request, params });

  return Response.json(
    { plans },
    {
      headers: {
        "Cache-Control": "public, max-age=43200", // 12 hours = 43200 seconds
      },
    }
  );
};

export default function LandingPage() {
  const { t, language } = useLanguage();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleGetStartedClick = () => {
    window.location.href = "https://app.mylinearts.com";
  };

  const handleHowItWorksClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById("how-it-works");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSeeDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Promotional Countdown Banner */}
      <PromoCountdownBanner />

      {/* Hero Section */}
      <section className="relative py-4 md:py-6 bg-linear-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {t("landing.hero.title")}{" "}
                <span className="text-primary-600">
                  {t("landing.hero.titleHighlight")}
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-lg">
                {t("landing.hero.subtitle")}
              </p>
              <div className="flex flex-col gap-4 cursor-pointer">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleGetStartedClick}
                    className="btn btn-primary flex items-center justify-center cursor-pointer flex-1"
                  >
                    {t("nav.getStarted")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button
                    onClick={handleHowItWorksClick}
                    className="btn btn-outline flex items-center justify-center cursor-pointer flex-1"
                  >
                    {t("nav.howItWorks")}
                  </button>
                  <button
                    onClick={handleSeeDemoClick}
                    className="btn btn-outline items-center justify-center cursor-pointer flex-1 hidden md:flex"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    {t("nav.seeDemo")}
                  </button>
                </div>
                <button
                  onClick={handleSeeDemoClick}
                  className="btn btn-outline flex items-center justify-center cursor-pointer w-full md:hidden"
                >
                  <Play className="mr-2 h-5 w-5" />
                  {t("nav.seeDemo")}
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                <div className="flex flex-col items-center justify-center h-full gap-4 md:gap-6 max-w-full">
                  {/* First Pair */}
                  <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8 w-full max-w-full">
                    {/* Before Image */}
                    <div className="flex-1 h-64 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={"/familia-2-depois.jpeg"}
                        alt={language === "pt-BR" ? "Foto original de família em aniversário" : "Original family birthday photo"}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* After Image */}
                    <div className="flex-1 h-64 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={"/familia2-antes.jpeg"}
                        alt={language === "pt-BR" ? "Foto de família transformada em desenho para colorir com IA" : "Family photo turned into a coloring page with AI"}
                        className="object-cover object-[50%_60px] md:object-[50%_0%] w-full h-full"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8 w-full max-w-full">
                    {/* Before Image */}
                    <div className="flex-1 h-64 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={"/ste-antes.jpeg"}
                        alt={language === "pt-BR" ? "Foto original de retrato" : "Original portrait photo"}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* After Image */}
                    <div className="flex-1 h-64 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={"/ste-depois.jpeg"}
                        alt={language === "pt-BR" ? "Retrato transformado em desenho para colorir pronto para imprimir" : "Portrait turned into a printable coloring page"}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply opacity-20"></div>
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply opacity-20"></div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("landing.seeTheMagic")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("landing.seeTheMagicSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mockBeforeAfterImages.map((image) => (
              <div key={image.id} className="flex flex-col">
                <div className="flex items-center justify-center h-64 md:h-80 gap-3 md:gap-4 mb-4">
                  {/* Before Image */}
                  <div className="flex-1 h-full rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={image.before}
                      alt={`${image.title[language]} — ${language === "pt-BR" ? "foto original" : "original photo"}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* After Image */}
                  <div className="flex-1 h-full rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={image.after}
                      alt={`${image.title[language]} — ${language === "pt-BR" ? "desenho para colorir gerado com IA" : "coloring page generated with AI"}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 my-2">
                  {image.title[language]}
                </h3>
                <p className="text-gray-600">{image.description[language]}</p>
              </div>
            ))}
          </div>

          {/* Gallery Button */}
          <div className="text-center mt-16">
            <Link
              to={language === "pt-BR" ? "/galeria" : "/en/gallery"}
              className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500 shadow-2xl shadow-primary-400/50 hover:shadow-purple-500/70 hover:scale-110 hover:rotate-1 animate-pulse group"
            >
              <span className="text-lg">
                {language === "pt-BR"
                  ? "Ver mais na galeria"
                  : "See more in gallery"}
              </span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* What you can create — links to the use case pages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {language === "pt-BR"
              ? "O que você pode criar com suas fotos"
              : "What you can make from your photos"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {createCards[language].map((card) => (
              <Link
                key={card.to}
                to={card.to}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="w-full aspect-square object-contain rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <Benefits />

      {/* How It Works Section */}
      <HowItWorks />

      <Testimonials />

      {/* Stickers Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("landing.stickers.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("landing.stickers.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Sticker Example 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <img
                  src="/turquia-sticker.png"
                  alt="Family photo converted to custom personalized sticker with AI"
                  className="w-full h-full object-cover"
                />
                {/* Original image preview */}
                <div className="absolute bottom-2 right-2 w-20 h-20 bg-white rounded-lg shadow-lg overflow-hidden border-2 border-white">
                  <img
                    src="/turquia-original.jpeg"
                    alt="Original family photo used for AI sticker generation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t("landing.stickers.example1Title")}
              </h3>
              <p className="text-gray-600 text-sm">
                {t("landing.stickers.example1Description")}
              </p>
            </div>

            <Trustedby />

            {/* Sticker Example 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <img
                  src="/cindy-sticker-nobg.png"
                  alt="Pet portrait converted to cute personalized sticker using AI"
                  className="w-full h-full object-cover"
                />
                {/* Original image preview */}
                <div className="absolute bottom-2 right-2 w-20 h-20 bg-white rounded-lg shadow-lg overflow-hidden border-2 border-white">
                  <img
                    src="/cindy-sticker.jpeg"
                    alt="Original pet photo used for AI sticker creation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t("landing.stickers.example2Title")}
              </h3>
              <p className="text-gray-600 text-sm">
                {t("landing.stickers.example2Description")}
              </p>
            </div>

            {/* Sticker Example 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <img
                  src="/familia-sticker.png"
                  alt="Special occasion photo turned into custom AI sticker for WhatsApp and Telegram"
                  className="w-full h-full object-cover"
                />
                {/* Original image preview */}
                <div className="absolute bottom-2 right-2 w-20 h-20 bg-white rounded-lg shadow-lg overflow-hidden border-2 border-white">
                  <img
                    src="/familia-2-depois.jpeg"
                    alt="Original photo used for personalized sticker generation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t("landing.stickers.example3Title")}
              </h3>
              <p className="text-gray-600 text-sm">
                {t("landing.stickers.example3Description")}
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleGetStartedClick}
              className="btn btn-primary inline-flex items-center"
            >
              {t("landing.stickers.ctaButton")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <p className="mt-4">
              <Link
                to={language === "pt-BR" ? "/figurinhas-adesivos-personalizados" : "/en/custom-stickers-from-photos"}
                className="text-primary-700 hover:text-primary-900 underline"
              >
                {language === "pt-BR"
                  ? "Saiba mais sobre figurinhas e adesivos personalizados"
                  : "Learn more about custom stickers from photos"}
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutUs />

      {/* Pricing Section */}
      <Pricing />

      {/* Social Media Section */}
      <SocialMedia />

      <section className="py-20 bg-linear-to-br from-primary-100 to-secondary-50 paper-texture">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t("landing.cta.title")}
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  {t("landing.cta.subtitle")}
                </p>
                <a
                  href={`https://web.whatsapp.com/send/?phone=5513974043819&text=Olá, gostaria de cotar um livro no MyLineArts.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-flex items-center"
                >
                  {t("landing.cta.button")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* YouTube Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/Ew90GsudpT4?autoplay=1&rel=0"
                title="MyLineArts Demo"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
