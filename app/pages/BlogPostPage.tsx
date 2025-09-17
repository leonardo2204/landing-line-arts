import { Link, useParams } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import SEOHead from "../components/SEOHead";
import { getBlogPostBySlug } from "../utils/blogContent";
import posthog from "posthog-js";

const BlogPostPage: React.FC = () => {
  const { language } = useLanguage();
  const { slug } = useParams();

  // Get blog post content by slug
  const blogPost = getBlogPostBySlug(slug || "");

  if (!blogPost) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">
          {language === "en" ? "Post not found" : "Post não encontrado"}
        </h1>
        <p className="text-center">
          {language === "en"
            ? "The blog post you are looking for does not exist."
            : "O post do blog que você está procurando não existe."}
        </p>
      </div>
    );
  }

  // Get the current language prefix for navigation
  const getLanguagePrefix = () => {
    return language === "en" ? "/en" : "";
  };

  const handleBackClick = () => {
    posthog.capture("blog_back_button_clicked", {
      language: language,
      page: "blog_post",
      post_slug: blogPost.slug,
    });
  };

  const ContentComponent = blogPost.content;

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
          {language === "en" ? "Back to blog" : "Voltar para o blog"}
        </Link>
      </div>

      <SEOHead
        seoData={blogPost.seoData}
        type="article"
        publishedTime={blogPost.publishedTime}
        author={blogPost.author.name}
        image={blogPost.bannerImage}
      />

      <article className="prose lg:prose-xl">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-4">
            {blogPost.title[language]}
          </h1>
          <div className="text-gray-600 mb-8">
            <time dateTime={blogPost.publishedTime}>{blogPost.date}</time> •{" "}
            {blogPost.readTime[language]}
            <div className="flex items-center mt-4">
              <img
                src={blogPost.author.image}
                alt={
                  language === "en"
                    ? `Author: ${blogPost.author.name}`
                    : `Autor: ${blogPost.author.name}`
                }
                className="w-10 h-10 rounded-full mr-3"
              />
              <span className="text-gray-800 font-medium">
                {language === "en"
                  ? `Posted by ${blogPost.author.name}`
                  : `Postado por ${blogPost.author.name}`}
              </span>
            </div>
          </div>
          <div className="mb-8">
            <img
              src={blogPost.bannerImage}
              alt={blogPost.title[language]}
              className="w-full h-128 object-cover rounded-lg shadow-lg"
            />
          </div>
        </header>

        <ContentComponent language={language} />

        <footer className="border-t pt-8 mt-12">
          <div className="text-right">
            <p className="text-gray-600">
              {language === "en"
                ? `Updated on: ${blogPost.date}`
                : `Atualizado em: ${blogPost.date}`}
            </p>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPostPage;
