import React from 'react';
import {
    ChakraProvider, theme, Flex, GridItem, Grid
} from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { Header } from './containers/Header';
import { Footer } from './containers/Footer';
import { DataTable } from './containers/DataTable';
import { configureAppStore } from './configureStore';
import { rootReducer } from './rootReducer';
import { MetaDrawer } from './containers/MetaDrawer';

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
                    <MetaDrawer />
                    <DataTable />
                    <GridItem gridColumn="1 / 3">
                        <Footer />
                    </GridItem>
                </Grid>
            </Flex>
        </ChakraProvider>
    </Provider>
);

export default App;
