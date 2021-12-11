import { createSelector } from '@reduxjs/toolkit';
import { VEGA_ENCODING_REDUCER_NAME } from './reducer';
import { ENCODING_FIELDS } from './const';

export const vegaEncodingSelector = (state) => state[VEGA_ENCODING_REDUCER_NAME];

export const xFieldSelector = createSelector(
    vegaEncodingSelector,
    (chartConfig) => chartConfig[ENCODING_FIELDS.X]
);

export const yFieldSelector = createSelector(
    vegaEncodingSelector,
    (chartConfig) => chartConfig[ENCODING_FIELDS.Y]
);

