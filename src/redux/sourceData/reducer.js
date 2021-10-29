import { createReducer } from '@reduxjs/toolkit';
import { SET_COLUMNS, SET_ROWS } from './const';

const initialState = {
    columns: [],
    rows: []
};

export const SOURCE_DATA_REDUCER_NAME = 'sourceDataReducer';
export const sourceDataReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_COLUMNS, (state, { columnsNames }) => {
            state.columns = columnsNames;
        })
        .addCase(SET_ROWS, (state, { rows }) => {
            state.rows = rows.slice(0, 100);
        });
});
