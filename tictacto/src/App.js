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

  const clickBox = (key) => {
    if (turnState === 9) return;
    setTurnState(turnState + 1);
    if (userState === 'X') {
      setGameState(gameState.map((v, i) => (i === key ? 'X' : v)));
      setUserState('O');
      return;
    }
    setGameState(gameState.map((v, i) => (i === key ? 'O' : v)));
    setUserState('X');
  };

  const restart = () => {
    setUserState('X');
    setTurnState(0);
    setGameState(gameState.map(() => null));
  };

  const renderBox = () => (
    <>
      {gameState.map((v, i) => (
        <div key={i} onClick={() => clickBox(i)} className="box">
          {v}
        </div>
      ))}
    </>
  );

  const renderBackBtn = () => {
    let buttons = [];
    for (let i = 0; i < turnState; i++) {
      buttons = [
        ...buttons,
        <button type="button" className="stateBtn">
          back to {i + 1}st
        </button>,
      ];
    }
    return <>{buttons}</>;
  };

  return (
    <main>
      <div className="back">
        <h1 className="title">TIC TAC TOE</h1>
        <em className="order">{userState}&#39; turn</em>
        <div className="wrapBox">{renderBox()}</div>
        <div className="warpBtn">
          {renderBackBtn()}
          {/* <button type="button" className="stateBtn">
            back to 1st
          </button> */}
          <button onClick={restart} type="button" className="restartBtn">
            RESTART
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
