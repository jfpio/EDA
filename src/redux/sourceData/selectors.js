import { createSelector } from '@reduxjs/toolkit';
import { props } from 'ramda';
import { SOURCE_DATA_REDUCER_NAME } from './reducer';

export const datatableSelector = (state) => state[SOURCE_DATA_REDUCER_NAME];

export const datatableColumnsNames = createSelector(
    datatableSelector,
    (datatableReducer) => datatableReducer.columns
);

export const datatableRowsByColumnNames = createSelector(
    datatableSelector,
    datatableColumnsNames,
    (datatableReducer, datatableColumnsNames) => datatableReducer.rows.map((row) => props(datatableColumnsNames, row))
);
