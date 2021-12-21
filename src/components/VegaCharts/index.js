import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/react';
import { VegaLite } from 'react-vega';
import { ENCODING_FIELDS, VEGA_DATA_TYPES } from '../../redux/vegaEncoding/const';

export const VegaCharts = ({
    data, encodingFields
}) => {
    const spec = {
        autosize: { type: 'pad' },
        mark: 'circle',
        encoding: {
            x: { field: encodingFields[ENCODING_FIELDS.X]?.id, type: encodingFields[ENCODING_FIELDS.X]?.type },
            y: { field: encodingFields[ENCODING_FIELDS.Y]?.id, type: encodingFields[ENCODING_FIELDS.Y]?.type }
        },
        data: { name: 'table' }
    };

    const chartData = {
        table: data
    };

    return (
        <Flex direction="column" overflow="auto" justify="center" grow={1}>
            <VegaLite spec={spec} data={chartData} />
        </Flex>
    );
};

const fieldShape = {
    id: PropTypes.string,
    type: PropTypes.oneOfType(Object.values(VEGA_DATA_TYPES))
};

VegaCharts.propTypes = {
    data: PropTypes.array.isRequired,
    encodingFields: PropTypes.objectOf(fieldShape).isRequired
};

VegaCharts.defaultProps = {
};
