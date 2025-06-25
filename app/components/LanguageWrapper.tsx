import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageWrapperProps {
  language: 'en' | 'pt-BR';
  children: React.ReactNode;
}

const LanguageWrapper: React.FC<LanguageWrapperProps> = ({ language, children }) => {
  const { setLanguage } = useLanguage();

  useEffect(() => {
    setLanguage(language);
  }, [language, setLanguage]);

  return <>{children}</>;
};

export default LanguageWrapper;