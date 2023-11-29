import { useState } from "react";
import "../components/OfferForm.css";
import dayjs from "dayjs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export function PostRequestForm({ onSubmit }) {
  const [isloading, setIsLoading] = useState(false);

  const [postRequest, setPostRequest] = useState({
    parentName: "Ayoma Doe",
    startStreet: "Test street",
    startZip: "12345",
    startCity: "Bonn",
    dateOfTransportation: new Date(),
    modeOfTransportation: "car",
    direction: "to_school",
  }); //using use state as an object to utilize just one function

  function handleChange(event, field) {
    setPostRequest({
      ...postRequest,
      [field]: event.target.value,
    });
  } //using the spread operator to update the use state of post offer

  async function handleSubmitPostRequestForm(event) {
    event.preventDefault();
    const dataToPost = {
      parentName: postRequest.parentName,
      startStreet: postRequest.startStreet,
      startZip: postRequest.startZip,
      startCity: postRequest.startCity,
      dateOfTransportation: dayjs(
        postRequest.dateOfTransportation
      ).toISOString(),
      modeOfTransportation: postRequest.modeOfTransportation,
      direction: postRequest.direction,
    };
    console.log("Data to post", dataToPost);
    try {
      const { data } = await axios.post("/api/offers", dataToPost); //TO DO: need to check how to do this
      console.log(data);

      onSubmit(); //dependence prop trigger get all available request!
    } catch (err) {
      console.log("Error posting offer", err);
    }
  }

  return (
    <div className="offer-container">
      <p id="offer-help">
        <span>Place a request for help here! </span>
      </p>
      <form
        className="offer-form-container"
        onSubmit={handleSubmitPostRequestForm}
      >
        <label className="title-label">
          <p> Enter name: </p>
          <input
            type="text"
            value={postRequest.parentName}
            onChange={(e) => handleChange(e, "parentName")}
          ></input>
        </label>
        <DatePicker
          showTimeInput
          timeFormat="p"
          selected={postRequest.dateOfTransportation}
          onChange={(date) => {
            console.log("Date changed", date);
            setPostRequest({
              ...postRequest,
              dateOfTransportation: date,
            });
          }} //TO DO: need to fix time display!
        />
        <label className="title-label">
          <p> Enter starting street: </p>
          <input
            type="text"
            value={postRequest.startStreet}
            onChange={(e) => handleChange(e, "startStreet")}
          ></input>
        </label>

        <label className="title-label">
          <p> Enter start zip/postcode: </p>
          <input
            type="text"
            value={postRequest.startZip}
            onChange={(e) => handleChange(e, "startZip")}
          ></input>
        </label>
        <label className="title-label">
          <p> Enter start city: </p>
          <input
            type="text"
            value={postRequest.startCity}
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
            value={postRequest.modeOfTransportation}
            onChange={(e) => handleChange(e, "modeOfTransportation")}
          ></input>
        </label>

        <label className="title-label">
          <p> Direction </p>
          <input
            type="text"
            value={postRequest.direction}
            onChange={(e) => handleChange(e, "direction")}
          ></input>
        </label>

        <button type="submit">Add request</button>
      </form>
    </div>
  );
}
