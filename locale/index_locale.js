import i18n from "i18next";
import { initReactI18next } from "react-i18next";

/*Localization for index page. Use as template.*/

const resources = {
  en: {
    translation: {
      "description": "Extracurricular group focused on information security.",
      "mission": "We have as our mission to adquire and spread knowledge \
                  on the area of information security to undergraduate \
                  students and to the community in general. This is made through \
                  the development of class materials, specific \
                  courses, workshops in public and private schools and \
                  supporting the development of projects.",
      "based":    "Our group is based at USP - University Of São Paulo, \
                  Campus São Carlos, within the Institute of Mathematical and \
                  Computer Sciences - ICMC, where we constantly develop and learn\
                  new techniques. Most of the group material is considered public\
                  and it is hosted on our Github, although a considerate amount of\
                  it is in portuguese, since our one of our big focuses are on \
                  the community of our region."
    }
  },
  br: {
    translation: {
      "description":"Grupo extracurricular focado em segurança da informação.",
      "mission":    "Nós temos como a nossa missão adquirir e divulgar conhecimentos \
                    na área de segurança da informação para estudantes de graduação e \
                    para a comunidade geral. Isso é realizado pelo desenvolvimento de \
                    materiais de ensino em salas de aula, cursos especializados, workshops \
                    em escolas públicas e privadas e apoiando o desenvolvimento de projetos.",
      "based":      "Nosso grupo é baseado na USP - Universidade de São Paulo -\
                    Campus de São Carlus, no Instituto de Ciências Matemáticas e\
                    de Computação(ICMC), onde nós constantemente desenvolvemos e\
                    aprendemos novas técnicas. A maioria\
                    do material do grupo é considerado público e está hospedado no\
                    nosso Github. Em grande parte o material é em português, dado que\
                    um dos nossos grandes focos é na comunidade da nossa região." 
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
