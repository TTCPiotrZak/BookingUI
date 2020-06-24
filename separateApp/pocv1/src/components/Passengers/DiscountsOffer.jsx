import React from "react";
import Checkbox from "../../common/Checkbox";

let DiscountsOffer = (props) => {
  return (
    <div className="passenger-container">
      <div className="passenger-container-header">
        <h2>Discounts & offers</h2>
        <p className="action-two">Optional</p>
      </div>
      <div className="phase-data">
        <h3>Past Passenger Discount</h3>
        <p>Have any of the passengers travelled with Contiki before?</p>
        {props.passengers.map((item, key) => (
          <div key={key} className="checkbox-item">
            <label key={key}>
              {item.name}
              <Checkbox
                id={key + 2}
                flag={"discounts"}
                type="checkbox"
                name={item.name}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountsOffer;
