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
      <h3>Available Requests</h3>
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
