import { Map } from 'immutable'
import { SET_STATE, LIKE_TWEET } from '../actions'

const setState = (state, newState) => {
  let tweets = newState.map((tweet) => [tweet.id, tweet])
  return state.merge(tweets)
}

const likeTweet = (state, id) => {
  console.log('updating');
  let newState = state.updateIn([id, 'likes'], val => val + 1)
  console.log('done updating');
  return newState
}

export default function tweetsReducer(state=Map({}), action) {
  switch(action.type) {
  case SET_STATE:
    return setState(state, action.state)
  case LIKE_TWEET:
    return likeTweet(state, action.id)
  default:
    return state
  }
}
