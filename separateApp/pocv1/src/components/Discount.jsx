import React, { useState } from "react";

let DiscountCode = () => {
  const [isActive, setisActive] = useState(true);

  const toogle = () => {
    setisActive(!isActive);
  };

  return (
    <div className="discount">
      <p>1 Passenger</p>
      {isActive ? (
        <div>
          <p className="action-two" onClick={toogle}>
            Add Discount code
          </p>
        </div>
      ) : (
        <div>
          <p>
            <input
              className="form-control"
              placeholder="Promo code"
              type="text"
              name="promoCode"
            />
          </p>
          <p className="action-two" onClick={toogle}>
            Hide
          </p>
        </div>
      )}
    </div>
  );
};

export default DiscountCode;
