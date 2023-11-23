import { useState } from "react";
import { OfferForm } from "../components/OfferForm";
import axios from "axios";
import { offers } from "../../../material/sample-data/offers";
import "../pages/Offers.css";

export function Offers() {
  const [showPost, setShowPost] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  const dummyData = offers;

  return (
    <>
      <h2>Offers</h2>
      <section>
        <h2>Available offers:</h2>
        <div className="parents-container">
          {dummyData.map((item) => {
            console.log("checking", item);
            return (
              <ul key={item.parentName} className="parents-card">
                <li style={{ padding: 10 }}>
                  Parent name: {item.parentName} <br />
                  Direction of travel: {item.direction}
                  <br />
                  Mode of Transport: {item.modeOfTransportation}
                  <br />
                  Date: {item.date}
                </li>
              </ul>
            );
          })}
        </div>

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
