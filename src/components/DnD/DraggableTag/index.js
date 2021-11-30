import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/react';
import { useDrag } from 'react-dnd';

export const DraggableTag = ({
    tagId,
    children,
    color,
    draggingColor,
    textColor,
    itemTypeKey,
    onDropOutsideDropzone,
    grow
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
            p={1}
            borderRadius="lg"
            shadow="lg"
            borderWidth={1}
            bg={isDragging ? draggingColor : color}
            flexGrow={grow ? 1 : 0}
        >
            <Text
                fontSize="sm"
                color={textColor}
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
    onDropOutsideDropzone: PropTypes.func,
    textColor: PropTypes.string,
    grow: PropTypes.bool
};

DraggableTag.defaultProps = {
    color: 'white',
    draggingColor: 'cyan.100',
    textColor: 'black',
    onDropOutsideDropzone: () => {},
    grow: true
};
