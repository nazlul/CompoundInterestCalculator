import React, { useState } from 'react'
import Layout from "./components/layout"
import NumericInput from "./components/NumericInput"
import SliderInput from "./components/SliderInput"
import CalculateButton from "./components/CalculateButton"
import CalculatedAmounts from "./components/CalculatedAmounts"

function App() {
  const [initAmount, setInitAmount] = useState(0)
  const [monthlyContribution, setMonthlyContribution]= useState(0)
  const [interestRate, setInterestRate]= useState(0)
  const [numberOfYears, setNumberofYears]= useState(0)
  const [finalValue, setFinalValue] = useState('')
  
  function calculateCompoundInterest() {
    let total = parseInt(initAmount)
    let annualContribution = parseInt(monthlyContribution) * 12
    for(let i=0; i<parseInt(numberOfYears); i++) {
      total += annualContribution
      total *= 1 + interestRate/100
    }
    total = total.toFixed(2)
    setFinalValue(total)
  }

  function reset() {
    setInitAmount(0)
    setMonthlyContribution(0)
    setInterestRate(0)
    setNumberofYears(0)
    setFinalValue(null)
  }

  return (
    <Layout reset = {reset}>
      <NumericInput title= {"Initial Amount"} symbol={'$'} value={initAmount} setValue={setInitAmount}/>
      <NumericInput title= {"Monthly Contribution"} symbol={'$'} value={monthlyContribution} setValue={setMonthlyContribution}/>
      <NumericInput title= {"Interest Rate"} symbol={'%'} value={interestRate} setValue={setInterestRate}/>
      <SliderInput title= {"Number of Years"} value={numberOfYears} setValue={setNumberofYears}/>
      <CalculateButton evaluate={calculateCompoundInterest} />
      {finalValue && <CalculatedAmounts value={finalValue} year={numberOfYears}/>}
    </Layout>
  )
}

export default App
