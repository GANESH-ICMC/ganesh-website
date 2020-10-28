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
          <button>About Us</button>
          <ul className="submenu">
            <li>
              <button><a href="/aboutus/icmc">Our Institute</a></button>
            </li>
            <li>
              <button><a href="/aboutus/usp">Our University</a></button>
            </li>
            <li>
              <button><a href="https://medium.com/ganeshicmc/">Our Blog</a></button>
            </li>
          </ul>
        </li>

        <li>
          <button>
          <a href="/frentes">Areas</a>
          </button>
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