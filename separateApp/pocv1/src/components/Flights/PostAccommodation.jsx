import React, {useState} from "react";

import { connect, useDispatch } from "react-redux";
import { accommodationActions } from "../../actions/accommodationActions";

const PostAccommodation = () =>{

  const Choices = {
    1: "1 nights",
    2: "2 nights",
    3: "3 nights",
  };
  
    const [postaccommodation, setPostaccommodation] = useState(false);
    const ChoicesKey = Object.keys(Choices);
    const [choice, setChoice] = useState();
  
    const dispatch = useDispatch();

    const handleChange = (event) => {
      setChoice(event.target.value);
      dispatch(accommodationActions.addPostAccommodation(event.target.value));
    };
  
    return(
      <div className ="phase-data">
      <div className ="accommodation-header">
      <span className ="hotel-pre"/>
        <div className ="accommodation-header-info">
      <h4>Goa Dabolim: Add accommodation after your trip</h4>
      <p>Park Inn by Raddison</p>
      </div>
      <div className ="accommodation-price">
        <div className ="accomodation-price-info">
      <p className ="bold">Not added</p>
      <p>from USD 107/night</p>
      </div>
      {postaccommodation
        ?     <span onClick = {() => setPostaccommodation(!postaccommodation)} className ="minus"/>
        :      <span onClick = {() => setPostaccommodation(!postaccommodation)} className ="plus"/>
        }
      </div>

      {postaccommodation
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

  export default PostAccommodation;