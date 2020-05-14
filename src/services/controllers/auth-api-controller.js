export default {
  create(http) {
    function logout() {
      return localStorage.removeItem('userSession')
    }

    return {
      auth: {
        logout,
      }
    }
  }
}
