import React, { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import style from './App.css';

const st = classNames.bind(style);

function App() {
  const users = [
    { $id: 1, id: 'haeun', pw: 'haeun123' },
    { $id: 2, id: 'jhon', pw: 'jhon00' },
    { $id: 3, id: 'a', pw: 'aa' }
  ];

  const [userArrState, setUserArrState] = useState(users);
  const [loginState, setLoginState] = useState({ isLogin: false, loginId: '' });
  const { isLogin, loginId } = loginState;

  const generateId = () =>
    userArrState.length
      ? Math.max(...userArrState.map((user) => user.$id)) + 1
      : 1;

  const [userState, setUserState] = useState({
    $id: generateId(),
    id: '',
    pw: ''
  });
  const warnRef = useRef();
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
    console.log(userState.id, userState.pw);
  };

  const login = () => {
    // users.forEach((user) => {
    //   if (user.id !== userState.id || user.pw !== userState.pw) {
    //     return;
    //   }
    //   setLoginState({ isLogin: true, loginId: user.id });
    //   setUserState({ $id: 0, id: '', pw: '' });
    // });
    const findUser = users.find(
      (user) => user.id === userState.id && user.pw === userState.pw
    );
    warnRef.current.classList.toggle('a11yHidden', !!findUser);
    if (!findUser) return;
    setLoginState({ isLogin: true, loginId: findUser.id });
    setUserState({ $id: 0, id: '', pw: '' });
  };

  const logBtnClick = (e) => {
    e.preventDefault();
    if (!userState.id.trim() || !userState.pw.trim()) return;
    login();
    // await setUserArrState([
    //   ...userArrState,
    //   { ...userState, $id: generateId() },
    // ]);
    // if (isUser()) setLoginState({ isLogin: true, loginId: "" });
    // console.log(userArrState);
    // console.log([...userArrState, { ...userState, $id: generateId() }]);
  };

  const test = () => {
    console.log(loginState);
  };

  return (
    <div>
      <div className={st('head')} onClick={test}>
        LOGIN PAGE
      </div>

      <form action="#" className={st('logForm')} onSubmit={logBtnClick}>
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
        <span className={st('a11yHidden', 'warnLogin')} ref={warnRef}>
          가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.
        </span>
        <button
          type="submit"
          className={st('logBtn')}
          // onClick={logBtnClick}
          ref={btnRef}
        >
          로그인
        </button>
      </form>
      <div>{isLogin ? 'id ok' : 'no'}</div>
    </div>
  );
}

export default App;
