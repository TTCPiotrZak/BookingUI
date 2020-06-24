import React, {useState} from "react";
import AdditionalTrips from "../components/Flights/AdditionalTrips";
import "./Phases.scss";


import "../img/icons.svg"
import "../img/icons-new.svg"

import PreAccommodation from '../components/Flights/PreAccommodation'
import PostAccommodation from '../components/Flights/PostAccommodation'

import Flight from '../components/Flights/Flight'

let Flights = () => {
  return (
    <div>
      <ExtendStay/>
      <Flight/>
      <AdditionalTrips />
    </div>
  );
};

let ExtendStay = (props) => {

  return (
    <div className="phase-container">
      <div className="passenger-container-header">
        <h2>Extend your stay</h2>
        <p className="action-two">Optional</p>
      </div>
      <PreAccommodation/>
      <PostAccommodation/>
    </div>
  );
};

export default Flights;



