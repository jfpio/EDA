import VegaSpecificationCreator from '../VegaSpecificationCreator';

describe('VegaSpecificationCreator creates vega specification from parameters', () => {
    const specificationCreator = new VegaSpecificationCreator(
        { name: 'table' },
        'circle',
        'pad'
    );

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
        expect(specificationCreator.getVegaSpecification()).toStrictEqual({ ...baseSpecification });
    });
});
