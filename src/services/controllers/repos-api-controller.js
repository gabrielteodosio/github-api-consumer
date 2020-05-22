export default {
  create(http) {
    function fetchRepos() {
      return http.get(`${process.env.API_URL}/repos`)
    }

    function fetchRepoCommits(repoName) {
      return http.get(`${process.env.API_URL}/commits`, {
        repo_name: repoName
      })
    }

    return {
      repos: {
        fetchRepos,
        fetchRepoCommits,
      }
    }
  }
}
