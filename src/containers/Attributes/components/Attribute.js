import React from 'react';
import PropTypes from 'prop-types';
import { DnDItemTypes } from '../../../DnD';
import { DraggableTag } from '../../../components/DnD/DraggableTag';
import { FieldPopover } from './FieldPopover';
import { VEGA_DATA_TYPES } from '../../../redux/vegaEncoding/const';

export const Attribute = ({
    name,
    fieldType,
    onChange
}) => (
    <DraggableTag
        tagId={name}
        itemTypeKey={DnDItemTypes.ATTRIBUTE}
        icon={(
            <FieldPopover
                value={fieldType}
                onChange={onChange}
            />
        )}
    >
        {name}
    </DraggableTag>
);

Attribute.propTypes = {
    name: PropTypes.string.isRequired,
    fieldType: PropTypes.oneOf(Object.values(VEGA_DATA_TYPES)).isRequired,
    onChange: PropTypes.func.isRequired
};
