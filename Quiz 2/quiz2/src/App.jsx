import { useState } from 'react'
import './App.css'

function App() {
  const [weight,setWeight]=useState('')
  const [height,setHeight]=useState('')
  const [bmi,setBmi]=useState('')
  const [error,setError]=useState('')

  function calculateBmi() {
    let weightValue=Number(weight)
    let heightValue=Number(height)
    if (weightValue<=0 || heightValue<=0 || weight==='' || height==='') {
      setError('Please enter a valid weight and height greater than 0')
      setBmi('')
      return}

    let heightInMeters=heightValue/100
    let bmiValue=weightValue/(heightInMeters*heightInMeters)
    setBmi(bmiValue.toFixed(1))
    setError('')}

  function getCategory() {
    if (bmi<18.5) {
      return 'Underweight'}
       else if (bmi<25) {
      return 'Normal weight'}
       else if (bmi<30) {
      return 'Overweight'}
       else {
      return 'Obese'}}

  function resetCalculator() {
    setWeight('')
    setHeight('')
    setBmi('')
    setError('')}

  return (
    <div className="calculator">
      <h1>BMI Calculator</h1>
      <p>Enter your weight and height.</p>
      <label>Weight (kg)</label>
      <input
        type="number"
        value={weight}
        onChange={(event) => setWeight(event.target.value)}/>

      <label>Height (cm)</label>
      <input
        type="number"
        value={height}
        onChange={(event) => setHeight(event.target.value)}/>

      {error && <p className="error">{error}</p>}
      <div className="action-buttons">
        <button onClick={calculateBmi}>Calculate</button>
        <button onClick={resetCalculator}>Reset</button>
      </div>
      {bmi && (
        <div className="result">
          <h2>Your BMI is {bmi}</h2>
          <p>Category: {getCategory()}</p>
        </div>)}
    </div>)}
export default App
