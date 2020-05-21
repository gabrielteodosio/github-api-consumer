import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

import styles from './login.module.less'
import GithubMark from '../../images/github-mark-white.png'
import GithubLogo from '../../images/github-logo-white.png'

function LoginPage() {
  function handleButtonClick(e) {
    e.preventDefault()
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.GH_CLIENT_ID}`;
  }

  return (
    <Grid container component="main" className={styles.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={styles.image}>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={styles.paper}>
        <img src={GithubLogo} className={styles.avatar} />
        <Button
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          className={styles.submit}
          onClick={handleButtonClick}
        >
          <img src={GithubMark} />
          <span>Entrar com Github</span>
        </Button>
      </Grid>
    </Grid>
  )
}

export default LoginPage
