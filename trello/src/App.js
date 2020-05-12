import React, { useState } from 'react';
import classNames from 'classnames/bind';
import style from './App.css';
import Form01 from './atoms/Form01';
import Todos01 from './atoms/Todos01';

const st = classNames.bind(style);

function App() {
  const users = [
    { $id: 1, id: 'haeun', pw: 'haeun123' },
    { $id: 2, id: 'jhon', pw: 'jhon00' },
    { $id: 3, id: 'a', pw: 'aa' }
  ];

  const [usersDataState, setUsersDataState] = useState(users);
  const [loginState, setLoginState] = useState({
    isLogin: false,
    loginId: '',
    userId: 0
  });
  const { isLogin, loginId, userId } = loginState;

  // const [tryLogin, setTryLogin] = useState(false);
  // const [btnActive, setBtnActive] = useState('');

  const generateId = (arr) => {
    return arr.length ? Math.max(...arr.map((user) => user.$id)) + 1 : 1;
  };

  // const [userInputState, setUserInputState] = useState({
  //   $id: 0,
  //   id: '',
  //   pw: ''
  // });

  // const changeBtnColor = () => {
  //   setBtnActive(userState.id.trim() && userState.pw.trim() ? 'active' : '');
  // };
  // const getInputValue = (e) => {
  //   const [value, name] = [e.target.value, e.target.name];
  //   setUserState({ ...userState, [name]: value });
  //   changeBtnColor();
  //   console.log(userState.id, userState.pw);
  // };

  // const login = () => {
  //   const findUser = users.find(
  //     (user) => user.id === userState.id && user.pw === userState.pw
  //   );
  //   if (!findUser) return;
  //   setLoginState({ isLogin: true, loginId: findUser.id });
  //   setUserState({ $id: 0, id: '', pw: '' });
  // };

  // const submitLogin = (e) => {
  //   e.preventDefault(); // e.target 요소가 달라서 login 함수랑 분리함
  //   if (!userState.id.trim() || !userState.pw.trim()) return;
  //   setTryLogin(true);
  //   login();
  //   console.log('sub');
  // };

  const logOut = () => {
    setLoginState({ isLogin: false, loginId: '', userId: 0 });
  };

  const test = () => {
    console.log(loginState);
    // console.log(tryLogin);
  };

  return (
    <>
      {/* <div className={st('head')} onClick={test}>
        {loginId} 이하은 님
        <button type="button" className="logoutBtn" onClick={logOut}>
          LOG OUT
        </button>
      </div> */}
      <div className={st('head')} onClick={test}>
        {isLogin ? (
          <>
            {loginId} 님
            <button type="button" className="logoutBtn" onClick={logOut}>
              LOG OUT
            </button>
          </>
        ) : (
          'LOGIN PAGE'
        )}
      </div>

      {/* <Todos01 generateId={generateId} userId={userId} /> */}
      {isLogin ? (
        <Todos01 generateId={generateId} userId={userId} />
      ) : (
        <Form01
          usersDataState={usersDataState}
          setLoginState={setLoginState}
          // onSubmit={submitLogin}
          // getInputValue={getInputValue}
          // login={login}
          // acitveWarn={tryLogin && !isLogin}
          // btnActive={btnActive}
          // warnRef={warnRef}
          // btnRef={btnRef}
        />
      )}
    </>
  );
}

export default App;
