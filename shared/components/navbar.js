import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import classNames from "classnames";

import { updateNavbar } from "../../static/libs/navbar/nojsDetection";
import initDeskBackground from "../../static/libs/navbar/desktop/background";
import initDeskSubmenu from "../../static/libs/navbar/desktop/submenu";
import initDeskUnderbar from "../../static/libs/navbar/desktop/underbar";
import initMobileBackground from "../../static/libs/navbar/mobile/background";
import initMobileHamburguer from "../../static/libs/navbar/mobile/hamburguer";
import initMobileSubmenu from "../../static/libs/navbar/mobile/submenu";

class Navbar extends React.Component {
  componentDidMount() {
    updateNavbar();
    initDeskBackground();
    initDeskSubmenu();
    initDeskUnderbar();
    initMobileBackground();
    initMobileHamburguer();
    initMobileSubmenu();
  }
  render() {
    let pathname = this.props.router.asPath;

    return (
      <header>
        <nav id="navbar">
          <div id="desktop-navbar" style={{ display: "none" }}>
            <ul className="container mx-auto">
              <li
                className={classNames({
                  "navbar-selected": pathname === "/" ? true : false
                })}
              >
                <Link href="/">
                  <button onClick={updateNavbar}>
                    <img
                      src="/static/images/ganesh.svg"
                      style={{ height: "20px" }}
                    />
                  </button>
                </Link>
              </li>
              <div className="flex-grow" />
              <li
                className={classNames({
                  "navbar-selected": (pathname === "/membros" || pathname === "/membros/") ? true : false
                })}
              >
                <Link href="/membros">
                  <button onClick={updateNavbar}>Membros</button>
                </Link>
              </li>
              <li
                className={classNames({
                  "navbar-selected": (pathname === "/frentes" || pathname === "/frentes/") ? true : false
                })}
              >
                <Link href="/frentes">
                  <button onClick={updateNavbar}>Frentes</button>
                </Link>
                <ul className="submenu">
                  <li>
                    <Link href="">
                      <button onClick={updateNavbar}>Eng. reversa</button>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <button onClick={updateNavbar}>Cryptografia</button>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <button onClick={updateNavbar}>Web</button>
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={classNames({
                  "navbar-selected": (pathname === "/atividades" || pathname === "/atividades/") ? true : false
                })}
              >
                <Link href="/atividades">
                  <button onClick={updateNavbar}>Atividades</button>
                </Link>
              </li>
              <li
                className={classNames({
                  "navbar-selected": (pathname === "/noticias" || pathname === "/noticias/") ? true : false
                })}
              >
                <Link href="/noticias">
                  <button onClick={updateNavbar}>Noticias</button>
                </Link>
              </li>
              <li
                className={classNames({
                  "navbar-selected": (pathname === "/contato" || pathname === "/contato/") ? true : false
                })}
              >
                <Link href="/contato">
                  <button onClick={updateNavbar}>Contato</button>
                </Link>
              </li>
            </ul>
            <div id="underbar" />
          </div>
          <div id="mobile-navbar" style={{ display: "none" }}>
            <div id="hamburguer">
              <div className="bar" id="bar1" />
              <div className="bar" id="bar2" />
              <div className="bar" id="bar3" />
            </div>
            <ul>
              <li>
                <Link href="/">
                  <button onClick={updateNavbar}>
                    <img
                      src="/static/images/ganesh.svg"
                      style={{ height: "20px" }}
                      className="mx-auto"
                    />
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/membros">
                  <button onClick={updateNavbar}>Membros</button>
                </Link>
              </li>
              <li>
                <button onClick={updateNavbar}>Frentes</button>
                <ul className="submenu">
                  <li>
                    <Link href="">
                      <button onClick={updateNavbar}>Eng. reversa</button>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <button onClick={updateNavbar}>Cryptografia</button>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <button onClick={updateNavbar}>Web</button>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/atividades">
                  <button onClick={updateNavbar}>Atividades</button>
                </Link>
              </li>
              <li>
                <Link href="/noticias">
                  <button onClick={updateNavbar}>Noticias</button>
                </Link>
              </li>
              <li>
                <Link href="/contato">
                  <button onClick={updateNavbar}>Contato</button>
                </Link>
              </li>
            </ul>
          </div>
          <div id="desktop-navbar-nojs">
            <ul className="container mx-auto">
              <li>
                <button onClick={updateNavbar}>
                  <a href="/">
                    <img
                      src="/static/images/ganesh.svg"
                      style={{ height: "20px" }}
                    />
                  </a>
                </button>
              </li>
              <div className="flex-grow" />
              <li>
                <button onClick={updateNavbar}>
                  <a href="/membros">Membros</a>
                </button>
              </li>
              <li>
                <button onClick={updateNavbar}>Frentes</button>
                <ul className="submenu">
                  <li>
                    <button onClick={updateNavbar}>
                      <a href="">Eng. reversa</a>
                    </button>
                  </li>
                  <li>
                    <button onClick={updateNavbar}>
                      <a href="">Cryptografia</a>
                    </button>
                  </li>
                  <li>
                    <button onClick={updateNavbar}>
                      <a href="">Web</a>
                    </button>
                  </li>
                </ul>
              </li>
              <li>
                <button onClick={updateNavbar}>
                  <a href="/atividades">Atividades</a>
                </button>
              </li>
              <li>
                <button onClick={updateNavbar}>
                  <a href="/noticias">Noticias</a>
                </button>
              </li>
              <li>
                <button onClick={updateNavbar}>
                  <a href="/contato">Contato</a>
                </button>
              </li>
            </ul>
          </div>
          <div id="mobile-navbar-nojs">
            <div>
              ☰
              <ul>
                <li>
                  <button onClick={updateNavbar}>
                    <a href="/">
                      <img
                        src="/static/images/ganesh.svg"
                        style={{ height: "20px" }}
                      />
                    </a>
                  </button>
                </li>
                <li>
                  <button onClick={updateNavbar}>
                    <a href="/membros">Membros</a>
                  </button>
                </li>
                <li>
                  <button onClick={updateNavbar}>Frentes</button>
                  <ul className="submenu">
                    <li>
                      <button onClick={updateNavbar}>
                        <a href="">Eng. reversa</a>
                      </button>
                    </li>
                    <li>
                      <button onClick={updateNavbar}>
                        <a href="">Cryptografia</a>
                      </button>
                    </li>
                    <li>
                      <button onClick={updateNavbar}>
                        <a href="">Web</a>
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button onClick={updateNavbar}>
                    <a href="/atividades">Atividades</a>
                  </button>
                </li>
                <li>
                  <button onClick={updateNavbar}>
                    <a href="/noticias">Noticias</a>
                  </button>
                </li>
                <li>
                  <button onClick={updateNavbar}>
                    <a href="/contato">Contato</a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(Navbar);
