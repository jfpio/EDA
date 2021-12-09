import { createSelector } from '@reduxjs/toolkit';
import { props, values, without } from 'ramda';
import { SOURCE_DATA_REDUCER_NAME } from './reducer';

export const sourceDataSelector = (state) => state[SOURCE_DATA_REDUCER_NAME];

export const columnsNamesSelector = createSelector(
    sourceDataSelector,
    (datatableReducer) => datatableReducer.columns
);

export const rowsSelector = createSelector(
    sourceDataSelector,
    (datatableReducer) => datatableReducer.rows
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
    columnsNamesSelector,
    visibleColumnsNamesSelector,
    (columnNames, visibleColumnsNames) => without(visibleColumnsNames, columnNames)
);

export const attributesSelector = createSelector(
    sourceDataSelector,
    (datatableReducer) => values(datatableReducer.attributes)
);
