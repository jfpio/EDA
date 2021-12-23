import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/react';
import { VegaLite } from 'react-vega';
import { isNil } from 'ramda';
import { ENCODING_FIELDS_TO_CHANNEL_MAPPING, VEGA_DATA_TYPES } from '../../redux/vegaEncoding/const';
import VegaSpecificationCreator from '../../utils/vegaSpecificationCreator/VegaSpecificationCreator';

export const VegaCharts = ({
    data, encodingFields
}) => {
    const specificationCreator = new VegaSpecificationCreator(
        { name: 'table' },
        'circle',
        'pad'
    );

    const notNullEncodingChannels = Object.entries(encodingFields)
        .filter(([, field]) => !isNil(field?.id) && !isNil(field?.type));

    notNullEncodingChannels.forEach(([channelName, { id, type }]) => specificationCreator.loadEncodingChannel(id, type, ENCODING_FIELDS_TO_CHANNEL_MAPPING[channelName]));

    return (
        <Flex direction="column" overflow="auto" justify="center" grow={1}>
            <VegaLite
                spec={specificationCreator.getVegaSpecification()}
                data={{ table: notNullEncodingChannels.length === 0 ? [] : data }}
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
