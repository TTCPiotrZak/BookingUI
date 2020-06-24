import React from "react";
import Checkbox from "../../common/Checkbox";

let SpecialRequirements = (props) => {
  return (
    <div className="phase-container">
      <div className="passenger-container-header">
        <h2>Special requirements</h2>
        <p className="action-two">Optional</p>
      </div>
      <div className="phase-data">
        <h3>Have any of the passengers any special requests?</h3>
        {props.passengers.map((item, key) => (
          <div key={key} className="checkbox-item">
            <label key={key}>
              {item.name}
              <Checkbox
                id={key}
                flag={"requirements"}
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

export default SpecialRequirements;
