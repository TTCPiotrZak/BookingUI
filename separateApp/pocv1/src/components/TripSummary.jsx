import React from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

import "./TripSummary.scss";
import { useModal } from "../common/modal";

let TripSummary = () => {
  const { toggle: toggleA, RenderModal: RenderModalA } = useModal(); // note how we alias our destructured variables by providing a name behind the colon
  const { toggle: toggleB, RenderModal: RenderModalB } = useModal();

  const feefoRating = 3.7;

  return (
    <div className="trip-summary">
      <img className="trip-summary-photo" alt="Tour" src=""></img>
      <div className="trip-summary-header">
        <h3 className="bold">
          Ultimate European Adventure plus Greek Islands Hopping
        </h3>
        <p>(From March)</p>
        <div className="trip-summary-rating">
          <Rater rating={feefoRating} total={5} interactive={false} />{" "}
          {feefoRating}
        </div>
        <div className="trip-summary-info">
          <p>45 days, 15 countries</p>
          <p className="action" onClick={toggleA}>
            Show map
          </p>
          <p className="action" onClick={toggleB}>
            View Itineary
          </p>
          <RenderModalA>
            <p>Map</p>
          </RenderModalA>
          <RenderModalB>
            <p>Itineary</p>
          </RenderModalB>
          <div id="modal-root" />
        </div>
      </div>
    </div>
  );
};

export default TripSummary;
