import React from 'react'
import { author } from './Tweet.css'

export const Author = ({username}) => {
  const link = `https://twitter.com/${username}`

  return (
    <a className={author} href={link}>
      @{username}
    </a>
  )
}
