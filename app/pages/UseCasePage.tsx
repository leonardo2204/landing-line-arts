import { ArrowRight, Check } from "lucide-react";
import { Link, useLocation } from "react-router";
import FAQ from "../components/sections/FAQ";
import SEOHead from "../components/SEOHead";
import { useCasePages } from "../utils/useCasePages";
import { BASE_URL, createPageSEOData } from "../utils/seoData";
import type { Route } from "./+types/UseCasePage";

const getPage = (pathname: string) =>
  useCasePages[pathname.replace(/\/$/, "")];

// Full class strings so Tailwind picks them up
const themes = {
  default: {
    hero: "from-primary-50 via-white to-secondary-50",
    accent: "text-primary-600",
    pill: "bg-primary-600 text-white",
    cta: "btn btn-primary",
    alt: "bg-gray-50",
    band: "from-primary-100 to-secondary-50",
  },
  christmas: {
    hero: "from-red-50 via-white to-green-50",
    accent: "text-red-600",
    pill: "bg-red-600 text-white",
    cta: "btn bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    alt: "bg-green-50",
    band: "from-red-100 via-white to-green-100",
  },
};

// Whole days until the next month/day (0 on the day itself)
const daysUntil = (month: number, day: number) => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let target = new Date(now.getFullYear(), month - 1, day);
  if (target < today) target = new Date(now.getFullYear() + 1, month - 1, day);
  return Math.round((target.getTime() - today.getTime()) / 86_400_000);
};

export const meta: Route.MetaFunction = ({ location }) => {
  const page = getPage(location.pathname);
  const url = `${BASE_URL}${location.pathname.replace(/\/$/, "")}`;
  const image = `${BASE_URL}${page.image}`;

  return [
    { title: page.title },
    { name: "description", content: page.description },
    { name: "keywords", content: page.keywords },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:title", content: page.title },
    { property: "og:description", content: page.description },
    { property: "og:image", content: image },
    { property: "og:url", content: url },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "MyLineArts" },
    { property: "og:locale", content: page.language === "en" ? "en_US" : "pt_BR" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: page.title },
    { name: "twitter:description", content: page.description },
    { name: "twitter:image", content: image },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faq.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    },
  ];
};

export default function UseCasePage() {
  const { pathname } = useLocation();
  const page = getPage(pathname);
  const isEnglish = page.language === "en";
  const theme = themes[page.theme ?? "default"];

  const ptPath = isEnglish ? page.alternate : pathname.replace(/\/$/, "");
  const enPath = isEnglish ? pathname.replace(/\/$/, "") : page.alternate;
  const pt = useCasePages[ptPath];
  const en = useCasePages[enPath];
  const seoData = createPageSEOData(
    { "pt-BR": pt.title, en: en.title },
    { "pt-BR": pt.description, en: en.description },
    { "pt-BR": pt.keywords, en: en.keywords },
    {
      "pt-BR": { canonical: `${BASE_URL}${ptPath}` },
      en: { canonical: `${BASE_URL}${enPath}` },
    }
  );

  const whatsappText = isEnglish
    ? "Hi, I would like a quote for a printed custom coloring book from MyLineArts."
    : "Olá, gostaria de cotar um livro de colorir personalizado no MyLineArts.";

  const days = page.countdown
    ? daysUntil(page.countdown.month, page.countdown.day)
    : 0;
  // Only show the countdown in the run-up to the date
  const showCountdown = page.countdown && days > 0 && days <= 70;

  return (
    <div className="overflow-x-hidden">
      <SEOHead seoData={seoData} image={page.image} />

      {/* Hero */}
      <section className={`relative py-12 md:py-20 bg-linear-to-br ${theme.hero} overflow-hidden`}>
        {page.theme === "christmas" && (
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none text-red-200">
            <span className="absolute top-6 left-[6%] text-4xl">❄</span>
            <span className="absolute top-24 right-[8%] text-5xl text-green-200">❄</span>
            <span className="absolute bottom-10 left-[12%] text-3xl text-green-200">❄</span>
            <span className="absolute bottom-24 right-[40%] text-2xl">❄</span>
            <span className="absolute top-1/2 left-[45%] text-xl text-green-200">❄</span>
          </div>
        )}
        <div
          className={`container mx-auto px-4 sm:px-6 lg:px-8 relative ${
            page.heroImages
              ? "grid lg:grid-cols-2 gap-12 items-center"
              : "text-center max-w-4xl"
          }`}
        >
          <div>
            {showCountdown && (
              <p
                className={`inline-block mb-5 px-4 py-1.5 rounded-full text-sm font-semibold ${theme.pill}`}
                suppressHydrationWarning
              >
                🎄 {page.countdown!.label.replace("{days}", String(days))}
              </p>
            )}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {page.h1}{" "}
              <span className={theme.accent}>{page.h1Highlight}</span>
            </h1>
            <p className={`text-xl text-gray-700 mb-8 ${page.heroImages ? "" : "max-w-2xl mx-auto"}`}>
              {page.subtitle}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 ${page.heroImages ? "" : "justify-center"}`}>
              <a
                href="https://app.mylinearts.com"
                className={`${theme.cta} inline-flex items-center justify-center`}
              >
                {page.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              {page.whatsapp && (
                <a
                  href={`https://wa.me/5513974043819?text=${encodeURIComponent(whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline inline-flex items-center justify-center"
                >
                  {page.whatsapp}
                </a>
              )}
            </div>
            {page.badges && (
              <ul className={`flex flex-wrap gap-x-6 gap-y-2 mt-6 text-gray-700 ${page.heroImages ? "" : "justify-center"}`}>
                {page.badges.map((badge) => (
                  <li key={badge} className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-1.5" />
                    {badge}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {page.heroImages && (
            <div className="relative h-80 sm:h-96 md:h-[28rem] max-w-lg w-full mx-auto">
              <img
                src={page.heroImages[0].src}
                alt={page.heroImages[0].alt}
                className="absolute left-0 top-4 w-1/2 aspect-square object-cover rounded-2xl shadow-xl border-4 border-white -rotate-6"
              />
              <img
                src={page.heroImages[1].src}
                alt={page.heroImages[1].alt}
                className="absolute right-0 bottom-0 w-3/5 aspect-square object-cover rounded-2xl shadow-2xl border-4 border-white bg-white rotate-3"
              />
              <span
                aria-hidden="true"
                className="absolute left-[42%] top-[45%] text-4xl drop-shadow"
              >
                ✨
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Before / after examples */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
            {isEnglish ? "From photo to coloring page" : "Da foto ao desenho para colorir"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {page.examples.map((example) => (
              <div key={example.after} className="flex gap-3 h-56 md:h-64">
                {example.before && (
                  <div className="flex-1 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={example.before}
                      alt={`${example.alt} — ${isEnglish ? "original photo" : "foto original"}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1 rounded-lg overflow-hidden shadow-lg bg-white">
                  <img
                    src={example.after}
                    alt={example.alt}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content sections */}
      {page.sections.map((section, index) => {
        const wide = section.cards || section.steps;
        return (
          <section
            key={section.title}
            className={`py-16 ${index % 2 === 0 ? theme.alt : "bg-white"}`}
          >
            <div
              className={`container mx-auto px-4 sm:px-6 lg:px-8 ${
                wide ? "max-w-6xl text-center" : "max-w-3xl"
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              {section.text && (
                <p className={`text-lg text-gray-700 leading-relaxed mb-6 ${wide ? "max-w-3xl mx-auto" : ""}`}>
                  {section.text}
                </p>
              )}
              {section.items && (
                <ul className="space-y-2 text-lg text-gray-700">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mt-1 mr-3 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.cards && (
                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 text-left ${
                    section.cards.some((card) => card.image)
                      ? "lg:grid-cols-3"
                      : "lg:grid-cols-4"
                  }`}
                >
                  {section.cards.map((card) => (
                    <div
                      key={card.title}
                      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
                    >
                      {card.image && (
                        <img
                          src={card.image}
                          alt={card.title}
                          loading="lazy"
                          className="w-full aspect-square object-contain rounded-lg mb-4 bg-white"
                        />
                      )}
                      {card.icon && (
                        <div aria-hidden="true" className="text-4xl mb-3">
                          {card.icon}
                        </div>
                      )}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {card.title}
                      </h3>
                      <p className="text-gray-600">{card.text}</p>
                    </div>
                  ))}
                </div>
              )}
              {section.steps && (
                <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  {section.steps.map((step, stepIndex) => (
                    <li key={step.title} className="bg-white rounded-2xl p-6 shadow-md">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold ${theme.pill}`}
                      >
                        {stepIndex + 1}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.text}</p>
                    </li>
                  ))}
                </ol>
              )}
              {section.link && (
                <Link
                  to={section.link.to}
                  className={`inline-flex items-center mt-6 font-semibold hover:underline ${theme.accent}`}
                >
                  {section.link.label}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              )}
            </div>
          </section>
        );
      })}

      <FAQ questions={page.faq} />

      {/* Related pages */}
      <section className={`py-16 bg-linear-to-br ${theme.band}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {isEnglish ? "See also" : "Veja também"}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {page.related.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 bg-white rounded-full shadow font-medium hover:underline ${theme.accent}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <a
            href="https://app.mylinearts.com"
            className={`${theme.cta} inline-flex items-center`}
          >
            {page.cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          {page.disclaimer && (
            <p className="text-sm text-gray-500 mt-8">{page.disclaimer}</p>
          )}
        </div>
      </section>
    </div>
  );
}
