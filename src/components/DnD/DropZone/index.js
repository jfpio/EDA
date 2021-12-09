import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
import { useDrop } from 'react-dnd';

export const Dropzone = ({
    children,
    acceptedItemTypeKeys,
    onDrop,
    color,
    onDragColor,
    isOverColor
}) => {
    const [{ isOver, canDrop }, drop] = useDrop(
        () => ({
            accept: acceptedItemTypeKeys,
            drop: onDrop,
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop()
            })
        })
    );

    const boxColor = () => {
        if (canDrop && isOver) {
            return isOverColor;
        }
        if (canDrop && !isOver) {
            return onDragColor;
        }
        return color;
    };

    return (
        <Box
            display="flex"
            ref={drop}
            bgColor={boxColor}
            w="100%"
            p={1}
            borderRadius="lg"
            minHeight={10}
            alignItems="center"
        >
            {children}
        </Box>

    );
};

Dropzone.propTypes = {
    children: PropTypes.node,
    acceptedItemTypeKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
    onDrop: PropTypes.func,
    color: PropTypes.string,
    onDragColor: PropTypes.string,
    isOverColor: PropTypes.string
};

Dropzone.defaultProps = {
    children: null,
    onDrop: () => {},
    color: 'gray.50',
    onDragColor: 'green.100',
    isOverColor: 'green.300'
};
