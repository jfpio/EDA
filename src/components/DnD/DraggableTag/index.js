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
    grow,
    onDropOutsideDropzone
}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: itemTypeKey,
        item: { tagId },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        }),
        end: (item, monitor) => {
            const { tagId } = item;
            const didDrop = monitor.didDrop();
            if (!didDrop) {
                onDropOutsideDropzone(tagId);
            }
        }
    }), [tagId, itemTypeKey]);

    return (
        <Tag // TODO mofidy to Box and add tests add boxshadow
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
    grow: PropTypes.bool,
    onDropOutsideDropzone: PropTypes.func
};

DraggableTag.defaultProps = {
    color: 'gray',
    draggingColor: 'cyan',
    grow: false,
    onDropOutsideDropzone: () => {}
};
