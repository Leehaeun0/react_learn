import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import Child from "./Child";
import "./App.css";

const Parent = () => {
  useEffect(() => {
    console.log("부모 컴포넌트가 화면에 나타남");
    return () => {
      console.log("부모 컴포넌트가 화면에서 사라짐");
    };
  }, []);

  const [state, setState] = useState([
    {
      _id: 0,
      name: "aaa",
    },
    {
      _id: 1,
      name: "bbb",
    },
    {
      _id: 2,
      name: "ccc",
    },
    {
      _id: 3,
      name: "ddd",
    },
    {
      _id: 4,
      name: "eee",
    },
  ]);
  const _remove = (_id) => {
    console.log(state);
    setState(state.filter((s) => s._id !== _id));
  };
  return (
    <div>
      {state.map((s) => (
        <Child list={s} remove={_remove} key={s._id} />
      ))}
    </div>
  );
};

export default Parent;
