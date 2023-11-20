import { useState } from "react";
import { OfferForm } from "../components/OfferForm";
export function Offers() {
  const [showPost, setShowPost] = useState(false);

  return (
    <>
      <h2>Offers</h2>≈
      <section>
        <span onClick={() => setShowPost(!showPost)}>
          {/* use hover for the span later */} Click here to post an offer to
          help!!{" "}
        </span>
        {showPost && <OfferForm />}
        <h2>Available offers:</h2>
      </section>
    </>
  );
}
