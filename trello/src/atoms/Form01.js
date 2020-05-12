/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import style from '../App.css';
import Input01 from './Inputs';
import Button01 from './Button01';

const st = classNames.bind(style);

const Form01 = ({ usersDataState, setLoginState }) => {
  const [tryLogin, setTryLogin] = useState(false);
  const [btnActive, setBtnActive] = useState('');

  const [userState, setUserState] = useState({
    $id: 0,
    id: '',
    pw: ''
  });

  const changeBtnColor = () => {
    setBtnActive(userState.id.trim() && userState.pw.trim() ? 'active' : '');
  };
  const getInputValue = (e) => {
    const [value, name] = [e.target.value, e.target.name];
    setUserState({ ...userState, [name]: value });
    changeBtnColor();
    console.log(userState.id, userState.pw);
  };

  const login = () => {
    const findUser = usersDataState.find(
      (user) => user.id === userState.id && user.pw === userState.pw
    );
    if (!findUser) return;
    setLoginState({
      isLogin: true,
      loginId: findUser.id,
      userId: findUser.$id
    });
    setUserState({ $id: 0, id: '', pw: '' });
  };

  const submitLogin = (e) => {
    e.preventDefault(); // e.target 요소가 달라서 login 함수랑 분리함
    if (!userState.id.trim() || !userState.pw.trim()) return;
    setTryLogin(true);
    login();
    console.log('sub');
  };

  return (
    <form action="#" className={st('logForm')} onSubmit={submitLogin}>
      <h1 className={st('a11yHidden')}>로그인</h1>
      <span>ID</span>
      <Input01
        getInputValue={getInputValue}
        login={login}
        type="text"
        name="id"
      />
      <span>PASS</span>
      <Input01
        getInputValue={getInputValue}
        login={login}
        type="password"
        name="pw"
      />
      {tryLogin && !setLoginState.isLogin ? (
        <span className={st('warnLogin')}>
          가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.
        </span>
      ) : (
        ''
      )}
      <Button01 btnActive={btnActive} />
    </form>
  );
};

// Form01.prototype = {}

export default Form01;
