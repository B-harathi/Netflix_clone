import React from 'react'
import Text from '../Text/Text'
import './Imagetextcontainer2.css'
import { FaDownload } from 'react-icons/fa';

const Imagetextcontainer2 = ({contentimg2,download}) => {
  return (
    <>
    <div className='txt_container'>
      <div className="photo_contain">
      <div className='sndimg'>
            <img src={contentimg2} alt="Enjoy on your TV" srcSet="" />
        </div>
        <div className="down_container">
        <div className="downloading">
          <img src={download} alt="" />
        </div>
        <div className="download_txt">
        <h3 className='stranger'>Stranger Things</h3>
          <p className='down'>Downloading...</p>
        </div>
        <div className="download_symbol">
          <FaDownload size={"20px"}/>
        </div>
        </div>
        </div>
        <div className='download'>
        <Text content={<h1 className='down_tv'>Download your shows to watch offline</h1>} />
        <Text content={<p className='save_tv'>Save your favourites easily and always have something to watch.</p>}/>
        </div>
    </div>
        </>
  )
}

export default Imagetextcontainer2
