import React from 'react';
import classNames from 'classnames/bind';
import style from './App.css';
// eslint-disable-next-line import/no-unresolved
import Button01 from './Button01';
import { Input01, Input02 } from './Input01';

const st = classNames.bind(style);

let idValue = '';

let passValue = '';

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

const App = () => (
  <form action="#" method="post" onSubmit={formSubmit}>
    <fieldset>
      <legend className={st('a11yHidden')}>로그인</legend>
      <span className={st('label')}>ID</span>
      <Input01 />

      <span className={st('label')}>PASS</span>
      <Input02 />

      <Button01 />
    </fieldset>
  </form>
);

export default App;

// import React, { Component } from 'react';
// import ButtonChild01 from './ButtonChild01';
// import ButtonChild02 from './ButtonChild02';

// const AppStyle = {
//   padding: 100,
//   margin: 100,
//   border: '1px solid #333'
// };

// class App extends Component {
//   render() {
//     return (
//       <div className="App" style={AppStyle}>
//         <h2>{'부모 컴포넌트'}</h2>
//         <ButtonChild01 title={'보라색 버튼'} color={'purple'} />
//         <ButtonChild02 title={'빨간색 버튼'} color={'red'} />
//       </div>
//     );
//   }
// }

// export default App;
