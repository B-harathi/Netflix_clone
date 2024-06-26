import React from 'react'
import SymbolSign from '../../../components/Symbolsign/SymbolSign'
import z from '../../../Asserts/netflix.svg'
import Text from '../../../components/Text/Text'
import './UpiMethod.css'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
// import SignInBottom from '../../../components/Signinbottom/SignInBottom'
import SignLanding from '../../../components/Signlanding/SignLanding'
const UpiMethod = ({bhim,paytm,phone,amazon,google,other}) => {
  return (
    <div className="upi_container">
        <div className="upi_log">
            <SymbolSign netflix={z}/>
        </div>
        <div className="auto_pay">
            <Text content={<p id='step'>STEP 3 OF 3</p>}/>
            <Text content={<h3 className='upi_set'>Set up UPI AutoPay</h3>}/>
            <Text content={<p className='you_can'>You can change this recurring payment any time in your settings.</p>}/>
            <div id="upi_app">
                <select name="" id="">
                    <option value="">Select your UPI app</option>

                <option value="">
                    <div className="pay_photo">
                        <div className="bhim">
                            <img src={bhim} alt="" />
                        </div>
                        <div className="bhim_txt">
                            <p>BHIM</p>
                        </div>
                    </div>
                </option>
                <option value="">
                <div className="pay_photo">
                        <div className="bhim">
                            <img src={paytm} alt="" />
                        </div>
                        <div className="bhim_txt">
                            <p>Paytm</p>
                        </div>
                    </div>
                </option>
                <option value="">
                <div className="pay_photo">
                        <div className="bhim">
                            <img src={phone} alt="" />
                        </div>
                        <div className="bhim_txt">
                            <p>Phonepe</p>
                        </div>
                    </div>
                </option>
                <option value="">
                <div className="pay_photo">
                        <div className="bhim">
                            <img src={amazon} alt="" />
                        </div>
                        <div className="bhim_txt">
                            <p>Amazon pay</p>
                        </div>
                    </div>
                </option>
                <option value=""><div className="pay_photo">
                        <div className="bhim">
                            <img src={google} alt="" />
                        </div>
                        <div className="bhim_txt">
                            <p>Google pay</p>
                        </div>
                    </div></option>
                <option value=""><div className="pay_photo">
                        <div className="bhim">
                            <img src={other} alt="" />
                        </div>
                        <div className="bhim_txt">
                            <p>Other</p>
                        </div>
                    </div></option>
                </select>
            </div>
            <div className="upi_id">
            <Input placeholder={"UPI ID"} className="upi_id"/>
            </div>
            <Text content={<p className='how_do'>How do I find my UPI ID?</p>}/>
            <div className="upi_Btn">
                <Button value={"Next"}/>
            </div>
        </div>
        <SignLanding/>
    </div>

  )
}

export default UpiMethod
