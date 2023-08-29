import classes from "./Form.module.css";
import { useState } from "react";
import Select from "react-select";

export const Form = (props) => {
  const initialInput = {
    "beatdown-date": "",
    "ao-location": "",
    "q-option": "",
  };

  const [userInput, setUserInput] = useState(initialInput);

  const aoList = [
    { value: 7, label: "Rubicon", key: "option1" },
    { value: 8, label: "Badapple", key: "option1" },
    { value: 9, label: "Windjammer", key: "option1" },
    { value: 10, label: "Crossroads", key: "option1" },
    { value: 7, label: "Rubicon", key: "option1" },
    { value: 8, label: "Badapple", key: "option1" },
    { value: 9, label: "Windjammer", key: "option1" },
    { value: 10, label: "Crossroads", key: "option1" },
    { value: 7, label: "Rubicon", key: "option1" },
    { value: 8, label: "Badapple", key: "option1" },
    { value: 9, label: "Windjammer", key: "option1" },
    { value: 10, label: "Crossroads", key: "option1" },
    { value: 7, label: "Rubicon", key: "option1" },
    { value: 8, label: "Badapple", key: "option1" },
    { value: 9, label: "Windjammer", key: "option1" },
    { value: 10, label: "Crossroads", key: "option1" },
  ];

  const handleReset = () => {
    setUserInput(initialInput);
  };

  const handleFormChange = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  return (
    <div>
      <form className={classes.form}>
        <div className={classes["input-group"]}>
          <p>
            <label htmlFor="beatdown-date">Beatdown Date</label>
            <input
              type="date"
              id="beatdown-date"
              name="beatdown-date"
              value={userInput["beatdown-date"]}
              onChange={(event) =>
                handleFormChange("beatdown-date", event.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="ao-location">AO Location</label>
            <Select
              closeMenuOnSelect={true}
              id="ao-location"
              name="ao-location"
              onChange={(event) =>
                handleFormChange("ao-location", event.target.value)
              }
              isClearable
              isDisabled=""
              options={aoList}
            />
          </p>
        </div>
        <div className={classes["input-group"]}>
          <div>
            <h3 className="required">Did You Q?</h3>
            <div className="">
              <label>
                <input
                  onChange={(event) =>
                    handleFormChange("q-option", event.target.value)
                  }
                  type="radio"
                  name="yes"
                  value="q-option"
                  checked=""
                />
                Yes
              </label>
              <label>
                <input
                  onChange={(event) =>
                    handleFormChange("q-option", event.target.value)
                  }
                  type="radio"
                  name="no"
                  value="ao"
                  checked=""
                />
                No
              </label>
            </div>
          </div>
        </div>
        <p className={classes.actions}>
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
        </p>
      </form>
    </div>
  );
};
