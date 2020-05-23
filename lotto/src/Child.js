import React from "react";

const Child = (props) => {
  console.log(props.children);
  return (
    <>
      <h1>자식 컴포넌트</h1>
      {props.lotto.map((lo, i) => {
        return i === 6 ? (
          <span key={i}>{lo}</span>
        ) : (
          <span key={i}>{lo + ","}</span>
        );
      })}
    </>
  );
};

export default Child;
