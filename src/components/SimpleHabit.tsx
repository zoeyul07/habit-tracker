import React, { useState, MutableRefObject, useRef, useEffect } from "react";

interface Props {}

//클래스의 경우 함구같은 멤버 변수들은 클래스가 만들어질 때 딱 한번만 만들어진다. 대신 state 혹은 props가 변경되면 Render 함수만 호출된다.
//함수의 경우 컴포넌트가(props, state) 변경되면 코드블록 전체가(지역변수들까지) 반복되서 호출된다.
const SimpleHabit = (props: Props) => {
  //useState의 경우 react가 알아서 기억하고 있으므로(동일한 값을 메모리에 저장) 리렌더링 되어도 동일한 값을 받아온다.
  const [count, setCount] = useState(0);
  //React.createRef의 경우 리렌더링 될때마다 새로운 레퍼런스를 만들어 새로운 것을 할당하게 된다.
  //useRef의 경우 호출할 때마다 새로운 레퍼런스를 만드는 것이 아니라 한번만 만들고 메모리에 저장해 제사용한다.
  const spanRef: MutableRefObject<HTMLSpanElement | null | undefined> =
    useRef();

  //함수도 object중에 하나이다. state가 변경되면 새로운 ref를 가진 object가 다시 생성되며 새로 계산한다.
  //callback 함수도 메모리에 저장해서 사용할 수 있다.
  //자식컴포넌트에서 memo를 사용하여도 리렌더링되며 콜백함수가 새로 만들어져 전달되게 되면 다시 자식컴포넌트도 리렌더링 하게 되므로 그럴 경우 useCallback을 사용한다.
  const handleIncrement = () => {
    setCount(count + 1);
  };

  //useEffect의 경우 componentDidMount와 ComponentDidUpdate의 역할을 한다. (컴포넌트가 마운트 될 때, 업데이트가 될때마다 호출된다.)
  //컴포넌트가 처음 마운트 될 때만 실행하고 싶다면, 두번째 인자로 [](어떤 값이 변경될떄만 업데이트 하고 싶은지 정의) 빈배열을 넣어준다.
  useEffect(() => {
    console.log("mounted & updated", `${count}`);
  });

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
