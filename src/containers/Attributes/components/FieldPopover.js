import React from 'react';
import PropTypes from 'prop-types';
import {
    Popover,
    PopoverArrow, PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger, Radio, RadioGroup, VStack
} from '@chakra-ui/react';
import { VEGA_DATA_TYPES } from '../../../redux/chartConfig/const';

export const FieldPopover = ({ button, onChange, value }) => (
    <Popover
        variant="responsive"
    >
        <PopoverTrigger>
            {button}
        </PopoverTrigger>
        <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Choose Vega data type</PopoverHeader>
            <PopoverBody>
                <RadioGroup onChange={onChange} value={value}>
                    <VStack align="start">
                        <Radio value={VEGA_DATA_TYPES.QUANTITATIVE}>Quantitative</Radio>
                        <Radio value={VEGA_DATA_TYPES.ORDINAL}>Ordinal</Radio>
                        <Radio value={VEGA_DATA_TYPES.NOMINAL}>Nominal</Radio>
                        <Radio value={VEGA_DATA_TYPES.TEMPORAL}>Temporal</Radio>
                    </VStack>
                </RadioGroup>
            </PopoverBody>
        </PopoverContent>
    </Popover>
);

FieldPopover.propTypes = {
    button: PropTypes.element.isRequired,
    value: PropTypes.oneOf(Object.values(VEGA_DATA_TYPES)).isRequired,
    onChange: PropTypes.func.isRequired
};
