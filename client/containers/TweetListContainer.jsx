import React from 'react'
import { connect } from 'react-redux'
import { TweetList } from '../components/TweetList'

const mapStateToProps = (state) => {
  return {
    tweets: state.tweets.toIndexedSeq()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(
  mapStateToProps
, mapDispatchToProps
)(TweetList)
