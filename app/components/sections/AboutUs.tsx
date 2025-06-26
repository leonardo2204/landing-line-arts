import { Heart, Lightbulb, Users, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const AboutUs = () => {
  const { language } = useLanguage();

  const aboutData = {
    'pt-BR': {
      title: 'Nossa história',
      subtitle: 'Descubra como nasceu a ideia de democratizar a criação de livros de colorir personalizados',
      story: {
        title: 'A inspiração por trás do MylineArts',
        content: [
          'Tudo começou quando descobri o fenômeno "Boobie Goods", que está super em alta no momento. Vi uma influenciadora que criou um livro de colorir personalizado para a mãe dela no mesmo estilo, e fiquei impressionada com o resultado.',
          'Percebi que nem todo mundo tem a habilidade artística para criar algo assim, mas todos merecem ter a mesma oportunidade de presentear alguém especial com algo tão único e pessoal.',
          'Foi assim que nasceu o MylineArts: para democratizar essa experiência e permitir que qualquer pessoa possa transformar suas memórias mais preciosas em páginas de colorir personalizadas.'
        ]
      },
      mission: {
        title: 'Nossa missão',
        description: 'Tornar a criação de livros de colorir personalizados acessível para todos, independente de habilidades artísticas.',
        values: [
          {
            icon: <Heart className="w-6 h-6 text-primary-500" />,
            title: 'Conexão emocional',
            description: 'Acreditamos no poder das memórias e na importância de preservá-las de forma criativa.'
          },
          {
            icon: <Users className="w-6 h-6 text-secondary-500" />,
            title: 'Acessibilidade',
            description: 'Queremos que todos tenham acesso a essa experiência, independente de suas habilidades técnicas.'
          },
          {
            icon: <Sparkles className="w-6 h-6 text-accent-500" />,
            title: 'Inovação',
            description: 'Utilizamos tecnologia de ponta para transformar ideias simples em experiências extraordinárias.'
          }
        ]
      },
      cta: {
        title: 'Faça parte da nossa história',
        description: 'Junte-se a milhares de pessoas que já transformaram suas memórias em arte.',
        button: 'Criar minha primeira imagem'
      }
    },
    'en': {
      title: 'Our story',
      subtitle: 'Discover how the idea to democratize personalized coloring book creation was born',
      story: {
        title: 'The inspiration behind MylineArts',
        content: [
          'It all started when I discovered the "Boobie Goods" phenomenon, which is super trending right now. I saw an influencer who created a personalized coloring book for her mother in the same style, and I was impressed with the result.',
          'I realized that not everyone has the artistic skills to create something like that, but everyone deserves the same opportunity to give someone special something so unique and personal.',
          'That\'s how MylineArts was born: to democratize this experience and allow anyone to transform their most precious memories into personalized coloring pages.'
        ]
      },
      mission: {
        title: 'Our mission',
        description: 'Make personalized coloring book creation accessible to everyone, regardless of artistic skills.',
        values: [
          {
            icon: <Heart className="w-6 h-6 text-primary-500" />,
            title: 'Emotional connection',
            description: 'We believe in the power of memories and the importance of preserving them creatively.'
          },
          {
            icon: <Users className="w-6 h-6 text-secondary-500" />,
            title: 'Accessibility',
            description: 'We want everyone to have access to this experience, regardless of their technical skills.'
          },
          {
            icon: <Sparkles className="w-6 h-6 text-accent-500" />,
            title: 'Innovation',
            description: 'We use cutting-edge technology to transform simple ideas into extraordinary experiences.'
          }
        ]
      },
      cta: {
        title: 'Be part of our story',
        description: 'Join thousands of people who have already transformed their memories into art.',
        button: 'Generate my first image'
      }
    }
  };

  const currentData = aboutData[language] || aboutData['pt-BR'];

  const handleGetStartedClick = () => {
    window.location.href = 'https://app.mylinearts.com';
  };

  return (
    <section id="about-us" className="py-20 bg-linear-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {currentData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentData.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Story Section */}
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 mb-12">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-primary-100 rounded-lg mr-4">
                <Lightbulb className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                {currentData.story.title}
              </h3>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              {currentData.story.content.map((paragraph, index) => (
                <p
                  key={index}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Mission and Values */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Mission */}
            <div
              className="bg-white rounded-2xl shadow-md p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {currentData.mission.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {currentData.mission.description}
              </p>
            </div>

            {/* Values */}
            <div
              className="space-y-6"
            >
              {currentData.mission.values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 flex items-start"
                >
                  <div className="shrink-0 p-3 bg-gray-50 rounded-lg mr-4">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div
            className="text-center mt-16"
          >
            <div className="bg-linear-to-r from-primary-500 to-secondary-500 rounded-2xl shadow-xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {currentData.cta.title}
              </h3>
              <p className="text-xl mb-8 opacity-90">
                {currentData.cta.description}
              </p>
              <button
                onClick={handleGetStartedClick}
                className="bg-white text-primary-600 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {currentData.cta.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;