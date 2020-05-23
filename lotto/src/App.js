import React, { useState, useRef } from "react";
import "./App.css";
import Child from "./Child";

function Parent() {
  const [lotto, setLotto] = useState([0, 0, 0, 0, 0, 0, 0]);
  const parentLotto = lotto;
  const makeLotto = () => {
    let lottoArray = [];
    let count = 0;
    let until = 7;
    while (1) {
      if (count === until) break;
      let pop = parseInt(Math.random() * 45) + 1;
      if (lottoArray.indexOf(pop) < 0) {
        lottoArray.push(pop);
        count++;
      }
    }
    console.log(lottoArray);
    setLotto(lottoArray);
  };
  return (
    <div className="App">
      부모 컴포넌트
      <br />
      <button onClick={makeLotto}>로또 생성기</button>
      <br />
      <h1>
        {parentLotto.map((lo, i) => {
          return i == 6 ? lo : lo + ",";
        })}
      </h1>
      <Child lotto={parentLotto} />
    </div>
  );
}

export default Parent;
