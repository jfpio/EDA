import React from 'react';
import PropTypes from 'prop-types';
import { HStack, Text } from '@chakra-ui/react';
import { useDrag } from 'react-dnd';

export const DraggableTag = ({
    tagId,
    children,
    icon,
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
        <HStack
            ref={drag}
            key={tagId}
            py={1}
            px={2}
            borderRadius="lg"
            shadow="lg"
            borderWidth={1}
            bg={isDragging ? draggingColor : color}
            flexGrow={grow ? 1 : 0}
            spacing={2}
        >
            {icon}
            <Text
                fontSize="sm"
                color={textColor}
            >
                {children}
            </Text>
        </HStack>
    );
};

DraggableTag.propTypes = {
    tagId: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    icon: PropTypes.element,
    color: PropTypes.string,
    draggingColor: PropTypes.string,
    itemTypeKey: PropTypes.string.isRequired,
    onDropOutsideDropzone: PropTypes.func,
    textColor: PropTypes.string,
    grow: PropTypes.bool
};

DraggableTag.defaultProps = {
    icon: null,
    color: 'white',
    draggingColor: 'cyan.100',
    textColor: 'black',
    onDropOutsideDropzone: () => {},
    grow: true
};
