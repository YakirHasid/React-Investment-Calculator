import React from "react";
import ResultRows from "./ResultRows";

import styles from './Result.modules.css'

const Result = (props) => {
  const resultData = props.items;

  return (
    <table style={styles} className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <ResultRows items={resultData} />
    </table>
  );
};

export default Result;
