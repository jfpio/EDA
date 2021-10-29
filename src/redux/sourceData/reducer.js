import { createReducer } from '@reduxjs/toolkit';
import {
    ADD_COLUMN_TO_VISIBLE_COLUMNS_NAMES,
    REMOVE_COLUMN_FROM_VISIBLE_COLUMNS_NAMES,
    SET_COLUMNS,
    SET_ROWS
} from './const';

const initialState = {
    columns: [],
    visibleColumns: [],
    rows: []
};

export const SOURCE_DATA_REDUCER_NAME = 'sourceDataReducer';
export const sourceDataReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_COLUMNS, (state, { columnsNames }) => {
            state.columns = columnsNames;
            state.visibleColumns = columnsNames;
        })
        .addCase(SET_ROWS, (state, { rows }) => {
            state.rows = rows.slice(0, 100);
        })
        .addCase(ADD_COLUMN_TO_VISIBLE_COLUMNS_NAMES, (state, { columnName }) => {
            state.visibleColumns.push(columnName);
        })
        .addCase(REMOVE_COLUMN_FROM_VISIBLE_COLUMNS_NAMES, (state, { columnName }) => {
            state.visibleColumns = state.visibleColumns.filter((name) => name !== columnName);
        });
});
