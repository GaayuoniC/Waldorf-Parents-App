import { useState } from "react";
import "../pages/RegistrationPage.css";
export function RegistrationPage() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  //console.log("User details", userData);

  const [selectedFoto, setSelectedFoto] = useState(null);

  function handleFotoChange(event) {
    const file = event.target.files[0];
    selectedFoto(file);
  }
  //   function handleUploadFoto(){
  //     if(selectedFoto){

  //     }
  //   }
  //Need to come back and figure out how to link it to API!

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  console.log("User details", userData);

  return (
    <div className="form-container">
      <h2> Registration Page </h2>
      <label htmlFor="firstName" className="firstName">
        Enter first name:
        <input
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
        />
      </label>
      {/* <br /> */}
      <label htmlFor="lastName" className="lastName">
        Enter last name:
        <input
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
        />
      </label>
      <form>
        <label htmlFor="username">
          Enter username:
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" onSubmit={handleSubmit} id="submit">
          Register
        </button>
      </form>
    </div>
  );
}
