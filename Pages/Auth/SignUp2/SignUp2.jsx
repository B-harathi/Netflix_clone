import React, { useState } from 'react'

// import z from '../../../Asserts/netflix.svg'
// import SymbolSign from '../Symbolsign/SymbolSign';
// import './SignUp2.css'

import Text from '../../../components/Text/Text';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import SignLanding from '../../../components/Signlanding/SignLanding';
import SymbolSign from '../../../components/Symbolsign/SymbolSign';
import z from '../../../Asserts/netflix.svg'
import './SignUp2.css'
import { Link, useNavigate } from 'react-router-dom';


const SignUp2 = ({isSignUp}) => {
  // const [emailOrMobile, setEmailOrMobile] = useState('');
  // const [password, setPassword] = useState('');
  // const [showWarningEmail, setShowWarningEmail] = useState(false);
  // const [showWarningPassword, setShowWarningPassword] = useState(false);
  const navigate=useNavigate();
  const initialvalue={
    username:"",
    password:" ",
  };
  const[user,setUser]=useState(initialvalue);
  const handleSubmit=async (event)=>{
    event.preventDefault();
    if(!isSignUp){
      const storedUser=JSON.parse(localStorage.getItem("user"));
      if(
        storedUser&&
        storedUser.username===user.username &&
        storedUser.password===user.password
      )
      {
        navigate("/MainHome");
      }
      else{
        navigate("/MainHome");
      }
    }
    else{
      localStorage.setItem("user",JSON.stringify(user));
      alert("Signed up succesfully!");
      navigate("/Signin")
    }
  };
  const handleChange=(event)=>{
    const {name,value}=event.target;
    setUser({...user,[name]:value})
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   let valid = true;
  //   if (!emailOrMobile.trim()) {
  //     setShowWarningEmail(true);
  //     valid = false;
  //   } else {
  //     setShowWarningEmail(false);
  //   }
  //   if (!password.trim()) {
  //     setShowWarningPassword(true);
  //     valid = false;
  //   } else {
  //     setShowWarningPassword(false);
  //   }
  //   if (valid) {
  //     console.log('Form submitted with:', emailOrMobile, password);
  //     setEmailOrMobile('');
  //     setPassword('');
  //   }
  // };

  // const handleEmailChange = (event) => {
  //   setEmailOrMobile(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  return (
    <div>
      <div className="form_main">
        <SymbolSign netflix={z} />
        <div className="create_password">
          <div className='regform'>
            <Text content={<p className='stepofthree'>STEP 1 OF 3</p>} />
            <Text content={<h2 className='createform'>Create a password to start <br />your membership</h2>} />
            <Text content={<p className='justform'>Just a few more steps and you're done!<br /> We hate paperwork, too.</p>} />



            <form onSubmit={handleSubmit}>
              <div className="mail_pass">
                <div className="mailbox_input">
                  <Input
                    placeholder={"Email"}
                    // value={emailOrMobile}
                    // onChange={handleEmailChange}
                  />
                  {/* {showWarningEmail && (
                    <p style={{ color: 'red' }} className='cancel'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      Enter email or mobile number.
                    </p>
                  )} */}
                  <Input
                    placeholder={"Add a password"}
                    type="password"
                    // value={password}
                    // onChange={handlePasswordChange}
                  />
                  {/* {showWarningPassword && (
                    <p style={{ color: 'red' }} className='cancel'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      Enter password.
                    </p>
                  )} */}
                </div>
                <Link to='/SignUp3'>
                
                </Link>
                <Button
                  value={"Next"}
                  type="submit"
                  content={isSignUp?"sign up" : "sign In"}
                />
              </div>
            </form>



          </div>
        </div>
        <SignLanding />
      </div>
    </div>
  )
}

export default SignUp2