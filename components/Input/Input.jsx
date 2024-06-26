import React from 'react'

const Input = ({bg,
    color,
    size,
    padding,
    value,
    border,
    placeholder,
    height,
    width,
    radius,
    rounded="rounded",}) => {
  return (
    <div>
      <input placeholder={placeholder} padding={padding} style={{backgroundColor:`${bg}`,color:`${color}`, padding:`${padding}`,value:`${value}`,size:`${size}` ,border:`${border}`,height:`${height}`,width:`${width}`,radius:`${radius}`,rounded:`${rounded}` }}type="text" />
    </div>
  )
}

export default Input
