import { useState } from "react";
import "../components/OfferForm.css";
import dayjs from "dayjs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export function PostRequestForm({ onSubmit }) {
  const [isLoading, setIsLoading] = useState(false);

  const [postRequest, setPostRequest] = useState({
    parentName: "",
    startStreet: "",
    startZip: "",
    startCity: "",
    dateOfTransportation: new Date(),
    modeOfTransportation: "",
    direction: "",
    numberOfChildren: "",
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
      numberOfChildren: Number(postRequest.numberOfChildren),
    };
    console.log("Data to post", dataToPost);
    try {
      setIsLoading(true);
      const { data } = await axios.post("/api/requests", dataToPost); //TO DO: need to check how to do this
      console.log(data);

      onSubmit(); //dependence prop trigger get all available request!
    } catch (err) {
      console.log("Error posting offer", err);
    } finally {
      setIsLoading(false);
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
          <p>Name: </p>
          <input
            type="text"
            value={postRequest.parentName}
            onChange={(e) => handleChange(e, "parentName")}
          ></input>
        </label>
        <label>
          <p> Date and time: </p>
        </label>
        <DatePicker
          showTimeInput
          // timeFormat="HH:mm"
          dateFormat="d.MM.yyyy HH:mm"
          selected={postRequest.dateOfTransportation}
          onChange={(date) => handleChange(date)}
          // onChange={(date) => {
          //   console.log("Date changed", date);
          //   setPostRequest({
          //     ...postRequest,
          //     dateOfTransportation: date,
          //   });
          // }} //TO DO: need to fix time display!
        />
        <label className="title-label">
          <p> Number of kids to care for: </p>
          <input
            type="text"
            value={postRequest.numberOfKids}
            onChange={(e) => handleChange(e, "numberOfChildren")}
          ></input>
        </label>
        <label className="title-label">
          <p>Starting street: </p>
          <input
            type="text"
            value={postRequest.startStreet}
            onChange={(e) => handleChange(e, "startStreet")}
          ></input>
        </label>

        <label className="title-label">
          <p> Start zip/postcode: </p>
          <input
            type="text"
            value={postRequest.startZip}
            onChange={(e) => handleChange(e, "startZip")}
          ></input>
        </label>
        <label className="title-label">
          <p> Start city: </p>
          <input
            type="text"
            value={postRequest.startCity}
            onChange={(e) => handleChange(e, "startCity")}
          ></input>
        </label>

        <label className="title-label">
          <p> Mode to transport: </p>
          <select
            type="text"
            value={postRequest.modeOfTransportation}
            onChange={(e) => handleChange(e, "modeOfTransportation")}
          >
            <option value="">Select mode of travel</option>
            <option value="walk">Walking</option>
            <option value="bike">Bicycle</option>
            <option value="car">car</option>
          </select>
        </label>

        <label className="title-label">
          <p> Direction </p>
          <select
            type="text"
            value={postRequest.direction}
            onChange={(e) => handleChange(e, "direction")}
          >
            <option value="">Select travel direction</option>
            <option value="to_school">To school</option>
            <option value="from_school">From school</option>
            <option value="to and from school">To and from school</option>
            {/* TO DO: check how values work here!! */}
          </select>
        </label>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Posting your request...." : "Add request"}
        </button>
      </form>
    </div>
  );
}
