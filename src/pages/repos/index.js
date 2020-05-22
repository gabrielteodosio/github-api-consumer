import React, {useEffect} from "react";
import {connect} from 'react-redux';
import { FixedSizeList } from 'react-window';

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import CssBaseline from "@material-ui/core/CssBaseline";
import ListItemText from "@material-ui/core/ListItemText";
import LinearProgress from '@material-ui/core/LinearProgress';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import styles from "./repos.module.less";
import GithubLogo from "../../images/github-logo-white.png";
import GithubMark from "../../images/github-mark-white.png";
import {Creators as ReposActions} from '../../redux/ducks/repos'


function ReposPage({
  fetchRepos,
  fetchRepoCommits,
  repos: { commits, fetchingCommits, repos, fetchingRepos },
}) {
  useEffect(() => {
    fetchRepos()
  }, [])

  function handleRenderRepository({ index, style }) {
    const repo = repos[index]
    const { full_name: fullName, name } = repo

    const handleClick = () => {
      fetchRepoCommits(name)
    }

    return (
      <ListItem disabled={fetchingCommits} button key={index} style={{...style}} onClick={handleClick}>
        <ListItemText primary={fullName} />
        <ArrowForwardIosIcon fontSize={'small'} />
      </ListItem>
    );
  }

  function handleRenderCommit({ index, style }) {
    const commitData = commits[index]
    const { sha, commit, author, html_url: htmlUrl } = commitData

    const handleClick = () => {
      window.open(htmlUrl)
    }

    return (
      <ListItem
        button
        key={index}
        onClick={handleClick}
        style={{...style, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}
      >
        <ListItemText primary={commit?.message.slice(0, 50) + (commit?.message.length > 50 ? '...' : '')} />
        <span style={{ margin: '5px 0 0', fontFamily: 'Roboto' }}>
          Autor: {author?.login}
        </span>
        <ListItemText secondary={sha} />
      </ListItem>
    );
  }

  return (
    <Grid container component="main" className={styles.root}>
      <CssBaseline/>
      <Grid item xs={12} sm={8} md={5} square className={styles.paper}>
        <img src={GithubLogo} className={styles.avatar}/>
      </Grid>
      <Grid item xs={12} sm={4} md={7} component={Paper} elevation={6} className={styles.contentContainer}>
        <Grid container item component='div' className={styles.lists}>
          <Grid item xs={12} sm={12} md={6} className={styles.list}>
            <h2>Repositórios</h2>
            {fetchingRepos ? (
              <LinearProgress color={'primary'} classes={{ barColorPrimary: styles.loading }} />
            ) : (
              Array.isArray(repos) ? (
                <FixedSizeList height={500} width={'100%'} itemSize={46} itemCount={repos.length}>
                  {handleRenderRepository}
                </FixedSizeList>
              ) : null
            )}
          </Grid>

          <Grid item xs={12} sm={12} md={6} className={styles.list}>
            <h2>Commits</h2>
            {fetchingCommits ? (
              <LinearProgress color={'primary'} classes={{ barColorPrimary: styles.loading }} />
            ) : (
              Array.isArray(commits) ? (
                <FixedSizeList height={500} width={'100%'} itemSize={100} itemCount={commits.length}>
                  {handleRenderCommit}
                </FixedSizeList>
              ) : null
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
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
