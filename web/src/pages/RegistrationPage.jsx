import { useState } from "react";
export function RegistrationPage() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  console.log("User details", userData);
  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  console.log("User details", userData);

  return (
    <div>
      <h2> Registration Page </h2>
      <form>
        <label htmlFor="registration">
          Enter username:
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />{" "}
        </label>
      </form>
    </div>
  );
}
