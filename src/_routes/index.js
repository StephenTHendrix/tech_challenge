import React from 'react';
import {
  Switch,
  Redirect,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import { GlobalStyles } from '../globalStyles';
import { Home, Songs } from '_pages';
import { Navbar } from '_components';

export const Routes = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/songs" component={Songs} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};
