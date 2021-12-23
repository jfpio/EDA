import * as vl from 'vega-lite-api';

class VegaSpecificationCreator {
    constructor(dataSpecification = { name: 'table' }, mark = 'circle', autosize = 'pad') {
        this.dataSpecification = dataSpecification;
        this.autosize = autosize;
        this.mark = mark;

        this.encodings = [];
    }

    getVegaSpecification() {
        return vl
            .data(this.dataSpecification)
            .mark(this.mark)
            .encode(...this.getEncodingChannels())
            .autosize(this.autosize)
            .toSpec();
    }

    getEncodingChannels() {
        if (this.encodings.length === 0) {
            return [{}];
        }
        return this.encodings;
    }

    loadEncodingChannel(id, type, channel) {
        this.encodings.push(channel.field(id).type(type));
    }
}

export default VegaSpecificationCreator;
