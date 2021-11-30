import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/react';
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
        <Box
            ref={drag}
            key={tagId}
            flexGrow={grow ? 1 : 0}
            borderRadius="lg"
            overflow="wrap"
            p={1}
            shadow="lg"
            borderWidth={1}
            bg={isDragging ? draggingColor : color}
        >
            <Text
                fontSize="sm"
            >
                {children}
            </Text>
        </Box>
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
    color: 'white',
    draggingColor: 'cyan.100',
    grow: false,
    onDropOutsideDropzone: () => {}
};
