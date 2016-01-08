import React from 'react'
import FontAwesome from 'react-fontawesome'
import { normal } from './shared/button.css'

export const LikeButton = ({onClick}) => {
  return (
    <button type="button" className={normal} onClick={onClick}>
      <FontAwesome name="thumbs-o-up" /> Like
    </button>
  )
}
