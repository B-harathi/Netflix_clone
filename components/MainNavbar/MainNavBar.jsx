import React, { useState, useEffect } from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './MainNavBar.css'
import Text from '../Text/Text';

const MainNavBar = () => {
  const [codeDisplay, setCodeDisplay] = useState('Service Code');

  function generateRandomCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  const handleMouseDown = () => {
    setCodeDisplay(generateRandomCode());
  };

  const handleMouseUp = () => {
    setCodeDisplay('Service Code');
  };

  return (
    <div className='footer_navbar'>
      <div className="social_icons">
        <FaFacebook size={"25px"}/>
        <FaInstagram size={"25px"}/>
        <FaTwitter size={"25px"}/>
        <FaYoutube size={"25px"}/>
      </div>
      <div className="audio_container">
        <a href="#">Audio Description</a>
        <a href="#">Help Center</a>
        <a href="#">Gift Cards</a>
        <a href="#">Media Center</a>

        <a href="#">Investor Relations</a>
        <a href="#">Jobs</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy</a>

        <a href="#">Legal Notices</a>
        <a href="#">Cookie Preferences</a>
        <a href="#">Corporate Information</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="service_code">
        <button 
          onMouseDown={handleMouseDown} 
          onMouseUp={handleMouseUp}
        >
          {codeDisplay}
        </button>
      </div>
      <Text content={<p className='year_netflix'>1997-2024 Netflix, Inc.</p>} fontSize={"12px"}/>
    </div>
  )
}

export default MainNavBar