import { PostOfferForm } from "../components/PostOfferForm";
import { useState, useEffect } from "react";
import axios from "axios";

export function Requests() {
  const [showPost, setShowPost] = useState(false);
  const [isloading, setIsLoading] = useState();

  //working progress

  const [request, setRequest] = useState({
    parentName: "",
    startingAddress: "",
    directionOfTravel: "",
    modeOfTransport: "",
    date: "",
  });
  const url = "/api/post";
  useEffect(() => {
    async function loadRequests() {
      try {
        setIsLoading(true);
        console.log("before data fetch");

        const { data } = await axios.get(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ parentName }),
        });
        console.log("After axios fetch");

        setRequest(data);
        console.debug(data); //debugging check
      } catch (error) {
        console.log("Data loading error ! Please check your code again", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadRequests();
  }, []);

  return (
    <>
      <h2>Requests</h2>
      <section>
        <span
          onClick={() => {
            setShowPost(!showPost);
          }}
        >
          <p>Click here to place your request for assistance! </p>
        </span>
        {showPost && <PostOfferForm />}
        <h3>Available Requests for help:</h3>
      </section>
    </>
  );
}
