import { createReducer } from '@reduxjs/toolkit';
import { ENCODING_FIELDS, SET_FIELD } from './const';

const initialState = {
    [ENCODING_FIELDS.X]: null,
    [ENCODING_FIELDS.Y]: null
};

export const VEGA_ENCODING_REDUCER_NAME = 'vegaEncodingReducer';
export const vegaEncodingReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_FIELD, (state, { fieldId, attributeId }) => {
            state[fieldId] = attributeId;
        });
});
