import React from 'react';
import PropTypes from 'prop-types';
import {
    IconButton,
    Popover,
    PopoverArrow, PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger, Radio, RadioGroup, VStack
} from '@chakra-ui/react';
import { AtSignIcon, HamburgerIcon, TimeIcon } from '@chakra-ui/icons';
import { VEGA_DATA_TYPES } from '../../../redux/vegaEncoding/const';

export const FieldPopover = ({ value, onChange }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const open = () => setIsOpen(!isOpen);
    const close = () => setIsOpen(false);

    const getIcon = (type) => {
        switch (type) {
            case VEGA_DATA_TYPES.TEMPORAL:
                return <TimeIcon />;
            case VEGA_DATA_TYPES.QUANTITATIVE:
                return <HamburgerIcon />;
            case VEGA_DATA_TYPES.NOMINAL:
            default:
                return <AtSignIcon />;
        }
    };
    return (
        <Popover
            variant="responsive"
            isOpen={isOpen}
            onClose={close}
            autoFocus={false}
            returnFocusOnClose={false}
        >
            <PopoverTrigger>
                <IconButton
                    aria-label="Choose type of field"
                    icon={getIcon(value)}
                    size="xs"
                    background="white"
                    onClick={() => open()}
                />
            </PopoverTrigger>
            <PopoverContent style={!isOpen && ({ display: 'none' })}>
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
};

FieldPopover.propTypes = {
    value: PropTypes.oneOf(Object.values(VEGA_DATA_TYPES)).isRequired,
    onChange: PropTypes.func.isRequired
};
