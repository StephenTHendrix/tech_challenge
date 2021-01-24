import React from 'react';
import {
  Switch,
  Redirect,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import { GlobalStyles } from '../globalStyles';
import { Home, Song, Songs } from '_pages';
import { Navbar } from '_components';

export const Routes = ({ allSongsData }) => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/song"
            component={() => <Song allSongsData={allSongsData} />}
          />
          <Route
            exact
            path="/songs"
            component={() => <Songs allSongsData={allSongsData} />}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};
