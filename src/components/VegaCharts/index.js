import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/react';
import { VegaLite } from 'react-vega';
import { VEGA_DATA_TYPES } from '../../redux/vegaEncoding/const';
import VegaSpecificationCreator from '../../redux/vegaEncoding/vegaSpecificationCreator/VegaSpecificationCreator';

export const VegaCharts = ({
    data, encodingFields
}) => {
    const specificationCreator = new VegaSpecificationCreator(
        { name: 'table' },
        'circle',
        'pad'
    );

    specificationCreator.loadEncodingChannels(encodingFields);

    return (
        <Flex direction="column" overflow="auto" justify="center" grow={1}>
            <VegaLite
                spec={specificationCreator.getVegaSpecification()}
                data={{ table: specificationCreator.isNoEncodedChannels() ? [] : data }}
            />
        </Flex>
    );
};

const fieldShape = {
    id: PropTypes.string,
    type: PropTypes.oneOf(Object.values(VEGA_DATA_TYPES))
};

VegaCharts.propTypes = {
    data: PropTypes.array,
    encodingFields: PropTypes.shape(fieldShape)
};

VegaCharts.defaultProps = {
    data: [{}],
    encodingFields: {}
};
