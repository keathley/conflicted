import React from 'react'

import { small } from './shared/typography.css'

export const Likes = ({likes}) => {
  return (
    <span className={small}>
      { likes } people like this.
    </span>
  )
}
