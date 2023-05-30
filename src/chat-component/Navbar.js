import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = ({displayName, photoURL}) => {
  console.log(displayName)
  return (
    <div className='navbar'>
      <span>Chat App</span>
      <div className="user">
        <img src={photoURL} alt="" />
        <span>{displayName}</span>
      </div>
    </div>
  )
}

export default Navbar
