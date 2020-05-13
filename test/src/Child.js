import React, { useEffect } from "react";

const Child = ({ list, remove }) => {
  useEffect(() => {
    console.log("자식 컴포넌트가 화면에 나타남");
    return () => {
      console.log("자식 컴포넌트가 화면에서 사라짐");
    };
  }, []);
  return <h1 onClick={() => remove(list._id)}>{list.name}</h1>;
};

export default Child;
