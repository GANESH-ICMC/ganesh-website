import React from "react";
import Link from "next/link";

import '../../../../../locale/locale'
import { useTranslation } from "react-i18next";

import LanguageToggle from "../../../language_switcher"
import LanguageSwitcher from "../../../language_switcher"

export const NavbarMenu = React.forwardRef(({
  animationTime = 200,
}, list) => {
  list = list || React.useRef();
  let submenuArrow = React.useRef();
  let submenu = React.useRef({originalHeight: 10});
  let submenuLanguage = React.useRef({originalHeight: 10});
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenLanguage, setIsOpenLanguage] = React.useState(false);

  React.useEffect(()=>{
    if(isOpen){
      // submenu.current.style.height = "0px";
    } else {
      // submenu.current.style.height = submenu.current.originalHeight + "px";
    }
  }, [isOpen]);

  React.useEffect(()=>{
    setTimeout(()=>{
      submenu.current.style.display = "block";
      const buffer = submenu.current.style.height;
      submenu.current.style.height = "";
      submenu.current.originalHeight = submenu.current.clientHeight;
      submenu.current.style.height = buffer;
      submenu.current.style.display = "";

      submenuLanguage.current.style.display = "block";
      const buffer2 = submenuLanguage.current.style.height;
      submenuLanguage.current.style.height = "";
      submenuLanguage.current.originalHeight = submenuLanguage.current.clientHeight;
      submenuLanguage.current.style.height = buffer2;
      submenuLanguage.current.style.display = "";
    });
  }, []);

  const { t, i18n } = useTranslation();

  return (
    <ul ref={list} className="menu">
      <li>
        <Link href="/">
        <button>
          <img
            src="/static/images/ganesh.svg"
            style={{ height: "20px" }}
            className="mx-auto"
            alt="Ganesh Logo"
          />
        </button>
        </Link>
      </li>


      <li onClick={()=>setIsOpen(s => !s)}>
        <button>
          {t('navbar:about')}
        </button>
        <span
          ref={submenuArrow}
          style={{
            transition: `transform ${animationTime}ms linear`,
            transform: `rotate(${isOpen? 90 : 0}deg)`,
        }}>
            ▶
        </span>
        <ul
          className="submenu"
          ref={submenu}
          style={{
            transition: `height 200ms linear`,
            height: `${isOpen? submenu.current.originalHeight : 0}px`,
          }}
        >
        <li>
          <Link href="/aboutus">
            <button>{t("navbar:aboutus")}</button>
          </Link>
        </li>
            <li>
              <Link href="/aboutus/icmc">
                <button>{t("navbar:institute")}</button>
              </Link>
            </li>
            <li>
              <Link href="/aboutus/usp">
                <button>{t("navbar:university")}</button>
              </Link>
            </li>
            <li>
              <Link href="https://medium.com/ganeshicmc/">
                <button>{t("navbar:blog")}</button>
              </Link>
            </li>
        </ul>
      </li>

      <li>
        <Link href="/frentes">
        <button>{t("navbar:areas")}</button>
        </Link>
      </li>

      <li>
        <Link href="/atividades">
        <button>{t("navbar:activities")}</button>
        </Link>
      </li>
      <li>
        <Link href="/noticias">
        <button>{t("navbar:news")}</button>
        </Link>
      </li>
      <li>
        <Link href="/contato">
        <button>{t("navbar:contact")}</button>
        </Link>
      </li>
      <li>
        <Link href="/faq">
        <button>FAQ</button>
        </Link>
      </li>

    
      <li onClick={()=>setIsOpenLanguage(s => !s)}>
      <button>
        <img className="w-6" style={{filter: "invert(1)"}} src="/static/images/icons/globe.svg"/>
      </button>
      <span
        ref={submenuArrow}
        style={{
          transition: `transform ${animationTime}ms linear`,
          transform: `rotate(${isOpenLanguage? 90 : 0}deg)`,
      }}>
            ▶
        </span>
      <ul
        className="submenu"
        ref={submenuLanguage}
        style={{
          transition: `height 200ms linear`,
          height: `${isOpenLanguage? submenuLanguage.current.originalHeight : 0}px`,
        }}
      >
        <li>
          <button onClick={
            () => i18n.changeLanguage("br")}
            className="flex items-center"
          ><img alt="Português (BR)" className="w-8 pr-2" src="/static/images/icons/BR.svg"/>Português (BR)</button>
        </li>
        <li>
          <button onClick={
            () => i18n.changeLanguage("en")}
            className="flex items-center"
          ><img alt="English" className="w-8 pr-2" src="/static/images/icons/US.svg"/>English</button>
        </li>
      </ul>
      </li>

    </ul>
  );
});
