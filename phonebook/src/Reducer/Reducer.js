const initialState = {
  inputState: {
    name: '',
    phone: '',
  },
  bookState: [
    {
      id: 1,
      name: '이하은',
      phone: '01044354959',
    },
    {
      id: 2,
      name: '김우정',
      phone: '01048596495',
    },
    {
      id: 3,
      name: '이웅모',
      phone: '01059599339',
    },
    {
      id: 4,
      name: '김길동',
      phone: '01044449939',
    },
    {
      id: 5,
      name: '진인영',
      phone: '01049895949',
    },
    {
      id: 6,
      name: '박지영',
      phone: '01045540444',
    },
    {
      id: 7,
      name: '김진영',
      phone: '01034949494',
    },
    {
      id: 8,
      name: '김환희',
      phone: '01043493939',
    },
    {
      id: 9,
      name: '전한민',
      phone: '01040483928',
    },
    {
      id: 10,
      name: '주진호',
      phone: '01030494949',
    },
    {
      id: 11,
      name: '최민형',
      phone: '01038493949',
    },
    {
      id: 12,
      name: '강슬기',
      phone: '01064949385',
    },
    {
      id: 13,
      name: '배현민',
      phone: '01034964335',
    },
    {
      id: 14,
      name: '강민지',
      phone: '01020554182',
    },
  ],
  regExpState: true,
};
// const initialState = {
//   inputState: {
//     name: '',
//     phone: '',
//   },
//   bookState: [],
//   regExpState: true,
// };

const reducer = (state, action) => {
  // actiion은 디스패치에 담아서 보내는 데이터다. 페이로드 같은것.
  // state는 현재 상태들을 모두 담아놓은 객체 그 자체이다.
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputState: { ...state.inputState, [action.name]: action.value },
      };
    case 'ADD_PHONE':
      return {
        ...state,
        inputState: initialState.inputState,
        bookState: [...state.bookState, { id: action.id, ...state.inputState }],
      };
    case 'INITAIL_INPUT':
      return { ...state, inputState: initialState.inputState };
    case 'DELETE_PHONE':
      return {
        ...state,
        bookState: state.bookState.filter(v => v.id !== action.id),
      };
    case 'TOGGLE_REGEXP':
      return {
        ...state,
        regExpState: action.boolean,
      };
    default:
      throw new Error();
  }
};

export { reducer, initialState };
