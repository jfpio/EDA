import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { DataTable } from './containers/DataTable';
import { isDatatableViewSelector } from './selectors';
import { Charts } from './containers/Charts';

export const WorkingSpace = () => {
    const isDataTableView = useSelector(isDatatableViewSelector);

    return (
        <Flex direction="column" overflow="auto">
            {
                isDataTableView ? <DataTable /> : <Charts />
            }
        </Flex>
    );
};
