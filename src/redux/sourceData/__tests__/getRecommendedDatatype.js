import { getRecommendedDatatype } from '../utils';
import { VEGA_DATA_TYPES } from '../../vegaEncoding/const';

describe('getRecommendedDatatype should return correct vega datatype', () => {
    it('return quantitative if value is number', () => {
        expect(getRecommendedDatatype('123')).toEqual(VEGA_DATA_TYPES.QUANTITATIVE);
        expect(getRecommendedDatatype(123)).toEqual(VEGA_DATA_TYPES.QUANTITATIVE);
    });
    it('return temporal if value is number', () => {
        expect(getRecommendedDatatype('Thu, 01 Jan 1970 00:00:00 GMT')).toEqual(VEGA_DATA_TYPES.TEMPORAL);
    });
    it('return nominal if value is string with letters', () => {
        expect(getRecommendedDatatype('asdfzxcv')).toEqual(VEGA_DATA_TYPES.NOMINAL);
    });
});
