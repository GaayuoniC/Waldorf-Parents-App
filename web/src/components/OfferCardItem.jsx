import dayjs from "dayjs";

export function OfferCardItem({ offer }) {
  function handleDateDayJs(date) {
    return dayjs(date).format("ddd. DD-MM-YYYY HH:mm   A");
  }
  return (
    <ul key={offer.id} className="parents-card">
      <li className="parent-info">
        <span className="parent-info-titles"> Parent name: </span>
        {offer.parentName} <br />
        <span className="parent-info-titles">Starting street:</span>
        {offer.startStreet} <br />
        <span className="parent-info-titles">Start city:</span>
        {offer.startCity} <br />
        <span className="parent-info-titles">Start zip/postcode:</span>
        {offer.startZip} <br />
        <span className="parent-info-titles">
          Number of kids I can care for:
        </span>
        {offer.numberOfChildren} <br />
        <span className="parent-info-titles">Direction of travel:</span>
        {offer.direction}
        <br />
        <span className="parent-info-titles">Mode of Transport:</span>
        {offer.modeOfTransportation}
        <br />
        <span className="parent-info-titles"> Date: </span>
        {handleDateDayJs(offer.dateOfTtransportation)}
      </li>
    </ul>
  );
}
