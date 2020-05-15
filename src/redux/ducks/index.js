import { combineReducers } from 'redux'

import { reducer as auth } from './auth'
import { reducer as repos } from './repos'

const rootReducer = combineReducers({
  auth,
  repos,
})

export default rootReducer
