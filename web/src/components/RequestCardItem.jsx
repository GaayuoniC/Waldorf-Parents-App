import { useState } from "react";
import dayjs from "dayjs";

import { AcceptanceCard } from "./AcceptanceCard";
import "../components/RequestCardItem.css";

export function RequestCardItem({ request, onAcceptRequest = () => {} }) {
  const [showAcceptanceCard, setShowAcceptanceCard] = useState(false);

  const directions = {
    from_school: "From school",
    to_school: "To school",
    both: "To and from school",
  };

  function handleShowAcceptanceCard() {
    setShowAcceptanceCard(!showAcceptanceCard);
  }

  function handleAccept(name, message) {
    console.log("Accepting", name, message);
    setShowAcceptanceCard(false);
    onAcceptRequest(request.id, name, message);
  }

  return (
    <li className="parents-card">
      <div className="parent-info">
        <span className="parent-info-titles">Parent name </span>
        <span className="card-items-list"> {request.parentName} </span> <br />
        <span className="parent-info-titles">Starting street</span>
        {request.startStreet}
        <br />
        <span className="parent-info-titles">Starting city</span>
        {request.startCity}
        <br />
        <span className="parent-info-titles">Postcode</span>
        {request.startZip}
        <br />
        <span className="parent-info-titles">Number of kids</span>
        {request.numberOfChildren}
        <br />
        <span className="parent-info-titles">Direction of travel</span>
        {directions[request.direction]}
        <br />
        <span className="parent-info-titles"> Date </span>
        {dayjs(request.dateOfTtransportation).format("dddd. DD-MM-YYYY")}
        <span className="parent-info-titles"> Time </span>
        {dayjs(request.dateOfTtransportation).format("HH:mm")}
        <br />
        <button id="accept-btn" onClick={handleShowAcceptanceCard}>
          {showAcceptanceCard ? "Cancel" : "Accept"}
        </button>
        {showAcceptanceCard && <AcceptanceCard onAccept={handleAccept} />}
      </div>
    </li>
  );
}
