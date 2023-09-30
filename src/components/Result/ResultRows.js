import React from "react";

const ResultRows = (props) => {
  const resultData = props.items;
  return (
    <tbody>
      {resultData.map((yearData) => (
        <tr key={yearData.year}>
          <td>{yearData.year}</td>
          <td>
            {yearData.savingsEndOfYear.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </td>
          <td>
            {yearData.yearlyInterest.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </td>
          <td>
            {yearData.totalInterest.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </td>
          <td>
            {yearData.totalContribution.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ResultRows;
