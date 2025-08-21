import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function LauanaPradoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Lauana Prado: pacote de 15 desenhos para imprimir e colorir",
            description:
              "O pacote Lauana Prado inclui 15 desenhos únicos e exclusivos para colorir, dos momentos mais bonitos de sua carreira",
            image: "/lauana-depois.png",
            brand: {
              "@type": "Brand",
              name: "My Line Arts",
            },
            offers: {
              "@type": "Offer",
              price: "39.91",
              priceCurrency: "BRL",
              priceValidUntil: "2025-12-31",
              availability: "https://schema.org/InStock",
              inStock: true,
              description:
                "O pacote Lauana Prado inclui 15 desenhos únicos e exclusivos para colorir, dos momentos mais bonitos de sua carreira",
              url: import.meta.env.VITE_PUBLIC_LAUANA_PRADO_PACKAGE_URL,
              seller: {
                "@type": "Organization",
                name: "MyLineArts",
              },
              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                handlingTime: {
                  "@type": "QuantitativeValue",
                  minValue: 0,
                  maxValue: 0,
                  unitCode: "DAY",
                },
                transitTime: {
                  "@type": "QuantitativeValue",
                  minValue: 0,
                  maxValue: 0,
                  unitCode: "DAY",
                },
              },
            },
            category: "Arte e Entretenimento",
            keywords:
              "desenhos para colorir, imprimir, brasileiro, arte digital, atividades infantis, bobbie goods, lauana prado, lauana prado bobbie goods",
            url: "https://mylinearts.com/lauana-prado-bobbie-goods-imprimir",
          }),
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link to="/#to-print">
              <div className="flex items-center gap-2">
                <ArrowLeft className="w-6 h-6" />
                <span>Voltar para a página inicial</span>
              </div>
            </Link>
          </div>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Lauana Prado: pacote de 15 desenhos para imprimir e colorir
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Compre a versão Bobbie Goods dos famosos. Pacote com 15 desenhos
              únicos para colorir e imprimir{" "}
              <span className="font-bold">por apenas R$39,91!</span>
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="order-1 lg:order-1">
              <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/lauana-depois.png"
                  alt="Lauana Prado - Desenho para colorir de momentos mais bonitos de sua carreira"
                  className="w-full h-full object-cover bg-white"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-2 lg:order-2">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    O que inclui o pacote?
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    O pacote Lauana Prado #myraizgoodies, foi criado em
                    homenagem ao seu último álbum Raiz e inclui 15 desenhos
                    únicos e exclusivos para colorir, com os momentos mais
                    bonitos de sua carreira. Cada desenho foi feito a partir de
                    imagens originais de seus shows e é otimizado para impressão
                    em alta qualidade.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    O que você recebe
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      15 desenhos em alta resolução (HD)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Download imediato após a compra
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Formato PNG pronto para imprimir (ou desenhar no celular e
                      tablet)
                    </li>
                  </ul>
                </div>

                <div className="pt-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        R$39,91
                      </div>
                      <div className="text-gray-600 mb-4">
                        Pacote com 15 desenhos
                      </div>
                      <div className="text-sm text-gray-500 mb-6">
                        Envio por email • Formato PNG Alta Qualidade • 100%
                        seguro
                      </div>
                      <Link
                        to={
                          import.meta.env.VITE_PUBLIC_LAUANA_PRADO_PACKAGE_URL
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary flex items-center justify-center w-full cursor-pointer"
                      >
                        Comprar agora
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
