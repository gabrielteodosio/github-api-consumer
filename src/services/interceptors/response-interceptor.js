export default function ResponseInterceptor () {
  return [
    (response) => {
      if (process.env.NODE_ENV !== 'production') {
        console.log('Response -> ', response)
      }

      return response
    },
    async (error) => {
      if (process.env.NODE_ENV !== 'production') {
        console.log('Response error -> ', error)
      }

      const responseErrors = {
        errorStatus: error.response.status,
        errorMsessage: objectErros[error.response.status]
      }

      return Promise.reject(responseErrors)
    }
  ]
}
