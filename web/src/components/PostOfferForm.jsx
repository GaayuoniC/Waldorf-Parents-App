import { useState } from "react";
import "../components/OfferForm.css";

export function PostOfferForm() {
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");

  function handleSubmitOfferForm(event) {
    event.preventDefault();
  
  }

  return (
    <div className="offer-container">
      <p id="offer-help">
        <span>Place a request for help here! </span>
      </p>

      <form className="offer-form-container">
        <label className="title-label">
          <p> Type of request: </p>
          <input
            type="text"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          ></input>
        </label>

        <label className="title-label">
          <p> Request description: </p>
          <textarea
            className="text-area"
            value={postDescription}
            onChange={(e) => setPostDescription(e.target.value)}
          ></textarea>
        </label>

        <button type="submit" onSubmit={handleSubmitOfferForm}>
         Add Request
        </button>
      </form>
    </div>
  );
}
