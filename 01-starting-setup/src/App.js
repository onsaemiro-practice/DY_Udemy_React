import React, { useCallback, useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP RUNNING");

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, []);
  // useCallback() : 함수를 리액트의 내부 공간에 저장해서 함수 객체가 실행될때마다 이를 재사용할 수 있게 해줌
  // 두번째 인자는 배열이여야만 한다. useCallback 호출에 대한 의존성 배열이다.

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      {/* props값이 고정되어있더라도 인자값을 받는 컴포넌트와 그 자식 컴포넌트들은
      항상 재평가됨. */}
      <Button onClick={allowToggleHandler}>Allow Topggling</Button>
      <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
