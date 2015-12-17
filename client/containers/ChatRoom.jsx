import React from 'react'
import { connect } from 'react-redux'
import MessageWindow from '../components/MessageWindow'
import MessageForm from '../components/MessageForm'
import { createMessage } from '../actions'

export const ChatRoom = React.createClass({
  render () {
    const { dispatch } = this.props

    return (
      <div className='class'>
        <h1>ChatRoom</h1>
        <MessageWindow messages={this.props.messages} />
        <MessageForm onSubmit={text => dispatch(createMessage(text)) } />
      </div>
    )
  }
})

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(ChatRoom)
