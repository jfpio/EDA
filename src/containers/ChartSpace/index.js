import React from 'react';
import { Flex } from '@chakra-ui/react';
import { VegaLite } from 'react-vega';
import { useSelector } from 'react-redux';
import { pipe } from 'ramda';
import { rowsSelector } from '../../redux/sourceData/selectors';

export const ChartSpace = () => {
    const rows = useSelector(rowsSelector);
    const spec = {
        width: 400,
        height: 400,
        mark: 'circle',
        encoding: {
            x: { field: 'Title', type: 'ordinal' },
            y: { field: 'IMDB Rating', type: 'quantitative' }
        },
        data: { name: 'table' } // note: vega-lite data attribute is a plain object instead of an array
    };

    const data = {
        table: rows
    };

    const deepClone = pipe(JSON.stringify, JSON.parse); // TODO I don't know why, but without this vega don't work for data from redux

    return (
        <Flex direction="column" overflow="auto">
            <VegaLite spec={spec} data={deepClone(data)} />
        </Flex>
    );
};
