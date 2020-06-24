import React from "react";
import "./Confirmation.scss";

let Confirmation = () => {
  return (
    <div className="confirmation-container">
       <h1>Confirmation</h1>
      <BookingConfirm />
      <UnableInformation />
      <ShareExcitement />
      <Rating />
      <SummaryInfo />
    </div>
  );
};

let BookingConfirm = () => {
  const bookingConfirmationTypes = [
    { key: "RQ", type: "Requested" },
    { key: "AV", type: "Available" },
    { key: "CL", type: "Close" },
    { key: "XX", type: "Cancelled" },
    { key: "CF", type: "Confirmed" },
  ];

  return (
    <div className="green-section">
      <div className="green-section-content">
        <h1>Your booking is {bookingConfirmationTypes[0].type}</h1>
        <p>Your reservation code: CHEUOS-A059014</p>
      </div>
    </div>
  );
};

let UnableInformation = () => {
  return (
    <div className="blue-section">
      <div className="blue-section-content">
        <p>
          We are unable to confirm your trip at this time as it has been placed
          as on request. We will contact you within 24 - 48 business hours with
          a status update. Thank you for your patience and please contact us if
          you have any further questions.
        </p>
      </div>
    </div>
  );
};

let SummaryInfo = () => {
  return <div className="summary-info"></div>;
};

let Rating = () => {
  return (
    <div className="rating-container">
      <h2>How did we do? Rate your booking experience with us</h2>
      <div className="rating-content">
        <Slider
          initial={0}
          max={10}
          formatFn={(number) => number.toFixed(0)}
          onChange={(value) => console.log(value)}
        />
        <p>Comment:</p>
        <input placeholder="text"></input>
        <p>
          Note: this is not technical support. For help with your booking please
          call us on{" "}
        </p>
        <button className="primary-button">Send Feedback</button>
      </div>
    </div>
  );
};

const getPercentage = (current, max) => (100 * current) / max;
const getValue = (percentage, max) => (max / 100) * percentage;
const getLeft = (percentage) => `calc(${percentage}% - 5px)`;

const Slider = ({
  initial,
  max,
  formatFn = (number) => number.toFixed(0),
  onChange,
}) => {
  const sliderRef = React.useRef();
  const thumbRef = React.useRef();
  const currentRef = React.useRef();

  const diff = React.useRef();

  const handleMouseMove = (event) => {
    let newX =
      event.clientX -
      diff.current -
      sliderRef.current.getBoundingClientRect().left;

    const end = sliderRef.current.offsetWidth - thumbRef.current.offsetWidth;

    const start = 0;

    if (newX < start) {
      newX = 0;
    }

    if (newX > end) {
      newX = end;
    }

    const newPercentage = getPercentage(newX, end);
    const newValue = getValue(newPercentage, max);

    thumbRef.current.style.left = getLeft(newPercentage);
    currentRef.current.textContent = formatFn(newValue);

    onChange(newValue);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("mousemove", handleMouseMove);
  };

  const handleMouseDown = (event) => {
    diff.current =
      event.clientX - thumbRef.current.getBoundingClientRect().left;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <>
      <div className="slider-values">
        <h3 ref={currentRef}>{formatFn(initial)}</h3>
        <h3>{formatFn(max)}</h3>
      </div>
      <div ref={sliderRef} className="styled-slider"></div>
      <div
        ref={thumbRef}
        onMouseDown={handleMouseDown}
        className="styled-thumb"
      ></div>
    </>
  );
};

let ShareExcitement = () => {
  return (
    <div>
      <h2>Share the Excitement!</h2>
    </div>
  );
};

export default Confirmation;
