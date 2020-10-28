import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import index_en from "./en/index.json"
import index_br from "./br/index.json"

import navbar_en from "./en/navbar.json"
import navbar_br from "./br/navbar.json"

import areas_en from "./en/areas.json"
import areas_br from "./br/areas.json"

/*Localization for index page. Use as template.*/

const resources = {
  en: {
    index: index_en,
    navbar: navbar_en,
    areas: areas_en
  },
  br: {
    index: index_br,
    navbar: navbar_br,
    areas: areas_br
  }
};


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "br",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: true // no xss here :c
    }
  });

export default i18n;
