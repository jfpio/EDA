import { GET_JSON_DATA_REQUEST, GET_JSON_DATA_SUCCESS, SET_COLUMNS } from './const';

export const setColumns = (columnsNames) => ({
    type: SET_COLUMNS,
    columnsNames
});

export const getJsonDataRequest = (url) => ({
    type: GET_JSON_DATA_REQUEST,
    url
});

export const getJsonDataSuccess = (jsonParsed) => ({
    type: GET_JSON_DATA_SUCCESS,
    jsonParsed
});
