import { GET_JSON_DATA_REQUEST, SET_COLUMNS, SET_ROWS } from './const';

export const setColumns = (columnsNames) => ({
    type: SET_COLUMNS,
    columnsNames
});

export const setRows = (rows) => ({
    type: SET_ROWS,
    rows
});

export const getJsonDataRequest = (url) => ({
    type: GET_JSON_DATA_REQUEST,
    url
});
