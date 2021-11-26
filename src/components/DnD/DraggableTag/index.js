import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from '@chakra-ui/react';
import { useDrag } from 'react-dnd';

export const DraggableTag = ({
    tagId,
    children,
    color,
    draggingColor,
    itemTypeKey,
    grow
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
            flexGrow={grow ? 1 : 0}
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
    itemTypeKey: PropTypes.string.isRequired,
    grow: PropTypes.bool
};

DraggableTag.defaultProps = {
    color: 'gray',
    draggingColor: 'cyan',
    grow: false
};
