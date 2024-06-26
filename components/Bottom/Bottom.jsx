import React from 'react'
import Text from '../Text/Text'
import './Bottom.css'
import Language from '../Language/Language'

const Bottom = () => {
  return (
    <div className="help_bottom">
    <div className="bottom_phone">
        <Text className=" bot_phone" content={"Questions? Call 000-800-919-1694 "}/>
    </div>
    <div className='bottom_questions'>
      <Text className="bot_ques" content={"FAQ"}/>
      <Text className="bot_ques" content={"Help Center"}/>
      <Text className="bot_ques" content={"Account"}/>
      <Text className="bot_ques" content={"Media Center"}/>
      <Text className="bot_ques" content={"Investor Relations"}/>
      <Text className="bot_ques" content={"Jobs"}/>
      <Text className="bot_ques" content={"Ways to Watch"}/>
      <Text className="bot_ques" content={"Terms of Use"}/>
      <Text className="bot_ques" content={"Privacy"}/>
      <Text className="bot_ques" content={"Cookie Preferences"}/>
      <Text className="bot_ques" content={"Corporate Information"}/>
      <Text className="bot_ques" content={"Contact Us"}/>
      <Text className="bot_ques" content={"Speed Test"}/>
      <Text className="bot_ques" content={"Legal Notices"}/>
      <Text className="bot_ques" content={"Only on Netflix"}/>
    </div>
    <Language className="language_opt"/>
    <Text className="bot_india" content={"Netflix India"}/>
    </div>
  )
}

export default Bottom; 
