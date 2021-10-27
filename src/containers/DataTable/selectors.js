import { createSelector } from '@reduxjs/toolkit';
import { DATATABLE_REDUCER_NAME } from './reducer';

export const datatableSelector = (state) => state[DATATABLE_REDUCER_NAME];

export const datatableColumnsNames = createSelector(
    datatableSelector,
    (datatableReducer) => datatableReducer.columns
);
