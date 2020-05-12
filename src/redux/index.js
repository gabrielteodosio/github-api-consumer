import { persistReducer } from 'redux-persist'

import rootSaga from './sagas'
import rootReducer from './ducks'
import configureStore from './create-store'
import ReduxPersist from '../config/redux-persist'

const createStore = () => {
  let finalReducers = rootReducer
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const { storeConfig } = ReduxPersist
    finalReducers = persistReducer(storeConfig, rootReducer)
  }

  let { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, rootSaga)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = rootReducer
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('./sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware(newYieldedSagas)
      })
    })
  }

  return store
}

const store = createStore()

export default store
