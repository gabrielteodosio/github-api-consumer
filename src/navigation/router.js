import React from "react";
import {Route, BrowserRouter, Switch} from "react-router-dom";

import routes from './routes'
import ApplicationLayout from "../components/application-layout";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({component: Page, exact = false, layout = false, path}, index) => {
          if (layout) {
            return (
              <Route key={`app-route-${index}`} exact={exact} path={path}>
                <ApplicationLayout>
                  <Page/>
                </ApplicationLayout>
              </Route>
            )
          } else {
            return (
              <Route key={`app-route-${index}`} exact={exact} path={path}>
                <Page/>
              </Route>
            )
          }
        })}
      </Switch>
    </BrowserRouter>
  )
}

export default Router
