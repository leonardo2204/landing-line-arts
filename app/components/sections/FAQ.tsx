import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

// FAQ data kept here for easy editing; also used for the home page FAQPage schema
export const faqData = {
  'pt-BR': {
    title: 'Perguntas frequentes',
    subtitle: 'Obtenha respostas para perguntas comuns sobre nosso processo de criação de páginas para colorir',
    questions: [
      {
        question: 'Como transformar uma foto em desenho para colorir?',
        answer: 'Entre no app, envie sua foto e a nossa IA cria o desenho para colorir em segundos. Depois é só baixar em alta resolução e imprimir.'
      },
      {
        question: 'Quanto custa?',
        answer: 'Você compra créditos: cada foto transformada em desenho usa 2 créditos e cada adesivo usa 1. Os planos estão na seção de preços desta página.'
      },
      {
        question: 'Quanto tempo leva para converter minhas fotos?',
        answer: 'Nossa tecnologia de IA geralmente transforma suas fotos em páginas para colorir em 30-60 segundos por imagem, dependendo da complexidade.'
      },
      {
        question: 'Que tipo de fotos funcionam melhor?',
        answer: 'Fotos com assuntos claros, boa iluminação e fundo com pouca interferência funcionam melhor. No entanto, nossa IA é projetada para lidar com uma grande variedade de imagens.'
      },
      {
        question: 'Posso editar as páginas para colorir depois de criadas?',
        answer: 'Não, você não pode editar as páginas para colorir após serem geradas. Se não estiver satisfeito com o resultado, será necessário gerar uma nova imagem usando outro crédito.'
      },
      {
        question: 'Como recebo meu desenho?',
        answer: 'Você poderá fazer o download em PNG de alta resolução, prontos para impressão em casa, gráfica ou até para uso digital (como fundo de tela, por exemplo). Se desejar receber sua arte em casa, entre em contato com o nosso time.'
      },
      {
        question: 'Dá para fazer um livro de colorir personalizado?',
        answer: 'Sim. Gere uma página para cada foto e monte o seu livro para imprimir, ou fale com a gente pelo WhatsApp para receber o livro impresso.'
      },
      {
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
        question: 'How do I turn a photo into a coloring page?',
        answer: 'Open the app, upload your photo and our AI creates the coloring page in seconds. Then download it in high resolution and print.'
      },
      {
        question: 'How much does it cost?',
        answer: 'You buy credits: each photo turned into a coloring page uses 2 credits and each sticker uses 1. Plans are listed in the pricing section of this page.'
      },
      {
        question: 'How long does it take to convert my photos?',
        answer: 'Our AI technology typically transforms your photos into coloring pages within 30-60 seconds per image, depending on complexity.'
      },
      {
        question: 'What type of photos work best?',
        answer: 'Photos with clear subjects, good lighting, and minimal background clutter work best. However, our AI is designed to handle a wide variety of images.'
      },
      {
        question: 'Can I edit the coloring pages after they\'re created?',
        answer: 'No, you cannot edit the coloring pages after they\'re generated. If you\'re not satisfied with the result, you\'ll need to generate a new image using another credit.'
      },
      {
        question: 'How do I receive my drawing?',
        answer: 'You can download high-resolution PNG files, ready for printing at home, in print shops or even for digital use (as a desktop background, for example). If you would like to receive your artwork at home, please contact our team.'
      },
      {
        question: 'Can I make a custom coloring book?',
        answer: 'Yes. Generate one page per photo and put your book together to print, or message us on WhatsApp to get a printed book delivered.'
      },
      {
        question: 'Can I give the illustration as a gift to someone?',
        answer: 'Yes! Many people use MyLineArts to give gifts to mothers, grandmothers, couples, friends or even children. You can add a dedication and choose a special format.'
      }
    ]
  }
};

const FAQ = ({ questions }: { questions?: { question: string; answer: string }[] }) => {
  const { language } = useLanguage();
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
          {/* Native details keeps answers in the HTML for crawlers; same name = one open at a time */}
          {(questions || currentFaq.questions).map((faq) => (
            <details key={faq.question} name="faq" className="group mb-4">
              <summary className="flex justify-between items-center w-full p-5 text-left rounded-lg cursor-pointer list-none [&::-webkit-details-marker]:hidden bg-gray-50 hover:bg-gray-100 text-gray-800 group-open:bg-primary-100 group-open:text-primary-800 transition-colors duration-200">
                <h3 className="font-medium text-lg">{faq.question}</h3>
                <Plus className="h-5 w-5 shrink-0 group-open:hidden" />
                <Minus className="h-5 w-5 shrink-0 hidden group-open:block" />
              </summary>
              <div className="p-5 bg-gray-50 rounded-b-lg border-t border-gray-100">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
