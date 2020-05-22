import _ from 'lodash'
import {createActions, createReducer} from 'reduxsauce'

export const { Types, Creators } = createActions({
  fetchRepos: [],
  fetchReposSuccess: ['repos'],
  fetchReposError: ['error'],

  fetchRepoCommits: ['repoName'],
  fetchRepoCommitsSuccess: ['commits'],
  fetchRepoCommitsError: ['error'],

  clearError: []
}, { prefix: 'auth/' })

/* Initial State */
const INITIAL_STATE = {
  fetchingRepos: false,
  fetchingCommits: false,
  repos: [],
  commits: [],
  error: null
}

/* Handlers */
const fetchRepos = (state) => ({ ...state, fetchingRepos: true, error: null })
const fetchReposSuccess = (state, { repos }) => ({ ...state, fetchingRepos: false, repos })
const fetchReposError = (state, { error }) => ({ ...state, fetchingRepos: false, error })

const fetchRepoCommits = (state) => ({ ...state, fetchingCommits: true, error: null })
const fetchRepoCommitsSuccess = (state, { commits }) => ({ ...state, fetchingCommits: false, commits })
const fetchRepoCommitsError = (state, { error }) => ({ ...state, fetchingCommits: false, error })

const clearError = (state) => ({ ...state, error: null })

/* Reducer */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_REPOS]: fetchRepos,
  [Types.FETCH_REPOS_SUCCESS]: fetchReposSuccess,
  [Types.FETCH_REPOS_ERROR]: fetchReposError,

  [Types.FETCH_REPO_COMMITS]: fetchRepoCommits,
  [Types.FETCH_REPO_COMMITS_SUCCESS]: fetchRepoCommitsSuccess,
  [Types.FETCH_REPO_COMMITS_ERROR]: fetchRepoCommitsError,

  [Types.CLEAR_ERROR]: clearError,
})
