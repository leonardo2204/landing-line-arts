import React from 'react';
import { Link } from 'react-router';
import posthog from 'posthog-js';
import type { BlogPostContent } from '../types';

// Content component for Crazy Hair Day guide
const CrazyHairContent: React.FC<{ language: 'en' | 'pt-BR' }> = ({ language }) => {
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
          {language === 'en' ? 'What is crazy hair day? 💡' : 'O que é o dia do cabelo maluco? 💡'}
        </h2>
        <p className="text-lg mb-4">
          {language === 'en'
            ? 'Crazy hair day is a creative celebration that happens in schools and themed events. Children show up with extravagant hairstyles, using temporary paints, styling gels, toys, ribbons and even everyday objects. It\'s an explosion of colors and shapes that stimulates imagination and promotes self-expression.'
            : 'O dia do cabelo maluco é uma celebração criativa que acontece em escolas e eventos temáticos. As crianças aparecem com penteados extravagantes, usando tintas temporárias, géis modeladores, brinquedos, laços e até objetos do cotidiano. É uma explosão de cores e formas que estimula a imaginação e promove a autoexpressão.'
          }
        </p>
        <p className="text-lg mb-4">
          {language === 'en'
            ? 'This fun tradition has become a fever in schools and children\'s parties, creating magical moments where creativity takes center stage. Parents and children join forces to create the most original and fun hairstyles, making this day a memorable experience for everyone.'
            : 'Essa tradição divertida virou febre nas escolas e festas infantis, criando momentos mágicos onde a criatividade toma conta. Pais e filhos unem forças para criar os penteados mais originais e divertidos, tornando esse dia uma experiência memorável para todos.'
          }
        </p>
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg my-8 border border-pink-100">
          <h3 className="text-xl font-bold mb-4">
            {language === 'en' ? 'Turn crazy hair into lasting art 🎨' : 'Transforme o cabelo maluco em arte duradoura 🎨'}
          </h3>
          <p className="mb-4">
            {language === 'en'
              ? 'At MyLineArts.com, you can immortalize your child\'s crazy hairstyle with a custom sticker or personalized coloring page. Transform this fun moment into a unique keepsake that will last forever!'
              : 'No MyLineArts.com, você pode eternizar o penteado maluco do seu filho(a) com um adesivo exclusivo ou uma imagem para colorir personalizada. Transforme esse momento divertido em uma lembrança única que durará para sempre!'
            }
          </p>
          <Link
            to={`${getLanguagePrefix()}/`}
            className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            onClick={() => handleCTAClick('criar_cabelo_maluco_agora')}
          >
            {language === 'en' ? 'Create My Crazy Hair Art Now' : 'Criar Minha Arte Agora'}
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? 'Creative ideas for crazy hair ✨' : 'Ideias criativas para cabelo maluco ✨'}
        </h2>
        <p className="text-lg mb-6">
          {language === 'en'
            ? 'Looking for inspiration? Here are some ideas that are always a hit at crazy hair day celebrations. These creative hairstyles not only entertain but can also become art!'
            : 'Se você está buscando inspiração, aqui vão algumas ideias que fazem sucesso nas celebrações do dia do cabelo maluco. Esses penteados criativos não só divertem, mas também podem virar arte!'
          }
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-500">
            <h3 className="text-xl font-semibold mb-3 text-pink-700">
              {language === 'en' ? 'Colorful hairstyles' : 'Penteados coloridos'}
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>{language === 'en' ? 'Rainbow hair: Use colorful sprays to create vibrant streaks' : 'Cabelo arco-íris: Use sprays coloridos para criar mechas vibrantes'}</li>
              <li>{language === 'en' ? 'Ice cream hair: Paper cones and pompoms become ice cream scoops on top of the head' : 'Cabelo com sorvetes: Cones de papel e pompons viram bolas de sorvete no topo da cabeça'}</li>
              <li>{language === 'en' ? 'Balloons or giant bows: Add volume and color with exaggerated accessories' : 'Balões ou laços gigantes: Adicione volume e cor com acessórios exagerados'}</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold mb-3 text-purple-700">
              {language === 'en' ? 'Themed hairstyles' : 'Penteados temáticos'}
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>{language === 'en' ? 'Dinosaur park hair: Mini toys and accessories create a Jurassic scene' : 'Cabelo parque dos dinossauros: Mini brinquedos e acessórios criam um cenário jurássico'}</li>
              <li>{language === 'en' ? 'Soda bottle hair: A fun and easy classic to assemble' : 'Cabelo com garrafa de refrigerante: Um clássico divertido e fácil de montar'}</li>
              <li>{language === 'en' ? 'Edible hair: Use candies, lollipops and other treats as decorations' : 'Cabelo comestível: Use doces, pirulitos e outras guloseimas como decoração'}</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4 my-8">
          <div className="w-full">
            <p className="text-sm text-gray-600 mb-2 italic">
              {language === 'en' ? 'Example of a creative crazy hair before transformation:' : 'Exemplo de um cabelo maluco criativo antes da transformação:'}
            </p>
            <img
              src="/blog/4/antes.jpeg"
              alt={language === 'en' ? 'Original crazy hair photo example' : 'Exemplo de foto original com cabelo maluco'}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? 'Transform the hairstyle into art 🎨' : 'Transforme o penteado em arte 🎨'}
        </h2>
        <p className="text-lg mb-6">
          {language === 'en'
            ? 'After the party, why not immortalize your child\'s crazy hairstyle with a creative gift? MyLineArts offers two amazing options to turn this special moment into lasting art.'
            : 'Depois da festa, que tal eternizar o penteado maluco do seu filho(a) com um presente criativo? O MyLineArts oferece duas opções incríveis para transformar esse momento especial em arte duradoura.'
          }
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">
              {language === 'en' ? '1. Custom sticker' : '1. Adesivo personalizado'}
            </h3>
            <p className="mb-4">
              {language === 'en'
                ? 'Send a photo of the crazy hairstyle and receive an exclusive sticker with the child\'s stylized face and hair. Perfect for sticking on notebooks, backpacks or even gifting to grandparents!'
                : 'Envie uma foto do penteado maluco e receba um adesivo exclusivo com o rosto e cabelo estilizado da criança. Ideal para colar em cadernos, mochilas ou até presentear os avós!'
              }
            </p>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="/blog/4/sticker.jpeg"
                alt={language === 'en' ? 'Custom crazy hair sticker example' : 'Exemplo de adesivo personalizado de cabelo maluco'}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">
              {language === 'en' ? '2. Personalized coloring page' : '2. Imagem para colorir personalizada'}
            </h3>
            <p className="mb-4">
              {language === 'en'
                ? 'Turn the hairstyle into a coloring drawing! The child can color their own crazy hair with pencils, markers or chalk. It\'s a fun way to relive the moment and stimulate even more creativity.'
                : 'Transforme o penteado em um desenho para colorir! A criança pode pintar seu próprio cabelo maluco com lápis, canetinhas ou giz. É uma forma divertida de reviver o momento e estimular ainda mais a criatividade.'
              }
            </p>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="/blog/4/sketch.jpeg"
                alt={language === 'en' ? 'Personalized sketch art coloring page example' : 'Exemplo de arte sketch para colorir personalizada'}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg my-8 border-l-4 border-yellow-500">
          <h3 className="text-xl font-bold mb-4">
            {language === 'en' ? 'Benefits of personalizing crazy hair art 🌟' : 'Benefícios de personalizar a arte do cabelo maluco 🌟'}
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>{language === 'en' ? 'Creates a lasting memory of a special moment' : 'Cria uma lembrança duradoura de um momento especial'}</li>
            <li>{language === 'en' ? 'Stimulates creativity through coloring' : 'Estimula a criatividade através da coloração'}</li>
            <li>{language === 'en' ? 'Perfect gift for family and friends' : 'Presente perfeito para familiares e amigos'}</li>
            <li>{language === 'en' ? 'Reinforces the child\'s identity and self-expression' : 'Reforça a identidade e autoexpressão da criança'}</li>
            <li>{language === 'en' ? 'Fun activity to do together as a family' : 'Atividade divertida para fazer em família'}</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? 'How it works on MyLineArts.com 🛒' : 'Como funciona no MyLineArts.com 🛒'}
        </h2>
        <p className="text-lg mb-6">
          {language === 'en'
            ? 'Transforming your child\'s crazy hair into personalized art is quick and easy. Follow these simple steps:'
            : 'Transformar o cabelo maluco do seu filho(a) em arte personalizada é rápido e fácil. Siga estes passos simples:'
          }
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-pink-600 mb-3">1</div>
            <h3 className="text-lg font-semibold mb-2">
              {language === 'en' ? 'Access' : 'Acesse'}
            </h3>
            <p className="text-sm">
              {language === 'en' ? 'Visit mylinearts.com' : 'Visite mylinearts.com'}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-purple-600 mb-3">2</div>
            <h3 className="text-lg font-semibold mb-2">
              {language === 'en' ? 'Upload' : 'Envie'}
            </h3>
            <p className="text-sm">
              {language === 'en' ? 'Send the crazy hair photo' : 'Envie a foto do penteado maluco'}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-blue-600 mb-3">3</div>
            <h3 className="text-lg font-semibold mb-2">
              {language === 'en' ? 'Choose' : 'Escolha'}
            </h3>
            <p className="text-sm">
              {language === 'en' ? 'Select sticker or coloring page' : 'Escolha entre adesivo ou desenho para colorir'}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-green-600 mb-3">4</div>
            <h3 className="text-lg font-semibold mb-2">
              {language === 'en' ? 'Download' : 'Baixe'}
            </h3>
            <p className="text-sm">
              {language === 'en' ? 'Download and enjoy!' : 'Faça o download e divirta-se!'}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-lg my-8">
          <h3 className="text-xl font-bold mb-4">
            {language === 'en' ? 'Ready to create? 🎨' : 'Pronto para criar? 🎨'}
          </h3>
          <p className="mb-4">
            {language === 'en'
              ? 'Crazy hair is more than a hairstyle: it\'s an expression of joy, creativity and identity. With MyLineArts.com, you transform this moment into art, memory and lasting fun. Explore, create and immortalize!'
              : 'O cabelo maluco é mais do que um penteado: é uma expressão de alegria, criatividade e identidade. Com MyLineArts.com, você transforma esse momento em arte, memória e diversão duradoura. Explore, crie e eternize!'
            }
          </p>
          <Link
            to={`${getLanguagePrefix()}/`}
            className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            onClick={() => handleCTAClick('criar_arte_cabelo_maluco')}
          >
            {language === 'en' ? 'Start Creating Now' : 'Começar a Criar Agora'}
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'en' ? 'Tips for the perfect crazy hair day 💡' : 'Dicas para o dia do cabelo maluco perfeito 💡'}
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-lg font-semibold mb-3">
            {language === 'en' ? 'Preparation tips:' : 'Dicas de preparação:'}
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>{language === 'en' ? 'Plan ahead: Think about the theme and gather materials in advance' : 'Planeje com antecedência: Pense no tema e reúna os materiais com antecedência'}</li>
            <li>{language === 'en' ? 'Use temporary and safe products: Prefer washable paints and gels' : 'Use produtos temporários e seguros: Prefira tintas e géis laváveis'}</li>
            <li>{language === 'en' ? 'Do a test first: Try the hairstyle before the big day' : 'Faça um teste antes: Experimente o penteado antes do grande dia'}</li>
            <li>{language === 'en' ? 'Take lots of photos: Capture every angle to turn into art later!' : 'Tire muitas fotos: Capture todos os ângulos para transformar em arte depois!'}</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">
            {language === 'en' ? 'Photography tips for best results:' : 'Dicas de fotografia para melhores resultados:'}
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>{language === 'en' ? 'Good lighting: Natural light or well-lit environment' : 'Boa iluminação: Luz natural ou ambiente bem iluminado'}</li>
            <li>{language === 'en' ? 'Neutral background: Simple background highlights the hairstyle' : 'Fundo neutro: Fundo simples destaca o penteado'}</li>
            <li>{language === 'en' ? 'Different angles: Front, side and top photos' : 'Ângulos diferentes: Fotos de frente, lado e cima'}</li>
            <li>{language === 'en' ? 'Child\'s joy: Capture genuine smiles and expressions' : 'Alegria da criança: Capture sorrisos e expressões genuínas'}</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export const crazyHairGuideContent: BlogPostContent = {
  slug: 'cabelo-maluco-infantil-ideias-adesivos-colorir',
  title: {
    'pt-BR': 'Cabelo maluco infantil: ideias criativas + adesivos e imagens para colorir personalizadas',
    'en': 'Crazy hair day for kids: creative ideas + custom stickers and coloring pages'
  },
  description: {
    'pt-BR': 'Descubra ideias criativas para o dia do cabelo maluco e aprenda como transformar o penteado em adesivos personalizados ou imagens para colorir que eternizam esse momento especial.',
    'en': 'Discover creative ideas for crazy hair day and learn how to turn the hairstyle into custom stickers or coloring pages that immortalize this special moment.'
  },
  date: '10 de outubro, 2025',
  readTime: {
    'pt-BR': '8 min de leitura',
    'en': '8 min read'
  },
  author: {
    name: 'Stefanie Szabo',
    image: '/blog/1/ste.jpeg'
  },
  bannerImage: '/blog/4/antes.jpeg',
  publishedTime: '2025-10-10T00:00:00Z',
  seoData: {
    'pt-BR': {
      title: 'Cabelo Maluco Infantil: Ideias Criativas + Adesivos Personalizados | MyLineArts',
      description: 'Guia completo do dia do cabelo maluco: ideias criativas, penteados incríveis e como transformar o momento em adesivos e desenhos para colorir personalizados. Eternize essa memória especial!',
      keywords: 'cabelo maluco, dia do cabelo maluco, penteado maluco, cabelo maluco infantil, ideias cabelo maluco, cabelo maluco criativo, adesivo personalizado, desenho para colorir, arte personalizada, MyLineArts, penteados criativos, cabelo arco-íris, festa infantil, escola, atividade criativa, memória infantil, foto para adesivo, foto para desenho',
      ogTitle: 'Cabelo Maluco Infantil: Ideias Criativas + Adesivos e Desenhos Personalizados',
      ogDescription: 'Transforme o penteado maluco do seu filho(a) em adesivos exclusivos ou desenhos para colorir personalizados. Ideias criativas e como eternizar esse momento especial com MyLineArts.',
      twitterTitle: 'Cabelo Maluco: Ideias + Adesivos Personalizados | MyLineArts',
      twitterDescription: 'Descubra ideias criativas para cabelo maluco e aprenda a transformar em arte personalizada. Eternize esse momento especial!',
      locale: 'pt_BR',
      language: 'Portuguese',
      hreflang: 'pt-br',
      price: '5.00',
      currency: 'BRL',
      canonical: 'https://mylinearts.com/blog/cabelo-maluco-infantil-ideias-adesivos-colorir'
    },
    'en': {
      title: 'Crazy Hair Day for Kids: Creative Ideas + Custom Stickers | MyLineArts',
      description: 'Complete guide to crazy hair day: creative ideas, amazing hairstyles and how to turn the moment into custom stickers and coloring pages. Immortalize this special memory!',
      keywords: 'crazy hair day, crazy hair ideas, kids crazy hair, creative hairstyles, custom sticker, coloring page, personalized art, MyLineArts, creative hairstyles, rainbow hair, children\'s party, school, creative activity, childhood memory, photo to sticker, photo to drawing',
      ogTitle: 'Crazy Hair Day for Kids: Creative Ideas + Custom Stickers and Coloring Pages',
      ogDescription: 'Turn your child\'s crazy hairstyle into exclusive stickers or personalized coloring pages. Creative ideas and how to immortalize this special moment with MyLineArts.',
      twitterTitle: 'Crazy Hair Day: Ideas + Custom Stickers | MyLineArts',
      twitterDescription: 'Discover creative ideas for crazy hair day and learn to turn it into personalized art. Immortalize this special moment!',
      locale: 'en_US',
      language: 'English',
      hreflang: 'en',
      price: '2.00',
      currency: 'USD',
      canonical: 'https://mylinearts.com/en/blog/cabelo-maluco-infantil-ideias-adesivos-colorir'
    }
  },
  content: CrazyHairContent
};
