import React, { RefObject } from "react";

interface Props {
  onAdd: (name: string) => void;
}
//pureComponent는 shallow로 state와 props를 비교해서 변경사항이 있을 경우에만 리렌더링을 해준다.
/*그래서 object의 데이터만 변경되고 reference가 바뀌지 않을 경우에는 리렌더링이 되지 않으므로 불변성을 늘 유지하고 새로 object를 만들어서 props로 내려주도록 한다.*/

//함수의 경우 pureComponent대신 memo를 사용한다.
const HabitAddForm = React.memo((props: Props) => {
  const formRef: RefObject<HTMLFormElement> = React.createRef();
  const inputRef: RefObject<HTMLInputElement> = React.createRef();

  const onSubmit = (event: any) => {
    event.preventDefault();
    const name = inputRef?.current?.value;
    name && props.onAdd(name);
    //this.inputRef?.current?.value = "";
    if (formRef?.current) {
      formRef.current.reset();
    }
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="habit"
      ></input>
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
