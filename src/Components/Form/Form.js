import classes from "./Form.module.css";
import { useState, useRef, useEffect } from "react";
import Select from "react-select";
import { aoList } from "../../resources/aoList";

export const Form = (props) => {
  const [date, setDate] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [ledWorkout, setLedWorkout] = useState("no");
  const [selectedAo, setSelectedAo] = useState(null);
  const dateInputRef = useRef(null);
  const [beatdownCount, setBeatdownCount] = useState(0);
  const [formError, setFormError] = useState({
    dateError: "",
    aoError: "",
  });

  let beatdown = {
    day: dayOfWeek,
    date: date,
    location: selectedAo,
    ledWorkout: ledWorkout,
  };

  useEffect(() => {
    console.log("error", formError);
  }, [formError]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formError.dateError === "" && formError.aoError === "") {
      console.log("made it here");
      props.onAddBeatdown(beatdown);
      setBeatdownCount(beatdownCount + 1);
      props.onAddBeatdownCount(beatdownCount);
    } else {
      handleFormErrors();
    }
  };

  const handleReset = () => {
    setSelectedAo(null);
    setLedWorkout("no");
    setDate("");
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    const dateObject = new Date(e.target.value);
    const dayOfWeek = dateObject.getDay();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    setDayOfWeek(daysOfWeek[dayOfWeek]);
    setFormError((prevErrors) => ({
      ...prevErrors,
      dateError: "",
    }));
  };

  // const handleSelectChange = (selectedOption) => {
  //   setLedWorkout(selectedOption ? selectedOption.value : "");
  // };

  const handleSelectChange = (e) => {
    setLedWorkout(e.target.value);
  };

  const handleAoChange = (selectedAo) => {
    setSelectedAo(selectedAo);
    setFormError((prevErrors) => ({
      ...prevErrors,
      aoError: "",
    }));
  };

  const handleFormErrors = () => {
    if (!date) {
      setFormError((prevErrors) => ({
        ...prevErrors,
        dateError: "Please enter a date",
      }));
    }
    if (!selectedAo) {
      setFormError((prevErrors) => ({
        ...prevErrors,
        aoError: "Please select an AO",
      }));
    }
  };

  return (
    <div>
      <form className={classes.form}>
        <div className={classes["input-group"]}>
          <div>
            <label htmlFor="beatdown-date">Beatdown Date</label>
            <input
              type="date"
              id="beatdown-date"
              name="beatdown-date"
              ref={dateInputRef}
              onChange={handleDateChange}
            />
            {formError.dateError !== "" && (
              <div className="error-message">{formError.dateError}</div>
            )}
          </div>
          <div>
            <label htmlFor="ao-location">AO Location</label>
            <Select
              closeMenuOnSelect={true}
              id="ao-location"
              name="ao-location"
              isClearable
              isDisabled=""
              options={aoList}
              onChange={handleAoChange}
              // key={`${selected}`}
              value={selectedAo || ""}
            />
            {formError.aoError !== "" && (
              <div className="error-message">{formError.aoError}</div>
            )}
          </div>
        </div>
        <div className={classes["input-group"]}>
          <div>
            <h3 className="required">Did You Q?</h3>
            <div className="">
              <label>
                <input
                  onChange={handleSelectChange}
                  type="radio"
                  name="yes"
                  value="yes"
                  checked={ledWorkout === "yes"}
                />
                Yes
              </label>
              <label>
                <input
                  onChange={handleSelectChange}
                  type="radio"
                  name="no"
                  value="no"
                  checked={ledWorkout === "no"}
                />
                No
              </label>
            </div>
          </div>
        </div>
        <div className={classes.actions}>
          <button
            type="reset"
            className={classes.buttonAlt}
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            type="submit"
            className={classes.button}
            onClick={handleSubmit}
            // disabled={isFormComplete()}
          >
            Add Beatdown
          </button>
        </div>
        {formError ? <div className="error-message">Error</div> : ""}
      </form>
    </div>
  );
};
