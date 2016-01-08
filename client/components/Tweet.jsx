import React from 'react'

import TweetActions from '../containers/TweetActions'
import { Author } from './Author'
import { PostedAt } from './PostedAt'
import { TweetMeta } from './TweetMeta'
import { card, image, title, info } from './Tweet.css'
import { text } from './shared/typography.css'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
  mixins: [PureRenderMixin]

, render() {
    var tweet       = this.props.tweet
      , id          = tweet.get('id')
      , content     = tweet.get('content')
      , author      = tweet.get('author')
      , source_url  = tweet.get('source_url')
      , image_url   = tweet.get('image_url')
      , inserted_at = tweet.get('inserted_at')
      , likes       = tweet.get('likes')

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
        <TweetActions id={id} />
        <TweetMeta likes={likes} />
      </div>
    )
  }
})

// export const Tweet = ({id, content, author, source_url, image_url, inserted_at, likes}) => {
//   return (
//     <div className={ card }>
//       <div className={ title }>
//         <Author username={author} />
//         <PostedAt date={inserted_at} />
//       </div>
//       <a href={ source_url }>
//         <img className={ image } src={image_url} />
//       </a>
//       <div className={info}>
//         <p className={text}>
//           {content}
//         </p>
//       </div>
//       <TweetActions id={id} />
//       <TweetMeta likes={likes} />
//     </div>
//   )
// }
