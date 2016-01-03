export const SET_STATE = 'SET_STATE'
export const ADD_TWEET = 'ADD_TWEET'

export function setState(state) {
  return {
    type: SET_STATE,
    state
  }
}

export function addTweet(tweet) {
  return { type: ADD_TWEET, tweet }
}
