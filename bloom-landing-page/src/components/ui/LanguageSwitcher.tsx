import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => changeLanguage('es')} className={`font-bold py-1 px-3 rounded-md text-sm ${i18n.language === 'es' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'}`}>ES</button>
      <button onClick={() => changeLanguage('en')} className={`font-bold py-1 px-3 rounded-md text-sm ${i18n.language === 'en' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'}`}>EN</button>
      <button onClick={() => changeLanguage('de')} className={`font-bold py-1 px-3 rounded-md text-sm ${i18n.language === 'de' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'}`}>DE</button>
    </div>
  );
};

export default LanguageSwitcher;
