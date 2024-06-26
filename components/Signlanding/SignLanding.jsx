import React from 'react'

import Language from '../Language/Language'
import './SignLanding.css'
import Text from '../Text/Text'

const SignLanding = () => {
  return (
    <div>
      <div className="footer1">
        <Text content={"Questions? Call 000-800-919-1694"}/>
      <div className='helpcenter1'>
      <Text className="bot_ques" content={"FAQ"}/>
      <Text className="bot_ques" content={"Help Center"}/>
      <Text className="bot_ques" content={"Netflix Shop"}/>
      <Text className="bot_ques" content={"Terms of Use"}/>
      <Text className="bot_ques" content={"Privacy"}/>
      <Text className="bot_ques" content={"Cookie Preferences"}/>
      <Text className="bot_ques" content={"Corporate Information"}/>
    </div>
    <div className="lang">
        <Language/>
    </div>
    </div>
    </div>
  )
}

export default SignLanding
