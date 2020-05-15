import React, {useEffect, useState} from "react";
import {connect} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {LinearProgress} from '@material-ui/core'

import {Creators as ReposActions} from '../../redux/ducks/repos'

const useQuery = () => new URLSearchParams(useLocation().search);

function ReposPage({
  fetchRepos,
  repos: { repos, fetchingRepos },
}) {
  const query = useQuery()
  const access_token = query.get('access_token')

  useEffect(() => {
    localStorage.setItem('gh_access_token', access_token)
    fetchRepos()
  }, [])

  function handleRenderRepository (repo, index) {
    return (
      <li key={`repo-idx-${index}`}>
        {repo.name}
      </li>
    )
  }

  return (
    <div>
      <h1>Repositórios</h1>
      {fetchingRepos ? (
        <LinearProgress />
      ) : (
        Array.isArray(repos) ? (
          <ul>
            {repos.map(handleRenderRepository)}
          </ul>
        ) : null
      )}
    </div>
  )
}

const mapStateToProps = ({ repos }) => ({
  repos
})

const mapDispatchToProps = {
  ...ReposActions
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReposPage)
