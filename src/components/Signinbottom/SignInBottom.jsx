import React from 'react'
import Text from '../Text/Text'
import Language from '../Language/Language'
import './SignInBottom.css'

const SignInBottom = () => {
  return (
    <div className="footer">
        <Text content={"Questions? Call 000-800-919-1694"}/>
      <div className='helpcenter'>
      <Text className="bot_ques" content={"FAQ"}/>
      <Text className="bot_ques" content={"Help Center"}/>
      <Text className="bot_ques" content={"Terms of Use"}/>
      <Text className="bot_ques" content={"Privacy"}/>
      <Text className="bot_ques" content={"Cookie Preferences"}/>
      <Text className="bot_ques" content={"Corporate Information"}/>
    </div>
    <div className="lang">
        <Language/>
    </div>
    </div>
  )
}

export default SignInBottom
