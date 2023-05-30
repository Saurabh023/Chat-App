import React from 'react';
import Image from '../img/btn_google_signin_dark_pressed_web.png'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={Image} alt="" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <img src={Image} alt="" />
        <p>hello</p>
      </div>
    </div>
  )
}

export default Message
