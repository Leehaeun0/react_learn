import { combineReducers } from 'redux';
import { PhoneReducer } from './Phone';

const rootReducer = combineReducers({
  Phone: PhoneReducer,
});

export default rootReducer;
