import React from 'react'
import { LikeButton } from './LikeButton'
import { actions } from './Tweet.css'

export const Actions = ({onLike}) => {
  return (
    <div className={actions}>
      <LikeButton onClick={ onLike }/>
    </div>
  )
}
