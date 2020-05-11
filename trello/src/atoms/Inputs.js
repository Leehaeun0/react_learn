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
// const Input02 = ({ getInputValue }) => (
//   <input
//     type="password"
//     name="pw"
//     className="inputStyle"
//     onChange={getInputValue}
//     onBlur={getInputValue}
//   />
// );

export default Input01;
