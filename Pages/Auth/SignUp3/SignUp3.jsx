import React from 'react';
import Text from '../../../components/Text/Text';
import Button from '../../../components/Button/Button';
import {FaCheck} from 'react-icons/fa';
import './SignUp3.css'
import { Link } from 'react-router-dom';
import z from '../../../Asserts/netflix.svg'
import SignLanding from '../../../components/Signlanding/SignLanding';
import SymbolSign from '../../../components/Symbolsign/SymbolSign';

const SignUp3 = () => {
  return (
    <div>
        <SymbolSign netflix={z} content={"Sign Out"}/>
      <div className="place_order">
        <div className="tick">
          <FaCheck className='tick_circle'/>
        </div>
        <Text content={<p className="twoofthree">STEP 2 OF 3</p>} />

        <div className="chooseplan">
          <Text content={<h2>Choose Your plan.</h2>} />
        </div>
        <div className="rules">
            <div>
            <FaCheck className='circle' size={"30px"}/>
            <Text content={<p>No commitments, cancel anytime.</p>} />
           </div>
            <div>
          <FaCheck className='circle' size={"35px"}/>
          <Text content={<p>Everything on Netflix for one low price.</p>} />
          </div>
          <div>
          <FaCheck className='circle' size={"30px"}/>
          <Text content={<p>No ads and no extra fees. Ever.</p>} />
          </div>
        </div>
        <Link to='/Planform'>
        <Button value="Next" />
        </Link>
      </div>
      <SignLanding/>
    </div>
  );
};

export default SignUp3;