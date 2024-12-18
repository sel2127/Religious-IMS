import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import donationReducer from './reducers/donationReducer'; // Add this import
import imageReducer from './reducers/imageReducer';
import {userReducer} from './reducers/userReducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import passwordReducer from './reducers/passwordReducer';
import feedbackReducer from './reducers/feedbackReducer';
import chatReducer from './reducers/chatReducer';


const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ['user'],
};

const reducers = combineReducers({
  auth: authReducer,
  donation: donationReducer, 
  user: userReducer,
  image: imageReducer,
  password: passwordReducer,
  feedback:feedbackReducer,
  chat: chatReducer,

});

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
  reducer: persistedReducer,
});

export default store;

