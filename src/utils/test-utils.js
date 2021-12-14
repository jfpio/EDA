import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureAppStore } from '../configureStore';
import { rootReducer } from '../rootReducer';

export const renderWithRedux = (
    ui,
    {
        preloadedState,
        store = configureAppStore(rootReducer),
        ...renderOptions
    } = {}
) => {
    // eslint-disable-next-line react/prop-types
    const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};
