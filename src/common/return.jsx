import React from 'react';
import { withRouter } from 'react-router-dom';

const Return = ({ history }) => <img  onClick={() => history.goBack()} alt="Return to the previous view" />;

export default withRouter(Return);