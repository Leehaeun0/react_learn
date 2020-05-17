import React, { useReducer, useRef } from 'react';
import '../App.css';
import Modal from './Modal';

const initialState = {
  inputState: {
    name: '',
    phone: '',
  },
  bookState: [],
  regExpState: true,
};

const reducer = (state, action) => {
  // console.log('state', state);
  // console.log('action', action);
  // actiion은 디스패치에 담아서 보내는 데이터다. 페이로드 같은것.
  // state는 현재 상태들을 모두 담아놓은 객체 그 자체이다.
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputState: { ...state.inputState, [action.name]: action.value },
      };
    case 'ADD_PHONE':
      return {
        ...state,
        inputState: initialState.inputState,
        bookState: [...state.bookState, { id: action.id, ...state.inputState }],
      };
    case 'INITAIL_INPUT':
      return { ...state, inputState: initialState.inputState };
    case 'DELETE_PHONE':
      return {
        ...state,
        bookState: state.bookState.filter(v => v.id !== action.id),
      };
    case 'TOGGLE_REGEXP':
      return {
        ...state,
        regExpState: action.boolean,
      };
    default:
      throw new Error();
  }
};

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
    dispatch({ type: 'TOGGLE_REGEXP', boolean: false });
    setTimeout(() => dispatch({ type: 'TOGGLE_REGEXP', boolean: true }), 1500);
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

  const deletePhone = id => {
    dispatch({ type: 'DELETE_PHONE', id });
  };

  const renderInfo = () => {
    return bookState.map(v => (
      <li key={v.id} className="info">
        <span>
          {v.name}&nbsp;&nbsp;&nbsp;{v.phone}
        </span>
        <button
          type="button"
          className="info_btn"
          onClick={() => deletePhone(v.id)}
        >
          X
        </button>
      </li>
    ));
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
          <ul className="info_list">{renderInfo()}</ul>
        </div>
        {state.regExpState ? '' : <Modal modalRef={modalRef} />}
      </main>
    </>
  );
}

export default App;
