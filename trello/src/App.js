import React, { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import style from './App.css';
import Form01 from './atoms/Form01';

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
  const [tryLogin, setTryLogin] = useState(false);
  const [btnActive, setBtnActive] = useState('');

  const generateId = () =>
    userArrState.length
      ? Math.max(...userArrState.map((user) => user.$id)) + 1
      : 1;

  const [userState, setUserState] = useState({
    $id: 0,
    id: '',
    pw: ''
  });
  // const warnRef = useRef();
  // const btnRef = useRef();

  const changeBtnColor = () => {
    // btnRef.current.classList.toggle(
    //   'active',
    //   userState.id.trim() && userState.pw.trim()
    // );
    setBtnActive(userState.id.trim() && userState.pw.trim() ? 'active' : '');
  };
  const getInputValue = (e) => {
    const [value, name] = [e.target.value, e.target.name];
    setUserState({ ...userState, [name]: value });
    changeBtnColor();
    console.log(userState.id, userState.pw);
  };

  const login = () => {
    const findUser = users.find(
      (user) => user.id === userState.id && user.pw === userState.pw
    );
    // warnRef.current.classList.toggle('a11yHidden', !!findUser);
    if (!findUser) return;
    setLoginState({ isLogin: true, loginId: findUser.id });
    setUserState({ $id: 0, id: '', pw: '' });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!userState.id.trim() || !userState.pw.trim()) return;
    login();
    setTryLogin(true);
  };

  const test = () => {
    console.log(loginState);
    console.log(tryLogin);
  };

  return (
    <>
      <div className={st('head')} onClick={test}>
        {isLogin ? `${loginState.loginId} 님` : 'LOGIN PAGE'}
      </div>

      {isLogin ? (
        <div>로그인 완료</div>
      ) : (
        <Form01
          onSubmit={submitForm}
          getInputValue={getInputValue}
          acitveWarn={tryLogin && !isLogin}
          btnActive={btnActive}
          // warnRef={warnRef}
          // btnRef={btnRef}
        />
      )}
    </>
  );
}

export default App;
