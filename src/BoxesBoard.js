import React, {useState} from 'react';
import Box from './Box'
import './BoxesBoard.css'



const BoxesBoard = ({boxesCount, colors}) => {
  const genRandom = () => Math.floor(Math.random() * colors.length);
  console.log(boxesCount[2])

  return (
    <>
      <div className='BoxesBoard'>
        {boxesCount.map((b) => (
        <Box color={colors[genRandom()]} />
        ))}
      </div>
      <button>Change</button>
    </>
  )
}

BoxesBoard.defaultProps = {
  boxesCount: Array.apply(null, Array(16)).map(()=>{}),
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