import React, { useState } from "react";
import DatePicker from "react-datepicker";

const Checkbox = (props) => {
  const [checkedItems, setCheckedItems] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = () => {
    setCheckedItems(!checkedItems);
  };

  const renderForm = () => {
    if (props.flag === "requirements") {
      return (
        <div>
          <input
            className="form-control"
            placeholder="eg food or medical requirements, accomodation preferences, special occasions"
            type="text"
            name="region"
          />
        </div>
      );
    }
    if (props.flag === "discounts") {
      return (
        <div>
          <input
            className="form-control"
            placeholder="Name of trip"
            type="text"
            name="region"
          />
          <DatePicker
            className="form-control"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      );
    }
  };

  return (
    <div>
      <input
        key={props.id}
        type={props.type}
        name={props.name}
        onChange={handleChange}
      />
      {checkedItems ? renderForm() : null}
    </div>
  );
};

export default Checkbox;
