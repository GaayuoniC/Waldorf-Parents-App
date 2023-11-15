import { OfferForm } from "../components/OfferForm";
export function Offers() {
  return (
    <>
      <h2>Offers</h2>
      <section>
        <p>Make an offer to help here!</p>
        <OfferForm />
      </section>
      <section>
        <OfferForm />
      </section>
    </>
  );
}
