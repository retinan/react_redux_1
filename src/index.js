import React from 'react';
import ReactDOM from 'react-dom';

// reducer import
import { createStore } from "redux";
import rootReducer from './store/modules';

// provider import
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// store reducer state view
const store = createStore(rootReducer);
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
