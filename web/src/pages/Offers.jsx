import { useEffect, useState } from "react";
import { OfferForm } from "../components/OfferForm";
import axios from "axios";
import { offers } from "../../../material/sample-data/offers";
import "../pages/Offers.css";

export function Offers() {
  const [showPost, setShowPost] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  // console.log(data);

  // const dummyData = offers;
  const url = "https://api/offers";

  useEffect(() => {
    async function loadOffers() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(url);
        setData(data.parentName);
        console.debug(data); //debugging check
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadOffers();
  }, []);

  return (
    <>
      <h2>Offers</h2>
      <section>
        <h2>Available offers:</h2>
        {/* <div className="parents-container">
          {dummyData.map((item) => {
            console.log("checking", item);
            return (
              <ul key={item.parentName} className="parents-card">
                <li className="parent-info">
                  <span className="parent-info-titles"> Parent name: </span>
                  {item.parentName} <br />
                  <span className="parent-info-titles">Starting address:</span>
                  {item.startingAddress}
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
                  {item.date}
                </li>
              </ul>
            );
          })}
        </div> */}

        <div className="post-offer">
          <span onClick={() => setShowPost(!showPost)}>
            {/* use hover for the span later */} Click here to post an offer to
            help!!
          </span>
          {showPost && <OfferForm />}
        </div>
      </section>
    </>
  );
}
