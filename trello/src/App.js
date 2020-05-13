import React, { useState } from 'react';
import classNames from 'classnames/bind';
import style from './App.css';
import Form01 from './atoms/Form01';
import TodoPage from './atoms/TodoPage';

const st = classNames.bind(style);

function App() {
  const users = [
    { $id: 1, id: 'a', pw: 'aa' },
    { $id: 2, id: 'jhon', pw: 'jhon00' },
    { $id: 3, id: 'haeun', pw: 'haeun123' }
  ];

  const [usersDataState, setUsersDataState] = useState(users);
  const [loginState, setLoginState] = useState({
    isLogin: false,
    loginId: '',
    userId: 0
  });
  const { isLogin, loginId, userId } = loginState;

  const generateId = (arr) => {
    return arr.length ? Math.max(...arr.map((user) => user.$id)) + 1 : 1;
  };

  const logOut = () => {
    setLoginState({ isLogin: false, loginId: '', userId: 0 });
  };

  return (
    <>
      {/* <div className={st('head')} onClick={test}>
        {loginId} 이하은 님
        <button type="button" className="logoutBtn" onClick={logOut}>
          LOG OUT
        </button>
      </div> */}
      <div className={st('head')}>
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

      <TodoPage generateId={generateId} userId={userId} />
      {/* {isLogin ? (
        <Todos01 generateId={generateId} userId={userId} />
      ) : (
        <Form01 usersDataState={usersDataState} setLoginState={setLoginState} />
      )} */}
    </>
  );
}

export default App;
