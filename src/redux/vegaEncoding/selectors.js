import { createSelector } from '@reduxjs/toolkit';
import { VEGA_ENCODING_REDUCER_NAME } from './reducer';
import { FIELDS_TYPES } from './const';

export const vegaEncodingSelector = (state) => state[VEGA_ENCODING_REDUCER_NAME];

export const encodingFieldsSelector = createSelector(
    vegaEncodingSelector,
    (vegaEncoding) => vegaEncoding[FIELDS_TYPES.ENCODING]
);

export const marksFieldsSelector = createSelector(
    vegaEncodingSelector,
    (vegaEncoding) => vegaEncoding[FIELDS_TYPES.MARKS]
);
