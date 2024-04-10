import { useUser } from "@clerk/clerk-react";
import "./HomePage.css";

// import { UserProfile } from "../components/UserProfile";
import { Link } from "react-router-dom";
export function HomePage() {
  const { isSignedIn } = useUser();
  return (
    <div className="home-container">
      <div className="home-items">
        <h2>Welcome/Willkommen</h2>

        <div className="home-welcome">
          <div className="welcome-items">
            <div className="intro-text-home-page">
              <p>
                Welcome to the Waldorf school parents helper site. The site is
                made with the main intention of making life a little bit easier
                for parents. As a parent or guardian, you can place an offer to
                help other parents kids get to school safely and timely. You can
                also ask for help in our post requests section.
              </p>
              <p>
                Once you register as a parent, you can have easy access to all
                our services; asking for help and offering to help other parents
                who might need help with their kids.
              </p>
              <p>
                Feel free to give us any feedback that you think might be of
                help to us and other parents.
              </p>
            </div>

            {!isSignedIn ? (
              <div>
                <Link to="/login">
                  <button>Login</button>
                </Link>

                <p>
                  Not registered? Please register
                  <Link to="/registration"> here!</Link>
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
