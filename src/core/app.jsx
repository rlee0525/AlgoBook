import React from 'react';
import {
  Route, 
  Switch, 
  Redirect,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1> AlgoBook </h1>
      </Link>
    </header>
    <Switch>
      
    </Switch>
  </div>
);

export default App;