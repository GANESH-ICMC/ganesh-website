import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
  en: {
    translation: {
      "cripto"  : "This area focuses on the principles and methods of codification on comunication in order to make information unintelligible to non authorized third parties.",
      "rev"     : "This area studies assembly languages, computer architectures, reverse engineering techniques, malwares and low level linux systems.",
      "web"     : "This group studies web vulnerabilities, attack methods, counter measures and mitigation in web services implementations and architetures.",
      "network" : "This area focuses in the studies of computer networks, contemplating communication protocols, wired and wireless technologies as well as sniffing, DoS, MITM attacks and cryptography stripping.",
      "tcripto" : "Cryptography",
      "trev"    : "Reverse Engineering",
      "tweb"    : "Web Security",
      "tnetwork": "Network Security"
    }
  },
  br: {
    translation: {
      "cripto"  : "Esta frente foca nos princípios de métodos de codificação em comunicações para que a informação seja ininteligível para terceiros não autorizados",
      "rev"     : "Esta frente estuda linguagens assembly, arquiteturas de computadores, técnicas de engenharia reversa, malwares e sistemas linux em baixo nível.",
      "web"     : "Esta frente estuda vulnerabilidades web, métodos de ataque, contramedidas e mitigações em implementações de serviços web e arquiteturas.",
      "network" : "Esta frente foca nos estudos de redes computacionais, contemplando protocolos de comunicação, tecnologias com ou sem fio assim como sniffing, DoS, ataques MITM e remoção de criptografias.",
      "tcripto" : "Criptografia",
      "trev"    : "Engenharia Reversa",
      "tweb"    : "Segurança Web",
      "tnetwork": "Segurança de Redes"
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
