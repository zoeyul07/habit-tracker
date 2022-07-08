import "./App.css";
import Habits from "./components/Habits";

import { Component } from "react";
import { IHabit } from "./components/Habit";
import Navbar from "./components/Navbar";

class App extends Component {
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
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }

      return item;
    });

    this.setState({ habits: habits });
  };

  handleDecrement = (habit: IHabit) => {
    if (habit.count === 0) return;
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count - 1 };
      }

      return item;
    });

    this.setState({ habits: habits });
  };

  handleDelete = (habit: IHabit) => {
    const { name } = habit;
    const habits = this.state.habits.filter((habit) => habit.name !== name);

    this.setState({ habits: habits });
  };

  handleAdd = (name: string) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count === 0) return { ...habit, count: 0 };
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={
            this.state.habits.filter((habit) => habit.count > 0).length
          }
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
