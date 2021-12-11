import React from 'react';
import { Button, Stack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { Attributes } from '../Attributes';
import { getJsonDataRequest } from '../../redux/sourceData/actions';
import { toggleView } from '../WorkingSpace/actions';

export const DataSourceDrawer = () => {
    const dispatch = useDispatch();

    return (
        <Stack w="full" h="full" p={2}>
            <Button onClick={() => dispatch(toggleView())} colorScheme="teal">
                Switch View
            </Button>
            <Button onClick={() => dispatch(getJsonDataRequest('/movies.json'))}>
                Load Data
            </Button>
            <Attributes />
        </Stack>
    );
};
