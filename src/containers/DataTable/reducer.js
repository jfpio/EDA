import { createReducer } from '@reduxjs/toolkit';
import { SET_COLUMNS } from './const';

const initialState = {
    columns: ['a', 'b']
};

export const DATATABLE_REDUCER_NAME = 'datatableReducer';
export const datatableReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_COLUMNS, (state, action) => {
            state.columns = action.columnsNames;
        });
});
