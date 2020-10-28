import React from "react";
import Link from "next/link";
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";

import '../../../../../locale/locale'
import { useTranslation, withTranslation } from "react-i18next";


import { LanguageToggle, LanguageSwitcher } from "../../../language_switcher"

const BACKGROUND_COLOR = "18, 18, 18"; //rgb
const ANIMATION_TIME = 50; //frames

export const DesktopNavbar = React.forwardRef(({
  animationDuration = 200,
}, navbar) => {
  const [isMouseIn, setIsMouseIn] = React.useState(false);
  const underbarDefaultElement = React.useRef();
  //The button the underbar is under
  const [underbarCurrentElement, setUnderbarCurrentElement] = React.useState(null);
  //Submenu that is currently open (by hovering it with the mouse)
  const [activeSubmenu, setActiveSubmenu] = React.useState(null);
  //show background as black or transparent variable.
  const [show, setShow] = React.useState(false);
  const [underbar, setUnderbar] = React.useState({
    width: 0,
    position: 0,
  });

  //update the background when the mouse moves
  React.useEffect(()=> updateBackground(), [isMouseIn]);

  React.useEffect(()=>{ //logic to show or hide submenus
    if(!activeSubmenu) return;
    activeSubmenu.style.display = "";
    let parentMiddle = activeSubmenu.parentElement.clientWidth/2;
    activeSubmenu.style.left = `${parentMiddle - activeSubmenu.clientWidth/2}px`;
    setTimeout(()=>activeSubmenu.style.opacity = 1);

    return ()=>{
      activeSubmenu.style.opacity = 0;
      setTimeout(()=>activeSubmenu.style.display = "none", animationDuration);
    }
  }, [activeSubmenu]);

  React.useEffect(() => {
    if(!underbarCurrentElement) return;
    let style = window.getComputedStyle(underbarCurrentElement, null);
    let leftStr = style.getPropertyValue("padding-left");
    let rightStr = style.getPropertyValue("padding-right");
    let paddingLeft = Number.parseFloat(leftStr);
    let paddingRight = Number.parseFloat(rightStr);
    let {left, width} = underbarCurrentElement.getBoundingClientRect();

    setUnderbar({
      position: Math.round(left + paddingLeft),
      width: Math.round(width - paddingLeft - paddingRight),
    });
  }, [underbarCurrentElement]);

  React.useEffect(() => { //submenu initialization
    let submenus = navbar.current.querySelectorAll(".submenu");
    for(let menu of submenus){
      menu.style.display = "none";
      menu.style.transition = `opacity ${animationDuration}ms linear`;
      menu.style.opacity = `0`;
      menu.parentElement.addEventListener("mouseenter", () => setActiveSubmenu(menu));
      menu.parentElement.addEventListener("mouseleave", () => setActiveSubmenu(null));
    }
  }, []);

  React.useEffect(() => { //underbar initialization
    const url = new URL(window.location.href);
    let listElements = navbar.current.querySelectorAll("ul > li");
    underbarDefaultElement.current = listElements[0];
    for(let li of listElements){
      if(li.getAttribute("href") === url.pathname)
        underbarDefaultElement.current = li;
      li.addEventListener("mouseenter", ()=>setUnderbarCurrentElement(li));
      li.addEventListener("mouseleave", ()=>setUnderbarCurrentElement(underbarDefaultElement.current));
    }
    if(underbarDefaultElement.current)
      setUnderbarCurrentElement(underbarDefaultElement.current);
    else
      throw new Error("Underbar has no default element");
    window.addEventListener("scroll", updateBackground);
    updateBackground();

    return ()=>{
      listElements = navbar.current.querySelectorAll("ul > li");
      window.removeEventListener("scroll", updateBackground);
    };
  }, []);

  function updateBackground(){
    const shouldShow = ()=>{
      if(isMouseIn) return true;
      let {top} = navbar.current.getBoundingClientRect();
      if(top <= 0){
        if(window.scrollY == 0) return false;
        else return true;
      }
      else return false;
    }
    if(shouldShow()) setShow(true);
    else setShow(false);
  }

  const { t, i18n } = useTranslation();

  return (
    <div
      className={`desktop-navbar${show? " shadow-md" : ""}`}
      style={{
        display: "none",
        transition: `background-color ${animationDuration}ms linear`,
        backgroundColor: show? `rgba(${BACKGROUND_COLOR}, 1)` : `rgba(${BACKGROUND_COLOR}, 0)`,
      }}
      ref={navbar}
      onMouseEnter={()=>setIsMouseIn(true)}
      onMouseLeave={()=>setIsMouseIn(false)}
    >
      <ul className="container mx-auto">
        {/* <li className="navbar-selected"> */}
        <li href="/">
          <Link href="/">
          <button>
            <img
              src="/static/images/ganesh.svg"
              style={{ height: "25px" }}
              alt="Ganesh Logo"
            />
          </button>
          </Link>
        </li>

        <div className="flex-grow" />
          
          <li href="/aboutus">
            <Link href="/aboutus">
            <button>{t('navbar:aboutus')}</button>
            </Link>
            <ul className="submenu">
              <li>
                <Link href="/aboutus/icmc">
                  <button>{t('navbar:institute')}</button>
                </Link>
              </li>
              <li>
                <Link href="/aboutus/usp">
                  <button>{t("navbar:university")}</button>
                </Link>
              </li>
            </ul>
          </li>

          <li href="/frentes">
            <Link href="/frentes">
              <button>{t("navbar:areas")}</button>
            </Link>
          </li>

          <li href="/atividades">
            <Link href="/atividades">
              <button>{t("navbar:activities")}</button>
            </Link>
          </li>
          
          <li href="/noticias">
            <Link href="/noticias">
            <button>{t("navbar:news")}</button>
            </Link>
          </li>

          <li href="/contato">
            <Link href="/contato">
            <button>{t("navbar:contact")}</button>
            </Link>
          </li>


          <li>
            <button>{ LanguageSwitcher() }</button>
            <ul className="submenu">
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
          </li>

        </ul>
      <div
        className="underbar"
        style={{
          transition: `
            width ${animationDuration}ms linear,
            transform ${animationDuration}ms linear
          `,
          transform: `translate(${underbar.position}px, 0)`,
          width: `${underbar.width}px`,
        }}
      />
    </div>
  );
});