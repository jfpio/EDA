import React from 'react';
import {
    ChakraProvider, theme, Flex, GridItem, Grid
} from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { Header } from './containers/Header';
import { Footer } from './containers/Footer';
import { configureAppStore } from './configureStore';
import { rootReducer } from './rootReducer';
import { WorkingSpace } from './containers/WorkingSpace';
import { DataSourceDrawer } from './containers/DataSourceDrawer';

const App = () => (
    <Provider store={configureAppStore(rootReducer)}>
        <ChakraProvider theme={theme}>
            <Flex h="100vh" p={6}>
                <Grid
                    gridTemplateRows="100px 1fr 100px"
                    templateColumns="200px 1fr"
                    gridGap={1}
                    width="100%"
                >
                    <GridItem gridColumn="1 / 3">
                        <Header />
                    </GridItem>
                    <DataSourceDrawer />
                    <WorkingSpace />
                    <GridItem gridColumn="1 / 3">
                        <Footer />
                    </GridItem>
                </Grid>
            </Flex>
        </ChakraProvider>
    </Provider>
);

export default App;
