import { useState } from "react";
import "../components/OfferForm.css";
import axios from "axios";

export function OfferForm() {
  const [postOffer, setPostOffer] = useState({
    parentName: "",
    startStreet: "",
    startZip: "",
    startCity: "",
    dateOfTransportation: "",
    modeOfTransportation: "",
    direction: "",
  });

  function handleChange(event, field) {
    setPostOffer({
      ...postOffer,
      [field]: event.target.value,
    });
  }

  function handleSubmitOfferForm(event) {
    event.preventDefault();
    console.log("Form submitted", postOffer);
  }

  return (
    <div className="offer-container">
      <p id="offer-help">
        <span> Make an offer to help here! </span>
      </p>

      <form className="offer-form-container" onSubmit={handleSubmitOfferForm}>
        <label className="title-label">
          <p> Enter name: </p>
          <input
            type="text"
            value={postOffer.parentName}
            onChange={(e) => handleChange(e, "parentName")}
          ></input>
        </label>

        <label className="title-label">
          <p> Enter starting street: </p>
          <input
            type="text"
            value={postOffer.startStreet}
            onChange={(e) => handleChange(e, "startStreet")}
          ></input>
        </label>

        <label className="title-label">
          <p> Enter start zip/postcode: </p>
          <input
            type="text"
            value={postOffer.startZip}
            onChange={(e) => handleChange(e, "startZip")}
          ></input>
        </label>
        <label className="title-label">
          <p> Enter start city: </p>
          <input
            type="text"
            value={postOffer.startCity}
            onChange={(e) => handleChange(e, "startCity")}
          ></input>
        </label>
        <label className="title-label">
          <p> Date of transportation: </p>
          <input
            type="text"
            value={postOffer.dateOfTransportation}
            onChange={(e) => handleChange(e, "dateOfTransportation")}
          ></input>
        </label>

        <label className="title-label">
          <p> Mode to transport: </p>
          <input
            type="text"
            value={postOffer.modeOfTransportation}
            onChange={(e) => handleChange(e, "modeOfTransportation")}
          ></input>
        </label>

        <label className="title-label">
          <p> Direction </p>
          <input
            type="text"
            value={postOffer.direction}
            onChange={(e) => handleChange(e, "direction")}
          ></input>
        </label>

        <button type="submit">Post</button>
      </form>
    </div>
  );
}
