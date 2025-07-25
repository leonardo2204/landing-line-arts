import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router';

type Language = 'en' | 'pt-BR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  'en': {
    'nav.howItWorks': 'How it works',
    'nav.benefits': 'Benefits',
    'nav.pricing': 'Pricing',
    'nav.faq': 'FAQ',
    'nav.getStarted': 'Get started',
    'nav.joinWaitlist': 'Join waitlist',
    'footer.product': 'Product',
    'footer.support': 'Support',
    'footer.legal': 'Legal',
    'footer.examples': 'Examples',
    'footer.contactUs': 'Contact us',
    'footer.helpCenter': 'Help center',
    'footer.tutorials': 'Tutorials',
    'footer.privacyPolicy': 'Privacy policy',
    'footer.termsOfService': 'Terms of service',
    'footer.cookiePolicy': 'Cookie policy',
    'footer.gdpr': 'GDPR',
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Made with',
    'footer.colorful': 'for colorful moments',
    'landing.hero.title': 'Transform your photos into beautiful',
    'landing.hero.titleHighlight': 'coloring books',
    'landing.hero.subtitle': 'Our AI technology turns your favorite photos into personalized coloring pages, creating unique, memorable experiences for all ages.',
    'landing.seeTheMagic': 'See the magic in action',
    'landing.seeTheMagicSubtitle': 'Swipe to see how our AI transforms ordinary photos into extraordinary coloring pages',
    'landing.pricing.title': 'Simple, transparent pricing',
    'landing.pricing.subtitle': 'Create your personalized coloring book with our easy-to-understand pricing',
    'landing.features.title': "What's included:",
    'landing.features.transform': 'Transform up to 20 photos',
    'landing.features.quality': 'High-quality line art conversion',
    'landing.features.cover': 'Custom cover design',
    'landing.features.download': 'Digital PDF download',
    'landing.features.print': 'Print-ready format',
    'landing.features.commercial': 'Commercial use license',
    'landing.cta.title': 'Ready to create your custom coloring book?',
    'landing.cta.subtitle': 'Start with just one photo and see the magic happen. Then create a full 20-page personalized coloring book with your favorite memories.',
    'landing.cta.button': 'Create your coloring book',
    'waitlist.title': 'Join our waitlist',
    'waitlist.subtitle': 'Be the first to know when our AI coloring book creator launches',
    'waitlist.comingSoon': 'Coming soon!',
    'waitlist.description': "We're putting the finishing touches on our AI-powered coloring book creator. Join our waitlist to:",
    'waitlist.benefits.earlyAccess': 'Get early access when we launch',
    'waitlist.benefits.discount': 'Receive a special discount on your first coloring book',
    'waitlist.benefits.features': 'Be the first to try new features',
    'pricing.addons.title': 'Optional add-ons',
    'pricing.addons.printing': 'Professional printing',
    'pricing.addons.printing.description': 'Get your coloring book professionally printed and bound',
    'pricing.addons.rush': 'Rush processing',
    'pricing.addons.rush.description': 'Get your digital coloring book within 2 hours',
    'pricing.addons.pages': 'Extra pages',
    'pricing.addons.pages.description': 'Add more pages to your coloring book',
    'pricing.needMore.title': 'Need more?',
    'pricing.needMore.subtitle': 'Contact us for custom packages, bulk orders, or special requirements',
    'pricing.needMore.button': 'Contact sales',
    'howItWorks.title': 'How it works',
    'howItWorks.subtitle': 'Create your custom coloring book in just a few simple steps',
    'howItWorks.steps.upload.title': 'Upload your photos',
    'howItWorks.steps.upload.description': 'Select and upload your favorite photos to be transformed.',
    'howItWorks.steps.preview.title': 'Preview & customize',
    'howItWorks.steps.preview.description': 'See how your photos will look as coloring pages and make adjustments.',
    'howItWorks.steps.purchase.title': 'Purchase your book',
    'howItWorks.steps.purchase.description': 'Complete your purchase to create your personalized coloring book.',
    'howItWorks.steps.enjoy.title': 'Color & enjoy',
    'howItWorks.steps.enjoy.description': 'Print your coloring book at home or have it professionally printed and shipped.',
    'benefits.title': 'The benefits of MylineArts',
    'benefits.subtitle': 'Why create a personalized coloring book with us?',
    'benefits.personal.title': 'Personalized experience',
    'benefits.personal.description': 'Create coloring pages from your own photos for a truly personal experience',
    'benefits.fast.title': 'Fast & easy',
    'benefits.fast.description': 'Our AI transforms your photos into coloring pages in seconds',
    'benefits.creative.title': 'Creative fun',
    'benefits.creative.description': 'Enjoy hours of creative relaxation coloring your personal memories',
    'benefits.family.title': 'Perfect for families',
    'benefits.family.description': 'Create enjoyable activities for children and adults of all ages',
    'benefits.gift.title': 'Unique gift',
    'benefits.gift.description': 'Give a one-of-a-kind gift that\'s personal and thoughtful',
    'benefits.quality.title': 'High quality',
    'benefits.quality.description': 'Premium quality line art that\'s perfect for coloring',
    'landing.pricing.customBook': 'Custom coloring book',
    'landing.pricing.transform': 'Transform your photos into a beautiful coloring book',
    'landing.pricing.oneTime': 'One-time purchase',
    'landing.pricing.viewDetails': 'View full pricing details',
    'faq.title': 'Frequently asked questions',
    'faq.subtitle': 'Get answers to common questions about our coloring book creation process',
    'faq.time.question': 'How long does it take to convert my photos?',
    'faq.time.answer': 'Our AI technology typically transforms your photos into coloring pages within 30-60 seconds per image, depending on complexity.',
    'faq.photos.question': 'What type of photos work best?',
    'faq.photos.answer': 'Photos with clear subjects, good lighting, and minimal background clutter work best. However, our AI is designed to handle a wide variety of images.',
    'faq.edit.question': 'Can I edit the coloring pages after they\'re created?',
    'faq.edit.answer': 'No, you cannot edit the coloring pages after they\'re generated. If you\'re not satisfied with the result, you\'ll need to generate a new image using another credit.',
    'faq.text.question': 'Can I include text or captions with my coloring pages?',
    'faq.text.answer': 'Yes, you can add custom titles, captions, or messages to each page of your coloring book during the creation process.',
    'not-found.title': 'Page Not Found',
    'not-found.description': 'Sorry, we couldn\'t find the page you\'re looking for.',
    'not-found.button': 'Back to Home'
  },
  'pt-BR': {
    'nav.howItWorks': 'Como funciona',
    'nav.benefits': 'Benefícios',
    'nav.pricing': 'Preços',
    'nav.faq': 'Dúvidas',
    'nav.getStarted': 'Começar',
    'nav.joinWaitlist': 'Entrar na lista',
    'footer.product': 'Produto',
    'footer.support': 'Suporte',
    'footer.legal': 'Legal',
    'footer.examples': 'Exemplos',
    'footer.contactUs': 'Fale conosco',
    'footer.helpCenter': 'Central de ajuda',
    'footer.tutorials': 'Tutoriais',
    'footer.privacyPolicy': 'Política de privacidade',
    'footer.termsOfService': 'Termos de serviço',
    'footer.cookiePolicy': 'Política de cookies',
    'footer.gdpr': 'LGPD',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.madeWith': 'Feito com',
    'footer.colorful': 'para momentos coloridos',
    'landing.hero.title': 'Transforme suas fotos em lindos',
    'landing.hero.titleHighlight': 'livros de colorir',
    'landing.hero.subtitle': 'Nossa tecnologia de IA transforma suas fotos favoritas em páginas para colorir personalizadas, criando experiências únicas e memoráveis para todas as idades. E o melhor, é só imprimir e colorir!',
    'landing.seeTheMagic': 'Veja a mágica acontecer',
    'landing.seeTheMagicSubtitle': 'Deslize para ver como nossa IA transforma fotos comuns em extraordinárias páginas para colorir',
    'landing.pricing.title': 'Preços simples e transparentes',
    'landing.pricing.subtitle': 'Crie seu livro de colorir personalizado com nossa precificação fácil de entender',
    'landing.features.title': 'O que está incluído:',
    'landing.features.transform': 'Transforme até 20 fotos',
    'landing.features.quality': 'Conversão em arte linear de alta qualidade',
    'landing.features.cover': 'Design de capa personalizado',
    'landing.features.download': 'Download em PDF digital',
    'landing.features.print': 'Formato pronto para impressão',
    'landing.features.commercial': 'Licença de uso comercial',
    'landing.cta.title': 'Pronto para criar seu livro de colorir personalizado?',
    'landing.cta.subtitle': 'Comece com uma foto e veja a mágica acontecer. Depois crie um livro de colorir personalizado completo com 20 páginas de suas memórias favoritas.',
    'landing.cta.button': 'Criar seu livro de colorir',
    'waitlist.title': 'Entre na nossa lista de espera',
    'waitlist.subtitle': 'Seja o primeiro a saber quando nosso criador de livros de colorir com IA for lançado',
    'waitlist.comingSoon': 'Em breve!',
    'waitlist.description': 'Estamos dando os últimos retoques em nosso criador de livros de colorir com IA. Entre na lista de espera para:',
    'waitlist.benefits.earlyAccess': 'Ter acesso antecipado quando lançarmos',
    'waitlist.benefits.discount': 'Receber um desconto especial no seu primeiro livro',
    'waitlist.benefits.features': 'Ser o primeiro a experimentar novos recursos',
    'pricing.addons.title': 'Adicionais opcionais',
    'pricing.addons.printing': 'Impressão profissional',
    'pricing.addons.printing.description': 'Receba seu livro de colorir impresso e encadernado profissionalmente',
    'pricing.addons.rush': 'Processamento rápido',
    'pricing.addons.rush.description': 'Receba seu livro digital em até 2 horas',
    'pricing.addons.pages': 'Páginas extras',
    'pricing.addons.pages.description': 'Adicione mais páginas ao seu livro de colorir',
    'pricing.needMore.title': 'Precisa de mais?',
    'pricing.needMore.subtitle': 'Entre em contato para pacotes personalizados, pedidos em quantidade ou requisitos especiais',
    'pricing.needMore.button': 'Falar com vendas',
    'howItWorks.title': 'Como funciona',
    'howItWorks.subtitle': 'Crie seu livro de colorir personalizado em apenas alguns passos simples',
    'howItWorks.steps.upload.title': 'Envie suas fotos',
    'howItWorks.steps.upload.description': 'Selecione e envie suas fotos favoritas para serem transformadas.',
    'howItWorks.steps.preview.title': 'Visualize e personalize',
    'howItWorks.steps.preview.description': 'Veja como suas fotos ficarão como páginas para colorir e faça ajustes.',
    'howItWorks.steps.purchase.title': 'Compre seu livro',
    'howItWorks.steps.purchase.description': 'Complete sua compra para criar seu livro de colorir personalizado.',
    'howItWorks.steps.enjoy.title': 'Pinte e aproveite',
    'howItWorks.steps.enjoy.description': 'Imprima seu livro de colorir em casa ou peça a impressão profissional e envio.',
    'benefits.title': 'Os benefícios do MylineArts',
    'benefits.subtitle': 'Por que criar um livro de colorir personalizado conosco?',
    'benefits.personal.title': 'Experiência personalizada',
    'benefits.personal.description': 'Crie páginas para colorir a partir de suas próprias fotos para uma experiência verdadeiramente pessoal',
    'benefits.fast.title': 'Rápido & fácil',
    'benefits.fast.description': 'Nossa IA transforma suas fotos em páginas para colorir em segundos',
    'benefits.creative.title': 'Diversão criativa',
    'benefits.creative.description': 'Aproveite horas de relaxamento criativo colorindo suas memórias pessoais',
    'benefits.family.title': 'Perfeito para famílias',
    'benefits.family.description': 'Crie atividades divertidas para crianças e adultos de todas as idades',
    'benefits.gift.title': 'Presente único',
    'benefits.gift.description': 'Dê um presente único que é pessoal e significativo',
    'benefits.quality.title': 'Alta qualidade',
    'benefits.quality.description': 'Arte linear de qualidade premium perfeita para colorir',
    'landing.pricing.customBook': 'Livro de colorir personalizado',
    'landing.pricing.transform': 'Transforme suas fotos em um lindo livro de colorir',
    'landing.pricing.oneTime': 'Compra única',
    'landing.pricing.viewDetails': 'Ver detalhes completos de preços',
    'faq.title': 'Perguntas frequentes',
    'faq.subtitle': 'Obtenha respostas para perguntas comuns sobre nosso processo de criação de livros de colorir',
    'faq.time.question': 'Quanto tempo leva para converter minhas fotos?',
    'faq.time.answer': 'Nossa tecnologia de IA geralmente transforma suas fotos em páginas para colorir em 30-60 segundos por imagem, dependendo da complexidade.',
    'faq.photos.question': 'Que tipo de fotos funcionam melhor?',
    'faq.photos.answer': 'Fotos com assuntos claros, boa iluminação e fundo com pouca interferência funcionam melhor. No entanto, nossa IA é projetada para lidar com uma grande variedade de imagens.',
    'faq.edit.question': 'Posso editar as páginas para colorir depois de criadas?',
    'faq.edit.answer': 'Não, você não pode editar as páginas para colorir após serem geradas. Se não estiver satisfeito com o resultado, será necessário gerar uma nova imagem usando outro crédito.',
    'faq.text.question': 'Posso incluir texto ou legendas nas páginas para colorir?',
    'faq.text.answer': 'Sim, você pode adicionar títulos personalizados, legendas ou mensagens em cada página do seu livro de colorir durante o processo de criação.',
    'not-found.title': 'Página não encontrada',
    'not-found.description': 'Desculpe, não encontramos a página que você está procurando.',
    'not-found.button': 'Voltar para a página inicial'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  // Detect language from URL path
  const detectLanguageFromPath = (pathname: string): Language => {
    return pathname.startsWith('/en') ? 'en' : 'pt-BR';
  };

  const [language, setLanguage] = useState<Language>(() =>
    detectLanguageFromPath(location.pathname)
  );

  // Update language when URL changes
  useEffect(() => {
    const detectedLanguage = detectLanguageFromPath(location.pathname);
    setLanguage(detectedLanguage);
  }, [location.pathname]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};