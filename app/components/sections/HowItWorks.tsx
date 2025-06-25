import { Upload, Eye, CreditCard, Printer } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const HowItWorks = () => {
  const { language } = useLanguage();

  // Textos editáveis da seção "Como funciona"
  const howItWorksData = {
    'pt-BR': {
      title: 'Como funciona',
      subtitle: 'Crie seu livro de colorir personalizado em apenas alguns passos simples',
      steps: [
           {
          icon: <CreditCard className="w-12 h-12 text-primary-500" />,
          title: 'Compre seus créditos',
          description: 'Compre os créditos necessários para gerar quantas imagens quiser.'
        },
        {
          icon: <Upload className="w-12 h-12 text-primary-500" />,
          title: 'Envie suas fotos',
          description: 'Selecione e envie suas fotos favoritas para serem transformadas.'
        },
        {
          icon: <Eye className="w-12 h-12 text-primary-500" />,
          title: 'Visualize suas imagens',
          description: 'Veja como suas fotos ficarão como páginas para colorir.'
        },
        {
          icon: <Printer className="w-12 h-12 text-primary-500" />,
          title: 'Pinte e aproveite',
          description: 'Com suas imagens prontas, é só imprimir ou pintar digitalmente!'
        }
      ]
    },
    'en': {
      title: 'How it works',
      subtitle: 'Create your custom coloring book in just a few simple steps',
      steps: [
          {
          icon: <CreditCard className="w-12 h-12 text-primary-500" />,
          title: 'Purchase credits',
          description: 'Purchase the credits needed to generate as many images as you want.'
        },
        {
          icon: <Upload className="w-12 h-12 text-primary-500" />,
          title: 'Upload your photos',
          description: 'Select and upload your favorite photos to be transformed.'
        },
        {
          icon: <Eye className="w-12 h-12 text-primary-500" />,
          title: 'Preview images',
          description: 'See how your photos will look as coloring pages.'
        },
        {
          icon: <Printer className="w-12 h-12 text-primary-500" />,
          title: 'Color & enjoy',
          description: 'With your images ready, just print or paint digitally!'
        }
      ]
    }
  };

  const currentData = howItWorksData[language] || howItWorksData['pt-BR'];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {currentData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {currentData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentData.steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center relative"
            >
              <div className="w-24 h-24 flex items-center justify-center bg-primary-100 rounded-full mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < currentData.steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <svg className="w-8 h-8 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;