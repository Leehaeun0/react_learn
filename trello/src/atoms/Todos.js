import React from 'react';

const Todos = ({ todosState, cardId }) => {
  const filterTodo = todosState.filter((todo) => cardId === todo.parentId);
  return (
    <>
      {filterTodo.map((todo) => (
        <li key={todo.$id} className="todo">
          {todo.content}
        </li>
      ))}
    </>
  );
};

export default Todos;
