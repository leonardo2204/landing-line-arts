import React from 'react';
import { Link } from 'react-router';
import posthog from 'posthog-js';
import type { BlogPostContent } from '../types';

// Content component for Custom Stickers guide
const CustomStickersContent: React.FC<{ language: 'en' | 'pt-BR' }> = ({ language }) => {
  const getLanguagePrefix = () => {
    return language === 'en' ? '/en' : '';
  };

  const handleCTAClick = (ctaName: string) => {
    posthog.capture('blog_cta_clicked', {
      cta_name: ctaName,
      language: language,
      page: 'blog_post'
    });
  };

  return (
    <>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? 'The new era of custom stickers 🎨' : 'A nova era dos adesivos personalizados 🎨'}
        </h2>
        <p className="text-lg mb-4">
          {language === 'en'
            ? 'In a digital world where personal expression is everything, custom stickers have become an essential form of creative communication. Whether for WhatsApp, Telegram, decoration or special gifts, the ability to transform your favorite photos into unique stickers represents a true revolution in digital personalization.'
            : 'Em um mundo digital onde a expressão pessoal é tudo, os adesivos personalizados tornaram-se uma forma essencial de comunicação criativa. Seja para WhatsApp, Telegram, decoração ou presentes especiais, a capacidade de transformar suas fotos favoritas em stickers únicos representa uma verdadeira revolução na personalização digital.'
          }
        </p>
        <p className="text-lg mb-4">
          {language === 'en'
            ? 'With MyLineArts, this transformation is now easier and more accessible than ever. Our artificial intelligence technology converts any photo into custom stickers while preserving the essence and emotions of your most precious memories.'
            : 'Com o MyLineArts, essa transformação agora é mais fácil e acessível do que nunca. Nossa tecnologia de inteligência artificial converte qualquer foto em adesivos personalizados preservando a essência e as emoções das suas memórias mais preciosas.'
          }
        </p>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg my-8 border border-purple-100">
          <h3 className="text-xl font-bold mb-4">
            {language === 'en' ? 'Create your stickers now with MyLineArts ✨' : 'Crie seus adesivos agora com MyLineArts ✨'}
          </h3>
          <p className="mb-4">
            {language === 'en'
              ? 'Transform your favorite photos into incredible custom stickers in seconds! Our platform uses cutting-edge AI to create unique stickers that capture every detail and emotion of your memories.'
              : 'Transforme suas fotos favoritas em adesivos personalizados incríveis em segundos! Nossa plataforma usa IA de ponta para criar stickers únicos que capturam cada detalhe e emoção das suas memórias.'
            }
          </p>
          <Link
            to={`${getLanguagePrefix()}/`}
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            onClick={() => handleCTAClick('criar_adesivos_agora')}
          >
            {language === 'en' ? 'Create My Stickers Now' : 'Criar Meus Adesivos Agora'}
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? 'Perfect for every occasion 🌟' : 'Perfeito para todas as ocasiões 🌟'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">
              {language === 'en' ? 'WhatsApp & Telegram' : 'WhatsApp e Telegram'}
            </h3>
            <p className="text-gray-700">
              {language === 'en'
                ? 'Express yourself in a unique way in your conversations. Create stickers of your family, pets, special moments and make every chat more personal and fun.'
                : 'Expresse-se de forma única nas suas conversas. Crie stickers da sua família, pets, momentos especiais e torne cada conversa mais pessoal e divertida.'
              }
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700">
              {language === 'en' ? 'Decoration & crafts' : 'Decoração e artesanato'}
            </h3>
            <p className="text-gray-700">
              {language === 'en'
                ? 'Decorate your laptop, phone, notebook or any surface with stickers that tell your story. Perfect for scrapbooks, planners and creative projects.'
                : 'Decore seu laptop, celular, caderno ou qualquer superfície com adesivos que contam sua história. Perfeito para scrapbooks, planejadores e projetos criativos.'
              }
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-pink-500">
            <h3 className="text-xl font-semibold mb-3 text-pink-700">
              {language === 'en' ? 'Water bottles & Stanley cups' : 'Garrafas de água e copos Stanley'}
            </h3>
            <p className="text-gray-700">
              {language === 'en'
                ? 'Join the latest trend! Personalize your Stanley cups, Tuyo bottles and water bottles with custom stickers. Create unique designs that reflect your personality and make your hydration game stand out.'
                : 'Entre na nova tendência! Personalize seus copos Stanley, garrafas Tuyo e garrafas de água com adesivos personalizados. Crie designs únicos que refletem sua personalidade e se destaque na hora da hidratação.'
              }
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold mb-3 text-purple-700">
              {language === 'en' ? 'Special gifts' : 'Presentes especiais'}
            </h3>
            <p className="text-gray-700">
              {language === 'en'
                ? 'Create meaningful gifts that go beyond the ordinary. Personalized stickers of shared memories make perfect gifts for birthdays, anniversaries and special occasions.'
                : 'Crie presentes significativos que vão além do comum. Adesivos personalizados de memórias compartilhadas são presentes perfeitos para aniversários, comemorações e ocasiões especiais.'
              }
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? 'How our AI creates magic ⚡' : 'Como nossa IA cria mágica ⚡'}
        </h2>
        <p className="text-lg mb-6">
          {language === 'en'
            ? 'The process of transforming photos into stickers may seem complex, but with MyLineArts it\'s incredibly simple and fast. Our artificial intelligence was specially trained to understand the nuances of each image and create stickers that preserve all the personality and emotions of the original photo.'
            : 'O processo de transformar fotos em adesivos pode parecer complexo, mas com o MyLineArts é incrivelmente simples e rápido. Nossa inteligência artificial foi especialmente treinada para entender as nuances de cada imagem e criar stickers que preservam toda a personalidade e emoções da foto original.'
          }
        </p>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl mb-8 border border-blue-100">
          <h3 className="text-xl font-bold mb-6 text-center">
            {language === 'en' ? 'Step by step process 🚀' : 'Processo passo a passo 🚀'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">1</div>
              <h4 className="font-semibold mb-2">
                {language === 'en' ? 'Upload your photo' : 'Envie sua foto'}
              </h4>
              <p className="text-sm text-gray-600">
                {language === 'en' ? 'Select your favorite image' : 'Selecione sua imagem favorita'}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">2</div>
              <h4 className="font-semibold mb-2">
                {language === 'en' ? 'AI processing' : 'Processamento IA'}
              </h4>
              <p className="text-sm text-gray-600">
                {language === 'en' ? 'Our AI analyzes and optimizes' : 'Nossa IA analisa e otimiza'}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">3</div>
              <h4 className="font-semibold mb-2">
                {language === 'en' ? 'Instant generation' : 'Geração instantânea'}
              </h4>
              <p className="text-sm text-gray-600">
                {language === 'en' ? 'Your sticker is created in seconds' : 'Seu sticker é criado em segundos'}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">4</div>
              <h4 className="font-semibold mb-2">
                {language === 'en' ? 'Download & use' : 'Baixe e use'}
              </h4>
              <p className="text-sm text-gray-600">
                {language === 'en' ? 'Ready to use anywhere!' : 'Pronto para usar em qualquer lugar!'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? 'Best practices for incredible stickers 💡' : 'Melhores práticas para stickers incríveis 💡'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-4 text-green-800">
              {language === 'en' ? '✅ What works best' : '✅ O que funciona melhor'}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span>{language === 'en' ? 'High resolution photos (minimum 300px)' : 'Fotos de alta resolução (mínimo 300px)'}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span>{language === 'en' ? 'Good lighting and clear subjects' : 'Boa iluminação e objetos claros'}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span>{language === 'en' ? 'Expressive faces and emotions' : 'Rostos expressivos e emoções'}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span>{language === 'en' ? 'Simple, uncluttered backgrounds' : 'Fundos simples e limpos'}</span>
              </li>
            </ul>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-semibold mb-4 text-orange-800">
              {language === 'en' ? '💭 Creative tips' : '💭 Dicas criativas'}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">•</span>
                <span>{language === 'en' ? 'Create series of related stickers' : 'Crie séries de adesivos relacionados'}</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">•</span>
                <span>{language === 'en' ? 'Use photos from special moments' : 'Use fotos de momentos especiais'}</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">•</span>
                <span>{language === 'en' ? 'Mix people, pets and objects' : 'Misture pessoas, pets e objetos'}</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">•</span>
                <span>{language === 'en' ? 'Have fun with the outputted stickers' : 'Divirta-se com os adesivos gerados'}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4 my-8">
          <img
            src="/blog/2/balao.jpeg"
            alt={language === 'en' ? 'Examples of high-quality stickers' : 'Exemplos de stickers de alta qualidade'}
            className="w-full h-96 object-cover rounded-lg shadow-md bg-gray-100"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? 'Beyond digital: printing your stickers 🖨️' : 'Além do digital: imprimindo seus adesivos 🖨️'}
        </h2>
        <p className="text-lg mb-6">
          {language === 'en'
            ? 'While digital stickers are perfect for messaging apps, you can also print your creations to use in the physical world. MyLineArts generates high-quality files that are perfect for printing on various materials.'
            : 'Embora os adesivos digitais sejam perfeitos para aplicativos de mensagem, você também pode imprimir suas criações para usar no mundo físico. O MyLineArts gera arquivos de alta qualidade que são perfeitos para impressão em vários materiais.'
          }
        </p>

        <div className="bg-purple-50 p-6 rounded-lg my-8 border border-purple-200">
          <h3 className="text-xl font-bold mb-4 text-purple-800">
            {language === 'en' ? 'Printing options and materials 📝' : 'Opções de impressão e materiais 📝'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">{language === 'en' ? 'Adhesive paper' : 'Papel adesivo'}</h4>
              <p className="text-sm text-gray-700">
                {language === 'en' ? 'Perfect for notebooks, laptops and smooth surfaces' : 'Perfeito para cadernos, laptops e superfícies lisas'}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{language === 'en' ? 'Vinyl' : 'Vinil'}</h4>
              <p className="text-sm text-gray-700">
                {language === 'en' ? 'Durable and weather resistant for outdoor use' : 'Durável e resistente ao tempo para uso externo'}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{language === 'en' ? 'Transparent film' : 'Película transparente'}</h4>
              <p className="text-sm text-gray-700">
                {language === 'en' ? 'Elegant finish for glass and acrylic surfaces' : 'Acabamento elegante para vidro e superfícies acrílicas'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? 'Real success stories 🌟' : 'Histórias reais de sucesso 🌟'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-pink-600 font-bold">M</span>
              </div>
              <div>
                <h4 className="font-semibold">Marina, 28</h4>
                <p className="text-sm text-gray-600">
                  {language === 'en' ? 'Graphic designer' : 'Designer gráfica'}
                </p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              {language === 'en'
                ? '"I created stickers of my cat for my WhatsApp and now all my friends want to know how I made them! MyLineArts made the process incredibly easy and the result is amazing."'
                : '"Criei adesivos do meu gato para o WhatsApp e agora todos os meus amigos querem saber como eu fiz! O MyLineArts tornou o processo incrivelmente fácil e o resultado é incrível."'
              }
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600 font-bold">C</span>
              </div>
              <div>
                <h4 className="font-semibold">Carlos, 35</h4>
                <p className="text-sm text-gray-600">
                  {language === 'en' ? 'Father of 2 children' : 'Pai de 2 filhos'}
                </p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              {language === 'en'
                ? '"I created a collection of family stickers for special occasions. My kids love using them in their school messages and it has become our family trademark!"'
                : '"Criei uma coleção de adesivos da família para ocasiões especiais. Meus filhos adoram usar nas mensagens da escola e virou nossa marca registrada familiar!"'
              }
            </p>
          </div>
        </div>

        <div className="flex gap-4 my-8">
          <img
            src="/blog/2/caramelo-sticker.png"
            alt={language === 'en' ? 'Family using custom stickers' : 'Família usando adesivos personalizados'}
            className="w-full h-96 object-cover rounded-lg shadow-md bg-gray-100"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? 'Start your creative journey today! 🎨' : 'Comece sua jornada criativa hoje! 🎨'}
        </h2>
        <p className="text-lg mb-6">
          {language === 'en'
            ? 'Custom stickers represent a new form of digital expression that connects us to our most precious memories in a fun and creative way. With MyLineArts, the process of transforming your photos into unique stickers is not only simple, but also incredibly satisfying.'
            : 'Os adesivos personalizados representam uma nova forma de expressão digital que nos conecta às nossas memórias mais preciosas de forma divertida e criativa. Com o MyLineArts, o processo de transformar suas fotos em stickers únicos não é apenas simples, mas também incrivelmente gratificante.'
          }
        </p>
        <p className="text-lg mb-8">
          {language === 'en'
            ? 'Whether to express yourself in conversations, decorate your personal objects or create meaningful gifts, custom stickers open up a world of creative possibilities. The only limit is your imagination!'
            : 'Seja para se expressar em conversas, decorar seus objetos pessoais ou criar presentes significativos, os adesivos personalizados abrem um mundo de possibilidades criativas. O único limite é sua imaginação!'
          }
        </p>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">
            {language === 'en' ? 'Ready to create your first stickers? ✨' : 'Pronto para criar seus primeiros adesivos? ✨'}
          </h3>
          <p className="text-lg mb-6 opacity-90">
            {language === 'en'
              ? 'Join thousands of people who are already transforming their memories into incredible custom stickers!'
              : 'Junte-se a milhares de pessoas que já estão transformando suas memórias em adesivos personalizados incríveis!'
            }
          </p>
          <Link
            to={`${getLanguagePrefix()}/`}
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            onClick={() => handleCTAClick('criar_primeiros_adesivos')}
          >
            {language === 'en' ? 'Start Creating Now' : 'Começar a Criar Agora'}
          </Link>
        </div>
      </section>
    </>
  );
};

export const customStickersContent: BlogPostContent = {
  slug: 'adesivos-personalizados-fotos-ia',
  title: {
    'pt-BR': 'Adesivos personalizados de fotos com IA: transforme memórias em arte adesiva',
    'en': 'Custom stickers from photos with AI: transform memories into adhesive art'
  },
  description: {
    'pt-BR': 'Descubra como criar adesivos personalizados únicos das suas fotos usando inteligência artificial. Perfeito para WhatsApp, Telegram, decoração e presentes especiais.',
    'en': 'Discover how to create unique custom stickers from your photos using artificial intelligence. Perfect for WhatsApp, Telegram, decoration and special gifts.'
  },
  date: '20 de setembro, 2025',
  readTime: {
    'pt-BR': '6 min de leitura',
    'en': '6 min read'
  },
  author: {
    name: 'Stefanie Szabo',
    image: '/blog/1/ste.jpeg'
  },
  bannerImage: '/blog/2/cindy-sticker-nobg.png',
  publishedTime: '2025-09-20T00:00:00Z',
  seoData: {
    'pt-BR': {
      title: 'Adesivos Personalizados de Fotos com IA | MyLineArts',
      description: 'Crie adesivos personalizados únicos das suas fotos com inteligência artificial. Perfeito para WhatsApp, Telegram, decoração e presentes. Transforme memórias em arte adesiva!',
      keywords: 'adesivos personalizados, stickers de fotos, adesivos IA, stickers WhatsApp, adesivos Telegram, arte personalizada, MyLineArts, adesivos de família, stickers pet, adesivos criativos, adesivos Stanley, stickers garrafa de água, adesivos Tuyo, personalizar Stanley',
      ogTitle: 'Adesivos Personalizados de Fotos com IA | Transforme Memórias em Arte',
      ogDescription: 'Crie adesivos personalizados únicos das suas fotos com inteligência artificial. Perfeito para WhatsApp, Telegram, decoração e presentes especiais.',
      twitterTitle: 'Adesivos Personalizados de Fotos com IA | MyLineArts',
      twitterDescription: 'Transforme suas fotos em adesivos únicos com IA. Perfeito para redes sociais, decoração e presentes especiais.',
      locale: 'pt_BR',
      language: 'Portuguese',
      hreflang: 'pt-br',
      price: '5.00',
      currency: 'BRL',
      canonical: 'https://mylinearts.com/blog/adesivos-personalizados-fotos-ia'
    },
    'en': {
      title: 'Custom Photo Stickers with AI | MyLineArts',
      description: 'Create unique custom stickers from your photos with artificial intelligence. Perfect for WhatsApp, Telegram, decoration and gifts. Transform memories into adhesive art!',
      keywords: 'custom stickers, photo stickers, AI stickers, WhatsApp stickers, Telegram stickers, personalized art, MyLineArts, family stickers, pet stickers, creative stickers, Stanley stickers, water bottle stickers, Tuyo stickers, customize Stanley cup',
      ogTitle: 'Custom Photo Stickers with AI | Transform Memories into Art',
      ogDescription: 'Create unique custom stickers from your photos with artificial intelligence. Perfect for WhatsApp, Telegram, decoration and special gifts.',
      twitterTitle: 'Custom Photo Stickers with AI | MyLineArts',
      twitterDescription: 'Transform your photos into unique stickers with AI. Perfect for social media, decoration and special gifts.',
      locale: 'en_US',
      language: 'English',
      hreflang: 'en',
      price: '2.00',
      currency: 'USD',
      canonical: 'https://mylinearts.com/en/blog/adesivos-personalizados-fotos-ia'
    }
  },
  content: CustomStickersContent
};
