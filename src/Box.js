import React from 'react';
import './Box.css'

const Box = ({color, isSelected}) => {
  console.log(color)
  return (
    <div className='Box' style={{backgroundColor: color}}>
      {isSelected && <p>Changed!</p>}
    </div>
  )
}

export default Box;