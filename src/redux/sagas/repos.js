import {call, put, takeLatest} from 'redux-saga/effects'

import API from '../../services/api'
import {Types, Creators as ReposActions} from '../ducks/repos'

const api = API.create()

function* fetchRepos() {
  try {
    const {
      data: { success, repos }
    } = yield call(api.repos.fetchRepos)

    if (!success) {
      throw new Error()
    }

    yield put(ReposActions.fetchReposSuccess(repos))
  } catch (error) {
    yield put(ReposActions.fetchReposError(error))
  }
}

export default [
  takeLatest(Types.FETCH_REPOS, fetchRepos),
]
