import "./Header.css";
import { Link, NavLink } from "react-router-dom";
export function Header() {
  return (
    <header className="header-container">
      <nav className="nav-bar">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <p> Home </p>
        </NavLink>
        <Link to="/offers" className="links">
          <p> Offers </p>
        </Link>
        <Link to="/requests" className="links">
          <p> Requests </p>
        </Link>
      </nav>
    </header>
  );
}
