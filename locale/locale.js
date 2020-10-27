import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
  en: {
    translation: {
      // Navbar
      "about":      "About",
      "aboutus":    "About Us",
      "institute":  "Our Institute",
      "university": "Our University",
      "blog":       "Our Blog",
      "areas":      "Areas",
      "activities": "Activities",
      "news":       "News",
      "contact":    "Contact",

      // Index Page
      "extragroup" : "Extracurricular Group",
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
                  the community of our region.",

      // Areas Page
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
      // Navbar
      "about":      "Sobre",
      "aboutus":    "Sobre Nós",
      "institute":  "Nosso Instituto",
      "university": "Nossa Universidade",
      "blog":       "Nosso Blog",
      "areas":      "Frentes",
      "activities": "Atividades",
      "news":       "Notícias",
      "contact":    "Contato",

      // Index Page
      "extragroup" : "Grupo Extracurricular", 
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
                    um dos nossos grandes focos é na comunidade da nossa região.",

      // Areas Page
      "cripto"  : "Esta frente foca nos princípios de métodos de codificação em comunicações para que a informação seja ininteligível para terceiros não autorizados.",
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
