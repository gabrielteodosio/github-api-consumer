import React from "react";
import {Box} from "@material-ui/core";

import styles from './layout.module.less'

function ApplicationLayout ({ children }) {
  return (
    <Box component='div' className={styles.container}>
      {children}
    </Box>
  )
}

export default ApplicationLayout
