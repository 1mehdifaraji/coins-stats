import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locale/en.json";
import fa from "./locale/fa.json";
import de from "./locale/de.json";
import ar from "./locale/ar.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    fa: {
      translation: fa,
    },
    en: {
      translation: en,
    },
    de: {
      translation: de,
    },
    ar: {
      translation: ar,
    },
  },
});

export default i18n;
