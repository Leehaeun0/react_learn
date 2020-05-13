/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import './App.css';

function App() {
  const [userState, setUserState] = useState('X');
  const [turnState, setTurnState] = useState(0);
  // const [userDidState, setUserDidState] = useState([[], []]);
  const [xState, setxState] = useState([]);
  const [oState, setoState] = useState([]);
  const [gameState, setGameState] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const winArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = () => {
    const xWin = winArr.some(
      (win) => xState.filter((x) => win.includes(x)).length === 3,
    );
    const oWin = winArr.some(
      (win) => oState.filter((x) => win.includes(x)).length === 3,
    );
    return xWin || oWin;
  };

  const test = () => {};
  const clickBox = (e, key) => {
    if (e.target.textContent) return;
    if (turnState === 9) return; // 비김 메세지
    if (checkWinner()) return;
    setTurnState(turnState + 1);
    if (userState === 'X') {
      setGameState(gameState.map((v, i) => (i === key ? 'X' : v)));
      setUserState('O');
      // const statePromise = new Promise((resolve) => {
      //   resolve(setxState([...xState, key]));
      // });
      // statePromise.then(checkWinner);
      // setxState([...xState, key]);
      // checkWinner();
      test(setxState([...xState, key]), checkWinner());
      return;
    }
    setGameState(gameState.map((v, i) => (i === key ? 'O' : v)));
    setUserState('X');
    setoState([...oState, key]);
  };

  const restart = () => {
    setUserState('X');
    setTurnState(0);
    setGameState(gameState.map(() => null));
    setxState([]);
    setoState([]);
  };

  const renderBox = () => (
    <>
      {gameState.map((v, i) => (
        <div key={i} onClick={(e) => clickBox(e, i)} className="box">
          {v}
        </div>
      ))}
    </>
  );

  const renderBackBtn = () => {
    let buttons = [];
    for (let i = 0; i < turnState; i += 1) {
      buttons = [
        ...buttons,
        <button key={i} type="button" className="stateBtn">
          back to {i + 1}st
        </button>,
      ];
    }
    return <>{buttons}</>;
  };

  const orderMsg = () => {
    if (checkWinner()) return `${userState === 'X' ? 'O' : 'X'} Win!`;
    return turnState === 9 ? 'Draw!' : `${userState}'s turn`;
  };

  return (
    <main>
      <div className="back">
        <h1 className="title">TIC TAC TOE</h1>
        <em className="order">{orderMsg()}</em>
        <div className="wrapBox">{renderBox()}</div>
        <div className="warpBtn">
          {renderBackBtn()}
          <button onClick={restart} type="button" className="restartBtn">
            RESTART
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
