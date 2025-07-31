import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18next
  .use(Backend) // טוען קבצי JSON מהשרת
  .use(LanguageDetector) // מזהה שפה אוטומטית
  .use(initReactI18next) // מחבר ל-React
  .init({
    debug: true,
    fallbackLng: "en",
    saveMissing: true,
    
detection: {
  order: ["htmlTag", "localStorage", "cookie", "navigator"],
  caches: ["localStorage"],
},

    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
