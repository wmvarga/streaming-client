import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import App from './components/App';
import rootReducer from './reducers';

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

const store = configureStore({
    reducer: rootReducer
});

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);