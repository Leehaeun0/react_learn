import React from 'react';

const Button02 = ({
  setCardsState,
  cardsState,
  setTodosState,
  todosState,
  cardId
}) => {
  const deleteTodo = () => {
    setCardsState(cardsState.filter((card) => card.$id !== cardId));
    setTodosState(todosState.filter((todo) => todo.parentId !== cardId));
  };

  return (
    <button type="button" className="deleteTodo" onClick={() => deleteTodo()}>
      X
    </button>
  );
};

export default Button02;
