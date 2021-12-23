import { createSelector } from '@reduxjs/toolkit';
import {
    isNil, map, mergeRight
} from 'ramda';
import { VEGA_ENCODING_REDUCER_NAME } from './reducer';
import { FIELDS_TYPES } from './const';
import { attributesTypesSelector } from '../sourceData/selectors';

export const vegaEncodingSelector = (state) => state[VEGA_ENCODING_REDUCER_NAME];

export const encodingFieldsSelector = createSelector(
    vegaEncodingSelector,
    (vegaEncoding) => vegaEncoding[FIELDS_TYPES.ENCODING]
);

export const marksFieldsSelector = createSelector(
    vegaEncodingSelector,
    (vegaEncoding) => vegaEncoding[FIELDS_TYPES.MARKS]
);

export const fieldsAndTheirTypesSelector = createSelector(
    encodingFieldsSelector,
    marksFieldsSelector,
    attributesTypesSelector,
    (encodingFields, marksFields, attributesTypes) => map((id) => {
        if (isNil(id)) {
            return null;
        }
        return ({
            id,
            type: attributesTypes[id]
        });
    }, mergeRight(encodingFields, marksFields))
);
