import "./HomePage.css";
import { NavLink } from "react-router-dom";
export function HomePage() {
  return (
    <div className="home-container">
      <div className="home-items">
        <div>
          <h1>Waldorf Parents Helper!!</h1>
        </div>
        <div className="home-welcome">
          <h2>Welcome/Willkommen</h2>
          <div className="welcome-items">
            <div>
              <p>
                Welcome to the Waldorf school parents helper site. The site is
                made with the main intention of making life a little bit easier
                for parents. As a parent or guardian, you can place an offer to
                help other parents kids get to school safely and timely. You can
                also ask for help in out post requests section.
              </p>
              <p>
                Once you register as a parent, you can have easy access to all
                our services;asking for help and offering to help other parents
                who might need help with their kids.
              </p>
              <p>
                Feel free to give us any feedback that you think might be of
                help to us and other parents
              </p>
            </div>
            <div>
              <NavLink to="/login">
                <button>Login</button>
              </NavLink>

              <p>
                Not registered? Please register
                <NavLink to="/registration"> here!</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
