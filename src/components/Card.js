import { Component } from "react";

import "../index.css";

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <img
          alt={this.props.username}
          src={`https://robohash.org/${this.props.username}?size=200*200`}
        />
        <div>
          <h2>{this.props.name}</h2>
          <p>{this.props.email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
