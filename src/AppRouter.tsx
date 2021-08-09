import React, { FC } from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import Simpsons from './simpsons';

const AppRouter: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/simpsons" exact component={Simpsons} />
      <Route path="*">
        <ul>
          <li>
            <Link to="/simpsons">Simpsons exercise</Link>
          </li>
        </ul>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
