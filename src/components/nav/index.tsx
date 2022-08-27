import { NavLink } from "react-router-dom";
import { To } from "history";
import "./styles.css";
import capitalize from "../../utils";
import logo from "../../logo.png";

interface NavBarProps {
  links: To[];
}

function Navbar({ links }: NavBarProps) {
  return (
    <nav className="navbar">
      <img src={logo} className="logo" />
      <input type="checkbox" id="toggle-menu" />
      <label htmlFor="toggle-menu">
        <a id="menu-icon" className="menu-icon">
          <i className="fa fa-bars"></i>
        </a>
      </label>
      <ul className="menuList">
        {links
          .map((link) => (
            <li className="navigationLinkListItem">
              <NavLink className="links" to={link}>
                {capitalize(link.toString())}
              </NavLink>
            </li>
          ))
          .reverse()}
      </ul>
    </nav>
  );
}

export default Navbar;
