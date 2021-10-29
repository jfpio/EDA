import { isNil } from 'ramda';

export const fetchColumnsAndRowsFromJSON = (json) => {
    if (isNil(json) || json.length === 0 || json[0].length === 0) {
        return { columns: [], rows: [] };
    }

    return {
        columns: Object.keys(json[0]),
        rows: json
    };
};
