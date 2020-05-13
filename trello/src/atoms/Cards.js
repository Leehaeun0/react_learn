import React, { useState } from 'react';
import UlList from './UlList';
import Todos from './Todos';
import TodoInput from './TodoInput';
import Button02 from './Button02';

const Cards = ({
  userId,
  cardsState,
  getInputValue,
  generateId,
  setCardsState
}) => {
  const todos = [
    { $id: 1, userId: 1, parentId: 1, content: '청소하기' },
    { $id: 2, userId: 1, parentId: 1, content: '장보기' },
    { $id: 3, userId: 1, parentId: 1, content: '빨래하기' },
    { $id: 4, userId: 1, parentId: 2, content: '네트워크 공부' },
    { $id: 5, userId: 1, parentId: 3, content: '리액트 과제' },
    { $id: 6, userId: 1, parentId: 3, content: '영어 단어 외우기' },
    { $id: 7, userId: 1, parentId: 4, content: '신나는 국내 여행' },
    { $id: 8, userId: 1, parentId: 5, content: '인사동 맛집 탐방' },
    { $id: 9, userId: 2, parentId: 6, content: '영어 인강' },
    { $id: 10, userId: 2, parentId: 6, content: '문제집 풀기' }
  ].filter((todo) => todo.userId === userId);
  const [todosState, setTodosState] = useState(todos);
  const [inputTodos, setinputTodos] = useState('');

  const addTodo = (e) => {
    console.log(e.key);
    console.log(e.target.name);
    if (e.key !== 'Enter' || e.target.value.trim() === '') return;
    setTodosState([
      ...todosState,
      {
        $id: generateId(todosState),
        userId,
        parentId: +e.target.name,
        content: inputTodos
      }
    ]);
    e.target.value = '';
    setinputTodos('');
  };

  return (
    <>
      {cardsState.map((card) => (
        <li key={card.$id} className="card">
          <h2>{card.content}</h2>
          <UlList>
            <Todos todosState={todosState} cardId={card.$id} />
          </UlList>
          <TodoInput
            name={card.$id}
            onChange={(e) => getInputValue(e, setinputTodos)}
            addTodo={addTodo}
          />
          <Button02
            setCardsState={setCardsState}
            cardsState={cardsState}
            setTodosState={setTodosState}
            todosState={todosState}
            cardId={card.$id}
          />
        </li>
      ))}
    </>
  );
};

export default Cards;
