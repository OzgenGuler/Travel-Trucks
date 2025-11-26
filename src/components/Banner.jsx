import { GiHamburgerMenu } from "react-icons/gi";

// Styles
import Css from "./Navbar.module.css";

// Router
import { useLocation } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={Css.Nav}>
      <div className={Css.Nav_LogoArea}>
        <img
          src="/logo.png"
          className={Css.Nav_Logo}
          title="Travel Trucks"
          alt="Travel Trucks"
        />
        <button className={Css.Nav_Toggle}>
          <GiHamburgerMenu />
        </button>
      </div>
      <ul className={Css.Nav_List}>
        <li className={Css.Nav_Item}>
          <NavLink to="/" title="Home" />
        </li>
        <li className={Css.Nav_Item}>
          <NavLink to="/catalog" title="Catalog" />
        </li>
      </ul>
    </nav>
  );
};

const NavLink = ({ to, title }) => {
  const { pathname } = useLocation();

  return (
    <a
      href={to}
      className={`${Css.Nav_Link} ${pathname === to ? Css.Active : ""}`}
    >
      {title}
    </a>
  );
};

export default Navbar;
