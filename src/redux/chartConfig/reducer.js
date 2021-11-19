import { createReducer } from '@reduxjs/toolkit';
import { ENCODING_FIELDS, SET_FIELD } from './const';

const initialState = {
    [ENCODING_FIELDS.X]: null,
    [ENCODING_FIELDS.Y]: null
};

export const CHART_CONFIG_REDUCER_NAME = 'chartConfigReducer';
export const chartConfigReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_FIELD, (state, { field, attributeName }) => {
            state[field] = attributeName;
        });
});
