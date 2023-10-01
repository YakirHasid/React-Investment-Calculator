import React, {useState} from 'react'

import Header from "./components/Header/Header";
import InvestmentForm from "./components/InvestmentForm/InvestmentForm";
import Result from "./components/Result/Result"

function App() {

  const [resultData, setResultData] = useState([]);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    let initialInvestment = currentSavings;
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      const totalInterest = currentSavings - initialInvestment - yearlyContribution * (i+1);
      const totalInvestment = initialInvestment + yearlyContribution*(i+1);
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!        
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: totalInterest,
        totalContribution: totalInvestment
      });
    }

    // do something with yearlyData ...

    setResultData(yearlyData);
  };

  const resetHandler = () => {
    setResultData([]);
  }

  let content = (
    <p style={{ textAlign: "center" }}>Enter your investment plan to see yearly details!</p>
  );

  if(resultData.length > 0) {
    content = <Result items={resultData} />
  }

  return (
    <div>
      <Header />

      <InvestmentForm onCalculate={calculateHandler} onReset={resetHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {content}      
    </div>
  );
}

export default App;
