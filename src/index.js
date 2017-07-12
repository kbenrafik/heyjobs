import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore'
import {dispatchLoadJobs} from './actions'
import { Provider } from 'react-redux'

const store = configureStore()

store.dispatch(dispatchLoadJobs())

ReactDOM.render(
    <Provider store={store}>
        <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
