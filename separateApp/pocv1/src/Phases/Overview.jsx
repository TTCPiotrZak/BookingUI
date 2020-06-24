import React, { useState } from "react";
import "../img/icons.scss";

let Overview = () => {
  return (
    <div>
      <Passengers />
      <RoomType />
    </div>
  );
};

let Passengers = () => {
  const Choices = {
    One: "One",
    Two: "Two",
    Three: "Three",
  };
  const ChoicesKey = Object.keys(Choices);
  const [choice, setChoice] = useState();

  const handleChange = (event) => {
    setChoice(event.target.value);
  };

  return (
    <div className="phase-container">
      <h2>Passengers</h2>
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
        {choice}
      </div>
    </div>
  );
};

let RoomType = () => {
  const [selected, setSelected] = useState();
  const [numberOfitemsShown, setnumberOfitemsShown] = useState(2);
  const [show, setShow] = useState(true);
  const [isRecommended] = useState(true);

  const handleClick = (event, key) => {
    console.info(event);
    console.info(key);
    setSelected(!selected);
    // setSelected({
    //   ...selected,
    //   [event.target.key]: event.target.checked,
    // });
    console.info(selected);
  };

  const times = (n, fn) => {
    var array = [];
    for (var i = 0; i < n; i++) {
      array.push(fn(i));
    }
    return array;
  };

  const renderShareRoom = (shareSize, numberPassengers) => {
    return times(shareSize, (i) => {
      return (
        <i
          key={i}
          className={`room-graphics__icon icon-single-bed ${
            i + 1 > numberPassengers ? "-share" : ""
          }`}
        />
      );
    });
  };

  const room = [{ occupants: 5 }];

  const roomTypes = [
    {
      type: "single",
      icon: <i className="room-graphics__icon icon-single-bed" />,
      recommended: true,
    },
    {
      type: "twin",
      icon: (
        <div>
          <i className="room-graphics__icon icon-single-bed" />
          <i className="room-graphics__icon icon-single-bed" />
        </div>
      ),
      recommended: false,
    },
    {
      type: "twinShare",
      icon: <div>{renderShareRoom(2, room.occupants)}</div>,
    },
    {
      type: "triple",
      icon: (
        <div>
          <i className="room-graphics__icon icon-double-bed" />
          <i className="room-graphics__icon icon-double-bed" />
        </div>
      ),
    },
    {
      type: "tripleShare",
      icon: <div>{renderShareRoom(3, room.occupants)}</div>,
    },
    {
      type: "quad",
      icon: (
        <div>
          <i className="room-graphics__icon icon-double-bed" />
          <i className="room-graphics__icon icon-single-bed" />
          <i className="room-graphics__icon icon-single-bed" />
        </div>
      ),
    },
    {
      type: "quadShare",
      icon: <div>{renderShareRoom(4, room.occupants)}</div>,
    },
  ];

  const itemsToShow = roomTypes
    .slice(0, numberOfitemsShown)
    .map((room, key) => (
      // need to render isRecommended only when recommended
      <div
        onClick={(event, key) => handleClick(event, key)}
        className={`room-choice ${selected ? "selected" : ""}`}
        key={key}
      >
        {isRecommended ? <div className="ribbon">Reccommended</div> : {}}
        <div className="room-icon">
          <p>{room.type}</p>
          {room.icon}
        </div>
      </div>
    ));

  const toogle = () => {
    if (show) {
      setShow(!show);
      if (numberOfitemsShown + 3 <= roomTypes.length) {
        setnumberOfitemsShown(numberOfitemsShown + 10);
      } else {
        setnumberOfitemsShown(roomTypes.length);
      }
    } else {
      setShow(!show);
      if (numberOfitemsShown - 3 <= roomTypes.length) {
        setnumberOfitemsShown(numberOfitemsShown - 3);
      } else {
        setnumberOfitemsShown(roomTypes.length);
      }
    }
  };

  return (
    <div className="room-container">
      <h2>Room Type</h2>
      {itemsToShow.length ? itemsToShow : "Loading..."}
      {show ? (
        <button onClick={toogle}>Show more</button>
      ) : (
        <button onClick={toogle}>Hide</button>
      )}
    </div>
  );
};

export default Overview;
