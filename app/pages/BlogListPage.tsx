import { useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';
import { blogListSEOData, BASE_URL, getLanguageFromPath } from '../utils/seoData';
import { blogPosts } from '../utils/blog';
import posthog from 'posthog-js';
import type { Route } from './+types/BlogListPage';

export const meta: Route.MetaFunction = ({ location }) => {
  const language = getLanguageFromPath(location.pathname);
  const seo = blogListSEOData[language];

  return [
    { title: seo.title },
    { name: "description", content: seo.description },
    { name: "keywords", content: seo.keywords },
    { property: "og:title", content: seo.ogTitle || seo.title },
    { property: "og:description", content: seo.ogDescription || seo.description },
    { property: "og:image", content: `${BASE_URL}/logo.png` },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:url", content: `${BASE_URL}${location.pathname}` },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "MylineArts" },
    { property: "og:locale", content: seo.locale },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: seo.twitterTitle || seo.title },
    { name: "twitter:description", content: seo.twitterDescription || seo.description },
    { name: "twitter:image", content: `${BASE_URL}/logo.png` },
    { name: "twitter:creator", content: "@mylinearts" },
  ];
};

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

    const handleBlogPostClick = (post: typeof blogPosts[0]) => {
        posthog.capture('blog_post_clicked', {
            post_slug: post.slug,
            post_title: post.title[language],
            post_author: post.author.name,
            post_date: post.date,
            language: language
        });
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <SEOHead seoData={blogListSEOData} />

            <header className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Blog</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    {language === 'en' ? "Discover articles, tips and inspiration for your creative journey" : "Descubra artigos, dicas e inspiração para sua jornada criativa"}
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.sort((a, b) => new Date(b.publishedTime).getTime() - new Date(a.publishedTime).getTime()).map((post) => (
                    <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <Link
                            to={`${getLanguagePrefix()}/blog/${post.slug}`}
                            onClick={() => handleBlogPostClick(post)}
                        >
                            <img
                                src={post.bannerImage || '/blog/placeholder.jpg'}
                                alt={post.title[language]}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                                    {post.title[language]}
                                </h2>
                                <p className="text-gray-600 mb-4 line-clamp-2">
                                    {post.description[language]}
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
                                        <time dateTime={post.publishedTime}>{post.date}</time>
                                        <span>{post.readTime[language]}</span>
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