import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Header } from './components/Header'
import TweetListContainer from './containers/TweetListContainer'
import DevTools from './containers/DevTools'
import createStore from './store'
import { setState, addTweet, likeTweet } from './actions'
import { Socket } from 'phoenix-socket'

let socket = new Socket("/socket")
socket.connect()

let channel = socket.channel("tweets:stream", {})

channel.join()
  .receive("ok", resp => { store.dispatch(setState(resp)) })
  .receive("error", resp => { console.log("Unable to join", resp); })

channel.on("state", tweet => {
  store.dispatch(setState([tweet]))
})

channel.on("new:tweet", tweet => {
  store.dispatch(addTweet(tweet))
})

const store = createStore(channel)

import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Header />
      <TweetListContainer />
    </div>
  </Provider>
, document.getElementById('app')
)
// <DevTools />
