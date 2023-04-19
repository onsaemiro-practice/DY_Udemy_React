import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING");

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      {/* props값이 고정되어있더라도 인자값을 받는 컴포넌트와 그 자식 컴포넌트들은
      항상 재평가됨. */}
      <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
