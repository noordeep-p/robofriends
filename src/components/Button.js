import { Component } from "react";

class Button extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  updateCount = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };

  render() {
    console.log("Counterbutton");
    return (
      <button onClick={this.updateCount}>Count: {this.state.count}</button>
    );
  }
}

export default Button;
