// Content for the keyword-focused landing pages, keyed by route path.
// Each PT page points to its EN counterpart through `alternate` (and vice versa).

export interface UseCasePage {
  language: 'en' | 'pt-BR';
  alternate: string;
  title: string;
  description: string;
  keywords: string;
  image: string;
  theme?: 'christmas';
  h1: string;
  h1Highlight: string;
  subtitle: string;
  cta: string;
  whatsapp?: string;
  badges?: string[];
  // Photo + drawing shown as a tilted collage next to the hero text
  heroImages?: { src: string; alt: string }[];
  // `label` uses {days}; shown only in the weeks before the date
  countdown?: { label: string; month: number; day: number };
  // `before` is the original photo; omit it to show just the drawing
  examples: { before?: string; after: string; alt: string }[];
  sections: {
    title: string;
    text?: string;
    items?: string[];
    cards?: { title: string; text: string; icon?: string; image?: string }[];
    steps?: { title: string; text: string }[];
    link?: { to: string; label: string };
  }[];
  faq: { question: string; answer: string }[];
  related: { to: string; label: string }[];
  disclaimer?: string;
}

export const useCasePages: Record<string, UseCasePage> = {
  '/livro-de-colorir-personalizado': {
    language: 'pt-BR',
    alternate: '/en/custom-coloring-book-from-photos',
    title: 'Livro de colorir personalizado com fotos | MyLineArts',
    description: 'Crie um livro de colorir personalizado com fotos da família, dos pets e de momentos especiais. Ideal para lembrancinhas, aniversários e presentes. Pronto para imprimir.',
    keywords: 'livro de colorir personalizado, livro de colorir personalizado com fotos, livro de colorir personalizado para lembrancinha, livro de colorir personalizado aniversário, livro de colorir casamento, livro para colorir personalizado, presente personalizado',
    image: '/casamento-depois.jpeg',
    h1: 'Livro de colorir personalizado',
    h1Highlight: 'com as suas fotos',
    subtitle: 'Transforme fotos da família, dos pets e de momentos especiais em páginas para colorir e monte um livro único — para imprimir em casa, na gráfica ou receber pronto.',
    cta: 'Criar meu livro de colorir',
    whatsapp: 'Quero o livro impresso',
    examples: [
      { before: '/casamento-antes.jpeg', after: '/casamento-depois.jpeg', alt: 'foto de casamento transformada em página de livro de colorir' },
      { before: '/familia-2-depois.jpeg', after: '/familia2-antes.jpeg', alt: 'foto de aniversário em família transformada em desenho para colorir' },
      { before: '/gato-antes.jpeg', after: '/gato-depois.jpeg', alt: 'foto de gato transformada em página para colorir' },
    ],
    sections: [
      {
        title: 'Ideias para o seu livro de colorir',
        items: [
          'Lembrancinha de aniversário infantil com fotos do aniversariante',
          'Livro de casamento para distrair as crianças na festa',
          'Presente de Dia das Mães, Dia dos Pais ou para os avós',
          'Álbum da viagem em família para colorir juntos',
          'Retratos dos pets da casa',
          'Atividade escolar com fotos da turma',
        ],
      },
      {
        title: 'Como montar o seu livro',
        text: 'Envie suas fotos no app, gere uma página para colorir para cada uma e baixe tudo em PNG de alta resolução. Depois é só imprimir em A4 ou A5 e encadernar — ou falar com a gente no WhatsApp para receber o livro impresso em casa.',
      },
      {
        title: 'Por que um livro personalizado',
        items: [
          'Cada página tem pessoas e lugares que a criança reconhece',
          'Presente único, que ninguém mais tem',
          'Atividade longe das telas para a família toda',
          'Não precisa saber desenhar',
        ],
      },
    ],
    faq: [
      { question: 'Quantas páginas posso colocar no livro?', answer: 'Quantas quiser. Cada foto transformada em página para colorir usa 2 créditos, então você define o tamanho do livro pelo plano escolhido.' },
      { question: 'Vocês imprimem o livro?', answer: 'Você pode baixar as páginas e imprimir onde preferir. Se quiser receber o livro impresso, fale com nosso time pelo WhatsApp e fazemos um orçamento.' },
      { question: 'Serve como lembrancinha de aniversário?', answer: 'Sim. É um dos usos mais pedidos: um livrinho com fotos do aniversariante e da família, impresso em A5 para cada convidado.' },
      { question: 'Que fotos funcionam melhor?', answer: 'Fotos nítidas, bem iluminadas e com fundo simples geram linhas mais limpas. Fotos em grupo funcionam, mas rostos muito pequenos perdem detalhes.' },
    ],
    related: [
      { to: '/', label: 'Transformar foto em desenho para colorir' },
      { to: '/figurinhas-adesivos-personalizados', label: 'Figurinhas e adesivos personalizados' },
      { to: '/bobbie-goods-personalizado-com-fotos', label: 'Bobbie Goods personalizado com fotos' },
      { to: '/galeria', label: 'Galeria de exemplos' },
    ],
  },

  '/en/custom-coloring-book-from-photos': {
    language: 'en',
    alternate: '/livro-de-colorir-personalizado',
    title: 'Custom coloring book from your photos | MyLineArts',
    description: 'Make a custom coloring book from photos of your family, pets and special moments. Perfect for party favors, birthdays and personalized gifts. Ready to print.',
    keywords: 'custom coloring book, custom coloring book from photos, personalized coloring book, custom coloring books for kids, custom coloring books for birthday parties, photo coloring book, personalized gift',
    image: '/casamento-depois.jpeg',
    h1: 'Custom coloring book',
    h1Highlight: 'from your photos',
    subtitle: 'Turn photos of your family, pets and special moments into coloring pages and build a one-of-a-kind book — print it at home, at a print shop, or get it delivered.',
    cta: 'Create my coloring book',
    whatsapp: 'Order a printed book',
    examples: [
      { before: '/casamento-antes.jpeg', after: '/casamento-depois.jpeg', alt: 'wedding photo turned into a coloring book page' },
      { before: '/familia-2-depois.jpeg', after: '/familia2-antes.jpeg', alt: 'family birthday photo turned into a coloring page' },
      { before: '/gato-antes.jpeg', after: '/gato-depois.jpeg', alt: 'cat photo turned into a coloring page' },
    ],
    sections: [
      {
        title: 'Ideas for your coloring book',
        items: [
          'Birthday party favors with photos of the birthday kid',
          'Wedding coloring book to keep kids busy at the reception',
          "Mother's Day, Father's Day or grandparents gift",
          'Family trip album to color together',
          'Portraits of your pets',
          'Classroom activity with photos of the class',
        ],
      },
      {
        title: 'How to build your book',
        text: 'Upload your photos in the app, generate a coloring page for each one and download them as high-resolution PNGs. Then print on letter, A4 or A5 paper and bind them — or message us on WhatsApp to get a printed book delivered.',
      },
      {
        title: 'Why a personalized coloring book',
        items: [
          'Every page shows people and places your kid recognizes',
          'A unique gift nobody else has',
          'Screen-free activity for the whole family',
          'No drawing skills needed',
        ],
      },
    ],
    faq: [
      { question: 'How many pages can my book have?', answer: 'As many as you like. Each photo turned into a coloring page uses 2 credits, so the plan you pick sets the size of the book.' },
      { question: 'Do you print the book?', answer: 'You can download the pages and print them wherever you like. If you want a printed book delivered, message our team on WhatsApp for a quote.' },
      { question: 'Can I use it as a birthday party favor?', answer: 'Yes. It is one of the most popular uses: a small book with photos of the birthday kid and family, printed in A5 for each guest.' },
      { question: 'What photos work best?', answer: 'Sharp, well-lit photos with a simple background give the cleanest lines. Group photos work, but very small faces lose detail.' },
    ],
    related: [
      { to: '/en', label: 'Turn a photo into a coloring page' },
      { to: '/en/custom-stickers-from-photos', label: 'Custom stickers from photos' },
      { to: '/en/bobbie-goods-style-coloring-pages', label: 'Bobbie Goods style coloring pages' },
      { to: '/en/gallery', label: 'Example gallery' },
    ],
  },

  '/figurinhas-adesivos-personalizados': {
    language: 'pt-BR',
    alternate: '/en/custom-stickers-from-photos',
    title: 'Figurinhas e adesivos personalizados com foto | MyLineArts',
    description: 'Transforme suas fotos em figurinhas para WhatsApp e adesivos personalizados com IA. Ideal para família, pets, aniversários e casamentos. Crie em segundos.',
    keywords: 'adesivo personalizado com foto, figurinha com foto, fazer figurinha com foto whatsapp, figurinha personalizada whatsapp, adesivos personalizados, adesivo de foto personalizado, adesivo personalizado aniversário',
    image: '/turquia-sticker.png',
    h1: 'Figurinhas e adesivos personalizados',
    h1Highlight: 'a partir da sua foto',
    subtitle: 'Envie uma foto e receba um adesivo ilustrado em segundos, pronto para virar figurinha no WhatsApp e no Telegram ou ser impresso em papel adesivo.',
    cta: 'Criar meu adesivo',
    examples: [
      { before: '/turquia-original.jpeg', after: '/turquia-sticker.png', alt: 'foto de família transformada em adesivo personalizado' },
      { before: '/cindy-sticker.jpeg', after: '/cindy-sticker-nobg.png', alt: 'foto de cachorro transformada em figurinha personalizada' },
      { before: '/familia-2-depois.jpeg', after: '/familia-sticker.png', alt: 'foto de aniversário transformada em adesivo ilustrado' },
    ],
    sections: [
      {
        title: 'Ideias de figurinhas e adesivos',
        items: [
          'Figurinhas da família para o grupo do WhatsApp',
          'Adesivos do pet para notebook, garrafa e celular',
          'Adesivos personalizados para aniversários e lembrancinhas',
          'Etiquetas escolares com o rosto da criança',
          'Adesivos de casamento para convites e lembranças',
        ],
      },
      {
        title: 'Como funciona',
        text: 'Cada adesivo usa só 1 crédito. Envie a foto no app, escolha a opção de adesivo e baixe em alta resolução. Para imprimir, use papel adesivo vinil ou fotográfico em casa ou numa gráfica.',
      },
    ],
    faq: [
      { question: 'Como faço figurinha com foto para o WhatsApp?', answer: 'Crie o adesivo no MyLineArts, baixe a imagem e use o criador de figurinhas do próprio WhatsApp para transformá-la em figurinha.' },
      { question: 'Quanto custa cada adesivo?', answer: 'Cada adesivo usa 1 crédito. Os planos estão na página inicial, na seção de preços.' },
      { question: 'Posso imprimir os adesivos?', answer: 'Sim. Os arquivos saem em alta resolução; imprima em papel adesivo vinil ou fotográfico em casa ou numa gráfica.' },
      { question: 'Funciona com foto de pet?', answer: 'Sim, fotos de cães e gatos estão entre as que dão os melhores resultados.' },
    ],
    related: [
      { to: '/', label: 'Transformar foto em desenho para colorir' },
      { to: '/livro-de-colorir-personalizado', label: 'Livro de colorir personalizado' },
      { to: '/bobbie-goods-personalizado-com-fotos', label: 'Bobbie Goods personalizado com fotos' },
      { to: '/blog/adesivos-personalizados-fotos-ia', label: 'Guia de adesivos personalizados com IA' },
    ],
  },

  '/en/custom-stickers-from-photos': {
    language: 'en',
    alternate: '/figurinhas-adesivos-personalizados',
    title: 'Custom stickers from your photos with AI | MyLineArts',
    description: 'Turn your photos into custom stickers with AI — for WhatsApp, Telegram, laptops and party favors. Works great with family, pet and wedding photos.',
    keywords: 'custom stickers from photos, personalized stickers from photos, create custom stickers from photos, custom cartoon stickers from photo, whatsapp stickers from photo, pet stickers, custom stickers',
    image: '/turquia-sticker.png',
    h1: 'Custom stickers',
    h1Highlight: 'from your photos',
    subtitle: 'Upload a photo and get an illustrated sticker in seconds, ready to use on WhatsApp and Telegram or to print on sticker paper.',
    cta: 'Create my sticker',
    examples: [
      { before: '/turquia-original.jpeg', after: '/turquia-sticker.png', alt: 'family photo turned into a custom sticker' },
      { before: '/cindy-sticker.jpeg', after: '/cindy-sticker-nobg.png', alt: 'dog photo turned into a custom sticker' },
      { before: '/familia-2-depois.jpeg', after: '/familia-sticker.png', alt: 'birthday photo turned into an illustrated sticker' },
    ],
    sections: [
      {
        title: 'Sticker ideas',
        items: [
          'Family stickers for your WhatsApp group',
          'Pet stickers for laptops, bottles and phones',
          'Custom stickers for birthdays and party favors',
          "School labels with your kid's face",
          'Wedding stickers for invitations and keepsakes',
        ],
      },
      {
        title: 'How it works',
        text: 'Each sticker uses just 1 credit. Upload a photo in the app, choose the sticker option and download it in high resolution. To print, use vinyl or photo sticker paper at home or at a print shop.',
      },
    ],
    faq: [
      { question: 'How do I make a WhatsApp sticker from a photo?', answer: "Create the sticker on MyLineArts, download the image and use WhatsApp's built-in sticker maker to turn it into a sticker." },
      { question: 'How much does each sticker cost?', answer: 'Each sticker uses 1 credit. Plans are listed in the pricing section of the home page.' },
      { question: 'Can I print the stickers?', answer: 'Yes. Files are high resolution; print them on vinyl or photo sticker paper at home or at a print shop.' },
      { question: 'Does it work with pet photos?', answer: 'Yes, dog and cat photos are among the ones that give the best results.' },
    ],
    related: [
      { to: '/en', label: 'Turn a photo into a coloring page' },
      { to: '/en/custom-coloring-book-from-photos', label: 'Custom coloring book from photos' },
      { to: '/en/bobbie-goods-style-coloring-pages', label: 'Bobbie Goods style coloring pages' },
      { to: '/en/blog/adesivos-personalizados-fotos-ia', label: 'Guide to custom AI stickers' },
    ],
  },

  '/bobbie-goods-personalizado-com-fotos': {
    language: 'pt-BR',
    alternate: '/en/bobbie-goods-style-coloring-pages',
    title: 'Bobbie Goods personalizado com suas fotos | MyLineArts',
    description: 'Transforme suas fotos em desenhos para colorir no estilo Bobbie Goods com IA. Crie páginas com sua família, pets e amigos e imprima em casa.',
    keywords: 'bobbie goods personalizado, bobbie goods com fotos, transformar foto em bobbie goods, criar bobbie goods, bobbie goods personalizado com fotos, como fazer bobbie goods com fotos, bobbie goods da família',
    image: '/ste-depois.jpeg',
    h1: 'Bobbie Goods personalizado',
    h1Highlight: 'com as suas fotos',
    subtitle: 'Os traços grossos e fofos que viralizaram, agora com você, sua família e seus pets. Envie uma foto e receba um desenho para colorir no estilo Bobbie Goods em segundos.',
    cta: 'Criar meu Bobbie Goods',
    examples: [
      { before: '/ste-antes.jpeg', after: '/ste-depois.jpeg', alt: 'foto transformada em desenho para colorir estilo Bobbie Goods' },
      { before: '/capivara-antes.jpeg', after: '/capivara-depois.jpeg', alt: 'foto de capivara em desenho estilo Bobbie Goods' },
      { before: '/dog-antes.jpeg', after: '/dog-depois.jpeg', alt: 'foto de cachorro em desenho para colorir estilo Bobbie Goods' },
    ],
    sections: [
      {
        title: 'O que é o estilo Bobbie Goods',
        text: 'Bobbie Goods é uma linha de livros de colorir com contornos grossos, formas arredondadas e cenas aconchegantes, que virou febre entre adultos e crianças. Nosso gerador usa a mesma linguagem visual — linhas limpas e áreas grandes para pintar — aplicada às suas próprias fotos.',
      },
      {
        title: 'Ideias de Bobbie Goods com fotos',
        items: [
          'Bobbie Goods da família',
          'Bobbie Goods de casal para presentear',
          'Bobbie Goods do seu pet',
          'Convite de aniversário estilo Bobbie Goods',
          'Livro de colorir completo com várias fotos',
        ],
      },
    ],
    faq: [
      { question: 'Como transformar foto em Bobbie Goods?', answer: 'Entre no app, envie sua foto e escolha o estilo de desenho para colorir. Em segundos a IA gera a página, que você baixa em alta resolução e imprime.' },
      { question: 'Posso imprimir em A4?', answer: 'Sim. O arquivo sai em PNG de alta resolução, pronto para imprimir em A4 em casa ou numa gráfica.' },
      { question: 'Dá para fazer com várias pessoas na foto?', answer: 'Sim. Funciona melhor quando os rostos aparecem grandes e nítidos; em fotos com muita gente, alguns detalhes podem se perder.' },
      { question: 'O MyLineArts é da marca Bobbie Goods?', answer: 'Não. Bobbie Goods é marca de seus respectivos donos. O MyLineArts é um gerador independente que cria desenhos inspirados no estilo a partir das suas fotos.' },
    ],
    related: [
      { to: '/', label: 'Transformar foto em desenho para colorir' },
      { to: '/livro-de-colorir-personalizado', label: 'Livro de colorir personalizado' },
      { to: '/blog/bobbie-goods-guia-completo', label: 'Bobbie Goods: guia completo' },
      { to: '/pobre-goods-imprimir', label: 'Pobre Goods para imprimir' },
    ],
    disclaimer: 'Bobbie Goods é marca de seus respectivos donos. O MyLineArts não tem afiliação com a marca.',
  },

  '/en/bobbie-goods-style-coloring-pages': {
    language: 'en',
    alternate: '/bobbie-goods-personalizado-com-fotos',
    title: 'Bobbie Goods style coloring pages from your photos | MyLineArts',
    description: 'Turn your photos into Bobbie Goods style coloring pages with AI. Create pages of your family, pets and friends and print them at home.',
    keywords: 'bobbie goods style, bobbie goods style coloring pages, bobbie goods style coloring book, custom bobbie goods, bobbie goods from photo, bobbie goods art style',
    image: '/ste-depois.jpeg',
    h1: 'Bobbie Goods style coloring pages',
    h1Highlight: 'from your photos',
    subtitle: 'The bold, cozy line art that went viral — now featuring you, your family and your pets. Upload a photo and get a Bobbie Goods style coloring page in seconds.',
    cta: 'Create my coloring page',
    examples: [
      { before: '/ste-antes.jpeg', after: '/ste-depois.jpeg', alt: 'photo turned into a Bobbie Goods style coloring page' },
      { before: '/capivara-antes.jpeg', after: '/capivara-depois.jpeg', alt: 'capybara photo as a Bobbie Goods style drawing' },
      { before: '/dog-antes.jpeg', after: '/dog-depois.jpeg', alt: 'dog photo as a Bobbie Goods style coloring page' },
    ],
    sections: [
      {
        title: 'What is the Bobbie Goods style',
        text: 'Bobbie Goods is a line of coloring books known for thick outlines, rounded shapes and cozy scenes, loved by adults and kids alike. Our generator uses the same visual language — clean lines and large areas to color — applied to your own photos.',
      },
      {
        title: 'Bobbie Goods style ideas',
        items: [
          'Your family as a coloring page',
          'Couple portrait as a gift',
          'Your pet in Bobbie Goods style',
          'Bobbie Goods style birthday invitation',
          'A full coloring book from several photos',
        ],
      },
    ],
    faq: [
      { question: 'How do I turn a photo into a Bobbie Goods style page?', answer: 'Open the app, upload your photo and pick the coloring page style. In seconds the AI creates the page, which you download in high resolution and print.' },
      { question: 'Can I print it on letter or A4 paper?', answer: 'Yes. You get a high-resolution PNG, ready to print at home or at a print shop.' },
      { question: 'Does it work with several people in the photo?', answer: 'Yes. It works best when faces are large and sharp; in crowded photos some details may get lost.' },
      { question: 'Is MyLineArts part of the Bobbie Goods brand?', answer: 'No. Bobbie Goods is a trademark of its respective owners. MyLineArts is an independent generator that creates drawings inspired by the style from your photos.' },
    ],
    related: [
      { to: '/en', label: 'Turn a photo into a coloring page' },
      { to: '/en/custom-coloring-book-from-photos', label: 'Custom coloring book from photos' },
      { to: '/en/blog/bobbie-goods-guia-completo', label: 'Bobbie Goods: the complete guide' },
      { to: '/en/gallery', label: 'Example gallery' },
    ],
    disclaimer: 'Bobbie Goods is a trademark of its respective owners. MyLineArts is not affiliated with the brand.',
  },

  '/desenho-de-natal-para-colorir-com-foto': {
    language: 'pt-BR',
    alternate: '/en/personalized-christmas-coloring-pages',
    title: 'Desenho de Natal para colorir com a sua foto | MyLineArts',
    description: 'Fotos da família viram desenhos de Natal para colorir: presente personalizado, lembrancinha, mini livro e atividade infantil. Pronto em segundos.',
    keywords: 'desenho de natal para colorir, desenho de natal para colorir e imprimir, desenho de natal em família para colorir, desenho de natal personalizado, desenho de natal foto, desenho de natal fofo para colorir, presente de natal personalizado, presente de natal personalizado com foto, presente de natal personalizado família, presente de natal personalizado para clientes, lembrancinha de natal, lembrancinha de natal para clientes, lembrancinha de natal educação infantil, livro de colorir de natal, mini livro de colorir de natal, atividade de natal para colorir, atividade de natal educação infantil, cartão de natal com foto, cartão de natal para colorir, bobbie goods de natal, bobbie goods natal para colorir',
    image: '/blog/6/christmas-family.png',
    theme: 'christmas',
    h1: 'Desenho de Natal para colorir',
    h1Highlight: 'com a foto da sua família',
    subtitle: 'Transforme a foto da família, das crianças ou do pet em um desenho de Natal para colorir e imprimir. Presente de Natal personalizado, lembrancinha para a ceia e atividade para os pequenos — pronto em segundos.',
    cta: 'Criar meu desenho de Natal',
    whatsapp: 'Quero um livro de Natal impresso',
    badges: ['Pronto em segundos', 'Imprima em casa ou na gráfica', 'Não precisa saber desenhar'],
    heroImages: [
      { src: '/familia-2-depois.jpeg', alt: 'foto da família reunida em uma festa' },
      { src: '/familia2-antes.jpeg', alt: 'a mesma foto transformada em desenho para colorir' },
    ],
    countdown: { label: 'Faltam {days} dias para o Natal', month: 12, day: 25 },
    examples: [
      { before: '/familia-2-depois.jpeg', after: '/familia2-antes.jpeg', alt: 'foto de família transformada em desenho para colorir' },
      { before: '/dog-antes.jpeg', after: '/dog-depois.jpeg', alt: 'foto do cachorro transformada em desenho para colorir' },
      { before: '/casamento-antes.jpeg', after: '/casamento-depois.jpeg', alt: 'foto de casal transformada em desenho para colorir' },
    ],
    sections: [
      {
        title: 'Um desenho de Natal que ninguém mais tem',
        text: 'Desenhos de Natal para colorir existem aos montes na internet: Papai Noel, árvore, rena, boneco de neve. O que você não encontra pronto é a sua família na ceia, a foto do vovô de gorro de Papai Noel ou o cachorro embaixo da árvore. Com o MyLineArts você envia uma foto e a inteligência artificial transforma em um desenho de linhas limpas, fofo e fácil de pintar, no tamanho certo para imprimir em A4. É o jeito mais simples de criar um desenho de Natal personalizado para dar de presente, decorar a casa ou entreter as crianças nas férias.',
      },
      {
        title: 'Presente de Natal personalizado para cada pessoa',
        text: 'Um desenho feito a partir de uma foto de vocês é um presente de Natal personalizado barato, rápido e cheio de significado. Algumas ideias:',
        cards: [
          { icon: '👵', title: 'Avós', text: 'Um livrinho com fotos dos netos para colorirem juntos no dia 25.' },
          { icon: '👨‍👩‍👧', title: 'Pais e padrinhos', text: 'O desenho da família emoldurado ou impresso como cartão de Natal.' },
          { icon: '🧒', title: 'Crianças', text: 'Páginas com elas mesmas, os primos e o pet — bem mais divertido que um desenho genérico.' },
          { icon: '❤️', title: 'Namorado ou namorada', text: 'O desenho do casal para colorirem juntos. Simples, romântico e feito por você.' },
          { icon: '🍎', title: 'Professores', text: 'Um desenho da turma como lembrança de fim de ano.' },
          { icon: '💼', title: 'Clientes e equipe', text: 'Lembrancinha de Natal para clientes e funcionários com a foto da equipe ou da loja.' },
          { icon: '🎁', title: 'Amigo secreto', text: 'Um presente criativo e personalizado que cabe em qualquer orçamento.' },
          { icon: '🐶', title: 'Quem ama pets', text: 'O retrato do cachorro ou do gato para colorir e pendurar perto da árvore.' },
        ],
      },
      {
        title: 'Ideias de desenhos de Natal para colorir',
        text: 'Use fotos que você já tem ou faça uma sessão de fotos de Natal em casa. Estes temas rendem os desenhos mais bonitos:',
        cards: [
          { image: '/blog/6/christmas-family.png', title: 'Ceia de Natal em família', text: 'A mesa posta e todo mundo reunido viram um desenho de Natal em família para colorir, cheio de detalhes.' },
          { image: '/blog/6/Christmas-coloring-pages-example.png', title: 'Árvore de Natal e lareira', text: 'A árvore montada na sala, com presentes embaixo e meias penduradas.' },
          { image: '/blog/6/christmas-tree.png', title: 'Passeio de Natal na cidade', text: 'Aquela foto na frente da árvore gigante ou das luzes da praça.' },
          { image: '/blog/6/christmas-activities.png', title: 'Atividades e cartões', text: 'Rena, boneco de neve e árvore para recortar, colorir e montar com as crianças.' },
          { image: '/dog-depois.jpeg', title: 'Pet no Natal', text: 'O cachorro ou o gato embaixo da árvore vira um desenho de Natal fofo para colorir.' },
          { image: '/capivara-depois.jpeg', title: 'Bichinhos fofos', text: 'Capivara, ursinho ou o bicho preferido da criança, no traço fofo que todo mundo ama.' },
        ],
      },
      {
        title: 'Como criar seu desenho de Natal em 3 passos',
        steps: [
          { title: 'Escolha a foto', text: 'Uma foto nítida, com os rostos bem visíveis. Pode ser do celular.' },
          { title: 'Envie no app', text: 'A inteligência artificial transforma a foto em desenho para colorir em segundos.' },
          { title: 'Baixe e imprima', text: 'Arquivo PNG em alta resolução, pronto para imprimir em A4 em casa ou na gráfica.' },
        ],
      },
      {
        title: 'Mini livro de colorir de Natal e lembrancinhas',
        text: 'Junte vários desenhos e monte um mini livro de colorir de Natal: imprima em A5, grampeie e coloque uma capa com o nome da família. É uma lembrancinha de Natal simples e barata para a ceia, para a escola ou para os clientes — e as crianças ficam entretidas enquanto os adultos conversam.',
        items: [
          'Lembrancinha de Natal para a ceia, com um livrinho por criança',
          'Lembrancinha de Natal para clientes e funcionários',
          'Kit presente de Natal: livro de colorir com lápis de cor',
          'Capa do livro de colorir de Natal com a foto da família',
        ],
        link: { to: '/livro-de-colorir-personalizado', label: 'Veja como montar um livro de colorir personalizado' },
      },
      {
        title: 'Atividade de Natal para educação infantil',
        text: 'Professoras e professores podem transformar fotos da turma em atividades de Natal para colorir: cada criança pinta o próprio desenho, que depois vira painel na sala ou presente para levar para casa. Funciona do maternal ao fundamental e combina com atividades de recorte, colagem e cartão de Natal.',
      },
      {
        title: 'Cartão de Natal com foto para colorir',
        text: 'Em vez de um cartão de Natal comum, imprima o desenho da família na frente e escreva a mensagem atrás. Quem recebe ganha um cartão de Natal personalizado e ainda pode colorir. Também dá para mandar a imagem pelo WhatsApp junto com os votos de boas festas.',
      },
      {
        title: 'Bobbie Goods de Natal com a sua família',
        text: 'Os desenhos de Natal no estilo Bobbie Goods — traço grosso, cenas aconchegantes, árvore, lareira e chocolate quente — fazem sucesso todo fim de ano. Com o MyLineArts você cria o seu Bobbie Goods de Natal a partir das suas próprias fotos, pronto para colorir e imprimir.',
        link: { to: '/bobbie-goods-personalizado-com-fotos', label: 'Bobbie Goods personalizado com fotos' },
      },
    ],
    faq: [
      { question: 'Como transformar a foto de Natal da família em desenho para colorir?', answer: 'Envie a foto no app, a IA gera o desenho para colorir em segundos e você baixa em PNG de alta resolução para imprimir.' },
      { question: 'Dá tempo de fazer na véspera do Natal?', answer: 'Sim. Cada desenho fica pronto em segundos e você baixa na hora; é só imprimir em casa ou numa gráfica.' },
      { question: 'Quanto custa um desenho de Natal personalizado?', answer: 'Cada foto transformada usa 2 créditos. Dá para comprar poucos créditos para um único desenho ou um pacote maior para um livro inteiro. Os planos estão na página inicial.' },
      { question: 'Dá para fazer um mini livro de colorir de Natal?', answer: 'Sim. Gere uma página para cada foto, imprima em A5 e grampeie — ou peça o livro impresso pelo WhatsApp.' },
      { question: 'Posso usar como lembrancinha de Natal para clientes?', answer: 'Sim. Muitas empresas usam a foto da equipe ou da loja para criar lembrancinhas e cartões de Natal. Para pedidos impressos em quantidade, fale com a gente pelo WhatsApp.' },
      { question: 'Serve como atividade de Natal na escola?', answer: 'Sim. Com fotos da turma você cria uma atividade de Natal para colorir em que cada criança pinta o próprio desenho.' },
      { question: 'Vocês imprimem e entregam antes do Natal?', answer: 'Fale com a gente pelo WhatsApp: fazemos o orçamento do livro impresso e informamos o prazo de entrega para a sua cidade.' },
      { question: 'Funciona com fotos antigas?', answer: 'Sim, desde que a foto esteja nítida. Fotos escaneadas de álbuns também funcionam.' },
    ],
    related: [
      { to: '/', label: 'Transformar foto em desenho para colorir' },
      { to: '/livro-de-colorir-personalizado', label: 'Livro de colorir personalizado' },
      { to: '/figurinhas-adesivos-personalizados', label: 'Figurinhas e adesivos personalizados' },
      { to: '/blog/desenhos-natal-colorir-ideias-criativas', label: 'Ideias de desenhos de Natal' },
    ],
  },

  '/en/personalized-christmas-coloring-pages': {
    language: 'en',
    alternate: '/desenho-de-natal-para-colorir-com-foto',
    title: 'Personalized Christmas coloring pages from photos | MyLineArts',
    description: 'Turn family photos into Christmas coloring pages: a personalized gift, party favor, mini coloring book and kids activity. Ready to print in seconds.',
    keywords: 'personalized christmas coloring pages, christmas coloring pages, christmas coloring pages printable, christmas coloring pages for kids, christmas coloring pages cute, family christmas coloring page, christmas coloring page from photo, personalized christmas coloring book, custom christmas coloring book, mini christmas coloring book, personalized christmas gift, christmas gift ideas for grandparents, christmas gift ideas for kids not toys, christmas gift ideas for teachers, christmas gift ideas for clients, christmas party favors, christmas activities for kids, christmas card with photo, bobbie goods christmas coloring pages',
    image: '/blog/6/christmas-family.png',
    theme: 'christmas',
    h1: 'Personalized Christmas coloring pages',
    h1Highlight: 'from your family photos',
    subtitle: 'Turn a photo of your family, kids or pet into a Christmas coloring page you can print at home. A personalized Christmas gift, a party favor for the holiday table and a screen-free activity for kids — ready in seconds.',
    cta: 'Create my Christmas page',
    whatsapp: 'Order a printed Christmas book',
    badges: ['Ready in seconds', 'Print at home or at a print shop', 'No drawing skills needed'],
    heroImages: [
      { src: '/familia-2-depois.jpeg', alt: 'family photo at a party' },
      { src: '/familia2-antes.jpeg', alt: 'the same photo turned into a coloring page' },
    ],
    countdown: { label: '{days} days until Christmas', month: 12, day: 25 },
    examples: [
      { before: '/familia-2-depois.jpeg', after: '/familia2-antes.jpeg', alt: 'family photo turned into a coloring page' },
      { before: '/dog-antes.jpeg', after: '/dog-depois.jpeg', alt: 'dog photo turned into a coloring page' },
      { before: '/casamento-antes.jpeg', after: '/casamento-depois.jpeg', alt: 'couple photo turned into a coloring page' },
    ],
    sections: [
      {
        title: 'A Christmas coloring page nobody else has',
        text: "The internet is full of printable Christmas coloring pages: Santa, trees, reindeer, snowmen. What you can't download is your own family at the holiday table, grandpa in his Santa hat or the dog under the tree. With MyLineArts you upload a photo and AI turns it into a clean, cute line drawing that's easy to color and sized to print on letter or A4 paper. It's the simplest way to make a personalized Christmas coloring page to give as a gift, decorate the house or keep kids busy over the holidays.",
      },
      {
        title: 'Personalized Christmas gifts for everyone on your list',
        text: 'A coloring page made from your own photo is an affordable, fast and meaningful personalized Christmas gift. A few ideas:',
        cards: [
          { icon: '👵', title: 'Grandparents', text: 'A little book of the grandkids to color together on Christmas Day.' },
          { icon: '👨‍👩‍👧', title: 'Parents and godparents', text: 'The family drawing, framed or printed as a Christmas card.' },
          { icon: '🧒', title: 'Kids', text: "Pages featuring themselves, their cousins and the pet — a Christmas gift for kids that isn't another toy." },
          { icon: '❤️', title: 'Your partner', text: 'A drawing of the two of you to color together. Simple, romantic and made by you.' },
          { icon: '🍎', title: 'Teachers', text: 'A drawing of the class as an end-of-year keepsake.' },
          { icon: '💼', title: 'Clients and team', text: 'A Christmas gift for clients and employees with a photo of your team or store.' },
          { icon: '🎁', title: 'Secret Santa', text: 'A creative, personalized gift that fits any budget.' },
          { icon: '🐶', title: 'Pet lovers', text: 'A portrait of the dog or cat to color and hang by the tree.' },
        ],
      },
      {
        title: 'Christmas coloring page ideas',
        text: 'Use photos you already have or do a quick Christmas photo shoot at home. These themes make the best drawings:',
        cards: [
          { image: '/blog/6/christmas-family.png', title: 'Family Christmas dinner', text: 'The table set and everyone together becomes a detailed family Christmas coloring page.' },
          { image: '/blog/6/Christmas-coloring-pages-example.png', title: 'Tree and fireplace', text: 'Your Christmas tree in the living room, with presents underneath and stockings hung.' },
          { image: '/blog/6/christmas-tree.png', title: 'Christmas in the city', text: 'That photo in front of the giant tree or the lights downtown.' },
          { image: '/blog/6/christmas-activities.png', title: 'Crafts and cards', text: 'Reindeer, snowman and tree to cut out, color and assemble with the kids.' },
          { image: '/dog-depois.jpeg', title: 'Pets at Christmas', text: 'The dog or cat under the tree becomes a cute Christmas coloring page.' },
          { image: '/capivara-depois.jpeg', title: 'Cute animals', text: "A capybara, teddy bear or your kid's favorite animal in that cute, bold line style." },
        ],
      },
      {
        title: 'How to make your Christmas coloring page in 3 steps',
        steps: [
          { title: 'Pick a photo', text: 'A sharp photo with faces clearly visible. Phone photos work great.' },
          { title: 'Upload it in the app', text: 'AI turns the photo into a coloring page in seconds.' },
          { title: 'Download and print', text: 'High-resolution PNG, ready to print at home or at a print shop.' },
        ],
      },
      {
        title: 'Mini Christmas coloring books and party favors',
        text: 'Put several pages together into a mini Christmas coloring book: print in A5, staple, and add a cover with your family name. It makes an easy Christmas party favor for the holiday table, school or clients — and keeps kids entertained while the adults catch up.',
        items: [
          'Christmas party favors: one mini book per kid',
          'Christmas gifts for clients and employees',
          'Stocking stuffer: coloring book with colored pencils',
          'Christmas coloring book cover with your family photo',
        ],
        link: { to: '/en/custom-coloring-book-from-photos', label: 'See how to make a custom coloring book' },
      },
      {
        title: 'Christmas activities for kids at school and at home',
        text: 'Teachers can turn class photos into Christmas coloring activities: each kid colors their own drawing, which then becomes a classroom display or a gift to take home. It works from preschool to elementary school and pairs nicely with cut-and-paste crafts and Christmas cards.',
      },
      {
        title: 'Christmas card with a photo to color',
        text: 'Instead of a regular Christmas card, print the family drawing on the front and write your message on the back. The recipient gets a personalized Christmas card they can color. You can also send the image over WhatsApp or text with your holiday wishes.',
      },
      {
        title: 'Bobbie Goods style Christmas pages of your family',
        text: 'Bobbie Goods style Christmas coloring pages — bold lines, cozy scenes, the tree, the fireplace and hot cocoa — are a hit every holiday season. With MyLineArts you can make your own Bobbie Goods style Christmas pages from your photos, ready to color and print.',
        link: { to: '/en/bobbie-goods-style-coloring-pages', label: 'Bobbie Goods style coloring pages' },
      },
    ],
    faq: [
      { question: 'How do I turn our family Christmas photo into a coloring page?', answer: 'Upload the photo in the app, the AI creates the coloring page in seconds and you download a high-resolution PNG to print.' },
      { question: 'Can I make it on Christmas Eve?', answer: 'Yes. Each page is ready in seconds and you download it right away; just print it at home or at a print shop.' },
      { question: 'How much does a personalized Christmas coloring page cost?', answer: 'Each photo uses 2 credits. You can buy a few credits for a single page or a bigger pack for a whole book. Plans are listed on the home page.' },
      { question: 'Can I make a mini Christmas coloring book?', answer: 'Yes. Make one page per photo, print in A5 and staple — or message us on WhatsApp for a printed book.' },
      { question: 'Can I use it as a Christmas gift for clients?', answer: 'Yes. Many businesses use a photo of their team or store to make Christmas favors and cards. For bulk printed orders, message us on WhatsApp.' },
      { question: 'Does it work as a classroom Christmas activity?', answer: 'Yes. With class photos you can create a Christmas coloring activity where every kid colors their own drawing.' },
      { question: 'Do you print and deliver before Christmas?', answer: 'Message us on WhatsApp: we quote the printed book and tell you the delivery time for your city.' },
      { question: 'Does it work with old photos?', answer: 'Yes, as long as the photo is sharp. Scanned album photos work too.' },
    ],
    related: [
      { to: '/en', label: 'Turn a photo into a coloring page' },
      { to: '/en/custom-coloring-book-from-photos', label: 'Custom coloring book from photos' },
      { to: '/en/custom-stickers-from-photos', label: 'Custom stickers from photos' },
      { to: '/en/blog/desenhos-natal-colorir-ideias-criativas', label: 'Christmas coloring ideas' },
    ],
  },
};
