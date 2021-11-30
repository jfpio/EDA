import { SET_FIELD } from './const';

export const setField = (fieldId, attributeId) => ({
    type: SET_FIELD,
    fieldId,
    attributeId
});
