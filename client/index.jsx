import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Header } from './components/Header'
import TweetListContainer from './containers/TweetListContainer'
import DevTools from './containers/DevTools'
import createStore from './store'
import { setState, addTweet } from './actions'
import { Socket } from 'phoenix-socket'

const store = createStore()

let socket = new Socket("/socket")
socket.connect()

let channel = socket.channel("tweets:stream", {})

channel.join()
  .receive("ok", resp => { store.dispatch(setState(resp)) })
  .receive("error", resp => { console.log("Unable to join", resp); })

channel.on("state", state => {
  store.dispatch(setState(state))
})

channel.on("new:tweet", tweet => {
  store.dispatch(addTweet(tweet))
})

import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Header />
      <TweetListContainer />
      <DevTools />
    </div>
  </Provider>
, document.getElementById('app')
)
