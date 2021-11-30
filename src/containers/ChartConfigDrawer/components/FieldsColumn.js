import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/react';
import { Field } from './Field';

export const FieldsColumn = ({ fields, onDrop, label }) => (
    <Box p={3} borderWidth="1px" borderRadius="lg">
        <Text fontSize="lg" fontWeight={600}>{label}</Text>
        {
            fields.map(({ id, label, value }) => (
                <Field fieldId={id} label={label} value={value} onDrop={onDrop} />
            ))
        }
    </Box>

);

FieldsColumn.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDrop: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
};
