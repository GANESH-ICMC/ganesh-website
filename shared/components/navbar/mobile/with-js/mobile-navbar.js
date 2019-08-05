import React from "react";

import { Hamburguer } from "./hamburguer";
import { NavbarMenu } from "./menu";

const BACKGROUND_COLOR = "18, 18, 18"; //rgb

export const MobileNavbar = React.forwardRef(({
  animationTime = 500
}, navbar) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isShowingBackground, setIsShowisShowingBackground] = React.useState(false);

  const mainRef = React.useRef();
  const topStrip = React.useRef();
  const hamburguer = React.useRef();
  const menu = React.useRef();

  React.useEffect(()=>{
    mainRef.current = document.body.getElementsByTagName("main")[0];
    mainRef.current.style.transition =
      `left ${animationTime}ms cubic-bezier(0.77, 0, 0.175, 1)`;
    mainRef.current.style.left = "0";

    return ()=>{
      mainRef.current.style.transition = "";
      mainRef.current.style.left = "";
    }
  }, []);

  function bodyClick(e){
    for(let elem = e.target; elem; elem = elem.parentElement){
      if(elem == topStrip.current || elem == menu.current)
        return;
    }
    hamburguer.current.click();
  }

  function shouldShow(){
    if(isOpen) return true;
    let {top} = navbar.current.getBoundingClientRect();
    if(top <= 0){
      if(window.scrollY == 0) return false;
      else return true;
    }
    else return false;
  }

  function updateBackground(){
    if(shouldShow()) setIsShowisShowingBackground(true);
    else setIsShowisShowingBackground(false);
  }

  React.useEffect(()=>{ //Hamburguer logic
    document.addEventListener("scroll", updateBackground);
    if(isOpen){
      document.body.parentElement.style.overflowX = "hidden";
      document.body.style.overflowX = "hidden";

      const menuWidth = menu.current.clientWidth;
      navbar.current.style.left = `calc(-100vw + ${menuWidth + 1}px)`;
      mainRef.current.style.left = `${menuWidth}px`;
      document.body.addEventListener("click", bodyClick);
      setIsShowisShowingBackground(true);
      return ()=> document.body.removeEventListener("click", bodyClick);
    } else {
      navbar.current.style.left = `calc(-100vw + 1px)`;
      mainRef.current.style.left = "0";
      updateBackground();
      setTimeout(()=>{
        document.body.parentElement.style.overflowX = "";
        document.body.style.overflowX = "";
      }, animationTime);
    }
    return ()=> document.removeEventListener("scroll", updateBackground);
  }, [isOpen]);

  return (
    <div
      className="mobile-navbar"
      ref={navbar}
      style={{
        display: "none",
        transition: `left ${animationTime}ms cubic-bezier(0.77, 0, 0.175, 1)`,
      }}
    >
      <NavbarMenu ref={menu} />
      <div
        className={`top-strip${isShowingBackground? ' shadow-md' : ''}`}
        ref={topStrip}
        style={{
          transition: `background-color 200ms linear`,
          backgroundColor: `rgba(${BACKGROUND_COLOR}, ${isShowingBackground? 1 : 0})`
        }}
      >
        <Hamburguer
          ref={hamburguer}
          onOpen={()=>setIsOpen(true)}
          onClose={()=>setIsOpen(false)}
          animationDuration={animationTime}
        />
      </div>
    </div>
  );
});