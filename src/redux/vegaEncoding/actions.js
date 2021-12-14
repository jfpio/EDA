import { SET_FIELD } from './const';

export const setField = (fieldType, fieldId, attributeId) => ({
    type: SET_FIELD,
    fieldType,
    fieldId,
    attributeId
});
