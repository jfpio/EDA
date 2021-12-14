import React from 'react';
import { Stack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setField } from '../../redux/vegaEncoding/actions';
import { ENCODING_FIELDS, FIELDS_TYPES, MARKS_FIELDS } from '../../redux/vegaEncoding/const';
import { FieldsColumn } from './components/FieldsColumn';
import {
    encodingFieldsSelector, marksFieldsSelector
} from '../../redux/vegaEncoding/selectors';

export const ChartConfigDrawer = () => {
    const dispatch = useDispatch();
    const encodingFields = useSelector(encodingFieldsSelector);
    const marksFields = useSelector(marksFieldsSelector);
    const columns = [
        {
            id: FIELDS_TYPES.ENCODING,
            label: 'Encoding',
            fields: [{ id: ENCODING_FIELDS.X, label: 'X field', value: encodingFields[ENCODING_FIELDS.X] },
                { id: ENCODING_FIELDS.Y, label: 'Y field', value: encodingFields[ENCODING_FIELDS.Y] },
                { id: ENCODING_FIELDS.ROW, label: 'Row', value: encodingFields[ENCODING_FIELDS.ROW] },
                { id: ENCODING_FIELDS.COLUMN, label: 'Column', value: encodingFields[ENCODING_FIELDS.COLUMN] }]
        },
        {
            id: FIELDS_TYPES.MARKS,
            label: 'Marks',
            fields: [{ id: MARKS_FIELDS.SIZE, label: 'Size', value: marksFields[MARKS_FIELDS.SIZE] },
                { id: MARKS_FIELDS.COLOR, label: 'Color', value: marksFields[MARKS_FIELDS.COLOR] },
                { id: MARKS_FIELDS.SHAPE, label: 'Shape', value: marksFields[MARKS_FIELDS.SHAPE] },
                { id: MARKS_FIELDS.DETAIL, label: 'Detail', value: marksFields[MARKS_FIELDS.DETAIL] },
                { id: MARKS_FIELDS.TEXT, label: 'Text', value: marksFields[MARKS_FIELDS.TEXT] }]
        }
    ];

    return (
        <Stack w="full" h="full" p={2}>
            {
                columns.map(({ id, fields, label }) => (
                    <FieldsColumn
                        key={label}
                        onDrop={(fieldId, tagId) => dispatch(setField(id, fieldId, tagId))}
                        fields={fields}
                        label={label}
                    />
                ))
            }
        </Stack>
    );
};

