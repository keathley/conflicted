import React from 'react'
import { Actions } from '../components/Actions'
import { connect } from 'react-redux'
import { likeTweet } from '../actions'

const mapDispatchToProps = (dispatch, {id}) => {
  return {
    onLike: () => { dispatch(likeTweet(id)) }
  }
}

export default connect(null, mapDispatchToProps)(Actions)
