import React, {useState} from "react";

import ReturnFlights from './ReturnFlight'
import MultiCityFlights from './MultiCity'

let Flight = () => {

    const [addFlight, setAddFlight] = useState(false);
    const [flightType, setFlightType] = useState(false);
  
    return(
      <div className="phase-container">
      <div className="passenger-container-header">
        <h2>Flights to connect you with your trip</h2>
        <p className="action-two">Optional</p>
        </div>
        <div className ="phase-data">
        <span className ="plane"/>
          <p>We offer Contiki Organized flights that are specially selected by our professional team to connect you with your trip</p>
          <ul>
            <li>Get to your trip start location on time</li>
            <li>Arrive on time - no flight delay worries</li>
            <li>We will find the best possible flight for you</li>
          </ul>
          <p
          className="action-two"
          onClick={() => setAddFlight(!addFlight)}
        >
          {" "}
          Add flights to connect you with your trip
        </p>
        {addFlight
        ?              <div> <div>
        <div onClick={() => setFlightType(true)} className="choice">
          Return
        </div>
        <div
          onClick={() => setFlightType(false)}
          className="choice"
        >
          Multi-city
        </div>
      </div>
      {flightType ? <ReturnFlights /> : <MultiCityFlights />}
    </div>
        : null}      
        </div>
        </div>
    )
  }

  export default Flight;