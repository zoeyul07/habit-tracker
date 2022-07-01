import React, { Component } from "react";

class Habit extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    //this.state.count++ 와 같이 그냥 state를 업데이트하게 되면 리액트는 state가 없데이트 되었는지 모른다.
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    const { count } = this.state;

    if (count === 0) return;
    this.setState({ count: count - 1 });
  };
  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
