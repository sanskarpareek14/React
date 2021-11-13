import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import './index.css';
import './styles/navbar.css'
import App from './App';
import Reducer from './Reducer/Reducer'

const store = createStore(Reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);