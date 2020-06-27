import React, {useState} from "react";
import './EightBall.css'

const EightBall = ({answers}) => {
  const genRandom = () => Math.floor(Math.random() * answers.length);
  const shakeEightBall = () => {
    let num = genRandom();
    let color = answers[num].color;
    setBgColor(color);
    setMessage(answers[num].msg);
    if (color === 'green') {
      setGreenCount(greenCount + 1);
    }
    else if (color === 'goldenrod') {
      setYellowCount(yellowCount + 1);
    }
    else if (color === 'red') {
      setRedCount(redCount + 1);
    }
  }
  const reset = () => {
    setBgColor('black');
    setMessage('Think of a Question');
  }
  const [message, setMessage] = useState('Think of a Question');
  const [bgColor, setBgColor] = useState('black');
  const [greenCount, setGreenCount] = useState(0);
  const [yellowCount, setYellowCount] = useState(0);
  const [redCount, setRedCount] = useState(0);
  return (
    <>
      <h1>Welcome to the Magic 8 Ball</h1>
      <h4>Click on the 8 Ball to Receive Advice</h4>
      <div className="EightBall" onClick={shakeEightBall} style={{backgroundColor: bgColor}}>
        <p><b>{message}</b></p>
      </div>
      <button onClick={reset}>Reset</button>
      <p><b>Color Count</b></p>
      <p>Green: {greenCount} | Yellow: {yellowCount} | Red: {redCount}</p>
    </>
  )
}

export default EightBall;