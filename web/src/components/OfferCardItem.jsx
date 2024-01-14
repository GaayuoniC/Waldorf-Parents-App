import dayjs from "dayjs";
import { useEffect, useState } from "react";

import "../components/OfferCardItem.css";

export function OfferCardItem({ offer }) {
  const directions = {
    from_school: "From school",
    to_school: "To school",
    both: "To and from school",
  };
  const [date, setDate] = useState(null);
  // In OfferCardItem component
  useEffect(() => {
    console.log("OfferCardItem received updated offer:", offer);
  }, [offer]);
  //trying to debug here

  function handleDateDayJs(date) {
    const formatedDate = dayjs(date).format("ddd. DD-MM-YYYY HH:mm");
    // setDate(dayjs(date).format("ddd. DD-MM-YYYY HH:mm"));
    // console.log("Formated Date: ", formatedDate);
    return formatedDate;
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
        {directions[offer.direction]}
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
