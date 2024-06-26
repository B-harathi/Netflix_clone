import React ,{useState} from 'react'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import SignInBottom from '../../../components/Signinbottom/SignInBottom'
import './Signout.css'

const Signout = ({signout}) => {  
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailOrMobile.trim()) {
      setShowWarning(true);
    } else {
      console.log('Form submitted with:', emailOrMobile);
      setShowWarning(false);
      setEmailOrMobile('');
    }
  };

  const handleInputChange = (event) => {
    setEmailOrMobile(event.target.value);
  };
return (
    <div>
    <div className="signin_form">
        <div className='signin_page'>
      <img src={signout} alt="" />
    </div>
    <div className="sform">
    <form id='entry_signin' onSubmit={handleSubmit}>
          <h2 >Sign in</h2>

          <Input 
          placeholder={"Email or mobile number"} 
          padding={"15px 150px 15px 10px"} 
          required
          onChange={handleInputChange}
          />
            {showWarning && <p style={{ color: 'red' }} className='cancel'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
Please enter a valid email address or phone <br/>number.</p>}
          <br/>
          {/* <Input placeholder={"Password"} padding={"15px 150px 15px 10px"}/><br/> */}
          <p className='forget1'>Message and data rates may apply</p><br/>
          <Button value={"Send Sign-in code"} 
          padding={" 15px 100px 15px 115px"} 
          bg={"red"} 
          color={"white"} 
          border={"0"}/>

          <p className='forget'>OR</p>
          <Button value={"Use password"}
          padding={" 15px 105px 15px 135px"} 
          bg={"red"} 
          color={"white"} 
          border={"0"}
          />
          <p className='forget'>Forgot password?</p>
          <input type="checkbox" name="" id="" />Remember me 
          <p>New to Netflix? <span className='now'>Sign up now</span></p>
          <p className='learnmore'>This page is protected by Google reCAPTCHA to<br/> ensure you're not a bot. <span className='more'>Learn more.</span> </p>

        </form>
    </div>
    </div>
    <div className="footersignin">
    <SignInBottom/>
  
</div>
</div>
  )
}

export default Signout
