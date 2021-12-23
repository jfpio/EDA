import * as vl from 'vega-lite-api';
import VegaSpecificationCreator from '../VegaSpecificationCreator';
import { ENCODING_FIELDS, MARKS_FIELDS, VEGA_DATA_TYPES } from '../../../redux/vegaEncoding/const';

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
        const specificationCreator = new VegaSpecificationCreator({ name: 'table' },
            'circle',
            'pad');
        expect(specificationCreator.getVegaSpecification()).toStrictEqual({ ...baseSpecification });
    });

    it('load encoding channel', () => {
        const specificationCreator = new VegaSpecificationCreator({ name: 'table' },
            'circle',
            'pad');
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
    it.each([
        [ENCODING_FIELDS.X, 'x'],
        [ENCODING_FIELDS.Y, 'y'],
        [ENCODING_FIELDS.COLUMN, 'column'],
        [ENCODING_FIELDS.ROW, 'row'],
        [MARKS_FIELDS.COLOR, 'color'],
        [MARKS_FIELDS.SIZE, 'size'],
        [MARKS_FIELDS.SHAPE, 'shape'],
        [MARKS_FIELDS.TEXT, 'text'],
        [MARKS_FIELDS.DETAIL, 'detail']
    ])('load %s encoding channel', (field, channel) => {
        const specificationCreator = new VegaSpecificationCreator({ name: 'table' },
            'circle',
            'pad');
        specificationCreator.loadEncodingChannels({
            [field]: {
                id: 'budget',
                type: VEGA_DATA_TYPES.NOMINAL
            }
        });

        const expectedSchema = {
            ...baseSpecification,
            encoding: {
                [channel]: { field: 'budget', type: 'nominal' }
            }
        };
        expect(specificationCreator.getVegaSpecification()).toStrictEqual(expectedSchema);
    });
});
