import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'

import Rehydration from '../services/rehydration'
import ReduxPersist from '../config/redux-persist'

export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Navigation Middleware ------------ */

  /* ------------- Analytics Middleware ------------- */

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */
  enhancers.push(applyMiddleware(...middleware))

  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
  }

  const composer = compose(...enhancers)
  const store = createStore(rootReducer, composer)

  if (ReduxPersist.active) {
    Rehydration.updateReducers(store)
  }

  const sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}
