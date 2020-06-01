/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';

const Todos = ({ todos, onAddTodos, onToggleTodos }) => {
  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const addTodos = (e) => {
    if (e.target.type === 'text' && e.key !== 'Enter') return;
    onAddTodos(text);
    setText('');
  };

  return (
    <>
      <input
        type="text"
        placeholder="할일을 입력하세요"
        onChange={onChange}
        value={text}
        onKeyPress={addTodos}
      />
      <button type="button" onClick={addTodos}>
        등록
      </button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
            onClick={() => onToggleTodos(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default React.memo(Todos);
