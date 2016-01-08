import React from 'react'
import Tweet from './Tweet'
import { tweetList } from './TweetList.css'

export const TweetList = ({tweets}) => {
  let ts = tweets
    .map( tweet => (
      <Tweet key={tweet.get('id')} tweet={ tweet } />
    ))

  return (
    <div className={ tweetList }>
      { ts }
    </div>
  )
}
