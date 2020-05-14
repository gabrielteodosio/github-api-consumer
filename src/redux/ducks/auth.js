import _ from 'lodash'
import {createActions, createReducer} from 'reduxsauce'

export const { Types, Creators } = createActions({
  loginRequest: ['email', 'password'],
  loginRequestSuccess: ['email', 'token', 'refreshToken'],
  loginRequestError: ['error'],

  logout: [],
  clearError: []
}, { prefix: 'auth/' })

/* Initial State */
const INITIAL_STATE = {
  loginIn: false,
  error: null
}

/* Handlers */
const loginRequest = (state) => ({ ...state, error: null, loginIn: true })
const loginRequestSuccess = (state) => ({ ...state, loginIn: false })
const loginRequestError = (state, { error }) => ({ ...state, error, loginIn: false })

const logout = () => _.cloneDeep(INITIAL_STATE)
const clearError = (state) => ({ ...state, error: null })

/* Reducer */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_REQUEST_SUCCESS]: loginRequestSuccess,
  [Types.LOGIN_REQUEST_ERROR]: loginRequestError,

  [Types.LOGOUT]: logout,
  [Types.CLEAR_ERROR]: clearError,
})
