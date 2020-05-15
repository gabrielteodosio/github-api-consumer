import React, {useEffect, useState} from "react";
import {connect} from 'react-redux'
import {useLocation} from 'react-router-dom'

import {Creators as ReposActions} from '../../redux/ducks/repos'

const useQuery = () => new URLSearchParams(useLocation().search);

function ReposPage({
  fetchRepos,
  repos: { repos },
}) {
  const query = useQuery()
  const access_token = query.get('access_token')

  useEffect(() => {
    localStorage.setItem('gh_access_token', access_token)
    fetchRepos()
  }, [])

  return (
    <div>
      <h1>Repos</h1>
      {repos.map((repo) => (
        <h5>{repo.name}</h5>
      ))}
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
