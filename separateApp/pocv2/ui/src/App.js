import React, { Fragment } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import ConfigurationObject from "./components/pages/booking.js";
import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path='/' component={ConfigurationObject} />
      </Fragment>
    </Router>
  );
};
export default App;
