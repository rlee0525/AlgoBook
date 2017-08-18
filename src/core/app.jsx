import React from 'react';
import {
  Route, 
  Switch, 
  Redirect,
  Link,
  HashRouter
} from 'react-router-dom';

import Home from 'modules/home';
import Navbar from 'core/navbar/navbar';

const App = () => (
  <div>
    <div>
      <Navbar />
    </div>
    <div className="container-componenet">
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </div>
  </div>
);

export default App;