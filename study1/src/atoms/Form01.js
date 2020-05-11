import React from 'react';
import classNames from 'classnames/bind';
import style from '../App.css';
import { Span01, Span02 } from './Span01';
import Button01 from './Button01';

const st = classNames.bind(style);

let idValue = '';

let passValue = '';

const inputChange = (e) => {
  console.log(
    `사용자 ${e.target.matches('[type="text"]') ? '아이디' : '비밀번호'} 입력중`
  );
};

const inputAssign = (e) => {
  if (e.target.matches('[type="text"]')) {
    idValue = e.target.value;
    return;
  }
  passValue = e.target.value;
};

const checkValue = ({ target }) => {
  return [...target.firstElementChild.children].some((node) =>
    node.nodeName !== 'INPUT' ? false : node.value === ''
  );
};

const formSubmit = (e) => {
  if (e.keyCode === 13) return;
  e.preventDefault();
  if (checkValue(e)) {
    console.log('입력란을 모두 입력해 주세요');
    return;
  }
  console.log(`아이디: '${idValue}', 비밀번호: '${passValue}'`);
  console.log('로그인 시도');
  const [id, pass] = [...e.target.firstElementChild.children].filter(
    (node) => node.nodeName === 'INPUT'
  );
  id.value = '';
  pass.value = '';
  idValue = '';
  passValue = '';
};

const Form01 = () => (
  <form action="#" method="post" onSubmit={formSubmit}>
    <fieldset>
      <legend className={st('a11yHidden')}>로그인</legend>
      <Span01 />
      <input type="text" onChange={inputChange} onBlur={inputAssign} />
      <Span02 />
      <input type="password" onChange={inputChange} onBlur={inputAssign} />
      <Button01 />
    </fieldset>
  </form>
);

export default Form01;
