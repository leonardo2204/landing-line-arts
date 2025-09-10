import { Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useLoaderData } from 'react-router';
import posthog from 'posthog-js';

const formatCurrency = (amount: number, currency: string) => {
  // Map currency codes to locale strings for proper formatting
  const currencyLocaleMap: Record<string, string> = {
    'eur': 'en-GB',
    'usd': 'en-US',
    'brl': 'pt-BR',
  };

  const locale = currencyLocaleMap[currency] || 'en-US';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency.toUpperCase()
  }).format(amount / 100);
}

const getCurrencySymbol = (currency: string) => {
  const symbols: Record<string, string> = {
    'eur': '€',
    'usd': '$',
    'brl': 'R$'
  };
  return symbols[currency] || '€';
}

const Pricing = () => {
  const { language } = useLanguage();
  const { plans, currency } = useLoaderData();

  // Pricing data for both languages
  const pricingData = {
    'pt-BR': {
      title: 'Planos e preços',
      subtitle: 'Escolha o plano ideal para suas necessidades',
      features: [
        'Modelos de IA avançado',
        'Suporte por e-mail',
        'Acesso a todas as imagens geradas',
        'Geração de adesivos personalizados'
      ],
      newFeature: 'Novo: adesivos!',
      buttonText: 'Começar agora',
      howItWorks: {
        title: 'Como funciona o sistema de créditos',
        steps: [
          {
            title: 'Compre créditos',
            description: 'Escolha o plano que melhor se adapta às suas necessidades'
          },
          {
            title: 'Use créditos por imagem ou adesivo',
            description: 'Cada foto transformada consome apenas 2 créditos. Adesivos somente 1!'
          },
          {
            title: 'Baixe suas criações',
            description: 'Acesso ilimitado a todas as suas imagens geradas'
          }
        ]
      },
      trustIndicators: {
        included: 'Todos os planos incluem acesso completo à plataforma',
        details: `Preços em ${getCurrencySymbol(currency)} • Pagamento seguro • Sem taxas ocultas`
      },
      popularBadge: 'Mais popular',
      creditsLabel: 'por crédito',
      creditsImage: '{1} créditos'
    },
    'en': {
      title: 'Plans and pricing',
      subtitle: 'Choose the ideal plan for your needs',
      features: [
        'Advanced AI models',
        'Email support',
        'Access to all generated images',
        'Custom sticker generation'
      ],
      newFeature: 'New: stickers!',
      buttonText: 'Get started',
      howItWorks: {
        title: 'How the credit system works',
        steps: [
          {
            title: 'Buy credits',
            description: 'Choose the plan that best fits your needs'
          },
          {
            title: 'Use credits per image or stickers',
            description: 'Each transformed photo consumes only 2 credits. Stickers only 1!'
          },
          {
            title: 'Download your creations',
            description: 'Unlimited access to all your generated images'
          }
        ]
      },
      trustIndicators: {
        included: 'All plans include full platform access',
        details: `Prices in ${getCurrencySymbol(currency)} • Secure payment • No hidden fees`
      },
      popularBadge: 'Most popular',
      creditsLabel: 'per credit',
      creditsImage: '{1} credits'
    }
  };

  const currentData = pricingData[language] || pricingData['en'];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {currentData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {currentData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans?.plans?.map((plan: any, planIndex: number) => {
            const isPopular = planIndex === Math.floor(plans.plans.length / 2);
            return (
              <div
                key={`plan-${plan.name}-${planIndex}`}
                className={`relative bg-white rounded-xl shadow-lg border transition-all duration-200 hover:shadow-xl ${
                  isPopular ? 'border-primary-500 ring-1 ring-primary-500' : 'border-gray-200'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-900 text-white text-sm font-medium px-3 py-1 rounded-full">
                      {currentData.popularBadge}
                    </span>
                  </div>
                )}

                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {formatCurrency(plan.price.unitAmount, plan.price.currency)}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {formatCurrency(plan.price.unitAmount / plan.plan.credits, plan.price.currency)} {currentData.creditsLabel}
                    </div>
                    <div className="text-primary-600 font-medium mt-2">
                      {currentData.creditsImage.replace('{1}', plan.plan.credits.toString())}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {currentData.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://app.mylinearts.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                      isPopular
                        ? 'bg-primary-500 text-white hover:bg-primary-600'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                    onClick={() => {
                      posthog.capture('pricing_page_button_clicked', {
                        plan: plan.name,
                        price: plan.price.unitAmount,
                        currency: plan.price.currency,
                        credits: plan.plan.credits,
                      });
                    }}
                  >
                    {currentData.buttonText}
                  </a>
                </div>
              </div>
            );
          }) || <div className='text-center text-red-500'>Error loading prices</div>}
        </div>

        {/* How it works */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {currentData.howItWorks.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentData.howItWorks.steps.map((step, stepIndex) => (
                <div key={stepIndex} className="text-center">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-medium">
                    {stepIndex + 1}
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-12 space-y-2">
          <p className="text-gray-700 font-medium">
            {currentData.trustIndicators.included}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;