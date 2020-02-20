//Importing React library
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//Creating a Component to display Statistics
const Statistics = props => <div>{props.value}</div>

//Creating Button Component
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

//Creating App Component
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [normal, setNormal] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const total = good + normal + bad;
  const sumGoodBad = good + bad;

//Function to get average
  const gAverage = () => {
    setAverage(total / 3)
  }

//Function to handle good click state
  const handleGoodClick = () => {
    setGood(good + 1)
    gAverage()
  }

//Function to handle normal click state
  const handleNormalClick = () => {
    setNormal(normal + 1)
    gAverage()
  }

//Function to handle Bad click state
  const handleBadClick = () => {
    setBad(bad + 1)
    gAverage()
  }


  return (
    <div>
      <h1>What do you think?</h1>
      <Button handleClick={() => handleGoodClick()} text="Good" />
      <Button handleClick={() => handleNormalClick()} text="Normal" />
      <Button handleClick={() => handleBadClick()} text="Bad" />
      <h2>Statistics</h2>
      <Statistics value={'Good ' + good} />
      <Statistics value={'Normal ' + normal} />
      <Statistics value={'Bad ' + bad} />
      <Statistics value={'Total ' + total} />
      <Statistics value={'Average ' + average} />
    </div>
  )
}







ReactDOM.render(<App />, document.getElementById('root'));
