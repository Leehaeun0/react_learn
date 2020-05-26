import React from 'react';
import './App.css';
import CounterContainer from './Containers/CounterContainer';
import PhoneContainer from './Containers/PhoneContainer';

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <PhoneContainer />
    </div>
  );
}

export default App;
