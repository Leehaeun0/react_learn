import React from 'react';

const TodoInput = ({ name, onChange, addTodo }) => {
  return (
    <input
      onChange={onChange}
      onKeyPress={addTodo}
      type="text"
      name={name}
      className="todoInput"
    />
  );
};

export default TodoInput;
