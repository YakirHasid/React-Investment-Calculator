import React from "react";

const ResultRows = (props) => {
  const resultData = props.items;
  return (
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
  );
};

export default ResultRows;
