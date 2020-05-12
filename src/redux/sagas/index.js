import { all } from 'redux-saga/effects'

import auth from './auth'

export default function * root () {
  yield all([
    ...auth
  ])
}
