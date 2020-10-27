import React from "react";
import Link from "next/link";

import '../../../../../locale/navbar_locale'
import { useTranslation } from "react-i18next";

import LanguageToggle from "../../../language_switcher"
import LanguageSwitcher from "../../../language_switcher"

export const NavbarMenu = React.forwardRef(({
  animationTime = 200,
}, list) => {
  list = list || React.useRef();
  let submenuArrow = React.useRef();
  let submenu = React.useRef({originalHeight: 10});
  const [isOpen, setIsOpen] = React.useState(false);

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
          {t('about')}.
        </button>
        <span
          ref={submenuArrow}
          style={{
            transition: `transform ${animationTime}ms linear`,
            transform: `rotate(${isOpen? 90 : 0}deg)`,
        }}>
            ⮞
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
            <button>{t("aboutus")}</button>
          </Link>
        </li>
            <li>
              <Link href="/aboutus/icmc">
                <button>{t("institute")}</button>
              </Link>
            </li>
            <li>
              <Link href="/aboutus/usp">
                <button>{t("university")}</button>
              </Link>
            </li>
        </ul>
      </li>

      <li>
        <Link href="/frentes">
        <button>{t("areas")}</button>
        </Link>
      </li>

      <li>
        <Link href="/atividades">
        <button>{t("activities")}</button>
        </Link>
      </li>
      <li>
        <Link href="/noticias">
        <button>{t("news")}</button>
        </Link>
      </li>
      <li>
        <Link href="/contato">
        <button>{t("contact")}</button>
        </Link>
      </li>

      <li>
          <button onClick={
            () => i18n.changeLanguage("br")
          }>Português BR</button>
      </li>
      <li>
          <button onClick={
            () => i18n.changeLanguage("en")
          }>English</button>
      </li>
    </ul>
  );
});