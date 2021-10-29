import { createSelector } from '@reduxjs/toolkit';
import { props, without } from 'ramda';
import { SOURCE_DATA_REDUCER_NAME } from './reducer';

export const sourceDataSelector = (state) => state[SOURCE_DATA_REDUCER_NAME];

export const columnsNamesSelector = createSelector(
    sourceDataSelector,
    (datatableReducer) => datatableReducer.columns
);

export const rowsByColumnNamesSelector = createSelector(
    sourceDataSelector,
    columnsNamesSelector,
    (datatableReducer, datatableColumnsNames) => datatableReducer.rows.map((row) => props(datatableColumnsNames, row))
);

export const visibleColumnsNamesSelector = createSelector(
    sourceDataSelector,
    (datatableReducer) => datatableReducer.visibleColumns
);

export const invisibleColumnsNamesSelector = createSelector(
    columnsNamesSelector,
    visibleColumnsNamesSelector,
    (columnNames, visibleColumnsNames) => without(visibleColumnsNames, columnNames)
);
