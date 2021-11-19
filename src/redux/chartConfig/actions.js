import { SET_FIELD } from './const';

export const setField = (field, attributeName) => ({
    type: SET_FIELD,
    field,
    attributeName
});
