import { combineReducers } from 'redux';
import counter from './Counter';
import phone from './Phone';

const rootReducer = combineReducers({
  Counter: counter,
  Phone: phone,
});

export default rootReducer;
