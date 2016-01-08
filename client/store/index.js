import { createStore, compose, applyMiddleware } from 'redux'
import { persistState } from 'redux-devtools'
import remoteActionMiddleware from '../middleware/remote_action_middleware'
import reducer from '../reducers'
import DevTools from '../containers/DevTools'

export default function configureStore(channel) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(remoteActionMiddleware(channel))
  // , DevTools.instrument()
  // , persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore)

  const store = createStoreWithMiddleware(reducer)

  // if (module.hot) {
  //   module.hot.accept('../reducers', () => {
  //     const nextReducer = require('../reducers')
  //     store.replaceReducer(nextReducer)
  //   })
  // }

  return store
}
