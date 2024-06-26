import React from 'react'
import './SymbolSign.css'
import Text from '../Text/Text'

const SymbolSign = ({netflix}) => {
  return (
    <>
    <div id='main_top'>
        <div className="symbol">
            <img src={netflix} alt="" />
        </div>
        <div className="signin">
            <p className='sign_in'>Sign In</p>
            {/* <h3 className='sign_in'>Sign In</h3> */}
            <Text/>
        </div>
    </div>
    <hr></hr>
    </>
  )
}

export default SymbolSign
