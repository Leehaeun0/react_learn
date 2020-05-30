import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPhoneAsync } from '../Modules/Phone';
import PhoneDetail from '../Components/PhoneDetail';
import { useParams } from 'react-router-dom';

function PhoneDetailContainer() {
  const params = useParams();
  const id = Number(params.id);
  const { data, loading, error } = useSelector(state => state.Phone.phone);
  console.log(data, loading, error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhoneAsync(id));
  }, [id, dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  console.log(data);
  return <PhoneDetail phone={data} />;
}

export default PhoneDetailContainer;
