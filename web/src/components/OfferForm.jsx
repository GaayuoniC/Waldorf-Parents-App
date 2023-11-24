import { useState } from "react";
import "../components/OfferForm.css";

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

  function handleSubmitOfferForm(event) {
    event.preventDefault();
    //validate and then submit the form with this if statement
    // if (offerTitle && offerDescription) {
    //   onSubmit({ offerTitle, offerDescription });
    //   setOfferTitle("");
    //   setOfferDescription("");
    // } else {
    //   alert("Please fill in all fields");
    // }
  }

  return (
    <div className="offer-container">
      <p id="offer-help">
        <span> Make an offer to help here! </span>
      </p>

      <form className="offer-form-container">
        <label className="title-label">
          <p> Enter name: </p>
          <input
            type="text"
            value={postOffer.parentName}
            onChange={(e) => setPostOffer(e.target.value)}
          ></input>
        </label>

        <label className="title-label">
          <p> Enter starting street: </p>
          <input
            type="text"
            value={postOffer.startStreet}
            onChange={(e) => setPostOffer(e.target.value)}
          ></input>
        </label>

        <label className="title-label">
          <p> Enter start zip/postcode: </p>
          <input
            type="text"
            value={postOffer.startZip}
            onChange={(e) => setPostOffer(e.target.value)}
          ></input>
        </label>
        <label className="title-label">
          <p> Enter start city: </p>
          <input
            type="text"
            value={postOffer.startCity}
            onChange={(e) => setPostOffer(e.target.value)}
          ></input>
        </label>
        <label className="title-label">
          <p> Date of transportation: </p>
          <input
            type="text"
            value={postOffer.dateOfTransportation}
            onChange={(e) => setPostOffer(e.target.value)}
          ></input>
        </label>

        <label className="title-label">
          <p> Mode to transport: </p>
          <input
            type="text"
            value={postOffer.modeOfTransportation}
            onChange={(e) => setPostOffer(e.target.value)}
          ></input>
        </label>

        <label className="title-label">
          <p> Direction </p>
          <input
            type="text"
            value={postOffer.dateOfTransportation}
            onChange={(e) => setPostOffer(e.target.value)}
          ></input>
        </label>

        <button type="submit" onSubmit={handleSubmitOfferForm}>
          Post
        </button>
      </form>
    </div>
  );
}
