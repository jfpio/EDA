import React from 'react';
import { Stack, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { isNil } from 'ramda';
import { DnDItemTypes } from '../../DnD';
import { xFieldSelector, yFieldSelector } from '../../redux/chartConfig/selectors';
import { setField } from '../../redux/chartConfig/actions';
import { ENCODING_FIELDS } from '../../redux/chartConfig/const';
import { Dropzone } from '../../components/DnD/DropZone';
import { DraggableTag } from '../../components/DnD/DraggableTag';

export const ChartConfigDrawer = () => {
    const dispatch = useDispatch();
    const xField = useSelector(xFieldSelector);
    const yField = useSelector(yFieldSelector);

    const fields = [
        { id: ENCODING_FIELDS.X, label: 'X field', value: xField },
        { id: ENCODING_FIELDS.Y, label: 'Y field', value: yField }
    ];

    return (
        <Stack w="full" h="full" p={2}>
            {
                fields.map(({ id: fieldId, value }) => (
                    <Dropzone
                        acceptedItemTypeKeys={[DnDItemTypes.ATTRIBUTE]}
                        onDrop={({ tagId }) => dispatch(setField(fieldId, tagId))}
                    >
                        {isNil(value) ? (<Text>Drop attribute here</Text>) : (
                            <DraggableTag
                                itemTypeKey={DnDItemTypes.ATTRIBUTE}
                                tagId={value}
                                grow
                                onDropOutsideDropzone={() => dispatch(setField(fieldId, null))}
                            >
                                {value}
                            </DraggableTag>
                        )}
                    </Dropzone>
                ))
            }
        </Stack>
    );
};

