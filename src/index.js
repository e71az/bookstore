import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './app/store';

const state = {
  book1: {
    title: 'hiii',
    category: 'ghgjh',
    ID: Math.random,
  },
  book2: {
    title: 'hiii',
    category: 'ghgjh',
    ID: Math.random,
  },
  book3: {
    title: 'hiii',
    category: 'ghgjh',
    ID: Math.random,
  },

};
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
