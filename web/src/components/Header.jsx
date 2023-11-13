import "./Header.css";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <header className="header-container">
      <nav className="nav-bar">
        <Link to="/" className="links">
          <p> Home </p>
        </Link>
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
