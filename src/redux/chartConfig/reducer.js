import { createReducer } from '@reduxjs/toolkit';
import { SET_FIELD } from './const';

const initialState = {
    x: null,
    y: null
};

export const CHART_CONFIG_REDUCER_NAME = 'chartConfigReducer';
export const chartConfigReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_FIELD, (state, { field, attributeName }) => {
            state[field] = attributeName;
        });
});
