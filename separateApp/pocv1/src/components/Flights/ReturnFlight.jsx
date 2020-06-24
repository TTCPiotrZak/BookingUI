import React, {useState} from "react";
import DatePicker from "react-datepicker";

let ReturnFlights = () => {

    const formInitialState = {
      startCity: "",
      endCity: "",
    }
  
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
  
    const [inputs, setInputs] = useState(formInitialState);
    const [inputWarnColor] = useState("#ff5151");
    const [warn, setWarn] = useState(formInitialState);
  
    const handleInputChange = (event) => {
      event.persist();
      Object.keys(inputs).forEach(function (key) {
        if (inputs[key] !== null || inputs[key] !== "") {
          setWarn((warn) => ({ ...warn, [key]: "" }));
        }
      });
      setInputs((inputs) => ({
        ...inputs,
        [event.target.name]: event.target.value,
      }));
    };
  
  return(
    <div>
    <FlightDate/>
    <div className="form-control-group">
              <div>
              <i className ="pin"/>
                <input
                  style={
                    warn.email !== ""
                      ? { border: `1px solid ${inputWarnColor}` }
                      : {}
                  }
                  className="form-control-icon"
                  placeholder="Try New York"
                  type="text"
                  name="startDate"
                  onChange={handleInputChange}
                  value={inputs.startDate}
                />
                <p className="error">{warn.startDate}</p>
              </div>
              <div>
  
                <input
                  style={
                    warn.endDate !== ""
                      ? { border: `1px solid ${inputWarnColor}` }
                      : {}
                  }
                  className="form-control"
                  placeholder="New Delphi"
                  type="text"
                  name="endDate"
                  onChange={handleInputChange}
                  value={inputs.endDate}
                />
                <p className="error">{warn.endDate}</p>
              </div>
            </div>
  
  
            <i className ="calendar"/>
            <DatePicker
                style={
                  warn.expiryDate !== ""
                    ? { border: `1px solid ${inputWarnColor}` }
                    : {}
                }
                className="form-control"
                name="date"
                placeholder="Departure date" 
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
              />
  
  
                          <DatePicker
                style={
                  warn.expiryDate !== ""
                    ? { border: `1px solid ${inputWarnColor}` }
                    : {}
                }
                className="form-control"
                placeholder="Return date" 
                name="date"
                selected={endDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
              />
  </div>
  )
  }

  let FlightDate = () => {
    return(
      <div className="blue-section">
      <div className="blue-section-content">
        <p>These dates are inclusive of any extra nights that you have chosen to book, before and after your trip.</p>
        <div className ="section-dates">
       <p>STARTS</p>
        <p className ="bold">Sun, 29 November 2020</p>
        <p>New Delhi, India</p>
        </div>
    
        <div className ="section-dates">
       <p>ENDS</p>
        <p className ="bold">Thu, 10 December 2020</p>
        <p>Goa Dabolim, India</p>
        </div>
    </div>
    </div>
    )
    }

  export default ReturnFlights