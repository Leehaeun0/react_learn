/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// import React, { useState, useRef } from 'react';
// import Child from './Child';
// import './App.css';

// const rendomNum = () => {
//   console.log(1);
// };

// const changeInput = () => {};

// const App = () => {
//   // let lottoArray = [];
//   // let count = 0;
//   // let until = 7;

//   return (
//     <div className="App">
//       부모컨텐츠
//       <br />
//       <button type="button" onClick={rendomNum}>
//         로또 생성기
//       </button>
//       <br />
//       <input type="text" ref={inputRet} onChange={changeInput} />
//       <h1>ff</h1>
//       <Child> 자식 컴포넌트 </Child>
//     </div>
//   );
// };

// export default App;

import React, { useState, useRef } from 'react';
import Child from './Child';
import './App.css';

function App() {
  const [lotto, setLotto] = useState([0, 0, 0, 0, 0, 0, 0]);
  const parentLotto = lotto;
  const inputRef = useRef();
  const makeLotto = () => {
    let lottoArray = [];
    for (let i = 0; i <= 6; i++) {
      let number = Math.floor(Math.random() * 45 + 1);
      if (lottoArray.includes(number)) return;

      lottoArray = [...lottoArray, number];
    }
    setLotto(lottoArray);
  };

  const changeInput = () => {};
  return (
    <div className="App">
      부모 컴포넌트
      <button type="button" onClick={makeLotto}>
        로또 생성기
      </button>
      <input type="text" ref={inputRef} onChange={changeInput} />
      <h1>{parentLotto.join(',')}</h1>
      <Child lotto={parentLotto}>
        <h1>자손</h1>
      </Child>
    </div>
  );
}
export default App;
