import React from "react";
import PropTypes from "prop-types";
import "./SecondaryButton.scss";

const SecondaryButton = ({ data: { text } }) => {
  return (
    <button data-testid="secondary-button" className="primary-button">
      {text}
    </button>
  );
};

SecondaryButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SecondaryButton;
