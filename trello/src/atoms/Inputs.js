import React from 'react';

const Input01 = ({ getInputValue, login, type, name }) => (
  <input
    type={type}
    name={name}
    className="inputStyle"
    onChange={getInputValue}
    onBlur={getInputValue}
    onKeyPress={login}
  />
);

export default Input01;
