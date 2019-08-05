export function MobileNavbarNoJS(){
  return (
    <div className="mobile-navbar-nojs">
      <div>
        ☰
        <ul>
          <li>
          <button>
            <a href="/">
              <img
              src="/static/images/ganesh.svg"
              style={{ height: "20px" }}
              alt="Ganesh Logo"
              />
            </a>
          </button>
          </li>
          <li>
          <button>
            <a href="/membros">Membros</a>
          </button>
          </li>
          <li>
          <button>Frentes</button>
          <ul className="submenu">
            <li>
              <button>
              <a href="">Eng. reversa</a>
              </button>
            </li>
            <li>
              <button>
              <a href="">Cryptografia</a>
              </button>
            </li>
            <li>
              <button>
              <a href="">Web</a>
              </button>
            </li>
          </ul>
          </li>
          <li>
          <button>
            <a href="/atividades">Atividades</a>
          </button>
          </li>
          <li>
          <button>
            <a href="/noticias">Noticias</a>
          </button>
          </li>
          <li>
          <button>
            <a href="/contato">Contato</a>
          </button>
          </li>
        </ul>
      </div>
    </div>
  );
}