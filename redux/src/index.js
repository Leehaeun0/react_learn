import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Modules';
import { composeWithDevTools } from 'redux-devtools-extension';
// 리덕스 개발자 도구

const store = createStore(rootReducer, composeWithDevTools());
console.log(store.getState()); // 스토어의 상태를 확인합니다
// 스토어를 만듭니다.
// composeWithDevTools 를 사용하여 리덕스 개발자 도구 활성화

// const store = createStore(rootReducer); // 스토어를 만듭니다.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
