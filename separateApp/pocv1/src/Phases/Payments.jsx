import React, { useState } from "react";

import PayDeposit from "../components/Payments/PayDeposit";
import PayFull from "../components/Payments/PayFull";
import SaveHold from "../components/Payments/SaveHold";

let Payments = () => {
  const [select, setSelect] = useState("");

  return (
    <div>
      <div onClick={() => setSelect("deposit")}>
        <PayDeposit select={select} />
      </div>
      <div onClick={() => setSelect("full")}>
        <PayFull select={select} />
      </div>
      <div onClick={() => setSelect("hold")}>
        <SaveHold select={select} />
      </div>
    </div>
  );
};

export default Payments;
