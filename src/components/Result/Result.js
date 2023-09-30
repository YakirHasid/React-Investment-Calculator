import React from "react";

const Result = (props) => {
  const resultData = props.items;

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => (
          <tr key={yearData.key}>
            <td>{yearData.year}</td>
            <td>{yearData.savingsEndOfYear}</td>
            <td>{yearData.yearlyInterest}</td>
            <td>{yearData.totalInterest}</td>
            <td>{yearData.totalContribution}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Result;
