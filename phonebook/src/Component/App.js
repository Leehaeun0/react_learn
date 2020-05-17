import React, { useReducer, useRef } from 'react';
import { reducer, initialState } from '../Reducer/Reducer';
import PhoneList from './PhoneList';
import Modal from './Modal';
import '../App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { inputState, bookState } = state;
  const modalRef = useRef();

  const generateId = () => {
    return bookState.length ? Math.max(...bookState.map(v => v.id)) + 1 : 1;
  };

  const onChangeInput = e => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE_INPUT', name, value });
  };

  const warningMsg = () => {
    if (!state.regExpState) return;
    dispatch({ type: 'TOGGLE_REGEXP', boolean: false });
    setTimeout(() => dispatch({ type: 'TOGGLE_REGEXP', boolean: true }), 1300);
    setTimeout(() => {
      modalRef.current.style.animationName = 'madalFadeout';
    }, 1000);
  };

  const enterInput = e => {
    if (e.key !== 'Enter' || !inputState.name || !inputState.phone) return;
    const regExp = /^\d{10,11}$/;
    if (!regExp.test(inputState.phone)) {
      warningMsg();
      return;
    }
    dispatch({ type: 'ADD_PHONE', id: generateId() });
  };

  return (
    <>
      <div className="page_bg" />
      <main>
        <h1 className="title">Phone Book</h1>
        <div className="book_wrap">
          <div className="inputs_wrap">
            <div className="div">
              <span className="book_label">Name</span>
              <input
                type="text"
                name="name"
                className="book_input"
                onChange={onChangeInput}
                onKeyPress={enterInput}
                value={inputState.name}
              />
            </div>
            <div className="div">
              <span className="book_label">Phone Number</span>
              <input
                type="tel"
                name="phone"
                className="book_input"
                onChange={onChangeInput}
                onKeyPress={enterInput}
                value={inputState.phone}
              />
            </div>
          </div>
          <PhoneList bookState={bookState} dispatch={dispatch} />
        </div>
        {state.regExpState ? '' : <Modal modalRef={modalRef} />}
      </main>
    </>
  );
}

export default App;
