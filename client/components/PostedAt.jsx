import React from 'react'
import { date } from './Tweet.css'
import moment from 'moment'

export const PostedAt = ({date}) => {
  date = date || Date.now().toString()
  let timeSince = (date ? moment(date) : moment()).fromNow()

  return (
    <span className={date}>
      {timeSince}
    </span>
  )
}
