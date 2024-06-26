import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import './InputButton.css'

const InputButton = () => {
  return (
    <div className='inputBtn'>
      <Input placeholder={"Email address"} height={"52px"} width={"350px"} color={"white"} className="email_address"/>
      <Button  className="getst_Btn"value={"Get Started"} color={"white"} height={"55px"} bg={"red"} border={"0"} />
      <div className="svg_icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
      </div>
    </div>
  )
}

export default InputButton
