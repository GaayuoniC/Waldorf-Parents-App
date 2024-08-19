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
    Welcome to the Waldorf School Parents Helper site. This platform is designed with the primary goal of making life easier for parents. As a parent or guardian, you have the ability to offer assistance in ensuring that other parents' children arrive at school safely and on time. Additionally, you can request help through our post requests section.
</p>
<p>
    By registering as a parent, you will gain easy access to all our services, including the ability to request and offer assistance to fellow parents who may need support with their children.
</p>
<p>
    We welcome your feedback, as it can help us improve our services and better support the community of parents.
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
