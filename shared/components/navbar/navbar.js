import React from "react";
import { withRouter } from "next/router";

// import { updateNavbar } from "../../../static/libs/navbar/nojsDetection";
// import initDeskBackground from "../../../static/libs/navbar/desktop/background";
// import initDeskSubmenu from "../../../static/libs/navbar/desktop/submenu";
// import initDeskUnderbar from "../../../static/libs/navbar/desktop/underbar";
import { MobileNavbar } from "./mobile/with-js/mobile-navbar";
import { MobileNavbarNoJS } from "./mobile/no-js/mobile-navbar-nojs";
import { DesktopNavbar } from "./desktop/with-js/desktop-navbar";
import { DesktopNavbarNoJS } from "./desktop/no-js/desktop-navbar-nojs";

export function Navbar(){
  const desktopNavbar = React.useRef();
  const mobileNavbar = React.useRef();
  // const desktopNavbarNoJS = React.useRef();
  // const mobileNavbarNoJS = React.useRef();
  React.useEffect(()=>{
    desktopNavbar.current.style.display = "";
    mobileNavbar.current.style.display = "";
  }, []);

  return (
    <header>
      <nav id="navbar">
        <DesktopNavbar ref={desktopNavbar} />
        <MobileNavbar ref={mobileNavbar} />
        <noscript>
          <DesktopNavbarNoJS />
          <MobileNavbarNoJS />
        </noscript>
      </nav>
    </header>
  );
}

export default withRouter(Navbar);
