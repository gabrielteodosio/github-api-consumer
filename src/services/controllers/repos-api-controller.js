export default {
  create(http) {
    function fetchRepos() {
      return http.get(`${process.env.API_URL}/repos`)
    }

    return {
      repos: {
        fetchRepos,
      }
    }
  }
}
