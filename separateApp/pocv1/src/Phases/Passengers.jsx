import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";

import { passengerActions } from "../actions/passengerActions";

import { connect, useDispatch } from "react-redux";
import AdditionalProducts from "../components/Passengers/AdditionalProducts";

let Passengers = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(passengerActions.receiveCountries());

  }, [dispatch]);

  return (
    <div>
      <PersonalDetails next={props.next} />
      <AdditionalProducts />
    </div>
  );
};

let PersonalDetails = (props) => {
  const formInitialState = {
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDay: "",
    country: "",
    city: "",
    address1: "",
    address2: "",
    region: "",
    postalCode: "",
  };
  const [inputs, setInputs] = useState(formInitialState);
  const [inputWarnColor] = useState("#ff5151");
  const [warn, setWarn] = useState(formInitialState);

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
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validating email
    const isEmailValid = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(
      inputs.email
    );
    if (isEmailValid) {
      console.info("valid");
    } else {
      setWarn((warn) => ({
        ...warn,
        email: `Please enter a proper email address, e.g. my-email@address.com`,
      }));
    }
    // Validating field length
    if (inputs.firstName.length < 2) {
      setWarn((warn) => ({
        ...warn,
        firstName: `Please enter at least 2 characters for your first name.`,
      }));
    }
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
      inputs.email &&
      inputs.phone &&
      inputs.birthDay &&
      inputs.country &&
      inputs.city &&
      inputs.address1 &&
      inputs.address2 &&
      inputs.region &&
      inputs.postalCode
    ) {
      console.log("Valid! - can be sended!");
      // magic here (?) => Tropics
      props.next();
    }
  };

  const Choices = {
    1: "Mr",
    2: "Mrs",
    3: "Ms",
    4: "Miss",
    5: "Doctor",
  };
  const ChoicesKey = Object.keys(Choices);
  const [choice, setChoice] = useState();

  const handleChange = (event) => {
    setChoice(event.target.value);
  };

  return (
    <form
      id="passenger-form"
      className="passenger-form"
      onSubmit={handleSubmit}
    >
      <div className="phase-container">
        <h2>Lead Passenger Details</h2>
        <div className="phase-data">
          <div className="form-control-group">
            <select
              style={
                warn.title !== ""
                  ? { border: `1px solid ${inputWarnColor}` }
                  : {}
              }
              className="form-control minimal"
              name="choice"
              value={choice}
              onChange={handleChange}
              required
            >
              {ChoicesKey.map((option) => (
                <option value={option} key={option}>
                  {Choices[option]}
                </option>
              ))}
            </select>
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
            <div>
              <input
                style={
                  warn.email !== ""
                    ? { border: `1px solid ${inputWarnColor}` }
                    : {}
                }
                className="form-control"
                placeholder="Mail"
                type="text"
                name="email"
                onChange={handleInputChange}
                value={inputs.email}
              />
              <p className="error">{warn.email}</p>
            </div>
            <div>
              <input
                style={
                  warn.phone !== ""
                    ? { border: `1px solid ${inputWarnColor}` }
                    : {}
                }
                className="form-control"
                placeholder="Phone"
                type="text"
                name="phone"
                onChange={handleInputChange}
                value={inputs.phone}
              />
              <p className="error">{warn.phone}</p>
            </div>
          </div>
          <div>
            <input
              style={
                warn.phone !== ""
                  ? { border: `1px solid ${inputWarnColor}` }
                  : {}
              }
              className="form-control"
              type="text"
              placeholder="Birth Day"
              name="birthday"
              onChange={handleInputChange}
              value={inputs.birthDay}
            />
            <p className="error">{warn.birthDay}</p>
          </div>
        </div>
        <h2>Billing Details</h2>
        <div className="phase-data">
          <div className="form-control-group">
            <div>
              <input
                style={
                  warn.country !== ""
                    ? { border: `1px solid ${inputWarnColor}` }
                    : {}
                }
                className="form-control"
                placeholder="Country"
                type="text"
                name="country"
                onChange={handleInputChange}
                value={inputs.country}
              />
              <p className="error">{warn.country}</p>
            </div>
            <div>
              <input
                style={
                  warn.city !== ""
                    ? { border: `1px solid ${inputWarnColor}` }
                    : {}
                }
                className="form-control"
                placeholder="City"
                type="text"
                name="city"
                onChange={handleInputChange}
                value={inputs.city}
              />
              <p className="error">{warn.city}</p>
            </div>
          </div>

          <div className="form-control-group">
            <div>
              <input
                style={
                  warn.address1 !== ""
                    ? { border: `1px solid ${inputWarnColor}` }
                    : {}
                }
                className="form-control"
                placeholder="Address1"
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
                placeholder="Address2"
                type="text"
                name="address2"
                onChange={handleInputChange}
                value={inputs.address2}
              />
              <p className="error">{warn.address2}</p>
            </div>
          </div>

          <div className="form-control-group">
            <div>
              <input
                style={
                  warn.region !== ""
                    ? { border: `1px solid ${inputWarnColor}` }
                    : {}
                }
                className="form-control"
                placeholder="Region"
                type="text"
                name="region"
                onChange={handleInputChange}
                value={inputs.region}
              />
              <p className="error">{warn.region}</p>
            </div>
            <div>
              <input
                style={
                  warn.postalCode !== ""
                    ? { border: `1px solid ${inputWarnColor}` }
                    : {}
                }
                className="form-control"
                placeholder="Postal Code"
                type="text"
                name="postalCode"
                onChange={handleInputChange}
                value={inputs.postalCode}
              />
              <p className="error">{warn.postalCode}</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

function mapStateToProps(state) {
  return {
    countries: state.countries,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    receiveCountries: () => dispatch(passengerActions()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Passengers);
