import { Heart, Clock, Palette, Users, Star, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Benefits = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Heart className="w-10 h-10 text-primary-500" />,
      title: t('benefits.personal.title'),
      description: t('benefits.personal.description'),
    },
    {
      icon: <Clock className="w-10 h-10 text-primary-500" />,
      title: t('benefits.fast.title'),
      description: t('benefits.fast.description'),
    },
    {
      icon: <Palette className="w-10 h-10 text-primary-500" />,
      title: t('benefits.creative.title'),
      description: t('benefits.creative.description'),
    },
    {
      icon: <Users className="w-10 h-10 text-primary-500" />,
      title: t('benefits.family.title'),
      description: t('benefits.family.description'),
    },
    {
      icon: <Star className="w-10 h-10 text-primary-500" />,
      title: t('benefits.gift.title'),
      description: t('benefits.gift.description'),
    },
    {
      icon: <Award className="w-10 h-10 text-primary-500" />,
      title: t('benefits.quality.title'),
      description: t('benefits.quality.description'),
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('benefits.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('benefits.subtitle')}
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start">
                <div className="shrink-0 p-3 rounded-lg bg-primary-100 mr-4">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;