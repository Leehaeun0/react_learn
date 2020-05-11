import React from 'react';
import classNames from 'classnames/bind';
import style from '../App.css';
import Input01 from './Inputs';
import Button01 from './Button01';

const st = classNames.bind(style);

const Form01 = ({ onSubmit, getInputValue, login, acitveWarn, btnActive }) => {
  return (
    <form action="#" className={st('logForm')} onSubmit={onSubmit}>
      <h1 className={st('a11yHidden')}>로그인</h1>
      <span>ID</span>
      <Input01
        getInputValue={getInputValue}
        login={login}
        type="text"
        name="id"
      />
      {/* <input
        type="text"
        name="id"
        onChange={getInputValue}
        onBlur={getInputValue}
      /> */}
      <span>PASS</span>
      <Input01
        getInputValue={getInputValue}
        login={login}
        type="password"
        name="pw"
      />
      {/* <input
        type="password"
        name="pw"
        onChange={getInputValue}
        onBlur={getInputValue}
      /> */}
      {acitveWarn ? (
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

export default Form01;
