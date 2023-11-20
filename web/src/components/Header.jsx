import "./Header.css";
import { NavLink } from "react-router-dom";
import { useAuth, useUser } from "@clerk/clerk-react";

export function Header() {
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useAuth();

  if (!isLoaded) {
    return null;
  }
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
        {isSignedIn && <NavLink to="/userprofile"> Profile</NavLink>}
        <div>
          {isSignedIn ? (
            <>
              {user?.primaryEmailAddress?.emailAddress}
              <NavLink
                onClick={() => {
                  signOut();
                }}
              >
                Log Out
              </NavLink>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
