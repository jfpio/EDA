import React from 'react';
import PropTypes from 'prop-types';
import { Tag, TagLabel } from '@chakra-ui/react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../../DnD';

// eslint-disable-next-line no-unused-vars
export const AttributeTag = ({ active, label, onClick }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.ATTRIBUTE,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    return (
        <Tag ref={drag} key={label} colorScheme={isDragging ? 'cyan' : 'gray'} onClick={onClick}>
            <TagLabel>
                {label}
            </TagLabel>
        </Tag>
    );
};

AttributeTag.propTypes = {
    active: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func
};

AttributeTag.defaultProps = {
    active: false,
    label: '',
    onClick: () => {}
};
