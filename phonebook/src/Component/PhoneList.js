import React from 'react';
import DeletePhoneBtn from './DeletePhoneBtn';
// import { reducer, initialState } from '../Reducer/Reducer';

const PhoneList = ({ bookState, dispatch }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const { bookState } = state;

  return (
    <ul className="info_list">
      {bookState.map(v => (
        <li key={v.id} className="info">
          <span>
            {v.name}&nbsp;&nbsp;&nbsp;{v.phone}
          </span>
          <DeletePhoneBtn id={v.id} dispatch={dispatch} />
        </li>
      ))}
    </ul>
  );
};

export default PhoneList;
