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
          Home
        </NavLink>
        <NavLink to="/offers" className="links">
          Offers
        </NavLink>
        <NavLink to="/requests" className="links">
          Requests
        </NavLink>
        {isSignedIn && (
          <NavLink to="/userprofile" className="links">
            Profile
          </NavLink>
        )}
        <div>
          {isSignedIn ? (
            <>
              {user?.primaryEmailAddress?.emailAddress}
              <NavLink
                onClick={() => {
                  signOut();
                }}
                style={{ marginLeft: 10, textDecoration: "none" }}
              >
                Log Out
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login" className="links">
                Login
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
