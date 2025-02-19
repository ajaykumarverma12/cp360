import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from '../../../../public/locales/en/common.json';
import frCommon from '../../../../public/locales/fr/common.json';
// import esCommon from '../../../../public/locales/es/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enCommon },
      fr: { translation: frCommon },
    //   es: { translation: esCommon },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
