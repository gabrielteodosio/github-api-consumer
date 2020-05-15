import {call, put, takeLatest} from 'redux-saga/effects'

import API from '../../services/api'
import {Types, Creators as ReposActions} from '../ducks/repos'

const api = API.create()

function* fetchRepos() {
  try {
    const {
      success, repos
    } = yield call(api.repos.fetchRepos)

    console.log({ success, repos })

    if (!success) {
      throw new Error()
    }

    console.log('Success!')

    yield put(ReposActions.fetchReposSuccess(repos))
  } catch (error) {
    yield put(ReposActions.fetchReposError(error))
  }
}

export default [
  takeLatest(Types.FETCH_REPOS, fetchRepos),
]
