const objectErros = {
  400: 'Problemas com as propriedades enviadas',
  401: 'Request não autorizado',
  402: 'Usuário inadinplente',
  403: 'Usuário inativo',
  404: 'Dados não encontrados',
  500: 'Erro não mapeado'
}

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
        errorMessage: objectErros[error.response.status]
      }

      return Promise.reject(responseErrors)
    }
  ]
}
