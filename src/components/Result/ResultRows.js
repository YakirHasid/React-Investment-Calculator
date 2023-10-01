import React from "react";

const ResultRows = (props) => {
  const resultData = props.items;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  
  return (
    <tbody>
      {resultData.map((yearData) => (
        <tr key={yearData.year}>
          <td>{yearData.year}</td>
          <td>
            {formatter.format(yearData.savingsEndOfYear)}
          </td>
          <td>
          {formatter.format(yearData.yearlyInterest)}
          </td>
          <td>
          {formatter.format(yearData.totalInterest)}
          </td>
          <td>
          {formatter.format(yearData.totalContribution)}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ResultRows;
