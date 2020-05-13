import React, { useState } from 'react';
import Cards from './Cards';
import UlList from './UlList';

const Todos01 = ({ generateId, userId }) => {
  userId = 1;
  const cards = [
    { $id: 1, userId: 1, content: '집안일' },
    { $id: 2, userId: 1, content: '개발 공부' },
    { $id: 3, userId: 1, content: '과제' },
    { $id: 4, userId: 1, content: '여행' },
    { $id: 5, userId: 1, content: '맛집 탐방' },
    { $id: 6, userId: 2, content: '영어공부' },
    { $id: 7, userId: 2, content: '중국어 공부' },
    { $id: 8, userId: 2, content: '일본어 공부' },
    { $id: 9, userId: 3, content: '태국어 공부' },
    { $id: 10, userId: 3, content: '몽골어 공부' },
    { $id: 11, userId: 3, content: '러시아어 공부' },
    { $id: 12, userId: 3, content: '프랑스어 공부' }
  ].filter((card) => card.userId === userId);
  // const todos = [
  //   { $id: 1, userId: 1, parentId: 1, content: '청소하기' },
  //   { $id: 2, userId: 1, parentId: 1, content: '장보기' },
  //   { $id: 3, userId: 1, parentId: 1, content: '빨래하기' },
  //   { $id: 4, userId: 1, parentId: 2, content: '네트워크 공부' },
  //   { $id: 5, userId: 1, parentId: 3, content: '리액트 과제' },
  //   { $id: 6, userId: 1, parentId: 3, content: '영어 단어 외우기' },
  //   { $id: 7, userId: 1, parentId: 4, content: '신나는 국내 여행' },
  //   { $id: 8, userId: 1, parentId: 5, content: '인사동 맛집 탐방' },
  //   { $id: 9, userId: 2, parentId: 6, content: '영어 인강' },
  //   { $id: 10, userId: 2, parentId: 6, content: '문제집 풀기' }
  // ].filter((todo) => todo.userId === userId);
  const [cardsState, setCardsState] = useState(cards);
  // const [todosState, setTodosState] = useState(todos);
  const [inputCards, setinputCards] = useState('');
  // const [inputTodos, setinputTodos] = useState('');

  const addCard = (e) => {
    if (e.key !== 'Enter' || e.target.value.trim() === '') return;
    setCardsState([
      ...cardsState,
      {
        $id: generateId(cardsState),
        userId,
        content: inputCards
      }
    ]);
    e.target.value = '';
    setinputCards('');
  };

  const getInputValue = (e, setinputTodos) => {
    if (e.target.name === 'addCard') {
      setinputCards(e.target.value);
      return;
    }
    setinputTodos(e.target.value);
  };

  // const addTodo = (e) => {
  //   console.log(e.key);
  //   console.log(e.target.name);
  //   if (e.key !== 'Enter' || e.target.value.trim() === '') return;
  //   setTodosState([
  //     ...todosState,
  //     {
  //       $id: generateId(todosState),
  //       userId,
  //       parentId: +e.target.name,
  //       content: inputTodos
  //     }
  //   ]);
  //   e.target.value = '';
  //   setinputTodos('');
  // };

  // const deleteTodo = (cardId) => {
  //   // console.log(cardId);
  //   setCardsState(cardsState.filter((card) => card.$id !== cardId));
  //   setTodosState(todosState.filter((todo) => todo.parentId !== cardId));
  // };

  // const renderTodos = (cardId) => {
  //   const filterTodo = todosState.filter((todo) => cardId === todo.parentId);
  //   return filterTodo.map((todo) => (
  //     <li key={todo.$id} className="todo">
  //       {todo.content}
  //     </li>
  //   ));
  // };

  // console.log(cardsState, todosState);

  return (
    <main className="todoMain">
      <div className="newBoard">
        <h1>NEW BOARD</h1>
        <input
          type="text"
          name="addCard"
          onChange={getInputValue}
          onKeyPress={addCard}
        />
      </div>

      <UlList className="cardList">
        <Cards
          userId={userId}
          cardsState={cardsState}
          setCardsState={setCardsState}
          generateId={generateId}
          getInputValue={getInputValue}
          // renderTodos={renderTodos}
          // addTodo={addTodo}
          // deleteTodo={deleteTodo}
        />
        {/* {cardsState.map((card) => (
          <li key={card.$id} className="card">
            <h2>{card.content}</h2>
            <ul className="todoList">{renderTodos(card.$id)}</ul>
            <input
              name={card.$id}
              onChange={getInputValue}
              onKeyPress={addTodo}
              type="text"
              className="todoInput"
            />
            <button
              type="button"
              className="deleteTodo"
              onClick={() => deleteTodo(card.$id)}
            >
              X
            </button>
          </li>
        ))} */}
      </UlList>

      {/* <ul className="cardList">
    
      </ul> */}
    </main>
  );
};

export default Todos01;
