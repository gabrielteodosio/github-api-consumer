import React from 'react';
import { Provider } from 'react-redux'
import { Box } from '@material-ui/core'

import store from "./redux";

import './App.less';
import styles from './App.module.less'
import LoginPage from './pages/login';

function App() {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <LoginPage />
      </div>
    </Provider>
  );
}

export default App;
