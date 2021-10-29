import React from 'react';
import PropTypes from 'prop-types';
import { Tag, TagLabel } from '@chakra-ui/react';

export const ColumnTag = ({ active, label, onClick }) => (
    <Tag key={label} colorScheme={active ? 'cyan' : 'gray'} onClick={onClick}>
        <TagLabel>
            {label}
        </TagLabel>
    </Tag>
);

ColumnTag.propTypes = {
    active: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func
};

ColumnTag.defaultProps = {
    active: false,
    label: '',
    onClick: () => {}
};
