import React, { useState } from "react";

import Overview from "./Phases/Overview";
import Flights from "./Phases/Flights";
import Passengers from "./Phases/Passengers";
import Payments from "./Phases/Payments";

import Confirmation from "./containers/Confirmation";

import TripSummary from "./components/TripSummary";
import Summary from "./components/Summary";
import Navbar from "./components/Navbar";

import "./components/Navbar.scss";

export const phases = [
  { name: "Trip Overview", component: <Overview /> },
  { name: "Flights & Extras", component: <Flights /> },
  { name: "Passengers", component: <Passengers /> },
  { name: "Payments", component: <Payments /> },
];

let Process = (props) => {
  const [finished] = useState(true);

  // Adding property class
  const getClassName = (className, i) => {
    return className + "-" + navState.styles[i];
  };
  // Rendering when - onClick on Navs Items
  const handleClick = (evt) => {
    if (
      evt.currentTarget.value === phases.length - 1 &&
      compState === phases.length - 1
    ) {
      setNavState(phases.length);
    } else {
      setNavState(evt.currentTarget.value);
    }
  };
  // Navigate
  const next = () => {
    if (compState === phases.length - 1) {
      console.info("the out of scope");
    } else {
      setNavState(compState + 1);
    }
  };
  const previous = () => {
    if (compState <= 0) {
      console.info("the out of scope");
    } else {
      setNavState(compState - 1);
    }
  };
  // Setting next step in Nav
  const setNavState = (next) => {
    setnavState(getNavStates(next, phases.length));
    if (next < phases.length) {
      setcompState(next);
    }
    checkNavState(next);
  };
  // Checking currently step
  const checkNavState = (currentStep) => {};

  // Applying styling +
  const getNavStates = (indx, length) => {
    let styles = [];
    for (let i = 0; i < length; i++) {
      if (i < indx) {
        styles.push("done");
      } else if (i === indx) {
        styles.push("doing");
      } else {
        styles.push("todo");
      }
    }
    return { current: indx, styles: styles };
  };

  const [compState, setcompState] = useState(0);
  const [navState, setnavState] = useState(getNavStates(0, phases.length));

  const Component = phases[compState].component.type;

  return (
    <div>
      <Navbar
        getClassName={getClassName}
        phases={phases}
        handleClick={handleClick}
      />
      {finished ? (
        <div>
          <div className="container-header">
            <h1>{phases[compState].name}</h1>
            <button className="secondary-button">FAQs</button>
          </div>
          <div className="process-container">
            <div className="container-phases">
              <TripSummary />
              <Component next={next} onSubmit={next} />
            </div>
            <Summary phases={phases} compState={compState} next={next} />
          </div>
        </div>
      ) : (
        <div className="process-container">
          <Confirmation />{" "}
        </div>
      )}
      <div
        className="process-return"
        onClick={previous}
        alt="Return to the previous view"
      >
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M351,9a15,15 0 01 19,0l29,29a15,15 0 01 0,19l-199,199l199,199a15,15 0 01 0,19l-29,29a15,15 0 01-19,0l-236-235a16,16 0 01 0-24z" />
        </svg>
      </div>
    </div>
  );
};

export default Process;
