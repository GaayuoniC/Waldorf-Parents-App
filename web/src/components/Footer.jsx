import { Link } from "react-router-dom";
import "./Footer.css";
export function Footer() {
  return (
    <footer>
      <p> Impressum </p>
      <Link to="/contact" className="contact">
        <p> Contact </p>
      </Link>

      <p> Copyright </p>
    </footer>
  );
}
