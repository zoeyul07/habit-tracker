import React, { Component } from "react";
import Habit, { IHabit } from "./Habit";
import HabitAddForm from "./HabitAddForm";

interface Props {
  onIncrement: (habit: IHabit) => void;
  onDecrement: (habit: IHabit) => void;
  onDelete: (habit: IHabit) => void;
  onAdd: (name: string) => void;
  habits: IHabit[];
}

class Habits extends Component<Props> {
  handleIncrement = (habit: IHabit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit: IHabit) => {
    this.props.onIncrement(habit);
  };

  handleDelete = (habit: IHabit) => {
    this.props.onIncrement(habit);
  };

  handleAdd = (name: string) => {
    this.props.onAdd(name);
  };
  render() {
    const { habits } = this.props;

    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              onAdd={this.handleAdd}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default Habits;
