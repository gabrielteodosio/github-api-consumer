import React from 'react'
import {Button} from '@material-ui/core'

import styles from './login.module.less'

function LoginPage() {
  function handleButtonClick(e) {
    e.preventDefault()
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.GH_CLIENT_ID}`;
  }

  return (
    <div className={styles.container}>
      <Button onClick={handleButtonClick} variant="contained" color="primary">
        Entrar com o Github
      </Button>
    </div>
  )
}

export default LoginPage
