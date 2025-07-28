import React from 'react'
import Text from '../Text/Text'
import './Imagetextcontainer3.css'

const Imagetextcontainer3 = ({kids}) => {
  return (
    <div className='kids_container'>
      <div className='kidimg'>
            <img src={kids} alt="Enjoy on your TV" srcSet="" />
            {/* <video src={myvideo2}  id="video1"alt="video" typeof="m4v" muted autoPlay loop></video> */}
        </div>
        <div className='download'>
        <Text content={<h1 className='create'>Create profiles for kids</h1>} />
        <Text content={<p className='profile'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>}/>
        </div>
    </div>
  )
  
}

export default Imagetextcontainer3


