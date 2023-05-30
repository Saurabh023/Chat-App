import React from 'react'
import Image from '../img/btn_google_signin_dark_pressed_web.png'

const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
        <img src={Image} alt="" />
        <div className="userChatInfo">
            <span>Jane</span>
            <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats;
