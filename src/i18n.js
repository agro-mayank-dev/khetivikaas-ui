import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const API_KEY = import.meta.env.VITE_I18NEXUS_API_KEY;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "hi", "pa"],
    load: "languageOnly",
    ns: ["about"],
    defaultNS: "about",

    backend: {
      loadPath: `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${API_KEY}`,
      allowMultiLoading: true,
      crossDomain: true,
    },

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["cookie"],
    },
  });

export default i18n;
