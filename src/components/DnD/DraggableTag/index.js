import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from '@chakra-ui/react';
import { useDrag } from 'react-dnd';

export const DraggableTag = ({
    tagId,
    children,
    color,
    draggingColor,
    itemTypeKey
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
            {children}
        </Tag>
    );
};

DraggableTag.propTypes = {
    tagId: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    draggingColor: PropTypes.string,
    itemTypeKey: PropTypes.string.isRequired
};

DraggableTag.defaultProps = {
    color: 'gray',
    draggingColor: 'cyan'
};
