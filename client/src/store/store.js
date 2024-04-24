import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import imageReducer from './reducers/imageReducer';
import { userReducer } from './reducers/userReducer';

const store = configureStore({
  reducer: {
    image: imageReducer,
    user: userReducer,

    // other reducers...
  },
});

export default store;

