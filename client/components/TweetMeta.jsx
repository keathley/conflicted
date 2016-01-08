import React from 'react'
import { meta } from './Tweet.css'
import { Likes } from './Likes.jsx'

export const TweetMeta = ({likes}) => {
  return (
    <div className={meta}>
      <Likes likes={likes} />
    </div>
  )
}
