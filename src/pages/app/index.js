import React, {useEffect, useState} from 'react'
import Cookies from "js-cookie";

import {
  Redirect,
  Route as RRDRoute
} from "react-router-dom";

function App (props) {
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const access_token = Cookies.get('gh_access_token')
    localStorage.setItem('gh_access_token', access_token)
    setSaved(true)
  }, [])

  return (
    <RRDRoute
      {...props}
      render={({location}) => (
        !saved ? (
          <div>
            <h2>Validando usuário</h2>
          </div>
        ) : (
          <Redirect
            to={{
              pathname: "/repos",
              state: {from: location}
            }}
          />
        )
      )}
    />
  )
}

export default App
