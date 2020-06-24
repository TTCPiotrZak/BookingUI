import React from "react";
import Logo from "../img/ch-logo.svg";

// import './Navbar.less'

let Navbar = (props) => {
  // Rendering steps title
  const renderSteps = () => {
    return props.phases.map((s, i) => (
      <li
        className={props.getClassName("phase", i)}
        onClick={props.handleClick}
        key={i}
        value={i}
      >
        <span>{props.phases[i].name}</span>
      </li>
    ));
  };

  return (
    <div className="Navbar">
      <img className="logo" alt="logo" src={Logo} />
      <ul> {renderSteps()}</ul>
      <p>EU +41 22 929 9216</p>
    </div>
  );
};

export default Navbar;
