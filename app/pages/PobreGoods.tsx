import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function PobreGoods() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Pobre Goods: pacote de 10 desenhos para imprimir e colorir
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Compre o pacote com 10 desenhos únicos para colorir e imprimir{" "}
              <span className="font-bold">por apenas R$19,90</span>
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="order-1 lg:order-1">
              <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/caramelo.png"
                  alt="Pobre Goods - Desenho para colorir de carro de polícia com cachorro"
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
                    O pacote Pobre Goods inclui 10 desenhos únicos e exclusivos
                    para colorir, criados especialmente para nós Brasileiros,
                    com situações engraçadas e cotidianas. Cada desenho é
                    otimizado para impressão em alta qualidade.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    O que você recebe
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      10 desenhos em alta resolução (HD)
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
                        R$19,90
                      </div>
                      <div className="text-gray-600 mb-4">
                        Pacote com 10 desenhos
                      </div>
                      <div className="text-sm text-gray-500 mb-6">
                        Envio por email • Formato PNG Alta Qualidade • 100%
                        seguro
                      </div>
                      <Link
                        to="https://buy.stripe.com/fZu4gz3RQ1l80ZA8H9g7e00"
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
