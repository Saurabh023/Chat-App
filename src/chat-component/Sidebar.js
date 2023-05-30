import React from 'react'
import Navbar from './Navbar'
import Chats from './Chats'
import Search from './Search'

const Sidebar = ({user}) => {
  return (
    <div className='sidebar'>
      <Navbar displayName={user.displayName} photoURL={user.photoURL}/>
      <Search user={user}/>
      <Chats/>
    </div>
  )
}

export default Sidebar
