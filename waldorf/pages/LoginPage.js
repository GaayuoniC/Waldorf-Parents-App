import { useState } from "react";
import "../pages/LoginPage.css";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function handleUserNameChange(e) {
    setEmail(e.target.value);
  }
  function handleUserPasswordChange(e) {
    setUserPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Username:", email);
    console.log("Password:", userPassword); //Testing. need authentication later
  }

  return (
    <div className="login-container">
      <form>
        <h3>Please Login</h3>
        <label htmlFor="username">Enter email :</label>
        <input
          type="text"
          id="email"
          value={email}
          name="username"
          onChange={handleUserNameChange}
          required
        />
        <label htmlFor="userpassword">Enter password : </label>
        <input
          type="password"
          id="password"
          value={userPassword}
          name="password"
          onChange={handleUserPasswordChange}
          required
        />
        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
