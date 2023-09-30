import React from "react";

const ResultRows = (props) => {
  const resultData = props.items;
  return (
    <tbody>
      {resultData.map((yearData) => (
        <tr key={yearData.year}>
          <td>{yearData.year}</td>
          <td>{yearData.savingsEndOfYear.toFixed(2)}</td>
          <td>{yearData.yearlyInterest.toFixed(2)}</td>
          <td>{yearData.totalInterest.toFixed(2)}</td>
          <td>{yearData.totalContribution.toFixed(2)}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default ResultRows;
