import {persistStore} from 'redux-persist'

import ReduxPersist from '../config/redux-persist'

function updateReducers(store) {
  const reducerVersion = ReduxPersist.reducerVersion

  function startup() {
  }

  // Check to ensure latest reducer version
  try {
    const localVersion = localStorage.getItem('reducerVersion')
    if (localVersion !== reducerVersion) {
      // Purge store
      persistStore(store, null, startup).purge()
      localStorage.setItem('reducerVersion', reducerVersion)
    } else {
      persistStore(store, null, startup)
    }
  } catch {
    persistStore(store, null, startup)
    localStorage.setItem('reducerVersion', reducerVersion)
  }
}

export default {updateReducers}
