import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/react';
import { isNil } from 'ramda';
import { Dropzone } from '../../../components/DnD/DropZone';
import { DnDItemTypes } from '../../../DnD';
import { DraggableTag } from '../../../components/DnD/DraggableTag';

export const Field = ({
    fieldId, label, value, onDrop
}) => (
    <Box p={1} key={fieldId}>
        <Text fontSize="sm" fontWeight={600}>{label}</Text>
        <Dropzone
            acceptedItemTypeKeys={[DnDItemTypes.ATTRIBUTE]}
            onDrop={({ tagId }) => onDrop(fieldId, tagId)}
        >
            {isNil(value) ? (
                <Text
                    fontSize="xs"
                    color="gray.500"
                >
                    Drop attribute here
                </Text>
            ) : (
                <DraggableTag
                    itemTypeKey={DnDItemTypes.ATTRIBUTE}
                    tagId={value}
                    grow
                    onDropOutsideDropzone={() => onDrop(fieldId, null)}
                >
                    {value}
                </DraggableTag>
            )}
        </Dropzone>
    </Box>
);

Field.propTypes = {
    fieldId: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onDrop: PropTypes.func.isRequired
};

Field.defaultProps = {
    value: null
};
