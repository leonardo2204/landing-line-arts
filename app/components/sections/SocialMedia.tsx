import { Instagram, Facebook, Linkedin, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const SocialMedia = () => {
  const { language } = useLanguage();

  const socialData = {
    'pt-BR': {
      title: 'Siga-nos nas redes sociais',
      subtitle: 'Acompanhe nossas novidades, dicas de colorir e inspirações criativas',
      followText: 'Seguir',
      platforms: [
        {
          name: 'Instagram',
          description: 'Veja criações incríveis e dicas de colorir',
          url: 'https://www.instagram.com/my.line.arts/',
          icon: <Instagram className="w-8 h-8" />,
          color: 'from-pink-500 to-purple-600',
          bgColor: 'bg-linear-to-br from-pink-50 to-purple-50'
        },
        {
          name: 'Facebook',
          description: 'Participe da nossa comunidade de artistas',
          url: 'https://www.facebook.com/mylinearts',
          icon: <Facebook className="w-8 h-8" />,
          color: 'from-blue-500 to-blue-700',
          bgColor: 'bg-linear-to-br from-blue-50 to-blue-100'
        },
        {
          name: 'LinkedIn',
          description: 'Conecte-se conosco profissionalmente',
          url: 'https://www.linkedin.com/company/my-line-arts/',
          icon: <Linkedin className="w-8 h-8" />,
          color: 'from-blue-600 to-blue-800',
          bgColor: 'bg-linear-to-br from-blue-50 to-indigo-50'
        }
      ]
    },
    'en': {
      title: 'Follow us on social media',
      subtitle: 'Stay updated with our latest news, coloring tips, and creative inspirations',
      followText: 'Follow',
      platforms: [
        {
          name: 'Instagram',
          description: 'See amazing creations and coloring tips',
          url: 'https://www.instagram.com/my.line.arts/',
          icon: <Instagram className="w-8 h-8" />,
          color: 'from-pink-500 to-purple-600',
          bgColor: 'bg-linear-to-br from-pink-50 to-purple-50'
        },
        {
          name: 'Facebook',
          description: 'Join our community of artists',
          url: 'https://www.facebook.com/mylinearts',
          icon: <Facebook className="w-8 h-8" />,
          color: 'from-blue-500 to-blue-700',
          bgColor: 'bg-linear-to-br from-blue-50 to-blue-100'
        },
        {
          name: 'LinkedIn',
          description: 'Connect with us professionally',
          url: 'https://www.linkedin.com/company/my-line-arts/',
          icon: <Linkedin className="w-8 h-8" />,
          color: 'from-blue-600 to-blue-800',
          bgColor: 'bg-linear-to-br from-blue-50 to-indigo-50'
        }
      ]
    }
  };

  const currentData = socialData[language] || socialData['pt-BR'];


  return (
    <section id="social-media" className="py-20 bg-linear-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {currentData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {currentData.subtitle}
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {currentData.platforms.map((platform, index) => (
            <div
              key={platform.name}
              className="group"
            >
              <div className={`${platform.bgColor} rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100`}>
                {/* Icon and Platform Name */}
                <div className="flex items-center justify-center mb-6">
                  <div className={`p-4 rounded-full bg-linear-to-r ${platform.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {platform.icon}
                  </div>
                </div>

                {/* Platform Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {platform.name}
                  </h3>
                  <p className="text-gray-600">
                    {platform.description}
                  </p>
                </div>

                {/* Follow Button */}
                <div className="text-center">
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center px-6 py-3 rounded-full bg-linear-to-r ${platform.color} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-2xl`}
                  >
                    {currentData.followText}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-md p-8 max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {language === 'pt-BR'
                ? '🎨 Compartilhe suas criações!'
                : '🎨 Share your creations!'}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'pt-BR'
                ? 'Marque-nos em suas fotos coloridas e apareça em nossas redes sociais!'
                : 'Tag us in your colored photos and get featured on our social media!'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                #MyLineArts
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
                #ColoringPages
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                #AIArt
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;