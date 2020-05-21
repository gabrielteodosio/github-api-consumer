import Cookies from "js-cookie";

export default function RequestInterceptor () {
  return (request) => {
    const ghAccessToken = Cookies.get('gh_access_token')

    request.headers.accept = 'application/json'
    request.headers['content-type'] = 'application/json'

    if (ghAccessToken) {
      request.headers.authorization = `token ${ghAccessToken}`
    }

    return request
  }
}
