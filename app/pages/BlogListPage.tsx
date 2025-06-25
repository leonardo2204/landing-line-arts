import { useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';
import posthog from 'posthog-js';

interface BlogPost {
    id: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    author: {
        name: string;
        image: string;
    };
    image: string;
    slug: string;
}

const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Boobie Goods: o guia completo para desenhos para colorir e imprimir',
        description: 'Descubra o mundo dos Boobie Goods: desenhos para colorir, dicas de impressão, ideias criativas e como criar seus próprios desenhos personalizados.',
        date: '14 de junho, 2025',
        readTime: '8 min de leitura',
        author: {
            name: 'Stefanie Szabo',
            image: '/blog/1/ste.jpeg'
        },
        image: '/blog/1/banner.jpeg',
        slug: 'boobie-goods-guia-completo'
    }
    // Add more blog posts here as they are created
];

const BlogListPage: React.FC = () => {
    const { language } = useLanguage();
    const location = useLocation();
    
    // Get the current language prefix for navigation
    const getLanguagePrefix = () => {
        return location.pathname.startsWith('/en') ? '/en' : '';
    };

    useEffect(() => {
        // Track page view
        posthog.capture('blog_list_viewed', {
            total_posts: blogPosts.length,
            language: language
        });
    }, [language]);

    const handleBlogPostClick = (post: BlogPost) => {
        posthog.capture('blog_post_clicked', {
            post_id: post.id,
            post_title: post.title,
            post_slug: post.slug,
            post_author: post.author.name,
            post_date: post.date,
            language: language
        });
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <SEOHead
                title={language === 'en' ? "Blog | MyLineArts - Articles about Art and Creativity" : "Blog | MyLineArts - Artigos sobre Arte e Criatividade"}
                description={language === 'en' ? "Explore our articles about art, creativity, education and much more. Tips, tutorials and inspiration for your artistic journey." : "Explore nossos artigos sobre arte, criatividade, educação e muito mais. Dicas, tutoriais e inspiração para sua jornada artística."}
                keywords={language === 'en' ? "mylinearts blog, art articles, creativity, art education, art tips, art tutorials" : "blog mylinearts, artigos sobre arte, criatividade, educação artística, dicas de arte, tutoriais de arte"}
            />

            <header className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Blog</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    {language === 'en' ? "Discover articles, tips and inspiration for your creative journey" : "Descubra artigos, dicas e inspiração para sua jornada criativa"}
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <Link 
                            to={`${getLanguagePrefix()}/blog/${post.slug}`}
                            onClick={() => handleBlogPostClick(post)}
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 mb-4 line-clamp-2">
                                    {post.description}
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <div className="flex items-center">
                                        <img
                                            src={post.author.image}
                                            alt={post.author.name}
                                            className="w-8 h-8 rounded-full mr-2"
                                        />
                                        <span>{post.author.name}</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <time dateTime={post.date}>{post.date}</time>
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>

            <div className="mt-16 text-center">
                <p className="text-gray-600">
                    {language === 'en' ? "More articles coming soon! Stay tuned for new publications." : "Mais artigos em breve! Fique ligado para novas publicações."}
                </p>
            </div>
        </div>
    );
};

export default BlogListPage; 