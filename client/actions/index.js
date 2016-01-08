export const SET_STATE  = 'SET_STATE'
export const LIKE_TWEET = 'LIKE_TWEET'

export function setState(state) {
  return {
    type: SET_STATE,
    state
  }
}

export function likeTweet(id) {
  return {
    meta: {remote: true},
    type: LIKE_TWEET,
    id
  }
}
