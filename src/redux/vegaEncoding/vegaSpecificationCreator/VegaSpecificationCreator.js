import * as vl from 'vega-lite-api';
import { isNil } from 'ramda';
import { AGGREGATE_ATTRIBUTES_TYPES, ENCODING_FIELDS_TO_CHANNEL_MAPPING } from '../const';

class VegaSpecificationCreator {
    constructor(dataSpecification = { name: 'table' }, mark = 'point', autosize = 'pad') {
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

    isNoEncodedChannels() {
        return this.encodings.length === 0;
    }

    loadEncodingChannels(fieldsMapping) {
        const notNullEncodingChannels = Object.entries(fieldsMapping)
            .filter(([, field]) => !isNil(field?.id));

        notNullEncodingChannels.forEach(([channelName, { id, type }]) => {
            if (Object.values(AGGREGATE_ATTRIBUTES_TYPES).includes(id)) {
                this.loadEncodingChannelWithAggregateId(id, ENCODING_FIELDS_TO_CHANNEL_MAPPING[channelName]);
            }
            else {
                this.loadEncodingChannel(id, type, ENCODING_FIELDS_TO_CHANNEL_MAPPING[channelName]);
            }
        });
    }

    loadEncodingChannelWithAggregateId(id, channel) {
        this.encodings.push(channel[id]());
    }

    loadEncodingChannel(id, type, channel) {
        this.encodings.push(channel.field(id).type(type));
    }
}

export default VegaSpecificationCreator;
