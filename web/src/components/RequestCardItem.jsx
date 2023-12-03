import { useState } from "react";
import dayjs from "dayjs";

import { AcceptanceCard } from "./AcceptanceCard";
import "../components/RequestCardItem.css";

export function RequestCardItem({ request }) {
  const [showAcceptanceCard, setShowAcceptanceCard] = useState(false);

  function handleShowAcceptanceCard() {
    setShowAcceptanceCard(!showAcceptanceCard);
  }
  function handleDateDayJs(date) {
    return dayjs(date).format("ddd. DD-MM-YYYY HH:mm   ");
  }

  return (
    <ul key={request.id} className=" parents-card">
      <li className="parent-info">
        <span className="parent-info-titles">Parent name </span>
        <span className="card-items-list"> {request.parentName} </span> <br />
        <span className="parent-info-titles">Starting street</span>
        {request.startStreet}
        <br />
        <span className="parent-info-titles">Starting city</span>
        {request.startCity}
        <br />
        <span className="parent-info-titles">Zip/Postcode</span>
        {request.startZip}
        <br />
        <span className="parent-info-titles">Number of kids</span>
        {request.numberOfChildren}
        <br />
        <span className="parent-info-titles">Direction of travel</span>
        {request.direction}
        <br />
        {/* <span className="parent-info-titles">Mode of Transport:</span>
      {request.modeOfTransportation}
      <br /> */}
        <span className="parent-info-titles"> Date/Time </span>
        {handleDateDayJs(request.dateOfTtransportation)}
        <button id="accept-btn" onClick={handleShowAcceptanceCard}>
          Accept
        </button>
        {showAcceptanceCard && <AcceptanceCard />}
      </li>
    </ul>
  );
}
