import _ from 'lodash'
import {createActions, createReducer} from 'reduxsauce'

export const { Types, Creators } = createActions({
  fetchRepos: [],
  fetchReposSuccess: ['repos'],
  fetchReposError: ['error'],

  clearError: []
}, { prefix: 'auth/' })

/* Initial State */
const INITIAL_STATE = {
  fetchingRepos: false,
  repos: [],
  error: null
}

/* Handlers */
const fetchRepos = (state) => ({ ...state, fetchingRepos: true, error: null })
const fetchReposSuccess = (state, { repos }) => ({ ...state, fetchingRepos: false, repos })
const fetchReposError = (state, { error }) => ({ ...state, fetchingRepos: false, error })

const clearError = (state) => ({ ...state, error: null })

/* Reducer */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_REPOS]: fetchRepos,
  [Types.FETCH_REPOS_SUCCESS]: fetchReposSuccess,
  [Types.FETCH_REPOS_ERROR]: fetchReposError,

  [Types.CLEAR_ERROR]: clearError,
})
