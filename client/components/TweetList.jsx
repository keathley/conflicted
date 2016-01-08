import React from 'react'
import Tweet from './Tweet'
import { tweetList } from './TweetList.css'

export const TweetList = ({tweets}) => {
  let ts = tweets
    .sort((a, b) => b.get('id') - a.get('id'))
    .map( tweet => (
      <Tweet key={tweet.get('id')} tweet={ tweet } />
    ))

  return (
    <div className={ tweetList }>
      { ts }
    </div>
  )
}
