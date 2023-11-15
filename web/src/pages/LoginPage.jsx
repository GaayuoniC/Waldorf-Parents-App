import { useState } from "react";

export function LoginPage() {
  const [userName, setUserName] = useState("christiono");
  const [userPassword, setUserPassword] = useState("######");

  function handleUserNameChange(e) {
    setUserName(e.target.value);
  }
  function handleUserPasswordChange(e) {
    setUserPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Username:", userName);
    console.log("Password:", userPassword); //Testing. need authentication later
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h3>Please Login</h3>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={userName}
          name="username"
          onChange={handleUserNameChange}
          required
        />
        <label htmlFor="userpassword">Enter password: </label>
        <input
          type="text"
          id="password"
          value={userPassword}
          name="password"
          onChange={handleUserPasswordChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
