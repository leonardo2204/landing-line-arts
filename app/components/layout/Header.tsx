import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSelector from '../ui/LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const headerClass = isScrolled
    ? 'bg-white shadow-md'
    : 'bg-transparent';

  const isHomePage = location.pathname === '/' || location.pathname === '/en';

  // Get the current language prefix for navigation
  const getLanguagePrefix = () => {
    return location.pathname.startsWith('/en') ? '/en' : '';
  };

  const handleSectionScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
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

  const handleGetStartedClick = () => {
    window.location.href = 'https://app.mylinearts.com';
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${headerClass}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to={getLanguagePrefix() || '/'} className="flex items-center">
              <img src="/logo.png" alt="MylineArts Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on smaller screens to prevent wrapping */}
          <nav className="hidden xl:flex items-center space-x-6">
            <LanguageSelector />
            {isHomePage ? (
              <>
                <a
                  href="#how-it-works"
                  onClick={(e) => handleSectionScroll(e, 'how-it-works')}
                  className="text-gray-600 hover:text-primary-600 font-medium whitespace-nowrap"
                >
                  {t('nav.howItWorks')}
                </a>
                <a
                  href="#benefits"
                  onClick={(e) => handleSectionScroll(e, 'benefits')}
                  className="text-gray-600 hover:text-primary-600 font-medium whitespace-nowrap"
                >
                  {t('nav.benefits')}
                </a>
                <a
                  href="#about-us"
                  onClick={(e) => handleSectionScroll(e, 'about-us')}
                  className="text-gray-600 hover:text-primary-600 font-medium whitespace-nowrap"
                >
                  {language === 'pt-BR' ? 'Sobre nós' : 'About us'}
                </a>
                <a
                  href="#pricing"
                  onClick={handlePricingClick}
                  className="text-gray-600 hover:text-primary-600 font-medium whitespace-nowrap"
                >
                  {t('nav.pricing')}
                </a>
                <a
                  href="#faq"
                  onClick={(e) => handleSectionScroll(e, 'faq')}
                  className="text-gray-600 hover:text-primary-600 font-medium whitespace-nowrap"
                >
                  {t('nav.faq')}
                </a>
                <Link
                  to={`https://blog.mylinearts.com`}
                  target="_blank"
                  rel="noopener"
                  className="text-gray-600 hover:text-primary-600 font-medium whitespace-nowrap"
                >
                  {language === 'pt-BR' ? 'Blog' : 'Blog'}
                </Link>
                <button
                  onClick={handleGetStartedClick}
                  className="btn btn-primary whitespace-nowrap"
                >
                  {t('nav.getStarted')}
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleGetStartedClick}
                  className="btn btn-primary whitespace-nowrap"
                >
                  {t('nav.getStarted')}
                </button>
              </div>
            )}
          </nav>

          {/* Mobile menu button - Shows on xl and smaller screens */}
          <div className="xl:hidden flex items-center space-x-4">
            <LanguageSelector />
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white shadow-lg absolute w-full">
          <div className="px-4 py-3 space-y-2 sm:px-6">
            {isHomePage ? (
              <>
                <a
                  href="#how-it-works"
                  onClick={(e) => handleSectionScroll(e, 'how-it-works')}
                  className="block py-2 text-gray-600 hover:text-primary-600 font-medium"
                >
                  {t('nav.howItWorks')}
                </a>
                <a
                  href="#benefits"
                  onClick={(e) => handleSectionScroll(e, 'benefits')}
                  className="block py-2 text-gray-600 hover:text-primary-600 font-medium"
                >
                  {t('nav.benefits')}
                </a>
                <a
                  href="#about-us"
                  onClick={(e) => handleSectionScroll(e, 'about-us')}
                  className="block py-2 text-gray-600 hover:text-primary-600 font-medium"
                >
                  {language === 'pt-BR' ? 'Sobre nós' : 'About us'}
                </a>
                <a
                  href="#pricing"
                  onClick={handlePricingClick}
                  className="block py-2 text-gray-600 hover:text-primary-600 font-medium"
                >
                  {t('nav.pricing')}
                </a>
                <a
                  href="#faq"
                  onClick={(e) => handleSectionScroll(e, 'faq')}
                  className="block py-2 text-gray-600 hover:text-primary-600 font-medium"
                >
                  {t('nav.faq')}
                </a>
                <Link
                  to={`${getLanguagePrefix()}/blog`}
                  className="block py-2 text-gray-600 hover:text-primary-600 font-medium"
                >
                  {language === 'pt-BR' ? 'Blog' : 'Blog'}
                </Link>
                <button
                  onClick={handleGetStartedClick}
                  className="block w-full text-center py-2 px-4 bg-primary-600 text-white rounded-md hover:bg-primary-700 font-medium"
                >
                  {t('nav.getStarted')}
                </button>
              </>
            ) : (
              <div className="py-2">
                <button
                  onClick={handleGetStartedClick}
                  className="block w-full text-center py-2 px-4 bg-primary-600 text-white rounded-md hover:bg-primary-700 font-medium"
                >
                  {t('nav.getStarted')}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;