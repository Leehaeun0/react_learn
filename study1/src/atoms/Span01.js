import React from 'react';
import classNames from 'classnames/bind';
import style from '../App.css';

const st = classNames.bind(style);

const Span01 = () => <span className={st('label')}>ID</span>;
const Span02 = () => <span className={st('label')}>PASS</span>;

export { Span01, Span02 };
