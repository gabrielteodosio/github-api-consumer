import React from "react";
import {BrowserRouter, Switch} from "react-router-dom";

import Route from './route'
import routes from './routes'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({component: Page, ...rest}, index) => (
          <Route key={`app-route-${index}`} {...rest}>
            <Page/>
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  )
}

export default Router
