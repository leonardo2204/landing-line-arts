import { ArrowRight, ImageIcon, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import HowItWorks from '../components/sections/HowItWorks';
import Benefits from '../components/sections/Benefits';
import AboutUs from '../components/sections/AboutUs';
import Pricing from '../components/sections/Pricing';
import SocialMedia from '../components/sections/SocialMedia';
import FAQ from '../components/sections/FAQ';
import { mockBeforeAfterImages } from '../utils/mockData';
import { ReactCompareSlider } from 'react-compare-slider';
import { pricingLoader } from '../loaders/pricing-loader';
import type { Route } from './+types/LandingPage';

export const loader = async ({ context, request, params }: Route.LoaderArgs) => {
  return {
    plans: pricingLoader({ context, request, params })
  };
};

export default function LandingPage() {
  const { t, language } = useLanguage();

  const handleGetStartedClick = () => {
    window.location.href = 'https://app.mylinearts.com';
  };

  const handleHowItWorksClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById('how-it-works');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-linear-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {t('landing.hero.title')}{' '}
                <span className="text-primary-600">{t('landing.hero.titleHighlight')}</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-lg">
                {t('landing.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 cursor-pointer">
                <button
                  onClick={handleGetStartedClick}
                  className="btn btn-primary flex items-center justify-center cursor-pointer"
                >
                  {t('nav.getStarted')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={handleHowItWorksClick}
                  className="btn btn-outline flex items-center justify-center cursor-pointer"
                >
                  {t('nav.howItWorks')}
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="relative">
                <div className="absolute -top-10 -left-2 z-20">
                  <div className="p-2 bg-white rounded-full shadow-lg">
                    <Sparkles className="h-8 w-8 text-primary-500" />
                  </div>
                </div>
                <div className="absolute -bottom-0 -right-6 z-20">
                  <div className="p-2 bg-white rounded-full shadow-lg">
                    <ImageIcon className="h-8 w-8 text-secondary-500" />
                  </div>
                </div>

                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                  <ReactCompareSlider
                    itemOne={
                      <img
                        src={'/family-before.webp'}
                        alt="Original photo"
                        className="object-cover w-full h-full"
                      />
                    }
                    itemTwo={
                      <img
                        src={'/family-after.webp'}
                        alt="Original photo"
                        className="object-cover w-full h-full"
                      />
                    }
                    className="h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply opacity-20"></div>
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply opacity-20"></div>
        </div>
      </section>

      {/* Feature Samples Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('landing.seeTheMagic')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('landing.seeTheMagicSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {mockBeforeAfterImages.map((image, index) => (
              <div
                key={image.id}
                className="flex flex-col"
              >
                <ReactCompareSlider
                  itemOne={
                    <img
                      src={image.before}
                      alt="Original photo"
                    />
                  }
                  itemTwo={
                    <img
                      src={image.after}
                      alt="Original photo"
                    />
                  }
                />
                <h3 className="text-xl font-bold text-gray-800 my-2">
                  {image.title[language]}
                </h3>
                <p className="text-gray-600">
                  {image.description[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Benefits Section */}
      <Benefits />

      {/* About Us Section */}
      <AboutUs />

      {/* Pricing Section */}
      <Pricing />

      {/* Social Media Section */}
      <SocialMedia />


      <section className="py-20 bg-linear-to-br from-primary-100 to-secondary-50 paper-texture">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t('landing.cta.title')}
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  {t('landing.cta.subtitle')}
                </p>
                <a
                  href={`https://web.whatsapp.com/send/?phone=5513974043819&text=Olá, gostaria de cotar um livro no MyLineArts.`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className="btn btn-primary inline-flex items-center"
                >
                  {t('landing.cta.button')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

    </div>
  );
}