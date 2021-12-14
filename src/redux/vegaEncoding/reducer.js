import { createReducer } from '@reduxjs/toolkit';
import {
    ENCODING_FIELDS, FIELDS_TYPES, MARKS_FIELDS, SET_FIELD
} from './const';

const initialState = {
    [FIELDS_TYPES.ENCODING]: {
        [ENCODING_FIELDS.X]: null,
        [ENCODING_FIELDS.Y]: null,
        [ENCODING_FIELDS.COLUMN]: null,
        [ENCODING_FIELDS.ROW]: null
    },
    [FIELDS_TYPES.MARKS]: {
        [MARKS_FIELDS.SIZE]: null,
        [MARKS_FIELDS.COLOR]: null,
        [MARKS_FIELDS.SHAPE]: null,
        [MARKS_FIELDS.DETAIL]: null,
        [MARKS_FIELDS.TEXT]: null
    }

};

export const VEGA_ENCODING_REDUCER_NAME = 'vegaEncodingReducer';
export const vegaEncodingReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_FIELD, (state, { fieldType, fieldId, attributeId }) => {
            state[fieldType][fieldId] = attributeId;
        });
});
