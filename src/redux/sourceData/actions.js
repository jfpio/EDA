import {
    ADD_COLUMN_TO_VISIBLE_COLUMNS_NAMES,
    GET_JSON_DATA_REQUEST,
    REMOVE_COLUMN_FROM_VISIBLE_COLUMNS_NAMES,
    SET_COLUMNS,
    SET_ROWS
} from './const';

export const setColumns = (columnsNames) => ({
    type: SET_COLUMNS,
    columnsNames
});

export const addColumnToVisibleColumnNames = (columnName) => ({
    type: ADD_COLUMN_TO_VISIBLE_COLUMNS_NAMES,
    columnName
});

export const removeColumnFromVisibleColumnNames = (columnName) => ({
    type: REMOVE_COLUMN_FROM_VISIBLE_COLUMNS_NAMES,
    columnName
});

export const setRows = (rows) => ({
    type: SET_ROWS,
    rows
});

export const getJsonDataRequest = (url) => ({
    type: GET_JSON_DATA_REQUEST,
    url
});
