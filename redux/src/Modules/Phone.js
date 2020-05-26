/* 액션 타입 선언 */
const ADD = 'PHONE/ADD';
const DELETE = 'PHONE/DELETE';

/* 액션 생성함수 선언 */
let nextId = 1; // phone 데이터에서 사용 할 고유 id
export const addPhone = phone => ({
  type: ADD,
  phone: {
    id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
    name: phone.name,
    number: phone.number,
  },
});
export const deletePhone = id => ({
  type: DELETE,
  id,
});

/* 초기 상태 선언 */
// 리듀서의 초기 상태는 꼭 객체타입일 필요 없습니다.
// 배열이여도 되고, 원시 타입 (숫자, 문자열, 불리언 이여도 상관 없습니다.
const initialState = [];

export default function phone(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return state.concat(action.phone);
    case DELETE:
      return state.filter(p => p.id !== action.id);
    default:
      return state;
  }
}
