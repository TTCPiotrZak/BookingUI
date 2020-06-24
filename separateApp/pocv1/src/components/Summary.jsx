import React, { useEffect, useState } from "react";
import DiscountCode from "./Discount";
import { connect, useDispatch } from "react-redux";
import "./Summary.scss";
import { accommodationActions } from "../actions/accommodationActions";

let Summary = (props) => {
  
  const [sendDataToTropics, setsendDataToTropics] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [expandMobile, setexpandMobile] = useState(false);

  const renderButtonName = () => {
    if (props.compState < props.phases.length - 1) {
      return props.phases[props.compState + 1].name;
    } else {
      return "Transaction";
    }
  };


  // update 21.05.2020 - catastrophically solution
  useEffect(() => {
    if (props.compState === 2) {
      setsendDataToTropics(true);
    } else {
      setsendDataToTropics(false);
    }
  }, [props.compState]);

  return (
    <div className="right-summary">
      <div className="container-summary">

    {/* {expandMobile ? */}
        <div 
        className = {expandMobile ? "summary-mobile-body" : "summary-mobile-body fade-out" } 
        >
        <div className="summary-header">
          <h4>Trip Summary</h4>
          <p className="action-two"><i className ="tooltip"/>Important Trip Notes</p>
        </div>
      {props.accommodation.preAccommodation
      ? <PreTripAccommodation startDate = {startDate} preAccommodation = {props.accommodation.preAccommodation}  />
      : null
      }

        <div className="summary-periods">
          <div className="summary-period">
            <p className="soft-color"><i className ="calendar"/> STARTS</p>
            <div className ="summary-line"></div>
      <div className ="summary-data">
      <p className="bold">{startDate.toString()}</p>
      <p className="soft-color">London, United Kingdom</p>
      </div>
          </div>
          <div className="summary-period">
            <p className="soft-color"><i className ="calendar"/> ENDS</p>
            <div className ="summary-line"></div>
      <div className ="summary-data">
      <p className="bold">{endDate.toString()}</p>
      <p className="soft-color">London, United Kingdom</p>
      </div>
          </div>
        </div>
      {props.accommodation.postAccommodation
      ? <PostTripAccommodation endDate = {endDate} postAccommodation = {props.accommodation.postAccommodation}/>
      : null
      }
        <div className="discounts">
          <div className="discount">
            <p>Trip</p>
            <p>USD 6,690</p>
          </div>
          <div className="discount">
            <p>Summer Sale Discount</p>
            <p className="green">-USD 400</p>
          </div>
          <div className="discount">
            <p>Taxes, fees & other costs</p>
            <p>USD 400</p>
          </div>
          <hr></hr>
        </div>
        <DiscountCode />
        </div>
        {/* : null} */}

      <div className ="summary-mobile-sticky">

        <div className="final-price" onClick={() => setexpandMobile(!expandMobile)}>
          <h2>Total</h2>
          <h2>USD 7,290</h2>
        </div>

        {sendDataToTropics ? (
          <button
            type="submit"
            form="passenger-form"
            className="primary-button"
          >
            Continue: {renderButtonName()}
          </button>
        ) : (
          <button className="primary-button" onClick={props.next}>
            Continue: {renderButtonName()}
          </button>
        )}
    </div>
    






      </div>
      <Email />
      <WhyBook />
    </div>
  );
};

let PreTripAccommodation = (props) => {

  return(
    <div className="summary-periods">
    <div className="summary-period">
      <p className="soft-color"><i className ="hotel"/> PRE-TRIP ACCOMMODATION</p>
      <div className ="summary-line"></div>
      <div className ="summary-data">
      <p className="bold">{props.startDate.getDate() - props.preAccommodation}</p>
      <p className="soft-color">London, United Kingdom</p>
      </div>
    </div>
  </div>
  )
}

let PostTripAccommodation = (props) => {

  return(
    <div className="summary-periods">
    <div className="summary-period">
      <p className="soft-color"><i className ="hotel"/> POST-TRIP ACCOMMODATION</p>
      <div className ="summary-line"></div>
      <div className ="summary-data">
      <p className="bold">{props.endDate.getDate() + props.postAccommodation}</p>
      <p className="soft-color">London, United Kingdom</p>
      </div>
    </div>
  </div>
  )
}



let Email = () => {
  return (
    <div className="summary-additional">
      <h3>E-mail trip details</h3>
      <p>Send the above trip price details to your inbox</p>
    </div>
  );
};

let WhyBook = () => {
  return (
    <div className="summary-additional">
      <h3>Why book with us?</h3>
      <ul>
        <li>Up to the Minute Availlabillity</li>
        <li>Instant Booking Confirmation</li>
        <li>No hidden fees or charges</li>
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    accommodation: state.accommodation,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPreAccommodation: () => dispatch(accommodationActions()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);

