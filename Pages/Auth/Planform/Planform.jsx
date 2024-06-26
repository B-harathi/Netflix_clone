import React from 'react'
// import SymbolSign from '../../../components/Symbolsign/SymbolSign'
import z from '../../../Asserts/netflix.svg'
import Text from '../../../components/Text/Text'
import Button from '../../../components/Button/Button'
import SignLanding from '../../../components/Signlanding/SignLanding'
import './Planform.css'
import SymbolSign from '../../../components/Symbolsign/SymbolSign'
import { Link } from 'react-router-dom';


const Planform = () => {
  return (
    <>
    <div id="choose_plan">

      <div className="" id="sign_out">
        <SymbolSign netflix={z}/>
      </div>

      <div id="choose_plans">

        <div className="stepofone">
          <Text content={<p className='step_onethree'>STEP 1 OF 3</p>}/>
          <Text content={<h3 className='choose_three'>Choose the plan that’s right for you</h3>}/>
        </div>

        <div id="plan_container">

          <div className="premimum"> 

            <div className="premium_4k">
              <Text content={<p>Premium</p>}/>
              <Text content={<p>4K + HDR</p>}/>
            </div>

            <div className="premimum_price">

              
            <div id="text_contain">
            <div><Text content={<p>Monthly price</p>}/></div>
            <div><Text content={<p>₹649</p>}/></div>
            </div>


            <hr/>
            <div id="text_contain">
            <div><Text content={<p>Video and sound quality</p>}/></div>
            <div><Text content={<p>Best</p>}/></div>
            </div>


            <hr/>
            <div id="text_contain">
            <div><Text content={<p>Resolution</p>}/></div>
            <div><Text content={<p>4K (Ultra HD) + HDR</p>}/></div>
            </div>


            <hr/>
            <div id="text_contain">
            <div><Text content={<p>Spatial audio (immersive sound)</p>}/></div>
            <div><Text content={<p>Included</p>}/></div>
            </div>


            <hr/>
            <div id="text_contain">
            <div><Text content={<p>Supported devices</p>}/></div>
            <div><Text content={<p>TV, computer, mobile phone, tablet</p>}/></div>
            </div>


            <hr/>
            <div id="text_contain1">
            <div><Text content={<p>Devices your household can watch at the same time</p>}/></div>
            <div><Text content={<p>4</p>}/></div>
            </div>


            <hr/>
            <div id="text_contain">
            <div><Text content={<p>Download devices</p>}/></div>
            <div><Text content={<p>6</p>}/></div>
            </div>


          </div> 
        </div>



        <div className="premimum"> 

            <div className="standard_4k">
              <Text content={<p>Standard</p>}/>
              <Text content={<p>4K + HDR</p>}/>
            </div>

            <div className="premimum_price">

              
            <div id="text_contain">
            <div><Text content={<p>Monthly price</p>}/></div>
            <div><Text content={<p>₹449</p>}/></div>
            </div>


            <hr/>
            <div id="text_contain">
            <div><Text content={<p>Video and sound quality</p>}/></div>
            <div><Text content={<p>Great</p>}/></div>
            </div>


            <hr/>
            <div id="text_contain">
            <div><Text content={<p>Resolution</p>}/></div>
            <div><Text content={<p>1080p (Full HD)</p>}/></div>
            </div>



            <hr/>
            <div id="text_contain">
            <div><Text content={<p>Supported devices</p>}/></div>
            <div><Text content={<p>TV, computer, mobile phone, tablet</p>}/></div>
            </div>


            <hr/>
            <div id="text_contain1">
            <div><Text content={<p>Devices your household can watch at the same time</p>}/></div>
            <div><Text content={<p>2</p>}/></div>
            </div>


            <hr/>
            <div id="text_contain">
            <div><Text content={<p>Download devices</p>}/></div>
            <div><Text content={<p>2</p>}/></div>
            </div>


          </div>

        </div>
        <div className="premimum1"> 
            <div className="basic_pack"><p>Most Popular</p></div>
            <div className="basic_4k">
              <Text content={<p>Basic </p>}/>
              <Text content={<p>720p</p>}/>
            </div>

            <div className="premimum_price">

              
            <div id="text_contain">
            <div><Text content={<p>Monthly price</p>}/></div>
            <div><Text content={<p>₹199</p>}/></div>
            </div>


            <hr/>
            <div id="text_contain">
            <div><Text content={<p>Video and sound quality</p>}/></div>
            <div><Text content={<p>Good</p>}/></div>
            </div>


            <hr/>
            <div id="text_contain">
            <div><Text content={<p>Resolution</p>}/></div>
            <div><Text content={<p>720p(HD)</p>}/></div>
            </div>



            <hr/>
            <div id="text_contain">
            <div><Text content={<p>Supported devices</p>}/></div>
            <div><Text content={<p>TV, computer, mobile phone, tablet</p>}/></div>
            </div>


            <hr/>
            <div id="text_contain1">
            <div><Text content={<p>Devices your household can watch at the same time</p>}/></div>
            <div><Text content={<p>1</p>}/></div>
            </div>


            <hr/>
            <div id="text_contain">
            <div><Text content={<p>Download devices</p>}/></div>
            <div><Text content={<p>1</p>}/></div>
            </div>


          </div>

        </div>

        <div className="premimum"> 

<div className="mobile_4k">
  <Text content={<p>Basic </p>}/>
  <Text content={<p>720p</p>}/>
</div>

<div className="premimum_price">

  
<div id="text_contain">
<div><Text content={<p>Monthly price</p>}/></div>
<div><Text content={<p>₹149</p>}/></div>
</div>


<hr/>
<div id="text_contain">
<div><Text content={<p>Video and sound quality</p>}/></div>
<div><Text content={<p>Fair</p>}/></div>
</div>


<hr/>
<div id="text_contain">
<div><Text content={<p>Resolution</p>}/></div>
<div><Text content={<p>480p(HD)</p>}/></div>
</div>



<hr/>
<div id="text_contain">
<div><Text content={<p>Supported devices</p>}/></div>
<div><Text content={<p>Mobile phone, tablet</p>}/></div>
</div>


<hr/>
<div id="text_contain1">
<div><Text content={<p>Devices your household can watch at the same time</p>}/></div>
<div><Text content={<p>1</p>}/></div>
</div>


<hr/>
<div id="text_contain">
<div><Text content={<p>Download devices</p>}/></div>
<div><Text content={<p>1</p>}/></div>
</div>


</div>

</div>

        </div> 
        <div className="quality">
          <Text content={<p className='quality_hd'>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.
            Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>}/>
        </div>
        <div className="next_Btn">
          <Link to='/Payment'>
          <Button value={"Next"}/>
          </Link>
        </div>
      </div>
      
        <SignLanding/>
    </div>
    </>
  )
}

export default Planform
