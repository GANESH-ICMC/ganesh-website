export function DesktopNavbarNoJS(){
  return (
    <div className="desktop-navbar-nojs">
      <ul className="container mx-auto">
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
        <div className="flex-grow" />
        <li>
          <button>
          <a href="/membros">Members</a>
          </button>
        </li>
        <li>
          <button>Areas</button>
          <ul className="submenu">
          <li>
            <button>
              <a href="">Reverse Engineering</a>
            </button>
          </li>
          <li>
            <button>
              <a href="">Cryptography</a>
            </button>
          </li>
          <li>
            <button>
              <a href="">Web Security</a>
            </button>
          </li>
          <li>
            <button>
              <a href="">Networking</a>
            </button>
          </li>
          </ul>
        </li>
        <li>
          <button>
          <a href="/atividades">Activities</a>
          </button>
        </li>
        <li>
          <button>
          <a href="/noticias">News</a>
          </button>
        </li>
        <li>
          <button>
          <a href="/contato">Contact</a>
          </button>
        </li>
      </ul>
    </div>
  );
}