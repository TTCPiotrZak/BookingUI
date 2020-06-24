import React, { useState } from "react";
import CreditCard from "./CreditCard";
import Paypal from "./Paypal";

let PayDeposit = (props) => {
  const [isCard, setisCard] = useState();

  const [price, setPrice] = useState(162);
  const [editMode, seteditMode] = useState(false);

  const min = 162;
  const max = 2555;

  const renderError = () => {
    if (price > max || price < min) {
      return (
        <p className="error">
          Deposit payment amount must be between US$ 162.00 and US$ 2,555.00
        </p>
      );
    }
  };

  const hideChange = () => {
    if (price < max && price > min) {
      seteditMode(false);
    }
  };

  return (
    <div
      style={
        props.select === "deposit" ? { border: `1px solid #005C89` } : null
      }
      className="phase-container"
    >
      <div className="phase-data">
        <div className="payment-header">
          <div className="payment-info">
            <h4>Pay only a deposit</h4>
            <p>The remaining amount of US$ 2,393.00 is due on 29 Apr 2020</p>
          </div>
          <div className="payment-price">
            <h4>US$ {price}</h4>
            <p className="action-two" onClick={() => seteditMode(!editMode)}>
              Change amount
            </p>
            {editMode ? (
              <div>
                <input
                  className="form-control"
                  type="number"
                  value={price}
                  placeholder="Change to which value?"
                  onChange={(e) => setPrice(e.target.value)}
                />
                <button
                  onClick={() => hideChange()}
                  className="discount-code__add -new-ui_plus"
                ></button>
              </div>
            ) : null}
            {renderError()}
          </div>
        </div>
        <div>
          {props.select === "deposit" ? (
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

export default PayDeposit;
