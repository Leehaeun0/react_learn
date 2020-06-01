import React, { useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { addTodos, toggleTodos } from '../Module/todos';
import Todos from '../Components/Todos';

const TodosContainer = () => {
  const todos = useSelector((state) => state.todos, shallowEqual);
  const dispatch = useDispatch();

  const onAddTodos = useCallback((_text) => dispatch(addTodos(_text)), [
    dispatch,
  ]);
  const onToggleTodos = useCallback((_id) => dispatch(toggleTodos(_id)), [
    dispatch,
  ]);

  return (
    <Todos
      todos={todos}
      onAddTodos={onAddTodos}
      onToggleTodos={onToggleTodos}
    />
  );
};

export default TodosContainer;
