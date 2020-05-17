import React from 'react';

const Modal = ({ modalRef }) => {
  return (
    <>
      <div className="modal" ref={modalRef}>
        <i className="fas fa-exclamation-circle" />
        <span>전화번호 형식에 맞지 않습니다.</span>
        <span>띄어쓰기 없이 번호를 입력해주세요.</span>
      </div>
      {/* <div className="dim" /> */}
    </>
  );
};

export default Modal;
