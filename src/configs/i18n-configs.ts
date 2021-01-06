import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from '@assets/locales/en/common.json';

import deCommon from '@assets/locales/de/common.json';

void i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    interpolation: { escapeValue: false },
    fallbackLng: 'en',
    debug: false,
    ns: ['common'],
    defaultNS: 'common',
    keySeparator: false,
    resources: {
      en: {
        common: enCommon,
      },
      de: {
        common: deCommon,
      },
    },
  });

export default i18next;
