import { createSelector } from '@reduxjs/toolkit';
import {
    pipe, props, without
} from 'ramda';
import { SOURCE_DATA_REDUCER_NAME } from './reducer';

export const sourceDataSelector = (state) => state[SOURCE_DATA_REDUCER_NAME];

export const attributesSelector = createSelector(
    sourceDataSelector,
    (datatableReducer) => datatableReducer.attributes
);

export const rowsSelector = createSelector(
    sourceDataSelector,
    // Without deepcloning the error occurs on the vega component
    (datatableReducer) => pipe(JSON.stringify, JSON.parse)(datatableReducer.rows)
);

export const visibleColumnsNamesSelector = createSelector(
    sourceDataSelector,
    (datatableReducer) => datatableReducer.visibleColumns
);

export const rowsByVisibleColumnNamesSelector = createSelector(
    rowsSelector,
    visibleColumnsNamesSelector,
    (rows, datatableColumnsNames) => rows.map((row) => props(datatableColumnsNames, row))
);

export const invisibleColumnsNamesSelector = createSelector(
    attributesSelector,
    visibleColumnsNamesSelector,
    (columnNames, visibleColumnsNames) => without(visibleColumnsNames, columnNames)
);

export const attributesTypesSelector = createSelector(
    sourceDataSelector,
    (datatableReducer) => datatableReducer.attributesTypes
);

export const attributesEntries = createSelector(
    sourceDataSelector,
    (datatableReducer) => Object.entries(datatableReducer.attributesTypes)
);
