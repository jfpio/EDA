import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureAppStore } from './configureStore';

const render = (
    ui,
    reducer = {},
    renderOptions
) => {
    // eslint-disable-next-line react/prop-types
    const Wrapper = ({ children }) => <Provider store={configureAppStore(reducer)}>{children}</Provider>;

    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
