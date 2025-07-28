import React from 'react';
import './Button.css';

const Button = ({bg,
    color,
    size,
    padding,
    value,
    border,
    height,
    width,
    icons,
    onClick,}) => {
  return (
    <div className='hole_button'>
      <button style={{backgroundColor:`${bg}`,color:`${color}`, padding:`${padding}`, onclick:`${onClick}`,value:`${value}`,size:`${size}` ,border:`${border}`,height:`${height}`,width:`${width}`,icons:`${icons}`}}>
            {value}
          </button>
    </div>
  )
}

export default Button




