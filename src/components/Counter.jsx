import React, { Component } from "react";

class Counter extends Component {
  state = { value: 0 };

  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleReset = () => {
    this.setState({ value: 0 });
  };

  render() {
    return (
      <div class="counter-container">
        <button onClick={this.handleDecrement}>-</button>
        <span class="counter-value">{this.state.value}</span>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Counter;
