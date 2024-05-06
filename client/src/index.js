import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';
import App from './App'; 



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);