import { Component } from "react";

import "../index.css";

class Searchbox extends Component {
  render() {
    return (
      <div className="search">
        <h2>Search Robots</h2>
        <input
          type="search"
          placeholder="Search Robots"
          onChange={this.props.searchChange}
        />
      </div>
    );
  }
}

export default Searchbox;
