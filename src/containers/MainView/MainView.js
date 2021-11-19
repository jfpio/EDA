import React from 'react';
import { Flex, Grid, GridItem } from '@chakra-ui/react';
import { Header } from '../Header';
import { DataSourceDrawer } from '../DataSourceDrawer';
import { WorkingSpace } from '../WorkingSpace';
import { Footer } from '../Footer';

export const MainView = () => (
    <Flex h="100vh" p={6}>
        <Grid
            gridTemplateRows="100px 1fr 50px"
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
);
