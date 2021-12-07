import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@chakra-ui/react';
import { AtSignIcon, HamburgerIcon, TimeIcon } from '@chakra-ui/icons';
import { DnDItemTypes } from '../../../DnD';
import { DraggableTag } from '../../../components/DnD/DraggableTag';
import { FieldPopover } from './FieldPopover';
import { VEGA_DATA_TYPES } from '../../../redux/chartConfig/const';

export const Attribute = ({
    name,
    fieldType,
    onChange
}) => {
    const getIcon = (fieldType) => {
        switch (fieldType) {
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
        <DraggableTag
            tagId={name}
            itemTypeKey={DnDItemTypes.ATTRIBUTE}
            icon={(
                <FieldPopover
                    value={fieldType}
                    button={(
                        <IconButton
                            aria-label="Choose type of field"
                            icon={getIcon(fieldType)}
                            size="xs"
                            background="white"
                        />
                    )}
                    onChange={onChange}
                />
            )}
        >
            {name}
        </DraggableTag>
    );
};

Attribute.propTypes = {
    name: PropTypes.string.isRequired,
    fieldType: PropTypes.oneOf(Object.values(VEGA_DATA_TYPES)).isRequired,
    onChange: PropTypes.func.isRequired
};
