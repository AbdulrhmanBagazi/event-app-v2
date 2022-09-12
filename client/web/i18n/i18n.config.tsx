import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// import ArabicI18n from './Arabic/ar.json'
// import EnglishI18n from './English/en.json'
import LanguageDetector from 'i18next-browser-languagedetector'
import { commonAr, indexAr, loginAr, registerAr, verifyemailAr } from './locales/ar/index.locales'
import { commonEn, indexEn, loginEn, registerEn, verifyemailEn } from './locales/en/index.locales'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  ar: {
    common: {
      ...commonAr,
    },
    index: {
      ...indexAr,
    },
    login: {
      ...loginAr,
    },
    register: {
      ...registerAr,
    },
    verifyemail: {
      ...verifyemailAr,
    },
  },
  en: {
    common: {
      ...commonEn,
    },
    index: {
      ...indexEn,
    },
    login: {
      ...loginEn,
    },
    register: {
      ...registerEn,
    },
    verifyemail: {
      ...verifyemailEn,
    },
  },
}

// const DETECTION_OPTIONS = {
//   order: ['localStorage'],
// }
// const DETECTION_OPTIONS = {
//   order: ['navigator'],
// }

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18n
