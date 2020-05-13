import React from 'react'
import {connect} from 'react-redux'
import {Button} from '@material-ui/core'

import styles from './login.module.less'
import {Creators as AuthActions} from '../../redux/ducks/auth'

function LoginPage({logout}) {
  function handleButtonClick(e) {
    e.preventDefault()
    logout()
  }

  return (
    <div className={styles.container}>
      <Button onClick={handleButtonClick} variant="contained" color="primary">
        Olá Mundo
      </Button>
    </div>
  )
}

const mapStateToProps = ({auth}) => ({
  ...auth
})

const mapDispatchToProps = {
  ...AuthActions
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)
