import { createSelector } from '@reduxjs/toolkit';
import { WORKING_SPACE_REDUCER_NAME } from './reducer';

export const workingSpaceSelector = (state) => state[WORKING_SPACE_REDUCER_NAME];

export const isDatatableViewSelector = createSelector(
    workingSpaceSelector,
    (datatableReducer) => datatableReducer.dataTableView
);

export const isChartView = createSelector(
    isDatatableViewSelector,
    (isDataTableView) => !isDataTableView
);
