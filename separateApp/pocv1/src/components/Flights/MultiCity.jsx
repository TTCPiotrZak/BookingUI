import React, {useState} from "react";

let MultiCityFlights = () => {
    return(
      <div>
      <FlightDate/>
      </div>
    )
    }

    let FlightDate = () => {
        return(
          <div className="blue-section">
          <div className="blue-section-content">
            <p>These dates are inclusive of any extra nights that you have chosen to book, before and after your trip.</p>
            <div className ="section-dates">
           <p>STARTS</p>
            <p className ="bold">Sun, 29 November 2020</p>
            <p>New Delhi, India</p>
            </div>
        
            <div className ="section-dates">
           <p>ENDS</p>
            <p className ="bold">Thu, 10 December 2020</p>
            <p>Goa Dabolim, India</p>
            </div>
        </div>
        </div>
        )
        }

    export default MultiCityFlights