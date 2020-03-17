
import React, {useState} from 'react';

import './Phases.scss'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

let Overview = () => {
    return(
    <div className="container">
        <h1>Overview</h1>
        <TripSummary/>
        <Passengers/>
        <RoomType/>
    </div>
    )
}

let TripSummary = () => {
    return(
        <div className="trip-summary">
            <h2>Ultimate European Adventure plus Greek Islands Hopping</h2>
        </div>
        )
}

let Passengers = () => {


    const Choices = {
        One: 'One',
        Two: 'Two',
        Three: 'Three',
      };
    const ChoicesKey = Object.keys(Choices);
    const [choice, setChoice] = useState();

    const handleChange = (event) => {setChoice (event.target.value);}

    return(
        <div className="trip-summary">
            <h3>Passengers</h3>
        <select name="choice" value={choice} onChange={handleChange} required>
            {ChoicesKey.map(option => (
            <option value={option} key={option}>
              {Choices[option]}
            </option>
          ))}
        </select>
        {choice}
        </div>
        )
}

let RoomType = () => {

    return(
        <div className="trip-summary">
            <h3> Room Type</h3>
            <RoomChoice/>
            <RoomChoice/>
        </div>
        )
}

let RoomChoice = (props) =>  {

    const [selected, setSelected] = useState();
    
    const handleClick = () => {
        setSelected(!selected)
        console.info(selected)
    }

    return(
        <div onClick = {handleClick} className={`room-choice ${selected ? "selected" : ""}`}>
            <h3>Room Type</h3>
            <h3>Icon</h3>
        </div>
    )
}



export default Overview

