import classes from "./Form.module.css";
import { useState, useRef } from "react";
import Select from "react-select";
import { aoList } from "../../resources/aoList";

export const Form = (props) => {
  const [date, setDate] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [ledWorkout, setLedWorkout] = useState("no");
  const [selectedAo, setSelectedAo] = useState(null);
  const dateInputRef = useRef(null);
  const [beatdownCount, setBeatdownCount] = useState(0);

  let beatdown = {
    day: dayOfWeek,
    date: date,
    location: selectedAo,
    ledWorkout: ledWorkout,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddBeatdown(beatdown);
    setBeatdownCount(beatdownCount + 1);
  };

  console.log(beatdownCount);

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
  };

  const handleSelectChange = (e) => {
    setLedWorkout(e.target.value);
  };

  const handleAoChange = (selectedAo) => {
    setSelectedAo(selectedAo);
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
          >
            Add Beatdown
          </button>
        </div>
      </form>
    </div>
  );
};
