import React, { useState } from "react";
import classes from "./Form.module.css";

const defaultValue = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 3,
};

const Form = (props) => {
  const [userInput, setUserInput] = useState(defaultValue);

  const calculate = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const reset = (event) => {
    event.preventDefault();
    console.log("Reset is clicked");
    setUserInput(defaultValue);
  };

  const handleValue = (input, value) => {;
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return (
    <form onSubmit={calculate} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            onChange={(event) =>
              handleValue("current-savings", event.target.value)
            }
            value={userInput["current-savings"]}
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            onChange={(event) =>
              handleValue("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            onChange={(event) =>
              handleValue("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            onChange={(event) => handleValue("duration", event.target.value)}
            id="duration"
            value={userInput["duration"]}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button type="reset" className={classes.buttonAlt} onClick={reset}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
