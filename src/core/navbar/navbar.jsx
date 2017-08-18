import React from 'react';
import autoBind from 'react-autobind';
import {
  Route,
  Switch,
  Redirect,
  Link,
  HashRouter
} from 'react-router-dom';

import Searchbar from 'core/searchbar';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    autoBind(this);
  }

  clickSearch() {
    if (this.state.visible) {
      console.log("search for a post");
    } else {
      this.setState({ visible: true });
    }
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="website-name">
          <Link to="/">ALGOBOOK</Link>
          <span id="website-main-nav">
            <a className="fa fa-bars" aria-hidden="true"></a>
            <span className={this.state.visible ? "visible-input" : "hidden-input"}>
              <Searchbar />
            </span>
            <a 
              className="fa fa-search" 
              aria-hidden="true"
              onClick={this.clickSearch}
            >
            </a>
          </span>
        </div>
        <div className="icons-container">
          <a 
            href="https://github.com/rlee0525/Algobook"
            target="_blank"
            className="fa fa-github" 
            aria-hidden="true"
          />
          <a 
            href="https://www.linkedin.com/in/rlee0525"
            target="_blank"
            className="fa fa-linkedin" 
            aria-hidden="true"
          />
        </div>
      </div>
    );
  }
}

export default Navbar;