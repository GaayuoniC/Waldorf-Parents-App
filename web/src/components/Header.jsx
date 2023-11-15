import "./Header.css";
import { NavLink } from "react-router-dom";
export function Header() {
  return (
    <header className="header-container">
      <nav className="nav-bar">
        <NavLink to="/" className="links">
          <p> Home </p>
        </NavLink>
        <NavLink to="/offers" className="links">
          <p> Offers </p>
        </NavLink>
        <NavLink to="/requests" className="links">
          <p> Requests </p>
        </NavLink>
      </nav>
    </header>
  );
}
