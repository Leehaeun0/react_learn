import React, { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import style from './App.css';

const st = classNames.bind(style);

function App() {
  let users = [
    { $id: 1, id: 'haeun', pw: 'haeun123' },
    { $id: 2, id: 'jhon', pw: 'jhon00' }
  ];

  const generateId = () =>
    users.length ? Math.max(...users.map((user) => user.$id)) + 1 : 1;

  const [userState, setUserState] = useState({
    $id: generateId(),
    id: '',
    pw: ''
  });
  const btnRef = useRef();

  const changeBtnColor = () => {
    btnRef.current.classList.toggle(
      'active',
      userState.id.trim() && userState.pw.trim()
    );
  };
  const getInputValue = (e) => {
    const [value, name] = [e.target.value, e.target.name];
    setUserState({ ...userState, [name]: value });
    changeBtnColor();
    // console.log(userState.id, userState.pw);
  };

  const logBtnClick = (e) => {
    e.preventDefault();
    if (!userState.id.trim() || !userState.pw.trim()) return;
    users = [...users, userState];
    console.log(users);
    setUserState({ $id: generateId(), id: '', pw: '' });
    console.log(userState);
    // await setUserArrState([
    //   ...userArrState,
    //   { ...userState, $id: generateId() },
    // ]);
    // if (isUser()) setLoginState({ isLogin: true, loginId: "" });
    // console.log(userArrState);
    // console.log([...userArrState, { ...userState, $id: generateId() }]);
  };

  return (
    <div>
      <div className={st('head')}>LOGIN PAGE</div>

      <form action="#" className={st('logForm')}>
        <h1 className={st('a11yHidden')}>로그인</h1>
        <span>ID</span>
        <input
          type="text"
          name="id"
          onChange={getInputValue}
          onBlur={getInputValue}
        />
        <span>PASS</span>
        <input
          type="password"
          name="pw"
          onChange={getInputValue}
          onBlur={getInputValue}
        />
        <button
          type="submit"
          className={st('logBtn')}
          onClick={logBtnClick}
          ref={btnRef}
        >
          로그인
        </button>
      </form>
    </div>
  );
}

export default App;
