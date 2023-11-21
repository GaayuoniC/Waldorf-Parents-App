import { PostOfferForm } from "../components/PostOfferForm";
import { useState } from "react";

export function Requests() {
  const [showPost, setShowPost] = useState(false);

  return (
    <>
      <h2>Requests</h2>
      <section>
        <span
          onClick={() => {
            setShowPost(!showPost);
          }}
        >
          <p>Click here to place your request for assistance! </p>
        </span>
        {showPost && <PostOfferForm />}
        <h3>Available Requests for help:</h3>
      </section>
    </>
  );
}
