import React, { useState } from "react";
import DatePicker from "react-datepicker";
import luhn from "./luhn";

import "./Payment.scss";

let CreditCard = (luhn) => {
  const validateCVV = (cvv) => {
    if (cvv.length > 1 && cvv.length < 3) {
      setCVV(true);
    } else if (cvv.length < 2 || cvv.length > 3) {
      setCVV(false);
    }
  };

  const handleInputChange = (event) => {
    event.persist();

    validateCVV(inputs.securityCode);

    var isMasterCard = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/.test(
      inputs.cardNumber
    );
    var isVisa = /^4[0-9]{12}(?:[0-9]{3})?$/.test(inputs.cardNumber);
    var isAmex = /^3[47][0-9]{13}$/.test(inputs.cardNumber);
    var isDiscovery = /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/.test(
      inputs.cardNumber
    );

    setCard("");
    if (isMasterCard === true) {
      setCard("mastercard");
    }
    if (isVisa === true) {
      setCard("visa");
    }
    if (isAmex === true) {
      setCard("amex");
    }
    if (isDiscovery === true) {
      setCard("discovery");
    }

    console.log(card);

    Object.keys(inputs).forEach(function (key) {
      if (inputs[key] !== null || inputs[key] !== "") {
        setWarn((warn) => ({ ...warn, [key]: "" }));
      }
    });
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Checking if empty
    Object.keys(inputs).forEach(function (key) {
      if (inputs[key] === "" || inputs[key] === null) {
        setWarn((warn) => ({
          ...warn,
          [key]: `The ${key} field cannot be empty`,
        }));
      }
    });

    // If everything is OK
    if (
      inputs.firstName &&
      inputs.lastName &&
      inputs.cardNumber &&
      inputs.expiryDate &&
      inputs.securityCode
    ) {
      console.log("Valid! - can be sended!");
    }
  };

  const formInitialState = {
    firstName: "",
    lastName: "",
    cardNumber: "",
    expiryDate: "",
    securityCode: "",
  };

  const [CVV, setCVV] = useState(false);
  const [card, setCard] = useState("");
  const [inputs, setInputs] = useState(formInitialState);
  const [startDate, setStartDate] = useState(new Date());
  const [inputWarnColor] = useState("#ff5151");
  const [warn, setWarn] = useState(formInitialState);

  const [leadassengerdata, setLeadpassengerdata] = useState(false);

  return (
    <div className="credit-card-container">
      <p
        className="action-two"
        onClick={() => setLeadpassengerdata(!leadassengerdata)}
      >
        {" "}
        Use lead passengers' adress for billing
      </p>

      {leadassengerdata ? (
        <BillingAddress handleInputChange={handleInputChange} />
      ) : null}
      <h3>Credit Or Debit Card Details</h3>

      <form
        id="passenger-form"
        className="passenger-form"
        onSubmit={handleSubmit}
      >
        <div className="form-control-group">
          <div>
            <input
              style={
                warn.firstName !== ""
                  ? { border: `1px solid ${inputWarnColor}` }
                  : {}
              }
              className="form-control"
              placeholder="First Name"
              type="text"
              name="firstName"
              onChange={handleInputChange}
              value={inputs.firstName}
            />
            <p className="error">{warn.firstName}</p>
          </div>

          <div>
            <input
              style={
                warn.lastName !== ""
                  ? { border: `1px solid ${inputWarnColor}` }
                  : {}
              }
              className="form-control"
              placeholder="Last Name"
              type="text"
              name="lastName"
              onChange={handleInputChange}
              value={inputs.lastName}
            />
            <p className="error">{warn.lastName}</p>
          </div>
        </div>

        <div className="form-control-group">
          <input
            style={
              warn.cardNumber !== ""
                ? { border: `1px solid ${inputWarnColor}` }
                : {}
            }
            className={card !== null ? `form-control ${card}` : "form-control"}
            placeholder="Enter your card number"
            type="number"
            name="cardNumber"
            onChange={handleInputChange}
            value={inputs.cardNumber}
          />
          <p className="error">{warn.cardNumber}</p>

          <div>
            <input
              style={
                warn.securityCode !== ""
                  ? { border: `1px solid ${inputWarnColor}` }
                  : {}
              }
              className={CVV ? "form-control-icon security-code" : "form-control-icon"}
              placeholder="Security Code"
              type="number"
              name="securityCode"
              onChange={handleInputChange}
              value={inputs.securityCode}
            />
            <p className="error">{warn.securityCode}</p>
          </div>
        </div>

        <div className="form-control-group">
          <div>
            <DatePicker
              style={
                warn.expiryDate !== ""
                  ? { border: `1px solid ${inputWarnColor}` }
                  : {}
              }
              className="form-control"
              name="expiryDate"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="MM/yyyy"
              showMonthYearPicker
            />
            <p className="error">{warn.expiryDate}</p>
          </div>
        </div>
        <p>I have read and agree to the trip notes and terms and conditions</p>
        <button className="secondary-button">Pay Now</button>
      </form>
      <hr />
      {/* <img alt="amex" src={amex} />
      <img alt="mastercard" src={mastercard} />
      <img alt="mastercard2" src={mastercard2} />
      <img alt="paypal" src={paypal} />
      <img alt="visa" src={visa} /> */}
      <p>100% SECURE PAYMENT</p>
      <ul>
        <li>Shop with confidence</li>
        <li>All major debit and credit cards accepted</li>
      </ul>
      <p>
        Your card may be enrolled in the Visa Secure, MasterCard or Maestro ID
        Check programs. After you submit your order, your card issuer may prompt
        you for your password before you complete your purchase.
      </p>
    </div>
  );
};

let BillingAddress = (props) => {
  const handleInputChange = (event) => {
    event.persist();
    Object.keys(inputs).forEach(function (key) {
      if (inputs[key] !== null || inputs[key] !== "") {
        setWarn((warn) => ({ ...warn, [key]: "" }));
      }
    });
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const formInitialState = {
    country: "",
    city: "",
    address1: "",
    address2: "",
    postalCode: "",
  };
  const [inputs, setInputs] = useState(formInitialState);
  const [inputWarnColor] = useState("#ff5151");
  const [warn, setWarn] = useState(formInitialState);

  return (
    <div className="credit-card-billing-address">
      <div>
        <h3>Billing Address</h3>
        <input
          style={
            warn.country !== "" ? { border: `1px solid ${inputWarnColor}` } : {}
          }
          className="form-control"
          placeholder="Country"
          type="text"
          name="country"
          onKeyDown={(event) => handleInputChange(event)}
          value={inputs.country}
        />
        <p className="error">{warn.country}</p>
      </div>

      <div>
        <input
          style={
            warn.address1 !== ""
              ? { border: `1px solid ${inputWarnColor}` }
              : {}
          }
          className="form-control"
          placeholder="Address line 1"
          type="text"
          name="address1"
          onChange={handleInputChange}
          value={inputs.address1}
        />
        <p className="error">{warn.address1}</p>
      </div>

      <div>
        <input
          style={
            warn.address2 !== ""
              ? { border: `1px solid ${inputWarnColor}` }
              : {}
          }
          className="form-control"
          placeholder="Address line 2"
          type="text"
          name="email"
          onChange={handleInputChange}
          value={inputs.address2}
        />
        <p className="error">{warn.address2}</p>
      </div>

      <div>
        <input
          style={
            warn.city !== "" ? { border: `1px solid ${inputWarnColor}` } : {}
          }
          className="form-control"
          placeholder="City"
          type="text"
          name="city"
          onChange={handleInputChange}
          value={inputs.email}
        />
        <p className="error">{warn.city}</p>
      </div>

      <div>
        <input
          style={
            warn.postalCode !== ""
              ? { border: `1px solid ${inputWarnColor}` }
              : {}
          }
          className="form-control"
          placeholder="ZIP/Postal Code"
          type="text"
          name="email"
          onChange={handleInputChange}
          value={inputs.postalCode}
        />
        <p className="error">{warn.postalCode}</p>
      </div>
    </div>
  );
};

export default CreditCard;
