import React from "react";

import SpecialRequirements from "./SpecialRequirements";
import DiscountsOffer from "./DiscountsOffer";

const AdditionalProducts = () => {
  const passengers = [
    {
      name: "Passenger1",
      label: "Check Box 1",
    },
    {
      name: "Passenger2",
      label: "Check Box 2",
    },
  ];

  return (
    <div>
      <SpecialRequirements passengers={passengers} />
      <DiscountsOffer passengers={passengers} />
    </div>
  );
};

export default AdditionalProducts;
