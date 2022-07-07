import React, { Component } from "react";

interface Props {
  totalCount: number;
}
class Navbar extends Component<Props> {
  render() {
    return (
      <div className="navbar">
        <i className="navbar-logo fas fa-leaf"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </div>
    );
  }
}

export default Navbar;
