import React, {useState} from 'react';
import Box from './Box'
import './BoxesBoard.css'



const BoxesBoard = ({boxesCount, colors}) => {
  const genRandom = () => Math.floor(Math.random() * colors.length);

  return (
    <>
      <div className='BoxesBoard'>
        {boxesCount.map((b) => (
        <Box key={b} id={b} color={colors[genRandom()]} />
        ))}
      </div>
      <button>Change</button>
    </>
  )
}

BoxesBoard.defaultProps = {
  boxesCount: Array.apply(null, Array(16)).map((x, i)=>{return i + 1}),
  colors: [
    "aqua",
    "burlywood",
    "darkgray",
    "darkseagreen",
    "deepskyblue",
    "lightcoral",
    "violet",
    "pink",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Peru",
    "SpringGreen",
    "tomato"
  ]
}

export default BoxesBoard;