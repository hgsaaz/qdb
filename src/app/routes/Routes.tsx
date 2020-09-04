/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import RoutesListItems from './routeList';
import { LoadContainer } from 'utils/loadable';
import { NotFoundPage } from 'app/containers/NotFoundPage';
function Routes() {
  return (
    <Switch>
      {RoutesListItems.map(route => {
        const ContainerComponent = LoadContainer(route.component);
        return (
          <Route
            exact
            path={process.env.PUBLIC_URL + route.path}
            key={route.type}
          >
            <ContainerComponent />
          </Route>
        );
      })}
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default withRouter(Routes);
