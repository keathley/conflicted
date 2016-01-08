import React from 'react'

import { header, container } from './Header.css'
import { title } from './shared/typography.css'

export const Header = () => {
  return (
    <header className={header}>
      <div className={container}>
        <h1 className={title}>
          #ElixirFriends + #CodeMash
        </h1>
      </div>
    </header>
  )
}
