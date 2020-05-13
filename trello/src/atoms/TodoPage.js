import React, { useState } from 'react';
import Cards from './Cards';
import UlList from './UlList';

const Todos01 = ({ generateId, userId }) => {
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

  const [cardsState, setCardsState] = useState(cards);
  const [inputCards, setinputCards] = useState('');

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
        />
      </UlList>
    </main>
  );
};

export default Todos01;
