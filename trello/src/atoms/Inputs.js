import React from 'react';

const Input01 = ({ getInputValue }) => (
  <input
    type="text"
    name="id"
    onChange={getInputValue}
    onBlur={getInputValue}
  />
);
const Input02 = ({ getInputValue }) => (
  <input
    type="password"
    name="pw"
    onChange={getInputValue}
    onBlur={getInputValue}
  />
);

export { Input01, Input02 };
