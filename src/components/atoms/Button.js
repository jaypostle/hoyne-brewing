import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

function Button() {
  return (
    <div className='call-to-action'>
      <a href="#">
        <span className='link'>
          <span className="link-text">Read More</span>
          
          {/* <span className="line"></span> */}
          <span className="arrowCircle"><FaRegArrowAltCircleRight /></span>
        
        </span>
      </a>
    </div>
  )
}

export default Button


