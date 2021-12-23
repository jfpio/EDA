import * as vl from 'vega-lite-api';
import VegaSpecificationCreator from '../VegaSpecificationCreator';
import { VEGA_DATA_TYPES } from '../../../redux/vegaEncoding/const';

describe('VegaSpecificationCreator creates vega specification from parameters', () => {
    const baseSpecification = {
        $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
        autosize: 'pad',
        mark: {
            type: 'circle'
        },
        encoding: {},
        data: { name: 'table' }
    };

    it('returns proper specification for 0 encoding channels', () => {
        const specificationCreator = new VegaSpecificationCreator();
        expect(specificationCreator.getVegaSpecification()).toStrictEqual({ ...baseSpecification });
    });

    it('load encoding channel', () => {
        const specificationCreator = new VegaSpecificationCreator();
        specificationCreator.loadEncodingChannel(
            'names',
            VEGA_DATA_TYPES.ORDINAL,
            vl.x()
        );
        expect(specificationCreator.getVegaSpecification()).toStrictEqual(
            {
                ...baseSpecification,
                encoding: {
                    x: { field: 'names', type: VEGA_DATA_TYPES.ORDINAL }
                }
            }
        );
    });
    it('load multiple encoding channel', () => {
        const specificationCreator = new VegaSpecificationCreator();
        specificationCreator.loadEncodingChannel(
            'names',
            VEGA_DATA_TYPES.ORDINAL,
            vl.x()
        );
        specificationCreator.loadEncodingChannel(
            'budget',
            VEGA_DATA_TYPES.QUANTITATIVE,
            vl.y()
        );
        expect(specificationCreator.getVegaSpecification()).toStrictEqual(
            {
                ...baseSpecification,
                encoding: {
                    x: { field: 'names', type: 'ordinal' },
                    y: { field: 'budget', type: 'quantitative' }
                }
            }
        );
    });
});
