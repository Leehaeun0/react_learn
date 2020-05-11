import React from 'react';
import classNames from 'classnames/bind';
import style from '../App.css';
import { Input01, Input02 } from './Inputs';
import Button01 from './Button01';

const st = classNames.bind(style);

const Form01 = ({ onSubmit, getInputValue, acitveWarn, btnActive }) => {
  return (
    <form action="#" className={st('logForm')} onSubmit={onSubmit}>
      <h1 className={st('a11yHidden')}>로그인</h1>
      <span>ID</span>
      <Input01 getInputValue={getInputValue} />
      {/* <input
        type="text"
        name="id"
        onChange={getInputValue}
        onBlur={getInputValue}
      /> */}
      <span>PASS</span>
      <Input02 getInputValue={getInputValue} />
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
