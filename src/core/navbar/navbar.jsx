import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="website-name">
          ALGOBOOK
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