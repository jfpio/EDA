import { createEpicMiddleware } from 'redux-observable';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { rootEpic } from './rootEpic';

export const configureAppStore = () => {
    const epicMiddleware = createEpicMiddleware();

    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware)
    });
    epicMiddleware.run(rootEpic);

    return store;
};

