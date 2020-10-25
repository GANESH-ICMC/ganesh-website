import i18n from "i18next";
import { initReactI18next } from "react-i18next";

/*Localization for index page. Use as template.*/

const resources = {
  en: {
    translation: {
      "description": "Extracurricular group focused on information security."
    }
  },
  br: {
    translation: {
      "description": "Grupo extracurricular focado em segurança da informação."
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
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
