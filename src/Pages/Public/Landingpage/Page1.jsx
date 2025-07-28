import React from 'react'
// import Button from '../../../components/Button/Button'
import './Page.css'
// import Input from '../../../components/Input/Input'
import Text from '../../../components/Text/Text';
import InputButton from '../../../components/InputButton/InputButton';
import Nav from '../../../components/Nav/Nav';
import netimg from '../../../Asserts/netflix.svg';
import Imagetextcontainer from '../../../components/Imagetextcontainer/Imagetextcontainer';
import a from '../../../Asserts/tv.png';
import b from '../../../Asserts/video/tvVideo1.m4v';
import Imagetextcontainer2 from '../../../components/Imagetextcontainer2/Imagetextcontainer2';
import c from '../../../Asserts/strangeThings.jpg';
import d from '../../../Asserts/tvImg2.png';
import e from '../../../Asserts/video/tvVideo2.m4v';
import Imagetxtcontainer from '../../../components/Imagetxtcontainer/Imagetxtcontainer';
import Imagetextcontainer3 from '../../../components/Imagetextcontainer3/Imagetextcontainer3';
import f from '../../../Asserts/children.png';
import n from '../../../Asserts/download.jpg';
import QuestionAnswer from '../../../components/Askedqa/QuestionAnswer';
import Bottom from '../../../components/Bottom/Bottom';
const Page1 = () => {
  return (
    <div className='landingpage_container'>
        <div className="firstchild">
            <Nav id=" netimg" netflix={netimg}/>
            <div className="frst_content">
            <Text content={<h1 className="unlimited" >Unlimited movies, TV shows and more</h1>} color={"white"}/>
            <Text content={<p className='watch'>Watch anywhere. Cancel anytime.</p>} color={"white"}/>
            <Text content={<p className='watch1'>Ready to watch? Enter your email to create or restart your membership.</p>} color={"white"}/>
            </div>
            <InputButton className="getstarted_btn"/>
            
        </div>
        <div className="secondchild">
          <Imagetextcontainer contentimg={a} myvideo={b}/>
          <div className="brder"></div>
        </div>
        {/* <hr className='brder'/> */}
        <div className="thirdchild">
          <Imagetextcontainer2 contentimg2={c} download={n}/>
          <div className="brder"></div>
        </div>
        <div className="forthchild">
          <Imagetxtcontainer thirdimg={d} thirdvid={e}/>
          <div className="brder1"></div>
        </div>
        <div className="fivthchild">
          <Imagetextcontainer3 kids={f}/>
          <div className="brder2"></div>
        </div>
        <Text content={<h1 className='frequent'>Frequently Asked Questions</h1>}/>
        <div className="sixthchild">
          <QuestionAnswer/>
          <div className="brder3"></div>
        </div>
        <div className="seventhchild">
          <Bottom/>
        </div>
        {/* <SymbolSign/> */}
        {/* <Signin signin={z}/>  */}
        {/* <Signout signout={y}/> */}
        


        
    </div>
  )
}

export default Page1
