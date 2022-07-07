import React, { Component, RefObject } from "react";

interface Props {
  onAdd: (name: string) => void;
}
class HabitAddForm extends Component<Props> {
  formRef: RefObject<HTMLFormElement> = React.createRef();
  inputRef: RefObject<HTMLInputElement> = React.createRef();

  onSubmit = (event: any) => {
    event.preventDefault();
    const name = this.inputRef?.current?.value;
    name && this.props.onAdd(name);
    //this.inputRef?.current?.value = "";
    if (this.formRef?.current) {
      this.formRef.current.reset();
    }
  };
  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="habit"
        ></input>
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
