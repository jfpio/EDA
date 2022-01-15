import { createSelector } from '@reduxjs/toolkit';
import {
    pipe, props, without
} from 'ramda';
import { SOURCE_DATA_REDUCER_NAME } from './reducer';

export const sourceDataSelector = (state) => state[SOURCE_DATA_REDUCER_NAME];

export const currentDatasetPathSelector = createSelector(
    sourceDataSelector,
    (sourceDataReducer) => sourceDataReducer.currentDatasetPath
);

export const attributesSelector = createSelector(
    sourceDataSelector,
    (sourceDataReducer) => sourceDataReducer.attributes
);

export const rowsSelector = createSelector(
    sourceDataSelector,
    // Without deepcloning the error occurs on the vega component
    (sourceDataReducer) => pipe(JSON.stringify, JSON.parse)(sourceDataReducer.rows)
);

export const visibleColumnsNamesSelector = createSelector(
    sourceDataSelector,
    (sourceDataReducer) => sourceDataReducer.visibleColumns
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
    (sourceDataReducer) => sourceDataReducer.attributesTypes
);

export const attributesEntries = createSelector(
    sourceDataSelector,
    (sourceDataReducer) => Object.entries(sourceDataReducer.attributesTypes)
);
