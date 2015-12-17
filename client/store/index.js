import { createStore, compose } from 'redux'
import { persistState } from 'redux-devtools'
import reducer from '../reducers'
import DevTools from '../containers/DevTools'

export default function configurStore() {
  const createStoreWithMiddleware = compose(
    DevTools.instrument(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore)

  const store = createStoreWithMiddleware(reducer)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
