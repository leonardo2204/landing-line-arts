import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router';
import { ArrowLeft, Cookie, Settings, BarChart3, Shield, Users, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';
import { cookiePolicySEOData } from '../utils/seoData';

const CookiePolicyPage = () => {
  const { language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [language]);

  const getLanguagePrefix = () => {
    return location.pathname.startsWith('/en') ? '/en' : '';
  };

  const cookieData = {
    'pt-BR': {
      title: 'Política de cookies',
      lastUpdated: 'Última atualização: 12 de janeiro de 2025',
      backToHome: 'Voltar para início',
      sections: [
        {
          icon: <Cookie className="w-6 h-6 text-primary-500" />,
          title: '1. O que são cookies',
          content: [
            'Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita nosso site.',
            'Eles nos ajudam a melhorar sua experiência, lembrar suas preferências e analisar como você usa nossos serviços.',
            'Os cookies não contêm informações pessoais identificáveis por si só.',
            'Você pode controlar e gerenciar cookies através das configurações do seu navegador.'
          ]
        },
        {
          icon: <Settings className="w-6 h-6 text-primary-500" />,
          title: '2. Tipos de cookies que usamos',
          content: [
            'Cookies essenciais: Necessários para o funcionamento básico do site',
            '• Autenticação de usuário e segurança',
            '• Carrinho de compras e processamento de pagamentos',
            '• Preferências de idioma e configurações',
            '',
            'Cookies de funcionalidade: Melhoram sua experiência',
            '• Lembrar suas preferências de uso',
            '• Personalizar conteúdo baseado em suas escolhas',
            '• Facilitar navegação e usabilidade'
          ]
        },
        {
          icon: <BarChart3 className="w-6 h-6 text-primary-500" />,
          title: '3. Cookies de análise',
          content: [
            'Utilizamos cookies de análise para entender como nosso site é usado:',
            '• Google Analytics para estatísticas de uso anônimas',
            '• Métricas de performance e velocidade do site',
            '• Análise de comportamento de navegação (dados agregados)',
            '• Identificação de páginas mais populares e problemas técnicos',
            '',
            'Estes dados nos ajudam a melhorar continuamente nossos serviços.'
          ]
        },
        {
          icon: <Shield className="w-6 h-6 text-primary-500" />,
          title: '4. Cookies de terceiros',
          content: [
            'Alguns cookies são definidos por serviços de terceiros que usamos:',
            '• Processadores de pagamento (Stripe, PayPal) para transações seguras',
            '• Serviços de análise (Google Analytics) para métricas do site',
            '• Redes sociais (quando você compartilha conteúdo)',
            '',
            'Estes terceiros têm suas próprias políticas de privacidade e cookies.',
            'Recomendamos que você revise suas políticas para entender como eles usam cookies.'
          ]
        },
        {
          icon: <Users className="w-6 h-6 text-primary-500" />,
          title: '5. Gerenciamento de cookies',
          content: [
            'Você tem controle total sobre os cookies:',
            '',
            'Configurações do navegador:',
            '• Bloquear todos os cookies',
            '• Aceitar apenas cookies de sites específicos',
            '• Deletar cookies existentes',
            '• Receber notificações antes de aceitar cookies',
            '',
            'Importante: Desabilitar cookies pode afetar a funcionalidade do site.',
            'Alguns recursos podem não funcionar corretamente sem cookies essenciais.'
          ]
        },
        {
          icon: <Mail className="w-6 h-6 text-primary-500" />,
          title: '6. Contato',
          content: [
            'Para dúvidas sobre nossa política de cookies:',
            '• E-mail: legal@mylinearts.com',
            '• Responderemos em até 48 horas úteis',
            '• Para ajuda com configurações de cookies, consulte a ajuda do seu navegador'
          ]
        }
      ],
      additionalInfo: {
        title: 'Informações importantes',
        content: [
          'Esta política pode ser atualizada para refletir mudanças em nossos serviços.',
          'Notificaremos sobre mudanças significativas através do site.',
          'O uso continuado do site após mudanças constitui aceitação da nova política.',
          'Para mais informações sobre privacidade, consulte nossa Política de Privacidade.'
        ]
      }
    },
    'en': {
      title: 'Cookie policy',
      lastUpdated: 'Last updated: January 12, 2025',
      backToHome: 'Back to home',
      sections: [
        {
          icon: <Cookie className="w-6 h-6 text-primary-500" />,
          title: '1. What are cookies',
          content: [
            'Cookies are small text files stored on your device when you visit our website.',
            'They help us improve your experience, remember your preferences, and analyze how you use our services.',
            'Cookies do not contain personally identifiable information by themselves.',
            'You can control and manage cookies through your browser settings.'
          ]
        },
        {
          icon: <Settings className="w-6 h-6 text-primary-500" />,
          title: '2. Types of cookies we use',
          content: [
            'Essential cookies: Necessary for basic website functionality',
            '• User authentication and security',
            '• Shopping cart and payment processing',
            '• Language preferences and settings',
            '',
            'Functionality cookies: Enhance your experience',
            '• Remember your usage preferences',
            '• Personalize content based on your choices',
            '• Facilitate navigation and usability'
          ]
        },
        {
          icon: <BarChart3 className="w-6 h-6 text-primary-500" />,
          title: '3. Analytics cookies',
          content: [
            'We use analytics cookies to understand how our website is used:',
            '• Google Analytics for anonymous usage statistics',
            '• Site performance and speed metrics',
            '• Navigation behavior analysis (aggregated data)',
            '• Identification of popular pages and technical issues',
            '',
            'This data helps us continuously improve our services.'
          ]
        },
        {
          icon: <Shield className="w-6 h-6 text-primary-500" />,
          title: '4. Third-party cookies',
          content: [
            'Some cookies are set by third-party services we use:',
            '• Payment processors (Stripe, PayPal) for secure transactions',
            '• Analytics services (Google Analytics) for site metrics',
            '• Social networks (when you share content)',
            '',
            'These third parties have their own privacy and cookie policies.',
            'We recommend reviewing their policies to understand how they use cookies.'
          ]
        },
        {
          icon: <Users className="w-6 h-6 text-primary-500" />,
          title: '5. Cookie management',
          content: [
            'You have full control over cookies:',
            '',
            'Browser settings:',
            '• Block all cookies',
            '• Accept only cookies from specific sites',
            '• Delete existing cookies',
            '• Receive notifications before accepting cookies',
            '',
            'Important: Disabling cookies may affect website functionality.',
            'Some features may not work properly without essential cookies.'
          ]
        },
        {
          icon: <Mail className="w-6 h-6 text-primary-500" />,
          title: '6. Contact',
          content: [
            'For questions about our cookie policy:',
            '• Email: legal@mylinearts.com',
            '• We will respond within 48 business hours',
            '• For help with cookie settings, consult your browser\'s help section'
          ]
        }
      ],
      additionalInfo: {
        title: 'Important information',
        content: [
          'This policy may be updated to reflect changes in our services.',
          'We will notify about significant changes through the website.',
          'Continued use of the site after changes constitutes acceptance of the new policy.',
          'For more privacy information, see our Privacy Policy.'
        ]
      }
    }
  };

  const currentData = cookieData[language] || cookieData['pt-BR'];

  return (
    <>
      <SEOHead seoData={cookiePolicySEOData} />
      <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="mb-8">
            <Link 
              to={getLanguagePrefix() || '/'}
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              {currentData.backToHome}
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {currentData.title}
              </h1>
              <p className="text-gray-600 text-lg">
                {currentData.lastUpdated}
              </p>
            </motion.div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="space-y-12">
                {currentData.sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="border-b border-gray-100 last:border-b-0 pb-8 last:pb-0"
                  >
                    <div className="flex items-start mb-6">
                      <div className="shrink-0 p-3 bg-primary-50 rounded-lg mr-4">
                        {section.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mt-2">
                        {section.title}
                      </h2>
                    </div>
                    
                    <div className="ml-16 space-y-3">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}

                {/* Additional Information */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-primary-50 rounded-xl p-8"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {currentData.additionalInfo.title}
                  </h3>
                  <div className="space-y-3">
                    {currentData.additionalInfo.content.map((item, index) => (
                      <p key={index} className="text-gray-700">
                        {item}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center mt-12"
          >
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {language === 'pt-BR' 
                  ? 'Precisa de ajuda com configurações de cookies?' 
                  : 'Need help with cookie settings?'}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === 'pt-BR'
                  ? 'Nossa equipe pode ajudar você a configurar seus cookies da melhor forma.'
                  : 'Our team can help you configure your cookies in the best way.'}
              </p>
              <a 
                href="mailto:legal@mylinearts.com"
                className="btn btn-primary inline-flex items-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                {language === 'pt-BR' ? 'Entrar em contato' : 'Contact us'}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default CookiePolicyPage;