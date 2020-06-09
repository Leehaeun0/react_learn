interface Person {
  name: string;
  age?: number; 
	// 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
}

interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: '김사람', // 생략불가능
  age: 20 // ? 이라서 생략 가능 
};

const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react']
};

const people: Person[] = [person, expert];
// expert 는 Developer Person 둘다 상속이라 가능