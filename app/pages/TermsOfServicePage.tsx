import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router';
import { ArrowLeft, FileText, Users, CreditCard, Shield, AlertTriangle, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TermsOfServicePage = () => {
  const { language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    document.title = language === 'pt-BR' 
      ? 'Termos de Serviço | MylineArts' 
      : 'Terms of Service | MylineArts';
    window.scrollTo(0, 0);
  }, [language]);

  const getLanguagePrefix = () => {
    return location.pathname.startsWith('/en') ? '/en' : '';
  };

  const termsData = {
    'pt-BR': {
      title: 'Termos de serviço',
      lastUpdated: 'Última atualização: 12 de janeiro de 2025',
      backToHome: 'Voltar para início',
      sections: [
        {
          icon: <FileText className="w-6 h-6 text-primary-500" />,
          title: '1. Aceitação dos termos',
          content: [
            'Ao acessar e usar o MylineArts, você concorda em cumprir estes Termos de Serviço.',
            'Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços.',
            'Reservamo-nos o direito de modificar estes termos a qualquer momento.',
            'O uso continuado após as modificações constitui aceitação dos novos termos.'
          ]
        },
        {
          icon: <Users className="w-6 h-6 text-primary-500" />,
          title: '2. Descrição do serviço',
          content: [
            'O MylineArts é uma plataforma que utiliza inteligência artificial para transformar fotos em páginas para colorir.',
            'Oferecemos diferentes planos de créditos para uso da plataforma.',
            'Cada crédito permite a transformação de uma imagem.',
            'Os resultados são fornecidos em formato digital de alta qualidade.',
            'Não garantimos resultados específicos, pois dependem da qualidade da imagem original.'
          ]
        },
        {
          icon: <CreditCard className="w-6 h-6 text-primary-500" />,
          title: '3. Pagamentos e reembolsos',
          content: [
            'Os pagamentos são processados através de parceiros seguros e certificados.',
            'Os créditos são válidos por 12 meses a partir da data de compra.',
            'Não oferecemos reembolsos, exceto em casos de falha técnica comprovada.',
            'Em caso de problemas técnicos, oferecemos créditos adicionais como compensação.',
            'Todos os preços estão sujeitos a alterações sem aviso prévio.'
          ]
        },
        {
          icon: <Shield className="w-6 h-6 text-primary-500" />,
          title: '4. Uso aceitável',
          content: [
            'Você deve usar o serviço apenas para fins legais e apropriados.',
            'É proibido carregar imagens que violem direitos autorais de terceiros.',
            'Não é permitido carregar conteúdo ofensivo, ilegal ou inadequado.',
            'Você é responsável por garantir que possui os direitos das imagens carregadas.',
            'Reservamo-nos o direito de remover conteúdo inadequado e suspender contas.'
          ]
        },
        {
          icon: <AlertTriangle className="w-6 h-6 text-primary-500" />,
          title: '5. Limitações de responsabilidade',
          content: [
            'O serviço é fornecido "como está" sem garantias de qualquer tipo.',
            'Não nos responsabilizamos por danos diretos ou indiretos decorrentes do uso.',
            'Nossa responsabilidade máxima é limitada ao valor pago pelos serviços.',
            'Não garantimos disponibilidade ininterrupta do serviço.',
            'Você usa o serviço por sua própria conta e risco.'
          ]
        },
        {
          icon: <Mail className="w-6 h-6 text-primary-500" />,
          title: '6. Contato e suporte',
          content: [
            'Para dúvidas sobre estes termos, entre em contato:',
            '• E-mail: legal@mylinearts.com',
            '• Tempo de resposta: até 48 horas úteis',
            '• Para questões urgentes, use o chat de suporte na plataforma'
          ]
        }
      ],
      additionalInfo: {
        title: 'Disposições gerais',
        content: [
          'Estes termos são regidos pelas leis brasileiras.',
          'Qualquer disputa será resolvida no foro da comarca de São Paulo/SP.',
          'Se alguma cláusula for considerada inválida, as demais permanecem em vigor.',
          'Estes termos constituem o acordo completo entre você e o MylineArts.'
        ]
      }
    },
    'en': {
      title: 'Terms of service',
      lastUpdated: 'Last updated: January 12, 2025',
      backToHome: 'Back to home',
      sections: [
        {
          icon: <FileText className="w-6 h-6 text-primary-500" />,
          title: '1. Acceptance of terms',
          content: [
            'By accessing and using MylineArts, you agree to comply with these Terms of Service.',
            'If you do not agree with any part of these terms, you should not use our services.',
            'We reserve the right to modify these terms at any time.',
            'Continued use after modifications constitutes acceptance of the new terms.'
          ]
        },
        {
          icon: <Users className="w-6 h-6 text-primary-500" />,
          title: '2. Service description',
          content: [
            'MylineArts is a platform that uses artificial intelligence to transform photos into coloring pages.',
            'We offer different credit plans for platform usage.',
            'Each credit allows the transformation of one image.',
            'Results are provided in high-quality digital format.',
            'We do not guarantee specific results as they depend on the original image quality.'
          ]
        },
        {
          icon: <CreditCard className="w-6 h-6 text-primary-500" />,
          title: '3. Payments and refunds',
          content: [
            'Payments are processed through secure and certified partners.',
            'Credits are valid for 12 months from the purchase date.',
            'We do not offer refunds except in cases of proven technical failure.',
            'In case of technical problems, we offer additional credits as compensation.',
            'All prices are subject to change without prior notice.'
          ]
        },
        {
          icon: <Shield className="w-6 h-6 text-primary-500" />,
          title: '4. Acceptable use',
          content: [
            'You must use the service only for legal and appropriate purposes.',
            'It is prohibited to upload images that violate third-party copyrights.',
            'Uploading offensive, illegal, or inappropriate content is not allowed.',
            'You are responsible for ensuring you have the rights to uploaded images.',
            'We reserve the right to remove inappropriate content and suspend accounts.'
          ]
        },
        {
          icon: <AlertTriangle className="w-6 h-6 text-primary-500" />,
          title: '5. Liability limitations',
          content: [
            'The service is provided "as is" without warranties of any kind.',
            'We are not responsible for direct or indirect damages arising from use.',
            'Our maximum liability is limited to the amount paid for services.',
            'We do not guarantee uninterrupted service availability.',
            'You use the service at your own risk.'
          ]
        },
        {
          icon: <Mail className="w-6 h-6 text-primary-500" />,
          title: '6. Contact and support',
          content: [
            'For questions about these terms, contact us:',
            '• Email: legal@mylinearts.com',
            '• Response time: up to 48 business hours',
            '• For urgent matters, use the support chat on the platform'
          ]
        }
      ],
      additionalInfo: {
        title: 'General provisions',
        content: [
          'These terms are governed by applicable laws.',
          'Any disputes will be resolved in the appropriate jurisdiction.',
          'If any clause is deemed invalid, the others remain in effect.',
          'These terms constitute the complete agreement between you and MylineArts.'
        ]
      }
    }
  };

  const currentData = termsData[language] || termsData['pt-BR'];

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
                  ? 'Tem dúvidas sobre nossos termos de serviço?' 
                  : 'Questions about our terms of service?'}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === 'pt-BR'
                  ? 'Nossa equipe está pronta para esclarecer qualquer dúvida sobre nossos termos.'
                  : 'Our team is ready to clarify any questions about our terms.'}
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

export default TermsOfServicePage;