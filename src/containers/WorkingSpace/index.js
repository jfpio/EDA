import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { DataTable } from '../DataTable';
import { VegaCharts } from '../../components/VegaCharts';
import { isDatatableViewSelector } from './selectors';
import { rowsSelector } from '../../redux/sourceData/selectors';

export const WorkingSpace = () => {
    const isDataTableView = useSelector(isDatatableViewSelector);
    const rows = useSelector(rowsSelector);

    return (
        <Flex direction="column" overflow="auto">
            {
                isDataTableView ? <DataTable /> : <VegaCharts data={rows} />
            }
        </Flex>
    );
};
