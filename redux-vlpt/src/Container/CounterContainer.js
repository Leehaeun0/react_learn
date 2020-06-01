import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { setDiff, increase, decrease } from '../Module/counter';
import Counter from '../Components/Counter';

const CounterContainer = () => {
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual,
  );

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (_diff) => dispatch(setDiff(_diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onSetDiff={onSetDiff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};

export default CounterContainer;
