// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// Interceptors
import RequestInterceptor from './interceptors/request-interceptor'
import ResponseInterceptor from './interceptors/response-interceptor'

// Controllers
import AuthApiController from './controllers/auth-api-controller'

// The initializer
const create = (baseURL = process.env.API_URL) => {
  const http = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
    },
    timeout: 3000
  })

  // Force token on all requests, etc.
  http.addRequestTransform(RequestInterceptor())

  const api = {
    ...AuthApiController.create(http),
  }

  // Verify http status code, etc.
  http.addMonitor(...ResponseInterceptor())

  return api
}

// let's return back our create method as the default.
export default {
  create
}
