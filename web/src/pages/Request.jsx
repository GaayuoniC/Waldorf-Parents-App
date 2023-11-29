import { PostRequestForm } from "../components/PostRequestForm";
import { useState, useEffect } from "react";
import axios from "axios";

export function Requests() {
  const [showPost, setShowPost] = useState(false);
  const [isloading, setIsLoading] = useState();

  //working progress

  const [request, setRequest] = useState([]);
  const url = "/api/post";
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
        alert("Error getting data ! Please check your code again");
      } finally {
        setIsLoading(false);
      }
    }
    loadRequests();
  }, []);

  return (
    <>
      <section>
        <h2>Available Requests</h2>
        {isloading ? (
          <h4> Loading offfers...please wait</h4>
        ) : (
          <div className="parents-container">
            {request.map((item) => {
              return (
                <ul key={item.id} className="parents-card">
                  <li className="parent-info">
                    <span className="parent-info-titles"> Parent name: </span>
                    {item.parentName} <br />
                    <span className="parent-info-titles">
                      Starting address:
                    </span>
                    {item.startingAddress}
                    <br />
                    <span className="parent-info-titles">
                      Direction of travel:
                    </span>
                    {item.direction}
                    <br />
                    <span className="parent-info-titles">
                      Mode of Transport:
                    </span>
                    {item.modeOfTransportation}
                    <br />
                    <span className="parent-info-titles"> Date: </span>
                    {item.dateOfTtransportation}
                  </li>
                </ul>
              );
            })}
          </div>
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
        {showPost && <PostRequestForm />}
      </section>
    </>
  );
}
