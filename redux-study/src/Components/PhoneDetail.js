import React from 'react';

const PhoneDetail = ({ phone }) => {
  const { id, name, number } = phone;
  return (
    <div>
      <h1>번호:{id}</h1>
      <h3>이름:{name}</h3>
      <h3>번호:{number}</h3>
    </div>
  );
};

export default PhoneDetail;
