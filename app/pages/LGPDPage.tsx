import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router';
import { ArrowLeft, Scale, UserCheck, FileText, Shield, Eye, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LGPDPage = () => {
  const { language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    document.title = language === 'pt-BR' 
      ? 'LGPD - Lei Geral de Proteção de Dados | MylineArts' 
      : 'GDPR - General Data Protection Regulation | MylineArts';
    window.scrollTo(0, 0);
  }, [language]);

  const getLanguagePrefix = () => {
    return location.pathname.startsWith('/en') ? '/en' : '';
  };

  const lgpdData = {
    'pt-BR': {
      title: 'LGPD - Lei Geral de Proteção de Dados',
      lastUpdated: 'Última atualização: 12 de janeiro de 2025',
      backToHome: 'Voltar para início',
      intro: 'O MylineArts está comprometido com a proteção dos seus dados pessoais e em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018).',
      sections: [
        {
          icon: <Scale className="w-6 h-6 text-primary-500" />,
          title: '1. Nosso compromisso com a LGPD',
          content: [
            'Implementamos todas as medidas necessárias para garantir conformidade total com a LGPD.',
            'Nossos processos de coleta, tratamento e armazenamento de dados seguem os princípios da lei.',
            'Mantemos registros detalhados de todas as atividades de tratamento de dados.',
            'Nossa equipe é treinada regularmente sobre proteção de dados e privacidade.',
            'Realizamos auditorias periódicas para garantir conformidade contínua.'
          ]
        },
        {
          icon: <UserCheck className="w-6 h-6 text-primary-500" />,
          title: '2. Seus direitos como titular de dados',
          content: [
            'Conforme a LGPD, você tem os seguintes direitos:',
            '',
            '• Confirmação da existência de tratamento dos seus dados',
            '• Acesso aos seus dados pessoais que possuímos',
            '• Correção de dados incompletos, inexatos ou desatualizados',
            '• Anonimização, bloqueio ou eliminação de dados desnecessários',
            '• Portabilidade dos dados para outro fornecedor',
            '• Eliminação dos dados tratados com seu consentimento',
            '• Informações sobre compartilhamento de dados',
            '• Revogação do consentimento a qualquer momento'
          ]
        },
        {
          icon: <FileText className="w-6 h-6 text-primary-500" />,
          title: '3. Base legal para tratamento',
          content: [
            'Tratamos seus dados pessoais com base nas seguintes hipóteses legais:',
            '',
            'Consentimento: Para envio de comunicações promocionais (quando aplicável)',
            'Execução de contrato: Para prestação dos nossos serviços',
            'Legítimo interesse: Para melhorias do serviço e segurança',
            'Cumprimento de obrigação legal: Para atender exigências fiscais e regulatórias',
            '',
            'Sempre informamos claramente qual base legal utilizamos para cada tratamento.'
          ]
        },
        {
          icon: <Shield className="w-6 h-6 text-primary-500" />,
          title: '4. Medidas de segurança',
          content: [
            'Implementamos medidas técnicas e organizacionais robustas:',
            '',
            'Segurança técnica:',
            '• Criptografia de dados em trânsito e em repouso',
            '• Controles de acesso baseados em funções',
            '• Monitoramento contínuo de segurança',
            '• Backups seguros e planos de recuperação',
            '',
            'Segurança organizacional:',
            '• Políticas internas de proteção de dados',
            '• Treinamento regular da equipe',
            '• Contratos de confidencialidade',
            '• Procedimentos de resposta a incidentes'
          ]
        },
        {
          icon: <Eye className="w-6 h-6 text-primary-500" />,
          title: '5. Transparência e accountability',
          content: [
            'Mantemos total transparência sobre nosso tratamento de dados:',
            '',
            '• Documentamos todas as atividades de tratamento',
            '• Realizamos avaliações de impacto quando necessário',
            '• Mantemos registros de consentimentos e revogações',
            '• Publicamos relatórios de transparência periodicamente',
            '• Cooperamos com autoridades de proteção de dados',
            '',
            'Nosso Encarregado de Dados (DPO) supervisiona todas as atividades de proteção de dados.'
          ]
        },
        {
          icon: <Mail className="w-6 h-6 text-primary-500" />,
          title: '6. Como exercer seus direitos',
          content: [
            'Para exercer qualquer dos seus direitos sob a LGPD:',
            '',
            '• E-mail: legal@mylinearts.com',
            '• Assunto: "Solicitação LGPD - [seu direito]"',
            '• Prazo de resposta: até 15 dias úteis',
            '• Documentação: pode ser necessária para verificação de identidade',
            '',
            'Não cobramos taxas para atender solicitações relacionadas aos seus direitos.',
            'Em casos complexos, o prazo pode ser estendido por mais 15 dias.'
          ]
        }
      ],
      additionalInfo: {
        title: 'Informações adicionais',
        content: [
          'Em caso de violação de dados, notificaremos a ANPD e os titulares conforme exigido pela lei.',
          'Mantemos contratos de proteção de dados com todos os nossos fornecedores.',
          'Realizamos transferências internacionais apenas para países com nível adequado de proteção.',
          'Esta página é atualizada sempre que há mudanças em nossos processos de proteção de dados.'
        ]
      }
    },
    'en': {
      title: 'GDPR - General Data Protection Regulation',
      lastUpdated: 'Last updated: January 12, 2025',
      backToHome: 'Back to home',
      intro: 'MylineArts is committed to protecting your personal data and in full compliance with the General Data Protection Regulation (GDPR).',
      sections: [
        {
          icon: <Scale className="w-6 h-6 text-primary-500" />,
          title: '1. Our commitment to GDPR',
          content: [
            'We have implemented all necessary measures to ensure full GDPR compliance.',
            'Our data collection, processing, and storage processes follow the principles of the law.',
            'We maintain detailed records of all data processing activities.',
            'Our team is regularly trained on data protection and privacy.',
            'We conduct periodic audits to ensure continuous compliance.'
          ]
        },
        {
          icon: <UserCheck className="w-6 h-6 text-primary-500" />,
          title: '2. Your rights as a data subject',
          content: [
            'Under GDPR, you have the following rights:',
            '',
            '• Confirmation of the existence of processing of your data',
            '• Access to your personal data that we hold',
            '• Correction of incomplete, inaccurate, or outdated data',
            '• Anonymization, blocking, or deletion of unnecessary data',
            '• Data portability to another provider',
            '• Deletion of data processed with your consent',
            '• Information about data sharing',
            '• Withdrawal of consent at any time'
          ]
        },
        {
          icon: <FileText className="w-6 h-6 text-primary-500" />,
          title: '3. Legal basis for processing',
          content: [
            'We process your personal data based on the following legal grounds:',
            '',
            'Consent: For sending promotional communications (when applicable)',
            'Contract performance: For providing our services',
            'Legitimate interest: For service improvements and security',
            'Legal obligation: To meet tax and regulatory requirements',
            '',
            'We always clearly inform which legal basis we use for each processing.'
          ]
        },
        {
          icon: <Shield className="w-6 h-6 text-primary-500" />,
          title: '4. Security measures',
          content: [
            'We implement robust technical and organizational measures:',
            '',
            'Technical security:',
            '• Data encryption in transit and at rest',
            '• Role-based access controls',
            '• Continuous security monitoring',
            '• Secure backups and recovery plans',
            '',
            'Organizational security:',
            '• Internal data protection policies',
            '• Regular team training',
            '• Confidentiality agreements',
            '• Incident response procedures'
          ]
        },
        {
          icon: <Eye className="w-6 h-6 text-primary-500" />,
          title: '5. Transparency and accountability',
          content: [
            'We maintain full transparency about our data processing:',
            '',
            '• We document all processing activities',
            '• We conduct impact assessments when necessary',
            '• We maintain records of consents and withdrawals',
            '• We publish transparency reports periodically',
            '• We cooperate with data protection authorities',
            '',
            'Our Data Protection Officer (DPO) oversees all data protection activities.'
          ]
        },
        {
          icon: <Mail className="w-6 h-6 text-primary-500" />,
          title: '6. How to exercise your rights',
          content: [
            'To exercise any of your rights under GDPR:',
            '',
            '• Email: legal@mylinearts.com',
            '• Subject: "GDPR Request - [your right]"',
            '• Response time: up to 30 days',
            '• Documentation: may be required for identity verification',
            '',
            'We do not charge fees for handling requests related to your rights.',
            'In complex cases, the deadline may be extended by another 30 days.'
          ]
        }
      ],
      additionalInfo: {
        title: 'Additional information',
        content: [
          'In case of data breach, we will notify authorities and data subjects as required by law.',
          'We maintain data protection agreements with all our suppliers.',
          'We conduct international transfers only to countries with adequate level of protection.',
          'This page is updated whenever there are changes in our data protection processes.'
        ]
      }
    }
  };

  const currentData = lgpdData[language] || lgpdData['pt-BR'];

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
              <p className="text-gray-600 text-lg mb-6">
                {currentData.lastUpdated}
              </p>
              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  {currentData.intro}
                </p>
              </div>
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
                  ? 'Precisa exercer seus direitos sob a LGPD?' 
                  : 'Need to exercise your rights under GDPR?'}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === 'pt-BR'
                  ? 'Nossa equipe está pronta para atender suas solicitações de forma rápida e eficiente.'
                  : 'Our team is ready to handle your requests quickly and efficiently.'}
              </p>
              <a 
                href="mailto:legal@mylinearts.com"
                className="btn btn-primary inline-flex items-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                {language === 'pt-BR' ? 'Exercer meus direitos' : 'Exercise my rights'}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LGPDPage;