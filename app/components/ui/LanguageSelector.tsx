import { useLocation, useNavigate } from 'react-router';
import { useLanguage } from '../../context/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLanguageChange = (newLanguage: 'en' | 'pt-BR') => {
    const currentPath = location.pathname;
    
    if (newLanguage === 'en') {
      // Switch to English
      if (currentPath.startsWith('/en')) {
        // Already on English route, just update the language state
        setLanguage('en');
        return;
      } else {
        // Add /en prefix
        const newPath = currentPath === '/' ? '/en' : `/en${currentPath}`;
        navigate(newPath);
      }
    } else {
      // Switch to Portuguese
      if (currentPath.startsWith('/en')) {
        // Remove /en prefix
        const newPath = currentPath.replace('/en', '') || '/';
        navigate(newPath);
      } else {
        // Already on Portuguese route, just update the language state
        setLanguage('pt-BR');
        return;
      }
    }
  };

  return (
    <select
      value={language}
      onChange={(e) => handleLanguageChange(e.target.value as 'en' | 'pt-BR')}
      className="bg-transparent text-gray-600 hover:text-primary-600 font-medium focus:outline-none cursor-pointer"
    >
      <option value="pt-BR">Português</option>
      <option value="en">English</option>
    </select>
  );
};

export default LanguageSelector;