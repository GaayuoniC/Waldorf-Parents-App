import { useEffect, useState } from "react";
import { OfferForm } from "../components/OfferForm";
import axios from "axios";
import "../pages/Offers.css";

export function Offers() {
  const [showPost, setShowPost] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [offers, setOffers] = useState([]);
  // console.log(data);

  // const dummyData = offers;
  const url = "/api/offers";

  useEffect(() => {
    async function loadOffers() {
      try {
        setIsLoading(true);

        const { data } = await axios.get(url);
        setOffers(data);
        console.debug(data); //debugging check
      } catch (error) {
        console.log("Data loading error ! Please check your code again", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadOffers();
  }, [showPost]);

  return (
    <>
      <h2>Offers</h2>
      <section>
        <h2>Available offers:</h2>
        {isloading ? (
          <h4> Loading offfers...please wait</h4>
        ) : (
          <div className="parents-container">
            {offers.map((item) => {
              return (
                <ul key={item.id} className="parents-card">
                  <li className="parent-info">
                    <span className="parent-info-titles"> Parent name: </span>
                    {item.parentName} <br />
                    <span className="parent-info-titles">Starting street:</span>
                    {item.startStreet} <br />
                    <span className="parent-info-titles">Start city:</span>
                    {item.startCity} <br />
                    <span className="parent-info-titles">
                      Start zip/postcode:
                    </span>
                    {item.startZip} <br />
                    <span className="parent-info-titles">
                      Number of kids I can care for:
                    </span>
                    {item.numberOfChildren} <br />
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

        <div className="post-offer">
          <span onClick={() => setShowPost(!showPost)}>
            Click here to post an offer to help!!
          </span>
          {showPost && (
            <OfferForm
              onSubmit={() => {
                setShowPost(false);
              }}
            />
          )}
        </div>
      </section>
    </>
  );
}
