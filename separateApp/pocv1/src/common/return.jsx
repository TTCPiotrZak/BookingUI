import React from "react";
import { withRouter } from "react-router-dom";

const Return = ({ history }) => (
  <span
    onClick={() => history.goBack()}
    alt="Return to the previous view"
    class="icon"
  >
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M351,9a15,15 0 01 19,0l29,29a15,15 0 01 0,19l-199,199l199,199a15,15 0 01 0,19l-29,29a15,15 0 01-19,0l-236-235a16,16 0 01 0-24z" />
    </svg>
  </span>
);

export default withRouter(Return);
