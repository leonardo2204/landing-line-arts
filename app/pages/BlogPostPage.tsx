import { Link, useLocation, useParams } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';
import { blogPostSEOData } from '../utils/seoData';
import posthog from 'posthog-js';

const BlogPostPage: React.FC = () => {
    const { language } = useLanguage();
    const location = useLocation();
    const { slug } = useParams();
    
    // Get the current language prefix for navigation
    const getLanguagePrefix = () => {
        return language === 'en' ? '/en' : '';
    };

    const handleBackClick = () => {
        posthog.capture('blog_back_button_clicked', {
            language: language,
            page: 'blog_post'
        });
    };

    const handleCTAClick = (ctaName: string) => {
        posthog.capture('blog_cta_clicked', {
            cta_name: ctaName,
            language: language,
            page: 'blog_post'
        });
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="mb-8">
                <Link
                    to={`${getLanguagePrefix()}/blog`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    onClick={handleBackClick}
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    {language === 'en' ? 'Back to blog' : 'Voltar para o blog'}
                </Link>
            </div>

            <SEOHead 
                seoData={blogPostSEOData}
                type="article"
                publishedTime="2024-03-20T00:00:00Z"
                author="Stefanie Szabo"
                image="/blog/1/banner.jpeg"
            />

            <article className="prose lg:prose-xl">
                <header className="mb-12">
                    <h1 className="text-4xl font-bold text-center mb-4">
                        {language === 'en' ? 'Bobbie Goods: the complete guide to coloring drawings and printing 🎨' : 'Bobbie Goods: o guia completo para desenhos para colorir e imprimir 🎨'}
                    </h1>
                    <div className="text-gray-600 mb-8">
                        <time dateTime="2024-03-20">14 de junho, 2025</time> • {language === 'en' ? '8 min read' : '8 min de leitura'}
                        <div className="flex items-center mt-4">
                            <img
                                src="/blog/1/ste.jpeg"
                                alt={language === 'en' ? "Author: Stefanie Szabo" : "Autora: Stefanie Szabo"}
                                className="w-10 h-10 rounded-full mr-3"
                            />
                            <span className="text-gray-800 font-medium">
                                {language === 'en' ? 'Posted by Stefanie Szabo' : 'Postado por Stefanie Szabo'}
                            </span>
                        </div>
                    </div>
                    <div className="mb-8">
                        <img
                            src="/blog/1/banner.jpeg"
                            alt={language === 'en' ? "Bobbie Goods - Coloring Drawings" : "Bobbie Goods - Desenhos para Colorir"}
                            className="w-full h-128 object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </header>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">
                        {language === 'en' ? 'What are Bobbie Goods? 🤔' : 'O que são Bobbie Goods? 🤔'}
                    </h2>
                    <p className="text-lg mb-4">
                        {language === 'en' 
                            ? 'Bobbie Goods are unique and charming drawings that have won the hearts of children and adults around the world. Originating from a creative trend that mixes simplicity with charm, these drawings have become a valuable tool for education, therapy and fun.'
                            : 'Bobbie Goods são desenhos únicos e encantadores que conquistaram o coração de crianças e adultos em todo o mundo. Originários de uma tendência criativa que mistura simplicidade com charme, esses desenhos se tornaram uma ferramenta valiosa para educação, terapia e diversão.'
                        }
                    </p>
                    <p className="text-lg mb-4">
                        {language === 'en'
                            ? 'What makes Bobbie Goods special is their ability to convey emotions and tell stories through simple and expressive strokes. They are perfect for coloring, personalizing and using in various educational and recreational contexts.'
                            : 'O que torna os Bobbie Goods especiais é sua capacidade de transmitir emoções e contar histórias através de traços simples e expressivos. Eles são perfeitos para colorir, personalizar e usar em diversos contextos educacionais e recreativos.'
                        }
                    </p>
                    <div className="bg-blue-50 p-6 rounded-lg my-8">
                        <h3 className="text-xl font-bold mb-4">
                            {language === 'en' ? 'Create your own Bobbie Goods with MyLineArts 🎨' : 'Crie seus próprios Bobbie Goods com MyLineArts 🎨'}
                        </h3>
                        <p className="mb-4">
                            {language === 'en'
                                ? 'With MyLineArts, you can transform your photos into personalized Bobbie Goods-style drawings! Our platform uses artificial intelligence to create unique drawings that preserve the essence and emotions of your favorite memories.'
                                : 'Com o MyLineArts, você pode transformar suas fotos em desenhos estilo Bobbie Goods personalizados! Nossa plataforma utiliza inteligência artificial para criar desenhos únicos que preservam a essência e as emoções das suas memórias favoritas.'
                            }
                        </p>
                        <Link
                            to={`${getLanguagePrefix()}/`}
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                            onClick={() => handleCTAClick('criar_bobbie_goods_agora')}
                        >
                            {language === 'en' ? 'Create My Bobbie Goods Now' : 'Criar Meu Bobbie Goods Agora'}
                        </Link>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Benefícios dos desenhos para colorir 🎯</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Desenvolvimento infantil</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Melhora a coordenação motora fina</li>
                                <li>Desenvolve a criatividade e imaginação</li>
                                <li>Fortalece a concentração e foco</li>
                                <li>Ajuda no reconhecimento de cores e formas</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Aspectos terapêuticos</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Reduz o estresse e ansiedade</li>
                                <li>Promove relaxamento e bem-estar</li>
                                <li>Estimula a expressão emocional</li>
                                <li>Auxilia no desenvolvimento da paciência</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-4 my-8">
                        <img
                            src="/blog/1/taj.jpeg"
                            alt="Desenhos coloridos"
                            className="w-full h-96 object-cover object-top-left rounded-lg shadow-md"
                        />
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Bobbie Goods para adultos: arte e terapia 🎨</h2>
                    <p className="text-lg mb-4">
                        Os Bobbie Goods não são apenas para crianças! Adultos em todo o mundo estão descobrindo os benefícios
                        terapêuticos e criativos desses desenhos. Com o MyLineArts, você pode transformar suas próprias fotos
                        em desenhos personalizados, criando uma experiência única de arte e memória.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Arte terapêutica</h3>
                            <p>Use os desenhos como uma forma de relaxamento e expressão pessoal, transformando momentos especiais em arte.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Decoração personalizada</h3>
                            <p>Crie quadros e murais únicos com seus próprios Bobbie Goods, adicionando um toque pessoal à sua casa.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Presentes especiais</h3>
                            <p>Transforme memórias em presentes únicos para amigos e familiares, criando conexões emocionais através da arte.</p>
                        </div>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-lg my-8">
                        <h3 className="text-xl font-bold mb-4">Crie seus próprios Bobbie Goods 🎯</h3>
                        <p className="mb-4">
                            Com o MyLineArts, você pode transformar qualquer foto em um desenho estilo Bobbie Goods.
                            Nossa tecnologia de IA preserva as características únicas e as emoções das suas fotos,
                            criando desenhos que são verdadeiramente seus.
                        </p>
                        <Link
                            to="/"
                            className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors"
                            onClick={() => handleCTAClick('experimente_agora')}
                        >
                            Experimente Agora
                        </Link>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Como imprimir e usar os desenhos 📝</h2>
                    <p className="text-lg mb-4">
                        Imprimir seus Bobbie Goods favoritos é mais fácil do que você imagina! Aqui está um guia passo a passo:
                    </p>
                    <ol className="list-decimal pl-6 space-y-4 mb-8">
                        <li>
                            <strong>Escolha o papel ideal:</strong> Para melhores resultados, use papel sulfite A4 de boa qualidade.
                            Para projetos especiais, você pode experimentar papéis mais grossos ou texturizados.
                        </li>
                        <li>
                            <strong>Configurações de impressão:</strong> Ajuste as configurações da sua impressora para "Alta Qualidade"
                            e selecione o modo "Colorido" mesmo para desenhos em preto e branco.
                        </li>
                        <li>
                            <strong>Escolha as cores:</strong> Lápis de cor, canetinhas, giz de cera ou aquarela - cada material
                            oferece um resultado único. Experimente diferentes técnicas!
                        </li>
                    </ol>
                    <div className="bg-blue-50 p-6 rounded-lg my-8">
                        <h3 className="text-xl font-bold mb-4">Dica pro 💡</h3>
                        <p>
                            Para desenhos que serão expostos ou guardados por muito tempo, considere usar papel mais resistente
                            e materiais de colorir de qualidade profissional. Isso garantirá que sua arte dure por muitos anos!
                        </p>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Ideias criativas para usar os desenhos 🎨</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Decoração</h3>
                            <p>Crie um mural personalizado ou decore cadernos e agendas com seus desenhos favoritos.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Presentes</h3>
                            <p>Transforme os desenhos em cartões, marcadores de livro ou embrulhos personalizados.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Educação</h3>
                            <p>Use os desenhos para ensinar cores, números, letras e até mesmo conceitos mais complexos.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 my-8">
                        <img
                            src="/blog/1/mulher.jpeg"
                            alt="Uso educacional"
                            className="w-full h-96 object-bottom-right rounded-lg shadow-md"
                        />
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Criando seus próprios desenhos com MyLineArts 🎯</h2>
                    <p className="text-lg mb-4">
                        O MyLineArts torna mais fácil do que nunca criar seus próprios Bobbie Goods personalizados!
                        Nossa plataforma utiliza tecnologia de ponta para transformar suas fotos em desenhos únicos
                        que preservam a essência e as emoções das suas memórias.
                    </p>
                    <div className="bg-yellow-50 p-6 rounded-lg my-8">
                        <h3 className="text-xl font-bold mb-4">Como começar 🚀</h3>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Escolha suas fotos favoritas</li>
                            <li>Selecione o estilo que mais combina com sua visão</li>
                            <li>Deixe nossa IA criar seu desenho único</li>
                            <li>Baixe e imprima seu Bobbie Goods personalizado</li>
                        </ol>
                        <div className="mt-6">
                            <Link
                                to="/"
                                className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors"
                                onClick={() => handleCTAClick('criar_desenho_agora')}
                            >
                                Criar Meu Desenho Agora
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Dicas para professores e pais 👨‍🏫</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Atividades em sala de aula</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Crie um projeto de arte colaborativo</li>
                                <li>Use os desenhos para contar histórias</li>
                                <li>Desenvolva exercícios de coordenação</li>
                                <li>Promova discussões sobre cores e formas</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Atividades em casa</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Organize sessões de colorir em família</li>
                                <li>Crie um álbum de recordações</li>
                                <li>Desenvolva projetos de arte sazonais</li>
                                <li>Use os desenhos para decorar o quarto</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-4 my-8">
                        <img
                            src="/blog/1/crianca.jpeg"
                            alt="Atividades em família"
                            className="w-full h-96 object-cover object-top-left rounded-lg shadow-md"
                        />
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Conclusão 🌟</h2>
                    <p className="text-lg mb-4">
                        Os bobbie Goods são mais do que simples desenhos para colorir - são ferramentas poderosas para
                        desenvolvimento, criatividade e diversão. Com o MyLineArts, você pode transformar suas próprias
                        fotos em desenhos únicos que preservam suas memórias especiais.
                    </p>
                    <p className="text-lg mb-4">
                        Que tal começar sua jornada criativa hoje? <Link
                            to="/"
                            className="text-blue-600 hover:text-blue-800"
                            onClick={() => handleCTAClick('criar_primeiro_bobbie_goods')}
                        >
                            Crie seu primeiro Bobbie Goods personalizado</Link> e descubra um mundo de possibilidades!
                    </p>
                </section>

                <footer className="border-t pt-8 mt-12">
                    <div className="text-right">
                        <p className="text-gray-600">Atualizado em: 14 de junho, 2025</p>
                    </div>
                </footer>
            </article>
        </div>
    );
};

export default BlogPostPage; 