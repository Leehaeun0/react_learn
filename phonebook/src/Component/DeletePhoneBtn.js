import React, { useContext } from 'react';
import UserDispatch from '../Context/Context';

const DeletePhoneBtn = ({ id }) => {
  const dispatch = useContext(UserDispatch);
  const deletePhone = () => {
    dispatch({ type: 'DELETE_PHONE', id });
  };

  return (
    <button type="button" className="info_btn" onClick={deletePhone}>
      X
    </button>
  );
};

export default DeletePhoneBtn;
