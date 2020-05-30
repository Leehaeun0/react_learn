import Phone from './Components/Phone';

// n 밀리세컨드동안 기다리는 프로미스를 만들어주는 함수
const sleep = n => new Promise(resolve => setTimeout(resolve, n));

// 가짜 전화번호부 목록 데이터
// 가짜 데이터라 데이터를 수정 한다는 의미로 var로 선언
var Phones = [
  {
    id: 1,
    name: '김건희',
    number: '01080775647',
  },
  {
    id: 2,
    name: '김건희',
    number: '01080775647',
  },
  {
    id: 3,
    name: '김건희',
    number: '01080775647',
  },
];

// 포스트 목록을 가져오는 비동기 함수
export const getPhones = async () => {
  await sleep(500); // 0.5초 쉬고
  return Phones; // posts 배열
};

// ID로 전화번호를 조회하는 비동기 함수
export const getPhoneById = async id => {
  await sleep(500); // 0.5초 쉬고
  return Phones.find(p => p.id === id); // id 로 찾아서 반환
};

export const addPhone = async phone => {
  await sleep(500);
  let newPhone = {
    id: ++Phones.length,
    name: phone.name,
    number: phone.number,
  };
  Phones.push(newPhone);
  let newPhones = [];
  Phones.map(p => {
    newPhones.push(p);
  });
  Phones = newPhones;
  return newPhones;
};

export const deletePhoneById = async id => {
  //이 친구는 바로 삭제
  //데이터 베이스 반영 부분에 해당
  Phones = Phones.filter(p => p.id !== id);
  return Phones; // id 로 찾아서 반환
};
