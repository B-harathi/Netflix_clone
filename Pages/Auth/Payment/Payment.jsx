import React from 'react'
import SymbolSign from '../../../components/Symbolsign/SymbolSign'
import z from '../../../Asserts/netflix.svg'
import {FaLock} from 'react-icons/fa';
import Text from '../../../components/Text/Text';
// import Input from '../../../components/Input/Input';
import './Payment.css'
import SignLanding from '../../../components/Signlanding/SignLanding';
import Button from '../../../components/Button/Button';
import { Link } from 'react-router-dom';

// import SignInBottom from '../../../components/Signinbottom/SignInBottom';
// import SignLanding from '../../../components/Signlanding/SignLanding';


const Payment = () => {
  return (
    <>
    <div id="payment" className="">
        <div id='payment_method'>
        <div className="payment_head">
            <SymbolSign netflix={z}/>
        </div>
        <div className="lock_payment">
            <div id="lock">
                <div className="falock">
                <FaLock size={"16px"}/>
                </div>
                <Text content={<p id='step_Three'>STEP 3 OF 3</p>}/>
                <Text content={<h2 className='howto_Pay'>Choose how to pay</h2>}/>
                <Text content={<p className='your_payment'>Your payment is encrypted and you can change your payment method at anytime.</p>}/>
                <Text content={<h4 className='secure_payment'>Secure for peace of mind.
                        Cancel easily online.</h4>}/>
                        <div id="end_end">
                        <Text content={<p className='End_to'>End-to-end encrypted</p>}/><FaLock size={"10px"}/>

                        </div>
                <div className="payment_creait">
                  <div className="frst_pay">
                    <div className="debit_card">       
                    <Link to="/Creaditoption">             
                    <Button value={<p>Credit or Debit Card</p>} className="frst_pay"/>
                    </Link>
                    </div>
                    {/* <div className="card">
                      <div className="visa">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35000 471">
  <path fill="#0E4595" d="M278.198 334.228l33.36-195.763h53.358l-33.384 195.763z"/>
  <path fill="#0E4595" d="M524.307 142.687c-10.57-3.966-27.135-8.222-47.822-8.222-52.725 0-89.863 26.551-90.18 64.604-.297 28.13 26.514 43.821 46.754 53.185 20.77 9.597 27.752 15.716 27.652 24.283-.133 13.123-16.587 19.116-31.924 19.116-21.355 0-32.701-2.967-50.225-10.274l-6.877-3.112-7.488 43.823c12.463 5.466 35.508 10.199 59.438 10.445 56.09 0 92.502-26.248 92.916-66.884.199-22.27-14.016-39.216-44.801-53.188-18.65-9.056-30.072-15.099-29.951-24.269 0-8.137 9.668-16.838 30.559-16.838 17.447-.271 30.088 3.534 39.936 7.5l4.781 2.259 7.232-42.43M661.615 138.464h-41.23c-12.773 0-22.332 3.486-27.941 16.234l-79.244 179.402h56.031s9.16-24.121 11.232-29.418c6.123 0 60.555.084 68.336.084 1.596 6.854 6.492 29.334 6.492 29.334h49.512l-43.188-195.636zm-65.418 126.901c4.414-11.279 21.26-54.724 21.26-54.724-.314.521 4.381-11.334 7.074-18.684l3.607 16.878s10.217 46.729 12.352 56.527h-44.293zM232.903 138.464L180.664 271.96l-5.565-27.129c-9.726-31.274-40.025-65.157-73.898-82.12l47.767 171.204 56.455-.064 84.004-195.386h-56.524"/>
  <path fill="#F2AE14" d="M131.92 138.464H45.879l-.682.229c66.938 16.204 111.232 55.363 129.618 102.414l-18.709-89.96c-3.219-12.325-12.787-16.02-24.186-15.683"/>
</svg>
                      </div>
                      <div className="master">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35000 471">
  <circle cx="239" cy="235" r="208" fill="#f79e1b" />
  <circle cx="510" cy="235" r="208" fill="#eb001b" />
  <path fill="#ff5f00" d="M510 235c0 63.5-28 120.8-72.2 159.1-44.2-38.3-72.2-95.6-72.2-159.1s28-120.8 72.2-159.1c44.2 38.3 72.2 95.6 72.2 159.1z"/>
</svg>
                      </div>
                      <div className="denser">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35000 471">
  <path fill="#0079BE" d="M634.647 235.387c0 123.321-100.034 223.353-223.353 223.353S188.111 358.708 188.111 235.387s99.864-223.353 223.183-223.353c123.318 0 223.353 100.032 223.353 223.353"/>
  <path fill="#FFFFFF" d="M368.875 246.864c0 27.197-20.492 41.161-43.928 41.161h-51.397v-82.321h51.397c23.435 0 43.928 13.963 43.928 41.161m17.142 95.846c24.588-12.98 38.636-33.896 38.636-63.913 0-45.985-42.601-73.995-87.214-73.995H235v239.475h102.439c46.626 0 87.716-28.348 87.716-75.149 0-22.719-8.315-41.176-20.708-54.112-6.48-6.814-14.111-12.327-18.431-14.33v42.024M88.702 326.915l-25.269-66.986H36.889v109.233H0V129.687h92.996c25.596 0 56.525 7.806 56.525 47.97 0 26.063-18.458 43.929-31.417 48.602l29.258 69.742c10.33 25.598-1.799 43.929-27.231 43.929-19.959 0-23.921-8.624-31.416-13.015M64.762 186.671c0-14.632-13.807-17.462-25.597-17.462H36.889v34.924h2.276c11.79 0 25.597-2.828 25.597-17.462M493.857 299.854c0 17.464-19.294 24.114-36.879 24.114-11.147 0-20.275-4.181-24.929-9.121l3.615-13.808c5.963 5.266 13.782 8.623 21.314 8.623 8.972 0 16.8-4.682 16.8-11.312 0-8.624-10.168-11.646-19.954-15.946-13.806-5.766-29.744-12.35-29.744-30.926 0-16.133 16.804-28.25 36.044-28.25 11.811 0 19.454 2.685 24.756 6.938l-4.78 14.309c-4.306-3.25-11.483-6.768-19.976-6.768-10.331 0-15.147 4.683-15.147 10.312 0 6.935 6.471 9.956 18.289 15.801 16.467 7.773 31.593 13.318 31.593 35.034M588.334 186.171c0 21.215-16.632 40.989-42.938 40.989h-46.281v-97.205h46.281c23.478 1.002 42.938 16.935 42.938 40.159v16.057zm-17.305-.331c0-13.47-7.976-23.118-25.633-23.118h-28.65v65.487h29.154c17.657 0 25.129-15.308 25.129-28.779v-13.591z"/>
</svg>
                      </div>
                    </div> */}
             

                  </div>
                  <div className="frst_pay">
                    <Link to='/UpiMethod'>
                    <Button value={<p>UPI AutoPay</p>} className="frst_pay"/>
                    </Link>
                  {/* <FaGpay/> */}
                  </div>

                </div>
            </div>
        </div>
      
    </div>
    </div>
    <SignLanding/>
    </>

  )
}

export default Payment
