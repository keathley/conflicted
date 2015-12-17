import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { routes } from './routes'
import DevTools from './containers/DevTools'
import createStore from './store'

import './index.css'

const store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router>{routes}</Router>
      <DevTools />
    </div>
  </Provider>
, document.getElementById('app')
)
