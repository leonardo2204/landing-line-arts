import { Upload, Eye, CreditCard, Printer } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router";

const HowItWorks = () => {
  const { language } = useLanguage();

  // Textos editáveis da seção "Como funciona"
  const howItWorksData = {
    "pt-BR": {
      title: "Prefere comprar pronto e imprimir?",
      subtitle:
        "Ao invés de gerar suas próprias imagens, compre pacotes já prontos de Bobbie Goods, Pobre Goods, famosos etc!",
      steps: [
        {
          image: "/caramelo-antes.jpg",
          afterImage: "/caramelo.png",
          title: "Pobre Goods",
          link: "/pobre-goods-imprimir",
          description:
            "O pacote Pobre Goods inclui 10 desenhos únicos e exclusivos para colorir, criados especialmente para nós Brasileiros",
        },
        {
          image: "/lauana-antes.jpeg",
          afterImage: "/lauana-depois.jpeg",
          title: "Lauana Prado",
          link: "/lauana-prado-bobbie-goods-imprimir",
          description:
            "O pacote Lauana Prado inclui 15 desenhos únicos e exclusivos para colorir, dos momentos mais bonitos de sua carreira",
        },
        {
          image: "/ze-neto-antes.jpeg",
          afterImage: "/ze-neto-depois.jpeg",
          title: "Zé Neto e Cristiano",
          link: "/ze-neto-bobbie-goods-imprimir",
          description:
            "O pacote Zé Neto e Cristiano inclui 15 desenhos únicos e exclusivos para colorir, momentos engraçados e marcantes da dupla sertaneja",
        },
      ],
    },
    en: {
      title: "How it works",
      subtitle: "Create your custom coloring book in just a few simple steps",
      link: "/pobre-goods-imprimir",
      steps: [
        {
          image: "/caramelo-antes.jpg",
          afterImage: "/caramelo.png",
          title: "Pobre Goods",
          link: "/pobre-goods-imprimir",
          description:
            "The Pobre Goods package includes 10 unique and exclusive coloring pages, created especially for Brazilian fans",
        },
        {
          image: "/lauana-antes.jpeg",
          afterImage: "/lauana-depois.jpeg",
          title: "Lauana Prado",
          link: "/lauana-prado-bobbie-goods-imprimir",
          description:
            "The Lauana Prado package includes 15 unique and exclusive coloring pages, featuring the most beautiful moments in her career",
        },
        {
          image: "/ze-neto-antes.jpeg",
          afterImage: "/ze-neto-depois.jpeg",
          title: "Zé Neto e Cristiano",
          link: "/ze-neto-bobbie-goods-imprimir",
          description:
            "The Zé Neto and Cristiano package includes 15 unique and exclusive coloring pages, featuring funny and memorable moments from the duo",
        },
      ],
    },
  };

  const currentData = howItWorksData[language] || howItWorksData["pt-BR"];

  return (
    <section id="to-print" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {currentData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {currentData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-24 gap-y-24">
          {currentData.steps.map((item) => (
            <Link to={item.link} key={item.link}>
              <div
                className="relative w-full max-w-6xl border-2 p-6 border-gray-200 rounded-lg"
                key={item.title}
              >
                {/* Cards Held by Hands Container */}
                <div className="relative h-96 flex justify-center items-end">
                  {/* Left Card (Left Hand) */}
                  <div className="absolute bottom-0 left-1/2 w-1/2 h-full bg-white rounded-lg shadow-lg transform -translate-x-3/4 -rotate-8 origin-bottom-center z-10">
                    <img
                      src={"image" in item ? item.image : "/caramelo.png"}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Right Card (Right Hand) */}
                  <div className="absolute bottom-0 left-1/3 w-1/2 h-full bg-white rounded-lg shadow-xl transform translate-x-1/4 rotate-8 origin-bottom-center z-20">
                    <img
                      src={"image" in item ? item.afterImage : "/caramelo.png"}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-12 text-center ">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="flex justify-center mt-4 p-2 border-2 rounded-lg border-primary-500 text-primary-800">
                  Clique para ver mais
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
