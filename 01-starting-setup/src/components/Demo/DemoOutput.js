import React from "react";

const DemoOutput = (props) => {
  return <p>{props.show ? "This is new!" : ""}</p>;
};

export default React.memo(DemoOutput);
//React.memo는 항상 재평가되는 컴포넌트를 최적화 시켜준다.
// 그럼 왜 모든 컴포넌트에 React.memo를 적용시키지 않는걸까?
//React.memo는 성능비용을 소모한다. 하지만 컴포넌트에 따라 요구되는 비교성능비용과 React.memo의 성능비용 어느 하나가
//더 많이 소모된다고 할 수 없다. 그러므로 컴포넌트에 따라 React.memo를 쓰고 안쓰고 효율적으로 사용 할 수 있다.