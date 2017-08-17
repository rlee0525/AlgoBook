import React from 'react';
import {
  Route, 
  Switch, 
  Redirect,
  Link,
  HashRouter
} from 'react-router-dom';

import Navbar from 'core/navbar/navbar';

const App = () => (
  <div>
    <div>
      <Navbar />
    </div>
    <div className="container-componenet">
      <div className="sidebar-container">
        
      </div>
      <div className="main-component-container">
        <Switch>
          
        </Switch>
      </div>
    </div>
  </div>
);

export default App;