// import _ from "lodash";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Process from "./Process";
// import { useGoogleOptimizeSPA } from "google-optimize-react-hooks";

import "./designsystem.scss";

function App(props) {
  // const [loading, variant] = useGoogleOptimizeSPA(
  //   "O2-_QYMDQ3Onz0Od75hX-g",
  //   "Variant"
  // );
  // const items = _.chunk(props.bookingDetails, 25);

  return (
    <Router>
      <div>
        <Route path="/" component={Process} />
      </div>
    </Router>

    //   if (loading) return <div>Loading...</div>; // Or a loading indicator
    //   if (variant === "2") {
    //     return <Process />;
    //   }
    //   if (variant === "1") {
    //     return <Process2 />;
    //   }

    // let Process2 = () => {
    //   return (
    //     <div>
    //       <h1>Traffic to this scope</h1>
    //     </div>
    //   );
    // };
  );
}

export default App;
