import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Automatically import all JSON files inside src/locales
const modules = import.meta.glob("./locales/**/*.json", { eager: true });

const resources = {};

// Build resources in { lang: { ns: json } } format
for (const path in modules) {
  const match = path.match(/\.\/locales\/([^/]+)\/([^/]+)\.json$/);
  if (match) {
    const ns = match[1]; // e.g., "about" or "home"
    const lang = match[2]; // e.g., "en", "hi", "pa"

    resources[lang] = resources[lang] || {};
    resources[lang][ns] = (modules[path]).default;
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "hi", "pa"],
    load: "languageOnly",
    ns: Object.keys(resources.en || {}), // auto detect namespaces (about, home, etc.)
    defaultNS: "about",
    interpolation: { escapeValue: false },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["cookie"],
    },
  });

export default i18n;
