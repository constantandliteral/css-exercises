import React, { FC } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const AppRouter: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="*">Exercise links go here</Route>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
