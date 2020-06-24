import React from "react";

let SaveHold = (props) => {
  return (
    <div
      style={props.select === "hold" ? { border: `1px solid #005C89` } : null}
      className="phase-data"
    >
      <h4>Save & hold my booking</h4>
      <p>We can keep your booking FREE of charge up to 30 Mar 2020</p>
      <div>
        {props.select === "hold" ? (
          <div className="save-container">
            <h3> You are placing this booking on hold</h3>
            <button className="secondary-button">Hold booking</button>
            <ul>
              <li>Pay the rest up to 31 Mar 2020</li>
              <li>Keep booking FREE of charge</li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SaveHold;
