import React, {useState} from 'react';
import Box from './Box'
import './BoxesBoard.css'



const BoxesBoard = ({boxesCount, colors}) => {
  const genRandom = (num) => Math.floor(Math.random() * num);
  const selectBox = () => {
    let boxId = genRandom(boxesCount.length);
    let box = document.getElementById(boxId);
    let boxes = document.querySelectorAll('.Box');
    boxes.forEach(box => {
      box.innerText = '';
    })
    box.style.backgroundColor = colors[genRandom(colors.length)];
    box.innerText = 'Changed!'
  }

  return (
    <>
      <div className='BoxesBoard'>
        {boxesCount.map((b) => (
        <Box key={b} id={b} color={colors[genRandom(colors.length)]} />
        ))}
      </div>
      <button onClick={selectBox}>Change</button>
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