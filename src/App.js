import React from 'react';
import {
    ChakraProvider, theme
} from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { configureAppStore } from './configureStore';
import { rootReducer } from './rootReducer';
import { MainView } from './containers/MainView/MainView';

const App = () => (
    <Provider store={configureAppStore(rootReducer)}>
        <ChakraProvider theme={theme}>
            <DndProvider backend={HTML5Backend}>
                <MainView />
            </DndProvider>
        </ChakraProvider>
    </Provider>
);

export default App;
