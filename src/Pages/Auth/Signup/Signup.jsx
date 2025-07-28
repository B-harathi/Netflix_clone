import React from 'react'
import SymbolSign from '../../../components/Symbolsign/SymbolSign'
import z from '../../../Asserts/netflix.svg'
import {  FaLaptop,FaTv , FaTablet , FaMobile } from 'react-icons/fa';
import './Signup.css'
import Button from '../../../components/Button/Button';
import Text from '../../../components/Text/Text'
import SignLanding from '../../../components/Signlanding/SignLanding';
import { Link } from 'react-router-dom';

// import SignInBottom from '../../../components/Signinbottom/SignInBottom';


const Signup = () => {
  return (
    <div>
      <SymbolSign netflix={z}/>
      <div className="main">
      <div className='frststep'>
      <div className="gatget">
        <FaLaptop className='lap' size={"70px"}/>
        <FaTv className='tv'size={"90px"}/>
        <FaTablet className='tab'size={"50px"}/>
        <FaMobile className='mob'size={"20px"}/>
      </div>
      <div className="step1">
        <Text content={<p className='step'>STEP 1 OF 3</p>}/>
        <Text 
        content={<h2 className='finish'>Finish setting up your account</h2>}/>
        <Text
        content={<p className='netflix'>Netflix is personalised for you. Create a password to watch on any device at any time.</p>}/>
        <Link to="/SignUp2">
        <Button value={"Next"} className="next"/>
        </Link>
      </div>
      </div>
    <SignLanding/>
      </div>
    </div>
  )
}

export default Signup
