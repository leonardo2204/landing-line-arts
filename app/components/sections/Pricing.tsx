import { ImageIcon, Star, Crown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Await, useLoaderData } from 'react-router';

const formatCurrency = (amount: number, currency: string) => {
  // Map currency codes to locale strings for proper formatting
  const currencyLocaleMap: Record<string, string> = {
    'eur': 'de-DE',
    'usd': 'en-US',
    'brl': 'pt-BR',
    'gbp': 'en-GB'
  };
  
  const locale = currencyLocaleMap[currency] || 'de-DE';
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency.toUpperCase()
  }).format(amount / 100);
}

const getCurrencySymbol = (currency: string) => {
  const symbols: Record<string, string> = {
    'eur': '€',
    'usd': '$',
    'brl': 'R$',
    'gbp': '£'
  };
  return symbols[currency] || '€';
}

const Pricing = () => {
  const { language } = useLanguage();
  const { plans, currency } = useLoaderData();

  // Pricing data for both languages
  const pricingData = {
    'pt-BR': {
      title: 'Planos simples e transparentes',
      subtitle: 'Escolha o plano ideal para transformar suas fotos em páginas para colorir',
      plans: [
        {
          name: 'Inicial',
          icon: <ImageIcon className="w-8 h-8 text-primary-500" />,
          features: [
            'Modelos de IA avançado',
            'Suporte por e-mail',
            'Acesso a todas as imagens geradas'
          ],
          buttonText: 'Escolher esse',
          popular: false,
          bgGradient: 'from-primary-50 to-primary-100'
        },
        {
          name: 'Artista inicial',
          icon: <ImageIcon className="w-8 h-8 text-primary-500" />,
          features: [
            'Modelos de IA avançado',
            'Suporte por e-mail',
            'Acesso a todas as imagens geradas'
          ],
          buttonText: 'Escolher esse',
          popular: false,
          bgGradient: 'from-primary-50 to-primary-100'
        },
        {
          name: 'Desenhista',
          icon: <Star className="w-8 h-8 text-warning-500" />,
          features: [
            'Prioridade na geração de imagens',
            'Suporte rápido',
            'Acesso a todas as imagens geradas'
          ],
          buttonText: 'Escolher esse',
          popular: true,
          bgGradient: 'from-warning-50 to-warning-100'
        },
        {
          name: 'Profissional',
          icon: <Crown className="w-8 h-8 text-accent-500" />,
          features: [
            'Prioridade na geração de imagens',
            'Suporte rápido',
            'Acesso a todas as imagens geradas'
          ],
          buttonText: 'Escolher esse',
          popular: false,
          bgGradient: 'from-accent-50 to-accent-100'
        }
      ],
      howItWorks: {
        title: '💡 Como funciona o sistema de créditos?',
        steps: [
          {
            title: 'Compre créditos',
            description: 'Escolha o plano que melhor se adapta às suas necessidades'
          },
          {
            title: 'Use 1 crédito por imagem',
            description: 'Cada foto transformada consome apenas 1 crédito'
          },
          {
            title: 'Baixe suas criações',
            description: 'Acesso ilimitado a todas as suas imagens geradas'
          }
        ]
      },
      trustIndicators: {
        included: '✅ Todos os planos incluem acesso completo à plataforma',
        details: `💳 Preços em ${getCurrencySymbol(currency)} • 🔒 Pagamento seguro • ❌ Sem taxas ocultas ou assinaturas`
      },
      popularBadge: '⭐ MAIS POPULAR ⭐'
    },
    'en': {
      title: 'Simple and transparent plans',
      subtitle: 'Choose the ideal plan to transform your photos into coloring pages',
      plans: [
        {
          name: 'Starter',
          icon: <ImageIcon className="w-8 h-8 text-primary-500" />,
          features: [
            'Advanced AI models',
            'Email support',
            'Access to all generated images'
          ],
          buttonText: 'Choose this',
          popular: false,
          bgGradient: 'from-primary-50 to-primary-100'
        },
        {
          name: 'Artist',
          icon: <Star className="w-8 h-8 text-warning-500" />,
          features: [
            'Priority image generation',
            'Fast support',
            'Access to all generated images'
          ],
          buttonText: 'Choose this',
          popular: true,
          bgGradient: 'from-warning-50 to-warning-100'
        },
        {
          name: 'Professional',
          icon: <Crown className="w-8 h-8 text-accent-500" />,
          features: [
            'Priority image generation',
            'Fast support',
            'Access to all generated images'
          ],
          buttonText: 'Choose this',
          popular: false,
          bgGradient: 'from-accent-50 to-accent-100'
        }
      ],
      howItWorks: {
        title: '💡 How does the credit system work?',
        steps: [
          {
            title: 'Buy credits',
            description: 'Choose the plan that best fits your needs'
          },
          {
            title: 'Use 1 credit per image',
            description: 'Each transformed photo consumes only 1 credit'
          },
          {
            title: 'Download your creations',
            description: 'Unlimited access to all your generated images'
          }
        ]
      },
      trustIndicators: {
        included: '✅ All plans include full platform access',
        details: `💳 Prices in ${getCurrencySymbol(currency)} • 🔒 Secure payment • ❌ No hidden fees or subscriptions`
      },
      popularBadge: '⭐ MOST POPULAR ⭐'
    }
  };

  const currentData = pricingData[language] || pricingData['en'];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {currentData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {currentData.subtitle}
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <Await resolve={plans} errorElement={<div className='text-center text-red-500'>Error loading prices</div>}>
            {(data) => data.plans.map((plan: any, index: any) => (
              <div
                key={`plan-${plan.name}-${index}`}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
                  }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-center py-3 text-sm font-bold">
                    {currentData.popularBadge}
                  </div>
                )}

                <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                  {/* Icon with gradient background */}
                  <div className={`flex items-center justify-center mb-6`}>
                    <div className={`p-4 rounded-full bg-gradient-to-br ${currentData.plans[index]?.bgGradient}`}>
                      {currentData.plans[index]?.icon}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="text-center">
                    <p className="text-5xl font-bold text-gray-900 mb-2">{formatCurrency(plan.price.unitAmount, plan.price.currency)}</p>
                    <p className="text-gray-500 text-sm mb-1">{formatCurrency(plan.price.unitAmount / plan.plan.credits, plan.price.currency)} por crédito</p>
                    <p className="text-primary-600 font-semibold bg-primary-50 px-3 py-1 rounded-full inline-block">
                      {plan.plan.credits === 1 ? '1 Crédito = 1 Imagem' : `${plan.plan.credits} Créditos = ${plan.plan.credits} Imagens`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Await>
        </div>

        {/* Additional info */}
        <div
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-md p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {currentData.howItWorks.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {currentData.howItWorks.steps.map((step, index) => (
                <div key={`step-${index}`} className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-2 mr-3 mt-1">
                    <span className="text-primary-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-2">
            {currentData.trustIndicators.included}
          </p>
          <p className="text-sm text-gray-500">
            {currentData.trustIndicators.details}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;