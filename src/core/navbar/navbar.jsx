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
          <div className="linked-in">
            
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;