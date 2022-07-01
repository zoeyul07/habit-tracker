import React, { Component } from "react";
import Habit, { IHabit } from "./Habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit: IHabit) => {
    //this.state.count++ 와 같이 그냥 state를 업데이트하게 되면 리액트는 state가 업데이트 되었는지 모른다.
    //리액트에서는 state를 직접 변경하지 않는다.
    // const habits = this.state.habits.map((habit) => {
    //   if (habit.name === name) {
    //     return { ...habit, count: habit.count + 1 };
    //   }
    //   return habit;
    // });

    //array는 index를 이용하면 빠르게 검색할 수 있으므로 index를 구해서 사용한다.
    const habits = [...this.state.habits];
    const habitIndex = this.state.habits.indexOf(habit);
    habits[habitIndex].count++;

    this.setState({ habits: habits });
  };

  handleDecrement = (habit: IHabit) => {
    if (habit.count === 0) return;

    const habits = [...this.state.habits];
    const habitIndex = this.state.habits.indexOf(habit);
    habits[habitIndex].count--;

    this.setState({ habits: habits });
  };

  handleDelete = (habit: IHabit) => {
    const { name } = habit;
    const habits = this.state.habits.filter((habit) => habit.name !== name);

    this.setState({ habits: habits });
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
