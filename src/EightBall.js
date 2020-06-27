import React, {useState} from "react";
import './EightBall.css'

const EightBall = ({answers}) => {
  return (
    <>
      <h1>Welcome to the Magic 8 Ball</h1>
      <div className="EightBall">
        <p><b>Think of a Question</b></p>
      </div>
    </>
  )
}

export default EightBall;