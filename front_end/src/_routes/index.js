import React from 'react';
import {
  Switch,
  Redirect,
  Route,
  HashRouter as Router,
} from 'react-router-dom';

import { GlobalStyles } from '../globalStyles';
import { Home, Song, Songs } from '_pages';
import { Navbar } from '_components';

export const Routes = ({ allSongsData, songKeys }) => {
  return (
    <>
      <GlobalStyles />
      <Router basename="/">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/song"
            component={() => <Song songKeys={songKeys} />}
          />
          <Route
            exact
            path="/songs"
            component={() => (
              <Songs allSongsData={allSongsData} songKeys={songKeys} />
            )}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};
