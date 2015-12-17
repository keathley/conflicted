import React from 'react'

const MessageForm = ({onSubmit}) => {
  let input;

  return (
    <form onSubmit={ (e) => onSubmit(input.value) }>
      <input type="text" ref={node => {
          input = node
      }} />
      <button type="submit">
        Send
      </button>
    </form>
  )
}

export default MessageForm
