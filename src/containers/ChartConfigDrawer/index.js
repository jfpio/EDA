import React from 'react';
import { Stack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { isNil } from 'ramda';
import { DnDItemTypes } from '../../DnD';
import { xFieldSelector } from '../../redux/chartConfig/selectors';
import { setField } from '../../redux/chartConfig/actions';
import { ENCODING_FIELDS } from '../../redux/chartConfig/const';
import { Dropzone } from '../../components/DnD/DropZone';
import { DraggableTag } from '../../components/DnD/DraggableTag';

export const ChartConfigDrawer = () => {
    const dispatch = useDispatch();
    const xField = useSelector(xFieldSelector);

    return (
        <Stack w="full" h="full" p={2}>

            <Dropzone
                acceptedItemTypeKeys={[DnDItemTypes.ATTRIBUTE]}
                onDrop={({ tagId }) => dispatch(setField(ENCODING_FIELDS.X, tagId))}
            >
                <DraggableTag
                    itemTypeKey={DnDItemTypes.ATTRIBUTE}
                    tagId={xField}
                    grow
                >
                    {isNil(xField) ? 'X' : xField }
                </DraggableTag>
            </Dropzone>
        </Stack>
    );
};

