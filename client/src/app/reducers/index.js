import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import imageReducer from './imageReducer';
const rootReducer = combineReducers({
  event: eventReducer,
  image:imageReducer,
});

export default rootReducer;
