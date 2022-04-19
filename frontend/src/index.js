import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  // semua aplikasi akan di buat di dalam provider
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
