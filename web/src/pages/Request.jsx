import { PostRequestForm } from "../components/PostRequestForm";
import { RequestCardItem } from "../components/RequestCardItem";
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
              return <RequestCardItem request={item} key={item.id} />;
              // refactored here and make it a separate component
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
          {showPost
            ? " Close the request form"
            : "Click here to place your request for assistance!"}
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
