import React from "react";
import Link from "next/link";

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
      <li>
        <Link href="/membros">
        <button>Membros</button>
        </Link>
      </li>
      <li onClick={()=>setIsOpen(s => !s)}>
        <button>
          Frentes
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
        <li><Link href="">
            <button>Eng. reversa</button>
          </Link>
        </li>
        <li>
          <Link href="">
            <button>Cryptografia</button>
          </Link>
        </li>
        <li>
          <Link href="">
            <button>Web</button>
          </Link>
        </li>
        </ul>
      </li>
      <li>
        <Link href="/atividades">
        <button>Atividades</button>
        </Link>
      </li>
      <li>
        <Link href="/noticias">
        <button>Noticias</button>
        </Link>
      </li>
      <li>
        <Link href="/contato">
        <button>Contato</button>
        </Link>
      </li>
    </ul>
  );
});