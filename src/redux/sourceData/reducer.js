import { createReducer } from '@reduxjs/toolkit';
import { defaultTo, mapObjIndexed } from 'ramda';
import {
    GET_JSON_DATA_REQUEST,
    SET_ATTRIBUTE_TYPE,
    SET_COLUMNS, SET_RECOMMENDED_DATATYPES_TO_COLUMNS,
    SET_ROWS
} from './const';
import { VEGA_DATA_TYPES } from '../vegaEncoding/const';
import { getRecommendedDatatype } from './utils';

export const sourceDataInitialState = {
    currentDatasetPath: '',
    attributes: [],
    attributesTypes: {},
    rows: []
};

export const SOURCE_DATA_REDUCER_NAME = 'sourceDataReducer';
export const sourceDataReducer = createReducer(sourceDataInitialState, (builder) => {
    builder
        .addCase(GET_JSON_DATA_REQUEST, (state, { url }) => {
            state.currentDatasetPath = url;
        })
        .addCase(SET_COLUMNS, (state, { columnsNames }) => {
            state.attributes = columnsNames;
            state.attributesTypes = columnsNames.reduce((acc, name) => ({
                ...acc,
                [name]: VEGA_DATA_TYPES.NOMINAL
            }), {});
        })
        .addCase(SET_ROWS, (state, { rows }) => {
            state.rows = rows;
        })
        .addCase(SET_RECOMMENDED_DATATYPES_TO_COLUMNS, (state) => {
            state.attributesTypes = mapObjIndexed((_, id) => getRecommendedDatatype(defaultTo({}, state.rows[0])[id]), state.attributesTypes);
        })
        .addCase(SET_ATTRIBUTE_TYPE, (state, { attributeId, newType }) => {
            state.attributesTypes[attributeId] = newType;
        });
});
