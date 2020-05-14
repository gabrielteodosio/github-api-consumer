import {call, takeLatest} from 'redux-saga/effects'

import API from '../../services/api'
import {Types} from '../ducks/auth'

const api = API.create()

function* logout() {
  yield call(api.auth.logout)
}

export default [
  takeLatest(Types.LOGOUT, logout),
]
