import React from "react";

const Form = () => {
  const calculate = (event) => {
    event.preventDefault();
    console.log("Submit is clicked");
  };

  const reset = (event) => {
    event.preventDefault();
    console.log("Reset is clicked");
  };

  const handleValue = (input, value) => {
    console.log(input, value);
  };

  return (
    <form onSubmit={calculate} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            onChange={(event) =>
              handleValue("current-savings : ", event.target.value)
            }
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            onChange={(event) =>
              handleValue("yearly-contribution : ", event.target.value)
            }
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            onChange={(event) =>
              handleValue("expected-return : ", event.target.value)
            }
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            onChange={(event) => handleValue("duration : ", event.target.value)}
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={reset}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
