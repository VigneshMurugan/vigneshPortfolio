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
      <ul>
        {links.map((link) => (
          <li className="navigationLinkListItem">
            <NavLink className="links" to={link}>
              {capitalize(link.toString())}
            </NavLink>
          </li>
        )).reverse()}
      </ul>
    </nav>
  );
}

export default Navbar;
