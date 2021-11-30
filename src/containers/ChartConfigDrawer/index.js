import React from 'react';
import { Stack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { xFieldSelector, yFieldSelector } from '../../redux/chartConfig/selectors';
import { setField } from '../../redux/chartConfig/actions';
import { ENCODING_FIELDS, MARKS_FIELDS } from '../../redux/chartConfig/const';
import { FieldsColumn } from './components/FieldsColumn';

export const ChartConfigDrawer = () => {
    const dispatch = useDispatch();
    const xField = useSelector(xFieldSelector);
    const yField = useSelector(yFieldSelector);

    const columns = [
        {
            label: 'Encoding',
            fields: [{ id: ENCODING_FIELDS.X, label: 'X field', value: xField },
                { id: ENCODING_FIELDS.Y, label: 'Y field', value: yField },
                { id: ENCODING_FIELDS.ROW, label: 'Row', value: null },
                { id: ENCODING_FIELDS.COLUMN, label: 'Column', value: null }]
        },
        {
            label: 'Marks',
            fields: [{ id: MARKS_FIELDS.SIZE, label: 'Size', value: null },
                { id: MARKS_FIELDS.COLOR, label: 'Color', value: null },
                { id: MARKS_FIELDS.SHAPE, label: 'Shape', value: null },
                { id: MARKS_FIELDS.DETAIL, label: 'Detail', value: null },
                { id: MARKS_FIELDS.TEXT, label: 'Text', value: null }]
        }
    ];

    return (
        <Stack w="full" h="full" p={2}>
            {
                columns.map(({ fields, label }) => (
                    <FieldsColumn
                        onDrop={(fieldId, tagId) => dispatch(setField(fieldId, tagId))}
                        fields={fields}
                        label={label}
                    />
                ))
            }
        </Stack>
    );
};

