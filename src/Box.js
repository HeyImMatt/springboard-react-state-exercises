import React from 'react';
import './Box.css'

const Box = ({id, color, isSelected}) => {
  return (
    <div id={id} className='Box' style={{backgroundColor: color}}>
      {isSelected && <p>Changed!</p>}
    </div>
  )
}

export default Box;