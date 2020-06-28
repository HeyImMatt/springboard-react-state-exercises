import React, {useState} from 'react';
import Box from './Box'
//import './BoxesBoard.css'


const BoxesBoard = ({boxesCount, colors}) => {
  return (
    <div>
      {boxesCount.map(b => <p>something</p>)}
      <button>Change</button>
    </div>
  )
}

BoxesBoard.defaultProps = {
  boxesCount: new Array(16),
  colors: [
    "aqua",
    "burlywood",
    "darkgray",
    "darkseagreen",
    "deepskyblue",
    "lightcoral",
    "violet",
    "pink",
  ]
}

export default BoxesBoard;