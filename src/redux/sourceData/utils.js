import { isNil } from 'ramda';
import { VEGA_DATA_TYPES } from '../vegaEncoding/const';

export const fetchColumnsAndRowsFromJSON = (json) => {
    if (isNil(json) || json.length === 0 || json[0].length === 0) {
        return { columns: [], rows: [] };
    }

    return {
        columns: Object.keys(json[0]),
        rows: json
    };
};

export const getRecommendedDatatype = (value) => {
    if (Number(value)) {
        return VEGA_DATA_TYPES.QUANTITATIVE;
    }
    if (!Number.isNaN(Date.parse(value))) {
        return VEGA_DATA_TYPES.TEMPORAL;
    }
    return VEGA_DATA_TYPES.NOMINAL;
};
