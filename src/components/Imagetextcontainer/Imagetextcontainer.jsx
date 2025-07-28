import React from 'react'
import Text from '../Text/Text'
import './Imagetextcontainer.css'

const Imagetextcontainer = ({contentimg,myvideo}) => {
  return (
    <div id='imgtxt_container'>
        <div className='enjoy'>
        <Text content={<h1 className='enjoy_tv'>Enjoy on your TV</h1>} />
        <Text content={<p className='watch_tv'> Watch on smart TVs, PlayStation, Xbox, Chromecast,<br/> Apple TV, Blu-ray players and more.</p>}/>
        </div>
        <div className='frstimg'>
            <img src={contentimg} alt="Enjoy on your TV" srcSet="" />
            <video src={myvideo}  id="video1"alt="video" typeof="m4v" muted autoPlay loop></video>
        </div>
      
    </div>
  )
}

export default Imagetextcontainer
