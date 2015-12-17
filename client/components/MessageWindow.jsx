import React from 'react'
import Message from './Message'

const MessageWindow = ({messages}) => {
  let ms = messages.map( (message, i) => {
    return (
      <li key={message+i}>
        <Message text={message} />
      </li>
    )
  })

  return (
    <ul>
      {ms}
    </ul>
  )
}

export default MessageWindow
