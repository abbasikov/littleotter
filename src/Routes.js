import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomeContainer from './containers/HomeContainer/HomeContainer';
import DetailContainer from './containers/DetailContainer/DetailContainer';

const Routes = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={props => <HomeContainer {...props} />}/>
        <Route exact path="/:code" component={props => <DetailContainer {...props} />}/>
      </Switch>
  </BrowserRouter>
);

export default Routes;
