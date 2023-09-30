import React, { useState } from "react";

const InvestmentForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [expectedIntereset, setExpectedIntereset] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");

  const calculateSubmitHandler = (event) => {
    event.preventDefault();

    const calculateData = {
      'current-savings': currentSavings,
      'yearly-contribution': yearlySavings,
      'expected-return' : expectedIntereset,
      'duration' : investmentDuration
    };

    console.log(calculateData);
  }

  return (
    <form className="form" onSubmit={calculateSubmitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSavings}
            onChange={e => setCurrentSavings(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlySavings}
            onChange={e => setYearlySavings(e.target.value)}
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
            id="expected-return"
            value={expectedIntereset}
            onChange={e => setExpectedIntereset(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={investmentDuration}
            onChange={e => setInvestmentDuration(e.target.value)}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
