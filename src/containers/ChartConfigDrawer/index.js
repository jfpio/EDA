import React from 'react';
import { Stack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { xFieldSelector, yFieldSelector } from '../../redux/chartConfig/selectors';
import { setField } from '../../redux/chartConfig/actions';
import { ENCODING_FIELDS } from '../../redux/chartConfig/const';
import { FieldsColumn } from './components/FieldsColumn';

export const ChartConfigDrawer = () => {
    const dispatch = useDispatch();
    const xField = useSelector(xFieldSelector);
    const yField = useSelector(yFieldSelector);

    const fields = [
        { id: ENCODING_FIELDS.X, label: 'X field', value: xField },
        { id: ENCODING_FIELDS.Y, label: 'Y field', value: yField },
        { id: ENCODING_FIELDS.ROW, label: 'Row', value: null },
        { id: ENCODING_FIELDS.COLUMN, label: 'Column', value: null }
    ];

    return (
        <Stack w="full" h="full" p={2}>
            <FieldsColumn onDrop={(fieldId, tagId) => dispatch(setField(fieldId, tagId))} fields={fields} />
        </Stack>
    );
};

