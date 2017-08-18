import React from 'react';
import autoBind from 'react-autobind';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    autoBind(this);
  }

  onChangeText(e) {
    let text = e.target.value;
    this.setState({ text });
  }

  render() {
    return (
      <span className="searchbar-container">
        <input 
          type="text"
          value={this.state.text}
          onChange={this.onChangeText}
          placeholder="search for a post..."
        />
      </span>
    );
  }
}

export default Searchbar;