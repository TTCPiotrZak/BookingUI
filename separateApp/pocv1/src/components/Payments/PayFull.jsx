import React, { useState } from "react";
import CreditCard from "./CreditCard";
import Paypal from "./Paypal";

let PayFull = (props) => {
  const [isCard, setisCard] = useState(false);
  const [price] = useState(2555);

  return (
    <div
      style={props.select === "full" ? { border: `1px solid #005C89` } : null}
      className="phase-container"
    >
      <div className="phase-data">
        <div className="payment-header">
          <div className="payment-info">
            <h4>Pay in full</h4>
            <p>The remaining amount of US$ 2,393.00 is due on 29 Apr 2020</p>
          </div>
          <div className="payment-price">
            <h4>US$ {price}</h4>
          </div>
        </div>
        <div>
          {props.select === "full" ? (
            <div className="choices">
              <div>
                <div onClick={() => setisCard(true)} className="choice">
                  Credit Card
                </div>
                <div
                  onClick={() => setisCard(false)}
                  className="choice"
                >
                  Paypal
                </div>
              </div>
              {isCard ? <CreditCard /> : <Paypal />}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PayFull;
