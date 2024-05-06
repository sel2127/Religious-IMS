import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import donationReducer from './reducers/donationReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    donation: donationReducer,
  },
});

export default store;