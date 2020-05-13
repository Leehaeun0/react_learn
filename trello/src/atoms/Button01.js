import React from 'react';
import classNames from 'classnames/bind';
import style from '../App.css';

const st = classNames.bind(style);

const Button01 = ({ btnActive }) => (
  <button type="submit" className={st('logBtn', btnActive)}>
    로그인
  </button>
);

export default Button01;
