import React from 'react';
import './App.css';
import CounterContainer from './Container/CounterContainer';
import Todos from './Container/TodosContainer';

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
