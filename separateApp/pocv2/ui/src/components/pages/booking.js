import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
//TODO - working imports
// import { SecondaryButton } from "../../components/atoms/SecondaryButton/SecondaryButton";
///TODO - connect to sellingcompany-config
import mockconfig from "./mockconfig.js";
import useFetch from "../../hooks/useFetch";

const ConfigurationObject = () => {
  //TODO - make easier?
  console.log(mockconfig);
  const temporaryLabel = {
    text: "Click for request configuration object",
  };

  const res = useFetch(
    "https://hn.algolia.com/api/v1/search?query=kubernetes",
    {}
  );
  console.log(res);

  return (
    <Fragment>
      <div>
        <SecondaryButton data={temporaryLabel} />
      </div>
    </Fragment>
  );
};

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

export default ConfigurationObject;
