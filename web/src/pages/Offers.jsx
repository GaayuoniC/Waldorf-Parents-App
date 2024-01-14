import { useEffect, useState, useCallback } from "react";
import { OfferForm } from "../components/OfferForm";
import { OfferCardItem } from "../components/OfferCardItem";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
// import "../pages/Offers.css";
// no effect on display from this import!!

export function Offers() {
  const { getToken } = useAuth();
  const [showPost, setShowPost] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [offers, setOffers] = useState([]);
  // console.log(data);

  const url = "/api/offers";

  const fetchOffers = useCallback(async () => {
    try {
      setIsLoading(true);

      const { data } = await axios.get(url);
      setOffers(data);
      console.debug(data); //debugging check
    } catch (error) {
      console.log("Data loading error ! Please check your code again", error);
      alert("Error getting offers ! Please check your code again");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchOffers();
  }, [fetchOffers]); //show post is the trigger

  async function handleSubmitOfferForm(dataToPost) {
    // Check if data is valid!
    try {
      setIsLoading(true);
      const { data } = await axios.post("/api/offers", dataToPost, {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      });
      console.log(data);
      fetchOffers();
    } catch (err) {
      console.log("Error posting offer", err);
    } finally {
      setShowPost(false);
      setIsLoading(false);
    }
  }

  return (
    <>
      <section>
        <h2>Available offers:</h2>
        {isLoading ? (
          <h4> Loading offfers...please wait</h4>
        ) : (
          <div className="parents-container">
            {/* problem to check and solve */}
            {offers.map((item) => {
              return <OfferCardItem offer={item} key={item.id} />;
            })}
          </div>
        )}

        <div className="post-offer">
          <span onClick={() => setShowPost(!showPost)}>
            {showPost
              ? "Close offer form"
              : "Click here to post an offer to help!!"}
          </span>
          {showPost && (
            <OfferForm onSubmit={handleSubmitOfferForm} isLoading={isLoading} />
          )}
        </div>
      </section>
    </>
  );
}
