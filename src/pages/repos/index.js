import React, {useEffect} from "react";
import {connect} from 'react-redux'
import {useLocation} from 'react-router-dom'

import {Creators as AuthActions} from '../../redux/ducks/auth'

const useQuery = () => new URLSearchParams(useLocation().search);

function ReposPage({getAccess}) {
  const query = useQuery()
  const access_token = query.get('access_token')

  useEffect(() => {
    console.log({ access_token })
  }, [])

  return (
    <div>
      {access_token}
    </div>
  )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  ...AuthActions
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReposPage)
