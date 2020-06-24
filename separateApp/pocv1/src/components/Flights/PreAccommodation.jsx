import React, {useState} from "react";

import { connect, useDispatch } from "react-redux";
import { accommodationActions } from "../../actions/accommodationActions";

const PreAccommodation = () =>{

    const Choices = {
      1: "1 nights",
      2: "2 nights",
      3: "3 nights",
    };
  
    const [preaccommodation, setPreaccommodation] = useState(false);
    const ChoicesKey = Object.keys(Choices);
    const [choice, setChoice] = useState();
  
    const dispatch = useDispatch();

    const handleChange = (event) => {
      setChoice(event.target.value);
      dispatch(accommodationActions.addPreAccommodation(event.target.value));
    };
  
    return(
      <div className ="phase-data">
      <div className ="accommodation-header">
      <span className ="hotel-pre"/>
        <div className ="accommodation-header-info">
      <h4>New Delhi: Add accommodation before your trip</h4>
      <p>Ashtan Sarovar Hotel New Delhi</p>
      </div>
      <div className ="accommodation-price">
        <div className ="accomodation-price-info">
      <p className ="bold">Not added</p>
      <p>from USD 107/night</p>
      </div>
      {preaccommodation
        ?     <span onClick = {() => setPreaccommodation(!preaccommodation)} className ="minus"/>
        :      <span onClick = {() => setPreaccommodation(!preaccommodation)} className ="plus"/>
        }
      </div>

      {preaccommodation
      ?
      <div className ="choices">
        <div className ="accommodation-dates">
          <div>
          <p className ="soft-color"><span className ="checkin"/>CHECK IN</p>
          <p className ="bold">28th of November</p>
          </div>
          <div>
          <p className ="soft-color"><span className ="checkout"/>CHECK OUT</p>
          <p className ="bold">28th of November</p>
          </div>
          <p className ="soft-color"><span className ="roomtype"/>ROOM OPTIONS</p>
        </div>
          <div className="passenger-number">
          <select
            className="form-control minimal margin"
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
        </div>
      </div>
      : null}
            </div>
    </div>
    )
  }

  export default PreAccommodation;