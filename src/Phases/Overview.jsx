
import React, {useState} from 'react';

import './Phases.scss'

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

    const [selected, setSelected] = useState();
    const [numberOfitemsShown, setnumberOfitemsShown] = useState(2);
    const [show, setShow] = useState(true);

    const handleClick = () => {
        setSelected(!selected)
        console.info(selected)
    }

    const roomTypes = [
        {type: "single",icon:'example',},
        {type: "twin",icon:'example',},
        {type: "twinShare",icon:'example',},
        {type: "tripleShare",icon:'example',},
        {type: "quad",icon:'example',},
        {type: "quadShare",icon:'example',},
        {type: "multiShare",icon:'example',},
    ]

    const itemsToShow = roomTypes
    .slice(0, numberOfitemsShown)
    .map(room => <div onClick = {handleClick} className={`room-choice ${selected ? "selected" : ""}`} key={room}>
    <p>{room.type}</p>
    <p>Icon: {room.icon}</p>
</div>);

    const toogle = () => {
        if(show){
            setShow(!show)
            if (numberOfitemsShown + 3 <= roomTypes.length) {setnumberOfitemsShown(numberOfitemsShown +3)}
            else {setnumberOfitemsShown(roomTypes.length)}
        }else{
            setShow(!show)
            if (numberOfitemsShown - 3 <= roomTypes.length) {setnumberOfitemsShown(numberOfitemsShown - 3)}
            else {setnumberOfitemsShown(roomTypes.length)}
        }
      }

    return(
        <div className="trip-summary">
            <h3>Room Type</h3>
            {itemsToShow.length ? itemsToShow : "Loading..."}
            {show 
            ? <button onClick={toogle}>Show more</button>
            :  <button onClick={toogle}>Hide</button>
            }
        </div>
        )
}



export default Overview
