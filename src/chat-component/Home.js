import React from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'

const Home = ({user}) => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar user={user}/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home;
