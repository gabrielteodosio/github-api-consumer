import { path } from 'ramda'

import store from '../../redux'

export default function RequestInterceptor () {
  return (request) => {
    const state = store.getState()

    const token = path(['auth', 'token'], state)

    if (token) {
      request.headers.Accept = 'application/json'
      request.headers['Content-Type'] = 'application/json'
      request.headers.Authorization = `Bearer ${token}`
    }

    return request
  }
}
