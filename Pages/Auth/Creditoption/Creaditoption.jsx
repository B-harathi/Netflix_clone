import React from 'react'
import SymbolSign from '../../../components/Symbolsign/SymbolSign'
import z from '../../../Asserts/netflix.svg'
import Text from '../../../components/Text/Text'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import SignLanding from '../../../components/Signlanding/SignLanding'
import './Creaditoption.css'


const Creaditoption = ({den,mas,vis}) => {
  return (
    <>
    <div id='creadit_main'>
        <div className="craedit_up">
            <SymbolSign netflix={z}/>
        </div>
        <div id="credit_option">
            <div className="three_Three">
                <Text content={<h5 id='step'>Step 3 of 3</h5>}/>
                <Text content={<h3 className='set_Up'>Set up your credit or debit card</h3>}/>
                {/* <div className="card">
                      <div className="visa">
                      <img src={vis} width="100" height="62.8" alt=' '/>
                      </div>
                      <div className="master">
                      <img src={mas} width="100" height="62.8" alt=''/>
                      </div>
                      <div className="denser">
                      <img src={den} width="100" height="62.8" alt=''/>
                      </div>
                    </div> */}
            </div>
            <div className="card_details">
              <div className="card_num">
            <Input placeholder={"Card number"}/>
            </div>
            <div id="expiration_date">
                <Input placeholder={"Expiration date"}/>
                <Input placeholder={"CVV"}/>
            </div>
            <div className="name_card">
            <Input placeholder={"Name on card"}/>
            <div className="basic_plan"><Input placeholder={"₹199/month"} /></div>
            </div>

            </div>
            <div id="statement">
                <div className="payment_Above">
                    <Text content={<p className='any_payment'>Any payment above ₹ 2000 shall need additional authentication.</p>}/>
                </div>
                <div className="checking">
                    <Text content={<p className='by_check'>By checking the checkbox below, you agree to our <span id='terms_condition'>Terms of Use, Privacy Statement,</span> and that you are over 18. Netflix will automatically continue your membership and charge the membership fee (currently ₹199/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.</p>}/>
                </div>
                <input type="checkbox" name="I agree" id="agree_chk" />I agree
            </div>
            <div id="start_Btn">
            <Button value={"Start Membership"}/>

            </div>
            <Text content={<p className='this_page'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>}/>
        </div>
      
    </div>
    <SignLanding/>
    </>
  )
}

export default Creaditoption
