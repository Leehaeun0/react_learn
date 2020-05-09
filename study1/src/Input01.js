/* eslint-disable no-undef */
import React from 'react';

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

const Input01 = () => (
  <input type="text" onChange={inputChange} onBlur={inputAssign} />
);

const Input02 = () => (
  <input type="password" onChange={inputChange} onBlur={inputAssign} />
);

export { Input01, Input02 };
