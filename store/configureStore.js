import { createStore } from 'redux'
import applyMiddleware from './applyMiddleware/applyMiddleware'
import compose from './applyMiddleware/compose'
import reducer from './reducers'
import loggerMiddleware from './middlewares/loggerMiddleware'
import searchMiddleware from './middlewares/searchMiddleware'

const createStoreWithMiddleware = compose(
    applyMiddleware(
        searchMiddleware,
        loggerMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState)
  //热替换选项
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers')
      store.replaceReducer(nextReducer)
    })
  }
  return store
}
