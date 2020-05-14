/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import './App.css';

function App() {
  const [userState, setUserState] = useState('X');
  const [turnState, setTurnState] = useState(0);
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
    return winArr.some(
      (win) =>
        win.every((v) => gameState[v] === 'X') ||
        win.every((v) => gameState[v] === 'O'),
    );
    // return winArr.some(
    //   (win) =>
    //     xState.filter((x) => win.includes(x)).length === 3 ||
    //     oState.filter((x) => win.includes(x)).length === 3,
    // );
  };

  const clickBox = (e, key) => {
    if (e.target.textContent) return;
    if (turnState > 8) return;
    if (checkWinner()) return;
    setTurnState(turnState + 1);
    if (userState === 'X') {
      setGameState(gameState.map((v, i) => (i === key ? 'X' : v)));
      setUserState('O');
      setxState([...xState, key]);
      checkWinner();
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
  const clickBackBtn = (_i) => {
    let xArr = [];
    let oArr = [];
    for (let i = 0; i <= _i; i += 1) {
      if (!(i % 2)) {
        xArr = [...xArr, xState[Math.floor(i / 2)]];
      }
      if (i % 2) {
        oArr = [...oArr, oState[Math.floor(i / 2)]];
      }
    }
    setGameState(
      gameState.map((v, i) => {
        if (xArr.includes(i)) return 'X';
        return oArr.includes(i) ? 'O' : null;
      }),
    );
  };

  const renderBackBtn = () => {
    let buttons = [];
    for (let i = 0; i < turnState; i += 1) {
      buttons = [
        ...buttons,
        <button
          key={i}
          onClick={() => clickBackBtn(i)}
          type="button"
          className="stateBtn"
        >
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
        <em
          className={`order ${checkWinner() || turnState === 9 ? 'color' : ''}`}
        >
          {orderMsg()}
        </em>
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
