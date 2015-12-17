import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import ChatRoom from './containers/ChatRoom'
import DevTools from './containers/DevTools'
import createStore from './store'

import './index.css'

const store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <div>
      <ChatRoom />
      <DevTools />
    </div>
  </Provider>
, document.getElementById('app')
)
