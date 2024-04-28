import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';
import App from './App'; 
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

let persistor = persistStore(store);

ReactDOM.render( // Use ReactDOM.render() instead of createRoot
  <Provider store={store}>
    <PersistGate persistor = {persistor}>
    <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);