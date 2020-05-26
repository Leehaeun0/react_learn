import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Phone from '../Components/Phone';
import { addPhone, deletePhone } from '../Modules/Phone';

function PhoneContainer() {
  // useSelector 에서 꼭 객체를 반환 할 필요는 없습니다.
  // 한 종류의 값만 조회하고 싶으면 그냥 원하는 값만 바로 반환하면 됩니다.
  const phones = useSelector(state => state.Phone);
  const dispatch = useDispatch();

  const onCreate = text => dispatch(addPhone(text));
  const onDelete = useCallback(id => dispatch(deletePhone(id)), [dispatch]);
  // 최적화를 위해 useCallback 사용

  return <Phone phones={phones} onCreate={onCreate} onDelete={onDelete} />;
}

export default PhoneContainer;
