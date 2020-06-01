import React from 'react';

const Counter = ({ number, diff, onSetDiff, onIncrease, onDecrease }) => {
  return (
    <>
      <h1>{number}</h1>
      <input
        type="number"
        min="1"
        value={diff}
        onChange={(e) => onSetDiff(+e.target.value)}
      />
      <button type="button" onClick={onIncrease}>
        +
      </button>
      <button type="button" onClick={onDecrease}>
        -
      </button>
    </>
  );
};

export default React.memo(Counter);
