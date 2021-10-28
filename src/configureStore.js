import { createEpicMiddleware } from 'redux-observable';
import { configureStore } from '@reduxjs/toolkit';
import { rootEpic } from './rootEpic';

export const configureAppStore = (reducer) => {
    const epicMiddleware = createEpicMiddleware();

    const store = configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware)
    });
    epicMiddleware.run(rootEpic);

    return store;
};

