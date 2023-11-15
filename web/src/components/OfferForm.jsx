import { useState } from "react";
import "../components/OfferForm.css";

export function OfferForm() {
  const [offerTitle, setOfferTitle] = useState("");
  const [offerDescription, setOfferDescription] = useState("");

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
          <p> Type of help: </p>
          <input
            type="text"
            value={offerTitle}
            onChange={(e) => setOfferTitle(e.target.value)}
          ></input>
        </label>

        <label>
          <p> Offer description: </p>
          <textarea
            value={offerDescription}
            onChange={(e) => setOfferDescription(e.target.value)}
          ></textarea>
        </label>

        <button type="submit" onSubmit={handleSubmitOfferForm}>
          Post
        </button>
      </form>
    </div>
  );
}
