import React, { Component } from "react";
import { connect } from "react-redux";
import { INCREMENT, DECREMENT, RESET } from "../redux/actions";

class Counter extends Component {
  handleDecrement = () => {
    this.props.dispatch({ type: DECREMENT });
  };

  handleIncrement = () => {
    this.props.dispatch({ type: INCREMENT });
  };

  handleReset = () => {
    this.props.dispatch({ type: RESET });
  };

  render() {
    return (
      <div className="counter-container">
        <button type="button" onClick={this.handleDecrement}>
          -
        </button>
        <span className="counter-value">{this.props.value}</span>
        <button type="button" onClick={this.handleIncrement}>
          +
        </button>
        <button type="button" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { value: state.countValue };
};
export default connect(mapStateToProps)(Counter);
