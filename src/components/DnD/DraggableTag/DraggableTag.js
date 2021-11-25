import React from 'react';
import PropTypes from 'prop-types';
import {
    Tag, TagLabel, TagLeftIcon, TagRightIcon
} from '@chakra-ui/react';
import { useDrag } from 'react-dnd';
import { isEmpty } from 'ramda';
import { DnDItemTypes } from '../../../DnD';

export const DraggableTag = ({
    tagId,
    label,
    color,
    draggingColor,
    itemTypeKey,
    leftIcon,
    rightIcon
}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: itemTypeKey,
        item: { tagId },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }), [tagId, itemTypeKey]);

    return (
        <Tag
            ref={drag}
            key={tagId}
            colorScheme={isDragging ? draggingColor : color}
        >
            {!isEmpty(leftIcon) && (<TagLeftIcon as={leftIcon} />)}
            <TagLabel>
                {label}
            </TagLabel>
            {!isEmpty(rightIcon) && (<TagRightIcon as={leftIcon} />)}
        </Tag>
    );
};

DraggableTag.propTypes = {
    tagId: PropTypes.string.isRequired,
    label: PropTypes.string,
    color: PropTypes.string,
    draggingColor: PropTypes.string,
    itemTypeKey: PropTypes.oneOf(Object.values(DnDItemTypes)).isRequired,
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string
};

DraggableTag.defaultProps = {
    label: '',
    color: 'gray',
    draggingColor: 'cyan',
    leftIcon: '',
    rightIcon: ''
};
