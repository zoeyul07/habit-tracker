import React, { Component } from "react";

export interface IHabit {
  id: number;
  name: string;
  count: number;
}

interface Props {
  habit: IHabit;
  onIncrement: (habit: IHabit) => void;
  onDecrement: (habit: IHabit) => void;
  onDelete: (habit: IHabit) => void;
}

class Habit extends Component<Props> {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    const { habit, onIncrement } = this.props;
    onIncrement(habit);
  };

  handleDecrement = () => {
    const { habit, onDecrement } = this.props;
    onDecrement(habit);
  };

  handleDelete = () => {
    const { habit, onDelete } = this.props;
    onDelete(habit);
  };
  render() {
    const { name, count } = this.props.habit;

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
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
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
