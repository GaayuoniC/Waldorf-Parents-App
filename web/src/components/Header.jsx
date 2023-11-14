import "./Header.css";
import { NavLink } from "react-router-dom";
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
        <NavLink
          to="/offers"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <p> Offers </p>
        </NavLink>
        <NavLink
          to="/requests"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <p> Requests </p>
        </NavLink>
      </nav>
    </header>
  );
}
