import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({ counter, todos });

// console.log(rootReducer);

export default rootReducer;
