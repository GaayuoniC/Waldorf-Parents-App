import { useState } from "react";
import "../components/OfferForm.css";
import axios from "axios";
import dayjs from "dayjs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function OfferForm({ onSubmit }) {
  const [isLoading, setIsLoading] = useState(false);
  const [postOffer, setPostOffer] = useState({
    parentName: "",
    startStreet: "",
    startZip: "",
    startCity: "",
    dateOfTransportation: new Date(),
    modeOfTransportation: "",
    direction: "",
    numberOfChildren: "",
  });

  function handleChange(event, field) {
    setPostOffer({
      ...postOffer,
      [field]: event.target.value,
    });
  }

  async function handleSubmitOfferForm(event) {
    event.preventDefault();
    console.log("Form submitted", postOffer); //debug point!!
    const dataToPost = {
      parentName: postOffer.parentName,
      startStreet: postOffer.startStreet,
      startZip: postOffer.startZip,
      startCity: postOffer.startCity,
      dateOfTransportation: dayjs(postOffer.dateOfTransportation).toISOString(),
      modeOfTransportation: postOffer.modeOfTransportation,
      direction: postOffer.direction,
      numberOfChildren: Number(postOffer.numberOfChildren),
      // Number function to convert string to number!
    };
    console.log("Data to post", dataToPost);
    try {
      setIsLoading(true);
      const { data } = await axios.post("/api/offers", dataToPost);
      console.log(data);
      // TODO: hide form ???
      onSubmit();
    } catch (err) {
      console.log("Error posting offer", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="offer-container">
      <p id="offer-help">
        <span> Make an offer to help here! </span>
      </p>

      <form className="offer-form-container" onSubmit={handleSubmitOfferForm}>
        <label className="title-label">
          <p>Name: </p>
          <input
            type="text"
            value={postOffer.parentName}
            onChange={(e) => handleChange(e, "parentName")}
          ></input>
        </label>
        <label>
          <p> Date and time: </p>
        </label>
        <DatePicker
          showTimeInput
          timeFormat="HH:mm"
          dateFormat="d.MM.yyyy HH:mm"
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
          <p> Number of kids I can care for: </p>
          <input
            type="text"
            value={postOffer.numberOfChildren}
            onChange={(e) => handleChange(e, "numberOfChildren")}
          ></input>
        </label>
        <label className="title-label">
          <p>Starting street: </p>
          <input
            type="text"
            value={postOffer.startStreet}
            onChange={(e) => handleChange(e, "startStreet")}
          ></input>
        </label>

        <label className="title-label">
          <p> Start zip/postcode: </p>
          <input
            type="text"
            value={postOffer.startZip}
            onChange={(e) => handleChange(e, "startZip")}
          ></input>
        </label>
        <label className="title-label">
          <p> Start city: </p>
          <input
            type="text"
            value={postOffer.startCity}
            onChange={(e) => handleChange(e, "startCity")}
          ></input>
        </label>

        <label className="title-label">
          <p> Mode to transport: </p>
          <select
            type="text"
            value={postOffer.modeOfTransportation}
            onChange={(e) => handleChange(e, "modeOfTransportation")}
          >
            <option value="">Select mode of travel</option>
            <option value="walk">Walking</option>
            <option value="bike">Bicycle</option>
            <option value="car">car</option>
          </select>
        </label>

        <label className="title-label">
          <p> Direction:</p>
          {/* TO DO: check and correct spacing */}
          <select
            type="text"
            value={postOffer.direction}
            onChange={(e) => handleChange(e, "direction")}
          >
            <option value="">Select travel direction</option>
            <option value="to_school">To school</option>
            <option value="from_school">From school</option>
            <option value="both">To and from school</option>
          </select>
        </label>
        {/* <span className="button-container"> */}
        <button type="submit" disabled={isLoading}>
          Add offer
          {isLoading ? "Adding offer...." : "Add offer"}
        </button>
        {/* </span> */}
      </form>
    </div>
  );
}
