import { Heart, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/en';
  const { t, language } = useLanguage();

  // Get the current language prefix for navigation
  const getLanguagePrefix = () => {
    return location.pathname.startsWith('/en') ? '/en' : '';
  };

  const handleSectionScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    if (!isHomePage) {
      const prefix = getLanguagePrefix();
      window.location.href = `${prefix}/#${sectionId}`;
      return;
    }
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePricingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isHomePage) {
      const prefix = getLanguagePrefix();
      window.location.href = `${prefix}/#pricing`;
      return;
    }
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Link to={getLanguagePrefix() || '/'} className="flex items-center mb-4">
              <img src="/logo.png" alt="MylineArts Logo" className="h-8 w-auto" />
            </Link>
            <p className="text-gray-400 mb-4">
              {language === 'pt-BR'
                ? 'Transforme suas fotos em lindas páginas para colorir com tecnologia de IA'
                : 'Transform your photos into beautiful coloring pages with AI technology'}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/my.line.arts/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/mylinearts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/my-line-arts/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.product')}</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#how-it-works"
                    onClick={(e) => handleSectionScroll(e, 'how-it-works')}
                    className="text-gray-400 hover:text-white"
                  >
                    {t('nav.howItWorks')}
                  </a>
                </li>
                <li>
                  <a
                    href="#benefits"
                    onClick={(e) => handleSectionScroll(e, 'benefits')}
                    className="text-gray-400 hover:text-white"
                  >
                    {t('nav.benefits')}
                  </a>
                </li>
                <li>
                  <a
                    href="#about-us"
                    onClick={(e) => handleSectionScroll(e, 'about-us')}
                    className="text-gray-400 hover:text-white"
                  >
                    {language === 'pt-BR' ? 'Sobre nós' : 'About us'}
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    onClick={handlePricingClick}
                    className="text-gray-400 hover:text-white"
                  >
                    {t('nav.pricing')}
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    onClick={(e) => handleSectionScroll(e, 'faq')}
                    className="text-gray-400 hover:text-white"
                  >
                    {t('nav.faq')}
                  </a>
                </li>
                <li>
                  <Link
                    to={`${getLanguagePrefix()}/blog`}
                    className="text-gray-400 hover:text-white"
                  >
                    {language === 'pt-BR' ? 'Blog' : 'Blog'}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.legal')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to={`${getLanguagePrefix()}${language === 'pt-BR' ? '/politica-de-privacidade' : '/privacy-policy'}`}
                    className="text-gray-400 hover:text-white"
                  >
                    {t('footer.privacyPolicy')}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${getLanguagePrefix()}${language === 'pt-BR' ? '/termos-de-servico' : '/terms-of-service'}`}
                    className="text-gray-400 hover:text-white"
                  >
                    {t('footer.termsOfService')}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${getLanguagePrefix()}${language === 'pt-BR' ? '/politica-de-cookies' : '/cookie-policy'}`}
                    className="text-gray-400 hover:text-white"
                  >
                    {t('footer.cookiePolicy')}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${getLanguagePrefix()}${language === 'pt-BR' ? '/lgpd' : '/gdpr'}`}
                    className="text-gray-400 hover:text-white"
                  >
                    {t('footer.gdpr')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} mylinearts. {t('footer.rights')}
          </p>
          <p className="text-sm text-gray-400 mt-4 sm:mt-0 flex items-center">
            {t('footer.madeWith')} <Heart className="h-4 w-4 text-accent-500 mx-1" /> {t('footer.colorful')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;