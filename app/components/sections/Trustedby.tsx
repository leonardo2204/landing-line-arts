import { useLanguage } from "../../context/LanguageContext";

export default function Trustedby() {
  const { language } = useLanguage();

  const trustedbyData = {
    "pt-BR": {
      title: "Reconhecido como melhor escolha por outras startups",
    },
    en: {
      title: "Recognized as the best choice by other startups",
    },
  };

  const { title } = trustedbyData[language];

  return (
    <section id="trustedby" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </div>
        <div className="flex flex-col items-center text-center relative">
          <a href="https://fazier.com/launches/my-line-arts" target="_blank" rel="noopener">
            <img
              src="https://fazier.com/api/v1/public/badges/embed_image.svg?launch_id=4770&badge_type=weekly&theme=light"
              width="270"
              alt="Fazier badge"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
