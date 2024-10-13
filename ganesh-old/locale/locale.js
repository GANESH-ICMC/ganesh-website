import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import index_en from "./en/index.json"
import index_br from "./br/index.json"

import navbar_en from "./en/navbar.json"
import navbar_br from "./br/navbar.json"

import areas_en from "./en/areas.json"
import areas_br from "./br/areas.json"

import aboutus_en from "./en/aboutus.json"
import aboutus_br from "./br/aboutus.json"

import usp_en from "./en/usp.json"
import usp_br from "./br/usp.json"

import icmc_en from "./en/icmc.json"
import icmc_br from "./br/icmc.json"

import activities_en from "./en/activities.json"
import activities_br from "./br/activities.json"

import news_en from "./en/news.json"
import news_br from "./br/news.json"

import contact_en from "./en/contact.json"
import contact_br from "./br/contact.json"

import faq_en from "./en/faq.json"
import faq_br from "./br/faq.json"
/*Localization for index page. Use as template.*/


const resources = {
  en: {
    index: index_en,
    navbar: navbar_en,
    aboutus: aboutus_en,
    areas: areas_en,
    usp: usp_en,
    icmc: icmc_en,
    activities: activities_en,
    news: news_en,
    contact: contact_en,
    faq: faq_en
  },
  br: {
    index: index_br,
    navbar: navbar_br,
    aboutus: aboutus_br,
    areas: areas_br,
    usp: usp_br,
    icmc: icmc_br,
    activities: activities_br,
    news: news_br,
    contact: contact_br,
    faq: faq_br
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
