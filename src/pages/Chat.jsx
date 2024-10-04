import React from 'react'
import Users from '../components/Users'
import Message from '../components/Message'

const Chat = () => {
  return (
    <div className='container  grid grid-cols-3 max-sm:grid-cols-1' style={{marginTop:'30px',height:'400px'}}>
        <Users/>
        <Message/>
        
    </div>
  )
}

export default Chat