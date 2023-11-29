import { useState } from "react";
import "../components/OfferForm.css";
import axios from "axios";
import dayjs from "dayjs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function OfferForm() {
  const [isloading, setIsLoading] = useState(false);
  const [postOffer, setPostOffer] = useState({
    parentName: "Ayoma Doe",
    startStreet: "Test street",
    startZip: "12345",
    startCity: "Bonn",
    dateOfTransportation: new Date(),
    modeOfTransportation: "car",
    direction: "to_school",
  });

  function handleChange(event, field) {
    setPostOffer({
      ...postOffer,
      [field]: event.target.value,
    });
  }

  async function handleSubmitOfferForm(event) {
    event.preventDefault();
    console.log("Form submitted", postOffer);
    const dataToPost = {
      parentName: postOffer.parentName,
      startStreet: postOffer.startStreet,
      startZip: postOffer.startZip,
      startCity: postOffer.startCity,
      dateOfTransportation: dayjs(postOffer.dateOfTransportation).toISOString(),
      modeOfTransportation: postOffer.modeOfTransportation,
      direction: postOffer.direction,
    };
    console.log("Data to post", dataToPost);
    try {
      const { data } = await axios.post("/api/offers", dataToPost);
      console.log(data);
    } catch (err) {
      console.log("Error posting offer", err);
    }
  }

  return (
    <div className="offer-container">
      <p id="offer-help">
        <span> Make an offer to help here! </span>
      </p>
      <p>{JSON.stringify(postOffer.dateOfTransportation)}</p>

      <form className="offer-form-container" onSubmit={handleSubmitOfferForm}>
        <label className="title-label">
          <p> Enter name: </p>
          <input
            type="text"
            value={postOffer.parentName}
            onChange={(e) => handleChange(e, "parentName")}
          ></input>
        </label>
        <DatePicker
          showTimeInput
          timeFormat="p"
          selected={postOffer.dateOfTransportation}
          onChange={(date) => {
            console.log("Date changed", date);
            setPostOffer({
              ...postOffer,
              dateOfTransportation: date,
            });
          }}
        />
        <label className="title-label">
          <p> Enter starting street: </p>
          <input
            type="text"
            value={postOffer.startStreet}
            onChange={(e) => handleChange(e, "startStreet")}
          ></input>
        </label>

        <label className="title-label">
          <p> Enter start zip/postcode: </p>
          <input
            type="text"
            value={postOffer.startZip}
            onChange={(e) => handleChange(e, "startZip")}
          ></input>
        </label>
        <label className="title-label">
          <p> Enter start city: </p>
          <input
            type="text"
            value={postOffer.startCity}
            onChange={(e) => handleChange(e, "startCity")}
          ></input>
        </label>
        {/* <label className="title-label">
          <p> Date of transportation: </p>
          <input
            type="text"
            value={postOffer.dateOfTransportation}
            onChange={(e) => handleChange(e, "dateOfTransportation")}
          ></input>
        </label> */}

        <label className="title-label">
          <p> Mode to transport: </p>
          <input
            type="text"
            value={postOffer.modeOfTransportation}
            onChange={(e) => handleChange(e, "modeOfTransportation")}
          ></input>
        </label>

        <label className="title-label">
          <p> Direction </p>
          <input
            type="text"
            value={postOffer.direction}
            onChange={(e) => handleChange(e, "direction")}
          ></input>
        </label>

        <button type="submit">Post</button>
      </form>
    </div>
  );
}
