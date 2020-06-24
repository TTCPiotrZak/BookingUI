import React from "react";
import Checkbox from "../../common/Checkbox";

let AdditionalTrips = (props) => {
  return (
    <div className="phase-container">
      <div className="passenger-container-header">
        <h2>Additional trips</h2>
        <p className="action-two">Optional</p>
      </div>
      <div className="phase-data">
        <p>Are you wanting to book more than one Contiki trip today?</p>
        <Checkbox flag={"discounts"} type="checkbox" />
      </div>
    </div>
  );
};

export default AdditionalTrips;
