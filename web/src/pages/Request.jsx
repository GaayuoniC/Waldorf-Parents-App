import { PostRequestForm } from "../components/PostRequestForm";
import { RequestCardItem } from "../components/RequestCardItem";
import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";

export function Requests() {
  const { getToken } = useAuth();
  const [showPost, setShowPost] = useState(false);
  const [isLoading, setIsLoading] = useState();

  //working progress

  const [request, setRequest] = useState([]);
  const url = "/api/requests";

  const fetchRequest = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(url);
      setRequest(data);
    } catch (error) {
      console.log("Error getting data ! Please check your code again", error);
      alert("Error getting requests ! Please check your code again");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRequest();
  }, [fetchRequest]);

  async function handleAcceptRequest(requestId, name, message) {
    console.log("Accepting", name, message);
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `/api/requests/${requestId}/accept`,
        {
          name,
          message,
        },
        {
          headers: {
            Authorization: `Bearer ${await getToken()}`,
          },
        }
      );
      fetchRequest();
      console.log(data);
    } catch (err) {
      console.log("Error accepting request", err);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSubmitPostRequestForm(dataToPost) {
    console.log("Form submitted");
    try {
      setIsLoading(true);
      const { data } = await axios.post("/api/requests", dataToPost, {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      }); //TO DO: need to check how to do this
      fetchRequest();
      console.log(data);
    } catch (err) {
      console.log("Error posting offer", err);
    } finally {
      setIsLoading(false);
      setShowPost(false);
    }
  }

  return (
    <>
      <section>
        <h2>Parents looking for help</h2>
        {isLoading ? (
          <h4> Loading offfers...please wait</h4>
        ) : (
          <ul className="parents-container">
            {request.map((item) => {
              return (
                <RequestCardItem
                  request={item}
                  key={item.id}
                  onAcceptRequest={handleAcceptRequest}
                />
              );
              // refactored here and made it a separate component
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
            ? "Close the request form"
            : "Click here to place your request for assistance!"}
        </span>
        {showPost && (
          <PostRequestForm
            onSubmit={handleSubmitPostRequestForm}
            isLoading={isLoading}
          />
        )}
      </section>
    </>
  );
}
