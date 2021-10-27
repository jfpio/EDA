import { SET_COLUMNS } from './const';

export const setColumns = (columnsNames) => ({
    type: SET_COLUMNS,
    columnsNames
});
