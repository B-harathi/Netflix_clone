import React from 'react'
import './Nav.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import Input from '../Input/Input'

const Nav = ({netflix}) => {
  // const navigate=useNavigate()
    // const onSubmit=()=>{
    //   navigate('/Signin');
    
    // }
  return (
    <div id='netimg'>
      <img src={netflix} alt="" height={"40px"}/>
      <div className="language">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
        </svg>
      <select name="language" id="lan">
            <option value="" >English</option>
            <option value="">Hindi</option>
        </select>
        <Link to={'/signin'}><Button bg={"red"}
            padding={"8px 16px 8px 16px"}
            value={"Sign In"}
            color={"white"}
            border={"0"}
          /></Link>
         
          {/* <input type="button" value="" onClick={onSubmit} /> */}
          {/* <button onClick={onSubmit}>sigin</button> */}
        </div>
    </div>
  )
}

export default Nav
