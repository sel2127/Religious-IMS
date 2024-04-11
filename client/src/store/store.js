import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import imageReducer from './reducers/imageReducer';

const store = configureStore({
  reducer: {
    image: imageReducer,
    
    // other reducers...
  },
});

export default store;
