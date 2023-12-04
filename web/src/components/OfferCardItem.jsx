import dayjs from "dayjs";

import "../components/OfferCardItem.css";

export function OfferCardItem({ offer }) {
  function handleDateDayJs(date) {
    return dayjs(date).format("ddd. DD-MM-YYYY HH:mm   ");
  }
  return (
    <li className="parents-card">
      <div className="parent-info">
        <span className="parent-info-titles">Name </span>
        {offer.parentName} <br />
        <span className="parent-info-titles">Starting street</span>
        {offer.startStreet} <br />
        <span className="parent-info-titles">Start city</span>
        {offer.startCity} <br />
        <span className="parent-info-titles">Start zip/postcode</span>
        {offer.startZip} <br />
        <span className="parent-info-titles">Number of kids</span>
        {offer.numberOfChildren} <br />
        <span className="parent-info-titles">Direction of travel</span>
        {offer.direction}
        <br />
        <span className="parent-info-titles">Mode of Transport</span>
        {offer.modeOfTransportation}
        <br />
        <span className="parent-info-titles"> Date </span>
        {handleDateDayJs(offer.dateOfTtransportation)}
      </div>
    </li>
  );
}
