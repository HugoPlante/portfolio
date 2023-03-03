import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import fr from "./locales/fr.json";
import en from "./locales/en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: en,
      fr: fr,
    },
  });

export default i18n;
