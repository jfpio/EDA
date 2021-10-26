import React from 'react';
import {
    ChakraProvider, theme, Flex, GridItem, Grid
} from '@chakra-ui/react';
import { Box } from './components/Box';
import { Header } from './containers/Header';
import { Footer } from './containers/Footer';

const App = () => (
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
                <Box />
                <Box />
                <GridItem gridColumn="1 / 3">
                    <Footer />
                </GridItem>
            </Grid>
        </Flex>
    </ChakraProvider>
);

export default App;
