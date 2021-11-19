import { createSelector } from '@reduxjs/toolkit';
import { CHART_CONFIG_REDUCER_NAME } from './reducer';
import { ENCODING_FIELDS } from './const';

export const chartConfigSelector = (state) => state[CHART_CONFIG_REDUCER_NAME];

export const xFieldSelector = createSelector(
    chartConfigSelector,
    (chartConfig) => chartConfig[ENCODING_FIELDS.X]
);

export const yFieldSelector = createSelector(
    chartConfigSelector,
    (chartConfig) => chartConfig[ENCODING_FIELDS.Y]
);

