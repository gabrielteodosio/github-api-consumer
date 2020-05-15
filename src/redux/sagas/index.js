import { all } from 'redux-saga/effects'

import auth from './auth'
import repos from './repos'

export default function * root () {
  yield all([
    ...auth,
    ...repos
  ])
}
