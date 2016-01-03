import React from 'react'

import { Author } from './Author'
import { PostedAt } from './PostedAt'
import { card, image, title, info } from './Tweet.css'
import { text } from './shared/typography.css'

export const Tweet = ({content, author, source_url, image_url, inserted_at}) => {
  return (
    <div className={ card }>
      <div className={ title }>
        <Author username={author} />
        <PostedAt date={inserted_at} />
      </div>
      <a href={ source_url }>
        <img className={ image } src={image_url} />
      </a>
      <div className={info}>
        <p className={text}>
          {content}
        </p>
      </div>
    </div>
  )
}
