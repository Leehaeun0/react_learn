export const initialState = {
  loginState: {
    isLogin: false,
    loginId: '',
    userId: 0,
  },
  users: [
    { $id: 1, id: 'a', pw: 'aa' },
    { $id: 2, id: 'jhon', pw: 'jhon00' },
    { $id: 3, id: 'haeun', pw: 'haeun123' },
  ],
  cards: [
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
    { $id: 12, userId: 3, content: '프랑스어 공부' },
  ],
  todos: [
    { $id: 1, userId: 1, parentId: 1, content: '청소하기' },
    { $id: 2, userId: 1, parentId: 1, content: '장보기' },
    { $id: 3, userId: 1, parentId: 1, content: '빨래하기' },
    { $id: 4, userId: 1, parentId: 2, content: '네트워크 공부' },
    { $id: 5, userId: 1, parentId: 3, content: '리액트 과제' },
    { $id: 6, userId: 1, parentId: 3, content: '영어 단어 외우기' },
    { $id: 7, userId: 1, parentId: 4, content: '신나는 국내 여행' },
    { $id: 8, userId: 1, parentId: 5, content: '인사동 맛집 탐방' },
    { $id: 9, userId: 2, parentId: 6, content: '영어 인강' },
    { $id: 10, userId: 2, parentId: 6, content: '문제집 풀기' },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 
  }
};
