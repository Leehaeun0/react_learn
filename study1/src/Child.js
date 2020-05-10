/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';

const Child = ({ lotto, children }) => {
  console.log(lotto);
  return (
    <>
      <h1>자식 컴포넌트</h1>
      {children}
      {lotto.map((lo, i) => {
        return i === 6 ? <span key={i}>{lo}</span> : <span key={i}>{lo},</span>;
      })}
    </>
  );
};

export default Child;
