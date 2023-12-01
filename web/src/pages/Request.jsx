import { PostRequestForm } from "../components/PostRequestForm";
import { useState, useEffect } from "react";
import axios from "axios";

export function Requests() {
  const [showPost, setShowPost] = useState(false);
  const [isLoading, setIsLoading] = useState();

  //working progress

  const [request, setRequest] = useState([]);
  const url = "/api/requests";
  useEffect(() => {
    async function loadRequests() {
      try {
        setIsLoading(true);
        console.log("before data fetch"); //debug point

        const { data } = await axios.get(url);
        setRequest(data);
        console.log("After data fetch"); //debugging check
      } catch (error) {
        console.log("Error getting data ! Please check your code again", error);
        alert("Error getting requests ! Please check your code again");
      } finally {
        setIsLoading(false);
      }
    }
    loadRequests();
  }, [showPost]);

  return (
    <>
      <section>
        <h2>Available Requests</h2>
        {isLoading ? (
          <h4> Loading offfers...please wait</h4>
        ) : (
          <ul className="parents-container">
            {request.map((item) => {
              return (
                <li key={item.id} className="parent-info parents-card">
                  <span className="parent-info-titles"> Parent name: </span>
                  {item.parentName} <br />
                  <span className="parent-info-titles">Starting street:</span>
                  {item.startStreet}
                  <br />
                  <span className="parent-info-titles">Starting city:</span>
                  {item.startCity}
                  <br />
                  <span className="parent-info-titles">Zip/Postcode:</span>
                  {item.startZip}
                  <br />
                  <span className="parent-info-titles">
                    Number of kids needing care:
                  </span>
                  {item.numberOfChildren}
                  <br />
                  <span className="parent-info-titles">
                    Direction of travel:
                  </span>
                  {item.direction}
                  <br />
                  <span className="parent-info-titles">Mode of Transport:</span>
                  {item.modeOfTransportation}
                  <br />
                  <span className="parent-info-titles"> Date: </span>
                  {item.dateOfTtransportation}
                </li>
              );
            })}
          </ul>
        )}
      </section>

      <section>
        <span
          onClick={() => {
            setShowPost(!showPost);
          }}
        >
          <p>Click here to place your request for assistance! </p>
        </span>
        {showPost && (
          <PostRequestForm
            onSubmit={() => {
              setShowPost(false);
            }}
          />
        )}
      </section>
    </>
  );
}
