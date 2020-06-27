import React, {useState} from "react";
import './EightBall.css'

const EightBall = ({answers}) => {
  const genRandom = () => Math.floor(Math.random() * answers.length);
  const shakeEightBall = () => {
    let num = genRandom();
    setMessage(answers[num].msg);
  }
  const [message, setMessage] = useState('Think of a Question')
  return (
    <>
      <h1>Welcome to the Magic 8 Ball</h1>
      <h4>Click on the 8 Ball to Receive Advice</h4>
      <div className="EightBall" onClick={shakeEightBall}>
        <p><b>{message}</b></p>
      </div>
    </>
  )
}

export default EightBall;