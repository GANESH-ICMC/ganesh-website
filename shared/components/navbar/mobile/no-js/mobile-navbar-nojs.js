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
          <button>About Us</button>
          <ul className="submenu">
            <li>
              <button><a href="/aboutus/icmc">Our Institute</a></button>
            </li>
            <li>
              <button><a href="/aboutus/usp">Our University</a></button>
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
            <a href="/contato">Contact us</a>
          </button>
          </li>
        </ul>
      </div>
    </div>
  );
}