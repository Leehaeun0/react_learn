import React from 'react';

const Todos01 = () => {
  return (
    <main className="todoMain">
      <div className="newBoard">
        <h1>NEW BOARD</h1>
        <input type="text" />
      </div>
      <ul className="cardList">
        <li className="card">
          <h2>제목</h2>
          <ul className="todoList">
            <li className="todo">투두들</li>
            <li className="todo">투두들</li>
            <li className="todo">투두들</li>
            <li className="todo">투두들</li>
            <li className="todo">투두들</li>
            <li className="todo">투두들</li>
          </ul>
          <input type="text" className="todoInput" />
        </li>

        <li className="card">
          <h2>제목</h2>
          <ul className="todoList">
            <li className="todo">투두들</li>
          </ul>
          <input type="text" className="todoInput" />
        </li>

        <li className="card">
          <h2>제목</h2>
          <ul className="todoList">
            <li className="todo">투두들</li>
          </ul>
        </li>
        <li className="card">
          <h2>제목</h2>
          <ul className="todoList">
            <li className="todo">투두들</li>
          </ul>
        </li>
        <li className="card">
          <h2>제목</h2>
          <ul className="todoList">
            <li className="todo">투두들</li>
          </ul>
        </li>
        <li className="card">
          <h2>제목</h2>
          <ul className="todoList">
            <li className="todo">투두들</li>
          </ul>
        </li>
        <li className="card">
          <h2>제목</h2>
          <ul className="todoList">
            <li className="todo">투두들</li>
          </ul>
        </li>
        <li className="card">
          <h2>제목</h2>
          <ul className="todoList">
            <li className="todo">투두들</li>
          </ul>
        </li>
      </ul>
    </main>
  );
};

export default Todos01;
