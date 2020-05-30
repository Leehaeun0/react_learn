import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Phone from '../Components/Phone';
import {
  getPhonesAsync,
  addPhoneAsync,
  deletePhoneAsync,
} from '../Modules/Phone';

function PhoneContainer() {
  const { data, loading, error } = useSelector(state => state.Phone.phones);
  const dispatch = useDispatch();

  //dispatch를 컴포넌트에 넘겨줄 수도 있고
  //이와 같이 애초에 함수로 래핑하여 준비한다음 보낼 수 있다.
  const deletePhoneFunc = id => {
    dispatch(deletePhoneAsync(id));
  };

  useEffect(() => {
    dispatch(getPhonesAsync());
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  return (
    <Phone
      phones={data}
      onCreate={addPhoneAsync}
      onDelete={deletePhoneFunc}
      dispatch={dispatch}
    />
  );
}

export default PhoneContainer;
