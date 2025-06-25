import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router';
import { ArrowLeft, Shield, Eye, Lock, Users, Mail, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PrivacyPolicyPage = () => {
  const { language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    document.title = language === 'pt-BR' 
      ? 'Política de Privacidade | MylineArts' 
      : 'Privacy Policy | MylineArts';
    window.scrollTo(0, 0);
  }, [language]);

  const getLanguagePrefix = () => {
    return location.pathname.startsWith('/en') ? '/en' : '';
  };

  const privacyData = {
    'pt-BR': {
      title: 'Política de privacidade',
      lastUpdated: 'Última atualização: 12 de janeiro de 2025',
      backToHome: 'Voltar para início',
      sections: [
        {
          icon: <Shield className="w-6 h-6 text-primary-500" />,
          title: '1. Informações que coletamos',
          content: [
            'Coletamos informações que você nos fornece diretamente, como:',
            '• Endereço de e-mail quando você se cadastra ou entra em contato conosco',
            '• Imagens que você carrega para transformar em páginas para colorir',
            '• Informações de pagamento processadas por nossos parceiros seguros',
            '• Dados de uso da plataforma para melhorar nossos serviços'
          ]
        },
        {
          icon: <Eye className="w-6 h-6 text-primary-500" />,
          title: '2. Como usamos suas informações',
          content: [
            'Utilizamos suas informações para:',
            '• Processar suas imagens usando nossa tecnologia de IA',
            '• Fornecer suporte ao cliente e responder suas dúvidas',
            '• Processar pagamentos e entregar seus produtos digitais',
            '• Melhorar nossos serviços e desenvolver novos recursos',
            '• Enviar comunicações importantes sobre sua conta (apenas quando necessário)'
          ]
        },
        {
          icon: <Lock className="w-6 h-6 text-primary-500" />,
          title: '3. Proteção de dados',
          content: [
            'Levamos a segurança dos seus dados muito a sério:',
            '• Todas as imagens são processadas de forma segura e criptografada',
            '• Não armazenamos suas imagens por mais tempo do que necessário',
            '• Utilizamos protocolos de segurança padrão da indústria',
            '• Seus dados de pagamento são processados por parceiros certificados PCI DSS',
            '• Acesso aos dados é restrito apenas a funcionários autorizados'
          ]
        },
        {
          icon: <Users className="w-6 h-6 text-primary-500" />,
          title: '4. Compartilhamento de informações',
          content: [
            'Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:',
            '• Quando necessário para processar pagamentos (através de parceiros seguros)',
            '• Para cumprir obrigações legais ou responder a solicitações governamentais',
            '• Para proteger nossos direitos, propriedade ou segurança',
            '• Com seu consentimento explícito'
          ]
        },
        {
          icon: <FileText className="w-6 h-6 text-primary-500" />,
          title: '5. Seus direitos (LGPD)',
          content: [
            'De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:',
            '• Acessar seus dados pessoais que possuímos',
            '• Corrigir dados incompletos, inexatos ou desatualizados',
            '• Solicitar a exclusão de seus dados pessoais',
            '• Revogar seu consentimento a qualquer momento',
            '• Solicitar a portabilidade de seus dados',
            '• Obter informações sobre o uso compartilhado de seus dados'
          ]
        },
        {
          icon: <Mail className="w-6 h-6 text-primary-500" />,
          title: '6. Contato',
          content: [
            'Para exercer seus direitos ou esclarecer dúvidas sobre esta política:',
            '• E-mail: legal@mylinearts.com',
            '• Responderemos sua solicitação em até 15 dias úteis',
            '• Para solicitações urgentes, entre em contato através do nosso suporte'
          ]
        }
      ],
      additionalInfo: {
        title: 'Informações adicionais',
        content: [
          'Esta política pode ser atualizada periodicamente. Notificaremos sobre mudanças significativas.',
          'Ao usar nossos serviços, você concorda com esta política de privacidade.',
          'Esta política é regida pelas leis brasileiras e está em conformidade com a LGPD.'
        ]
      }
    },
    'en': {
      title: 'Privacy policy',
      lastUpdated: 'Last updated: January 12, 2025',
      backToHome: 'Back to home',
      sections: [
        {
          icon: <Shield className="w-6 h-6 text-primary-500" />,
          title: '1. Information we collect',
          content: [
            'We collect information you provide directly to us, such as:',
            '• Email address when you sign up or contact us',
            '• Images you upload to transform into coloring pages',
            '• Payment information processed by our secure partners',
            '• Platform usage data to improve our services'
          ]
        },
        {
          icon: <Eye className="w-6 h-6 text-primary-500" />,
          title: '2. How we use your information',
          content: [
            'We use your information to:',
            '• Process your images using our AI technology',
            '• Provide customer support and answer your questions',
            '• Process payments and deliver your digital products',
            '• Improve our services and develop new features',
            '• Send important communications about your account (only when necessary)'
          ]
        },
        {
          icon: <Lock className="w-6 h-6 text-primary-500" />,
          title: '3. Data protection',
          content: [
            'We take the security of your data very seriously:',
            '• All images are processed securely and encrypted',
            '• We do not store your images longer than necessary',
            '• We use industry-standard security protocols',
            '• Your payment data is processed by PCI DSS certified partners',
            '• Data access is restricted to authorized employees only'
          ]
        },
        {
          icon: <Users className="w-6 h-6 text-primary-500" />,
          title: '4. Information sharing',
          content: [
            'We do not sell, rent, or share your personal information with third parties, except:',
            '• When necessary to process payments (through secure partners)',
            '• To comply with legal obligations or respond to government requests',
            '• To protect our rights, property, or safety',
            '• With your explicit consent'
          ]
        },
        {
          icon: <FileText className="w-6 h-6 text-primary-500" />,
          title: '5. Your rights (GDPR)',
          content: [
            'In accordance with GDPR, you have the right to:',
            '• Access your personal data that we hold',
            '• Correct incomplete, inaccurate, or outdated data',
            '• Request deletion of your personal data',
            '• Revoke your consent at any time',
            '• Request portability of your data',
            '• Obtain information about shared use of your data'
          ]
        },
        {
          icon: <Mail className="w-6 h-6 text-primary-500" />,
          title: '6. Contact',
          content: [
            'To exercise your rights or clarify questions about this policy:',
            '• Email: legal@mylinearts.com',
            '• We will respond to your request within 15 business days',
            '• For urgent requests, contact us through our support'
          ]
        }
      ],
      additionalInfo: {
        title: 'Additional information',
        content: [
          'This policy may be updated periodically. We will notify about significant changes.',
          'By using our services, you agree to this privacy policy.',
          'This policy is governed by applicable laws and complies with GDPR.'
        ]
      }
    }
  };

  const currentData = privacyData[language] || privacyData['pt-BR'];

  return (
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
                  ? 'Tem dúvidas sobre nossa política de privacidade?' 
                  : 'Questions about our privacy policy?'}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === 'pt-BR'
                  ? 'Entre em contato conosco e teremos prazer em esclarecer qualquer dúvida.'
                  : 'Contact us and we\'ll be happy to clarify any questions.'}
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
  );
};

export default PrivacyPolicyPage;