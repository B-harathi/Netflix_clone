import React from 'react'
import Text from '../Text/Text'
import './Imagetxtcontainer.css'

const Imagetxtcontainer = ({thirdimg,thirdvid}) => {
  return (
    <div id='watchtxt_container'>
        <div className="watch_conatiner">
        <Text content={<h1 className='wtch_tv'>Watch everywhere</h1>} />
        <Text content={<p className='stream_tv'> Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>}/>
        </div>
        <div className="thirdimg">
        <img src={thirdimg} alt="" />
        <video src={thirdvid}  id="video2"alt="video" typeof="m4v" muted autoPlay loop></video>
        </div>
    </div>    
    
  )
}

export default Imagetxtcontainer
