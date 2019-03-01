import i18n from "i18next";
import LngDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationPL from "./locales/pl/translation.json";
import translationRU from "./locales/ru/translation.json";
import translationHR from "./locales/hr/translation.json";

const resources = {
  en: {
    translation: translationEN
  },
  pl: {
    translation: translationPL
  },
  ru: {
    translation: translationRU
  },
  hr: {
    translation: translationHR
  }
};

const options = {
  order: ["cookie"],

  lookupCookie: "i18next",

  caches: ["cookie"],

  cookieMinutes: 60
};

i18n
  .use(LngDetector)
  .use(initReactI18next)
  .init({
    resources,
    detection: options,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
