import React, { useState } from 'react';

const Cards = ({ children }) => {
  const cards = [
    { $id: 1, userId: 1, content: '집안일' },
    { $id: 2, userId: 1, content: '개발 공부' },
    { $id: 3, userId: 1, content: '과제' },
    { $id: 4, userId: 2, content: '여행' }
  ];
  const [cardsState, setCardsState] = useState(cards);

  //   const renderCards = () => {
  //     return cardsState.map((card) => (
  //       <li key={card.$id} className="card">
  //         <h2>{card.content}</h2>
  //         {children}
  //       </li>
  //     ));
  //   };

  //   console.log(children);
  //   return <>{renderCards()}</>;
  // };

  const renderCards = () => {
    return cardsState.map((card) => (
      <li key={card.$id} className="card">
        <h2>{card.content}</h2>
        {children}
      </li>
    ));
  };

  console.log(children);
  return (
    <ul className="cardList">
      <li className="card">
        <h2>제목</h2>
        <ul className="todoList">{renderTodos()}</ul>
        <input
          onChange={getInputTodo}
          onKeyPress={addTodo}
          type="text"
          className="todoInput"
        />
        <button type="button" className="deleteTodo">
          X
        </button>
      </li>
    </ul>
  );
};

export default Cards;
