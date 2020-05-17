import React from 'react';

const DeletePhoneBtn = ({ id, dispatch }) => {
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
