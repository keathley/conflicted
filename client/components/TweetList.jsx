import React from 'react'
import {Tweet} from './Tweet'
import { tweetList } from './TweetList.css'

export const TweetList = ({tweets}) => {
  let ts = tweets
    .sort((a, b) => b.id - a.id)
    .map( tweet => <Tweet key={tweet.id} {...tweet} /> )

  return (
    <div className={ tweetList }>
      { ts }
    </div>
  )
}
