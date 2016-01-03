import { List } from 'immutable'
import { SET_STATE, ADD_TWEET } from '../actions'

const addTweet = (state, tweet) => state.concat([tweet])

const setState = (state, newState) => state.merge(newState)

export default function tweetsReducer(state=List(), action) {
  switch(action.type) {
  case SET_STATE:
    return setState(state, action.state)
  case ADD_TWEET:
    return addTweet(state, action.tweet)
  default:
    return state
  }
}
