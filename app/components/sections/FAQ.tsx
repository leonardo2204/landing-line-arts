import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { language } = useLanguage();

  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  // FAQ data directly in the component for easy editing
  const faqData = {
    'pt-BR': {
      title: 'Perguntas frequentes',
      subtitle: 'Obtenha respostas para perguntas comuns sobre nosso processo de criação de páginas para colorir',
      questions: [
        {
          id: '1',
          question: 'Quanto tempo leva para converter minhas fotos?',
          answer: 'Nossa tecnologia de IA geralmente transforma suas fotos em páginas para colorir em 30-60 segundos por imagem, dependendo da complexidade.'
        },
        {
          id: '2',
          question: 'Que tipo de fotos funcionam melhor?',
          answer: 'Fotos com assuntos claros, boa iluminação e fundo com pouca interferência funcionam melhor. No entanto, nossa IA é projetada para lidar com uma grande variedade de imagens.'
        },
        {
          id: '3',
          question: 'Posso editar as páginas para colorir depois de criadas?',
          answer: 'Não, você não pode editar as páginas para colorir após serem geradas. Se não estiver satisfeito com o resultado, será necessário gerar uma nova imagem usando outro crédito.'
        },
        {
          id: '4',
          question: 'Como recebo meu desenho?',
          answer: 'Você poderá fazer o download em PNG de alta resolução, prontos para impressão em casa, gráfica ou até para uso digital (como fundo de tela, por exemplo). Se desejar receber sua arte em casa, entre em contato com o nosso time.'
        },
        {
          id: '5',
          question: 'Posso presentear alguém com a ilustração?',
          answer: 'Sim! Muitas pessoas usam o MyLineArts para presentear mães, avós, casais, amigos ou até crianças. Você pode adicionar uma dedicatória e escolher um formato especial.'
        }
      ]
    },
    'en': {
      title: 'Frequently asked questions',
      subtitle: 'Get answers to common questions about our coloring page creation process',
      questions: [
        {
          id: '1',
          question: 'How long does it take to convert my photos?',
          answer: 'Our AI technology typically transforms your photos into coloring pages within 30-60 seconds per image, depending on complexity.'
        },
        {
          id: '2',
          question: 'What type of photos work best?',
          answer: 'Photos with clear subjects, good lighting, and minimal background clutter work best. However, our AI is designed to handle a wide variety of images.'
        },
        {
          id: '3',
          question: 'Can I edit the coloring pages after they\'re created?',
          answer: 'No, you cannot edit the coloring pages after they\'re generated. If you\'re not satisfied with the result, you\'ll need to generate a new image using another credit.'
        },
        {
          id: '4',
          question: 'How do I receive my drawing?',
          answer: 'You can download high-resolution PNG files, ready for printing at home, in print shops or even for digital use (as a desktop background, for example). If you would like to receive your artwork at home, please contact our team.'
        },
        {
          id: '5',
          question: 'Can I give the illustration as a gift to someone?',
          answer: 'Yes! Many people use MyLineArts to give gifts to mothers, grandmothers, couples, friends or even children. You can add a dedication and choose a special format.'
        }
      ]
    }
  };

  const currentFaq = faqData[language] || faqData['pt-BR'];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {currentFaq.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {currentFaq.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {currentFaq.questions.map((faq, index) => (
            <div
              key={faq.id}
              className="mb-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`flex justify-between items-center w-full p-5 text-left rounded-lg ${openIndex === index
                    ? 'bg-primary-100 text-primary-800'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-800'
                  } transition-colors duration-200`}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 shrink-0" />
                )}
              </button>

              <div>
                {openIndex === index && (
                  <div
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-gray-50 rounded-b-lg border-t border-gray-100">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;