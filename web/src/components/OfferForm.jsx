import { useState } from "react";

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
    <form>
      <label>
        Title:
        <input
          type="text"
          value={offerTitle}
          onChange={(e) => setOfferTitle(e.target.value)}
        ></input>
      </label>
      <br />
      <label>
        Offer Description:
        <textarea
          value={offerDescription}
          onChange={(e) => setOfferDescription(e.target.value)}
        ></textarea>
      </label>
      <br />
      <button type="submit" onSubmit={handleSubmitOfferForm}>
        Post
      </button>
    </form>
  );
}
