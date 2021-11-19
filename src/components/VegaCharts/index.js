import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/react';
import { VegaLite } from 'react-vega';
import { pipe } from 'ramda';

export const VegaCharts = ({ data }) => {
    const spec = {
        width: 400,
        height: 400,
        mark: 'circle',
        encoding: {
            x: { field: 'Title', type: 'ordinal' },
            y: { field: 'IMDB Rating', type: 'quantitative' }
        },
        data: { name: 'table' }
    };

    const chartData = {
        table: data
    };

    const deepClone = pipe(JSON.stringify, JSON.parse); // TODO I don't know why, but without this vega don't work for data from redux

    return (
        <Flex direction="column" overflow="auto">
            <VegaLite spec={spec} data={deepClone(chartData)} />
        </Flex>
    );
};

VegaCharts.propTypes = {
    data: PropTypes.array
};

VegaCharts.defaultProps = {
    data: []
};
