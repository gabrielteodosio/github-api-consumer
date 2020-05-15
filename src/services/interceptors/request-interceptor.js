
export default function RequestInterceptor () {
  return (request) => {
    const token = localStorage.getItem('gh_access_token')

    request.headers.accept = 'application/json'
    request.headers['content-type'] = 'application/json'

    if (token) {
      request.headers.authorization = `token ${token}`
    }

    return request
  }
}
