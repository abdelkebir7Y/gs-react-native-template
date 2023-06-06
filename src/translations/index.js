import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import ar from "./ar-MA.json";
import fr from "./fr-FR.json";

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: fr },
    ar: { translation: ar },
  },
  lng: "fr",
  fallbackLng: "fr",
  compatibilityJSON: "v3",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
