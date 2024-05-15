import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import imageReducer from './reducers/imageReducer';
import { userReducer } from './reducers/userReducer';
import feedbackReducer from './reducers/feedbackReducer';

const store = configureStore({
  reducer: {
    image: imageReducer,
    user: userReducer,
    feedback:feedbackReducer,

    // other reducers...
  },
});

export default store;

