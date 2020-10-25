import React from "react";
import Link from "next/link";
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
          About
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
            <button>About Us</button>
          </Link>
        </li>
            <li>
              <Link href="/aboutus/icmc">
                <button>Our Institute</button>
              </Link>
            </li>
            <li>
              <Link href="/aboutus/usp">
                <button>Our University</button>
              </Link>
            </li>
        </ul>
      </li>

      <li>
        <Link href="/frentes">
        <button>Areas</button>
        </Link>
      </li>

      <li>
        <Link href="/atividades">
        <button>Activities</button>
        </Link>
      </li>
      <li>
        <Link href="/noticias">
        <button>News</button>
        </Link>
      </li>
      <li>
        <Link href="/contato">
        <button>Contact</button>
        </Link>
      </li>

       <li>
          <LanguageSwitcher />
      </li>
    </ul>
  );
});