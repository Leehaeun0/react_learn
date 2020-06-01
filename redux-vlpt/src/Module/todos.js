// 액션타입 만들기
const ADD_TODOS = 'todos/ADD_TODOS';
const TOGGLE_TODOS = 'todos/TOGGLE_TODOS';

let nextId = 1;
// 액션 생성함수 만들기
export const addTodos = (text) => ({
  type: ADD_TODOS,
  todo: {
    id: nextId++,
    text,
    done: false,
  },
});
export const toggleTodos = (id) => ({
  type: TOGGLE_TODOS,
  id,
});

// 초기 상태 선언
export const initialState = [
  // {
  //   id: 1,
  //   text: '',
  //   done: false,
  // },
];

// 리듀서 선언
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODOS:
      return [...state, action.todo];
    case TOGGLE_TODOS:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      );
    default:
      return state;
  }
}
