import React, {useEffect} from "react";
import Cookies from 'js-cookie';
import {connect} from 'react-redux';
import {LinearProgress} from '@material-ui/core';

import {Creators as ReposActions} from '../../redux/ducks/repos'


function ReposPage({
  fetchRepos,
  repos: { repos, fetchingRepos },
}) {
  useEffect(() => {
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
