import React, { useState } from 'react';

// 컴포넌트 최적화를 위하여 React.memo를 사용합니다
const PhoneItem = React.memo(function PhoneItem({ phone, onDelete }) {
  return (
    <li>
      {phone.name + ':' + phone.number}{' '}
      <button onClick={() => onDelete(phone.id)}>삭제</button>
    </li>
  );
});

// 컴포넌트 최적화를 위하여 React.memo를 사용합니다
const PhoneList = React.memo(function PhoneList({ phones, onDelete }) {
  console.log(phones);
  return (
    <ul>
      {phones.map(phone => (
        <PhoneItem key={phone.id} phone={phone} onDelete={onDelete} />
      ))}
    </ul>
  );
});
const Phone = ({ phones, onCreate, onDelete }) => {
  // 리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리해야하는 것은 아닙니다.
  const [phone, setState] = useState({
    name: '',
    number: '',
  });
  const onChange = e => {
    const { name, value } = e.target;
    setState({
      ...phone,
      [name]: value,
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    onCreate(phone);
    setState({ name: '', number: '' }); // 인풋 초기화
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={phone.name}
          name="name"
          placeholder="이름을 입력하세요"
          onChange={onChange}
        />
        <input
          value={phone.number}
          name="number"
          placeholder="전화번호를 입력하세요"
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <PhoneList phones={phones} onDelete={onDelete} />
    </div>
  );
};

export default Phone;
