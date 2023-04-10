import React from 'react'
import Messages from './Messages'
import Input from './Input'

  const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src="src/assets/img/cam.png" alt="" />
          <img src="src/assets/img/add.png" alt="" />
          <img src="src/assets/img/more.png" alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
