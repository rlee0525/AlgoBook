import React from 'react';

import Recent from 'modules/recent';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        <Recent />
      </div>
    );
  }
}

export default Home;