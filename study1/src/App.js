import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './App.css';

const st = classNames.bind(style);

class App extends Component {
  idValue = '';

  passValue = '';

  inputChange = (e) => {
    console.log(
      `사용자 ${e.target.matches('#idInput') ? '아이디' : '비밀번호'} 입력중`
    );
  };

  inputEnter = (e) => {
    if (e.keyCode !== 13 || e.target.value.trim() === '') return;
    console.log(
      `사용자 ${e.target.matches('#idInput') ? '아이디' : '비밀번호'} '${
        e.target.value
      }' 입력`
    );
  };

  inputAssign = (e) => {
    if (e.target.matches('#idInput')) {
      this.idValue = e.target.value;
      return;
    }
    this.passValue = e.target.value;
  };

  checkValue = ({ target }) => {
    return [...target.parentNode.children].some((node) =>
      node.nodeName !== 'INPUT' ? false : node.value === ''
    );
  };

  btnClick = (e) => {
    if (this.checkValue(e)) {
      console.log('입력란을 모두 입력해 주세요');
      return;
    }
    console.log(`아이디: '${this.idValue}', 비밀번호: '${this.passValue}'`);
    console.log('로그인 시도');
    const [id, pass] = [...e.target.parentNode.children].filter(
      (node) => node.nodeName === 'INPUT'
    );
    id.value = '';
    pass.value = '';
    this.idValue = '';
    this.passValue = '';
  };

  render() {
    return (
      <form action="#" method="post">
        <fieldset>
          <legend>
            <span className={st('label')}>ID</span>
            <input
              type="text"
              id="idInput"
              onChange={this.inputChange}
              onBlur={this.inputAssign}
              onKeyDown={this.inputEnter}
            />
            <span className={st('label')}>PASS</span>
            <input
              type="text"
              id="passInput"
              onChange={this.inputChange}
              onBlur={this.inputAssign}
              onKeyUp={this.inputEnter}
            />
            <button type="button" onClick={this.btnClick}>
              로그인
            </button>
          </legend>
        </fieldset>
      </form>
    );
  }
}

export default App;
