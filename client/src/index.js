import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from './app/store';
import App from './App';
import './index.css';
import './i18n';

let persistor = persistStore(store);



ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor = {persistor}>
    <PersistGate persistor = {persistor}>
    <App />
    </PersistGate>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
