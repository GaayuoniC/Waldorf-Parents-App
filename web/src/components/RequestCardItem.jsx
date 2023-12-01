import { useState } from "react";
import { AcceptanceCard } from "./AcceptanceCard";

export function RequestCardItem({ request }) {
  const [showAcceptanceCard, setShowAcceptanceCard] = useState(false);
  // const [activeIndex, setActiveIndex] = useState(null);

  function handleShowAcceptanceCard() {
    setShowAcceptanceCard(!showAcceptanceCard);
  }

  return (
    <li key={request.id} className="parent-info parents-card">
      <span className="parent-info-titles"> Parent name: </span>
      {request.parentName} <br />
      <span className="parent-info-titles">Starting street:</span>
      {request.startStreet}
      <br />
      <span className="parent-info-titles">Starting city:</span>
      {request.startCity}
      <br />
      <span className="parent-info-titles">Zip/Postcode:</span>
      {request.startZip}
      <br />
      <span className="parent-info-titles">Number of kids needing care:</span>
      {request.numberOfChildren}
      <br />
      <span className="parent-info-titles">Direction of travel:</span>
      {request.direction}
      <br />
      {/* <span className="parent-info-titles">Mode of Transport:</span>
      {request.modeOfTransportation}
      <br /> */}
      <span className="parent-info-titles"> Date: </span>
      {request.dateOfTtransportation}
      <button onClick={handleShowAcceptanceCard}>Accept</button>
      {showAcceptanceCard && <AcceptanceCard />}
    </li>
  );
}
