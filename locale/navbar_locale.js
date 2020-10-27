import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
  en: {
    translation: {
      "about":      "About",
      "aboutus":    "About Us",
      "institute":  "Our Institute",
      "university": "Our University",
      "areas":      "Areas",
      "activities": "Activities",
      "news":       "News",
      "contact":    "Contact"
    }
  },
  br: {
    translation: {
      "about":      "Sobre",
      "aboutus":    "Sobre Nós",
      "institute":  "Nosso Instituto",
      "university": "Nossa Universidade",
      "areas":      "Frentes",
      "activities": "Atividades",
      "news":       "Notícias",
      "contact":    "Contato"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: true // no xss here :c
    }
  });

export default i18n;
