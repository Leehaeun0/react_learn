import React, { useState } from "react";
import "../src/App.css";
import Me from "./Me";

const God = () => {
  const [lotto, setLotto] = useState(Array(7).fill(0));
  const [active, setActive] = useState(true);

  const getLotto = () => {
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
    // return lottoArray;
  };
  const hideLotto = () => {
    setActive(!active);
  };
  return (
    <>
      <button className={"ActiveButton"} onClick={hideLotto}>
        로또 번호 받기 감추기
      </button>
      {active && <Me lotto={lotto} getLotto={getLotto} hideLotto={hideLotto} />}
    </>
  );
};

export default God;
