import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import donationReducer from './reducers/donationReducer';
import imageReducer from './reducers/imageReducer';
import { userReducer } from './reducers/userReducer';

const store = configureStore({
  reducer: {
    // donate: donationReducer,
    // auth: authReducer,
    image: imageReducer,
    user: userReducer,

  },
});

export default store;

