import { createReducer } from '@reduxjs/toolkit';
import { SET_COLUMNS, SET_ROWS } from './const';

const initialState = {
    columns: [],
    rows: []
};

export const DATATABLE_REDUCER_NAME = 'datatableReducer';
export const datatableReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_COLUMNS, (state, { columnsNames }) => {
            state.columns = columnsNames;
        })
        .addCase(SET_ROWS, (state, { rows }) => {
            state.rows = rows.slice(0, 100);
        });
});
