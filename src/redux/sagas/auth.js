import { call, takeLatest } from 'redux-saga/effects'

import { Types } from '../ducks/auth'
import API from '../../services/api'

const api = API.create()

function * logout () {
  yield call(api.auth.logout)
}


export default [
  takeLatest(Types.LOGOUT, logout),
]
