import immutablePersistenceTransform from '../services/immutable-persistence-transform'
import storage from 'redux-persist/lib/storage'

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'root',
    storage: storage,
    // Reducer keys that you do NOT want stored to persistence here.
    // blacklist: ['login', 'search', 'nav', 'agenda'],
    // Optionally, just specify the keys you DO want stored to persistence.
    whitelist: ['auth'],
    transforms: [immutablePersistenceTransform]
  }
}

export default REDUX_PERSIST
