import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(HttpApi) // use http backend to load translations
  .init({
    supportedLngs: ['en', 'es', 'de'],
    lng: 'es', // default language
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json' // path to translation files
    }
  });

export default i18n;
