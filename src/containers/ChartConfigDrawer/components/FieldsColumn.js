import React from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, Text } from '@chakra-ui/react';
import { isNil } from 'ramda';
import { Dropzone } from '../../../components/DnD/DropZone';
import { DnDItemTypes } from '../../../DnD';
import { DraggableTag } from '../../../components/DnD/DraggableTag';
import { ENCODING_FIELDS } from '../../../redux/chartConfig/const';
import { givenTypeOrNull } from '../../../utils/propTypes';

export const FieldsColumn = ({ fields, onDrop }) => (
    <Stack>
        {
            fields.map(({ id: fieldId, label, value }) => (
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

            ))
        }
    </Stack>

);

FieldsColumn.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOf(Object.values(ENCODING_FIELDS)),
        label: PropTypes.string,
        value: givenTypeOrNull(PropTypes.string)
    })).isRequired,
    onDrop: PropTypes.func.isRequired
};
