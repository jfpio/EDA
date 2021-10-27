import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { configureAppStore } from './configureStore';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={configureAppStore()}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
