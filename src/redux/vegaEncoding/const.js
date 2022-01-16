import * as vl from 'vega-lite-api';

export const SET_FIELD = 'vegaEncoding/SET_FIELD';
export const ENCODING_FIELDS = {
    X: 'X',
    Y: 'Y',
    ROW: 'ROW',
    COLUMN: 'COLUMN'
};

export const MARKS_FIELDS = {
    SIZE: 'SIZE',
    COLOR: 'COLOR',
    SHAPE: 'SHAPE',
    DETAIL: 'DETAIL',
    TEXT: 'TEXT'
};

export const VEGA_DATA_TYPES = {
    NOMINAL: 'nominal',
    ORDINAL: 'ordinal',
    QUANTITATIVE: 'quantitative',
    TEMPORAL: 'temporal'
};

export const FIELDS_TYPES = {
    ENCODING: 'encodingFields',
    MARKS: 'marks'
};

export const AGGREGATE_ATTRIBUTES_TYPES = {
    COUNT: 'count'
};

export const AGGREGATE_ATTRIBUTES_MAPPING = {
    [AGGREGATE_ATTRIBUTES_TYPES.COUNT]: vl.count(),
    [AGGREGATE_ATTRIBUTES_TYPES.AVERAGE]: vl.average()
};

export const ENCODING_FIELDS_TO_CHANNEL_MAPPING = {
    [ENCODING_FIELDS.X]: vl.x(),
    [ENCODING_FIELDS.Y]: vl.y(),
    [ENCODING_FIELDS.ROW]: vl.row(),
    [ENCODING_FIELDS.COLUMN]: vl.column(),
    [MARKS_FIELDS.SIZE]: vl.size(),
    [MARKS_FIELDS.COLOR]: vl.color(),
    [MARKS_FIELDS.SHAPE]: vl.shape(),
    [MARKS_FIELDS.DETAIL]: vl.detail(),
    [MARKS_FIELDS.TEXT]: vl.text()
};
