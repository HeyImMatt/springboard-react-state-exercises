import React, {useState} from "react";
import './EightBall.css'

const EightBall = ({answers}) => {
  const genRandom = () => Math.floor(Math.random() * answers.length);
  const shakeEightBall = () => {
    let num = genRandom();
    setBgColor(answers[num].color);
    setMessage(answers[num].msg);
  }
  const reset = () => {
    setBgColor('black');
    setMessage('Think of a Question');
  }
  const [message, setMessage] = useState('Think of a Question')
  const [bgColor, setBgColor] = useState('black')
  return (
    <>
      <h1>Welcome to the Magic 8 Ball</h1>
      <h4>Click on the 8 Ball to Receive Advice</h4>
      <div className="EightBall" onClick={shakeEightBall} style={{backgroundColor: bgColor}}>
        <p><b>{message}</b></p>
      </div>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default EightBall;