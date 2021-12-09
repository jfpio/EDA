import { createReducer } from '@reduxjs/toolkit';
import {
    ADD_COLUMN_TO_VISIBLE_COLUMNS_NAMES,
    REMOVE_COLUMN_FROM_VISIBLE_COLUMNS_NAMES,
    SET_ATTRIBUTE_TYPE,
    SET_COLUMNS,
    SET_ROWS
} from './const';
import { VEGA_DATA_TYPES } from '../chartConfig/const';

const initialState = {
    columns: [],
    visibleColumns: [],
    rows: [],
    attributes: {}
};

export const SOURCE_DATA_REDUCER_NAME = 'sourceDataReducer';
export const sourceDataReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_COLUMNS, (state, { columnsNames }) => {
            state.columns = columnsNames;
            state.visibleColumns = columnsNames;
            state.attributes = columnsNames.reduce((acc, name) => ({
                ...acc,
                [name]: { id: name, datatype: VEGA_DATA_TYPES.NOMINAL }
            }), {});
        })
        .addCase(SET_ROWS, (state, { rows }) => {
            state.rows = rows.slice(0, 100);
        })
        .addCase(ADD_COLUMN_TO_VISIBLE_COLUMNS_NAMES, (state, { columnName }) => {
            state.visibleColumns.push(columnName);
        })
        .addCase(REMOVE_COLUMN_FROM_VISIBLE_COLUMNS_NAMES, (state, { columnName }) => {
            state.visibleColumns = state.visibleColumns.filter((name) => name !== columnName);
        })
        .addCase(SET_ATTRIBUTE_TYPE, (state, { attributeId, newType }) => {
            state.attributes[attributeId].datatype = newType;
        });
});
